export function pages(glyphs: Array<{ data: { page?: number } }>): Float32Array {
  const pages = new Float32Array(glyphs.length * 4);
  let i = 0;

  glyphs.forEach((glyph) => {
    const id = glyph.data.page || 0;
    pages[i++] = id;
    pages[i++] = id;
    pages[i++] = id;
    pages[i++] = id;
  });

  return pages;
}

export function uvs(
  glyphs: Array<{ data: { x: number, y: number, width: number, height: number } }>,
  texWidth: number,
  texHeight: number,
  flipY: boolean
): Float32Array {
  const uvs = new Float32Array(glyphs.length * 4 * 2);
  let i = 0;

  glyphs.forEach((glyph) => {
    const bitmap = glyph.data;
    const bw = bitmap.x + bitmap.width;
    const bh = bitmap.y + bitmap.height;

    // top left position
    let u0 = bitmap.x / texWidth;
    let v1 = bitmap.y / texHeight;
    let u1 = bw / texWidth;
    let v0 = bh / texHeight;

    if (flipY) {
      v1 = (texHeight - bitmap.y) / texHeight;
      v0 = (texHeight - bh) / texHeight;
    }

    // BL
    uvs[i++] = u0;
    uvs[i++] = v1;
    // TL
    uvs[i++] = u0;
    uvs[i++] = v0;
    // TR
    uvs[i++] = u1;
    uvs[i++] = v0;
    // BR
    uvs[i++] = u1;
    uvs[i++] = v1;
  });

  return uvs;
}

export function positions(
  glyphs: Array<{ data: { xoffset: number, yoffset: number, width: number, height: number }, position: [number, number] }>
): Float32Array {
  const positions = new Float32Array(glyphs.length * 4 * 2);
  let i = 0;

  glyphs.forEach((glyph) => {
    const bitmap = glyph.data;

    // bottom left position
    const x = glyph.position[0] + bitmap.xoffset;
    const y = glyph.position[1] + bitmap.yoffset;

    // quad size
    const w = bitmap.width;
    const h = bitmap.height;

    // BL
    positions[i++] = x;
    positions[i++] = y;
    // TL
    positions[i++] = x;
    positions[i++] = y + h;
    // TR
    positions[i++] = x + w;
    positions[i++] = y + h;
    // BR
    positions[i++] = x + w;
    positions[i++] = y;
  });

  return positions;
}
