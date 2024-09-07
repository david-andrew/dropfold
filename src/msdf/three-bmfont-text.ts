import { BufferGeometry, BufferAttribute, Sphere, Box3, ShaderMaterialParameters } from 'three';
import createLayout, { BmFontLayoutOptions } from 'layout-bmfont-text';
import createIndices from 'quad-indices';
import * as vertices from './vertices';
import * as utils from './utils';

interface TextGeometryOptions extends BmFontLayoutOptions {
  font?: any;
  flipY?: boolean;
  multipage?: boolean;
    text?: string;
    align?: string;
}

export class TextGeometry extends BufferGeometry {
  private _opt: TextGeometryOptions;
  public layout: any;
  public visibleGlyphs: any[];

  constructor(opt: TextGeometryOptions | string) {
    super();
    if (typeof opt === 'string') {
      opt = { text: opt };
    }

    this._opt = { ...opt };

    // Initial setup
    if (opt) {
      this.update(opt);
    }
  }

  update(opt: TextGeometryOptions | string) {
    if (typeof opt === 'string') {
      opt = { text: opt };
    }

    opt = { ...this._opt, ...opt };

    if (!opt.font) {
      throw new TypeError('must specify a { font } in options');
    }

    this.layout = createLayout(opt);

    const flipY = opt.flipY !== false;

    const font = opt.font;
    const texWidth = font.common.scaleW;
    const texHeight = font.common.scaleH;

    const glyphs = this.layout.glyphs.filter((glyph: any) => {
      const bitmap = glyph.data;
      return bitmap.width * bitmap.height > 0;
    });

    this.visibleGlyphs = glyphs;

    const positions = vertices.positions(glyphs);
    const uvs = vertices.uvs(glyphs, texWidth, texHeight, flipY);
    const indices = createIndices([], {
      clockwise: true,
      type: 'uint16',
      count: glyphs.length
    });

    this.setIndex(indices);
    this.setAttribute('position', new BufferAttribute(positions, 2));
    this.setAttribute('uv', new BufferAttribute(uvs, 2));

    if (!opt.multipage && this.getAttribute('page')) {
      this.deleteAttribute('page');
    } else if (opt.multipage) {
      const pages = vertices.pages(glyphs);
      this.setAttribute('page', new BufferAttribute(pages, 1));
    }
  }

  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }

    const positions = this.attributes.position.array as Float32Array;
    const itemSize = this.attributes.position.itemSize;

    if (!positions || !itemSize || positions.length < 2) {
      this.boundingSphere.radius = 0;
      this.boundingSphere.center.set(0, 0, 0);
      return;
    }

    utils.computeSphere(positions, this.boundingSphere);
    
    if (isNaN(this.boundingSphere.radius)) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): ' +
        'Computed radius is NaN. The "position" attribute likely has NaN values.');
    }
  }

  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }

    const positions = this.attributes.position.array as Float32Array;
    const itemSize = this.attributes.position.itemSize;

    if (!positions || !itemSize || positions.length < 2) {
      this.boundingBox.makeEmpty();
      return;
    }

    utils.computeBox(positions, this.boundingBox);
  }
}

export function createTextGeometry(opt: TextGeometryOptions | string) {
  return new TextGeometry(opt);
}



// import * as THREE from 'three';
import { ShaderMaterial, Texture, Color, GLSL3 } from 'three';

type MSDFShaderOptions = {
  map?: Texture;
  color?: string | number;
  precision?: string;
  opacity?: number;
  negate?: boolean;
  alphaTest?: number;
} & Partial<ShaderMaterialParameters>;

export function createMSDFShader(opt: MSDFShaderOptions = {}): ShaderMaterial {
  const opacity = typeof opt.opacity === 'number' ? opt.opacity : 1;
  const alphaTest = typeof opt.alphaTest === 'number' ? opt.alphaTest : 0.0001;
  const precision = opt.precision || 'highp';
  const color = opt.color;
  const map = opt.map || new Texture();
  const negate = typeof opt.negate === 'boolean' ? opt.negate : true;

  // Remove unused options to satisfy r73
  const { map: _, color: __, precision: ___, opacity: ____, negate: _____, ...remainingOpts } = opt;

  return new ShaderMaterial({
    uniforms: {
      opacity: { value: opacity },
      map: { value: map },
      color: { value: new Color(color) }
    },
    vertexShader: `
        #define SHADER_TYPE RawShaderMaterial
        #define SHADER_NAME

        in vec2 uv;
        in vec4 position;
        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;

        out vec2 vUv; // 'varying' becomes 'out' in the vertex shader

        void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * position;
        }
    `,
    fragmentShader: `
        precision highp float;

        uniform float opacity;
        uniform vec3 color;
        uniform sampler2D map;

        in vec2 vUv; // 'varying' becomes 'in' in the fragment shader

        out vec4 fragColor; // Required to specify the output variable in GLSL 3.0

        float median(float r, float g, float b) {
        return max(min(r, g), min(max(r, g), b));
        }

        void main() {
        vec3 samp = texture(map, vUv).rgb;
        float sigDist = median(samp.r, samp.g, samp.b) - 0.5;
        float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);
        fragColor = vec4(color.xyz, (1.0-alpha) * opacity); // Output to 'fragColor'
        }
    `,
    glslVersion: GLSL3,

    ...remainingOpts
  });
}
