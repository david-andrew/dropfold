var su=Object.defineProperty;var ou=(i,t,e)=>t in i?su(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Z=(i,t,e)=>ou(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="167",Un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},au=0,Ua=1,lu=2,sc=1,cu=2,xn=3,un=0,we=1,Ze=2,Bn=0,Ri=1,Na=2,Oa=3,Fa=4,uu=5,Jn=100,hu=101,du=102,fu=103,pu=104,mu=200,gu=201,_u=202,vu=203,go=204,_o=205,xu=206,yu=207,Mu=208,Su=209,Eu=210,bu=211,Tu=212,Au=213,wu=214,Cu=0,Ru=1,Pu=2,as=3,Lu=4,Du=5,Iu=6,Uu=7,oc=0,Nu=1,Ou=2,zn=0,Fu=1,Bu=2,zu=3,Hu=4,ku=5,Gu=6,Vu=7,ac=300,Ii=301,Ui=302,vo=303,xo=304,xs=306,yo=1e3,ti=1001,Mo=1002,Ve=1003,Wu=1004,yr=1005,$e=1006,Is=1007,ei=1008,En=1009,lc=1010,cc=1011,sr=1012,ra=1013,ri=1014,yn=1015,pr=1016,sa=1017,oa=1018,Ni=1020,uc=35902,hc=1021,dc=1022,Qe=1023,fc=1024,pc=1025,Pi=1026,Oi=1027,mc=1028,aa=1029,gc=1030,la=1031,ca=1033,Jr=33776,Qr=33777,ts=33778,es=33779,So=35840,Eo=35841,bo=35842,To=35843,Ao=36196,wo=37492,Co=37496,Ro=37808,Po=37809,Lo=37810,Do=37811,Io=37812,Uo=37813,No=37814,Oo=37815,Fo=37816,Bo=37817,zo=37818,Ho=37819,ko=37820,Go=37821,ns=36492,Vo=36494,Wo=36495,_c=36283,Xo=36284,qo=36285,Yo=36286,Xu=3200,qu=3201,Yu=0,ju=1,On="",on="srgb",Gn="srgb-linear",ua="display-p3",ys="display-p3-linear",ls="linear",ee="srgb",cs="rec709",us="p3",ui=7680,Ba=519,Ku=512,Zu=513,$u=514,vc=515,Ju=516,Qu=517,th=518,eh=519,jo=35044,za="300 es",Mn=2e3,hs=2001;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ha=1234567;const tr=Math.PI/180,or=180/Math.PI;function cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function ha(i,t){return(i%t+t)%t}function nh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ih(i,t,e){return i!==t?(e-i)/(t-i):0}function er(i,t,e){return(1-e)*i+e*t}function rh(i,t,e,n){return er(i,t,1-Math.exp(-e*n))}function sh(i,t=1){return t-Math.abs(ha(i,t*2)-t)}function oh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ah(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ch(i,t){return i+Math.random()*(t-i)}function uh(i){return i*(.5-Math.random())}function hh(i){i!==void 0&&(Ha=i);let t=Ha+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dh(i){return i*tr}function fh(i){return i*or}function ph(i){return(i&i-1)===0&&i!==0}function mh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _h(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xc={DEG2RAD:tr,RAD2DEG:or,generateUUID:cn,clamp:ge,euclideanModulo:ha,mapLinear:nh,inverseLerp:ih,lerp:er,damp:rh,pingpong:sh,smoothstep:oh,smootherstep:ah,randInt:lh,randFloat:ch,randFloatSpread:uh,seededRandom:hh,degToRad:dh,radToDeg:fh,isPowerOfTwo:ph,ceilPowerOfTwo:mh,floorPowerOfTwo:gh,setQuaternionFromProperEuler:_h,normalize:Jt,denormalize:Je};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],T=r[1],x=r[4],E=r[7],U=r[2],R=r[5],A=r[8];return s[0]=o*_+a*T+l*U,s[3]=o*f+a*x+l*R,s[6]=o*p+a*E+l*A,s[1]=c*_+u*T+h*U,s[4]=c*f+u*x+h*R,s[7]=c*p+u*E+h*A,s[2]=d*_+m*T+g*U,s[5]=d*f+m*x+g*R,s[8]=d*p+m*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=e*h+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Us.makeScale(t,e)),this}rotate(t){return this.premultiply(Us.makeRotation(-t)),this}translate(t,e){return this.premultiply(Us.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Ht;function yc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){const i=ds("canvas");return i.style.display="block",i}const ka={};function Li(i){i in ka||(ka[i]=!0,console.warn(i))}function xh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ga=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Va=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[Gn]:{transfer:ls,primaries:cs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[on]:{transfer:ee,primaries:cs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ys]:{transfer:ls,primaries:us,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Va),fromReference:i=>i.applyMatrix3(Ga)},[ua]:{transfer:ee,primaries:us,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Va),fromReference:i=>i.applyMatrix3(Ga).convertLinearToSRGB()}},yh=new Set([Gn,ys]),Zt={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wi[t].toReference,r=Wi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wi[i].primaries},getTransfer:function(i){return i===On?ls:Wi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Wi[t].luminanceCoefficients)}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class Mh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=ds("canvas")),hi.width=t.width,hi.height=t.height;const n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sh=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Os(r[o].image)):s.push(Os(r[o]))}else s=Os(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Ue extends ai{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=ti,r=ti,s=$e,o=ei,a=Qe,l=En,c=Ue.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=cn(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=ac;Ue.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,r=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(m+1)/2,U=(p+1)/2,R=(u+d)/4,A=(h+_)/4,N=(g+f)/4;return x>E&&x>U?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=A/n):E>U?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=N/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=A/s,r=N/s),this.set(n,r,s,e),this}let T=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ue(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends bh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sc extends Ue{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends Ue{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let f=1-a;const p=l*d+c*m+u*g+h*_,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const U=Math.sqrt(x),R=Math.atan2(U,p*T);f=Math.sin(f*R)/U,a=Math.sin(a*R)/U}const E=a*T;if(l=l*f+d*E,c=c*f+m*E,u=u*f+g*E,h=h*f+_*E,f===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-a*m,t[e+2]=c*g+u*m+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fs.copy(this).projectOnVector(t),this.sub(Fs)}reflect(t){return this.sub(Fs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new L,Wa=new Hn;class Vn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(s,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),Sr.subVectors(this.max,Xi),di.subVectors(t.a,Xi),fi.subVectors(t.b,Xi),pi.subVectors(t.c,Xi),Cn.subVectors(fi,di),Rn.subVectors(pi,fi),Xn.subVectors(di,pi);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Xn.z,Xn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Xn.z,0,-Xn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Xn.y,Xn.x,0];return!Bs(e,di,fi,pi,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,di,fi,pi,Sr))?!1:(Er.crossVectors(Cn,Rn),e=[Er.x,Er.y,Er.z],Bs(e,di,fi,pi,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new L,new L,new L,new L,new L,new L,new L,new L],Ye=new L,Mr=new Vn,di=new L,fi=new L,pi=new L,Cn=new L,Rn=new L,Xn=new L,Xi=new L,Sr=new L,Er=new L,qn=new L;function Bs(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){qn.fromArray(i,s);const a=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=t.dot(qn),c=e.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ah=new Vn,qi=new L,zs=new L;class mr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(qi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(zs)),this.expandByPoint(qi.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new L,Hs=new L,br=new L,Pn=new L,ks=new L,Tr=new L,Gs=new L;class da{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Hs.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Hs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(br),a=Pn.dot(this.direction),l=-Pn.dot(br),c=Pn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Hs).addScaledVector(br,d),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,r,s){ks.subVectors(e,t),Tr.subVectors(n,t),Gs.crossVectors(ks,Tr);let o=this.direction.dot(Gs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const l=a*this.direction.dot(Tr.crossVectors(Pn,Tr));if(l<0)return null;const c=a*this.direction.dot(ks.cross(Pn));if(c<0||l+c>o)return null;const u=-a*Pn.dot(Gs);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(t,e,n,r,s,o,a,l,c,u,h,d,m,g,_,f){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,d,m,g,_,f)}set(t,e,n,r,s,o,a,l,c,u,h,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/mi.setFromMatrixColumn(t,0).length(),s=1/mi.setFromMatrixColumn(t,1).length(),o=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wh,t,Ch)}lookAt(t,e,n){const r=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Ln.crossVectors(n,Fe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Ln.crossVectors(n,Fe)),Ln.normalize(),Ar.crossVectors(Fe,Ln),r[0]=Ln.x,r[4]=Ar.x,r[8]=Fe.x,r[1]=Ln.y,r[5]=Ar.y,r[9]=Fe.y,r[2]=Ln.z,r[6]=Ar.z,r[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],T=n[3],x=n[7],E=n[11],U=n[15],R=r[0],A=r[4],N=r[8],M=r[12],y=r[1],P=r[5],X=r[9],z=r[13],k=r[2],G=r[6],w=r[10],I=r[14],O=r[3],J=r[7],tt=r[11],rt=r[15];return s[0]=o*R+a*y+l*k+c*O,s[4]=o*A+a*P+l*G+c*J,s[8]=o*N+a*X+l*w+c*tt,s[12]=o*M+a*z+l*I+c*rt,s[1]=u*R+h*y+d*k+m*O,s[5]=u*A+h*P+d*G+m*J,s[9]=u*N+h*X+d*w+m*tt,s[13]=u*M+h*z+d*I+m*rt,s[2]=g*R+_*y+f*k+p*O,s[6]=g*A+_*P+f*G+p*J,s[10]=g*N+_*X+f*w+p*tt,s[14]=g*M+_*z+f*I+p*rt,s[3]=T*R+x*y+E*k+U*O,s[7]=T*A+x*P+E*G+U*J,s[11]=T*N+x*X+E*w+U*tt,s[15]=T*M+x*z+E*I+U*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*m-n*l*m)+_*(+e*l*m-e*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+f*(+e*c*h-e*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+p*(-r*a*u-e*l*h+e*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],T=h*f*c-_*d*c+_*l*m-a*f*m-h*l*p+a*d*p,x=g*d*c-u*f*c-g*l*m+o*f*m+u*l*p-o*d*p,E=u*_*c-g*h*c+g*a*m-o*_*m-u*a*p+o*h*p,U=g*h*l-u*_*l-g*a*d+o*_*d+u*a*f-o*h*f,R=e*T+n*x+r*E+s*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=T*A,t[1]=(_*d*s-h*f*s-_*r*m+n*f*m+h*r*p-n*d*p)*A,t[2]=(a*f*s-_*l*s+_*r*c-n*f*c-a*r*p+n*l*p)*A,t[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*m-n*l*m)*A,t[4]=x*A,t[5]=(u*f*s-g*d*s+g*r*m-e*f*m-u*r*p+e*d*p)*A,t[6]=(g*l*s-o*f*s-g*r*c+e*f*c+o*r*p-e*l*p)*A,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*m+e*l*m)*A,t[8]=E*A,t[9]=(g*h*s-u*_*s-g*n*m+e*_*m+u*n*p-e*h*p)*A,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*m-e*a*m)*A,t[12]=U*A,t[13]=(u*_*r-g*h*r+g*n*d-e*_*d-u*n*f+e*h*f)*A,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*f-e*a*f)*A,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,g=s*h,_=o*u,f=o*h,p=a*h,T=l*c,x=l*u,E=l*h,U=n.x,R=n.y,A=n.z;return r[0]=(1-(_+p))*U,r[1]=(m+E)*U,r[2]=(g-x)*U,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(d+p))*R,r[6]=(f+T)*R,r[7]=0,r[8]=(g+x)*A,r[9]=(f-T)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const o=mi.set(r[4],r[5],r[6]).length(),a=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],je.copy(this);const c=1/s,u=1/o,h=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=h,je.elements[9]*=h,je.elements[10]*=h,e.setFromRotationMatrix(je),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Mn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let m,g;if(a===Mn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===hs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Mn){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(o-s),d=(e+t)*c,m=(n+r)*u;let g,_;if(a===Mn)g=(o+s)*h,_=-2*h;else if(a===hs)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new L,je=new qt,wh=new L(0,0,0),Ch=new L(1,1,1),Ln=new L,Ar=new L,Fe=new L,Xa=new qt,qa=new Hn;class bn{constructor(t=0,e=0,n=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class fa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rh=0;const Ya=new L,gi=new Hn,gn=new qt,wr=new L,Yi=new L,Ph=new L,Lh=new Hn,ja=new L(1,0,0),Ka=new L(0,1,0),Za=new L(0,0,1),$a={type:"added"},Dh={type:"removed"},_i={type:"childadded",child:null},Vs={type:"childremoved",child:null};class ze extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new L,e=new bn,n=new Hn,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new Ht}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Yi,wr,this.up):gn.lookAt(wr,Yi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(gn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($a),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($a),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,Ph),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ze.DEFAULT_UP=new L(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new L,_n=new L,Ws=new L,vn=new L,vi=new L,xi=new L,Ja=new L,Xs=new L,qs=new L,Ys=new L;class an{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ke.subVectors(t,e),r.cross(Ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ke.subVectors(r,e),_n.subVectors(n,e),Ws.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(_n),l=Ke.dot(Ws),c=_n.dot(_n),u=_n.dot(Ws),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static isFrontFacing(t,e,n,r){return Ke.subVectors(n,e),_n.subVectors(t,e),Ke.cross(_n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Ke.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;vi.subVectors(r,n),xi.subVectors(s,n),Xs.subVectors(t,n);const l=vi.dot(Xs),c=xi.dot(Xs);if(l<=0&&c<=0)return e.copy(n);qs.subVectors(t,r);const u=vi.dot(qs),h=xi.dot(qs);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(vi,o);Ys.subVectors(t,s);const m=vi.dot(Ys),g=xi.dot(Ys);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(xi,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Ja.subVectors(s,r),a=(h-u)/(h-u+(m-g)),e.copy(r).addScaledVector(Ja,a);const p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(vi,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=ha(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=js(o,s,t+1/3),this.g=js(o,s,t),this.b=js(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Zt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(ge(Ae.r*255,0,255))*65536+Math.round(ge(Ae.g*255,0,255))*256+Math.round(ge(Ae.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,r=Ae.g,s=Ae.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=on){Zt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,r=Ae.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Cr);const n=er(Dn.h,Cr.h,e),r=er(Dn.s,Cr.s,e),s=er(Dn.l,Cr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Bt;Bt.NAMES=Ec;let Ih=0;class Ms extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Ri,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Fi extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new L,Rr=new ht;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Li("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jo&&(t.usage=this.usage),t}}class bc extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tc extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uh=0;const ke=new qt,Ks=new ze,yi=new L,Be=new Vn,ji=new Vn,xe=new L;class Xe extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yc(t)?Tc:bc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Be.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Be.min,ji.min),Be.expandByPoint(xe),xe.addVectors(Be.max,ji.max),Be.expandByPoint(xe)):(Be.expandByPoint(ji.min),Be.expandByPoint(ji.max))}Be.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(t,c),xe.add(yi)),r=Math.max(r,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new L,l[N]=new L;const c=new L,u=new L,h=new L,d=new ht,m=new ht,g=new ht,_=new L,f=new L;function p(N,M,y){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),a[N].add(_),a[M].add(_),a[y].add(_),l[N].add(f),l[M].add(f),l[y].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,M=T.length;N<M;++N){const y=T[N],P=y.start,X=y.count;for(let z=P,k=P+X;z<k;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new L,E=new L,U=new L,R=new L;function A(N){U.fromBufferAttribute(r,N),R.copy(U);const M=a[N];x.copy(M),x.sub(U.multiplyScalar(U.dot(M))).normalize(),E.crossVectors(R,M);const P=E.dot(l[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,P)}for(let N=0,M=T.length;N<M;++N){const y=T[N],P=y.start,X=y.count;for(let z=P,k=P+X;z<k;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[m++]}return new We(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new qt,Yn=new da,Pr=new mr,tl=new L,Mi=new L,Si=new L,Ei=new L,Zs=new L,Lr=new L,Dr=new ht,Ir=new ht,Ur=new ht,el=new L,nl=new L,il=new L,Nr=new L,Or=new L;class Ie extends ze{constructor(t=new Xe,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Lr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Zs.fromBufferAttribute(h,t),o?Lr.addScaledVector(Zs,u):Lr.addScaledVector(Zs.sub(e),u))}e.add(Lr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Yn.copy(t.ray).recast(t.near),!(Pr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Pr,tl)===null||Yn.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(Qa.copy(s).invert(),Yn.copy(t.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],T=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let E=T,U=x;E<U;E+=3){const R=a.getX(E),A=a.getX(E+1),N=a.getX(E+2);r=Fr(this,p,t,n,c,u,h,R,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const T=a.getX(f),x=a.getX(f+1),E=a.getX(f+2);r=Fr(this,o,t,n,c,u,h,T,x,E),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],T=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let E=T,U=x;E<U;E+=3){const R=E,A=E+1,N=E+2;r=Fr(this,p,t,n,c,u,h,R,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const T=f,x=f+1,E=f+2;r=Fr(this,o,t,n,c,u,h,T,x,E),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Nh(i,t,e,n,r,s,o,a){let l;if(t.side===we?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===un,a),l===null)return null;Or.copy(a),Or.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:i}}function Fr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Mi),i.getVertexPosition(l,Si),i.getVertexPosition(c,Ei);const u=Nh(i,t,e,n,Mi,Si,Ei,Nr);if(u){r&&(Dr.fromBufferAttribute(r,a),Ir.fromBufferAttribute(r,l),Ur.fromBufferAttribute(r,c),u.uv=an.getInterpolation(Nr,Mi,Si,Ei,Dr,Ir,Ur,new ht)),s&&(Dr.fromBufferAttribute(s,a),Ir.fromBufferAttribute(s,l),Ur.fromBufferAttribute(s,c),u.uv1=an.getInterpolation(Nr,Mi,Si,Ei,Dr,Ir,Ur,new ht)),o&&(el.fromBufferAttribute(o,a),nl.fromBufferAttribute(o,l),il.fromBufferAttribute(o,c),u.normal=an.getInterpolation(Nr,Mi,Si,Ei,el,nl,il,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};an.getNormal(Mi,Si,Ei,h.normal),u.face=h}return u}class gr extends Xe{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function g(_,f,p,T,x,E,U,R,A,N,M){const y=E/A,P=U/N,X=E/2,z=U/2,k=R/2,G=A+1,w=N+1;let I=0,O=0;const J=new L;for(let tt=0;tt<w;tt++){const rt=tt*P-z;for(let St=0;St<G;St++){const Ct=St*y-X;J[_]=Ct*T,J[f]=rt*x,J[p]=k,c.push(J.x,J.y,J.z),J[_]=0,J[f]=0,J[p]=R>0?1:-1,u.push(J.x,J.y,J.z),h.push(St/A),h.push(1-tt/N),I+=1}}for(let tt=0;tt<N;tt++)for(let rt=0;rt<A;rt++){const St=d+rt+G*tt,Ct=d+rt+G*(tt+1),K=d+(rt+1)+G*(tt+1),nt=d+(rt+1)+G*tt;l.push(St,Ct,nt),l.push(Ct,K,nt),O+=6}a.addGroup(m,O,M),m+=O,d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const r in n)t[r]=n[r]}return t}function Oh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ac(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const pa={clone:Bi,merge:Pe};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Oh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wc extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new L,rl=new ht,sl=new ht;class Ge extends wc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,rl,sl),e.subVectors(sl,rl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,Ti=1;class zh extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ge(bi,Ti,t,e);r.layers=this.layers,this.add(r);const s=new Ge(bi,Ti,t,e);s.layers=this.layers,this.add(s);const o=new Ge(bi,Ti,t,e);o.layers=this.layers,this.add(o);const a=new Ge(bi,Ti,t,e);a.layers=this.layers,this.add(a);const l=new Ge(bi,Ti,t,e);l.layers=this.layers,this.add(l);const c=new Ge(bi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cc extends Ue{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hh extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Cc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gr(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Bn});s.uniforms.tEquirect.value=e;const o=new Ie(r,s),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=$e),new zh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const $s=new L,kh=new L,Gh=new Ht;class Nn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=$s.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gh.getNormalMatrix(t),r=this.coplanarPoint($s).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new mr,Br=new L;class Rc{constructor(t=new Nn,e=new Nn,n=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],T=r[13],x=r[14],E=r[15];if(n[0].setComponents(l-s,d-c,f-m,E-p).normalize(),n[1].setComponents(l+s,d+c,f+m,E+p).normalize(),n[2].setComponents(l+o,d+u,f+g,E+T).normalize(),n[3].setComponents(l-o,d-u,f-g,E-T).normalize(),n[4].setComponents(l-a,d-h,f-_,E-x).normalize(),e===Mn)n[5].setComponents(l+a,d+h,f+_,E+x).normalize();else if(e===hs)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Br.x=r.normal.x>0?t.max.x:t.min.x,Br.y=r.normal.y>0?t.max.y:t.min.y,Br.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Vh(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let m=0,g=d.length;m<g;m++){const _=d[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class _r extends Xe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const T=p*d-o;for(let x=0;x<c;x++){const E=x*h-s;g.push(E,-T,0),_.push(0,0,1),f.push(x/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const x=T+c*p,E=T+c*(p+1),U=T+1+c*(p+1),R=T+1+c*p;m.push(x,E,R),m.push(E,U,R)}this.setIndex(m),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:jh,alphatest_pars_fragment:Kh,aomap_fragment:Zh,aomap_pars_fragment:$h,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:td,beginnormal_vertex:ed,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:rd,clipping_planes_fragment:sd,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ad,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:ud,color_pars_vertex:hd,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:vd,emissivemap_pars_fragment:xd,colorspace_fragment:yd,colorspace_pars_fragment:Md,envmap_fragment:Sd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:bd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Od,envmap_vertex:Ad,fog_vertex:wd,fog_pars_vertex:Cd,fog_fragment:Rd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Ld,lightmap_pars_fragment:Dd,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Fd,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:Hd,lights_physical_fragment:kd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Vd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Kd,map_fragment:Zd,map_pars_fragment:$d,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphinstance_vertex:nf,morphcolor_vertex:rf,morphnormal_vertex:sf,morphtarget_pars_vertex:of,morphtarget_vertex:af,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:uf,normal_pars_vertex:hf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:vf,packing:xf,premultiplied_alpha_fragment:yf,project_vertex:Mf,dithering_fragment:Sf,dithering_pars_fragment:Ef,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:wf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Rf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:Df,skinnormal_vertex:If,specularmap_fragment:Uf,specularmap_pars_fragment:Nf,tonemapping_fragment:Of,tonemapping_pars_fragment:Ff,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:Hf,uv_pars_vertex:kf,uv_vertex:Gf,worldpos_vertex:Vf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:jf,cube_frag:Kf,depth_vert:Zf,depth_frag:$f,distanceRGBA_vert:Jf,distanceRGBA_frag:Qf,equirect_vert:tp,equirect_frag:ep,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:rp,meshbasic_frag:sp,meshlambert_vert:op,meshlambert_frag:ap,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:up,meshnormal_frag:hp,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:vp,points_frag:xp,shadow_vert:yp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:Ep},lt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},De={basic:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Pe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Pe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Pe([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Pe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Pe([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Pe([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Pe([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Pe([lt.lights,lt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};De.physical={uniforms:Pe([De.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const zr={r:0,b:0,g:0},Kn=new bn,bp=new qt;function Tp(i,t,e,n,r,s,o){const a=new Bt(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?e:t).get(x)),x}function _(T){let x=!1;const E=g(T);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(T,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===xs)?(u===void 0&&(u=new Ie(new gr(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Bi(De.backgroundCube.uniforms),vertexShader:De.backgroundCube.vertexShader,fragmentShader:De.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Kn.copy(x.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(Kn)),u.material.toneMapped=Zt.getTransfer(E.colorSpace)!==ee,(h!==E||d!==E.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ie(new _r(2,2),new en({name:"BackgroundMaterial",uniforms:Bi(De.background.uniforms),vertexShader:De.background.vertexShader,fragmentShader:De.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(E.colorSpace)!==ee,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,x){T.getRGB(zr,Ac(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:f}}function Ap(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(y,P,X,z,k){let G=!1;const w=h(z,X,P);s!==w&&(s=w,c(s.object)),G=m(y,z,X,k),G&&g(y,z,X,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,E(y,P,X,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,P,X){const z=X.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let G=k[P.id];G===void 0&&(G={},k[P.id]=G);let w=G[z];return w===void 0&&(w=d(l()),G[z]=w),w}function d(y){const P=[],X=[],z=[];for(let k=0;k<e;k++)P[k]=0,X[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,P,X,z){const k=s.attributes,G=P.attributes;let w=0;const I=X.getAttributes();for(const O in I)if(I[O].location>=0){const tt=k[O];let rt=G[O];if(rt===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),tt===void 0||tt.attribute!==rt||rt&&tt.data!==rt.data)return!0;w++}return s.attributesNum!==w||s.index!==z}function g(y,P,X,z){const k={},G=P.attributes;let w=0;const I=X.getAttributes();for(const O in I)if(I[O].location>=0){let tt=G[O];tt===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor));const rt={};rt.attribute=tt,tt&&tt.data&&(rt.data=tt.data),k[O]=rt,w++}s.attributes=k,s.attributesNum=w,s.index=z}function _(){const y=s.newAttributes;for(let P=0,X=y.length;P<X;P++)y[P]=0}function f(y){p(y,0)}function p(y,P){const X=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;X[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),k[y]!==P&&(i.vertexAttribDivisor(y,P),k[y]=P)}function T(){const y=s.newAttributes,P=s.enabledAttributes;for(let X=0,z=P.length;X<z;X++)P[X]!==y[X]&&(i.disableVertexAttribArray(X),P[X]=0)}function x(y,P,X,z,k,G,w){w===!0?i.vertexAttribIPointer(y,P,X,k,G):i.vertexAttribPointer(y,P,X,z,k,G)}function E(y,P,X,z){_();const k=z.attributes,G=X.getAttributes(),w=P.defaultAttributeValues;for(const I in G){const O=G[I];if(O.location>=0){let J=k[I];if(J===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const tt=J.normalized,rt=J.itemSize,St=t.get(J);if(St===void 0)continue;const Ct=St.buffer,K=St.type,nt=St.bytesPerElement,ft=K===i.INT||K===i.UNSIGNED_INT||J.gpuType===ra;if(J.isInterleavedBufferAttribute){const ut=J.data,vt=ut.stride,st=J.offset;if(ut.isInstancedInterleavedBuffer){for(let xt=0;xt<O.locationSize;xt++)p(O.location+xt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let xt=0;xt<O.locationSize;xt++)f(O.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let xt=0;xt<O.locationSize;xt++)x(O.location+xt,rt/O.locationSize,K,tt,vt*nt,(st+rt/O.locationSize*xt)*nt,ft)}else{if(J.isInstancedBufferAttribute){for(let ut=0;ut<O.locationSize;ut++)p(O.location+ut,J.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ut=0;ut<O.locationSize;ut++)f(O.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ut=0;ut<O.locationSize;ut++)x(O.location+ut,rt/O.locationSize,K,tt,rt*nt,rt/O.locationSize*ut*nt,ft)}}else if(w!==void 0){const tt=w[I];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(O.location,tt);break;case 3:i.vertexAttrib3fv(O.location,tt);break;case 4:i.vertexAttrib4fv(O.location,tt);break;default:i.vertexAttrib1fv(O.location,tt)}}}}T()}function U(){N();for(const y in n){const P=n[y];for(const X in P){const z=P[X];for(const k in z)u(z[k].object),delete z[k];delete P[X]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const X in P){const z=P[X];for(const k in z)u(z[k].object),delete z[k];delete P[X]}delete n[y.id]}function A(y){for(const P in n){const X=n[P];if(X[y.id]===void 0)continue;const z=X[y.id];for(const k in z)u(z[k].object),delete z[k];delete X[y.id]}}function N(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:T}}function wp(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,n,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Qe&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==En&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!A)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:E,maxSamples:U}}function Rp(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Nn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!f)s?u(null):c();else{const T=s?0:n,x=T*4;let E=p.clippingState||null;l.value=E,E=u(g,d,x,m);for(let U=0;U!==x;++U)E[U]=e[U];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,E=m;x!==_;++x,E+=4)o.copy(h[x]).applyMatrix4(T,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Pp(i){let t=new WeakMap;function e(o,a){return a===vo?o.mapping=Ii:a===xo&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vo||a===xo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Lp extends wc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,ol=[.125,.215,.35,.446,.526,.582],Qn=20,Js=new Lp,al=new Bt;let Qs=null,to=0,eo=0,no=!1;const $n=(1+Math.sqrt(5))/2,Ai=1/$n,ll=[new L(-$n,Ai,0),new L($n,Ai,0),new L(-Ai,0,$n),new L(Ai,0,$n),new L(0,$n,-Ai),new L(0,$n,Ai),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:pr,format:Qe,colorSpace:Gn,depthBuffer:!1},r=ul(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dp(s)),this._blurMaterial=Ip(s,t,e)}return r}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,r){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(al),u.toneMapping=zn,u.autoClear=!1;const m=new Fi({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new Ie(new gr,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(al),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Hr(r,T*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ii||t.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ll[(r-s-1)%ll.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ie(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):Qn;f>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Qn}`);const p=[];let T=0;for(let A=0;A<Qn;++A){const N=A/_,M=Math.exp(-N*N/2);p.push(M),A===0?T+=M:A<f&&(T+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[r],U=3*E*(r>x-wi?r-x+wi:0),R=4*(this._cubeSize-E);Hr(e,U,R,3*E,2*E),l.setRenderTarget(e),l.render(h,Js)}}function Dp(i){const t=[],e=[],n=[];let r=i;const s=i-wi+1+ol.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-wi?l=ol[o-i+wi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,T=new Float32Array(_*g*m),x=new Float32Array(f*g*m),E=new Float32Array(p*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,N=R>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];T.set(M,_*g*R),x.set(d,f*g*R);const y=[R,R,R,R,R,R];E.set(y,p*g*R)}const U=new Xe;U.setAttribute("position",new We(T,_)),U.setAttribute("uv",new We(x,f)),U.setAttribute("faceIndex",new We(E,p)),t.push(U),r>wi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ul(i,t,e){const n=new si(i,t,e);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ip(i,t,e){const n=new Float32Array(Qn),r=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function hl(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function dl(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Up(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vo||l===xo,u=l===Ii||l===Ui;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cl(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new cl(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Np(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Op(i,t,e,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let x=0,E=T.length;x<E;x+=3){const U=T[x+0],R=T[x+1],A=T[x+2];d.push(U,R,R,A,A,U)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,E=T.length/3-1;x<E;x+=3){const U=x+0,R=x+1,A=x+2;d.push(U,R,R,A,A,U)}}else return;const f=new(yc(d)?Tc:bc)(d,1);f.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Fp(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function h(d,m,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=m[T];for(let T=0;T<_.length;T++)e.update(p,n,_[T])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function zp(i,t,e){const n=new WeakMap,r=new ie;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),f===!0&&(E=3);let U=a.attributes.position.count*E,R=1;U>t.maxTextureSize&&(R=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*R*4*h),N=new Sc(A,U,R,h);N.type=yn,N.needsUpdate=!0;const M=E*4;for(let P=0;P<h;P++){const X=p[P],z=T[P],k=x[P],G=U*R*4*P;for(let w=0;w<X.count;w++){const I=w*M;g===!0&&(r.fromBufferAttribute(X,w),A[G+I+0]=r.x,A[G+I+1]=r.y,A[G+I+2]=r.z,A[G+I+3]=0),_===!0&&(r.fromBufferAttribute(z,w),A[G+I+4]=r.x,A[G+I+5]=r.y,A[G+I+6]=r.z,A[G+I+7]=0),f===!0&&(r.fromBufferAttribute(k,w),A[G+I+8]=r.x,A[G+I+9]=r.y,A[G+I+10]=r.z,A[G+I+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:N,size:new ht(U,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Hp(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Lc extends Ue{constructor(t,e,n,r,s,o,a,l,c,u=Pi){if(u!==Pi&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pi&&(n=ri),n===void 0&&u===Oi&&(n=Ni),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dc=new Ue,fl=new Lc(1,1),Ic=new Sc,Uc=new Th,Nc=new Cc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=pl[r];if(s===void 0&&(s=new Float32Array(r),pl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ss(i,t){let e=ml[t];e===void 0&&(e=new Int32Array(t),ml[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;vl.set(n),i.uniformMatrix2fv(this.addr,!1,vl),ve(e,n)}}function qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;_l.set(n),i.uniformMatrix3fv(this.addr,!1,_l),ve(e,n)}}function Yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;gl.set(n),i.uniformMatrix4fv(this.addr,!1,gl),ve(e,n)}}function jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function nm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fl.compareFunction=vc,s=fl):s=Dc,e.setTexture2D(t||s,r)}function im(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Uc,r)}function rm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Nc,r)}function sm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ic,r)}function om(i){switch(i){case 5126:return kp;case 35664:return Gp;case 35665:return Vp;case 35666:return Wp;case 35674:return Xp;case 35675:return qp;case 35676:return Yp;case 5124:case 35670:return jp;case 35667:case 35671:return Kp;case 35668:case 35672:return Zp;case 35669:case 35673:return $p;case 5125:return Jp;case 36294:return Qp;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return sm}}function am(i,t){i.uniform1fv(this.addr,t)}function lm(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function cm(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function um(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function hm(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dm(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fm(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pm(i,t){i.uniform1iv(this.addr,t)}function mm(i,t){i.uniform2iv(this.addr,t)}function gm(i,t){i.uniform3iv(this.addr,t)}function _m(i,t){i.uniform4iv(this.addr,t)}function vm(i,t){i.uniform1uiv(this.addr,t)}function xm(i,t){i.uniform2uiv(this.addr,t)}function ym(i,t){i.uniform3uiv(this.addr,t)}function Mm(i,t){i.uniform4uiv(this.addr,t)}function Sm(i,t,e){const n=this.cache,r=t.length,s=Ss(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Dc,s[o])}function Em(i,t,e){const n=this.cache,r=t.length,s=Ss(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Uc,s[o])}function bm(i,t,e){const n=this.cache,r=t.length,s=Ss(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Nc,s[o])}function Tm(i,t,e){const n=this.cache,r=t.length,s=Ss(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ic,s[o])}function Am(i){switch(i){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return hm;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return xm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Tm}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=om(e.type)}}class Cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Am(e.type)}}class Rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function xl(i,t){i.seq.push(t),i.map[t.id]=t}function Pm(i,t,e){const n=i.name,r=n.length;for(io.lastIndex=0;;){const s=io.exec(n),o=io.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xl(e,c===void 0?new wm(a,i,t):new Cm(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Rm(a),xl(e,h)),e=h}}}class is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Pm(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function yl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lm=37297;let Dm=0;function Im(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Um(i){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i);let n;switch(t===e?n="":t===us&&e===cs?n="LinearDisplayP3ToLinearSRGB":t===cs&&e===us&&(n="LinearSRGBToLinearDisplayP3"),i){case Gn:case ys:return[n,"LinearTransferOETF"];case on:case ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ml(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Im(i.getShaderSource(t),o)}else return r}function Nm(i,t){const e=Um(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Om(i,t){let e;switch(t){case Fu:e="Linear";break;case Bu:e="Reinhard";break;case zu:e="OptimizedCineon";break;case Hu:e="ACESFilmic";break;case Gu:e="AgX";break;case Vu:e="Neutral";break;case ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const kr=new L;function Fm(){Zt.getLuminanceCoefficients(kr);const i=kr.x.toFixed(4),t=kr.y.toFixed(4),e=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function zm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ji(i){return i!==""}function Sl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function El(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(km,Vm)}const Gm=new Map;function Vm(i,t){let e=zt[t];if(e===void 0){const n=Gm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ko(e)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Wm,Xm)}function Xm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Ui:t="ENVMAP_TYPE_CUBE";break;case xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function Km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Nu:t="ENVMAP_BLENDING_MIX";break;case Ou:t="ENVMAP_BLENDING_ADD";break}return t}function Zm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $m(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qm(e),c=Ym(e),u=jm(e),h=Km(e),d=Zm(e),m=Bm(e),g=zm(s),_=r.createProgram();let f,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),p.length>0&&(p+=`
`)):(f=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),p=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?zt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Nm("linearToOutputTexel",e.outputColorSpace),Fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),o=Ko(o),o=Sl(o,e),o=El(o,e),a=Ko(a),a=Sl(a,e),a=El(a,e),o=bl(o),a=bl(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=T+f+o,E=T+p+a,U=yl(r,r.VERTEX_SHADER,x),R=yl(r,r.FRAGMENT_SHADER,E);r.attachShader(_,U),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(U).trim(),k=r.getShaderInfoLog(R).trim();let G=!0,w=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,U,R);else{const I=Ml(r,U,"vertex"),O=Ml(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+I+`
`+O)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||k==="")&&(w=!1);w&&(P.diagnostics={runnable:G,programLog:X,vertexShader:{log:z,prefix:f},fragmentShader:{log:k,prefix:p}})}r.deleteShader(U),r.deleteShader(R),N=new is(r,_),M=Hm(r,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Lm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}let Jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tg(t),e.set(t,n)),n}}class tg{constructor(t){this.id=Jm++,this.code=t,this.usedTimes=0}}function eg(i,t,e,n,r,s,o){const a=new fa,l=new Qm,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,y,P,X,z){const k=X.fog,G=z.geometry,w=M.isMeshStandardMaterial?X.environment:null,I=(M.isMeshStandardMaterial?e:t).get(M.envMap||w),O=I&&I.mapping===xs?I.image.height:null,J=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=tt!==void 0?tt.length:0;let St=0;G.morphAttributes.position!==void 0&&(St=1),G.morphAttributes.normal!==void 0&&(St=2),G.morphAttributes.color!==void 0&&(St=3);let Ct,K,nt,ft;if(J){const Vt=De[J];Ct=Vt.vertexShader,K=Vt.fragmentShader}else Ct=M.vertexShader,K=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),ft=l.getFragmentShaderID(M);const ut=i.getRenderTarget(),vt=z.isInstancedMesh===!0,st=z.isBatchedMesh===!0,xt=!!M.map,kt=!!M.matcap,D=!!I,te=!!M.aoMap,Wt=!!M.lightMap,Xt=!!M.bumpMap,Et=!!M.normalMap,se=!!M.displacementMap,Ut=!!M.emissiveMap,Ot=!!M.metalnessMap,C=!!M.roughnessMap,S=M.anisotropy>0,Y=M.clearcoat>0,Q=M.dispersion>0,it=M.iridescence>0,$=M.sheen>0,At=M.transmission>0,ct=S&&!!M.anisotropyMap,mt=Y&&!!M.clearcoatMap,Ft=Y&&!!M.clearcoatNormalMap,ot=Y&&!!M.clearcoatRoughnessMap,gt=it&&!!M.iridescenceMap,Gt=it&&!!M.iridescenceThicknessMap,Rt=$&&!!M.sheenColorMap,_t=$&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,Nt=!!M.specularColorMap,ne=!!M.specularIntensityMap,v=At&&!!M.transmissionMap,H=At&&!!M.thicknessMap,V=!!M.gradientMap,j=!!M.alphaMap,et=M.alphaTest>0,bt=!!M.alphaHash,Dt=!!M.extensions;let ce=zn;M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ce=i.toneMapping);const pe={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Ct,fragmentShader:K,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:st,batchingColor:st&&z._colorsTexture!==null,instancing:vt,instancingColor:vt&&z.instanceColor!==null,instancingMorph:vt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Gn,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:kt,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:O,aoMap:te,lightMap:Wt,bumpMap:Xt,normalMap:Et,displacementMap:d&&se,emissiveMap:Ut,normalMapObjectSpace:Et&&M.normalMapType===ju,normalMapTangentSpace:Et&&M.normalMapType===Yu,metalnessMap:Ot,roughnessMap:C,anisotropy:S,anisotropyMap:ct,clearcoat:Y,clearcoatMap:mt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:ot,dispersion:Q,iridescence:it,iridescenceMap:gt,iridescenceThicknessMap:Gt,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:_t,specularMap:Lt,specularColorMap:Nt,specularIntensityMap:ne,transmission:At,transmissionMap:v,thicknessMap:H,gradientMap:V,opaque:M.transparent===!1&&M.blending===Ri&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:et,alphaHash:bt,combine:M.combine,mapUv:xt&&_(M.map.channel),aoMapUv:te&&_(M.aoMap.channel),lightMapUv:Wt&&_(M.lightMap.channel),bumpMapUv:Xt&&_(M.bumpMap.channel),normalMapUv:Et&&_(M.normalMap.channel),displacementMapUv:se&&_(M.displacementMap.channel),emissiveMapUv:Ut&&_(M.emissiveMap.channel),metalnessMapUv:Ot&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(M.sheenRoughnessMap.channel),specularMapUv:Lt&&_(M.specularMap.channel),specularColorMapUv:Nt&&_(M.specularColorMap.channel),specularIntensityMapUv:ne&&_(M.specularIntensityMap.channel),transmissionMapUv:v&&_(M.transmissionMap.channel),thicknessMapUv:H&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Et||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(xt||j),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:St,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===we,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Dt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&M.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(y,M),x(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),M.push(a.mask)}function E(M){const y=g[M.type];let P;if(y){const X=De[y];P=pa.clone(X.uniforms)}else P=M.uniforms;return P}function U(M,y){let P;for(let X=0,z=u.length;X<z;X++){const k=u[X];if(k.cacheKey===y){P=k,++P.usedTimes;break}}return P===void 0&&(P=new $m(i,y,M,s),u.push(P)),P}function R(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:E,acquireProgram:U,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:N}}function ng(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Al(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),t++,p}function a(h,d,m,g,_,f){const p=o(h,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(h,d,m,g,_,f){const p=o(h,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||ig),n.length>1&&n.sort(d||Al),r.length>1&&r.sort(d||Al)}function u(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new wl,i.set(n,[o])):r>=s.length?(o=new wl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ag=0;function lg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cg(i){const t=new sg,e=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new qt,o=new qt;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,T=0,x=0,E=0,U=0,R=0,A=0;c.sort(lg);for(let M=0,y=c.length;M<y;M++){const P=c[M],X=P.color,z=P.intensity,k=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=X.r*z,h+=X.g*z,d+=X.b*z;else if(P.isLightProbe){for(let w=0;w<9;w++)n.probe[w].addScaledVector(P.sh.coefficients[w],z);A++}else if(P.isDirectionalLight){const w=t.get(P);if(w.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,O=e.get(P);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=w,m++}else if(P.isSpotLight){const w=t.get(P);w.position.setFromMatrixPosition(P.matrixWorld),w.color.copy(X).multiplyScalar(z),w.distance=k,w.coneCos=Math.cos(P.angle),w.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),w.decay=P.decay,n.spot[_]=w;const I=P.shadow;if(P.map&&(n.spotLightMap[U]=P.map,U++,I.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=I.matrix,P.castShadow){const O=e.get(P);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=G,E++}_++}else if(P.isRectAreaLight){const w=t.get(P);w.color.copy(X).multiplyScalar(z),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=w,f++}else if(P.isPointLight){const w=t.get(P);if(w.color.copy(P.color).multiplyScalar(P.intensity),w.distance=P.distance,w.decay=P.decay,P.castShadow){const I=P.shadow,O=e.get(P);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=w,g++}else if(P.isHemisphereLight){const w=t.get(P);w.skyColor.copy(P.color).multiplyScalar(z),w.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=w,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==f||N.hemiLength!==p||N.numDirectionalShadows!==T||N.numPointShadows!==x||N.numSpotShadows!==E||N.numSpotMaps!==U||N.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=f,N.hemiLength=p,N.numDirectionalShadows=T,N.numPointShadows=x,N.numSpotShadows=E,N.numSpotMaps=U,N.numLightProbes=A,n.version=ag++)}function l(c,u){let h=0,d=0,m=0,g=0,_=0;const f=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const x=c[p];if(x.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),h++}else if(x.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),m++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),o.identity(),s.copy(x.matrixWorld),s.premultiply(f),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:n}}function Cl(i){const t=new cg(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ug(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Cl(i),t.set(r,[a])):s>=o.length?(a=new Cl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class hg extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dg extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mg(i,t,e){let n=new Rc;const r=new ht,s=new ht,o=new ie,a=new hg({depthPacking:qu}),l=new dg,c={},u=e.maxTextureSize,h={[un]:we,[we]:un,[Ze]:Ze},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let p=this.type;this.render=function(R,A,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Bn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const z=p!==xn&&this.type===xn,k=p===xn&&this.type!==xn;for(let G=0,w=R.length;G<w;G++){const I=R[G],O=I.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const J=O.getFrameExtents();if(r.multiply(J),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,O.mapSize.y=s.y)),O.map===null||z===!0||k===!0){const rt=this.type!==xn?{minFilter:Ve,magFilter:Ve}:{};O.map!==null&&O.map.dispose(),O.map=new si(r.x,r.y,rt),O.map.texture.name=I.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const tt=O.getViewportCount();for(let rt=0;rt<tt;rt++){const St=O.getViewport(rt);o.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),X.viewport(o),O.updateMatrices(I,rt),n=O.getFrustum(),E(A,N,O.camera,I,this.type)}O.isPointLightShadow!==!0&&this.type===xn&&T(O,N),O.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(M,y,P)};function T(R,A){const N=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new si(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,N,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,N,m,_,null)}function x(R,A,N,M){let y=null;const P=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)y=P;else if(y=N.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=y.uuid,z=A.uuid;let k=c[X];k===void 0&&(k={},c[X]=k);let G=k[z];G===void 0&&(G=y.clone(),k[z]=G,A.addEventListener("dispose",U)),y=G}if(y.visible=A.visible,y.wireframe=A.wireframe,M===xn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=i.properties.get(y);X.light=N}return y}function E(R,A,N,M,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const z=t.update(R),k=R.material;if(Array.isArray(k)){const G=z.groups;for(let w=0,I=G.length;w<I;w++){const O=G[w],J=k[O.materialIndex];if(J&&J.visible){const tt=x(R,J,M,y);R.onBeforeShadow(i,R,A,N,z,tt,O),i.renderBufferDirect(N,null,z,tt,R,O),R.onAfterShadow(i,R,A,N,z,tt,O)}}}else if(k.visible){const G=x(R,k,M,y);R.onBeforeShadow(i,R,A,N,z,G,null),i.renderBufferDirect(N,null,z,G,R,null),R.onAfterShadow(i,R,A,N,z,G,null)}}const X=R.children;for(let z=0,k=X.length;z<k;z++)E(X[z],A,N,M,y)}function U(R){R.target.removeEventListener("dispose",U);for(const N in c){const M=c[N],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function gg(i){function t(){let v=!1;const H=new ie;let V=null;const j=new ie(0,0,0,0);return{setMask:function(et){V!==et&&!v&&(i.colorMask(et,et,et,et),V=et)},setLocked:function(et){v=et},setClear:function(et,bt,Dt,ce,pe){pe===!0&&(et*=ce,bt*=ce,Dt*=ce),H.set(et,bt,Dt,ce),j.equals(H)===!1&&(i.clearColor(et,bt,Dt,ce),j.copy(H))},reset:function(){v=!1,V=null,j.set(-1,0,0,0)}}}function e(){let v=!1,H=null,V=null,j=null;return{setTest:function(et){et?ft(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(et){H!==et&&!v&&(i.depthMask(et),H=et)},setFunc:function(et){if(V!==et){switch(et){case Cu:i.depthFunc(i.NEVER);break;case Ru:i.depthFunc(i.ALWAYS);break;case Pu:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Lu:i.depthFunc(i.EQUAL);break;case Du:i.depthFunc(i.GEQUAL);break;case Iu:i.depthFunc(i.GREATER);break;case Uu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=et}},setLocked:function(et){v=et},setClear:function(et){j!==et&&(i.clearDepth(et),j=et)},reset:function(){v=!1,H=null,V=null,j=null}}}function n(){let v=!1,H=null,V=null,j=null,et=null,bt=null,Dt=null,ce=null,pe=null;return{setTest:function(Vt){v||(Vt?ft(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Vt){H!==Vt&&!v&&(i.stencilMask(Vt),H=Vt)},setFunc:function(Vt,me,he){(V!==Vt||j!==me||et!==he)&&(i.stencilFunc(Vt,me,he),V=Vt,j=me,et=he)},setOp:function(Vt,me,he){(bt!==Vt||Dt!==me||ce!==he)&&(i.stencilOp(Vt,me,he),bt=Vt,Dt=me,ce=he)},setLocked:function(Vt){v=Vt},setClear:function(Vt){pe!==Vt&&(i.clearStencil(Vt),pe=Vt)},reset:function(){v=!1,H=null,V=null,j=null,et=null,bt=null,Dt=null,ce=null,pe=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,T=null,x=null,E=null,U=null,R=new Bt(0,0,0),A=0,N=!1,M=null,y=null,P=null,X=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,w=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(I)[1]),G=w>=1):I.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),G=w>=2);let O=null,J={};const tt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),St=new ie().fromArray(tt),Ct=new ie().fromArray(rt);function K(v,H,V,j){const et=new Uint8Array(4),bt=i.createTexture();i.bindTexture(v,bt),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<V;Dt++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(H+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return bt}const nt={};nt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),s.setFunc(as),Xt(!1),Et(Ua),ft(i.CULL_FACE),te(Bn);function ft(v){c[v]!==!0&&(i.enable(v),c[v]=!0)}function ut(v){c[v]!==!1&&(i.disable(v),c[v]=!1)}function vt(v,H){return u[v]!==H?(i.bindFramebuffer(v,H),u[v]=H,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=H),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=H),!0):!1}function st(v,H){let V=d,j=!1;if(v){V=h.get(H),V===void 0&&(V=[],h.set(H,V));const et=v.textures;if(V.length!==et.length||V[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Dt=et.length;bt<Dt;bt++)V[bt]=i.COLOR_ATTACHMENT0+bt;V.length=et.length,j=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,j=!0);j&&i.drawBuffers(V)}function xt(v){return m!==v?(i.useProgram(v),m=v,!0):!1}const kt={[Jn]:i.FUNC_ADD,[hu]:i.FUNC_SUBTRACT,[du]:i.FUNC_REVERSE_SUBTRACT};kt[fu]=i.MIN,kt[pu]=i.MAX;const D={[mu]:i.ZERO,[gu]:i.ONE,[_u]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[Eu]:i.SRC_ALPHA_SATURATE,[Mu]:i.DST_COLOR,[xu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[Su]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[Au]:i.CONSTANT_ALPHA,[wu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(v,H,V,j,et,bt,Dt,ce,pe,Vt){if(v===Bn){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),v!==uu){if(v!==_||Vt!==N){if((f!==Jn||x!==Jn)&&(i.blendEquation(i.FUNC_ADD),f=Jn,x=Jn),Vt)switch(v){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.ONE,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}p=null,T=null,E=null,U=null,R.set(0,0,0),A=0,_=v,N=Vt}return}et=et||H,bt=bt||V,Dt=Dt||j,(H!==f||et!==x)&&(i.blendEquationSeparate(kt[H],kt[et]),f=H,x=et),(V!==p||j!==T||bt!==E||Dt!==U)&&(i.blendFuncSeparate(D[V],D[j],D[bt],D[Dt]),p=V,T=j,E=bt,U=Dt),(ce.equals(R)===!1||pe!==A)&&(i.blendColor(ce.r,ce.g,ce.b,pe),R.copy(ce),A=pe),_=v,N=!1}function Wt(v,H){v.side===Ze?ut(i.CULL_FACE):ft(i.CULL_FACE);let V=v.side===we;H&&(V=!V),Xt(V),v.blending===Ri&&v.transparent===!1?te(Bn):te(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),r.setMask(v.colorWrite);const j=v.stencilWrite;o.setTest(j),j&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Ut(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(v){M!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),M=v)}function Et(v){v!==au?(ft(i.CULL_FACE),v!==y&&(v===Ua?i.cullFace(i.BACK):v===lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),y=v}function se(v){v!==P&&(G&&i.lineWidth(v),P=v)}function Ut(v,H,V){v?(ft(i.POLYGON_OFFSET_FILL),(X!==H||z!==V)&&(i.polygonOffset(H,V),X=H,z=V)):ut(i.POLYGON_OFFSET_FILL)}function Ot(v){v?ft(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function C(v){v===void 0&&(v=i.TEXTURE0+k-1),O!==v&&(i.activeTexture(v),O=v)}function S(v,H,V){V===void 0&&(O===null?V=i.TEXTURE0+k-1:V=O);let j=J[V];j===void 0&&(j={type:void 0,texture:void 0},J[V]=j),(j.type!==v||j.texture!==H)&&(O!==V&&(i.activeTexture(V),O=V),i.bindTexture(v,H||nt[v]),j.type=v,j.texture=H)}function Y(){const v=J[O];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Rt(v){St.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),St.copy(v))}function _t(v){Ct.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),Ct.copy(v))}function Lt(v,H){let V=l.get(H);V===void 0&&(V=new WeakMap,l.set(H,V));let j=V.get(v);j===void 0&&(j=i.getUniformBlockIndex(H,v.name),V.set(v,j))}function Nt(v,H){const j=l.get(H).get(v);a.get(H)!==j&&(i.uniformBlockBinding(H,j,v.__bindingPointIndex),a.set(H,j))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},O=null,J={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,T=null,x=null,E=null,U=null,R=new Bt(0,0,0),A=0,N=!1,M=null,y=null,P=null,X=null,z=null,St.set(0,0,i.canvas.width,i.canvas.height),Ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ft,disable:ut,bindFramebuffer:vt,drawBuffers:st,useProgram:xt,setBlending:te,setMaterial:Wt,setFlipSided:Xt,setCullFace:Et,setLineWidth:se,setPolygonOffset:Ut,setScissorTest:Ot,activeTexture:C,bindTexture:S,unbindTexture:Y,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:gt,texImage3D:Gt,updateUBOMapping:Lt,uniformBlockBinding:Nt,texStorage2D:Ft,texStorage3D:ot,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Rt,viewport:_t,reset:ne}}function Rl(i,t,e,n){const r=_g(n);switch(e){case hc:return i*t;case fc:return i*t;case pc:return i*t*2;case mc:return i*t/r.components*r.byteLength;case aa:return i*t/r.components*r.byteLength;case gc:return i*t*2/r.components*r.byteLength;case la:return i*t*2/r.components*r.byteLength;case dc:return i*t*3/r.components*r.byteLength;case Qe:return i*t*4/r.components*r.byteLength;case ca:return i*t*4/r.components*r.byteLength;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ts:case es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:case To:return Math.max(i,16)*Math.max(t,8)/4;case So:case bo:return Math.max(i,8)*Math.max(t,8)/2;case Ao:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ns:case Vo:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _c:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case En:case lc:return{byteLength:1,components:1};case sr:case cc:case pr:return{byteLength:2,components:1};case sa:case oa:return{byteLength:2,components:4};case ri:case ra:case yn:return{byteLength:4,components:1};case uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):ds("canvas")}function _(C,S,Y){let Q=1;const it=Ot(C);if((it.width>Y||it.height>Y)&&(Q=Y/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Q*it.width),At=Math.floor(Q*it.height);h===void 0&&(h=g($,At));const ct=S?g($,At):h;return ct.width=$,ct.height=At,ct.getContext("2d").drawImage(C,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+$+"x"+At+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function f(C){return C.generateMipmaps&&C.minFilter!==Ve&&C.minFilter!==$e}function p(C){i.generateMipmap(C)}function T(C,S,Y,Q,it=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===i.RED&&(Y===i.FLOAT&&($=i.R32F),Y===i.HALF_FLOAT&&($=i.R16F),Y===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&($=i.R8UI),Y===i.UNSIGNED_SHORT&&($=i.R16UI),Y===i.UNSIGNED_INT&&($=i.R32UI),Y===i.BYTE&&($=i.R8I),Y===i.SHORT&&($=i.R16I),Y===i.INT&&($=i.R32I)),S===i.RG&&(Y===i.FLOAT&&($=i.RG32F),Y===i.HALF_FLOAT&&($=i.RG16F),Y===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&($=i.RG8UI),Y===i.UNSIGNED_SHORT&&($=i.RG16UI),Y===i.UNSIGNED_INT&&($=i.RG32UI),Y===i.BYTE&&($=i.RG8I),Y===i.SHORT&&($=i.RG16I),Y===i.INT&&($=i.RG32I)),S===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){const At=it?ls:Zt.getTransfer(Q);Y===i.FLOAT&&($=i.RGBA32F),Y===i.HALF_FLOAT&&($=i.RGBA16F),Y===i.UNSIGNED_BYTE&&($=At===ee?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(C,S){let Y;return C?S===null||S===ri||S===Ni?Y=i.DEPTH24_STENCIL8:S===yn?Y=i.DEPTH32F_STENCIL8:S===sr&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===Ni?Y=i.DEPTH_COMPONENT24:S===yn?Y=i.DEPTH_COMPONENT32F:S===sr&&(Y=i.DEPTH_COMPONENT16),Y}function E(C,S){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function U(C){const S=C.target;S.removeEventListener("dispose",U),A(S),S.isVideoTexture&&u.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),M(S)}function A(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Y=C.source,Q=d.get(Y);if(Q){const it=Q[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&N(C),Object.keys(Q).length===0&&d.delete(Y)}n.remove(C)}function N(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const Y=C.source,Q=d.get(Y);delete Q[S.__cacheKey],o.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let it=0;it<S.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=C.textures;for(let Q=0,it=Y.length;Q<it;Q++){const $=n.get(Y[Q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(C)}let y=0;function P(){y=0}function X(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function k(C,S){const Y=n.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(Y,C,S);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function G(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Ct(Y,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function w(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Ct(Y,C,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function I(C,S){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){K(Y,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const O={[yo]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},J={[Ve]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Is]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},tt={[Ku]:i.NEVER,[eh]:i.ALWAYS,[Zu]:i.LESS,[vc]:i.LEQUAL,[$u]:i.EQUAL,[th]:i.GEQUAL,[Ju]:i.GREATER,[Qu]:i.NOTEQUAL};function rt(C,S){if(S.type===yn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===$e||S.magFilter===Is||S.magFilter===yr||S.magFilter===ei||S.minFilter===$e||S.minFilter===Is||S.minFilter===yr||S.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,O[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,O[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,O[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,J[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ve||S.minFilter!==yr&&S.minFilter!==ei||S.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function St(C,S){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",U));const Q=S.source;let it=d.get(Q);it===void 0&&(it={},d.set(Q,it));const $=z(S);if($!==C.__cacheKey){it[$]===void 0&&(it[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[$].usedTimes++;const At=it[C.__cacheKey];At!==void 0&&(it[C.__cacheKey].usedTimes--,At.usedTimes===0&&N(S)),C.__cacheKey=$,C.__webglTexture=it[$].texture}return Y}function Ct(C,S,Y){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);const it=St(C,S),$=S.source;e.bindTexture(Q,C.__webglTexture,i.TEXTURE0+Y);const At=n.get($);if($.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+Y);const ct=Zt.getPrimaries(Zt.workingColorSpace),mt=S.colorSpace===On?null:Zt.getPrimaries(S.colorSpace),Ft=S.colorSpace===On||ct===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ot=_(S.image,!1,r.maxTextureSize);ot=Ut(S,ot);const gt=s.convert(S.format,S.colorSpace),Gt=s.convert(S.type);let Rt=T(S.internalFormat,gt,Gt,S.colorSpace,S.isVideoTexture);rt(Q,S);let _t;const Lt=S.mipmaps,Nt=S.isVideoTexture!==!0,ne=At.__version===void 0||it===!0,v=$.dataReady,H=E(S,ot);if(S.isDepthTexture)Rt=x(S.format===Oi,S.type),ne&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Rt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Rt,ot.width,ot.height,0,gt,Gt,null));else if(S.isDataTexture)if(Lt.length>0){Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,H,Rt,Lt[0].width,Lt[0].height);for(let V=0,j=Lt.length;V<j;V++)_t=Lt[V],Nt?v&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,gt,Gt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Rt,_t.width,_t.height,0,gt,Gt,_t.data);S.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(i.TEXTURE_2D,H,Rt,ot.width,ot.height),v&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,gt,Gt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,ot.width,ot.height,0,gt,Gt,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,Rt,Lt[0].width,Lt[0].height,ot.depth);for(let V=0,j=Lt.length;V<j;V++)if(_t=Lt[V],S.format!==Qe)if(gt!==null)if(Nt){if(v)if(S.layerUpdates.size>0){const et=Rl(_t.width,_t.height,S.format,S.type);for(const bt of S.layerUpdates){const Dt=_t.data.subarray(bt*et/_t.data.BYTES_PER_ELEMENT,(bt+1)*et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,bt,_t.width,_t.height,1,gt,Dt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,ot.depth,gt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Rt,_t.width,_t.height,ot.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?v&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,ot.depth,gt,Gt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Rt,_t.width,_t.height,ot.depth,0,gt,Gt,_t.data)}else{Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,H,Rt,Lt[0].width,Lt[0].height);for(let V=0,j=Lt.length;V<j;V++)_t=Lt[V],S.format!==Qe?gt!==null?Nt?v&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Rt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?v&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,gt,Gt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Rt,_t.width,_t.height,0,gt,Gt,_t.data)}else if(S.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,Rt,ot.width,ot.height,ot.depth),v)if(S.layerUpdates.size>0){const V=Rl(ot.width,ot.height,S.format,S.type);for(const j of S.layerUpdates){const et=ot.data.subarray(j*V/ot.data.BYTES_PER_ELEMENT,(j+1)*V/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ot.width,ot.height,1,gt,Gt,et)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,gt,Gt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,ot.width,ot.height,ot.depth,0,gt,Gt,ot.data);else if(S.isData3DTexture)Nt?(ne&&e.texStorage3D(i.TEXTURE_3D,H,Rt,ot.width,ot.height,ot.depth),v&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,gt,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,ot.width,ot.height,ot.depth,0,gt,Gt,ot.data);else if(S.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(i.TEXTURE_2D,H,Rt,ot.width,ot.height);else{let V=ot.width,j=ot.height;for(let et=0;et<H;et++)e.texImage2D(i.TEXTURE_2D,et,Rt,V,j,0,gt,Gt,null),V>>=1,j>>=1}}else if(Lt.length>0){if(Nt&&ne){const V=Ot(Lt[0]);e.texStorage2D(i.TEXTURE_2D,H,Rt,V.width,V.height)}for(let V=0,j=Lt.length;V<j;V++)_t=Lt[V],Nt?v&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt,Gt,_t):e.texImage2D(i.TEXTURE_2D,V,Rt,gt,Gt,_t);S.generateMipmaps=!1}else if(Nt){if(ne){const V=Ot(ot);e.texStorage2D(i.TEXTURE_2D,H,Rt,V.width,V.height)}v&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Gt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Rt,gt,Gt,ot);f(S)&&p(Q),At.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function K(C,S,Y){if(S.image.length!==6)return;const Q=St(C,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);const $=n.get(it);if(it.version!==$.__version||Q===!0){e.activeTexture(i.TEXTURE0+Y);const At=Zt.getPrimaries(Zt.workingColorSpace),ct=S.colorSpace===On?null:Zt.getPrimaries(S.colorSpace),mt=S.colorSpace===On||At===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let j=0;j<6;j++)!Ft&&!ot?gt[j]=_(S.image[j],!0,r.maxCubemapSize):gt[j]=ot?S.image[j].image:S.image[j],gt[j]=Ut(S,gt[j]);const Gt=gt[0],Rt=s.convert(S.format,S.colorSpace),_t=s.convert(S.type),Lt=T(S.internalFormat,Rt,_t,S.colorSpace),Nt=S.isVideoTexture!==!0,ne=$.__version===void 0||Q===!0,v=it.dataReady;let H=E(S,Gt);rt(i.TEXTURE_CUBE_MAP,S);let V;if(Ft){Nt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,H,Lt,Gt.width,Gt.height);for(let j=0;j<6;j++){V=gt[j].mipmaps;for(let et=0;et<V.length;et++){const bt=V[et];S.format!==Qe?Rt!==null?Nt?v&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et,Lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et,0,0,bt.width,bt.height,Rt,_t,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et,Lt,bt.width,bt.height,0,Rt,_t,bt.data)}}}else{if(V=S.mipmaps,Nt&&ne){V.length>0&&H++;const j=Ot(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,H,Lt,j.width,j.height)}for(let j=0;j<6;j++)if(ot){Nt?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,gt[j].width,gt[j].height,Rt,_t,gt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Lt,gt[j].width,gt[j].height,0,Rt,_t,gt[j].data);for(let et=0;et<V.length;et++){const Dt=V[et].image[j].image;Nt?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et+1,0,0,Dt.width,Dt.height,Rt,_t,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et+1,Lt,Dt.width,Dt.height,0,Rt,_t,Dt.data)}}else{Nt?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,_t,gt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Lt,Rt,_t,gt[j]);for(let et=0;et<V.length;et++){const bt=V[et];Nt?v&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et+1,0,0,Rt,_t,bt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et+1,Lt,Rt,_t,bt.image[j])}}}f(S)&&p(i.TEXTURE_CUBE_MAP),$.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function nt(C,S,Y,Q,it,$){const At=s.convert(Y.format,Y.colorSpace),ct=s.convert(Y.type),mt=T(Y.internalFormat,At,ct,Y.colorSpace);if(!n.get(S).__hasExternalTextures){const ot=Math.max(1,S.width>>$),gt=Math.max(1,S.height>>$);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,$,mt,ot,gt,S.depth,0,At,ct,null):e.texImage2D(it,$,mt,ot,gt,0,At,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Et(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,n.get(Y).__webglTexture,0,Xt(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,n.get(Y).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const Q=S.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,$=x(S.stencilBuffer,it),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Xt(S);Et(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,$,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,C)}else{const Q=S.textures;for(let it=0;it<Q.length;it++){const $=Q[it],At=s.convert($.format,$.colorSpace),ct=s.convert($.type),mt=T($.internalFormat,At,ct,$.colorSpace),Ft=Xt(S);Y&&Et(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,mt,S.width,S.height):Et(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,it=Xt(S);if(S.depthTexture.format===Pi)Et(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Oi)Et(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function vt(C){const S=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,C)}else if(Y){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=i.createRenderbuffer(),ft(S.__webglDepthbuffer[Q],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ft(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,S,Y){const Q=n.get(C);S!==void 0&&nt(Q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&vt(C)}function xt(C){const S=C.texture,Y=n.get(C),Q=n.get(S);C.addEventListener("dispose",R);const it=C.textures,$=C.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,o.memory.textures++),$){Y.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[ct]=[];for(let mt=0;mt<S.mipmaps.length;mt++)Y.__webglFramebuffer[ct][mt]=i.createFramebuffer()}else Y.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)Y.__webglFramebuffer[ct]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(At)for(let ct=0,mt=it.length;ct<mt;ct++){const Ft=n.get(it[ct]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Et(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){const mt=it[ct];Y.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ct]);const Ft=s.convert(mt.format,mt.colorSpace),ot=s.convert(mt.type),gt=T(mt.internalFormat,Ft,ot,mt.colorSpace,C.isXRRenderTarget===!0),Gt=Xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,gt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),rt(i.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(Y.__webglFramebuffer[ct][mt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else nt(Y.__webglFramebuffer[ct],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);f(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ct=0,mt=it.length;ct<mt;ct++){const Ft=it[ct],ot=n.get(Ft);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),rt(i.TEXTURE_2D,Ft),nt(Y.__webglFramebuffer,C,Ft,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),f(Ft)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),rt(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(Y.__webglFramebuffer[mt],C,S,i.COLOR_ATTACHMENT0,ct,mt);else nt(Y.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ct,0);f(S)&&p(ct),e.unbindTexture()}C.depthBuffer&&vt(C)}function kt(C){const S=C.textures;for(let Y=0,Q=S.length;Y<Q;Y++){const it=S[Y];if(f(it)){const $=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(it).__webglTexture;e.bindTexture($,At),p($),e.unbindTexture()}}}const D=[],te=[];function Wt(C){if(C.samples>0){if(Et(C)===!1){const S=C.textures,Y=C.width,Q=C.height;let it=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(C),ct=S.length>1;if(ct)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[mt]);const Ft=n.get(S[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,it,i.NEAREST),l===!0&&(D.length=0,te.length=0,D.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(D.push($),te.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,At.__webglColorRenderbuffer[mt]);const Ft=n.get(S[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Xt(C){return Math.min(r.maxSamples,C.samples)}function Et(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ut(C,S){const Y=C.colorSpace,Q=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Gn&&Y!==On&&(Zt.getTransfer(Y)===ee?(Q!==Qe||it!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=w,this.setTextureCube=I,this.rebindTextures=st,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Et}function xg(i,t){function e(n,r=On){let s;const o=Zt.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.BYTE;if(n===cc)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===pr)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===dc)return i.RGB;if(n===Qe)return i.RGBA;if(n===fc)return i.LUMINANCE;if(n===pc)return i.LUMINANCE_ALPHA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===mc)return i.RED;if(n===aa)return i.RED_INTEGER;if(n===gc)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===Jr||n===Qr||n===ts||n===es)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===Eo||n===bo||n===To)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===So)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===wo||n===Co)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ao||n===wo)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Co)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Oo||n===Fo||n===Bo||n===zo||n===Ho||n===ko||n===Go)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ro)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ns||n===Vo||n===Wo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ns)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===Xo||n===qo||n===Yo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ns)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yg extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qi extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ue,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new en({vertexShader:Sg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tg extends ai{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=new bg,f=e.getContextAttributes();let p=null,T=null;const x=[],E=[],U=new ht;let R=null;const A=new Ge;A.layers.enable(1),A.viewport=new ie;const N=new Ge;N.layers.enable(2),N.viewport=new ie;const M=[A,N],y=new yg;y.layers.enable(1),y.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=x[K];return nt===void 0&&(nt=new ro,x[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=x[K];return nt===void 0&&(nt=new ro,x[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=x[K];return nt===void 0&&(nt=new ro,x[K]=nt),nt.getHandSpace()};function z(K){const nt=E.indexOf(K.inputSource);if(nt===-1)return;const ft=x[nt];ft!==void 0&&(ft.update(K.inputSource,K.frame,c||o),ft.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",G);for(let K=0;K<x.length;K++){const nt=E[K];nt!==null&&(E[K]=null,x[K].disconnect(nt))}P=null,X=null,_.reset(),t.setRenderTarget(p),m=null,d=null,h=null,r=null,T=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new si(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:En,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let nt=null,ft=null,ut=null;f.depth&&(ut=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?Oi:Pi,ft=f.stencil?Ni:ri);const vt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(vt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new si(d.textureWidth,d.textureHeight,{format:Qe,type:En,depthTexture:new Lc(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ct.setContext(r),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(K){for(let nt=0;nt<K.removed.length;nt++){const ft=K.removed[nt],ut=E.indexOf(ft);ut>=0&&(E[ut]=null,x[ut].disconnect(ft))}for(let nt=0;nt<K.added.length;nt++){const ft=K.added[nt];let ut=E.indexOf(ft);if(ut===-1){for(let st=0;st<x.length;st++)if(st>=E.length){E.push(ft),ut=st;break}else if(E[st]===null){E[st]=ft,ut=st;break}if(ut===-1)break}const vt=x[ut];vt&&vt.connect(ft)}}const w=new L,I=new L;function O(K,nt,ft){w.setFromMatrixPosition(nt.matrixWorld),I.setFromMatrixPosition(ft.matrixWorld);const ut=w.distanceTo(I),vt=nt.projectionMatrix.elements,st=ft.projectionMatrix.elements,xt=vt[14]/(vt[10]-1),kt=vt[14]/(vt[10]+1),D=(vt[9]+1)/vt[5],te=(vt[9]-1)/vt[5],Wt=(vt[8]-1)/vt[0],Xt=(st[8]+1)/st[0],Et=xt*Wt,se=xt*Xt,Ut=ut/(-Wt+Xt),Ot=Ut*-Wt;nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ot),K.translateZ(Ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const C=xt+Ut,S=kt+Ut,Y=Et-Ot,Q=se+(ut-Ot),it=D*kt/S*C,$=te*kt/S*C;K.projectionMatrix.makePerspective(Y,Q,it,$,C,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function J(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;_.texture!==null&&(K.near=_.depthNear,K.far=_.depthFar),y.near=N.near=A.near=K.near,y.far=N.far=A.far=K.far,(P!==y.near||X!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,X=y.far,A.near=P,A.far=X,N.near=P,N.far=X,A.updateProjectionMatrix(),N.updateProjectionMatrix(),K.updateProjectionMatrix());const nt=K.parent,ft=y.cameras;J(y,nt);for(let ut=0;ut<ft.length;ut++)J(ft[ut],nt);ft.length===2?O(y,A,N):y.projectionMatrix.copy(A.projectionMatrix),tt(K,y,nt)};function tt(K,nt,ft){ft===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(ft.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=or*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let rt=null;function St(K,nt){if(u=nt.getViewerPose(c||o),g=nt,u!==null){const ft=u.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let ut=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let st=0;st<ft.length;st++){const xt=ft[st];let kt=null;if(m!==null)kt=m.getViewport(xt);else{const te=h.getViewSubImage(d,xt);kt=te.viewport,st===0&&(t.setRenderTargetTextures(T,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(T))}let D=M[st];D===void 0&&(D=new Ge,D.layers.enable(st),D.viewport=new ie,M[st]=D),D.matrix.fromArray(xt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(xt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(kt.x,kt.y,kt.width,kt.height),st===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(D)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const st=h.getDepthInformation(ft[0]);st&&st.isValid&&st.texture&&_.init(t,st,r.renderState)}}for(let ft=0;ft<x.length;ft++){const ut=E[ft],vt=x[ft];ut!==null&&vt!==void 0&&vt.update(ut,nt,c||o)}rt&&rt(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Ct=new Pc;Ct.setAnimationLoop(St),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}}const Zn=new bn,Ag=new qt;function wg(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Ac(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,T,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,E)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,T,x):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===we&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===we&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const T=t.get(p),x=T.envMap,E=T.envMapRotation;x&&(f.envMap.value=x,Zn.copy(E),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),f.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Zn)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,T,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*T,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,T){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===we&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const T=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Cg(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const E=x.program;n.uniformBlockBinding(T,E)}function c(T,x){let E=r[T.id];E===void 0&&(g(T),E=u(T),r[T.id]=E,T.addEventListener("dispose",f));const U=x.program;n.updateUBOMapping(T,U);const R=t.render.frame;s[T.id]!==R&&(d(T),s[T.id]=R)}function u(T){const x=h();T.__bindingPointIndex=x;const E=i.createBuffer(),U=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const x=r[T.id],E=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=E.length;R<A;R++){const N=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,y=N.length;M<y;M++){const P=N[M];if(m(P,R,M,U)===!0){const X=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let G=0;G<z.length;G++){const w=z[G],I=_(w);typeof w=="number"||typeof w=="boolean"?(P.__data[0]=w,i.bufferSubData(i.UNIFORM_BUFFER,X+k,P.__data)):w.isMatrix3?(P.__data[0]=w.elements[0],P.__data[1]=w.elements[1],P.__data[2]=w.elements[2],P.__data[3]=0,P.__data[4]=w.elements[3],P.__data[5]=w.elements[4],P.__data[6]=w.elements[5],P.__data[7]=0,P.__data[8]=w.elements[6],P.__data[9]=w.elements[7],P.__data[10]=w.elements[8],P.__data[11]=0):(w.toArray(P.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,x,E,U){const R=T.value,A=x+"_"+E;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const N=U[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return U[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(T){const x=T.uniforms;let E=0;const U=16;for(let A=0,N=x.length;A<N;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,P=M.length;y<P;y++){const X=M[y],z=Array.isArray(X.value)?X.value:[X.value];for(let k=0,G=z.length;k<G;k++){const w=z[k],I=_(w),O=E%U,J=O%I.boundary,tt=O+J;E+=J,tt!==0&&U-tt<I.storage&&(E+=U-tt),X.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=I.storage}}}const R=E%U;return R>0&&(E+=U-R),T.__size=E,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function f(T){const x=T.target;x.removeEventListener("dispose",f);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Rg{constructor(t={}){const{canvas:e=vh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let E=!1,U=0,R=0,A=null,N=-1,M=null;const y=new ie,P=new ie;let X=null;const z=new Bt(0);let k=0,G=e.width,w=e.height,I=1,O=null,J=null;const tt=new ie(0,0,G,w),rt=new ie(0,0,G,w);let St=!1;const Ct=new Rc;let K=!1,nt=!1;const ft=new qt,ut=new L,vt=new ie,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function kt(){return A===null?I:1}let D=n;function te(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",V,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",et,!1),D===null){const F="webgl2";if(D=te(F,b),D===null)throw te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Wt,Xt,Et,se,Ut,Ot,C,S,Y,Q,it,$,At,ct,mt,Ft,ot,gt,Gt,Rt,_t,Lt,Nt,ne;function v(){Wt=new Np(D),Wt.init(),Lt=new xg(D,Wt),Xt=new Cp(D,Wt,t,Lt),Et=new gg(D),se=new Bp(D),Ut=new ng,Ot=new vg(D,Wt,Et,Ut,Xt,Lt,se),C=new Pp(x),S=new Up(x),Y=new Vh(D),Nt=new Ap(D,Y),Q=new Op(D,Y,se,Nt),it=new Hp(D,Q,Y,se),Gt=new zp(D,Xt,Ot),Ft=new Rp(Ut),$=new eg(x,C,S,Wt,Xt,Nt,Ft),At=new wg(x,Ut),ct=new rg,mt=new ug(Wt),gt=new Tp(x,C,S,Et,it,d,l),ot=new mg(x,it,Xt),ne=new Cg(D,se,Xt,Et),Rt=new wp(D,Wt,se),_t=new Fp(D,Wt,se),se.programs=$.programs,x.capabilities=Xt,x.extensions=Wt,x.properties=Ut,x.renderLists=ct,x.shadowMap=ot,x.state=Et,x.info=se}v();const H=new Tg(x,D);this.xr=H,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(G,w,!1))},this.getSize=function(b){return b.set(G,w)},this.setSize=function(b,F,W=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,w=F,e.width=Math.floor(b*I),e.height=Math.floor(F*I),W===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(G*I,w*I).floor()},this.setDrawingBufferSize=function(b,F,W){G=b,w=F,I=W,e.width=Math.floor(b*W),e.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,F,W,q){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,F,W,q),Et.viewport(y.copy(tt).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(rt)},this.setScissor=function(b,F,W,q){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,F,W,q),Et.scissor(P.copy(rt).multiplyScalar(I).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){Et.setScissorTest(St=b)},this.setOpaqueSort=function(b){O=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(b=!0,F=!0,W=!0){let q=0;if(b){let B=!1;if(A!==null){const at=A.texture.format;B=at===ca||at===la||at===aa}if(B){const at=A.texture.type,pt=at===En||at===ri||at===sr||at===Ni||at===sa||at===oa,yt=gt.getClearColor(),Mt=gt.getClearAlpha(),Pt=yt.r,It=yt.g,wt=yt.b;pt?(m[0]=Pt,m[1]=It,m[2]=wt,m[3]=Mt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Pt,g[1]=It,g[2]=wt,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else q|=D.COLOR_BUFFER_BIT}F&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",V,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",et,!1),ct.dispose(),mt.dispose(),Ut.dispose(),C.dispose(),S.dispose(),it.dispose(),Nt.dispose(),ne.dispose(),$.dispose(),H.dispose(),H.removeEventListener("sessionstart",he),H.removeEventListener("sessionend",An),ye.stop()};function V(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=se.autoReset,F=ot.enabled,W=ot.autoUpdate,q=ot.needsUpdate,B=ot.type;v(),se.autoReset=b,ot.enabled=F,ot.autoUpdate=W,ot.needsUpdate=q,ot.type=B}function et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function bt(b){const F=b.target;F.removeEventListener("dispose",bt),Dt(F)}function Dt(b){ce(b),Ut.remove(b)}function ce(b){const F=Ut.get(b).programs;F!==void 0&&(F.forEach(function(W){$.releaseProgram(W)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,q,B,at){F===null&&(F=st);const pt=B.isMesh&&B.matrixWorld.determinant()<0,yt=eu(b,F,W,q,B);Et.setMaterial(q,pt);let Mt=W.index,Pt=1;if(q.wireframe===!0){if(Mt=Q.getWireframeAttribute(W),Mt===void 0)return;Pt=2}const It=W.drawRange,wt=W.attributes.position;let Yt=It.start*Pt,oe=(It.start+It.count)*Pt;at!==null&&(Yt=Math.max(Yt,at.start*Pt),oe=Math.min(oe,(at.start+at.count)*Pt)),Mt!==null?(Yt=Math.max(Yt,0),oe=Math.min(oe,Mt.count)):wt!=null&&(Yt=Math.max(Yt,0),oe=Math.min(oe,wt.count));const ae=oe-Yt;if(ae<0||ae===1/0)return;Nt.setup(B,q,yt,W,Mt);let Ne,jt=Rt;if(Mt!==null&&(Ne=Y.get(Mt),jt=_t,jt.setIndex(Ne)),B.isMesh)q.wireframe===!0?(Et.setLineWidth(q.wireframeLinewidth*kt()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(B.isLine){let Tt=q.linewidth;Tt===void 0&&(Tt=1),Et.setLineWidth(Tt*kt()),B.isLineSegments?jt.setMode(D.LINES):B.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else B.isPoints?jt.setMode(D.POINTS):B.isSprite&&jt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)jt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))jt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Tt=B._multiDrawStarts,Me=B._multiDrawCounts,Kt=B._multiDrawCount,qe=Mt?Y.get(Mt).bytesPerElement:1,li=Ut.get(q).currentProgram.getUniforms();for(let Oe=0;Oe<Kt;Oe++)li.setValue(D,"_gl_DrawID",Oe),jt.render(Tt[Oe]/qe,Me[Oe])}else if(B.isInstancedMesh)jt.renderInstances(Yt,ae,B.count);else if(W.isInstancedBufferGeometry){const Tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,Tt);jt.renderInstances(Yt,ae,Me)}else jt.render(Yt,ae)};function pe(b,F,W){b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=we,b.needsUpdate=!0,xr(b,F,W),b.side=un,b.needsUpdate=!0,xr(b,F,W),b.side=Ze):xr(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),f=mt.get(W),f.init(F),T.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const q=new Set;return b.traverse(function(B){const at=B.material;if(at)if(Array.isArray(at))for(let pt=0;pt<at.length;pt++){const yt=at[pt];pe(yt,W,B),q.add(yt)}else pe(at,W,B),q.add(at)}),T.pop(),f=null,q},this.compileAsync=function(b,F,W=null){const q=this.compile(b,F,W);return new Promise(B=>{function at(){if(q.forEach(function(pt){Ut.get(pt).currentProgram.isReady()&&q.delete(pt)}),q.size===0){B(b);return}setTimeout(at,10)}Wt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Vt=null;function me(b){Vt&&Vt(b)}function he(){ye.stop()}function An(){ye.start()}const ye=new Pc;ye.setAnimationLoop(me),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(b){Vt=b,H.setAnimationLoop(b),b===null?ye.stop():ye.start()},H.addEventListener("sessionstart",he),H.addEventListener("sessionend",An),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(F),F=H.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,A),f=mt.get(b,T.length),f.init(F),T.push(f),ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ct.setFromProjectionMatrix(ft),nt=this.localClippingEnabled,K=Ft.init(this.clippingPlanes,nt),_=ct.get(b,p.length),_.init(),p.push(_),H.enabled===!0&&H.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&fn(at,F,-1/0,x.sortObjects)}fn(b,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(O,J),xt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,xt&&gt.addToRenderList(_,b),this.info.render.frame++,K===!0&&Ft.beginShadows();const W=f.state.shadowsArray;ot.render(W,b,F),K===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,B=_.transmissive;if(f.setupLights(),F.isArrayCamera){const at=F.cameras;if(B.length>0)for(let pt=0,yt=at.length;pt<yt;pt++){const Mt=at[pt];Vi(q,B,b,Mt)}xt&&gt.render(b);for(let pt=0,yt=at.length;pt<yt;pt++){const Mt=at[pt];Wn(_,b,Mt,Mt.viewport)}}else B.length>0&&Vi(q,B,b,F),xt&&gt.render(b),Wn(_,b,F);A!==null&&(Ot.updateMultisampleRenderTarget(A),Ot.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,F),Nt.resetDefaultState(),N=-1,M=null,T.pop(),T.length>0?(f=T[T.length-1],K===!0&&Ft.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function fn(b,F,W,q){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ct.intersectsSprite(b)){q&&vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ft);const pt=it.update(b),yt=b.material;yt.visible&&_.push(b,pt,yt,W,vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ct.intersectsObject(b))){const pt=it.update(b),yt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),vt.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),vt.copy(pt.boundingSphere.center)),vt.applyMatrix4(b.matrixWorld).applyMatrix4(ft)),Array.isArray(yt)){const Mt=pt.groups;for(let Pt=0,It=Mt.length;Pt<It;Pt++){const wt=Mt[Pt],Yt=yt[wt.materialIndex];Yt&&Yt.visible&&_.push(b,pt,Yt,W,vt.z,wt)}}else yt.visible&&_.push(b,pt,yt,W,vt.z,null)}}const at=b.children;for(let pt=0,yt=at.length;pt<yt;pt++)fn(at[pt],F,W,q)}function Wn(b,F,W,q){const B=b.opaque,at=b.transmissive,pt=b.transparent;f.setupLightsView(W),K===!0&&Ft.setGlobalState(x.clippingPlanes,W),q&&Et.viewport(y.copy(q)),B.length>0&&vr(B,F,W),at.length>0&&vr(at,F,W),pt.length>0&&vr(pt,F,W),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Vi(b,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new si(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?pr:En,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const at=f.state.transmissionRenderTarget[q.id],pt=q.viewport||y;at.setSize(pt.z,pt.w);const yt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(z),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),xt&&gt.render(W);const Mt=x.toneMapping;x.toneMapping=zn;const Pt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),K===!0&&Ft.setGlobalState(x.clippingPlanes,q),vr(b,W,q),Ot.updateMultisampleRenderTarget(at),Ot.updateRenderTargetMipmap(at),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let wt=0,Yt=F.length;wt<Yt;wt++){const oe=F[wt],ae=oe.object,Ne=oe.geometry,jt=oe.material,Tt=oe.group;if(jt.side===Ze&&ae.layers.test(q.layers)){const Me=jt.side;jt.side=we,jt.needsUpdate=!0,Pa(ae,W,q,Ne,jt,Tt),jt.side=Me,jt.needsUpdate=!0,It=!0}}It===!0&&(Ot.updateMultisampleRenderTarget(at),Ot.updateRenderTargetMipmap(at))}x.setRenderTarget(yt),x.setClearColor(z,k),Pt!==void 0&&(q.viewport=Pt),x.toneMapping=Mt}function vr(b,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let B=0,at=b.length;B<at;B++){const pt=b[B],yt=pt.object,Mt=pt.geometry,Pt=q===null?pt.material:q,It=pt.group;yt.layers.test(W.layers)&&Pa(yt,F,W,Mt,Pt,It)}}function Pa(b,F,W,q,B,at){b.onBeforeRender(x,F,W,q,B,at),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.transparent===!0&&B.side===Ze&&B.forceSinglePass===!1?(B.side=we,B.needsUpdate=!0,x.renderBufferDirect(W,F,q,B,b,at),B.side=un,B.needsUpdate=!0,x.renderBufferDirect(W,F,q,B,b,at),B.side=Ze):x.renderBufferDirect(W,F,q,B,b,at),b.onAfterRender(x,F,W,q,B,at)}function xr(b,F,W){F.isScene!==!0&&(F=st);const q=Ut.get(b),B=f.state.lights,at=f.state.shadowsArray,pt=B.state.version,yt=$.getParameters(b,B.state,at,F,W),Mt=$.getProgramCacheKey(yt);let Pt=q.programs;q.environment=b.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(b.isMeshStandardMaterial?S:C).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",bt),Pt=new Map,q.programs=Pt);let It=Pt.get(Mt);if(It!==void 0){if(q.currentProgram===It&&q.lightsStateVersion===pt)return Da(b,yt),It}else yt.uniforms=$.getUniforms(b),b.onBeforeCompile(yt,x),It=$.acquireProgram(yt,Mt),Pt.set(Mt,It),q.uniforms=yt.uniforms;const wt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=Ft.uniform),Da(b,yt),q.needsLights=iu(b),q.lightsStateVersion=pt,q.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=It,q.uniformsList=null,It}function La(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=is.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Da(b,F){const W=Ut.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function eu(b,F,W,q,B){F.isScene!==!0&&(F=st),Ot.resetTextureUnits();const at=F.fog,pt=q.isMeshStandardMaterial?F.environment:null,yt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Gn,Mt=(q.isMeshStandardMaterial?S:C).get(q.envMap||pt),Pt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,It=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!W.morphAttributes.position,Yt=!!W.morphAttributes.normal,oe=!!W.morphAttributes.color;let ae=zn;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ae=x.toneMapping);const Ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=Ne!==void 0?Ne.length:0,Tt=Ut.get(q),Me=f.state.lights;if(K===!0&&(nt===!0||b!==M)){const He=b===M&&q.id===N;Ft.setState(q,b,He)}let Kt=!1;q.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Me.state.version||Tt.outputColorSpace!==yt||B.isBatchedMesh&&Tt.batching===!1||!B.isBatchedMesh&&Tt.batching===!0||B.isBatchedMesh&&Tt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Tt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Tt.instancing===!1||!B.isInstancedMesh&&Tt.instancing===!0||B.isSkinnedMesh&&Tt.skinning===!1||!B.isSkinnedMesh&&Tt.skinning===!0||B.isInstancedMesh&&Tt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Tt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Tt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Tt.instancingMorph===!1&&B.morphTexture!==null||Tt.envMap!==Mt||q.fog===!0&&Tt.fog!==at||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ft.numPlanes||Tt.numIntersection!==Ft.numIntersection)||Tt.vertexAlphas!==Pt||Tt.vertexTangents!==It||Tt.morphTargets!==wt||Tt.morphNormals!==Yt||Tt.morphColors!==oe||Tt.toneMapping!==ae||Tt.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,Tt.__version=q.version);let qe=Tt.currentProgram;Kt===!0&&(qe=xr(q,F,B));let li=!1,Oe=!1,Ps=!1;const de=qe.getUniforms(),wn=Tt.uniforms;if(Et.useProgram(qe.program)&&(li=!0,Oe=!0,Ps=!0),q.id!==N&&(N=q.id,Oe=!0),li||M!==b){de.setValue(D,"projectionMatrix",b.projectionMatrix),de.setValue(D,"viewMatrix",b.matrixWorldInverse);const He=de.map.cameraPosition;He!==void 0&&He.setValue(D,ut.setFromMatrixPosition(b.matrixWorld)),Xt.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&de.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Oe=!0,Ps=!0)}if(B.isSkinnedMesh){de.setOptional(D,B,"bindMatrix"),de.setOptional(D,B,"bindMatrixInverse");const He=B.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),de.setValue(D,"boneTexture",He.boneTexture,Ot))}B.isBatchedMesh&&(de.setOptional(D,B,"batchingTexture"),de.setValue(D,"batchingTexture",B._matricesTexture,Ot),de.setOptional(D,B,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",B._indirectTexture,Ot),de.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",B._colorsTexture,Ot));const Ls=W.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&Gt.update(B,W,qe),(Oe||Tt.receiveShadow!==B.receiveShadow)&&(Tt.receiveShadow=B.receiveShadow,de.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(wn.envMap.value=Mt,wn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(wn.envMapIntensity.value=F.environmentIntensity),Oe&&(de.setValue(D,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&nu(wn,Ps),at&&q.fog===!0&&At.refreshFogUniforms(wn,at),At.refreshMaterialUniforms(wn,q,I,w,f.state.transmissionRenderTarget[b.id]),is.upload(D,La(Tt),wn,Ot)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(is.upload(D,La(Tt),wn,Ot),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&de.setValue(D,"center",B.center),de.setValue(D,"modelViewMatrix",B.modelViewMatrix),de.setValue(D,"normalMatrix",B.normalMatrix),de.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const He=q.uniformsGroups;for(let Ds=0,ru=He.length;Ds<ru;Ds++){const Ia=He[Ds];ne.update(Ia,qe),ne.bind(Ia,qe)}}return qe}function nu(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function iu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,F,W){Ut.get(b.texture).__webglTexture=F,Ut.get(b.depthTexture).__webglTexture=W;const q=Ut.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const W=Ut.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,W=0){A=b,U=F,R=W;let q=!0,B=null,at=!1,pt=!1;if(b){const Mt=Ut.get(b);Mt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(D.FRAMEBUFFER,null),q=!1):Mt.__webglFramebuffer===void 0?Ot.setupRenderTarget(b):Mt.__hasExternalTextures&&Ot.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(pt=!0);const It=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[F])?B=It[F][W]:B=It[F],at=!0):b.samples>0&&Ot.useMultisampledRTT(b)===!1?B=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[W]:B=It,y.copy(b.viewport),P.copy(b.scissor),X=b.scissorTest}else y.copy(tt).multiplyScalar(I).floor(),P.copy(rt).multiplyScalar(I).floor(),X=St;if(Et.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&Et.drawBuffers(b,B),Et.viewport(y),Et.scissor(P),Et.setScissorTest(X),at){const Mt=Ut.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,W)}else if(pt){const Mt=Ut.get(b.texture),Pt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,Pt)}N=-1},this.readRenderTargetPixels=function(b,F,W,q,B,at,pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Et.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Mt=b.texture,Pt=Mt.format,It=Mt.type;if(!Xt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-q&&W>=0&&W<=b.height-B&&D.readPixels(F,W,q,B,Lt.convert(Pt),Lt.convert(It),at)}finally{const Mt=A!==null?Ut.get(A).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,q,B,at,pt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Et.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Mt=b.texture,Pt=Mt.format,It=Mt.type;if(!Xt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-q&&W>=0&&W<=b.height-B){const wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(F,W,q,B,Lt.convert(Pt),Lt.convert(It),0),D.flush();const Yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await xh(D,Yt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at)}finally{D.deleteBuffer(wt),D.deleteSync(Yt)}return at}}finally{const Mt=A!==null?Ut.get(A).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.copyFramebufferToTexture=function(b,F=null,W=0){b.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-W),B=Math.floor(b.image.width*q),at=Math.floor(b.image.height*q),pt=F!==null?F.x:0,yt=F!==null?F.y:0;Ot.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,pt,yt,B,at),Et.unbindTexture()},this.copyTextureToTexture=function(b,F,W=null,q=null,B=0){b.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let at,pt,yt,Mt,Pt,It;W!==null?(at=W.max.x-W.min.x,pt=W.max.y-W.min.y,yt=W.min.x,Mt=W.min.y):(at=b.image.width,pt=b.image.height,yt=0,Mt=0),q!==null?(Pt=q.x,It=q.y):(Pt=0,It=0);const wt=Lt.convert(F.format),Yt=Lt.convert(F.type);Ot.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const oe=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ne=D.getParameter(D.UNPACK_SKIP_PIXELS),jt=D.getParameter(D.UNPACK_SKIP_ROWS),Tt=D.getParameter(D.UNPACK_SKIP_IMAGES),Me=b.isCompressedTexture?b.mipmaps[B]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Pt,It,at,pt,wt,Yt,Me.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Pt,It,Me.width,Me.height,wt,Me.data):D.texSubImage2D(D.TEXTURE_2D,B,Pt,It,at,pt,wt,Yt,Me),D.pixelStorei(D.UNPACK_ROW_LENGTH,oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt),B===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(b,F,W=null,q=null,B=0){b.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,b=arguments[2],F=arguments[3],B=arguments[4]||0);let at,pt,yt,Mt,Pt,It,wt,Yt,oe;const ae=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(at=W.max.x-W.min.x,pt=W.max.y-W.min.y,yt=W.max.z-W.min.z,Mt=W.min.x,Pt=W.min.y,It=W.min.z):(at=ae.width,pt=ae.height,yt=ae.depth,Mt=0,Pt=0,It=0),q!==null?(wt=q.x,Yt=q.y,oe=q.z):(wt=0,Yt=0,oe=0);const Ne=Lt.convert(F.format),jt=Lt.convert(F.type);let Tt;if(F.isData3DTexture)Ot.setTexture3D(F,0),Tt=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ot.setTexture2DArray(F,0),Tt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Me=D.getParameter(D.UNPACK_ROW_LENGTH),Kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qe=D.getParameter(D.UNPACK_SKIP_PIXELS),li=D.getParameter(D.UNPACK_SKIP_ROWS),Oe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Tt,B,wt,Yt,oe,at,pt,yt,Ne,jt,ae.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,B,wt,Yt,oe,at,pt,yt,Ne,ae.data):D.texSubImage3D(Tt,B,wt,Yt,oe,at,pt,yt,Ne,jt,ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,Me),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,li),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe),B===0&&F.generateMipmaps&&D.generateMipmap(Tt),Et.unbindTexture()},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&Ot.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ot.setTextureCube(b,0):b.isData3DTexture?Ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ot.setTexture2DArray(b,0):Ot.setTexture2D(b,0),Et.unbindTexture()},this.resetState=function(){U=0,R=0,A=null,Et.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ua?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===ys?"display-p3":"srgb"}}class Pg extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Li("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new L;class Fn{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,m=(o-u)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ht:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,r=[],s=[],o=[],a=new L,l=new qt;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ge(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(ge(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ga extends dn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dg extends ga{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _a(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,m*=u,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Gr=new L,so=new _a,oo=new _a,ao=new _a;class Ig extends dn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Gr.subVectors(r[0],r[1]).add(r[0]),c=Gr);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Gr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),so.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,f),oo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,f),ao.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(so.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),oo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ao.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(so.calc(l),oo.calc(l),ao.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pl(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Ug(i,t){const e=1-i;return e*e*t}function Ng(i,t){return 2*(1-i)*i*t}function Og(i,t){return i*i*t}function nr(i,t,e,n){return Ug(i,t)+Ng(i,e)+Og(i,n)}function Fg(i,t){const e=1-i;return e*e*e*t}function Bg(i,t){const e=1-i;return 3*e*e*i*t}function zg(i,t){return 3*(1-i)*i*i*t}function Hg(i,t){return i*i*i*t}function ir(i,t,e,n,r){return Fg(i,t)+Bg(i,e)+zg(i,n)+Hg(i,r)}class Oc extends dn{constructor(t=new ht,e=new ht,n=new ht,r=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,r.x,s.x,o.x,a.x),ir(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kg extends dn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,r.x,s.x,o.x,a.x),ir(t,r.y,s.y,o.y,a.y),ir(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fc extends dn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gg extends dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bc extends dn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(nr(t,r.x,s.x,o.x),nr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vg extends dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(nr(t,r.x,s.x,o.x),nr(t,r.y,s.y,o.y),nr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Pl(a,l.x,c.x,u.x,h.x),Pl(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ht().fromArray(r))}return this}}var Ll=Object.freeze({__proto__:null,ArcCurve:Dg,CatmullRomCurve3:Ig,CubicBezierCurve:Oc,CubicBezierCurve3:kg,EllipseCurve:ga,LineCurve:Fc,LineCurve3:Gg,QuadraticBezierCurve:Bc,QuadraticBezierCurve3:Vg,SplineCurve:zc});class Wg extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Ll[r.type]().fromJSON(r))}return this}}class Dl extends Wg{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fc(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Bc(this.currentPoint.clone(),new ht(t,e),new ht(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Oc(this.currentPoint.clone(),new ht(t,e),new ht(n,r),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new ga(t,e,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hc extends Dl{constructor(t){super(t),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Dl().fromJSON(r))}return this}}const Xg={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=kc(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,m;if(n&&(s=Zg(i,t,s,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let g=e;g<r;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return ar(s,o,e,a,l,m,0),o}};function kc(i,t,e,n,r){let s,o;if(r===a_(i,t,e,n)>0)for(s=t;s<e;s+=n)o=Il(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=Il(s,i[s],i[s+1],o);return o&&Es(o,o.next)&&(cr(o),o=o.next),o}function oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Es(e,e.next)||re(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(i,t,e,n,r,s,o){if(!i)return;!o&&s&&e_(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Yg(i,n,r,s):qg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),cr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=jg(oi(i),t,e),ar(i,t,e,n,r,s,2)):o===2&&Kg(i,t,e,n,r,s):ar(oi(i),t,e,n,r,s,1);break}}}function qg(i){const t=i.prev,e=i,n=i.next;if(re(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=m&&Ci(r,a,s,l,o,c,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yg(i,t,e,n){const r=i.prev,s=i,o=i.next;if(re(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,f=u>h?u>d?u:d:h>d?h:d,p=Zo(m,g,t,e,n),T=Zo(_,f,t,e,n);let x=i.prevZ,E=i.nextZ;for(;x&&x.z>=p&&E&&E.z<=T;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&Ci(a,u,l,h,c,d,x.x,x.y)&&re(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=m&&E.x<=_&&E.y>=g&&E.y<=f&&E!==r&&E!==o&&Ci(a,u,l,h,c,d,E.x,E.y)&&re(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&Ci(a,u,l,h,c,d,x.x,x.y)&&re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=T;){if(E.x>=m&&E.x<=_&&E.y>=g&&E.y<=f&&E!==r&&E!==o&&Ci(a,u,l,h,c,d,E.x,E.y)&&re(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function jg(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Es(r,s)&&Gc(r,n,n.next,s)&&lr(r,s)&&lr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),cr(n),cr(n.next),n=i=s),n=n.next}while(n!==i);return oi(n)}function Kg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r_(o,a)){let l=Vc(o,a);o=oi(o,o.next),l=oi(l,l.next),ar(o,t,e,n,r,s,0),ar(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Zg(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=kc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(i_(c));for(r.sort($g),s=0;s<r.length;s++)e=Jg(r[s],e);return e}function $g(i,t){return i.x-t.x}function Jg(i,t){const e=Qg(i,t);if(!e)return t;const n=Vc(e,i);return oi(n,n.next),oi(e,e.next)}function Qg(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Ci(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),lr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&t_(r,e)))&&(r=e,u=h)),e=e.next;while(e!==a);return r}function t_(i,t){return re(i.prev,i,t.prev)<0&&re(t.next,i,i.next)<0}function e_(i,t,e,n){let r=i;do r.z===0&&(r.z=Zo(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,n_(r)}function n_(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function Zo(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function i_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ci(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function r_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!s_(i,t)&&(lr(i,t)&&lr(t,i)&&o_(i,t)&&(re(i.prev,i,t.prev)||re(i,t.prev,t))||Es(i,t)&&re(i.prev,i,i.next)>0&&re(t.prev,t,t.next)>0)}function re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Es(i,t){return i.x===t.x&&i.y===t.y}function Gc(i,t,e,n){const r=Wr(re(i,t,e)),s=Wr(re(i,t,n)),o=Wr(re(e,n,i)),a=Wr(re(e,n,t));return!!(r!==s&&o!==a||r===0&&Vr(i,e,t)||s===0&&Vr(i,n,t)||o===0&&Vr(e,i,n)||a===0&&Vr(e,t,n))}function Vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wr(i){return i>0?1:i<0?-1:0}function s_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return re(i.prev,i,i.next)<0?re(i,t,i.next)>=0&&re(i,i.prev,t)>=0:re(i,t,i.prev)<0||re(i,i.next,t)<0}function o_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vc(i,t){const e=new $o(i.i,i.x,i.y),n=new $o(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Il(i,t,e,n){const r=new $o(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $o(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class rr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return rr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ul(t),Nl(n,t);let o=t.length;e.forEach(Ul);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Nl(n,e[l]);const a=Xg.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ul(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class va extends Xe{constructor(t=new Hc([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(o,2));function c(u){const h=r.length/3,d=u.extractPoints(e);let m=d.shape;const g=d.holes;rr.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,p=g.length;f<p;f++){const T=g[f];rr.isClockWise(T)===!0&&(g[f]=T.reverse())}const _=rr.triangulateShape(m,g);for(let f=0,p=g.length;f<p;f++){const T=g[f];m=m.concat(T)}for(let f=0,p=m.length;f<p;f++){const T=m[f];r.push(T.x,T.y,0),s.push(0,0,1),o.push(T.x,T.y)}for(let f=0,p=_.length;f<p;f++){const T=_[f],x=T[0]+h,E=T[1]+h,U=T[2]+h;n.push(x,E,U),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return l_(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];n.push(o)}return new va(n,t.curveSegments)}}function l_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class xa extends Xe{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,d=new L,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const T=[],x=p/n;let E=0;p===0&&o===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let U=0;U<=e;U++){const R=U/e;h.x=-t*Math.cos(r+R*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(r+R*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(R+E,1-x),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const x=u[p][T+1],E=u[p][T],U=u[p+1][T],R=u[p+1][T+1];(p!==0||o>0)&&m.push(x,E,R),(p!==n-1||l<Math.PI)&&m.push(E,U,R)}this.setIndex(m),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class c_ extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,r=new L,s=new L;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,m=h.count;for(let g=d,_=d+m;g<_;g+=3)for(let f=0;f<3;f++){const p=a.getX(g+f),T=a.getX(g+(f+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,T),Ol(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Ol(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ce(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Ol(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}class u_ extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Jo extends Lg{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Fl=new qt;class Wc{constructor(t,e,n=0,r=1/0){this.ray=new da(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fl),this}intersectObject(t,e=!0,n=[]){return Qo(t,this,n,e),n.sort(Bl),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Qo(t[r],this,n,e);return n.sort(Bl),n}}function Bl(i,t){return i.distance-t.distance}function Qo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Qo(s[o],t,e,!0)}}class zl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hl=new L,Xr=new L;class h_{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Hl.subVectors(t,this.start),Xr.subVectors(this.end,this.start);const n=Xr.dot(Xr);let s=Xr.dot(Hl)/n;return e&&(s=ge(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);const kl=new Vn,qr=new L;class Xc extends u_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ce(t,3)),this.setAttribute("uv",new Ce(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Jo(e,6,1);return this.setAttribute("instanceStart",new Fn(n,3,0)),this.setAttribute("instanceEnd",new Fn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Jo(e,6,1);return this.setAttribute("instanceColorStart",new Fn(n,3,0)),this.setAttribute("instanceColorEnd",new Fn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new c_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),kl.setFromBufferAttribute(e),this.boundingBox.union(kl))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)qr.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(qr)),qr.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(qr));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}lt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};De.line={uniforms:pa.merge([lt.common,lt.fog,lt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class bs extends en{constructor(t){super({type:"LineMaterial",uniforms:pa.clone(De.line.uniforms),vertexShader:De.line.vertexShader,fragmentShader:De.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const lo=new ie,Gl=new L,Vl=new L,Se=new ie,Ee=new ie,rn=new ie,co=new L,uo=new qt,be=new h_,Wl=new L,Yr=new Vn,jr=new mr,sn=new ie;let ln,ii;function Xl(i,t,e){return sn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),sn.multiplyScalar(1/sn.w),sn.x=ii/e.width,sn.y=ii/e.height,sn.applyMatrix4(i.projectionMatrixInverse),sn.multiplyScalar(1/sn.w),Math.abs(Math.max(sn.x,sn.y))}function d_(i,t){const e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,l=o;a<l;a++){be.start.fromBufferAttribute(r,a),be.end.fromBufferAttribute(s,a),be.applyMatrix4(e);const c=new L,u=new L;ln.distanceSqToSegment(be.start,be.end,u,c),u.distanceTo(c)<ii*.5&&t.push({point:u,pointOnLine:c,distance:ln.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function f_(i,t,e){const n=t.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-t.near;ln.at(1,rn),rn.w=1,rn.applyMatrix4(t.matrixWorldInverse),rn.applyMatrix4(n),rn.multiplyScalar(1/rn.w),rn.x*=s.x/2,rn.y*=s.y/2,rn.z=0,co.copy(rn),uo.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,m=u;d<m;d++){if(Se.fromBufferAttribute(l,d),Ee.fromBufferAttribute(c,d),Se.w=1,Ee.w=1,Se.applyMatrix4(uo),Ee.applyMatrix4(uo),Se.z>h&&Ee.z>h)continue;if(Se.z>h){const x=Se.z-Ee.z,E=(Se.z-h)/x;Se.lerp(Ee,E)}else if(Ee.z>h){const x=Ee.z-Se.z,E=(Ee.z-h)/x;Ee.lerp(Se,E)}Se.applyMatrix4(n),Ee.applyMatrix4(n),Se.multiplyScalar(1/Se.w),Ee.multiplyScalar(1/Ee.w),Se.x*=s.x/2,Se.y*=s.y/2,Ee.x*=s.x/2,Ee.y*=s.y/2,be.start.copy(Se),be.start.z=0,be.end.copy(Ee),be.end.z=0;const _=be.closestPointToPointParameter(co,!0);be.at(_,Wl);const f=xc.lerp(Se.z,Ee.z,_),p=f>=-1&&f<=1,T=co.distanceTo(Wl)<ii*.5;if(p&&T){be.start.fromBufferAttribute(l,d),be.end.fromBufferAttribute(c,d),be.start.applyMatrix4(o),be.end.applyMatrix4(o);const x=new L,E=new L;ln.distanceSqToSegment(be.start,be.end,E,x),e.push({point:E,pointOnLine:x,distance:ln.origin.distanceTo(E),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class p_ extends Ie{constructor(t=new Xc,e=new bs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)Gl.fromBufferAttribute(e,o),Vl.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Gl.distanceTo(Vl);const s=new Jo(r,2,1);return t.setAttribute("instanceDistanceStart",new Fn(s,1,0)),t.setAttribute("instanceDistanceEnd",new Fn(s,1,1)),this}raycast(t,e){const n=this.material.worldUnits,r=t.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ln=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;ii=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),jr.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=ii*.5;else{const h=Math.max(r.near,jr.distanceToPoint(ln.origin));c=Xl(r,h,l.resolution)}if(jr.radius+=c,ln.intersectsSphere(jr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Yr.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=ii*.5;else{const h=Math.max(r.near,Yr.distanceToPoint(ln.origin));u=Xl(r,h,l.resolution)}Yr.expandByScalar(u),ln.intersectsBox(Yr)!==!1&&(n?d_(this,e):f_(this,r,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(lo),this.material.uniforms.resolution.value.set(lo.z,lo.w))}}class fs extends Xc{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setColors(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class qc extends p_{constructor(t=new fs,e=new bs({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const $t=1e-6,m_=1e-9,ql=(i,t)=>[i[0]+t[0],i[1]+t[1]],le=(i,t)=>[i[0]-t[0],i[1]-t[1]],rs=(i,t)=>[i[0]*t,i[1]*t],zi=(i,t)=>i[0]*t[0]+i[1]*t[1],hn=(i,t)=>i[0]*t[1]-i[1]*t[0],Hi=i=>Math.hypot(i[0],i[1]),Qt=(i,t)=>Hi(le(i,t)),Ts=i=>rs(i,1/Hi(i)),Tn=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e],ps=i=>[-i[1],i[0]],ya=(i,t)=>Tn(i,t,.5),Yc=(i,t)=>({p:i,d:Ts(le(t,i))}),Ma=(i,t)=>{const e=ya(i,t),n=Ts(ps(le(t,i)));return{p:e,d:n}},Le=(i,t)=>hn(i.d,le(t,i.p)),Yl=(i,t,e)=>{const n=Le(e,i),r=Le(e,t);if(Math.abs(n-r)<1e-12)return null;const s=n/(n-r);return s<-$t||s>1+$t?null:Tn(i,t,s)},g_={a:1,b:0,c:0,d:1,tx:0,ty:0},ue=(i,t)=>[i.a*t[0]+i.b*t[1]+i.tx,i.c*t[0]+i.d*t[1]+i.ty],__=(i,t)=>[i.a*t[0]+i.b*t[1],i.c*t[0]+i.d*t[1]],Sn=(i,t)=>({a:i.a*t.a+i.b*t.c,b:i.a*t.b+i.b*t.d,c:i.c*t.a+i.d*t.c,d:i.c*t.b+i.d*t.d,tx:i.a*t.tx+i.b*t.ty+i.tx,ty:i.c*t.tx+i.d*t.ty+i.ty}),Gi=i=>{const t=i.a*i.d-i.b*i.c,e=i.d/t,n=-i.b/t,r=-i.c/t,s=i.a/t;return{a:e,b:n,c:r,d:s,tx:-(e*i.tx+n*i.ty),ty:-(r*i.tx+s*i.ty)}},v_=i=>i.a*i.d-i.b*i.c,As=i=>v_(i)<0,ur=i=>{const t=ps(i.d),[e,n]=t,r=2*zi(i.p,t);return{a:1-2*e*e,b:-2*e*n,c:-2*e*n,d:1-2*n*n,tx:r*e,ty:r*n}},ws=(i,t)=>({p:ue(i,t.p),d:Ts(__(i,t.d))}),kn=i=>{let t=0;for(let e=0;e<i.length;e++)t+=hn(i[e],i[(e+1)%i.length]);return t/2},ss=i=>{let t=0,e=0,n=0;for(let r=0;r<i.length;r++){const s=i[r],o=i[(r+1)%i.length],a=hn(s,o);n+=a,t+=(s[0]+o[0])*a,e+=(s[1]+o[1])*a}return n/=2,[t/(6*n),e/(6*n)]},hr=i=>kn(i)<0?[...i].reverse():i,ms=1e-4,x_=i=>{const t=[];for(const n of i)t.length>0&&Qt(t[t.length-1],n)<ms||t.push(n);for(;t.length>1&&Qt(t[0],t[t.length-1])<ms;)t.pop();const e=[];for(let n=0;n<t.length;n++){const r=t[(n-1+t.length)%t.length],s=t[n],o=t[(n+1)%t.length];Math.abs(hn(le(s,r),le(o,s)))<m_&&zi(le(s,r),le(o,s))>0||e.push(s)}return e},dr=(i,t,e)=>{const n=[],r=i.length;for(let s=0;s<r;s++){const o=i[s],a=i[(s+1)%r],l=e*Le(t,o),c=e*Le(t,a);if(l>=-$t){if(n.push(o),c<-$t&&l>$t){const u=Yl(o,a,t);u&&n.push(u)}}else if(c>$t){const u=Yl(o,a,t);u&&n.push(u)}}return x_(n)},Cs=(i,t)=>{const e=dr(i,t,1),n=dr(i,t,-1),r=.001,s=e.length>=3&&Math.abs(kn(e))>r,o=n.length>=3&&Math.abs(kn(n))>r;return s&&!o?{pos:i,neg:null}:!s&&o?{pos:null,neg:i}:!s&&!o?{pos:null,neg:null}:{pos:e,neg:n}},y_=(i,t,e,n)=>{const r=hr(e),s=le(t,i);let o=0,a=1;const l=r.length;for(let c=0;c<l;c++){const u=le(r[(c+1)%l],r[c]),h=Hi(u);if(h<ms)continue;const d=hn(u,le(i,r[c]))-n*h,m=hn(u,s);if(Math.abs(m)<1e-12){if(d<0)return 0;continue}const g=-d/m;if(m>0?g>o&&(o=g):g<a&&(a=g),o>=a)return 0}return(a-o)*Hi(s)},M_=(i,t)=>{let e=hr(i);const n=hr(t),r=n.length;for(let s=0;s<r;s++){if(e.length<3)return 0;const o=Yc(n[s],n[(s+1)%r]);e=dr(e,o,1)}return e.length<3?0:Math.abs(kn(e))},ta=(i,t)=>M_(i,t)>1e-4,jc=(i,t,e=$t)=>{const n=hr(i),r=n.length;for(let s=0;s<r;s++){const o=n[s],a=n[(s+1)%r],l=Hi(le(a,o));if(!(l<ms)&&hn(le(a,o),le(t,o))<-e*l)return!1}return!0},S_=(i,t)=>{let e=i[0],n=1/0,r=0;const s=i.length;for(let o=0;o<s;o++){const a=i[o],l=i[(o+1)%s],c=le(l,a),u=zi(c,c),h=u<1e-12?0:Math.max(0,Math.min(1,zi(le(t,a),c)/u)),d=Tn(a,l,h),m=Qt(d,t);m<n&&(n=m,e=d,r=o)}return{point:e,edge:r,distance:n}},Kc=(i,t,e,n)=>{const r=le(t,i),s=Hi(r);if(s<$t)return null;const o=rs(r,1/s);if(Math.abs(hn(o,le(e,i)))>.005||Math.abs(hn(o,le(n,i)))>.005)return null;const a=0,l=s;let c=zi(le(e,i),o),u=zi(le(n,i),o);c>u&&([c,u]=[u,c]);const h=Math.max(a,c),d=Math.min(l,u);return d-h<.001?null:[ql(i,rs(o,h)),ql(i,rs(o,d))]},Sa=(i,t)=>{const e=[];for(let n=0;n<i.length;n++){const r=i[n],s=i[(n+1)%i.length];for(let o=0;o<t.length;o++){const a=t[o],l=t[(o+1)%t.length],c=Kc(r,s,a,l);c&&e.push(c)}}return e},Ki=i=>({facets:[{poly:hr(i),iso:{...g_},layer:0}],overrides:[]}),tn=i=>i.poly.map(t=>ue(i.iso,t)),jl=new WeakMap,E_=.02,nn=i=>{const t=jl.get(i.facets);if(t)return t;const e=[],n=i.facets.length,r=i.facets.map(o=>{let a=1/0,l=1/0,c=-1/0,u=-1/0;for(const h of o.poly)h[0]<a&&(a=h[0]),h[0]>c&&(c=h[0]),h[1]<l&&(l=h[1]),h[1]>u&&(u=h[1]);return{x0:a,y0:l,x1:c,y1:u}}),s=.01;for(let o=0;o<n;o++){const a=r[o];for(let l=o+1;l<n;l++){const c=r[l];if(a.x1<c.x0-s||c.x1<a.x0-s||a.y1<c.y0-s||c.y1<a.y0-s)continue;const u=Sa(i.facets[o].poly,i.facets[l].poly);for(const h of u)Qt(h[0],h[1])<E_||e.push({a:o,b:l,seg:h})}}return jl.set(i.facets,e),e},fr=(i,t)=>{for(const e of i.overrides)if(gs(e.point,t.seg))return e;return null},gs=(i,t)=>{const e=Qt(t[0],t[1]);return e<$t?!1:Math.abs(Qt(i,t[0])+Qt(i,t[1])-e)<$t*100},ea=i=>ya(i.seg[0],i.seg[1]),Ea=(i,t)=>{const e=t.map(g=>{var _;return((_=fr(i,g))==null?void 0:_.angle)??null});if(i.overrides.length===0)return e;const n=t.length,r=t.map(g=>[ue(i.facets[g.a].iso,g.seg[0]),ue(i.facets[g.a].iso,g.seg[1])]),s=Array.from({length:n},(g,_)=>_),o=g=>{for(;s[g]!==g;)s[g]=s[s[g]],g=s[g];return g};for(let g=0;g<n;g++)for(let _=g+1;_<n;_++)o(g)!==o(_)&&Kc(r[g][0],r[g][1],r[_][0],r[_][1])&&(s[o(g)]=o(_));const a=i.facets.length,l=Array.from({length:a},(g,_)=>_),c=g=>{for(;l[g]!==g;)l[g]=l[l[g]],g=l[g];return g},u=new Set;for(let g=0;g<n;g++)e[g]!==null&&e[g]<180&&u.add(o(g));t.forEach((g,_)=>{u.has(o(_))&&!(e[_]!==null&&e[_]>=180)||(l[c(g.a)]=c(g.b))});const h=g=>{const _=c(t[g].a),f=c(t[g].b);return`${o(g)}:${Math.min(_,f)},${Math.max(_,f)}`},d=new Map;for(let g=0;g<n;g++)e[g]!==null&&e[g]<180&&d.set(h(g),e[g]);const m=e.slice();for(let g=0;g<n;g++)m[g]===null&&(m[g]=d.get(h(g))??null);return m},Kl=new WeakMap,ba=(i,t=nn(i))=>{const e=Kl.get(i);if(e)return e;const n=i.facets.length,r=Array.from({length:n},(_,f)=>f),s=_=>{for(;r[_]!==_;)r[_]=r[r[_]],_=r[_];return _},o=i.overrides.length===0?t.map(()=>null):Ea(i,t);t.forEach((_,f)=>{(o[f]===null||o[f]>=180)&&(r[s(_.a)]=s(_.b))});const a=new Map,l=i.facets.map((_,f)=>{const p=s(f);return a.has(p)||a.set(p,a.size),a.get(p)}),c=a.size,u=new Array(c).fill(0);i.facets.forEach((_,f)=>u[l[f]]+=Math.abs(kn(_.poly)));const h=Array.from({length:c},()=>new Set);t.forEach(_=>{const f=l[_.a],p=l[_.b];f!==p&&(h[f].add(p),h[p].add(f))});const d=u.reduce((_,f)=>_+f,0);let m=u.indexOf(Math.max(...u));for(let _=0;_<c;_++){const f=(T,x)=>{let E=0;const U=new Set([T,x]),R=[x];for(;R.length>0;){const A=R.pop();E+=u[A];for(const N of h[A])U.has(N)||(U.add(N),R.push(N))}return E},p=[...h[m]].find(T=>f(m,T)>d/2);if(p===void 0)break;m=p}const g={compOf:l,base:m,count:c};return Kl.set(i,g),g},Zl=new WeakMap,b_=(i,t=nn(i))=>{if(i.overrides.length===0)return[];const e=Zl.get(i);if(e)return e;const n=Ea(i,t),r=[];return t.forEach((s,o)=>{if(n[o]===null||n[o]>=180)return;const a=i.facets[s.a].iso;r.push({seg:[ue(a,s.seg[0]),ue(a,s.seg[1])],a:s.a,b:s.b})}),Zl.set(i,r),r},T_=(i,t=nn(i))=>{if(i.overrides.length===0)return new Set;const{compOf:e,base:n}=ba(i,t),r=new Set;return e.forEach((s,o)=>{s!==n&&r.add(o)}),r},_s=(i,t,e,n=.005,r)=>{let s=-1,o=e===1?-1/0:1/0;return i.facets.forEach((a,l)=>{r!=null&&r.has(l)||jc(tn(a),t,n)&&(e===1?a.layer>o:a.layer<o)&&(o=a.layer,s=l)}),s},Zc=i=>{const e=[];for(const n of i){const r=n.poly.map(s=>{for(const o of e)if(Qt(o,s)<.002)return o;return e.push(s),s});n.poly=r.filter((s,o)=>s!==r[(o+1)%r.length])}},$c=i=>{const t=[...new Set(i.map(n=>n.layer))].sort((n,r)=>n-r),e=new Map(t.map((n,r)=>[n,r]));i.forEach(n=>n.layer=e.get(n.layer))},A_=i=>{for(const e of nn(i)){const n=i.facets[e.a],r=i.facets[e.b];for(const s of e.seg){const o=ue(n.iso,s),a=ue(r.iso,s);if(Qt(o,a)>.01)return`torn crease between facets ${e.a} and ${e.b}`}}const t=i.facets.map(tn);for(let e=0;e<i.facets.length;e++)for(let n=e+1;n<i.facets.length;n++)if(i.facets[e].layer===i.facets[n].layer&&ta(t[e],t[n]))return`facets ${e} and ${n} overlap on layer ${i.facets[e].layer}`;return null},$l=(i,t)=>{const e=new qt;return e.set(i.a,i.b,0,i.tx,i.c,i.d,0,i.ty,0,0,1,t,0,0,0,1),e};class w_{constructor(t){Z(this,"parent");this.parent=Array.from({length:t},(e,n)=>n)}find(t){for(;this.parent[t]!==t;)this.parent[t]=this.parent[this.parent[t]],t=this.parent[t];return t}union(t,e){const n=this.find(t),r=this.find(e);return n===r?!1:(this.parent[n]=r,!0)}}const vs=(i,t)=>{const e=i.facets.length,n=i.facets.map(M=>$l(M.iso,0)),r=nn(i);if(i.overrides.length===0)return{matrices:i.facets.map(M=>$l(M.iso,M.layer*t)),layerDirs:i.facets.map(()=>new L(0,0,1)),creases:r};const s=Ea(i,r),o=r.map((M,y)=>({crease:M,angle:s[y]}));o.sort((M,y)=>+(M.angle===null)-+(y.angle===null));const a=new w_(e),l=Array.from({length:e},()=>[]);for(const M of o)a.union(M.crease.a,M.crease.b)&&(l[M.crease.a].push({to:M.crease.b,edge:M}),l[M.crease.b].push({to:M.crease.a,edge:M}));const{compOf:c,base:u}=ba(i,r);let h=0,d=-1/0;i.facets.forEach((M,y)=>{if(c[y]!==u)return;const P=Math.abs(kn(M.poly));P>d&&(d=P,h=y)});const m=new Array(e),g=new Array(e),_=new Array(e),f=new Array(e).fill(null),p=new Array(e).fill(-1),T=new Array(e).fill(!1),x=M=>{T[M]=!0;for(const{to:y,edge:P}of l[M]){if(T[y])continue;const X=n[M].clone().invert().multiply(n[y]);let z=X,k=X;if(P.angle!==null&&P.angle<180){const G=P.crease,w=ue(i.facets[M].iso,G.seg[0]),I=ue(i.facets[M].iso,G.seg[1]),O=Ts(le(I,w)),J=Yc(w,I),tt=ss(tn(i.facets[y])),rt=Math.sign(Le(J,tt))||1,St=Math.sign(i.facets[y].layer-i.facets[M].layer)||1,Ct=[ps(O)[0]*rt,ps(O)[1]*rt],K=hn(O,Ct)*St>0?1:-1,nt=new L(O[0]*K,O[1]*K,0),ft=(180-P.angle)*Math.PI/180,ut=Math.min(ft,Math.PI),vt=new L(w[0],w[1],0),st=new qt().makeTranslation(vt.x,vt.y,vt.z).multiply(new qt().makeRotationAxis(nt,ft)).multiply(new qt().makeTranslation(-vt.x,-vt.y,-vt.z)),xt=new qt().makeTranslation(vt.x,vt.y,vt.z).multiply(new qt().makeRotationAxis(nt,ut)).multiply(new qt().makeTranslation(-vt.x,-vt.y,-vt.z));z=n[M].clone().invert().multiply(st).multiply(n[y]),k=n[M].clone().invert().multiply(xt).multiply(n[y]);const kt=new qt().makeRotationAxis(nt,ft/2);f[y]=new L(0,0,1).transformDirection(g[M].clone().multiply(n[M].clone().invert()).multiply(kt)),p[y]=M}m[y]=m[M].clone().multiply(z),g[y]=g[M].clone().multiply(k),_[y]=new L(0,0,1).transformDirection(g[y]),x(y)}};m[h]=n[h].clone(),g[h]=n[h].clone(),_[h]=new L(0,0,1),x(h);for(let M=0;M<e;M++)T[M]||(m[M]=n[M],_[M]=new L(0,0,1));const E=c.reduce((M,y)=>Math.max(M,y),0)+1,U=new Array(E);for(let M=0;M<e;M++)U[c[M]]=_[M];const R=new Array(E).fill(null);R[u]=new L;const A=[u];for(;A.length;){const M=A.shift(),y=new Map;r.forEach((P,X)=>{const z=s[X];if(!(z===null||z>=180))for(const[k,G]of[[P.a,P.b],[P.b,P.a]]){if(c[k]!==M||c[G]===M||R[c[G]]!==null)continue;const w=y.get(c[G])??{lu:0,lv:0,count:0};w.lu+=i.facets[k].layer,w.lv+=i.facets[G].layer,w.count++,y.set(c[G],w)}});for(const[P,{lu:X,lv:z,count:k}]of y){const G=X/k*t,w=z/k*t;let I=null;for(let O=0;O<e&&!I;O++)c[O]===P&&f[O]&&c[p[O]]===M&&(I=f[O]);R[P]=R[M].clone().addScaledVector(U[M],G).addScaledVector(I??U[P],w-G).addScaledVector(U[P],-w),A.push(P)}}return{matrices:m.map((M,y)=>{if(t===0)return M;const P=(R[c[y]]??new L).clone().addScaledVector(_[y],i.facets[y].layer*t),X=M.clone();return X.elements[12]+=P.x,X.elements[13]+=P.y,X.elements[14]+=P.z,X}),layerDirs:_,creases:r}},C_=.05,Ta=i=>{if(i.overrides.length===0)return!0;const{matrices:t,creases:e}=vs(i,0),n=new L,r=new L;for(const s of e)for(const o of s.seg)if(n.set(o[0],o[1],0).applyMatrix4(t[s.a]),r.set(o[0],o[1],0).applyMatrix4(t[s.b]),n.distanceTo(r)>C_)return!1;return!0},R_=(i,t)=>{var o;const e=((o=fr(i,t))==null?void 0:o.angle)??180,r=(e<0?-1:1)*(Math.abs(Math.abs(e)-90)<1?45:90),s=i.overrides.filter(a=>!gs(a.point,t.seg));return s.push({point:ea(t),angle:r}),Ta({facets:i.facets,overrides:s})},P_=.05,Jl=.01,L_=(i,t,e)=>{const n=Le(e,i),r=Le(e,t),s=Qt(i,t);if(n<=$t&&r<=$t)return 0;if(n>=-$t&&r>=-$t)return s;const o=n/(n-r),a=Tn(i,t,o);return n>0?Qt(i,a):Qt(a,t)},os=(i,t)=>{const{from:e,to:n,sign:r}=t;if(Qt(e,n)<P_)return null;const s=Ma(e,n),o=i.facets,a=o.length,l=nn(i),{compOf:c}=ba(i,l);let u;if(t.fromPaper?u=o.findIndex(w=>jc(w.poly,t.fromPaper)):(u=_s(i,e,r,void 0,T_(i,l)),u===-1&&(u=_s(i,e,r))),u===-1)return null;const h=c[u],d=o.map(tn),m=o.map(w=>ws(Gi(w.iso),s)),g=o.map(w=>As(w.iso)?-1:1),_=o.map((w,I)=>dr(w.poly,m[I],g[I])),f=w=>_[w].length>=3&&Math.abs(kn(_[w]))>1e-4,p=o.map((w,I)=>_[I].map(O=>ue(w.iso,O)));if(!f(u))return null;const T=new Set,x=[u];for(;x.length>0;){const w=x.pop();if(!T.has(w)&&f(w)){T.add(w);for(const I of l){if(I.a!==w&&I.b!==w)continue;const O=I.a===w?I.b:I.a;if(T.has(O))continue;const J=ue(o[w].iso,I.seg[0]),tt=ue(o[w].iso,I.seg[1]);if(L_(J,tt,s)>Jl){if(c[O]!==h)return null;x.push(O)}}for(let I=0;I<a;I++)T.has(I)||c[I]!==h||r*(o[I].layer-o[w].layer)<=0||ta(d[I],p[w])&&x.push(I)}}const E=ur(s),U=[],R=[],A=[];if(o.forEach((w,I)=>{if(!T.has(I)){R.push({...w,poly:w.poly}),A.push(c[I]);return}const{pos:O,neg:J}=Cs(w.poly,m[I]),tt=g[I]===1?O:J,rt=g[I]===1?J:O;tt&&U.push({facet:{poly:tt,iso:Sn(E,w.iso),layer:w.layer},origLayer:w.layer}),rt&&(R.push({poly:rt,iso:w.iso,layer:w.layer}),A.push(c[I]))}),U.length===0||!A.includes(h))return null;const N=U.map(w=>tn(w.facet));for(const w of b_(i,l))if(c[w.a]===h!=(c[w.b]===h)){for(const I of N)if(y_(w.seg[0],w.seg[1],I,.005)>Jl)return null}let M=null;R.forEach((w,I)=>{if(A[I]!==h)return;const O=tn(w);N.some(tt=>ta(O,tt))&&(M===null||r*w.layer>r*M)&&(M=w.layer)});const y=M===null?0:M+r,P=U.map(w=>w.origLayer),X=r===1?Math.max(...P):Math.min(...P);U.forEach(w=>{w.facet.layer=r===1?y+(X-w.origLayer):y-(w.origLayer-X)});const z=[...R,...U.map(w=>w.facet)];Zc(z),$c(z);const k={facets:z,overrides:i.overrides};if(!Ta(k))return null;const G=U.map((w,I)=>R.length+I);return{state:k,foldLine:s,movedFacets:G,params:t}},ho=.02,D_=(i,t,e)=>{const n=os(i,t);if(n)return n;if(e===null)return null;const r=e.params.to,s=Qt(r,t.to);if(s<=ho)return e;let o=e,a=0,l=1,c=ho*2/s;for(;a+c<1;){const u=os(i,{...t,to:Tn(r,t.to,a+c)});if(u)o=u,a=a+c,c*=2;else{l=a+c;break}}for(;(l-a)*s>ho;){const u=(a+l)/2,h=os(i,{...t,to:Tn(r,t.to,u)});h?(o=h,a=u):l=u}return o},Aa=.05,wa=(i,t,e)=>{if(i.overrides.length===0)return!1;for(const n of t)if((e.has(n.a)||e.has(n.b))&&fr(i,n))return!0;return!1},ni=(i,t)=>[ue(i.facets[t.a].iso,t.seg[0]),ue(i.facets[t.a].iso,t.seg[1])],I_=(i,t,e)=>{const n=Le(e,i),r=Le(e,t),s=Qt(i,t);if(n<=$t&&r<=$t)return 0;if(n>=-$t&&r>=-$t)return s;const o=n/(n-r),a=Tn(i,t,o);return n>0?Qt(i,a):Qt(a,t)},U_=(i,t)=>{const e=i.length,n=.02,r=(l,c)=>Sa(l.poly,c.poly).filter(u=>Qt(u[0],u[1])>n),s=Array.from({length:e},()=>[]);for(let l=0;l<e;l++)for(let c=l+1;c<e;c++)r(i[l],i[c]).length>0&&(s[l].push(c),s[c].push(l));const o=i.map(l=>l.reassigned?l.iso:null),a=[];for(i.forEach((l,c)=>{l.reassigned&&a.push(c)});a.length>0;){const l=a.shift();for(const c of s[l]){if(o[c]!==null||r(i[l],i[c]).every(_=>_.every(f=>Qt(ue(o[l],f),ue(i[c].iso,f))<.001)))continue;const d=t[i[l].sourceIdx],m=t[i[c].sourceIdx],g=Sn(Sn(o[l],Gi(d)),m);o[c]=g,i[c].iso=g,i[c].reassigned=!0,i[c].layer=i[l].layer+(i[c].oldLayer-i[l].oldLayer),a.push(c)}}return i.map(l=>({poly:l.poly,iso:l.iso,layer:l.layer}))},Ca=(i,t,e,n)=>{const r=U_(i,t);if(r===null)return null;Zc(r),$c(r);const s={facets:r,overrides:e};return A_(s)!==null||!Ta(s)?null:{state:s,foldLine:n}},N_=(i,t)=>{const{grab:e,to:n,sign:r}=t;if(Qt(e,n)<Aa)return null;const s=Ma(e,n),o=_s(i,e,r);if(o===-1)return null;const a=i.facets,l=nn(i),c=a.map(E=>ws(Gi(E.iso),s)),u=a.map(E=>As(E.iso)?-1:1),h=E=>{const U=dr(a[E].poly,c[E],u[E]);return U.length>=3?Math.abs(kn(U)):0};if(h(o)<1e-4)return null;const d=new Set,m=[o];for(;m.length>0;){const E=m.pop();if(!(d.has(E)||h(E)<1e-4)){d.add(E);for(const U of l){if(U.a!==E&&U.b!==E)continue;const R=U.a===E?U.b:U.a;if(d.has(R))continue;const[A,N]=ni(i,U);I_(A,N,s)>$t*100&&m.push(R)}}}if(wa(i,l,d))return null;const g=ur(s),_=[],f=[];if(a.forEach((E,U)=>{if(!d.has(U)){_.push({poly:E.poly,iso:E.iso,layer:E.layer,oldLayer:E.layer,sourceIdx:U,reassigned:!1});return}const{pos:R,neg:A}=Cs(E.poly,c[U]),N=u[U]===1?R:A,M=u[U]===1?A:R;M&&_.push({poly:M,iso:E.iso,layer:E.layer,oldLayer:E.layer,sourceIdx:U,reassigned:!1}),N&&(_.push({poly:N,iso:Sn(g,E.iso),layer:E.layer,oldLayer:E.layer,sourceIdx:U,reassigned:!0}),f.push(E.layer))}),f.length===0)return null;const p=Math.min(...f),T=Math.max(...f);if(p===T)return null;const x=T-p;return _.forEach(E=>{if(E.reassigned){const U=p+T-E.layer;E.layer=p+(U-p+1)*x/(x+2)}}),Ca(_,i.facets.map(E=>E.iso),i.overrides,s)},O_=(i,t)=>{const{grab:e,to:n,sign:r}=t,s=t.flip??!1;if(Qt(e,n)<Aa)return null;const o=_s(i,e,r);if(o===-1)return null;const a=i.facets,l=nn(i);let c=null,u=1/0;for(const k of l){if(k.a!==o&&k.b!==o)continue;const[G,w]=ni(i,k),I=Rs(e,G,w);I<u&&(u=I,c=k)}if(!c)return null;const h=c.a===o?c.b:c.a,[d,m]=ni(i,c),[g,_]=Qt(d,e)<Qt(m,e)?[m,d]:[d,m],f=fo(na(_,g)),p=fo(na(n,g)),T=fo([f[0]+p[0],f[1]+p[1]]);if(!isFinite(T[0])||Math.hypot(T[0],T[1])<$t)return null;const x={p:g,d:T},E={p:g,d:p},U=ur(x),R=ur(E),A=s?Sn(R,U):U,N=s?R:null;if(wa(i,l,new Set([o,h])))return null;const M=Math.max(...a.map(k=>k.layer)),y=Math.min(...a.map(k=>k.layer)),P=k=>r===1?M+k:y-k,X=(k,G,w)=>s?P(k?G?3:4:G?2:1):k?G?P(1):w:P(G?2:3),z=[];for(let k=0;k<a.length;k++){const G=a[k];if(k!==o&&k!==h){z.push({poly:G.poly,iso:G.iso,layer:G.layer,oldLayer:G.layer,sourceIdx:k,reassigned:!1});continue}const w=ws(Gi(G.iso),x),{pos:I,neg:O}=Cs(G.poly,w);if(!I||!O)return null;const J=ya(c.seg[0],c.seg[1]),tt=Jc(I,J),rt=tt?I:O,St=tt?O:I,Ct=k===o;z.push({poly:rt,iso:Sn(A,G.iso),layer:X(Ct,!0,G.layer),oldLayer:G.layer,sourceIdx:k,reassigned:!0}),z.push({poly:St,iso:N?Sn(N,G.iso):G.iso,layer:X(Ct,!1,G.layer),oldLayer:G.layer,sourceIdx:k,reassigned:N!==null})}return Ca(z,i.facets.map(k=>k.iso),i.overrides,x)},F_=(i,t)=>{const{grab:e,to:n,sign:r}=t;if(Qt(e,n)<Aa)return null;const s=i.facets.map((o,a)=>({i:a,f:o})).filter(({f:o})=>{const a=tn(o);return a.length>=3&&H_(a,e)}).sort((o,a)=>r===1?a.f.layer-o.f.layer:o.f.layer-a.f.layer);for(const{i:o}of s){const a=z_(i,o,e,n,r);if(a)return a}return null},B_=(i,t,e)=>{const n=(o,a)=>Math.abs(o.a-a.a)<1e-6&&Math.abs(o.b-a.b)<1e-6&&Math.abs(o.c-a.c)<1e-6&&Math.abs(o.d-a.d)<1e-6&&Math.abs(o.tx-a.tx)<.001&&Math.abs(o.ty-a.ty)<.001,r=new Set([e]),s=[e];for(;s.length>0;){const o=s.pop();for(const a of t){if(a.a!==o&&a.b!==o)continue;const l=a.a===o?a.b:a.a;r.has(l)||n(i.facets[o].iso,i.facets[l].iso)&&(r.add(l),s.push(l))}}return r},z_=(i,t,e,n,r)=>{const s=i.facets,o=nn(i),a=Ma(e,n),l=ur(a),c=B_(i,o,t),u=[],h=w=>{u.some(I=>Qt(w,I)<$t*1e3)||u.push(w)},d=(w,I)=>{for(const O of o){if(!c.has(O.a)||!c.has(O.b)||O.a!==I&&O.b!==I)continue;const J=ni(i,O);if(Rs(w,J[0],J[1])<$t*1e3)return!0}return!1};for(const w of c){const I=tn(s[w]);for(let O=0;O<I.length;O++){const J=I[O],tt=I[(O+1)%I.length],rt=Le(a,J),St=Le(a,tt);let Ct=null;Math.abs(rt)<$t*100?Ct=J:(rt>$t&&St<-$t||rt<-$t&&St>$t)&&(Ct=Tn(J,tt,rt/(rt-St))),Ct&&!d(Ct,w)&&h(Ct)}}if(u.length!==2)return null;const[m,g]=u,_=w=>{let I=null;for(const O of o){const J=c.has(O.a),tt=c.has(O.b);if(J===tt)continue;const rt=ni(i,O);if(k_(w,rt)){if(rt.some(St=>Le(a,St)>.01))return O;I=I??O}}return I},f=_(m),p=_(g);if(!f||!p||f===p)return null;const T=c.has(f.a)?f.b:f.a,x=c.has(p.a)?p.b:p.a;if(T===x)return null;const E=ni(i,f),U=ni(i,p);let R=null;for(const w of E)for(const I of U)Qt(w,I)<$t*1e4&&(R=w);if(!R||Le(a,R)<$t)return null;const A=new Set([...c,T,x]);if(wa(i,o,A))return null;const N=w=>tn(s[w]).every(I=>Le(a,I)>-.01);if(!N(T)||!N(x))return null;const M=s.map(w=>w.iso),y=[],P=[];for(const w of c){const I=s[w],O=ws(Gi(I.iso),a),{pos:J,neg:tt}=Cs(I.poly,O);if(!J||!tt)return null;const rt=As(I.iso)?-1:1,St=rt===1?J:tt,Ct=rt===1?tt:J;y.push({poly:Ct,iso:I.iso,layer:I.layer,oldLayer:I.layer,sourceIdx:w,reassigned:!1}),P.push({poly:St,iso:Sn(l,I.iso),oldLayer:I.layer,sourceIdx:w})}for(const w of[T,x]){const I=s[w];P.push({poly:I.poly,iso:Sn(l,I.iso),oldLayer:I.layer,sourceIdx:w})}for(const w of[T,x])for(let I=0;I<s.length;I++){if(A.has(I))continue;const O=Sa(s[w].poly,s[I].poly).filter(rt=>Qt(rt[0],rt[1])>.02);if(O.length===0)continue;if(!O.map(rt=>rt.map(St=>ue(s[I].iso,St))).every(rt=>rt.every(St=>Math.abs(Le(a,St))<.01)))return null;A.add(I),y.push({poly:s[I].poly,iso:s[I].iso,layer:s[I].layer,oldLayer:s[I].layer,sourceIdx:I,reassigned:!1})}const X=Math.max(...s.map(w=>w.layer)),z=Math.min(...s.map(w=>w.layer)),k=r===1?X+1:z-1,G=r===1?Math.max(...P.map(w=>w.oldLayer)):Math.min(...P.map(w=>w.oldLayer));for(const w of P)y.push({poly:w.poly,iso:w.iso,layer:k+r*Math.abs(G-w.oldLayer),oldLayer:w.oldLayer,sourceIdx:w.sourceIdx,reassigned:!0});return s.forEach((w,I)=>{A.has(I)||y.push({poly:w.poly,iso:w.iso,layer:w.layer,oldLayer:w.layer,sourceIdx:I,reassigned:!1})}),Ca(y,M,i.overrides,a)},H_=(i,t)=>{let e=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){const[s,o]=i[n],[a,l]=i[r];o>t[1]!=l>t[1]&&t[0]<(a-s)*(t[1]-o)/(l-o)+s&&(e=!e)}return e?!0:Jc(i,t)},k_=(i,t)=>Rs(i,t[0],t[1])<$t*1e4,na=(i,t)=>[i[0]-t[0],i[1]-t[1]],fo=i=>{const t=Math.hypot(i[0],i[1]);return[i[0]/t,i[1]/t]},Rs=(i,t,e)=>{const n=na(e,t),r=Math.max(0,Math.min(1,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/(n[0]*n[0]+n[1]*n[1]))),s=[t[0]+n[0]*r,t[1]+n[1]*r];return Qt(i,s)},Jc=(i,t)=>{for(let e=0;e<i.length;e++)if(Rs(t,i[e],i[(e+1)%i.length])<.005)return!0;return!1},Zi=(i,t)=>{switch(t.type){case"simple":{const e=os(i,{from:t.from,to:t.to,sign:t.sign,fromPaper:t.fromPaper});return e?e.state:null}case"reverse":{const e=N_(i,{grab:t.grab,to:t.to,sign:t.sign});return e?e.state:null}case"squash":{const e=O_(i,{grab:t.grab,to:t.to,sign:t.sign,flip:t.flip});return e?e.state:null}case"petal":{const e=F_(i,{grab:t.grab,to:t.to,sign:t.sign});return e?e.state:null}case"angle":return G_(i,t.point,t.angle)}},G_=(i,t,e)=>{const n=nn(i).find(s=>gs(t,s.seg));if(!n)return null;e=Math.max(-180,Math.min(180,e));const r=i.overrides.filter(s=>!gs(s.point,n.seg));return e<180&&r.push({point:t,angle:e}),{facets:i.facets,overrides:r}},Ql={type:"change"},po={type:"start"},tc={type:"end"},Kr=new da,ec=new Nn,V_=Math.cos(70*xc.DEG2RAD);class W_ extends ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",mt),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",mt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ql),n.update(),s=r.NONE},this.update=function(){const v=new L,H=new Hn().setFromUnitVectors(t.up,new L(0,1,0)),V=H.clone().invert(),j=new L,et=new Hn,bt=new L,Dt=2*Math.PI;return function(pe=null){const Vt=n.object.position;v.copy(Vt).sub(n.target),v.applyQuaternion(H),a.setFromVector3(v),n.autoRotate&&s===r.NONE&&X(y(pe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(me)&&isFinite(he)&&(me<-Math.PI?me+=Dt:me>Math.PI&&(me-=Dt),he<-Math.PI?he+=Dt:he>Math.PI&&(he-=Dt),me<=he?a.theta=Math.max(me,Math.min(he,a.theta)):a.theta=a.theta>(me+he)/2?Math.max(me,a.theta):Math.min(he,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let An=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=tt(a.radius);else{const ye=a.radius;a.radius=tt(a.radius*c),An=ye!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(V),Vt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&R){let ye=null;if(n.object.isPerspectiveCamera){const fn=v.length();ye=tt(fn*c);const Wn=fn-ye;n.object.position.addScaledVector(E,Wn),n.object.updateMatrixWorld(),An=!!Wn}else if(n.object.isOrthographicCamera){const fn=new L(U.x,U.y,0);fn.unproject(n.object);const Wn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),An=Wn!==n.object.zoom;const Vi=new L(U.x,U.y,0);Vi.unproject(n.object),n.object.position.sub(Vi).add(fn),n.object.updateMatrixWorld(),ye=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ye).add(n.object.position):(Kr.origin.copy(n.object.position),Kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Kr.direction))<V_?t.lookAt(n.target):(ec.setFromNormalAndCoplanarPoint(n.object.up,n.target),Kr.intersectPlane(ec,n.target))))}else if(n.object.isOrthographicCamera){const ye=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ye!==n.object.zoom&&(n.object.updateProjectionMatrix(),An=!0)}return c=1,R=!1,An||j.distanceToSquared(n.object.position)>o||8*(1-et.dot(n.object.quaternion))>o||bt.distanceToSquared(n.target)>o?(n.dispatchEvent(Ql),j.copy(n.object.position),et.copy(n.object.quaternion),bt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",gt),n.domElement.removeEventListener("pointerdown",Ot),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",mt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new zl,l=new zl;let c=1;const u=new L,h=new ht,d=new ht,m=new ht,g=new ht,_=new ht,f=new ht,p=new ht,T=new ht,x=new ht,E=new L,U=new ht;let R=!1;const A=[],N={};let M=!1;function y(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function P(v){const H=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*H)}function X(v){l.theta-=v}function z(v){l.phi-=v}const k=function(){const v=new L;return function(V,j){v.setFromMatrixColumn(j,0),v.multiplyScalar(-V),u.add(v)}}(),G=function(){const v=new L;return function(V,j){n.screenSpacePanning===!0?v.setFromMatrixColumn(j,1):(v.setFromMatrixColumn(j,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(V),u.add(v)}}(),w=function(){const v=new L;return function(V,j){const et=n.domElement;if(n.object.isPerspectiveCamera){const bt=n.object.position;v.copy(bt).sub(n.target);let Dt=v.length();Dt*=Math.tan(n.object.fov/2*Math.PI/180),k(2*V*Dt/et.clientHeight,n.object.matrix),G(2*j*Dt/et.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(V*(n.object.right-n.object.left)/n.object.zoom/et.clientWidth,n.object.matrix),G(j*(n.object.top-n.object.bottom)/n.object.zoom/et.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(v,H){if(!n.zoomToCursor)return;R=!0;const V=n.domElement.getBoundingClientRect(),j=v-V.left,et=H-V.top,bt=V.width,Dt=V.height;U.x=j/bt*2-1,U.y=-(et/Dt)*2+1,E.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function tt(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function rt(v){h.set(v.clientX,v.clientY)}function St(v){J(v.clientX,v.clientX),p.set(v.clientX,v.clientY)}function Ct(v){g.set(v.clientX,v.clientY)}function K(v){d.set(v.clientX,v.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const H=n.domElement;X(2*Math.PI*m.x/H.clientHeight),z(2*Math.PI*m.y/H.clientHeight),h.copy(d),n.update()}function nt(v){T.set(v.clientX,v.clientY),x.subVectors(T,p),x.y>0?I(P(x.y)):x.y<0&&O(P(x.y)),p.copy(T),n.update()}function ft(v){_.set(v.clientX,v.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),w(f.x,f.y),g.copy(_),n.update()}function ut(v){J(v.clientX,v.clientY),v.deltaY<0?O(P(v.deltaY)):v.deltaY>0&&I(P(v.deltaY)),n.update()}function vt(v){let H=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):w(-n.keyPanSpeed,0),H=!0;break}H&&(v.preventDefault(),n.update())}function st(v){if(A.length===1)h.set(v.pageX,v.pageY);else{const H=Nt(v),V=.5*(v.pageX+H.x),j=.5*(v.pageY+H.y);h.set(V,j)}}function xt(v){if(A.length===1)g.set(v.pageX,v.pageY);else{const H=Nt(v),V=.5*(v.pageX+H.x),j=.5*(v.pageY+H.y);g.set(V,j)}}function kt(v){const H=Nt(v),V=v.pageX-H.x,j=v.pageY-H.y,et=Math.sqrt(V*V+j*j);p.set(0,et)}function D(v){n.enableZoom&&kt(v),n.enablePan&&xt(v)}function te(v){n.enableZoom&&kt(v),n.enableRotate&&st(v)}function Wt(v){if(A.length==1)d.set(v.pageX,v.pageY);else{const V=Nt(v),j=.5*(v.pageX+V.x),et=.5*(v.pageY+V.y);d.set(j,et)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const H=n.domElement;X(2*Math.PI*m.x/H.clientHeight),z(2*Math.PI*m.y/H.clientHeight),h.copy(d)}function Xt(v){if(A.length===1)_.set(v.pageX,v.pageY);else{const H=Nt(v),V=.5*(v.pageX+H.x),j=.5*(v.pageY+H.y);_.set(V,j)}f.subVectors(_,g).multiplyScalar(n.panSpeed),w(f.x,f.y),g.copy(_)}function Et(v){const H=Nt(v),V=v.pageX-H.x,j=v.pageY-H.y,et=Math.sqrt(V*V+j*j);T.set(0,et),x.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),I(x.y),p.copy(T);const bt=(v.pageX+H.x)*.5,Dt=(v.pageY+H.y)*.5;J(bt,Dt)}function se(v){n.enableZoom&&Et(v),n.enablePan&&Xt(v)}function Ut(v){n.enableZoom&&Et(v),n.enableRotate&&Wt(v)}function Ot(v){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",S)),!_t(v)&&(Gt(v),v.pointerType==="touch"?Ft(v):Y(v)))}function C(v){n.enabled!==!1&&(v.pointerType==="touch"?ot(v):Q(v))}function S(v){switch(Rt(v),A.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(tc),s=r.NONE;break;case 1:const H=A[0],V=N[H];Ft({pointerId:H,pageX:V.x,pageY:V.y});break}}function Y(v){let H;switch(v.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case Un.DOLLY:if(n.enableZoom===!1)return;St(v),s=r.DOLLY;break;case Un.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Ct(v),s=r.PAN}else{if(n.enableRotate===!1)return;rt(v),s=r.ROTATE}break;case Un.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;rt(v),s=r.ROTATE}else{if(n.enablePan===!1)return;Ct(v),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(po)}function Q(v){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;K(v);break;case r.DOLLY:if(n.enableZoom===!1)return;nt(v);break;case r.PAN:if(n.enablePan===!1)return;ft(v);break}}function it(v){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(v.preventDefault(),n.dispatchEvent(po),ut($(v)),n.dispatchEvent(tc))}function $(v){const H=v.deltaMode,V={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(H){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return v.ctrlKey&&!M&&(V.deltaY*=10),V}function At(v){v.key==="Control"&&(M=!0,n.domElement.getRootNode().addEventListener("keyup",ct,{passive:!0,capture:!0}))}function ct(v){v.key==="Control"&&(M=!1,n.domElement.getRootNode().removeEventListener("keyup",ct,{passive:!0,capture:!0}))}function mt(v){n.enabled===!1||n.enablePan===!1||vt(v)}function Ft(v){switch(Lt(v),A.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;st(v),s=r.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;xt(v),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(v),s=r.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(v),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(po)}function ot(v){switch(Lt(v),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Wt(v),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Xt(v),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(v),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ut(v),n.update();break;default:s=r.NONE}}function gt(v){n.enabled!==!1&&v.preventDefault()}function Gt(v){A.push(v.pointerId)}function Rt(v){delete N[v.pointerId];for(let H=0;H<A.length;H++)if(A[H]==v.pointerId){A.splice(H,1);return}}function _t(v){for(let H=0;H<A.length;H++)if(A[H]==v.pointerId)return!0;return!1}function Lt(v){let H=N[v.pointerId];H===void 0&&(H=new ht,N[v.pointerId]=H),H.set(v.pageX,v.pageY)}function Nt(v){const H=v.pointerId===A[0]?A[1]:A[0];return N[H]}n.domElement.addEventListener("contextmenu",gt),n.domElement.addEventListener("pointerdown",Ot),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",it,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}class X_{constructor({camera:t,scene:e,domElement:n,getInteractables:r,onPress:s,onMove:o,onRelease:a,enablePan:l=!1,showPointer:c=!1,showPlane:u=!1,faceBounded:h=!0,multitouchDelayMs:d=20}){Z(this,"cameraRef");Z(this,"domElement");Z(this,"controls");Z(this,"pointerType",null);Z(this,"pointer",new ht);Z(this,"showPointer");Z(this,"showPlane");Z(this,"faceBounded");Z(this,"raycaster",new Wc);Z(this,"multitouchTimer",null);Z(this,"multitouchDelayMs");Z(this,"isInteracting",!1);Z(this,"interactionSphere");Z(this,"interactingPlane");Z(this,"touchPoint",null);Z(this,"touchNormal",null);Z(this,"touchMesh",null);Z(this,"getInteractables");Z(this,"onPress");Z(this,"onMove");Z(this,"onRelease");Z(this,"intersects",[]);Z(this,"updatePointer",t=>{"touches"in t?(this.pointer.x=t.touches[0].clientX/window.innerWidth*2-1,this.pointer.y=-(t.touches[0].clientY/window.innerHeight)*2+1):(this.pointer.x=t.clientX/window.innerWidth*2-1,this.pointer.y=-(t.clientY/window.innerHeight)*2+1)});Z(this,"onPointerDown",t=>{if(t.target!==this.domElement)return;t.preventDefault();const e="touches"in t;if(this.pointerType=e?"touch":"mouse",!(!e&&t.altKey)){if(e&&t.touches.length>1&&this.multitouchTimer!==null){clearTimeout(this.multitouchTimer),this.multitouchTimer=null;return}this.updatePointer(t),this.raycaster.setFromCamera(this.pointer,this.cameraRef),this.intersects=this.raycaster.intersectObjects(this.getInteractables()),this.intersects.length!==0&&(e?this.multitouchTimer=window.setTimeout(()=>{this.startInteracting(),this.multitouchTimer=null},this.multitouchDelayMs):this.startInteracting())}});Z(this,"startInteracting",()=>{var n;this.controls.enabled=!1,this.isInteracting=!0,this.touchPoint=this.intersects[0].point,this.touchMesh=this.intersects[0].object,this.touchNormal=this.intersects[0].face.normal.clone().normalize(),this.touchNormal.transformDirection(this.touchMesh.matrixWorld),this.touchNormal.dot(this.raycaster.ray.direction)>0&&this.touchNormal.negate(),this.interactionSphere.visible=this.showPointer,this.interactionSphere.position.copy(this.intersects[0].point),this.interactingPlane.visible=this.showPlane;const t=new Hn().setFromUnitVectors(new L(0,0,1),this.touchNormal),e=this.intersects[0].point;this.interactingPlane.position.copy(e),this.interactingPlane.quaternion.copy(t),(n=this.onPress)==null||n.call(this)});Z(this,"onPointerMove",t=>{var e;this.isInteracting&&(this.updatePointer(t),this.raycaster.setFromCamera(this.pointer,this.cameraRef),this.intersects=this.raycaster.intersectObjects(this.faceBounded?[this.touchMesh]:[this.touchMesh,this.interactingPlane]),this.intersects.length!==0&&(this.touchPoint=this.intersects[0].point,this.interactionSphere.position.copy(this.intersects[0].point),(e=this.onMove)==null||e.call(this)))});Z(this,"onPointerUp",()=>{var t;this.isInteracting&&(this.controls.enabled=!0,this.isInteracting=!1,this.touchPoint=null,this.touchNormal=null,this.touchMesh=null,this.interactionSphere.visible=!1,this.interactingPlane.visible=!1,(t=this.onRelease)==null||t.call(this))});Z(this,"getIntersections",()=>this.intersects);Z(this,"update",()=>{this.controls.update()});Z(this,"dispose",()=>{this.controls.dispose(),window.removeEventListener("mousedown",this.onPointerDown),window.removeEventListener("mousemove",this.onPointerMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchstart",this.onPointerDown),window.removeEventListener("touchmove",this.onPointerMove),window.removeEventListener("touchend",this.onPointerUp),this.interactionSphere.geometry.dispose(),this.interactionSphere.material.dispose()});this.cameraRef=t,this.domElement=n,this.controls=new W_(t,n),this.controls.enablePan=l,this.showPointer=c,this.showPlane=u,this.faceBounded=h,this.multitouchDelayMs=d,this.getInteractables=r,this.onPress=s,this.onMove=o,this.onRelease=a;const m=new xa(.1,16,16),g=new Fi({color:65535});this.interactionSphere=new Ie(m,g),e.add(this.interactionSphere),this.interactionSphere.visible=!1;const _=new _r(1e3,1e3),f=new Fi({color:16776960,side:Ze,transparent:!0,opacity:.5});this.interactingPlane=new Ie(_,f),e.add(this.interactingPlane),this.interactingPlane.visible=!1,window.addEventListener("mousedown",this.onPointerDown,!1),window.addEventListener("mousemove",this.onPointerMove,!1),window.addEventListener("mouseup",this.onPointerUp,!1),window.addEventListener("touchstart",this.onPointerDown,!1),window.addEventListener("touchmove",this.onPointerMove,!1),window.addEventListener("touchend",this.onPointerUp,!1)}}const q_=[{id:"plain",label:"Plain"},{id:"seigaiha",label:"Seigaiha"},{id:"harlequin",label:"Harlequin"},{id:"checker",label:"Checker"},{id:"dots",label:"Dots"}],Qc=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,Ra=(i,t,e,n,r={})=>new en({side:i,uniforms:{color0:{value:new Bt(t)},color1:{value:new Bt(e)},...r},vertexShader:Qc,fragmentShader:`
            varying vec2 vUv;
            uniform vec3 color0;
            uniform vec3 color1;
            ${n}
        `}),Y_=(i,t,e)=>Ra(i,t,e,`
        void main() {
            vec2 uv = vUv * 1.0;
            vec2 gridPos = fract(uv);
            float dist = distance(gridPos, vec2(0.5, 0.5));
            float circle = 1.0 - smoothstep(0.34, 0.36, dist);
            gl_FragColor = vec4(mix(color1, color0, circle), 1.0);
        }`),j_=(i,t,e)=>Ra(i,t,e,`
        void main() {
            vec2 cell = floor(vUv * 1.0);
            float k = mod(cell.x + cell.y, 2.0);
            gl_FragColor = vec4(mix(color0, color1, k), 1.0);
        }`),K_=(i,t,e)=>Ra(i,t,e,`
        void main() {
            vec2 uv = vUv * 1.5;
            vec2 cell = floor(uv);
            vec2 gridPos = fract(uv);
            vec2 center = vec2(0.5) + 0.15 * vec2(sin(cell.x * 7.13 + cell.y * 3.7), cos(cell.x * 2.3 + cell.y * 5.1));
            float dist = distance(gridPos, center);
            float circle = 1.0 - smoothstep(0.13, 0.15, dist);
            gl_FragColor = vec4(mix(color0, color1, circle), 1.0);
        }`),Z_=(i,t,e)=>new en({side:i,uniforms:{density:{value:.5},outer_radius:{value:.45},vertical_spacing:{value:.5},vertical_stagger:{value:.25},horizontal_spacing:{value:.75},color0:{value:new Bt(t)},color1:{value:new Bt(e)}},vertexShader:Qc,fragmentShader:`
            varying vec2 vUv;

            uniform float density;
            uniform float outer_radius;
            uniform float vertical_spacing;
            uniform float vertical_stagger;
            uniform float horizontal_spacing;
            uniform vec3 color0;
            uniform vec3 color1;

            float drawArc(vec2 uv, vec2 center, float radius) {
                float epsilon = 0.0025;

                vec2 left_avoid = vec2(center.x - horizontal_spacing * 0.5, center.y - vertical_stagger);
                vec2 right_avoid = vec2(center.x + horizontal_spacing * 0.5, center.y - vertical_stagger);
                float dist = distance(uv, center);
                float left_dist = distance(uv, left_avoid);
                float right_dist = distance(uv, right_avoid);

                float arc = smoothstep(radius - epsilon, radius + epsilon, dist);
                float masks = smoothstep(outer_radius - epsilon, outer_radius + epsilon, left_dist) * smoothstep(outer_radius - epsilon, outer_radius + epsilon, right_dist);
                return arc * masks;
            }

            void main() {
                vec3 c0 = color0;
                vec3 c1 = mix(color0, color1, 0.3333);
                vec3 c2 = mix(color0, color1, 0.6666);
                vec3 c3 = color1;

                float r0 = outer_radius;
                float r1 = r0 * 0.70;
                float r2 = r0 * 0.45;
                float r3 = r0 * 0.225;
                float r4 = r0 * 0.0;

                vec2 scale = vec2(horizontal_spacing, vertical_spacing);
                vec2 uv = vUv * density / scale;
                vec2 gridOffset = fract(uv);
                gridOffset *= scale;

                vec2 center = vec2(horizontal_spacing * 0.5, 0.0);
                float arc0 = drawArc(gridOffset, center, r1) - drawArc(gridOffset, center, r0-0.04);
                float arc1 = drawArc(gridOffset, center, r2) - drawArc(gridOffset, center, r1-0.02);
                float arc2 = drawArc(gridOffset, center, r3) - drawArc(gridOffset, center, r2-0.02);
                float arc3 = drawArc(gridOffset, center, r4) - drawArc(gridOffset, center, r3-0.02);

                float right = 1.0 - step(gridOffset.x, horizontal_spacing / 2.0);
                float left = step(gridOffset.x, horizontal_spacing / 2.0);

                vec2 urc = vec2(horizontal_spacing, -vertical_stagger);
                float urarc0 = (drawArc(gridOffset, urc, r1) - drawArc(gridOffset, urc, r0-0.04)) * right;
                float urarc1 = (drawArc(gridOffset, urc, r2) - drawArc(gridOffset, urc, r1-0.02)) * right;
                float urarc2 = (drawArc(gridOffset, urc, r3) - drawArc(gridOffset, urc, r2-0.02)) * right;
                float urarc3 = (drawArc(gridOffset, urc, r4) - drawArc(gridOffset, urc, r3-0.02)) * right;

                vec2 lrc = vec2(horizontal_spacing, vertical_stagger);
                float lrarc0 = (drawArc(gridOffset, lrc, r1) - drawArc(gridOffset, lrc, r0-0.04)) * right;
                float lrarc1 = (drawArc(gridOffset, lrc, r2) - drawArc(gridOffset, lrc, r1-0.02)) * right;
                float lrarc2 = (drawArc(gridOffset, lrc, r3) - drawArc(gridOffset, lrc, r2-0.02)) * right;
                float lrarc3 = (drawArc(gridOffset, lrc, r4) - drawArc(gridOffset, lrc, r3-0.02)) * right;

                vec2 ulc = vec2(0, -vertical_stagger);
                float ularc0 = (drawArc(gridOffset, ulc, r1) - drawArc(gridOffset, ulc, r0-0.04)) * left;
                float ularc1 = (drawArc(gridOffset, ulc, r2) - drawArc(gridOffset, ulc, r1-0.02)) * left;
                float ularc2 = (drawArc(gridOffset, ulc, r3) - drawArc(gridOffset, ulc, r2-0.02)) * left;
                float ularc3 = (drawArc(gridOffset, ulc, r4) - drawArc(gridOffset, ulc, r3-0.02)) * left;

                vec2 llc = vec2(0, vertical_stagger);
                float llarc0 = (drawArc(gridOffset, llc, r1) - drawArc(gridOffset, llc, r0-0.04)) * left;
                float llarc1 = (drawArc(gridOffset, llc, r2) - drawArc(gridOffset, llc, r1-0.02)) * left;
                float llarc2 = (drawArc(gridOffset, llc, r3) - drawArc(gridOffset, llc, r2-0.02)) * left;
                float llarc3 = (drawArc(gridOffset, llc, r4) - drawArc(gridOffset, llc, r3-0.02)) * left;

                vec3 col =
                      c0 * (arc0 + urarc0 + lrarc0 + ularc0 + llarc0)
                    + c1 * (arc1 + urarc1 + lrarc1 + ularc1 + llarc1)
                    + c2 * (arc2 + urarc2 + lrarc2 + ularc2 + llarc2)
                    + c3 * (arc3 + urarc3 + lrarc3 + ularc3 + llarc3);
                gl_FragColor = vec4(col, 1.0);
            }`}),Zr=(i,t,e,n)=>{switch(i){case"plain":return new Fi({color:t,side:n});case"seigaiha":return Z_(n,t,e);case"harlequin":return Y_(n,t,e);case"checker":return j_(n,t,e);case"dots":return K_(n,t,e)}},$_=.0025,J_=(i,t)=>{const e=new Qi,n=[],r=[],{matrices:s,layerDirs:o,creases:a}=vs(i,t.thickness??$_),l=Zr(t.frontPattern,t.frontColor0,t.frontColor1,un),c=Zr(t.backPattern,t.backColor0,t.backColor1,we);n.push(l,c);const u=new bs({color:new Bt(t.edgeColor).getHex(),linewidth:1.5});u.resolution.set(window.innerWidth,window.innerHeight),n.push(u);const h=new Fi({color:new Bt(t.frontColor0).lerp(new Bt("#ffffff"),.3),side:Ze});n.push(h),i.facets.forEach((_,f)=>{const p=new Hc(_.poly.map(([A,N])=>new ht(A,N))),T=new va(p);if(As(_.iso)){const A=T.index;for(let N=0;N<A.count;N+=3){const M=A.getX(N);A.setX(N,A.getX(N+2)),A.setX(N+2,M)}}T.clearGroups(),T.addGroup(0,T.index.count,0),T.addGroup(0,T.index.count,1),n.push(T);const x=new Ie(T,[l,c]);x.applyMatrix4(s[f]),e.add(x),r.push(x);const E=[..._.poly,_.poly[0]].map(([A,N])=>new L(A,N,0).applyMatrix4(s[f])),U=new fs;U.setPositions(E.flatMap(A=>[A.x,A.y,A.z])),n.push(U);const R=new qc(U,u);e.add(R)});for(const _ of a){const f=new L(_.seg[0][0],_.seg[0][1],0).applyMatrix4(s[_.a]),p=new L(_.seg[1][0],_.seg[1][1],0).applyMatrix4(s[_.a]),T=new L(_.seg[0][0],_.seg[0][1],0).applyMatrix4(s[_.b]),x=new L(_.seg[1][0],_.seg[1][1],0).applyMatrix4(s[_.b]);if(f.distanceTo(T)<1e-6&&p.distanceTo(x)<1e-6)continue;const E=new Xe,U=new Float32Array([f.x,f.y,f.z,p.x,p.y,p.z,x.x,x.y,x.z,T.x,T.y,T.z]);E.setAttribute("position",new We(U,3)),E.setIndex([0,1,2,2,3,0]),n.push(E),e.add(new Ie(E,h))}const d=_=>"#"+new Bt(_).multiplyScalar(.3).getHexString();let m=null;return{group:e,facetMeshes:r,matrices:s,layerDirs:o,setEmphasis:_=>{_!==null&&!m&&(m=[Zr(t.frontPattern,d(t.frontColor0),d(t.frontColor1),un),Zr(t.backPattern,d(t.backColor0),d(t.backColor1),we)],n.push(...m)),r.forEach((f,p)=>{f.material=_===null||_.has(p)?[l,c]:m})},dispose:()=>n.forEach(_=>_.dispose())}},Q_=i=>{let t=1;for(const e of i.facets)for(const n of tn(e))t=Math.max(t,Qt([0,0],n));return t},tv=[{id:"square",label:"Square"},{id:"letter",label:"Letter (8.5 x 11)"},{id:"a4",label:"A4"},{id:"triangle",label:"Triangle"},{id:"pentagon",label:"Pentagon"},{id:"hexagon",label:"Hexagon"}],$i=(i,t)=>{switch(i){case"square":{const e=t/2;return[[-e,-e],[e,-e],[e,e],[-e,e]]}case"letter":return nc(t*(8.5/11),t);case"a4":return nc(t*(210/297),t);case"triangle":return mo(3,t/2,Math.PI/2);case"pentagon":return mo(5,t/2,Math.PI/2);case"hexagon":return mo(6,t/2,0)}},nc=(i,t)=>[[-i/2,-t/2],[i/2,-t/2],[i/2,t/2],[-i/2,t/2]],mo=(i,t,e)=>{const n=[];for(let r=0;r<i;r++){const s=e+r*2*Math.PI/i;n.push([t*Math.cos(s),t*Math.sin(s)])}return n},ev={shape:"letter",size:11,style:{frontPattern:"seigaiha",frontColor0:"#87ceeb",frontColor1:"#ffffff",backPattern:"dots",backColor0:"#f5efdf",backColor1:"#ffffff",edgeColor:"#222222",thickness:.0025},background:"#1a1d24"};class nv{constructor(t,e=ev){Z(this,"renderer");Z(this,"scene");Z(this,"camera");Z(this,"controls");Z(this,"config");Z(this,"ops",[]);Z(this,"committed");Z(this,"mode","simple");Z(this,"modelName","untitled");Z(this,"history",[]);Z(this,"historyIndex",-1);Z(this,"paperObj",null);Z(this,"previewObj",null);Z(this,"meshToFacet",new Map);Z(this,"dragFrom",null);Z(this,"dragFromPaper",null);Z(this,"dragInv",null);Z(this,"dragIso",null);Z(this,"dragSign",1);Z(this,"lastGoodTo",null);Z(this,"lastGoodResult",null);Z(this,"lastGoodOp",null);Z(this,"lastGoodState",null);Z(this,"lastPointer",new ht);Z(this,"ctrlDown",!1);Z(this,"touch3DMode",!1);Z(this,"touch3DSelecting",!1);Z(this,"touch3DArmed",!1);Z(this,"hover",null);Z(this,"lockCache",new Map);Z(this,"moverCache",new Map);Z(this,"highlightLine");Z(this,"highlightMat");Z(this,"angleDrag",null);Z(this,"viewAlign",new qt);Z(this,"pendingAlign",null);Z(this,"onChange",()=>{});Z(this,"onSync",()=>{});Z(this,"buildObject",t=>{const e=J_(t,this.config.style);return this.alignObject(e,this.viewAlign),this.scene.add(e.group),e});Z(this,"alignObject",(t,e)=>{t.group.applyMatrix4(e);for(const n of t.matrices)n.premultiply(e);for(const n of t.layerDirs)n.transformDirection(e)});Z(this,"removeObject",t=>{t&&(this.scene.remove(t.group),t.dispose())});Z(this,"rebuild",()=>{this.ops.length===0&&this.viewAlign.identity(),this.removeObject(this.paperObj),this.removeObject(this.previewObj),this.previewObj=null,this.paperObj=this.buildObject(this.committed),this.meshToFacet=new Map(this.paperObj.facetMeshes.map((t,e)=>[t,e])),this.lockCache.clear(),this.moverCache.clear(),this.ctrlDown&&!this.angleDrag&&this.updateHover(this.currentHoverPointer()),this.onChange()});Z(this,"showPreview",t=>{this.removeObject(this.previewObj),this.previewObj=this.buildObject(t),this.paperObj&&(this.paperObj.group.visible=!1)});Z(this,"clearPreview",()=>{this.removeObject(this.previewObj),this.previewObj=null,this.paperObj&&(this.paperObj.group.visible=!0)});Z(this,"animate",()=>{requestAnimationFrame(this.animate),this.movePending&&(this.movePending=!1,this.processMove()),this.hoverPending&&(this.hoverPending=!1,this.ctrlDown&&!this.controls.isInteracting&&this.updateHover()),this.renderer.render(this.scene,this.camera)});Z(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.highlightMat.resolution.set(window.innerWidth,window.innerHeight);for(const t of[this.paperObj,this.previewObj])t==null||t.group.traverse(e=>{const n=e.material;n!=null&&n.resolution&&n.resolution.set(window.innerWidth,window.innerHeight)})});Z(this,"hoverPending",!1);Z(this,"trackPointer",t=>{this.lastPointer.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),this.ctrlDown&&!this.controls.isInteracting&&(this.hoverPending=!0)});Z(this,"onPress",()=>{if(this.ctrlDown){this.startAngleDrag();return}if(this.touch3DGestureActive()){this.touch3DArmed&&this.hover?this.startAngleDrag():(this.touch3DSelecting=!0,this.touch3DArmed=!1,this.updateHover(this.controls.pointer));return}const t=this.controls.touchMesh;if(!t||!this.controls.touchPoint||!this.controls.touchNormal||!this.paperObj)return;const e=this.meshToFacet.get(t);if(e===void 0)return;const n=this.committed.facets[e];this.dragInv=this.paperObj.matrices[e].clone().invert(),this.dragIso=n.iso;const r=this.controls.touchPoint.clone().applyMatrix4(this.dragInv),s=ue(n.iso,[r.x,r.y]);this.dragSign=this.controls.touchNormal.dot(this.paperObj.layerDirs[e])>=0?1:-1;const o=tn(n);this.dragFrom=S_(o,s).point;const a=ue(Gi(n.iso),this.dragFrom);this.dragFromPaper=Tn(a,ss(n.poly),.001),this.lastGoodTo=null,this.lastGoodResult=null,this.lastGoodOp=null,this.lastGoodState=null});Z(this,"movePending",!1);Z(this,"onMove",()=>{this.movePending=!0});Z(this,"processMove",()=>{if(this.angleDrag){this.moveAngleDrag();return}if(this.touch3DSelecting){this.updateHover(this.controls.pointer);return}if(!this.dragFrom||!this.controls.touchPoint||!this.dragInv||!this.dragIso)return;const t=this.controls.touchPoint.clone().applyMatrix4(this.dragInv),e=ue(this.dragIso,[t.x,t.y]);if(this.mode==="simple"){const n=D_(this.committed,{from:this.dragFrom,to:e,sign:this.dragSign,fromPaper:this.dragFromPaper??void 0},this.lastGoodResult);if(n){if(n===this.lastGoodResult)return;this.lastGoodTo=n.params.to,this.lastGoodResult=n,this.lastGoodOp={type:"simple",...n.params},this.lastGoodState=n.state,this.showPreview(n.state)}else this.lastGoodState&&this.showPreview(this.lastGoodState)}else{const n={type:this.mode,grab:this.dragFrom,to:e,sign:this.dragSign},r=Zi(this.committed,n);r?(this.lastGoodTo=e,this.lastGoodOp=n,this.lastGoodState=r,this.showPreview(r)):this.lastGoodState&&this.showPreview(this.lastGoodState)}});Z(this,"onRelease",()=>{const t=this.angleDrag!==null,e=this.touch3DSelecting,n=e&&!t?this.hover:null;this.lastGoodOp&&this.lastGoodState&&(this.pendingAlign&&this.viewAlign.premultiply(this.pendingAlign),this.commitOp(this.lastGoodOp,this.lastGoodState)),this.pendingAlign=null,this.dragFrom=null,this.dragFromPaper=null,this.dragInv=null,this.dragIso=null,this.angleDrag=null,this.touch3DSelecting=!1,this.movePending=!1,this.lastGoodTo=null,this.lastGoodResult=null,this.lastGoodOp=null,this.lastGoodState=null,this.clearPreview(),this.rebuild(),this.ctrlDown?(this.touch3DArmed=!1,this.updateHover(this.currentHoverPointer())):this.touch3DMode?(this.touch3DArmed=!t&&e&&this.hover!==null,n&&this.paperObj?(this.hover=n,this.highlightMat.color.set(this.isCreaseLocked(n.crease)?16731469:16762941),this.setHighlight(n.crease.seg,this.paperObj.matrices[n.facetIdx])):this.clearHover()):(this.touch3DArmed=!1,this.clearHover())});Z(this,"pickCrease",(t=this.lastPointer)=>{if(!this.paperObj)return null;const e=new Wc;e.setFromCamera(t,this.camera);const n=e.intersectObjects(this.paperObj.facetMeshes);if(n.length===0)return null;const r=n[0].object,s=this.meshToFacet.get(r);if(s===void 0)return null;const o=n[0].point.clone().applyMatrix4(r.matrixWorld.clone().invert()),a=[o.x,o.y],l=nn(this.committed).filter(d=>d.a===s||d.b===s);if(l.length===0)return null;const c=ss(this.committed.facets[s].poly),u=Math.hypot(c[0]-a[0],c[1]-a[1]);let h=null;if(u>1e-6){const d=[(c[0]-a[0])/u,(c[1]-a[1])/u];let m=1/0;for(const g of l){const _=iv(a,d,g.seg);_!==null&&_>1e-6&&_<m&&(m=_,h=g)}}if(!h){let d=1/0;for(const m of l){const g=rv(a,m.seg[0],m.seg[1]);g<d&&(d=g,h=m)}}return h?{crease:h,facetIdx:s}:null});Z(this,"setHighlight",(t,e)=>{if(!t||!e){this.highlightLine.visible=!1;return}const n=t.map(([s,o])=>new L(s,o,0).applyMatrix4(e)),r=new fs;r.setPositions(n.flatMap(s=>[s.x,s.y,s.z])),this.highlightLine.geometry.dispose(),this.highlightLine.geometry=r,this.highlightLine.visible=!0});Z(this,"creaseKey",t=>`${t.a},${t.b}:${t.seg[0]}:${t.seg[1]}`);Z(this,"isCreaseLocked",t=>{const e=this.creaseKey(t);let n=this.lockCache.get(e);return n===void 0&&(n=!R_(this.committed,t),this.lockCache.set(e,n)),n});Z(this,"creaseMovers",(t,e)=>{var o;const n=t.a===e?t.b:t.a,r=`${n}|${this.creaseKey(t)}`;let s=this.moverCache.get(r);if(!s){s=new Set;const a=((o=fr(this.committed,t))==null?void 0:o.angle)??180,l=a>0?a-47:a+47,c=Zi(this.committed,{type:"angle",point:ea(t),angle:l});if(c){const u=vs(this.committed,0).matrices,h=vs(c,0).matrices,d=u[n].clone().multiply(h[n].clone().invert()),m=new L,g=new L;this.committed.facets.forEach((_,f)=>{const p=ss(_.poly);m.set(p[0],p[1],0).applyMatrix4(u[f]),g.set(p[0],p[1],0).applyMatrix4(h[f]).applyMatrix4(d),m.distanceTo(g)>.001&&s.add(f)})}this.moverCache.set(r,s)}return s});Z(this,"updateHover",(t=this.lastPointer)=>{var e;if(this.hover=this.pickCrease(t),this.hover&&this.paperObj){const n=this.isCreaseLocked(this.hover.crease);this.highlightMat.color.set(n?16731469:16762941),this.setHighlight(this.hover.crease.seg,this.paperObj.matrices[this.hover.facetIdx]),this.paperObj.setEmphasis(n?null:this.creaseMovers(this.hover.crease,this.hover.facetIdx))}else this.setHighlight(null),(e=this.paperObj)==null||e.setEmphasis(null)});Z(this,"clearHover",()=>{var t;this.hover=null,this.setHighlight(null),(t=this.paperObj)==null||t.setEmphasis(null)});Z(this,"startAngleDrag",()=>{var c;const t=this.hover??this.pickCrease();if(!t||!this.paperObj||this.isCreaseLocked(t.crease))return;const{crease:e,facetIdx:n}=t,r=new L((e.seg[0][0]+e.seg[1][0])/2,(e.seg[0][1]+e.seg[1][1])/2,0).applyMatrix4(this.paperObj.matrices[n]).project(this.camera),s=this.controls.pointer.clone(),o=new ht(r.x,r.y).sub(s),a=Math.max(o.length(),.02),l=e.a===n?e.b:e.a;this.angleDrag={crease:e,facetIdx:n,point:ea(e),baseAngle:((c=fr(this.committed,e))==null?void 0:c.angle)??180,startNDC:s,dirNDC:o.normalize(),degPerNDC:90/a,movers:this.creaseMovers(e,n),anchorIdx:l,anchorMatrix:this.paperObj.matrices[l].clone()}});Z(this,"moveAngleDrag",()=>{const t=this.angleDrag,e=this.controls.pointer.clone().sub(t.startNDC).dot(t.dirNDC),n=Math.round(Math.max(-180,Math.min(180,t.baseAngle-e*t.degPerNDC))),r={type:"angle",point:t.point,angle:n},s=Zi(this.committed,r);if(!s)return;this.lastGoodOp=r,this.lastGoodState=s,this.showPreview(s);const o=t.anchorMatrix.clone().multiply(this.previewObj.matrices[t.anchorIdx].clone().invert());this.alignObject(this.previewObj,o),this.pendingAlign=o,this.setHighlight(t.crease.seg,this.previewObj.matrices[t.facetIdx]),this.previewObj.setEmphasis(t.movers)});Z(this,"onKeyDown",t=>{var e,n;if(!(((e=t.target)==null?void 0:e.tagName)==="INPUT"||((n=t.target)==null?void 0:n.tagName)==="SELECT")){if(t.key==="Control"&&!this.ctrlDown){this.ctrlDown=!0,this.controls.isInteracting||this.updateHover();return}if(t.ctrlKey||t.metaKey){t.key.toLowerCase()==="z"&&(t.preventDefault(),t.shiftKey?this.redo():this.undo());return}switch(t.key){case"q":case"Q":this.setMode("simple");break;case"r":case"R":this.setMode("reverse");break;case"s":case"S":this.setMode("squash");break;case"p":case"P":this.setMode("petal");break}}});Z(this,"onKeyUp",t=>{t.key==="Control"&&(this.ctrlDown=!1,!this.angleDrag&&!this.touch3DMode&&this.clearHover())});Z(this,"onBlur",()=>{this.ctrlDown=!1,!this.angleDrag&&!this.touch3DMode&&this.clearHover()});Z(this,"setMode",t=>{this.mode=t,this.onChange()});Z(this,"setTouch3DMode",t=>{this.touch3DMode=t,this.touch3DSelecting=!1,this.touch3DArmed=!1,(!t||!this.ctrlDown&&!this.angleDrag)&&this.clearHover(),this.onChange()});Z(this,"replayAll",()=>{let t=Ki($i(this.config.shape,this.config.size));for(const e of this.ops){const n=Zi(t,e);if(n===null){console.error("history replay failed at op",e);break}t=n}return t});Z(this,"snapshot",()=>({config:structuredClone(this.config),ops:structuredClone(this.ops),name:this.modelName}));Z(this,"record",()=>{const t=this.snapshot(),e=this.history[this.historyIndex];e&&JSON.stringify(e)===JSON.stringify(t)||(this.history=this.history.slice(0,this.historyIndex+1),this.history.push(t),this.historyIndex=this.history.length-1,this.onChange())});Z(this,"restore",(t=!1)=>{const e=this.history[this.historyIndex];this.config=structuredClone(e.config),this.ops=structuredClone(e.ops),this.modelName=e.name,this.scene.background=new Bt(this.config.background),this.committed=this.replayAll(),t||this.frameCamera(),this.rebuild(),this.onSync()});Z(this,"commitOp",(t,e)=>{const n=this.ops[this.ops.length-1];t.type==="angle"&&(n==null?void 0:n.type)==="angle"&&Math.hypot(n.point[0]-t.point[0],n.point[1]-t.point[1])<1e-6?this.ops[this.ops.length-1]=t:this.ops.push(t),this.committed=e,this.record()});Z(this,"canUndo",()=>this.historyIndex>0);Z(this,"canRedo",()=>this.historyIndex<this.history.length-1);Z(this,"undo",()=>{this.canUndo()&&(this.historyIndex--,this.restore(!0))});Z(this,"redo",()=>{this.canRedo()&&(this.historyIndex++,this.restore(!0))});Z(this,"previewConfig",t=>{this.config=structuredClone(t),this.scene.background=new Bt(this.config.background),this.rebuild()});Z(this,"commitConfig",t=>{const e=t.shape!==this.config.shape||t.size!==this.config.size;this.config=structuredClone(t),this.scene.background=new Bt(this.config.background),e&&(this.ops=[],this.committed=Ki($i(t.shape,t.size)),this.frameCamera()),this.rebuild(),this.record(),this.renderer.domElement.focus()});Z(this,"reset",t=>{t&&(this.config=structuredClone(t)),this.ops=[],this.committed=Ki($i(this.config.shape,this.config.size)),this.scene.background=new Bt(this.config.background),this.frameCamera(),this.rebuild(),this.history=[],this.historyIndex=-1,this.record(),this.onSync()});Z(this,"frameCamera",()=>{const t=Q_(this.committed),e=Math.max(10,t*2.6);this.camera.position.set(0,0,e),this.camera.lookAt(0,0,0),this.controls.controls.target.set(0,0,0),this.controls.controls.update()});Z(this,"serialize",()=>({version:1,name:this.modelName,paper:structuredClone(this.config),ops:structuredClone(this.ops)}));Z(this,"save",()=>{const t=JSON.stringify(this.serialize(),null,2),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=`${this.modelName||"untitled"}.fold.json`,r.click(),URL.revokeObjectURL(n)});Z(this,"loadSaveFile",t=>{if(t.version!==1)return`unsupported file version: ${t.version}`;this.config=structuredClone(t.paper),this.modelName=t.name||"untitled",this.ops=[],this.scene.background=new Bt(this.config.background);let e=null,n=Ki($i(this.config.shape,this.config.size));for(const r of t.ops){const s=Zi(n,r);if(s===null){e=`replay failed at op ${this.ops.length+1}/${t.ops.length}; loaded partial model`;break}n=s,this.ops.push(r)}return this.committed=n,this.viewAlign.identity(),this.frameCamera(),this.rebuild(),this.record(),this.onSync(),e});Z(this,"loadJsonText",t=>{try{return this.loadSaveFile(JSON.parse(t))}catch(e){return`could not parse file: ${e}`}});Z(this,"dispose",()=>{this.controls.dispose(),window.removeEventListener("resize",this.onResize),window.removeEventListener("mousemove",this.trackPointer),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)});Z(this,"touch3DGestureActive",()=>this.touch3DMode&&this.controls.pointerType==="touch");Z(this,"threeDModeActive",()=>this.ctrlDown||this.touch3DMode);Z(this,"currentHoverPointer",()=>this.touch3DMode&&this.controls.pointerType==="touch"?this.controls.pointer:this.lastPointer);this.config=structuredClone(e),this.renderer=new Rg({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),t.appendChild(this.renderer.domElement),this.renderer.domElement.tabIndex=0,this.renderer.domElement.style.outline="none",this.renderer.domElement.addEventListener("mousedown",()=>this.renderer.domElement.focus()),this.scene=new Pg,this.scene.background=new Bt(this.config.background),this.camera=new Ge(50,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,18),this.committed=Ki($i(this.config.shape,this.config.size)),this.controls=new X_({camera:this.camera,scene:this.scene,domElement:this.renderer.domElement,getInteractables:()=>this.paperObj?this.paperObj.facetMeshes:[],onPress:this.onPress,onMove:this.onMove,onRelease:this.onRelease,faceBounded:!1,showPlane:!1,enablePan:!0}),window.addEventListener("pointerdown",n=>{this.controls.controls.mouseButtons.LEFT=n.altKey?Un.PAN:Un.ROTATE},!0),window.addEventListener("resize",this.onResize),window.addEventListener("mousemove",this.trackPointer),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),this.highlightMat=new bs({color:16762941,linewidth:5}),this.highlightMat.resolution.set(window.innerWidth,window.innerHeight),this.highlightMat.depthTest=!1,this.highlightLine=new qc(new fs,this.highlightMat),this.highlightLine.renderOrder=10,this.highlightLine.visible=!1,this.scene.add(this.highlightLine),this.rebuild(),this.record(),this.renderer.domElement.focus(),this.animate()}}const iv=(i,t,e)=>{const n=e[1][0]-e[0][0],r=e[1][1]-e[0][1],s=t[0]*r-t[1]*n;if(Math.abs(s)<1e-12)return null;const o=e[0][0]-i[0],a=e[0][1]-i[1],l=(o*r-a*n)/s,c=(o*t[1]-a*t[0])/s;return c<-1e-6||c>1+1e-6?null:l},rv=(i,t,e)=>{const n=e[0]-t[0],r=e[1]-t[1],s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/(n*n+r*r)));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))},sv={version:1,name:"paper-airplane",paper:{shape:"letter",size:11,style:{frontPattern:"plain",frontColor0:"#e8e4d8",frontColor1:"#ffffff",backPattern:"plain",backColor0:"#cfd6e4",backColor1:"#ffffff",edgeColor:"#3a3f4a"},background:"#22324a"},ops:[{type:"simple",from:[-4.25,5.5],to:[0,1.25],sign:1},{type:"simple",from:[4.25,5.5],to:[0,1.25],sign:1},{type:"simple",from:[-4.25,1.25],to:[0,-.5104],sign:1},{type:"simple",from:[4.25,1.25],to:[0,-.5104],sign:1},{type:"simple",from:[-4.25,-5],to:[4.25,-5],sign:1},{type:"simple",from:[4.25,-5],to:[-2.45,-5],sign:1},{type:"simple",from:[4.25,-5],to:[-2.45,-5],sign:-1},{type:"angle",point:[0,-3],angle:150},{type:"angle",point:[-.9,-3],angle:90},{type:"angle",point:[.9,-3],angle:90}]},ov={version:1,name:"origami-crane",paper:{shape:"square",size:10,style:{frontPattern:"plain",frontColor0:"#d8453e",frontColor1:"#ffffff",backPattern:"plain",backColor0:"#f3ece1",backColor1:"#ffffff",edgeColor:"#42210b"},background:"#1f2430"},ops:[{type:"simple",from:[-5,5],to:[5,-5],sign:1},{type:"simple",from:[-2,-3],to:[3,2],sign:1},{type:"squash",grab:[3,2.9],to:[4.9,-4.9],sign:1,flip:!0},{type:"squash",grab:[3,2.9],to:[4.9,-4.9],sign:-1},{type:"simple",from:[5,-2.5],to:[3.232,-3.232],sign:1},{type:"simple",from:[2.5,-5],to:[3.232,-3.232],sign:1},{type:"simple",from:[5,-2.5],to:[3.232,-3.232],sign:-1},{type:"simple",from:[2.5,-5],to:[3.232,-3.232],sign:-1},{type:"petal",grab:[4.9,-4.9],to:[-1.971,1.971],sign:1},{type:"petal",grab:[4.9,-4.9],to:[-1.971,1.971],sign:-1},{type:"reverse",grab:[-1.9,2],to:[-.1,2],sign:1},{type:"reverse",grab:[-2,1.9],to:[-2,.1],sign:-1},{type:"reverse",grab:[-.1,1.95],to:[-.1,1.45],sign:1},{type:"simple",from:[4.9,-4.9],to:[-.5,.5],sign:1},{type:"simple",from:[4.9,-4.9],to:[-.5,.5],sign:-1},{type:"angle",point:[2.78,1.62],angle:110},{type:"angle",point:[-1.62,-2.78],angle:110}]},av=[{name:"Paper Airplane",file:sv},{name:"Origami Crane",file:ov}],dt=(i,t={},...e)=>{const n=document.createElement(i);for(const[r,s]of Object.entries(t))r==="class"?n.className=s:n.setAttribute(r,s);for(const r of e)n.append(r);return n},ic=i=>{const t=dt("span",{class:"touch-mode-icon"});return t.innerHTML=i==="3d"?`<svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M10 12 18 8 26 12 18 16Z" />
                <path d="M10 12V21L18 25V16" />
                <path d="M18 16 26 12V21L18 25" />
            </svg>`:`<svg viewBox="0 0 32 32" aria-hidden="true">
                <rect x="8" y="8" width="16" height="16" rx="1.5" />
            </svg>`,t};let rc;const $r=i=>{let t=document.getElementById("toast");t||(t=dt("div",{id:"toast"}),document.body.appendChild(t)),t.textContent=i,t.classList.add("show"),window.clearTimeout(rc),rc=window.setTimeout(()=>t.classList.remove("show"),2600)},lv=i=>{const t=navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches,e=dt("div",{id:"ui-root"}),n=dt("div",{class:"panel"}),r=dt("div",{class:"panel-header"}),s=dt("div",{class:"panel-title"}),o=dt("button",{class:"panel-toggle",type:"button","aria-label":"Minimize menu"},"Hide"),a=dt("div",{class:"panel-body"});e.appendChild(n),n.append(r,a),s.append(dt("h1",{},"dropfold"),dt("div",{class:"subtitle"},"drag the paper to fold it")),r.append(s,o);let l=!0;const c=()=>{n.classList.toggle("collapsed",l),o.textContent=l?"Menu":"Hide",o.setAttribute("aria-label",l?"Open menu":"Minimize menu")};o.onclick=()=>{l=!l,c()};const u=dt("details",{open:""});u.appendChild(dt("summary",{},"Fold tools"));const h=dt("div",{class:"mode-grid"}),d=[{mode:"simple",label:"Simple",key:"Q"},{mode:"reverse",label:"Reverse",key:"R"},{mode:"squash",label:"Squash",key:"S"},{mode:"petal",label:"Petal",key:"P"}],m=new Map;for(const st of d){const xt=dt("button",{},st.label,dt("span",{class:"key"},st.key));xt.onclick=()=>i.setMode(st.mode),m.set(st.mode,xt),h.appendChild(xt)}u.appendChild(h);const g=dt("button",{},"Undo"),_=dt("button",{},"Redo"),f=dt("button",{},"Reset");g.onclick=()=>i.undo(),_.onclick=()=>i.redo(),f.onclick=()=>i.reset(),u.appendChild(dt("div",{class:"btn-row"},g,_,f));const p=dt("div",{class:"status"});u.appendChild(p),a.appendChild(u);const T=dt("details",{});T.appendChild(dt("summary",{},"Paper"));const x=dt("select",{});for(const st of tv)x.appendChild(dt("option",{value:st.id},st.label));const E=dt("input",{type:"range",min:"6",max:"16",step:"1"}),U=dt("span",{class:"value"}),R=()=>{const st=dt("select",{});for(const xt of q_)st.appendChild(dt("option",{value:xt.id},xt.label));return st},A=R(),N=dt("input",{type:"color"}),M=dt("input",{type:"color"}),y=R(),P=dt("input",{type:"color"}),X=dt("input",{type:"color"}),z=dt("input",{type:"color"}),k=dt("input",{type:"range",min:"0.001",max:"0.02",step:"0.0005"});T.appendChild(dt("div",{class:"row"},dt("label",{},"Shape"),x)),T.appendChild(dt("div",{class:"row"},dt("label",{},"Size"),E,U)),T.appendChild(dt("div",{class:"row"},dt("label",{},"Front"),A,N,M)),T.appendChild(dt("div",{class:"row"},dt("label",{},"Back"),y,P,X)),T.appendChild(dt("div",{class:"row"},dt("label",{},"Backdrop"),z)),T.appendChild(dt("div",{class:"row"},dt("label",{},"Thickness"),k)),T.appendChild(dt("div",{class:"hint"},"Changing shape or size starts a new sheet. Colors and patterns apply live.")),a.appendChild(T);const G=()=>({shape:x.value,size:Number(E.value),style:{frontPattern:A.value,frontColor0:N.value,frontColor1:M.value,backPattern:y.value,backColor0:P.value,backColor1:X.value,edgeColor:i.config.style.edgeColor,thickness:Number(k.value)},background:z.value}),w=st=>{x.value=st.shape,E.value=String(st.size),U.textContent=String(st.size),A.value=st.style.frontPattern,N.value=st.style.frontColor0,M.value=st.style.frontColor1,y.value=st.style.backPattern,P.value=st.style.backColor0,X.value=st.style.backColor1,z.value=st.background,k.value=String(st.style.thickness??.0025)};for(const st of[A,N,M,y,P,X,z,k])st.addEventListener("input",()=>i.previewConfig(G())),st.addEventListener("change",()=>i.commitConfig(G()));x.addEventListener("change",()=>i.commitConfig(G())),E.addEventListener("input",()=>U.textContent=E.value),E.addEventListener("change",()=>i.commitConfig(G()));const I=dt("details",{});I.appendChild(dt("summary",{},"Save / Load"));const O=dt("input",{type:"text",placeholder:"model name"});O.value=i.modelName,O.addEventListener("input",()=>i.modelName=O.value),I.appendChild(dt("div",{class:"row"},dt("label",{},"Name"),O));const J=dt("button",{class:"primary"},"Save");J.onclick=()=>{i.save(),$r(`saved ${i.modelName||"untitled"}.fold.json`)};const tt=dt("input",{type:"file",accept:".json,application/json",style:"display:none"});tt.addEventListener("change",async()=>{var kt;const st=(kt=tt.files)==null?void 0:kt[0];if(!st)return;const xt=i.loadJsonText(await st.text());$r(xt??`loaded ${st.name}`),tt.value=""});const rt=dt("button",{},"Load…");rt.onclick=()=>tt.click(),I.appendChild(dt("div",{class:"btn-row"},J,rt)),I.appendChild(dt("div",{class:"hint"},"You can also drag a .fold.json file anywhere onto the window.")),I.appendChild(tt),a.appendChild(I);const St=dt("details",{});St.appendChild(dt("summary",{},"Samples"));const Ct=dt("div",{class:"btn-row"});for(const st of av){const xt=dt("button",{},st.name);xt.onclick=()=>{const kt=i.loadSaveFile(structuredClone(st.file));$r(kt??`loaded ${st.name}`)},Ct.appendChild(xt)}St.appendChild(Ct),a.appendChild(St);const K=dt("details",{});K.appendChild(dt("summary",{},"Help"));const nt=dt("table",{class:"kbd-table"}),ft=[["drag paper","fold from the grabbed edge"],["drag space","orbit the camera"],["Alt + drag","pan the camera"],["scroll","zoom"],["Q / R / S / P","fold mode: simple / reverse / squash / petal"],["hold Ctrl","3D fold mode: hover highlights a crease, drag swings the flap over it (red = locked: hinging would tear the paper)"],["touch 3D button","on touch devices: tap once to enter 3D edge-picking mode, then tap-drag to open that crease"],["Ctrl+Z","undo"],["Ctrl+Shift+Z","redo"]];for(const[st,xt]of ft)nt.appendChild(dt("tr",{},dt("td",{},st),dt("td",{},xt)));K.appendChild(nt),K.appendChild(dt("div",{class:"hint"},"Grab the front of the paper to fold over the top; orbit behind and grab the back to fold underneath. Reverse, squash and petal folds act on flaps: grab near the flap tip (reverse/petal) or its folded edge (squash) and drag where it should go.")),a.appendChild(K);const ut=dt("div",{id:"drop-overlay"},"drop .fold.json to load");document.body.appendChild(ut);let vt=null;t&&(vt=dt("button",{id:"touch-3d-toggle",type:"button","aria-label":"Switch to 3D mode"},ic("2d"),dt("span",{class:"touch-mode-label"},"2D")),vt.onclick=()=>i.setTouch3DMode(!i.touch3DMode),document.body.appendChild(vt)),window.addEventListener("dragover",st=>{st.preventDefault(),ut.classList.add("active")}),window.addEventListener("dragleave",st=>{st.relatedTarget===null&&ut.classList.remove("active")}),window.addEventListener("drop",async st=>{var D,te;st.preventDefault(),ut.classList.remove("active");const xt=(te=(D=st.dataTransfer)==null?void 0:D.files)==null?void 0:te[0];if(!xt)return;const kt=i.loadJsonText(await xt.text());$r(kt??`loaded ${xt.name}`)}),i.onChange=()=>{for(const[xt,kt]of m)kt.classList.toggle("active",i.mode===xt);vt&&(vt.classList.toggle("active",i.touch3DMode),vt.replaceChildren(ic(i.touch3DMode?"3d":"2d"),dt("span",{class:"touch-mode-label"},i.touch3DMode?"3D":"2D")),vt.setAttribute("aria-label",i.touch3DMode?"Switch to 2D mode":"Switch to 3D mode")),g.disabled=!i.canUndo(),_.disabled=!i.canRedo();const st=i.ops.length;p.textContent=`${st} fold${st===1?"":"s"} · ${i.committed.facets.length} facets`},i.onSync=()=>{w(i.config),O.value=i.modelName},w(i.config),c(),document.body.appendChild(e),i.onChange()},cv=document.getElementById("GameView"),tu=new nv(cv);lv(tu);window.app=tu;
