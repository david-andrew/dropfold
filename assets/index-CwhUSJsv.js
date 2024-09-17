var Th=Object.defineProperty;var Ch=(s,t,e)=>t in s?Th(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var it=(s,t,e)=>Ch(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="167",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qu=0,qa=1,td=2,Rh=3,Ph=0,lc=1,ed=2,Sn=3,Cn=0,ke=1,Ke=2,Gn=0,Oi=1,Za=2,$a=3,Ka=4,nd=5,ci=100,id=101,sd=102,rd=103,od=104,ad=200,cd=201,ld=202,ud=203,Nr=204,Or=205,dd=206,fd=207,hd=208,pd=209,md=210,gd=211,_d=212,xd=213,vd=214,yd=0,Md=1,Sd=2,s0=3,bd=4,wd=5,Ed=6,Ad=7,E0=0,Td=1,Cd=2,Wn=0,Rd=1,Pd=2,Id=3,Ld=4,Dd=5,Ud=6,Nd=7,Ja="attached",Od="detached",_o=300,qn=301,li=302,r0=303,o0=304,As=306,a0=1e3,dn=1001,c0=1002,Re=1003,uc=1004,Ih=1004,gs=1005,Lh=1005,Me=1006,$s=1007,Dh=1007,wn=1008,Uh=1008,Rn=1009,dc=1010,fc=1011,Ss=1012,xo=1013,Zn=1014,Je=1015,Ts=1016,vo=1017,yo=1018,ki=1020,hc=35902,pc=1021,mc=1022,Ye=1023,gc=1024,_c=1025,Fi=1026,Vi=1027,Mo=1028,A0=1029,xc=1030,So=1031,Nh=1032,bo=1033,Ks=33776,Js=33777,js=33778,Qs=33779,Fr=35840,Br=35841,zr=35842,kr=35843,Vr=36196,Hr=37492,Gr=37496,Wr=37808,Xr=37809,Yr=37810,qr=37811,Zr=37812,$r=37813,Kr=37814,Jr=37815,jr=37816,Qr=37817,to=37818,eo=37819,no=37820,io=37821,t0=36492,so=36494,ro=36495,vc=36283,oo=36284,ao=36285,co=36286,Fd=2200,Bd=2201,zd=2202,l0=2300,lo=2301,Dr=2302,Li=2400,Di=2401,u0=2402,wo=2500,yc=2501,Oh=0,Fh=1,Bh=2,kd=3200,Vd=3201,zh=3202,kh=3203,di=0,Hd=1,zn="",un="srgb",Kn="srgb-linear",Eo="display-p3",T0="display-p3-linear",d0="linear",oe="srgb",f0="rec709",h0="p3",Vh=0,Ri=7680,Hh=7681,Gh=7682,Wh=7683,Xh=34055,Yh=34056,qh=5386,Zh=512,$h=513,Kh=514,Jh=515,jh=516,Qh=517,tp=518,ja=519,Gd=512,Wd=513,Xd=514,Mc=515,Yd=516,qd=517,Zd=518,$d=519,p0=35044,ep=35048,np=35040,ip=35045,sp=35049,rp=35041,op=35046,ap=35050,cp=35042,lp="100",uo="300 es",En=2e3,m0=2001;class Pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const Bi=Math.PI/180,bs=180/Math.PI;function on(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function he(s,t,e){return Math.max(t,Math.min(e,s))}function Sc(s,t){return(s%t+t)%t}function up(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function dp(s,t,e){return s!==t?(e-s)/(t-s):0}function e0(s,t,e){return(1-e)*s+e*t}function fp(s,t,e,n){return e0(s,t,1-Math.exp(-e*n))}function hp(s,t=1){return t-Math.abs(Sc(s,t*2)-t)}function pp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function mp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function gp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function _p(s,t){return s+Math.random()*(t-s)}function xp(s){return s*(.5-Math.random())}function vp(s){s!==void 0&&(rl=s);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yp(s){return s*Bi}function Mp(s){return s*bs}function Sp(s){return(s&s-1)===0&&s!==0}function bp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ep(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),h=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*d,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*d,a*l);break;case"ZXZ":s.set(c*d,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*p,c*h,a*l);break;case"YXY":s.set(c*h,a*u,c*p,a*l);break;case"ZYZ":s.set(c*p,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bc={DEG2RAD:Bi,RAD2DEG:bs,generateUUID:on,clamp:he,euclideanModulo:Sc,mapLinear:up,inverseLerp:dp,lerp:e0,damp:fp,pingpong:hp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:_p,randFloatSpread:xp,seededRandom:vp,degToRad:yp,radToDeg:Mp,isPowerOfTwo:Sp,ceilPowerOfTwo:bp,floorPowerOfTwo:wp,setQuaternionFromProperEuler:Ep,normalize:Gt,denormalize:Xe};class G{constructor(t=0,e=0){G.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],p=n[8],_=i[0],g=i[3],m=i[6],v=i[1],x=i[4],y=i[7],L=i[2],T=i[5],C=i[8];return r[0]=o*_+a*v+c*L,r[3]=o*g+a*x+c*T,r[6]=o*m+a*y+c*C,r[1]=l*_+u*v+d*L,r[4]=l*g+u*x+d*T,r[7]=l*m+u*y+d*C,r[2]=f*_+h*v+p*L,r[5]=f*g+h*x+p*T,r[8]=f*m+h*y+p*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,p=e*d+n*f+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(u*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=h*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Ht;function Kd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const Ap={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function _s(s,t){return new Ap[s](t)}function g0(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jd(){const s=g0("canvas");return s.style.display="block",s}const ol={};function ys(s){s in ol||(ol[s]=!0,console.warn(s))}function Tp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const al=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cl=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Kn]:{transfer:d0,primaries:f0,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[un]:{transfer:oe,primaries:f0,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[T0]:{transfer:d0,primaries:h0,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(cl),fromReference:s=>s.applyMatrix3(al)},[Eo]:{transfer:oe,primaries:h0,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(cl),fromReference:s=>s.applyMatrix3(al).convertLinearToSRGB()}},Cp=new Set([Kn,T0]),te={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Cp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Us[t].toReference,i=Us[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Us[s].primaries},getTransfer:function(s){return s===zn?d0:Us[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Us[t].luminanceCoefficients)}};function Ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zi;class jd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=g0("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=g0("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ms(e[n]/255)*255):e[n]=Ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rp=0;class Ui{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=on(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sa(i[o].image)):r.push(sa(i[o]))}else r=sa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pp=0;class le extends Pn{constructor(t=le.DEFAULT_IMAGE,e=le.DEFAULT_MAPPING,n=dn,i=dn,r=Me,o=wn,a=Ye,c=Rn,l=le.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=on(),this.name="",this.source=new Ui(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_o)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case a0:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case c0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case a0:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case c0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}le.DEFAULT_IMAGE=null;le.DEFAULT_MAPPING=_o;le.DEFAULT_ANISOTROPY=1;class $t{constructor(t=0,e=0,n=0,i=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(h+1)/2,L=(m+1)/2,T=(u+f)/4,C=(d+_)/4,I=(p+g)/4;return x>y&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):y>L?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=I/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=C/r,i=I/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends Pn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Me,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ui(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ao extends le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ip extends _n{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ao(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class wc extends le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lp extends _n{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new wc(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Ne{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],h=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=p,t[e+3]=_;return}if(d!==_||c!==f||l!==h||u!==p){let g=1-a;const m=c*f+l*h+u*p+d*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,m*v);g=Math.sin(g*T)/L,a=Math.sin(a*T)/L}const y=a*v;if(c=c*g+f*y,l=l*g+h*y,u=u*g+p*y,d=d*g+_*y,g===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];return t[e]=a*p+u*d+c*h-l*f,t[e+1]=c*p+u*f+l*d-a*h,t[e+2]=l*p+u*h+a*f-c*d,t[e+3]=u*p-a*d-c*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),f=c(n/2),h=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"YZX":this._x=f*u*d+l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d-f*h*p;break;case"XZY":this._x=f*u*d-l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-i)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-i)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*i+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=i+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new A,ll=new Ne;class we{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),F0.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),F0.copy(n.boundingBox)),F0.applyMatrix4(t.matrixWorld),this.union(F0)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),B0.subVectors(this.max,Ns),$i.subVectors(t.a,Ns),Ki.subVectors(t.b,Ns),Ji.subVectors(t.c,Ns),ti.subVectors(Ki,$i),ei.subVectors(Ji,Ki),mi.subVectors($i,Ji);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-mi.z,mi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,mi.z,0,-mi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-mi.y,mi.x,0];return!oa(e,$i,Ki,Ji,B0)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,$i,Ki,Ji,B0))?!1:(z0.crossVectors(ti,ei),e=[z0.x,z0.y,z0.z],oa(e,$i,Ki,Ji,B0))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new A,new A,new A,new A,new A,new A,new A,new A],hn=new A,F0=new we,$i=new A,Ki=new A,Ji=new A,ti=new A,ei=new A,mi=new A,Ns=new A,B0=new A,z0=new A,gi=new A;function oa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gi.fromArray(s,r);const a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Dp=new we,Os=new A,aa=new A;class Ee{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(aa)),this.expandByPoint(Os.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new A,ca=new A,k0=new A,ni=new A,la=new A,V0=new A,ua=new A;class Gi{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ca.copy(t).add(e).multiplyScalar(.5),k0.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(ca);const r=t.distanceTo(e)*.5,o=-this.direction.dot(k0),a=ni.dot(this.direction),c=-ni.dot(k0),l=ni.lengthSq(),u=Math.abs(1-o*o);let d,f,h,p;if(u>0)if(d=o*c-a,f=o*a-c,p=r*u,d>=0)if(f>=-p)if(f<=p){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ca).addScaledVector(k0,f),h}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,r){la.subVectors(e,t),V0.subVectors(n,t),ua.crossVectors(la,V0);let o=this.direction.dot(ua),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const c=a*this.direction.dot(V0.crossVectors(ni,V0));if(c<0)return null;const l=a*this.direction.dot(la.cross(ni));if(l<0||c+l>o)return null;const u=-a*ni.dot(ua);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(t,e,n,i,r,o,a,c,l,u,d,f,h,p,_,g){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,d,f,h,p,_,g)}set(t,e,n,i,r,o,a,c,l,u,d,f,h,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,p=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=h+p*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=p+h*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,h=c*d,p=l*u,_=l*d;e[0]=f+_*a,e[4]=p*a-h,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-p,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,h=c*d,p=l*u,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=p+h*a,e[1]=h+p*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,h=o*d,p=a*u,_=a*d;e[0]=c*u,e[4]=p*l-h,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=h*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,h=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=_-f*d,e[8]=p*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*d+p,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*c,h=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+_,e[5]=o*u,e[9]=h*d-p,e[2]=p*d-h,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Np)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ii.crossVectors(n,en),ii.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ii.crossVectors(n,en)),ii.normalize(),H0.crossVectors(en,ii),i[0]=ii.x,i[4]=H0.x,i[8]=en.x,i[1]=ii.y,i[5]=H0.y,i[9]=en.y,i[2]=ii.z,i[6]=H0.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],x=n[7],y=n[11],L=n[15],T=i[0],C=i[4],I=i[8],w=i[12],b=i[1],D=i[5],V=i[9],F=i[13],Y=i[2],Z=i[6],W=i[10],J=i[14],q=i[3],ht=i[7],mt=i[11],xt=i[15];return r[0]=o*T+a*b+c*Y+l*q,r[4]=o*C+a*D+c*Z+l*ht,r[8]=o*I+a*V+c*W+l*mt,r[12]=o*w+a*F+c*J+l*xt,r[1]=u*T+d*b+f*Y+h*q,r[5]=u*C+d*D+f*Z+h*ht,r[9]=u*I+d*V+f*W+h*mt,r[13]=u*w+d*F+f*J+h*xt,r[2]=p*T+_*b+g*Y+m*q,r[6]=p*C+_*D+g*Z+m*ht,r[10]=p*I+_*V+g*W+m*mt,r[14]=p*w+_*F+g*J+m*xt,r[3]=v*T+x*b+y*Y+L*q,r[7]=v*C+x*D+y*Z+L*ht,r[11]=v*I+x*V+y*W+L*mt,r[15]=v*w+x*F+y*J+L*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],h=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*h-n*c*h)+_*(+e*c*h-e*l*f+r*o*f-i*o*h+i*l*u-r*c*u)+g*(+e*l*d-e*a*h-r*o*d+n*o*h+r*a*u-n*l*u)+m*(-i*a*u-e*c*d+e*a*f+i*o*d-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],h=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=d*g*l-_*f*l+_*c*h-a*g*h-d*c*m+a*f*m,x=p*f*l-u*g*l-p*c*h+o*g*h+u*c*m-o*f*m,y=u*_*l-p*d*l+p*a*h-o*_*h-u*a*m+o*d*m,L=p*d*c-u*_*c-p*a*f+o*_*f+u*a*g-o*d*g,T=e*v+n*x+i*y+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=v*C,t[1]=(_*f*r-d*g*r-_*i*h+n*g*h+d*i*m-n*f*m)*C,t[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*m+n*c*m)*C,t[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*h-n*c*h)*C,t[4]=x*C,t[5]=(u*g*r-p*f*r+p*i*h-e*g*h-u*i*m+e*f*m)*C,t[6]=(p*c*r-o*g*r-p*i*l+e*g*l+o*i*m-e*c*m)*C,t[7]=(o*f*r-u*c*r+u*i*l-e*f*l-o*i*h+e*c*h)*C,t[8]=y*C,t[9]=(p*d*r-u*_*r-p*n*h+e*_*h+u*n*m-e*d*m)*C,t[10]=(o*_*r-p*a*r+p*n*l-e*_*l-o*n*m+e*a*m)*C,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*h-e*a*h)*C,t[12]=L*C,t[13]=(u*_*i-p*d*i+p*n*f-e*_*f-u*n*g+e*d*g)*C,t[14]=(p*a*i-o*_*i-p*n*c+e*_*c+o*n*g-e*a*g)*C,t[15]=(o*d*i-u*a*i+u*n*c-e*d*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,p=r*d,_=o*u,g=o*d,m=a*d,v=c*l,x=c*u,y=c*d,L=n.x,T=n.y,C=n.z;return i[0]=(1-(_+m))*L,i[1]=(h+y)*L,i[2]=(p-x)*L,i[3]=0,i[4]=(h-y)*T,i[5]=(1-(f+m))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(p+x)*C,i[9]=(g-v)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const l=1/r,u=1/o,d=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=En){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let h,p;if(a===En)h=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===m0)h=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=En){const c=this.elements,l=1/(e-t),u=1/(n-i),d=1/(o-r),f=(e+t)*l,h=(n+i)*u;let p,_;if(a===En)p=(o+r)*d,_=-2*d;else if(a===m0)p=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new A,pn=new Pt,Up=new A(0,0,0),Np=new A(1,1,1),ii=new A,H0=new A,en=new A,ul=new Pt,dl=new Ne;class an{constructor(t=0,e=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Op=0;const fl=new A,Qi=new Ne,Nn=new Pt,G0=new A,Fs=new A,Fp=new A,Bp=new Ne,hl=new A(1,0,0),pl=new A(0,1,0),ml=new A(0,0,1),gl={type:"added"},zp={type:"removed"},ts={type:"childadded",child:null},da={type:"childremoved",child:null};class Qt extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const t=new A,e=new an,n=new Ne,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ht}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?G0.copy(t):G0.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Fs,G0,this.up):Nn.lookAt(G0,Fs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zp),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qt.DEFAULT_UP=new A(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new A,On=new A,fa=new A,Fn=new A,es=new A,ns=new A,_l=new A,ha=new A,pa=new A,ma=new A;class sn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){mn.subVectors(i,e),On.subVectors(n,e),fa.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(On),c=mn.dot(fa),l=On.dot(On),u=On.dot(fa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,p=(o*u-a*c)*f;return r.set(1-h-p,p,h)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),On.subVectors(t,e),mn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;es.subVectors(i,n),ns.subVectors(r,n),ha.subVectors(t,n);const c=es.dot(ha),l=ns.dot(ha);if(c<=0&&l<=0)return e.copy(n);pa.subVectors(t,i);const u=es.dot(pa),d=ns.dot(pa);if(u>=0&&d<=u)return e.copy(i);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(es,o);ma.subVectors(t,r);const h=es.dot(ma),p=ns.dot(ma);if(p>=0&&h<=p)return e.copy(r);const _=h*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(ns,a);const g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return _l.subVectors(r,i),a=(d-u)/(d-u+(h-p)),e.copy(i).addScaledVector(_l,a);const m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},W0={h:0,s:0,l:0};function ga(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Sc(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ga(o,r,t+1/3),this.g=ga(o,r,t),this.b=ga(o,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const n=tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return te.fromWorkingColorSpace(Be.copy(this),t),Math.round(he(Be.r*255,0,255))*65536+Math.round(he(Be.g*255,0,255))*256+Math.round(he(Be.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,r=Be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=un){te.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(W0);const n=e0(si.h,W0.h,e),i=e0(si.s,W0.s,e),r=e0(si.l,W0.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new ft;ft.NAMES=tf;let kp=0;class Ve extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Oi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Or,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=s0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==s0&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Oe extends Ve{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kn=Vp();function Vp(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function $e(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=he(s,-65504,65504),kn.floatView[0]=s;const t=kn.uint32View[0],e=t>>23&511;return kn.baseTable[e]+((t&8388607)>>kn.shiftTable[e])}function qs(s){const t=s>>10;return kn.uint32View[0]=kn.mantissaTable[kn.offsetTable[t]+(s&1023)]+kn.exponentTable[t],kn.floatView[0]}const Hp={toHalfFloat:$e,fromHalfFloat:qs},ve=new A,X0=new G;class ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=p0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ys("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)X0.fromBufferAttribute(this,e),X0.applyMatrix3(t),this.setXY(e,X0.x,X0.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p0&&(t.usage=this.usage),t}}class Gp extends ne{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Wp extends ne{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Xp extends ne{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Yp extends ne{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Ec extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qp extends ne{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Ac extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zp extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=qs(this.array[t*this.itemSize]);return this.normalized&&(e=Xe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize]=$e(e),this}getY(t){let e=qs(this.array[t*this.itemSize+1]);return this.normalized&&(e=Xe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+1]=$e(e),this}getZ(t){let e=qs(this.array[t*this.itemSize+2]);return this.normalized&&(e=Xe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+2]=$e(e),this}getW(t){let e=qs(this.array[t*this.itemSize+3]);return this.normalized&&(e=Xe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gt(e,this.array)),this.array[t*this.itemSize+3]=$e(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array)),this.array[t+0]=$e(e),this.array[t+1]=$e(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[t+0]=$e(e),this.array[t+1]=$e(n),this.array[t+2]=$e(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[t+0]=$e(e),this.array[t+1]=$e(n),this.array[t+2]=$e(i),this.array[t+3]=$e(r),this}}class bt extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $p=0;const ln=new Pt,_a=new Qt,is=new A,nn=new we,Bs=new we,Ce=new A;class Wt extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kd(t)?Ac:Ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new we);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ee);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(nn.min,Bs.min),nn.expandByPoint(Ce),Ce.addVectors(nn.max,Bs.max),nn.expandByPoint(Ce)):(nn.expandByPoint(Bs.min),nn.expandByPoint(Bs.max))}nn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ce.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(t,l),Ce.add(is)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new A,c[I]=new A;const l=new A,u=new A,d=new A,f=new G,h=new G,p=new G,_=new A,g=new A;function m(I,w,b){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,I),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),u.sub(l),d.sub(l),h.sub(f),p.sub(f);const D=1/(h.x*p.y-p.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(D),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(D),a[I].add(_),a[w].add(_),a[b].add(_),c[I].add(g),c[w].add(g),c[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,w=v.length;I<w;++I){const b=v[I],D=b.start,V=b.count;for(let F=D,Y=D+V;F<Y;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new A,y=new A,L=new A,T=new A;function C(I){L.fromBufferAttribute(i,I),T.copy(L);const w=a[I];x.copy(w),x.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(T,w);const D=y.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,D)}for(let I=0,w=v.length;I<w;++I){const b=v[I],D=b.start,V=b.count;for(let F=D,Y=D+V;F<Y;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,d=new A;if(t)for(let f=0,h=t.count;f<h;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let m=0;m<u;m++)f[p++]=l[h++]}return new ne(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=t(f,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new Pt,_i=new Gi,Y0=new Ee,vl=new A,ss=new A,rs=new A,os=new A,xa=new A,q0=new A,Z0=new G,$0=new G,K0=new G,yl=new A,Ml=new A,Sl=new A,J0=new A,j0=new A;class ee extends Qt{constructor(t=new Wt,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){q0.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(xa.fromBufferAttribute(d,t),o?q0.addScaledVector(xa,u):q0.addScaledVector(xa.sub(e),u))}e.add(q0)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Y0.copy(n.boundingSphere),Y0.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Y0.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Y0,vl)===null||_i.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(xl.copy(r).invert(),_i.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),x=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let y=v,L=x;y<L;y+=3){const T=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);i=Q0(this,m,t,n,l,u,d,T,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=Q0(this,o,t,n,l,u,d,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),x=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let y=v,L=x;y<L;y+=3){const T=y,C=y+1,I=y+2;i=Q0(this,m,t,n,l,u,d,T,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const v=g,x=g+1,y=g+2;i=Q0(this,o,t,n,l,u,d,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Kp(s,t,e,n,i,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Cn,a),c===null)return null;j0.copy(a),j0.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(j0);return l<e.near||l>e.far?null:{distance:l,point:j0.clone(),object:s}}function Q0(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ss),s.getVertexPosition(c,rs),s.getVertexPosition(l,os);const u=Kp(s,t,e,n,ss,rs,os,J0);if(u){i&&(Z0.fromBufferAttribute(i,a),$0.fromBufferAttribute(i,c),K0.fromBufferAttribute(i,l),u.uv=sn.getInterpolation(J0,ss,rs,os,Z0,$0,K0,new G)),r&&(Z0.fromBufferAttribute(r,a),$0.fromBufferAttribute(r,c),K0.fromBufferAttribute(r,l),u.uv1=sn.getInterpolation(J0,ss,rs,os,Z0,$0,K0,new G)),o&&(yl.fromBufferAttribute(o,a),Ml.fromBufferAttribute(o,c),Sl.fromBufferAttribute(o,l),u.normal=sn.getInterpolation(J0,ss,rs,os,yl,Ml,Sl,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};sn.getNormal(ss,rs,os,d.normal),u.face=d}return u}class Jn extends Wt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2));function p(_,g,m,v,x,y,L,T,C,I,w){const b=y/C,D=L/I,V=y/2,F=L/2,Y=T/2,Z=C+1,W=I+1;let J=0,q=0;const ht=new A;for(let mt=0;mt<W;mt++){const xt=mt*D-F;for(let Xt=0;Xt<Z;Xt++){const Kt=Xt*b-V;ht[_]=Kt*v,ht[g]=xt*x,ht[m]=Y,l.push(ht.x,ht.y,ht.z),ht[_]=0,ht[g]=0,ht[m]=T>0?1:-1,u.push(ht.x,ht.y,ht.z),d.push(Xt/C),d.push(1-mt/I),J+=1}}for(let mt=0;mt<I;mt++)for(let xt=0;xt<C;xt++){const Xt=f+xt+Z*mt,Kt=f+xt+Z*(mt+1),$=f+(xt+1)+Z*(mt+1),st=f+(xt+1)+Z*mt;c.push(Xt,Kt,st),c.push(Kt,$,st),q+=6}a.addGroup(h,q,w),h+=q,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=ws(s[e]);for(const i in n)t[i]=n[i]}return t}function Jp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ef(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Co={clone:ws,merge:Ge};var jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends Ve{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ro extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new A,bl=new G,wl=new G;class ge extends Ro{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,bl,wl),e.subVectors(wl,bl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,cs=1;class nf extends Qt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ge(as,cs,t,e);i.layers=this.layers,this.add(i);const r=new ge(as,cs,t,e);r.layers=this.layers,this.add(r);const o=new ge(as,cs,t,e);o.layers=this.layers,this.add(o);const a=new ge(as,cs,t,e);a.layers=this.layers,this.add(a);const c=new ge(as,cs,t,e);c.layers=this.layers,this.add(c);const l=new ge(as,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===m0)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class C0 extends le{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:qn,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sf extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new C0(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jn(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Gn});r.uniforms.tEquirect.value=e;const o=new ee(i,r),a=e.minFilter;return e.minFilter===wn&&(e.minFilter=Me),new nf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const va=new A,tm=new A,em=new Ht;class gn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=va.subVectors(n,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(va),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||em.getNormalMatrix(t),i=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Ee,tr=new A;class R0{constructor(t=new gn,e=new gn,n=new gn,i=new gn,r=new gn,o=new gn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],h=i[8],p=i[9],_=i[10],g=i[11],m=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,g-h,y-m).normalize(),n[1].setComponents(c+r,f+l,g+h,y+m).normalize(),n[2].setComponents(c+o,f+u,g+p,y+v).normalize(),n[3].setComponents(c-o,f-u,g-p,y-v).normalize(),n[4].setComponents(c-a,f-d,g-_,y-x).normalize(),e===En)n[5].setComponents(c+a,f+d,g+_,y+x).normalize();else if(e===m0)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(tr.x=i.normal.x>0?t.max.x:t.min.x,tr.y=i.normal.y>0?t.max.y:t.min.y,tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nm(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=s.SHORT;else if(l instanceof Uint32Array)h=s.UNSIGNED_INT;else if(l instanceof Int32Array)h=s.INT;else if(l instanceof Int8Array)h=s.BYTE;else if(l instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c._updateRange,f=c.updateRanges;if(s.bindBuffer(l,a),d.count===-1&&f.length===0&&s.bufferSubData(l,0,u),f.length!==0){for(let h=0,p=f.length;h<p;h++){const _=f[h];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Wi extends Wt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=t/a,f=e/c,h=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*f-o;for(let x=0;x<l;x++){const y=x*d-r;p.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const x=v+l*m,y=v+l*(m+1),L=v+1+l*(m+1),T=v+1+l*m;h.push(x,y,T),h.push(y,L,T)}this.setIndex(h),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`
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
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,e1=`struct PhysicalMaterial {
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
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
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V1=`float getShadowMask() {
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
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Eg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Tg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Pg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:cm,aomap_fragment:lm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:hm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:xm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Em,common:Am,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Pm,emissivemap_fragment:Im,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Um,envmap_fragment:Nm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:$m,envmap_vertex:zm,fog_vertex:km,fog_pars_vertex:Vm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:qm,lights_pars_begin:Zm,lights_toon_fragment:Km,lights_toon_pars_fragment:Jm,lights_phong_fragment:jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:s1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:c1,map_fragment:l1,map_pars_fragment:u1,map_particle_fragment:d1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:p1,morphinstance_vertex:m1,morphcolor_vertex:g1,morphnormal_vertex:_1,morphtarget_pars_vertex:x1,morphtarget_vertex:v1,normal_fragment_begin:y1,normal_fragment_maps:M1,normal_pars_fragment:S1,normal_pars_vertex:b1,normal_vertex:w1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:C1,iridescence_pars_fragment:R1,opaque_fragment:P1,packing:I1,premultiplied_alpha_fragment:L1,project_vertex:D1,dithering_fragment:U1,dithering_pars_fragment:N1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:z1,shadowmap_vertex:k1,shadowmask_pars_fragment:V1,skinbase_vertex:H1,skinning_pars_vertex:G1,skinning_vertex:W1,skinnormal_vertex:X1,specularmap_fragment:Y1,specularmap_pars_fragment:q1,tonemapping_fragment:Z1,tonemapping_pars_fragment:$1,transmission_fragment:K1,transmission_pars_fragment:J1,uv_pars_fragment:j1,uv_pars_vertex:Q1,uv_vertex:tg,worldpos_vertex:eg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:og,cube_frag:ag,depth_vert:cg,depth_frag:lg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:hg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:vg,meshmatcap_vert:yg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:wg,meshphong_frag:Eg,meshphysical_vert:Ag,meshphysical_frag:Tg,meshtoon_vert:Cg,meshtoon_frag:Rg,points_vert:Pg,points_frag:Ig,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ug,sprite_frag:Ng},ct={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},We={basic:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ft(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ge([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ge([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new ft(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ge([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ge([ct.points,ct.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ge([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ge([ct.common,ct.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ge([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ge([ct.sprite,ct.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ge([ct.common,ct.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ge([ct.lights,ct.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};We.physical={uniforms:Ge([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const er={r:0,b:0,g:0},vi=new an,Og=new Pt;function Fg(s,t,e,n,i,r,o){const a=new ft(0);let c=r===!0?0:1,l,u,d=null,f=0,h=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const y=p(v);y===null?m(a,c):y&&y.isColor&&(m(y,1),x=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,x){const y=p(x);y&&(y.isCubeTexture||y.mapping===As)?(u===void 0&&(u=new ee(new Jn(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:ws(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vi.copy(x.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(vi)),u.material.toneMapped=te.getTransfer(y.colorSpace)!==oe,(d!==y||f!==y.version||h!==s.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,h=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ee(new Wi(2,2),new qe({name:"BackgroundMaterial",uniforms:ws(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,h=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,x){v.getRGB(er,ef(s)),n.buffers.color.setClear(er.r,er.g,er.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:g}}function Bg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(b,D,V,F,Y){let Z=!1;const W=d(F,V,D);r!==W&&(r=W,l(r.object)),Z=h(b,F,V,Y),Z&&p(b,F,V,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(b,D,V,F),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function d(b,D,V){const F=V.wireframe===!0;let Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let Z=Y[D.id];Z===void 0&&(Z={},Y[D.id]=Z);let W=Z[F];return W===void 0&&(W=f(c()),Z[F]=W),W}function f(b){const D=[],V=[],F=[];for(let Y=0;Y<e;Y++)D[Y]=0,V[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:F,object:b,attributes:{},index:null}}function h(b,D,V,F){const Y=r.attributes,Z=D.attributes;let W=0;const J=V.getAttributes();for(const q in J)if(J[q].location>=0){const mt=Y[q];let xt=Z[q];if(xt===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),mt===void 0||mt.attribute!==xt||xt&&mt.data!==xt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function p(b,D,V,F){const Y={},Z=D.attributes;let W=0;const J=V.getAttributes();for(const q in J)if(J[q].location>=0){let mt=Z[q];mt===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor));const xt={};xt.attribute=mt,mt&&mt.data&&(xt.data=mt.data),Y[q]=xt,W++}r.attributes=Y,r.attributesNum=W,r.index=F}function _(){const b=r.newAttributes;for(let D=0,V=b.length;D<V;D++)b[D]=0}function g(b){m(b,0)}function m(b,D){const V=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;V[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),Y[b]!==D&&(s.vertexAttribDivisor(b,D),Y[b]=D)}function v(){const b=r.newAttributes,D=r.enabledAttributes;for(let V=0,F=D.length;V<F;V++)D[V]!==b[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function x(b,D,V,F,Y,Z,W){W===!0?s.vertexAttribIPointer(b,D,V,Y,Z):s.vertexAttribPointer(b,D,V,F,Y,Z)}function y(b,D,V,F){_();const Y=F.attributes,Z=V.getAttributes(),W=D.defaultAttributeValues;for(const J in Z){const q=Z[J];if(q.location>=0){let ht=Y[J];if(ht===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),ht!==void 0){const mt=ht.normalized,xt=ht.itemSize,Xt=t.get(ht);if(Xt===void 0)continue;const Kt=Xt.buffer,$=Xt.type,st=Xt.bytesPerElement,Mt=$===s.INT||$===s.UNSIGNED_INT||ht.gpuType===xo;if(ht.isInterleavedBufferAttribute){const ut=ht.data,Dt=ut.stride,Vt=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let Lt=0;Lt<q.locationSize;Lt++)m(q.location+Lt,ut.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Lt=0;Lt<q.locationSize;Lt++)g(q.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Lt=0;Lt<q.locationSize;Lt++)x(q.location+Lt,xt/q.locationSize,$,mt,Dt*st,(Vt+xt/q.locationSize*Lt)*st,Mt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<q.locationSize;ut++)m(q.location+ut,ht.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<q.locationSize;ut++)g(q.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let ut=0;ut<q.locationSize;ut++)x(q.location+ut,xt/q.locationSize,$,mt,xt*st,xt/q.locationSize*ut*st,Mt)}}else if(W!==void 0){const mt=W[J];if(mt!==void 0)switch(mt.length){case 2:s.vertexAttrib2fv(q.location,mt);break;case 3:s.vertexAttrib3fv(q.location,mt);break;case 4:s.vertexAttrib4fv(q.location,mt);break;default:s.vertexAttrib1fv(q.location,mt)}}}}v()}function L(){I();for(const b in n){const D=n[b];for(const V in D){const F=D[V];for(const Y in F)u(F[Y].object),delete F[Y];delete D[V]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const V in D){const F=D[V];for(const Y in F)u(F[Y].object),delete F[Y];delete D[V]}delete n[b.id]}function C(b){for(const D in n){const V=n[D];if(V[b.id]===void 0)continue;const F=V[b.id];for(const Y in F)u(F[Y].object),delete F[Y];delete V[b.id]}}function I(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function zg(s,t,e){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(s.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let p=0;p<d;p++)h+=u[p];e.update(h,n,1)}function c(l,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<l.length;p++)o(l[p],u[p],f[p]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];for(let _=0;_<f.length;_++)e.update(p,n,f[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Ye&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Rn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Je&&!C)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:L}}function Vg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new gn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?u(null):l();else{const v=r?0:n,x=v*4;let y=m.clippingState||null;c.value=y,y=u(p,f,x,h);for(let L=0;L!==x;++L)y[L]=e[L];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=h+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=h;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Hg(s){let t=new WeakMap;function e(o,a){return a===r0?o.mapping=qn:a===o0&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===r0||a===o0)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sf(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Po extends Ro{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=4,El=[.125,.215,.35,.446,.526,.582],Ii=20,ya=new Po,Al=new ft;let Ma=null,Sa=0,ba=0,wa=!1;const Pi=(1+Math.sqrt(5))/2,ls=1/Pi,Tl=[new A(-Pi,ls,0),new A(Pi,ls,0),new A(-ls,0,Pi),new A(ls,0,Pi),new A(0,Pi,-ls),new A(0,Pi,ls),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,Sa,ba),this._renderer.xr.enabled=wa,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qn||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:Ts,format:Ye,colorSpace:Kn,depthBuffer:!1},i=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Wg(r,t,e)}return i}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,i){const a=new ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Al),u.toneMapping=Wn,u.autoClear=!1;const h=new Oe({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),p=new ee(new Jn,h);let _=!1;const g=t.background;g?g.isColor&&(h.color.copy(g),t.background=null,_=!0):(h.color.copy(Al),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;nr(i,v*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qn||t.mapping===li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tl[(i-r-1)%Tl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ee(this._lodPlanes[i],l),f=l.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ii-1),_=r/p,g=isFinite(r)?1+Math.floor(u*_):Ii;g>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ii}`);const m=[];let v=0;for(let C=0;C<Ii;++C){const I=C/_,w=Math.exp(-I*I/2);m.push(w),C===0?v+=w:C<g&&(v+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-n;const y=this._sizeLods[i],L=3*y*(i>x-xs?i-x+xs:0),T=4*(this._cubeSize-y);nr(e,L,T,3*y,2*y),c.setRenderTarget(e),c.render(d,ya)}}function Gg(s){const t=[],e=[],n=[];let i=s;const r=s-xs+1+El.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-xs?c=El[o-s+xs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*h),x=new Float32Array(g*p*h),y=new Float32Array(m*p*h);for(let T=0;T<h;T++){const C=T%3*2/3-1,I=T>2?0:-1,w=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(w,_*p*T),x.set(f,g*p*T);const b=[T,T,T,T,T,T];y.set(b,m*p*T)}const L=new Wt;L.setAttribute("position",new ne(v,_)),L.setAttribute("uv",new ne(x,g)),L.setAttribute("faceIndex",new ne(y,m)),t.push(L),i>xs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(s,t,e){const n=new _n(s,t,e);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wg(s,t,e){const n=new Float32Array(Ii),i=new A(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rl(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Pl(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function Xg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===r0||c===o0,u=c===qn||c===li;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Qa(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&i(h)?(e===null&&(e=new Qa(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qg(s,t,e,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER);const h=d.morphAttributes;for(const p in h){const _=h[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(d){const f=[],h=d.index,p=d.attributes.position;let _=0;if(h!==null){const v=h.array;_=h.version;for(let x=0,y=v.length;x<y;x+=3){const L=v[x+0],T=v[x+1],C=v[x+2];f.push(L,T,T,C,C,L)}}else if(p!==void 0){const v=p.array;_=p.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const L=x+0,T=x+1,C=x+2;f.push(L,T,T,C,C,L)}}else return;const g=new(Kd(f)?Ac:Ec)(f,1);g.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Zg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){s.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,p){p!==0&&(s.drawElementsInstanced(n,h,r,f*o,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];e.update(g,n,1)}function d(f,h,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,h[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=h[v];for(let v=0;v<_.length;v++)e.update(m,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $g(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Kg(s,t,e){const n=new WeakMap,i=new $t;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var h=b;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let L=a.attributes.position.count*y,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const C=new Float32Array(L*T*4*d),I=new Ao(C,L,T,d);I.type=Je,I.needsUpdate=!0;const w=y*4;for(let D=0;D<d;D++){const V=m[D],F=v[D],Y=x[D],Z=L*T*4*D;for(let W=0;W<V.count;W++){const J=W*w;p===!0&&(i.fromBufferAttribute(V,W),C[Z+J+0]=i.x,C[Z+J+1]=i.y,C[Z+J+2]=i.z,C[Z+J+3]=0),_===!0&&(i.fromBufferAttribute(F,W),C[Z+J+4]=i.x,C[Z+J+5]=i.y,C[Z+J+6]=i.z,C[Z+J+7]=0),g===!0&&(i.fromBufferAttribute(Y,W),C[Z+J+8]=i.x,C[Z+J+9]=i.y,C[Z+J+10]=i.z,C[Z+J+11]=Y.itemSize===4?i.w:1)}}f={count:d,texture:I,size:new G(L,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Jg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Cc extends le{constructor(t,e,n,i,r,o,a,c,l,u=Fi){if(u!==Fi&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fi&&(n=Zn),n===void 0&&u===Vi&&(n=ki),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const of=new le,Il=new Cc(1,1),af=new Ao,cf=new wc,lf=new C0,Ll=[],Dl=[],Ul=new Float32Array(16),Nl=new Float32Array(9),Ol=new Float32Array(4);function Cs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ll[i];if(r===void 0&&(r=new Float32Array(i),Ll[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Io(s,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function t_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function e_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function n_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Ol.set(n),s.uniformMatrix2fv(this.addr,!1,Ol),Te(e,n)}}function i_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Nl.set(n),s.uniformMatrix3fv(this.addr,!1,Nl),Te(e,n)}}function s_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Ul.set(n),s.uniformMatrix4fv(this.addr,!1,Ul),Te(e,n)}}function r_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function o_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function a_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function c_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function l_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function u_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function d_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function f_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function h_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Il.compareFunction=Mc,r=Il):r=of,e.setTexture2D(t||r,i)}function p_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cf,i)}function m_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lf,i)}function g_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||af,i)}function __(s){switch(s){case 5126:return jg;case 35664:return Qg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(s,t){s.uniform1fv(this.addr,t)}function v_(s,t){const e=Cs(t,this.size,2);s.uniform2fv(this.addr,e)}function y_(s,t){const e=Cs(t,this.size,3);s.uniform3fv(this.addr,e)}function M_(s,t){const e=Cs(t,this.size,4);s.uniform4fv(this.addr,e)}function S_(s,t){const e=Cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function b_(s,t){const e=Cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function w_(s,t){const e=Cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function E_(s,t){s.uniform1iv(this.addr,t)}function A_(s,t){s.uniform2iv(this.addr,t)}function T_(s,t){s.uniform3iv(this.addr,t)}function C_(s,t){s.uniform4iv(this.addr,t)}function R_(s,t){s.uniform1uiv(this.addr,t)}function P_(s,t){s.uniform2uiv(this.addr,t)}function I_(s,t){s.uniform3uiv(this.addr,t)}function L_(s,t){s.uniform4uiv(this.addr,t)}function D_(s,t,e){const n=this.cache,i=t.length,r=Io(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||of,r[o])}function U_(s,t,e){const n=this.cache,i=t.length,r=Io(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cf,r[o])}function N_(s,t,e){const n=this.cache,i=t.length,r=Io(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lf,r[o])}function O_(s,t,e){const n=this.cache,i=t.length,r=Io(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||af,r[o])}function F_(s){switch(s){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return w_;case 5124:case 35670:return E_;case 35667:case 35671:return A_;case 35668:case 35672:return T_;case 35669:case 35673:return C_;case 5125:return R_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return O_}}class B_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=__(e.type)}}class z_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F_(e.type)}}class k_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function Fl(s,t){s.seq.push(t),s.map[t.id]=t}function V_(s,t,e){const n=s.name,i=n.length;for(Ea.lastIndex=0;;){const r=Ea.exec(n),o=Ea.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Fl(e,l===void 0?new B_(a,s,t):new z_(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new k_(a),Fl(e,d)),e=d}}}class Ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);V_(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Bl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const H_=37297;let G_=0;function W_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function X_(s){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(s);let n;switch(t===e?n="":t===h0&&e===f0?n="LinearDisplayP3ToLinearSRGB":t===f0&&e===h0&&(n="LinearSRGBToLinearDisplayP3"),s){case Kn:case T0:return[n,"LinearTransferOETF"];case un:case Eo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function zl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+W_(s.getShaderSource(t),o)}else return i}function Y_(s,t){const e=X_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function q_(s,t){let e;switch(t){case Rd:e="Linear";break;case Pd:e="Reinhard";break;case Id:e="OptimizedCineon";break;case Ld:e="ACESFilmic";break;case Ud:e="AgX";break;case Nd:e="Neutral";break;case Dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new A;function Z_(){te.getLuminanceCoefficients(ir);const s=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function K_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Zs(s){return s!==""}function kl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(s){return s.replace(j_,tx)}const Q_=new Map;function tx(s,t){let e=Yt[t];if(e===void 0){const n=Q_.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tc(e)}const ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(s){return s.replace(ex,nx)}function nx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ix(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function sx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qn:case li:t="ENVMAP_TYPE_CUBE";break;case As:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function ox(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case E0:t="ENVMAP_BLENDING_MULTIPLY";break;case Td:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function ax(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cx(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=ix(e),l=sx(e),u=rx(e),d=ox(e),f=ax(e),h=$_(e),p=K_(r),_=i.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zs).join(`
`),m.length>0&&(m+=`
`)):(g=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),m=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?q_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Y_("linearToOutputTexel",e.outputColorSpace),Z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=tc(o),o=kl(o,e),o=Vl(o,e),a=tc(a),a=kl(a,e),a=Vl(a,e),o=Hl(o),a=Hl(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+g+o,y=v+m+a,L=Bl(i,i.VERTEX_SHADER,x),T=Bl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,L),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(L).trim(),Y=i.getShaderInfoLog(T).trim();let Z=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,T);else{const J=zl(i,L,"vertex"),q=zl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+J+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||Y==="")&&(W=!1);W&&(D.diagnostics={runnable:Z,programLog:V,vertexShader:{log:F,prefix:g},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(L),i.deleteShader(T),I=new Ur(i,_),w=J_(i,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,H_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let lx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dx(t),e.set(t,n)),n}}class dx{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}}function fx(s,t,e,n,i,r,o){const a=new To,c=new ux,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,b,D,V,F){const Y=V.fog,Z=F.geometry,W=w.isMeshStandardMaterial?V.environment:null,J=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),q=J&&J.mapping===As?J.image.height:null,ht=p[w.type];w.precision!==null&&(h=i.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=mt!==void 0?mt.length:0;let Xt=0;Z.morphAttributes.position!==void 0&&(Xt=1),Z.morphAttributes.normal!==void 0&&(Xt=2),Z.morphAttributes.color!==void 0&&(Xt=3);let Kt,$,st,Mt;if(ht){const Jt=We[ht];Kt=Jt.vertexShader,$=Jt.fragmentShader}else Kt=w.vertexShader,$=w.fragmentShader,c.update(w),st=c.getVertexShaderID(w),Mt=c.getFragmentShaderID(w);const ut=s.getRenderTarget(),Dt=F.isInstancedMesh===!0,Vt=F.isBatchedMesh===!0,Lt=!!w.map,Zt=!!w.matcap,R=!!J,ot=!!w.aoMap,et=!!w.lightMap,dt=!!w.bumpMap,K=!!w.normalMap,Rt=!!w.displacementMap,pt=!!w.emissiveMap,yt=!!w.metalnessMap,P=!!w.roughnessMap,S=w.anisotropy>0,z=w.clearcoat>0,tt=w.dispersion>0,Q=w.iridescence>0,j=w.sheen>0,At=w.transmission>0,lt=S&&!!w.anisotropyMap,_t=z&&!!w.clearcoatMap,zt=z&&!!w.clearcoatNormalMap,rt=z&&!!w.clearcoatRoughnessMap,gt=Q&&!!w.iridescenceMap,qt=Q&&!!w.iridescenceThicknessMap,Ut=j&&!!w.sheenColorMap,St=j&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,kt=!!w.specularColorMap,ae=!!w.specularIntensityMap,M=At&&!!w.transmissionMap,O=At&&!!w.thicknessMap,B=!!w.gradientMap,X=!!w.alphaMap,nt=w.alphaTest>0,Tt=!!w.alphaHash,Ft=!!w.extensions;let pe=Wn;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(pe=s.toneMapping);const Se={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:Kt,fragmentShader:$,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Vt,batchingColor:Vt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Kn,alphaToCoverage:!!w.alphaToCoverage,map:Lt,matcap:Zt,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:et,bumpMap:dt,normalMap:K,displacementMap:f&&Rt,emissiveMap:pt,normalMapObjectSpace:K&&w.normalMapType===Hd,normalMapTangentSpace:K&&w.normalMapType===di,metalnessMap:yt,roughnessMap:P,anisotropy:S,anisotropyMap:lt,clearcoat:z,clearcoatMap:_t,clearcoatNormalMap:zt,clearcoatRoughnessMap:rt,dispersion:tt,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:qt,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:Ot,specularColorMap:kt,specularIntensityMap:ae,transmission:At,transmissionMap:M,thicknessMap:O,gradientMap:B,opaque:w.transparent===!1&&w.blending===Oi&&w.alphaToCoverage===!1,alphaMap:X,alphaTest:nt,alphaHash:Tt,combine:w.combine,mapUv:Lt&&_(w.map.channel),aoMapUv:ot&&_(w.aoMap.channel),lightMapUv:et&&_(w.lightMap.channel),bumpMapUv:dt&&_(w.bumpMap.channel),normalMapUv:K&&_(w.normalMap.channel),displacementMapUv:Rt&&_(w.displacementMap.channel),emissiveMapUv:pt&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:P&&_(w.roughnessMap.channel),anisotropyMapUv:lt&&_(w.anisotropyMap.channel),clearcoatMapUv:_t&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:zt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(w.sheenRoughnessMap.channel),specularMapUv:Ot&&_(w.specularMap.channel),specularColorMapUv:kt&&_(w.specularColorMap.channel),specularIntensityMapUv:ae&&_(w.specularIntensityMap.channel),transmissionMapUv:M&&_(w.transmissionMap.channel),thicknessMapUv:O&&_(w.thicknessMap.channel),alphaMapUv:X&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(K||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Lt||X),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:Lt&&w.map.isVideoTexture===!0&&te.getTransfer(w.map.colorSpace)===oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ke,flipSided:w.side===ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)b.push(D),b.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(b,w),x(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function x(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.transmission&&a.enable(14),b.sheen&&a.enable(15),b.opaque&&a.enable(16),b.pointsUvs&&a.enable(17),b.decodeVideoTexture&&a.enable(18),b.alphaToCoverage&&a.enable(19),w.push(a.mask)}function y(w){const b=p[w.type];let D;if(b){const V=We[b];D=Co.clone(V.uniforms)}else D=w.uniforms;return D}function L(w,b){let D;for(let V=0,F=u.length;V<F;V++){const Y=u[V];if(Y.cacheKey===b){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new cx(s,b,w,r),u.push(D)),D}function T(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:L,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:I}}function hx(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function px(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,h,p,_,g){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:p,renderOrder:d.renderOrder,z:_,group:g},s[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=_,m.group=g),t++,m}function a(d,f,h,p,_,g){const m=o(d,f,h,p,_,g);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):e.push(m)}function c(d,f,h,p,_,g){const m=o(d,f,h,p,_,g);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):e.unshift(m)}function l(d,f){e.length>1&&e.sort(d||px),n.length>1&&n.sort(f||Wl),i.length>1&&i.sort(f||Wl)}function u(){for(let d=t,f=s.length;d<f;d++){const h=s[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function mx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Xl,s.set(n,[o])):i>=r.length?(o=new Xl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function gx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new ft};break;case"SpotLight":e={position:new A,direction:new A,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function _x(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xx=0;function vx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function yx(s){const t=new gx,e=_x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new Pt,o=new Pt;function a(l){let u=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let h=0,p=0,_=0,g=0,m=0,v=0,x=0,y=0,L=0,T=0,C=0;l.sort(vx);for(let w=0,b=l.length;w<b;w++){const D=l[w],V=D.color,F=D.intensity,Y=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=V.r*F,d+=V.g*F,f+=V.b*F;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],F);C++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,q=e.get(D);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[h]=q,n.directionalShadowMap[h]=Z,n.directionalShadowMatrix[h]=D.shadow.matrix,v++}n.directional[h]=W,h++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(V).multiplyScalar(F),W.distance=Y,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;const J=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,J.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=J.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=Z,y++}_++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(V).multiplyScalar(F),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=W,g++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const J=D.shadow,q=e.get(D);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=D.shadow.matrix,x++}n.point[p]=W,p++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(F),W.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[m]=W,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==h||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==L||I.numLightProbes!==C)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=h,I.pointLength=p,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=L,I.numLightProbes=C,n.version=xx++)}function c(l,u){let d=0,f=0,h=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const x=l[m];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(x.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(x.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Yl(s){const t=new yx(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Mx(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Yl(s),t.set(i,[a])):r>=o.length?(a=new Yl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Rc extends Ve{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pc extends Ve{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`;function wx(s,t,e){let n=new R0;const i=new G,r=new G,o=new $t,a=new Rc({depthPacking:Vd}),c=new Pc,l={},u=e.maxTextureSize,d={[Cn]:ke,[ke]:Cn,[Ke]:Ke},f=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Sx,fragmentShader:bx}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const p=new Wt;p.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let m=this.type;this.render=function(T,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Gn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=m!==Sn&&this.type===Sn,Y=m===Sn&&this.type!==Sn;for(let Z=0,W=T.length;Z<W;Z++){const J=T[Z],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ht=q.getFrameExtents();if(i.multiply(ht),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ht.x),i.x=r.x*ht.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ht.y),i.y=r.y*ht.y,q.mapSize.y=r.y)),q.map===null||F===!0||Y===!0){const xt=this.type!==Sn?{minFilter:Re,magFilter:Re}:{};q.map!==null&&q.map.dispose(),q.map=new _n(i.x,i.y,xt),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const mt=q.getViewportCount();for(let xt=0;xt<mt;xt++){const Xt=q.getViewport(xt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),V.viewport(o),q.updateMatrices(J,xt),n=q.getFrustum(),y(C,I,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Sn&&v(q,I),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,b,D)};function v(T,C){const I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _n(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,I,f,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,I,h,_,null)}function x(T,C,I,w){let b=null;const D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=I.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=b.uuid,F=C.uuid;let Y=l[V];Y===void 0&&(Y={},l[V]=Y);let Z=Y[F];Z===void 0&&(Z=b.clone(),Y[F]=Z,C.addEventListener("dispose",L)),b=Z}if(b.visible=C.visible,b.wireframe=C.wireframe,w===Sn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=s.properties.get(b);V.light=I}return b}function y(T,C,I,w,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Sn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const F=t.update(T),Y=T.material;if(Array.isArray(Y)){const Z=F.groups;for(let W=0,J=Z.length;W<J;W++){const q=Z[W],ht=Y[q.materialIndex];if(ht&&ht.visible){const mt=x(T,ht,w,b);T.onBeforeShadow(s,T,C,I,F,mt,q),s.renderBufferDirect(I,null,F,mt,T,q),T.onAfterShadow(s,T,C,I,F,mt,q)}}}else if(Y.visible){const Z=x(T,Y,w,b);T.onBeforeShadow(s,T,C,I,F,Z,null),s.renderBufferDirect(I,null,F,Z,T,null),T.onAfterShadow(s,T,C,I,F,Z,null)}}const V=T.children;for(let F=0,Y=V.length;F<Y;F++)y(V[F],C,I,w,b)}function L(T){T.target.removeEventListener("dispose",L);for(const I in l){const w=l[I],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function Ex(s){function t(){let M=!1;const O=new $t;let B=null;const X=new $t(0,0,0,0);return{setMask:function(nt){B!==nt&&!M&&(s.colorMask(nt,nt,nt,nt),B=nt)},setLocked:function(nt){M=nt},setClear:function(nt,Tt,Ft,pe,Se){Se===!0&&(nt*=pe,Tt*=pe,Ft*=pe),O.set(nt,Tt,Ft,pe),X.equals(O)===!1&&(s.clearColor(nt,Tt,Ft,pe),X.copy(O))},reset:function(){M=!1,B=null,X.set(-1,0,0,0)}}}function e(){let M=!1,O=null,B=null,X=null;return{setTest:function(nt){nt?Mt(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(nt){O!==nt&&!M&&(s.depthMask(nt),O=nt)},setFunc:function(nt){if(B!==nt){switch(nt){case yd:s.depthFunc(s.NEVER);break;case Md:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case s0:s.depthFunc(s.LEQUAL);break;case bd:s.depthFunc(s.EQUAL);break;case wd:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}B=nt}},setLocked:function(nt){M=nt},setClear:function(nt){X!==nt&&(s.clearDepth(nt),X=nt)},reset:function(){M=!1,O=null,B=null,X=null}}}function n(){let M=!1,O=null,B=null,X=null,nt=null,Tt=null,Ft=null,pe=null,Se=null;return{setTest:function(Jt){M||(Jt?Mt(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(Jt){O!==Jt&&!M&&(s.stencilMask(Jt),O=Jt)},setFunc:function(Jt,be,_e){(B!==Jt||X!==be||nt!==_e)&&(s.stencilFunc(Jt,be,_e),B=Jt,X=be,nt=_e)},setOp:function(Jt,be,_e){(Tt!==Jt||Ft!==be||pe!==_e)&&(s.stencilOp(Jt,be,_e),Tt=Jt,Ft=be,pe=_e)},setLocked:function(Jt){M=Jt},setClear:function(Jt){Se!==Jt&&(s.clearStencil(Jt),Se=Jt)},reset:function(){M=!1,O=null,B=null,X=null,nt=null,Tt=null,Ft=null,pe=null,Se=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,f=[],h=null,p=!1,_=null,g=null,m=null,v=null,x=null,y=null,L=null,T=new ft(0,0,0),C=0,I=!1,w=null,b=null,D=null,V=null,F=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=W>=2);let q=null,ht={};const mt=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),Xt=new $t().fromArray(mt),Kt=new $t().fromArray(xt);function $(M,O,B,X){const nt=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(M,Tt),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<B;Ft++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(O,0,s.RGBA,1,1,X,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(O+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return Tt}const st={};st[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Mt(s.DEPTH_TEST),r.setFunc(s0),dt(!1),K(qa),Mt(s.CULL_FACE),ot(Gn);function Mt(M){l[M]!==!0&&(s.enable(M),l[M]=!0)}function ut(M){l[M]!==!1&&(s.disable(M),l[M]=!1)}function Dt(M,O){return u[M]!==O?(s.bindFramebuffer(M,O),u[M]=O,M===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=O),M===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=O),!0):!1}function Vt(M,O){let B=f,X=!1;if(M){B=d.get(O),B===void 0&&(B=[],d.set(O,B));const nt=M.textures;if(B.length!==nt.length||B[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,Ft=nt.length;Tt<Ft;Tt++)B[Tt]=s.COLOR_ATTACHMENT0+Tt;B.length=nt.length,X=!0}}else B[0]!==s.BACK&&(B[0]=s.BACK,X=!0);X&&s.drawBuffers(B)}function Lt(M){return h!==M?(s.useProgram(M),h=M,!0):!1}const Zt={[ci]:s.FUNC_ADD,[id]:s.FUNC_SUBTRACT,[sd]:s.FUNC_REVERSE_SUBTRACT};Zt[rd]=s.MIN,Zt[od]=s.MAX;const R={[ad]:s.ZERO,[cd]:s.ONE,[ld]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[md]:s.SRC_ALPHA_SATURATE,[hd]:s.DST_COLOR,[dd]:s.DST_ALPHA,[ud]:s.ONE_MINUS_SRC_COLOR,[Or]:s.ONE_MINUS_SRC_ALPHA,[pd]:s.ONE_MINUS_DST_COLOR,[fd]:s.ONE_MINUS_DST_ALPHA,[gd]:s.CONSTANT_COLOR,[_d]:s.ONE_MINUS_CONSTANT_COLOR,[xd]:s.CONSTANT_ALPHA,[vd]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(M,O,B,X,nt,Tt,Ft,pe,Se,Jt){if(M===Gn){p===!0&&(ut(s.BLEND),p=!1);return}if(p===!1&&(Mt(s.BLEND),p=!0),M!==nd){if(M!==_||Jt!==I){if((g!==ci||x!==ci)&&(s.blendEquation(s.FUNC_ADD),g=ci,x=ci),Jt)switch(M){case Oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.ONE,s.ONE);break;case $a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ka:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ka:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}m=null,v=null,y=null,L=null,T.set(0,0,0),C=0,_=M,I=Jt}return}nt=nt||O,Tt=Tt||B,Ft=Ft||X,(O!==g||nt!==x)&&(s.blendEquationSeparate(Zt[O],Zt[nt]),g=O,x=nt),(B!==m||X!==v||Tt!==y||Ft!==L)&&(s.blendFuncSeparate(R[B],R[X],R[Tt],R[Ft]),m=B,v=X,y=Tt,L=Ft),(pe.equals(T)===!1||Se!==C)&&(s.blendColor(pe.r,pe.g,pe.b,Se),T.copy(pe),C=Se),_=M,I=!1}function et(M,O){M.side===Ke?ut(s.CULL_FACE):Mt(s.CULL_FACE);let B=M.side===ke;O&&(B=!B),dt(B),M.blending===Oi&&M.transparent===!1?ot(Gn):ot(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),i.setMask(M.colorWrite);const X=M.stencilWrite;o.setTest(X),X&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),pt(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(M){w!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),w=M)}function K(M){M!==Qu?(Mt(s.CULL_FACE),M!==b&&(M===qa?s.cullFace(s.BACK):M===td?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),b=M}function Rt(M){M!==D&&(Z&&s.lineWidth(M),D=M)}function pt(M,O,B){M?(Mt(s.POLYGON_OFFSET_FILL),(V!==O||F!==B)&&(s.polygonOffset(O,B),V=O,F=B)):ut(s.POLYGON_OFFSET_FILL)}function yt(M){M?Mt(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function P(M){M===void 0&&(M=s.TEXTURE0+Y-1),q!==M&&(s.activeTexture(M),q=M)}function S(M,O,B){B===void 0&&(q===null?B=s.TEXTURE0+Y-1:B=q);let X=ht[B];X===void 0&&(X={type:void 0,texture:void 0},ht[B]=X),(X.type!==M||X.texture!==O)&&(q!==B&&(s.activeTexture(B),q=B),s.bindTexture(M,O||st[M]),X.type=M,X.texture=O)}function z(){const M=ht[q];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function zt(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function qt(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ut(M){Xt.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),Xt.copy(M))}function St(M){Kt.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),Kt.copy(M))}function Ot(M,O){let B=c.get(O);B===void 0&&(B=new WeakMap,c.set(O,B));let X=B.get(M);X===void 0&&(X=s.getUniformBlockIndex(O,M.name),B.set(M,X))}function kt(M,O){const X=c.get(O).get(M);a.get(O)!==X&&(s.uniformBlockBinding(O,X,M.__bindingPointIndex),a.set(O,X))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},q=null,ht={},u={},d=new WeakMap,f=[],h=null,p=!1,_=null,g=null,m=null,v=null,x=null,y=null,L=null,T=new ft(0,0,0),C=0,I=!1,w=null,b=null,D=null,V=null,F=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Mt,disable:ut,bindFramebuffer:Dt,drawBuffers:Vt,useProgram:Lt,setBlending:ot,setMaterial:et,setFlipSided:dt,setCullFace:K,setLineWidth:Rt,setPolygonOffset:pt,setScissorTest:yt,activeTexture:P,bindTexture:S,unbindTexture:z,compressedTexImage2D:tt,compressedTexImage3D:Q,texImage2D:gt,texImage3D:qt,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:zt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:At,compressedTexSubImage2D:lt,compressedTexSubImage3D:_t,scissor:Ut,viewport:St,reset:ae}}function Ax(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Tx(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Cx(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function ec(s,t,e,n){const i=Rx(n);switch(e){case pc:return s*t;case gc:return s*t;case _c:return s*t*2;case Mo:return s*t/i.components*i.byteLength;case A0:return s*t/i.components*i.byteLength;case xc:return s*t*2/i.components*i.byteLength;case So:return s*t*2/i.components*i.byteLength;case mc:return s*t*3/i.components*i.byteLength;case Ye:return s*t*4/i.components*i.byteLength;case bo:return s*t*4/i.components*i.byteLength;case Ks:case Js:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Br:case kr:return Math.max(s,16)*Math.max(t,8)/4;case Fr:case zr:return Math.max(s,8)*Math.max(t,8)/2;case Vr:case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $r:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case eo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case t0:case so:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vc:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ao:case co:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rx(s){switch(s){case Rn:case dc:return{byteLength:1,components:1};case Ss:case fc:case Ts:return{byteLength:2,components:1};case vo:case yo:return{byteLength:2,components:4};case Zn:case xo:case Je:return{byteLength:4,components:1};case hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const Px={contain:Ax,cover:Tx,fill:Cx,getByteLength:ec};function Ix(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new G,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,S){return h?new OffscreenCanvas(P,S):g0("canvas")}function _(P,S,z){let tt=1;const Q=yt(P);if((Q.width>z||Q.height>z)&&(tt=z/Math.max(Q.width,Q.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(tt*Q.width),At=Math.floor(tt*Q.height);d===void 0&&(d=p(j,At));const lt=S?p(j,At):d;return lt.width=j,lt.height=At,lt.getContext("2d").drawImage(P,0,0,j,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+At+")."),lt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==Re&&P.minFilter!==Me}function m(P){s.generateMipmap(P)}function v(P,S,z,tt,Q=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=S;if(S===s.RED&&(z===s.FLOAT&&(j=s.R32F),z===s.HALF_FLOAT&&(j=s.R16F),z===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.R8UI),z===s.UNSIGNED_SHORT&&(j=s.R16UI),z===s.UNSIGNED_INT&&(j=s.R32UI),z===s.BYTE&&(j=s.R8I),z===s.SHORT&&(j=s.R16I),z===s.INT&&(j=s.R32I)),S===s.RG&&(z===s.FLOAT&&(j=s.RG32F),z===s.HALF_FLOAT&&(j=s.RG16F),z===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RG8UI),z===s.UNSIGNED_SHORT&&(j=s.RG16UI),z===s.UNSIGNED_INT&&(j=s.RG32UI),z===s.BYTE&&(j=s.RG8I),z===s.SHORT&&(j=s.RG16I),z===s.INT&&(j=s.RG32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const At=Q?d0:te.getTransfer(tt);z===s.FLOAT&&(j=s.RGBA32F),z===s.HALF_FLOAT&&(j=s.RGBA16F),z===s.UNSIGNED_BYTE&&(j=At===oe?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(P,S){let z;return P?S===null||S===Zn||S===ki?z=s.DEPTH24_STENCIL8:S===Je?z=s.DEPTH32F_STENCIL8:S===Ss&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zn||S===ki?z=s.DEPTH_COMPONENT24:S===Je?z=s.DEPTH_COMPONENT32F:S===Ss&&(z=s.DEPTH_COMPONENT16),z}function y(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Re&&P.minFilter!==Me?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function L(P){const S=P.target;S.removeEventListener("dispose",L),C(S),S.isVideoTexture&&u.delete(S)}function T(P){const S=P.target;S.removeEventListener("dispose",T),w(S)}function C(P){const S=n.get(P);if(S.__webglInit===void 0)return;const z=P.source,tt=f.get(z);if(tt){const Q=tt[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(P),Object.keys(tt).length===0&&f.delete(z)}n.remove(P)}function I(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const z=P.source,tt=f.get(z);delete tt[S.__cacheKey],o.memory.textures--}function w(P){const S=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let Q=0;Q<S.__webglFramebuffer[tt].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[tt][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)s.deleteFramebuffer(S.__webglFramebuffer[tt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=P.textures;for(let tt=0,Q=z.length;tt<Q;tt++){const j=n.get(z[tt]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[tt])}n.remove(P)}let b=0;function D(){b=0}function V(){const P=b;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),b+=1,P}function F(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Y(P,S){const z=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(z,P,S);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function Z(P,S){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Kt(z,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function W(P,S){const z=n.get(P);if(P.version>0&&z.__version!==P.version){Kt(z,P,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function J(P,S){const z=n.get(P);if(P.version>0&&z.__version!==P.version){$(z,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const q={[a0]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[c0]:s.MIRRORED_REPEAT},ht={[Re]:s.NEAREST,[uc]:s.NEAREST_MIPMAP_NEAREST,[gs]:s.NEAREST_MIPMAP_LINEAR,[Me]:s.LINEAR,[$s]:s.LINEAR_MIPMAP_NEAREST,[wn]:s.LINEAR_MIPMAP_LINEAR},mt={[Gd]:s.NEVER,[$d]:s.ALWAYS,[Wd]:s.LESS,[Mc]:s.LEQUAL,[Xd]:s.EQUAL,[Zd]:s.GEQUAL,[Yd]:s.GREATER,[qd]:s.NOTEQUAL};function xt(P,S){if(S.type===Je&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Me||S.magFilter===$s||S.magFilter===gs||S.magFilter===wn||S.minFilter===Me||S.minFilter===$s||S.minFilter===gs||S.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,q[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,q[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,q[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ht[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Re||S.minFilter!==gs&&S.minFilter!==wn||S.type===Je&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xt(P,S){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",L));const tt=S.source;let Q=f.get(tt);Q===void 0&&(Q={},f.set(tt,Q));const j=F(S);if(j!==P.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[j].usedTimes++;const At=Q[P.__cacheKey];At!==void 0&&(Q[P.__cacheKey].usedTimes--,At.usedTimes===0&&I(S)),P.__cacheKey=j,P.__webglTexture=Q[j].texture}return z}function Kt(P,S,z){let tt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=s.TEXTURE_3D);const Q=Xt(P,S),j=S.source;e.bindTexture(tt,P.__webglTexture,s.TEXTURE0+z);const At=n.get(j);if(j.version!==At.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);const lt=te.getPrimaries(te.workingColorSpace),_t=S.colorSpace===zn?null:te.getPrimaries(S.colorSpace),zt=S.colorSpace===zn||lt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let rt=_(S.image,!1,i.maxTextureSize);rt=pt(S,rt);const gt=r.convert(S.format,S.colorSpace),qt=r.convert(S.type);let Ut=v(S.internalFormat,gt,qt,S.colorSpace,S.isVideoTexture);xt(tt,S);let St;const Ot=S.mipmaps,kt=S.isVideoTexture!==!0,ae=At.__version===void 0||Q===!0,M=j.dataReady,O=y(S,rt);if(S.isDepthTexture)Ut=x(S.format===Vi,S.type),ae&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,gt,qt,null));else if(S.isDataTexture)if(Ot.length>0){kt&&ae&&e.texStorage2D(s.TEXTURE_2D,O,Ut,Ot[0].width,Ot[0].height);for(let B=0,X=Ot.length;B<X;B++)St=Ot[B],kt?M&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,St.width,St.height,gt,qt,St.data):e.texImage2D(s.TEXTURE_2D,B,Ut,St.width,St.height,0,gt,qt,St.data);S.generateMipmaps=!1}else kt?(ae&&e.texStorage2D(s.TEXTURE_2D,O,Ut,rt.width,rt.height),M&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,gt,qt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,rt.width,rt.height,0,gt,qt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){kt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,O,Ut,Ot[0].width,Ot[0].height,rt.depth);for(let B=0,X=Ot.length;B<X;B++)if(St=Ot[B],S.format!==Ye)if(gt!==null)if(kt){if(M)if(S.layerUpdates.size>0){const nt=ec(St.width,St.height,S.format,S.type);for(const Tt of S.layerUpdates){const Ft=St.data.subarray(Tt*nt/St.data.BYTES_PER_ELEMENT,(Tt+1)*nt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,Tt,St.width,St.height,1,gt,Ft,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,St.width,St.height,rt.depth,gt,St.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,B,Ut,St.width,St.height,rt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?M&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,St.width,St.height,rt.depth,gt,qt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,B,Ut,St.width,St.height,rt.depth,0,gt,qt,St.data)}else{kt&&ae&&e.texStorage2D(s.TEXTURE_2D,O,Ut,Ot[0].width,Ot[0].height);for(let B=0,X=Ot.length;B<X;B++)St=Ot[B],S.format!==Ye?gt!==null?kt?M&&e.compressedTexSubImage2D(s.TEXTURE_2D,B,0,0,St.width,St.height,gt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,B,Ut,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?M&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,St.width,St.height,gt,qt,St.data):e.texImage2D(s.TEXTURE_2D,B,Ut,St.width,St.height,0,gt,qt,St.data)}else if(S.isDataArrayTexture)if(kt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,O,Ut,rt.width,rt.height,rt.depth),M)if(S.layerUpdates.size>0){const B=ec(rt.width,rt.height,S.format,S.type);for(const X of S.layerUpdates){const nt=rt.data.subarray(X*B/rt.data.BYTES_PER_ELEMENT,(X+1)*B/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,X,rt.width,rt.height,1,gt,qt,nt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,qt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,gt,qt,rt.data);else if(S.isData3DTexture)kt?(ae&&e.texStorage3D(s.TEXTURE_3D,O,Ut,rt.width,rt.height,rt.depth),M&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,qt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,gt,qt,rt.data);else if(S.isFramebufferTexture){if(ae)if(kt)e.texStorage2D(s.TEXTURE_2D,O,Ut,rt.width,rt.height);else{let B=rt.width,X=rt.height;for(let nt=0;nt<O;nt++)e.texImage2D(s.TEXTURE_2D,nt,Ut,B,X,0,gt,qt,null),B>>=1,X>>=1}}else if(Ot.length>0){if(kt&&ae){const B=yt(Ot[0]);e.texStorage2D(s.TEXTURE_2D,O,Ut,B.width,B.height)}for(let B=0,X=Ot.length;B<X;B++)St=Ot[B],kt?M&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,gt,qt,St):e.texImage2D(s.TEXTURE_2D,B,Ut,gt,qt,St);S.generateMipmaps=!1}else if(kt){if(ae){const B=yt(rt);e.texStorage2D(s.TEXTURE_2D,O,Ut,B.width,B.height)}M&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,qt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ut,gt,qt,rt);g(S)&&m(tt),At.__version=j.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $(P,S,z){if(S.image.length!==6)return;const tt=Xt(P,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);const j=n.get(Q);if(Q.version!==j.__version||tt===!0){e.activeTexture(s.TEXTURE0+z);const At=te.getPrimaries(te.workingColorSpace),lt=S.colorSpace===zn?null:te.getPrimaries(S.colorSpace),_t=S.colorSpace===zn||At===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const zt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let X=0;X<6;X++)!zt&&!rt?gt[X]=_(S.image[X],!0,i.maxCubemapSize):gt[X]=rt?S.image[X].image:S.image[X],gt[X]=pt(S,gt[X]);const qt=gt[0],Ut=r.convert(S.format,S.colorSpace),St=r.convert(S.type),Ot=v(S.internalFormat,Ut,St,S.colorSpace),kt=S.isVideoTexture!==!0,ae=j.__version===void 0||tt===!0,M=Q.dataReady;let O=y(S,qt);xt(s.TEXTURE_CUBE_MAP,S);let B;if(zt){kt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,O,Ot,qt.width,qt.height);for(let X=0;X<6;X++){B=gt[X].mipmaps;for(let nt=0;nt<B.length;nt++){const Tt=B[nt];S.format!==Ye?Ut!==null?kt?M&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Tt.width,Tt.height,Ut,Tt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?M&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Tt.width,Tt.height,Ut,St,Tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,Ot,Tt.width,Tt.height,0,Ut,St,Tt.data)}}}else{if(B=S.mipmaps,kt&&ae){B.length>0&&O++;const X=yt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,O,Ot,X.width,X.height)}for(let X=0;X<6;X++)if(rt){kt?M&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,gt[X].width,gt[X].height,Ut,St,gt[X].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ot,gt[X].width,gt[X].height,0,Ut,St,gt[X].data);for(let nt=0;nt<B.length;nt++){const Ft=B[nt].image[X].image;kt?M&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,Ft.width,Ft.height,Ut,St,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,Ot,Ft.width,Ft.height,0,Ut,St,Ft.data)}}else{kt?M&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ut,St,gt[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ot,Ut,St,gt[X]);for(let nt=0;nt<B.length;nt++){const Tt=B[nt];kt?M&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,Ut,St,Tt.image[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,Ot,Ut,St,Tt.image[X])}}}g(S)&&m(s.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function st(P,S,z,tt,Q,j){const At=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),_t=v(z.internalFormat,At,lt,z.colorSpace);if(!n.get(S).__hasExternalTextures){const rt=Math.max(1,S.width>>j),gt=Math.max(1,S.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,_t,rt,gt,S.depth,0,At,lt,null):e.texImage2D(Q,j,_t,rt,gt,0,At,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),K(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,n.get(z).__webglTexture,0,dt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,n.get(z).__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(P,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const tt=S.depthTexture,Q=tt&&tt.isDepthTexture?tt.type:null,j=x(S.stencilBuffer,Q),At=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=dt(S);K(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,j,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,P)}else{const tt=S.textures;for(let Q=0;Q<tt.length;Q++){const j=tt[Q],At=r.convert(j.format,j.colorSpace),lt=r.convert(j.type),_t=v(j.internalFormat,At,lt,j.colorSpace),zt=dt(S);z&&K(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,_t,S.width,S.height):K(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const tt=n.get(S.depthTexture).__webglTexture,Q=dt(S);if(S.depthTexture.format===Fi)K(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(S.depthTexture.format===Vi)K(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(P){const S=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,P)}else if(z){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=s.createRenderbuffer(),Mt(S.__webglDepthbuffer[tt],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Mt(S.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(P,S,z){const tt=n.get(P);S!==void 0&&st(tt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Dt(P)}function Lt(P){const S=P.texture,z=n.get(P),tt=n.get(S);P.addEventListener("dispose",T);const Q=P.textures,j=P.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=S.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let _t=0;_t<S.mipmaps.length;_t++)z.__webglFramebuffer[lt][_t]=s.createFramebuffer()}else z.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)z.__webglFramebuffer[lt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(At)for(let lt=0,_t=Q.length;lt<_t;lt++){const zt=n.get(Q[lt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&K(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const _t=Q[lt];z.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[lt]);const zt=r.convert(_t.format,_t.colorSpace),rt=r.convert(_t.type),gt=v(_t.internalFormat,zt,rt,_t.colorSpace,P.isXRRenderTarget===!0),qt=dt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,gt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,z.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),xt(s.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)st(z.__webglFramebuffer[lt][_t],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t);else st(z.__webglFramebuffer[lt],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let lt=0,_t=Q.length;lt<_t;lt++){const zt=Q[lt],rt=n.get(zt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),xt(s.TEXTURE_2D,zt),st(z.__webglFramebuffer,P,zt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),g(zt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),xt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)st(z.__webglFramebuffer[_t],P,S,s.COLOR_ATTACHMENT0,lt,_t);else st(z.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,lt,0);g(S)&&m(lt),e.unbindTexture()}P.depthBuffer&&Dt(P)}function Zt(P){const S=P.textures;for(let z=0,tt=S.length;z<tt;z++){const Q=S[z];if(g(Q)){const j=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,At=n.get(Q).__webglTexture;e.bindTexture(j,At),m(j),e.unbindTexture()}}}const R=[],ot=[];function et(P){if(P.samples>0){if(K(P)===!1){const S=P.textures,z=P.width,tt=P.height;let Q=s.COLOR_BUFFER_BIT;const j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(P),lt=S.length>1;if(lt)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const zt=n.get(S[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,zt,0)}s.blitFramebuffer(0,0,z,tt,0,0,z,tt,Q,s.NEAREST),c===!0&&(R.length=0,ot.length=0,R.push(s.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(R.push(j),ot.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,R))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const zt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function dt(P){return Math.min(i.maxSamples,P.samples)}function K(P){const S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function pt(P,S){const z=P.colorSpace,tt=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Kn&&z!==zn&&(te.getTransfer(z)===oe?(tt!==Ye||Q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Vt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=K}function uf(s,t){function e(n,i=zn){let r;const o=te.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===vo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return s.BYTE;if(n===fc)return s.SHORT;if(n===Ss)return s.UNSIGNED_SHORT;if(n===xo)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===Je)return s.FLOAT;if(n===Ts)return s.HALF_FLOAT;if(n===pc)return s.ALPHA;if(n===mc)return s.RGB;if(n===Ye)return s.RGBA;if(n===gc)return s.LUMINANCE;if(n===_c)return s.LUMINANCE_ALPHA;if(n===Fi)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===Mo)return s.RED;if(n===A0)return s.RED_INTEGER;if(n===xc)return s.RG;if(n===So)return s.RG_INTEGER;if(n===bo)return s.RGBA_INTEGER;if(n===Ks||n===Js||n===js||n===Qs)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===Br||n===zr||n===kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vr||n===Hr||n===Gr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vr||n===Hr)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wr||n===Xr||n===Yr||n===qr||n===Zr||n===$r||n===Kr||n===Jr||n===jr||n===Qr||n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qr)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===t0||n===so||n===ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===t0)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===oo||n===ao||n===co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===t0)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class df extends ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vn extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lx={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;l.inputState.pinching&&f>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`;class Nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new le,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:Dx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ox extends Pn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,p=null;const _=new Nx,g=e.getContextAttributes();let m=null,v=null;const x=[],y=[],L=new G;let T=null;const C=new ge;C.layers.enable(1),C.viewport=new $t;const I=new ge;I.layers.enable(2),I.viewport=new $t;const w=[C,I],b=new df;b.layers.enable(1),b.layers.enable(2);let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=x[$];return st===void 0&&(st=new Aa,x[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=x[$];return st===void 0&&(st=new Aa,x[$]=st),st.getGripSpace()},this.getHand=function($){let st=x[$];return st===void 0&&(st=new Aa,x[$]=st),st.getHandSpace()};function F($){const st=y.indexOf($.inputSource);if(st===-1)return;const Mt=x[st];Mt!==void 0&&(Mt.update($.inputSource,$.frame,l||o),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",Z);for(let $=0;$<x.length;$++){const st=y[$];st!==null&&(y[$]=null,x[$].disconnect(st))}D=null,V=null,_.reset(),t.setRenderTarget(m),h=null,f=null,d=null,i=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new _n(h.framebufferWidth,h.framebufferHeight,{format:Ye,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,Mt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Vi:Fi,Mt=g.stencil?ki:Zn);const Dt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(Dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new _n(f.textureWidth,f.textureHeight,{format:Ye,type:Rn,depthTexture:new Cc(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z($){for(let st=0;st<$.removed.length;st++){const Mt=$.removed[st],ut=y.indexOf(Mt);ut>=0&&(y[ut]=null,x[ut].disconnect(Mt))}for(let st=0;st<$.added.length;st++){const Mt=$.added[st];let ut=y.indexOf(Mt);if(ut===-1){for(let Vt=0;Vt<x.length;Vt++)if(Vt>=y.length){y.push(Mt),ut=Vt;break}else if(y[Vt]===null){y[Vt]=Mt,ut=Vt;break}if(ut===-1)break}const Dt=x[ut];Dt&&Dt.connect(Mt)}}const W=new A,J=new A;function q($,st,Mt){W.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(Mt.matrixWorld);const ut=W.distanceTo(J),Dt=st.projectionMatrix.elements,Vt=Mt.projectionMatrix.elements,Lt=Dt[14]/(Dt[10]-1),Zt=Dt[14]/(Dt[10]+1),R=(Dt[9]+1)/Dt[5],ot=(Dt[9]-1)/Dt[5],et=(Dt[8]-1)/Dt[0],dt=(Vt[8]+1)/Vt[0],K=Lt*et,Rt=Lt*dt,pt=ut/(-et+dt),yt=pt*-et;st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(yt),$.translateZ(pt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const P=Lt+pt,S=Zt+pt,z=K-yt,tt=Rt+(ut-yt),Q=R*Zt/S*P,j=ot*Zt/S*P;$.projectionMatrix.makePerspective(z,tt,Q,j,P,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ht($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),b.near=I.near=C.near=$.near,b.far=I.far=C.far=$.far,(D!==b.near||V!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,V=b.far,C.near=D,C.far=V,I.near=D,I.far=V,C.updateProjectionMatrix(),I.updateProjectionMatrix(),$.updateProjectionMatrix());const st=$.parent,Mt=b.cameras;ht(b,st);for(let ut=0;ut<Mt.length;ut++)ht(Mt[ut],st);Mt.length===2?q(b,C,I):b.projectionMatrix.copy(C.projectionMatrix),mt($,b,st)};function mt($,st,Mt){Mt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let xt=null;function Xt($,st){if(u=st.getViewerPose(l||o),p=st,u!==null){const Mt=u.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let ut=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,ut=!0);for(let Vt=0;Vt<Mt.length;Vt++){const Lt=Mt[Vt];let Zt=null;if(h!==null)Zt=h.getViewport(Lt);else{const ot=d.getViewSubImage(f,Lt);Zt=ot.viewport,Vt===0&&(t.setRenderTargetTextures(v,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(v))}let R=w[Vt];R===void 0&&(R=new ge,R.layers.enable(Vt),R.viewport=new $t,w[Vt]=R),R.matrix.fromArray(Lt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Lt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Vt===0&&(b.matrix.copy(R.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ut===!0&&b.cameras.push(R)}const Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Vt=d.getDepthInformation(Mt[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,i.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const ut=y[Mt],Dt=x[Mt];ut!==null&&Dt!==void 0&&Dt.update(ut,st,l||o)}xt&&xt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),p=null}const Kt=new rf;Kt.setAnimationLoop(Xt),this.setAnimationLoop=function($){xt=$},this.dispose=function(){}}}const yi=new an,Fx=new Pt;function Bx(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ef(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(yi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zx(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=i[v.id];y===void 0&&(p(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",g));const L=x.program;n.updateUBOMapping(v,L);const T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){const x=d();v.__bindingPointIndex=x;const y=s.createBuffer(),L=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],y=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,C=y.length;T<C;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,b=I.length;w<b;w++){const D=I[w];if(h(D,T,w,L)===!0){const V=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let Z=0;Z<F.length;Z++){const W=F[Z],J=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,V+Y,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,x,y,L){const T=v.value,C=x+"_"+y;if(L[C]===void 0)return typeof T=="number"||typeof T=="boolean"?L[C]=T:L[C]=T.clone(),!0;{const I=L[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function p(v){const x=v.uniforms;let y=0;const L=16;for(let C=0,I=x.length;C<I;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,D=w.length;b<D;b++){const V=w[b],F=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,Z=F.length;Y<Z;Y++){const W=F[Y],J=_(W),q=y%L,ht=q%J.boundary,mt=q+ht;y+=ht,mt!==0&&L-mt<J.storage&&(y+=L-mt),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=J.storage}}}const T=y%L;return T>0&&(y+=L-T),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class ff{constructor(t={}){const{canvas:e=Jd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const h=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let y=!1,L=0,T=0,C=null,I=-1,w=null;const b=new $t,D=new $t;let V=null;const F=new ft(0);let Y=0,Z=e.width,W=e.height,J=1,q=null,ht=null;const mt=new $t(0,0,Z,W),xt=new $t(0,0,Z,W);let Xt=!1;const Kt=new R0;let $=!1,st=!1;const Mt=new Pt,ut=new A,Dt=new $t,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Zt(){return C===null?J:1}let R=n;function ot(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${go}`),e.addEventListener("webglcontextlost",B,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",nt,!1),R===null){const U="webgl2";if(R=ot(U,E),R===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let et,dt,K,Rt,pt,yt,P,S,z,tt,Q,j,At,lt,_t,zt,rt,gt,qt,Ut,St,Ot,kt,ae;function M(){et=new Yg(R),et.init(),Ot=new uf(R,et),dt=new kg(R,et,t,Ot),K=new Ex(R),Rt=new $g(R),pt=new hx,yt=new Ix(R,et,K,pt,dt,Ot,Rt),P=new Hg(x),S=new Xg(x),z=new nm(R),kt=new Bg(R,z),tt=new qg(R,z,Rt,kt),Q=new Jg(R,tt,z,Rt),qt=new Kg(R,dt,yt),zt=new Vg(pt),j=new fx(x,P,S,et,dt,kt,zt),At=new Bx(x,pt),lt=new mx,_t=new Mx(et),gt=new Fg(x,P,S,K,Q,f,c),rt=new wx(x,Q,dt),ae=new zx(R,Rt,dt,K),Ut=new zg(R,et,Rt),St=new Zg(R,et,Rt),Rt.programs=j.programs,x.capabilities=dt,x.extensions=et,x.properties=pt,x.renderLists=lt,x.shadowMap=rt,x.state=K,x.info=Rt}M();const O=new Ox(x,R);this.xr=O,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(Z,W,!1))},this.getSize=function(E){return E.set(Z,W)},this.setSize=function(E,U,k=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,W=U,e.width=Math.floor(E*J),e.height=Math.floor(U*J),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Z*J,W*J).floor()},this.setDrawingBufferSize=function(E,U,k){Z=E,W=U,J=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,U,k,H){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,U,k,H),K.viewport(b.copy(mt).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,U,k,H){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,U,k,H),K.scissor(D.copy(xt).multiplyScalar(J).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(E){K.setScissorTest(Xt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(E=!0,U=!0,k=!0){let H=0;if(E){let N=!1;if(C!==null){const at=C.texture.format;N=at===bo||at===So||at===A0}if(N){const at=C.texture.type,vt=at===Rn||at===Zn||at===Ss||at===ki||at===vo||at===yo,wt=gt.getClearColor(),Et=gt.getClearAlpha(),Nt=wt.r,Bt=wt.g,It=wt.b;vt?(h[0]=Nt,h[1]=Bt,h[2]=It,h[3]=Et,R.clearBufferuiv(R.COLOR,0,h)):(p[0]=Nt,p[1]=Bt,p[2]=It,p[3]=Et,R.clearBufferiv(R.COLOR,0,p))}else H|=R.COLOR_BUFFER_BIT}U&&(H|=R.DEPTH_BUFFER_BIT),k&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",B,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),lt.dispose(),_t.dispose(),pt.dispose(),P.dispose(),S.dispose(),Q.dispose(),kt.dispose(),ae.dispose(),j.dispose(),O.dispose(),O.removeEventListener("sessionstart",_e),O.removeEventListener("sessionend",jn),Pe.stop()};function B(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Rt.autoReset,U=rt.enabled,k=rt.autoUpdate,H=rt.needsUpdate,N=rt.type;M(),Rt.autoReset=E,rt.enabled=U,rt.autoUpdate=k,rt.needsUpdate=H,rt.type=N}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tt(E){const U=E.target;U.removeEventListener("dispose",Tt),Ft(U)}function Ft(E){pe(E),pt.remove(E)}function pe(E){const U=pt.get(E).programs;U!==void 0&&(U.forEach(function(k){j.releaseProgram(k)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,H,N,at){U===null&&(U=Vt);const vt=N.isMesh&&N.matrixWorld.determinant()<0,wt=bh(E,U,k,H,N);K.setMaterial(H,vt);let Et=k.index,Nt=1;if(H.wireframe===!0){if(Et=tt.getWireframeAttribute(k),Et===void 0)return;Nt=2}const Bt=k.drawRange,It=k.attributes.position;let ie=Bt.start*Nt,ue=(Bt.start+Bt.count)*Nt;at!==null&&(ie=Math.max(ie,at.start*Nt),ue=Math.min(ue,(at.start+at.count)*Nt)),Et!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Et.count)):It!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,It.count));const de=ue-ie;if(de<0||de===1/0)return;kt.setup(N,H,wt,k,Et);let Qe,se=Ut;if(Et!==null&&(Qe=z.get(Et),se=St,se.setIndex(Qe)),N.isMesh)H.wireframe===!0?(K.setLineWidth(H.wireframeLinewidth*Zt()),se.setMode(R.LINES)):se.setMode(R.TRIANGLES);else if(N.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),K.setLineWidth(Ct*Zt()),N.isLineSegments?se.setMode(R.LINES):N.isLineLoop?se.setMode(R.LINE_LOOP):se.setMode(R.LINE_STRIP)}else N.isPoints?se.setMode(R.POINTS):N.isSprite&&se.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ct=N._multiDrawStarts,Ie=N._multiDrawCounts,re=N._multiDrawCount,fn=Et?z.get(Et).bytesPerElement:1,qi=pt.get(H).currentProgram.getUniforms();for(let tn=0;tn<re;tn++)qi.setValue(R,"_gl_DrawID",tn),se.render(Ct[tn]/fn,Ie[tn])}else if(N.isInstancedMesh)se.renderInstances(ie,de,N.count);else if(k.isInstancedBufferGeometry){const Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ie=Math.min(k.instanceCount,Ct);se.renderInstances(ie,de,Ie)}else se.render(ie,de)};function Se(E,U,k){E.transparent===!0&&E.side===Ke&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,O0(E,U,k),E.side=Cn,E.needsUpdate=!0,O0(E,U,k),E.side=Ke):O0(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),g=_t.get(k),g.init(U),v.push(g),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();const H=new Set;return E.traverse(function(N){const at=N.material;if(at)if(Array.isArray(at))for(let vt=0;vt<at.length;vt++){const wt=at[vt];Se(wt,k,N),H.add(wt)}else Se(at,k,N),H.add(at)}),v.pop(),g=null,H},this.compileAsync=function(E,U,k=null){const H=this.compile(E,U,k);return new Promise(N=>{function at(){if(H.forEach(function(vt){pt.get(vt).currentProgram.isReady()&&H.delete(vt)}),H.size===0){N(E);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Jt=null;function be(E){Jt&&Jt(E)}function _e(){Pe.stop()}function jn(){Pe.start()}const Pe=new rf;Pe.setAnimationLoop(be),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(E){Jt=E,O.setAnimationLoop(E),E===null?Pe.stop():Pe.start()},O.addEventListener("sessionstart",_e),O.addEventListener("sessionend",jn),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(U),U=O.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,C),g=_t.get(E,v.length),g.init(U),v.push(g),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Kt.setFromProjectionMatrix(Mt),st=this.localClippingEnabled,$=zt.init(this.clippingPlanes,st),_=lt.get(E,m.length),_.init(),m.push(_),O.enabled===!0&&O.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Ln(at,U,-1/0,x.sortObjects)}Ln(E,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,ht),Lt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Lt&&gt.addToRenderList(_,E),this.info.render.frame++,$===!0&&zt.beginShadows();const k=g.state.shadowsArray;rt.render(k,E,U),$===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,N=_.transmissive;if(g.setupLights(),U.isArrayCamera){const at=U.cameras;if(N.length>0)for(let vt=0,wt=at.length;vt<wt;vt++){const Et=at[vt];Ds(H,N,E,Et)}Lt&&gt.render(E);for(let vt=0,wt=at.length;vt<wt;vt++){const Et=at[vt];pi(_,E,Et,Et.viewport)}}else N.length>0&&Ds(H,N,E,U),Lt&&gt.render(E),pi(_,E,U);C!==null&&(yt.updateMultisampleRenderTarget(C),yt.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,U),kt.resetDefaultState(),I=-1,w=null,v.pop(),v.length>0?(g=v[v.length-1],$===!0&&zt.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ln(E,U,k,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Kt.intersectsSprite(E)){H&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Mt);const vt=Q.update(E),wt=E.material;wt.visible&&_.push(E,vt,wt,k,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Kt.intersectsObject(E))){const vt=Q.update(E),wt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Dt.copy(vt.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(Mt)),Array.isArray(wt)){const Et=vt.groups;for(let Nt=0,Bt=Et.length;Nt<Bt;Nt++){const It=Et[Nt],ie=wt[It.materialIndex];ie&&ie.visible&&_.push(E,vt,ie,k,Dt.z,It)}}else wt.visible&&_.push(E,vt,wt,k,Dt.z,null)}}const at=E.children;for(let vt=0,wt=at.length;vt<wt;vt++)Ln(at[vt],U,k,H)}function pi(E,U,k,H){const N=E.opaque,at=E.transmissive,vt=E.transparent;g.setupLightsView(k),$===!0&&zt.setGlobalState(x.clippingPlanes,k),H&&K.viewport(b.copy(H)),N.length>0&&N0(N,U,k),at.length>0&&N0(at,U,k),vt.length>0&&N0(vt,U,k),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Ds(E,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[H.id]===void 0&&(g.state.transmissionRenderTarget[H.id]=new _n(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ts:Rn,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const at=g.state.transmissionRenderTarget[H.id],vt=H.viewport||b;at.setSize(vt.z,vt.w);const wt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(F),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Lt&&gt.render(k);const Et=x.toneMapping;x.toneMapping=Wn;const Nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),g.setupLightsView(H),$===!0&&zt.setGlobalState(x.clippingPlanes,H),N0(E,k,H),yt.updateMultisampleRenderTarget(at),yt.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let It=0,ie=U.length;It<ie;It++){const ue=U[It],de=ue.object,Qe=ue.geometry,se=ue.material,Ct=ue.group;if(se.side===Ke&&de.layers.test(H.layers)){const Ie=se.side;se.side=ke,se.needsUpdate=!0,el(de,k,H,Qe,se,Ct),se.side=Ie,se.needsUpdate=!0,Bt=!0}}Bt===!0&&(yt.updateMultisampleRenderTarget(at),yt.updateRenderTargetMipmap(at))}x.setRenderTarget(wt),x.setClearColor(F,Y),Nt!==void 0&&(H.viewport=Nt),x.toneMapping=Et}function N0(E,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=E.length;N<at;N++){const vt=E[N],wt=vt.object,Et=vt.geometry,Nt=H===null?vt.material:H,Bt=vt.group;wt.layers.test(k.layers)&&el(wt,U,k,Et,Nt,Bt)}}function el(E,U,k,H,N,at){E.onBeforeRender(x,U,k,H,N,at),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.transparent===!0&&N.side===Ke&&N.forceSinglePass===!1?(N.side=ke,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,E,at),N.side=Cn,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,E,at),N.side=Ke):x.renderBufferDirect(k,U,H,N,E,at),E.onAfterRender(x,U,k,H,N,at)}function O0(E,U,k){U.isScene!==!0&&(U=Vt);const H=pt.get(E),N=g.state.lights,at=g.state.shadowsArray,vt=N.state.version,wt=j.getParameters(E,N.state,at,U,k),Et=j.getProgramCacheKey(wt);let Nt=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?S:P).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Tt),Nt=new Map,H.programs=Nt);let Bt=Nt.get(Et);if(Bt!==void 0){if(H.currentProgram===Bt&&H.lightsStateVersion===vt)return il(E,wt),Bt}else wt.uniforms=j.getUniforms(E),E.onBeforeCompile(wt,x),Bt=j.acquireProgram(wt,Et),Nt.set(Et,Bt),H.uniforms=wt.uniforms;const It=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=zt.uniform),il(E,wt),H.needsLights=Eh(E),H.lightsStateVersion=vt,H.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Bt,H.uniformsList=null,Bt}function nl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ur.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function il(E,U){const k=pt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function bh(E,U,k,H,N){U.isScene!==!0&&(U=Vt),yt.resetTextureUnits();const at=U.fog,vt=H.isMeshStandardMaterial?U.environment:null,wt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Kn,Et=(H.isMeshStandardMaterial?S:P).get(H.envMap||vt),Nt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!k.morphAttributes.position,ie=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color;let de=Wn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=x.toneMapping);const Qe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=Qe!==void 0?Qe.length:0,Ct=pt.get(H),Ie=g.state.lights;if($===!0&&(st===!0||E!==w)){const cn=E===w&&H.id===I;zt.setState(H,E,cn)}let re=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ie.state.version||Ct.outputColorSpace!==wt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Et||H.fog===!0&&Ct.fog!==at||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==zt.numPlanes||Ct.numIntersection!==zt.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Bt||Ct.morphTargets!==It||Ct.morphNormals!==ie||Ct.morphColors!==ue||Ct.toneMapping!==de||Ct.morphTargetsCount!==se)&&(re=!0):(re=!0,Ct.__version=H.version);let fn=Ct.currentProgram;re===!0&&(fn=O0(H,U,N));let qi=!1,tn=!1,Qo=!1;const xe=fn.getUniforms(),Qn=Ct.uniforms;if(K.useProgram(fn.program)&&(qi=!0,tn=!0,Qo=!0),H.id!==I&&(I=H.id,tn=!0),qi||w!==E){xe.setValue(R,"projectionMatrix",E.projectionMatrix),xe.setValue(R,"viewMatrix",E.matrixWorldInverse);const cn=xe.map.cameraPosition;cn!==void 0&&cn.setValue(R,ut.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,tn=!0,Qo=!0)}if(N.isSkinnedMesh){xe.setOptional(R,N,"bindMatrix"),xe.setOptional(R,N,"bindMatrixInverse");const cn=N.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),xe.setValue(R,"boneTexture",cn.boneTexture,yt))}N.isBatchedMesh&&(xe.setOptional(R,N,"batchingTexture"),xe.setValue(R,"batchingTexture",N._matricesTexture,yt),xe.setOptional(R,N,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",N._indirectTexture,yt),xe.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",N._colorsTexture,yt));const ta=k.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&qt.update(N,k,fn),(tn||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,xe.setValue(R,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qn.envMap.value=Et,Qn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Qn.envMapIntensity.value=U.environmentIntensity),tn&&(xe.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&wh(Qn,Qo),at&&H.fog===!0&&At.refreshFogUniforms(Qn,at),At.refreshMaterialUniforms(Qn,H,J,W,g.state.transmissionRenderTarget[E.id]),Ur.upload(R,nl(Ct),Qn,yt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ur.upload(R,nl(Ct),Qn,yt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(R,"center",N.center),xe.setValue(R,"modelViewMatrix",N.modelViewMatrix),xe.setValue(R,"normalMatrix",N.normalMatrix),xe.setValue(R,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const cn=H.uniformsGroups;for(let ea=0,Ah=cn.length;ea<Ah;ea++){const sl=cn[ea];ae.update(sl,fn),ae.bind(sl,fn)}}return fn}function wh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Eh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,k){pt.get(E.texture).__webglTexture=U,pt.get(E.depthTexture).__webglTexture=k;const H=pt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=pt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){C=E,L=U,T=k;let H=!0,N=null,at=!1,vt=!1;if(E){const Et=pt.get(E);Et.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(R.FRAMEBUFFER,null),H=!1):Et.__webglFramebuffer===void 0?yt.setupRenderTarget(E):Et.__hasExternalTextures&&yt.rebindTextures(E,pt.get(E.texture).__webglTexture,pt.get(E.depthTexture).__webglTexture);const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const Bt=pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?N=Bt[U][k]:N=Bt[U],at=!0):E.samples>0&&yt.useMultisampledRTT(E)===!1?N=pt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[k]:N=Bt,b.copy(E.viewport),D.copy(E.scissor),V=E.scissorTest}else b.copy(mt).multiplyScalar(J).floor(),D.copy(xt).multiplyScalar(J).floor(),V=Xt;if(K.bindFramebuffer(R.FRAMEBUFFER,N)&&H&&K.drawBuffers(E,N),K.viewport(b),K.scissor(D),K.setScissorTest(V),at){const Et=pt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,k)}else if(vt){const Et=pt.get(E.texture),Nt=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Et.__webglTexture,k||0,Nt)}I=-1},this.readRenderTargetPixels=function(E,U,k,H,N,at,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){K.bindFramebuffer(R.FRAMEBUFFER,wt);try{const Et=E.texture,Nt=Et.format,Bt=Et.type;if(!dt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N&&R.readPixels(U,k,H,N,Ot.convert(Nt),Ot.convert(Bt),at)}finally{const Et=C!==null?pt.get(C).__webglFramebuffer:null;K.bindFramebuffer(R.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,H,N,at,vt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){K.bindFramebuffer(R.FRAMEBUFFER,wt);try{const Et=E.texture,Nt=Et.format,Bt=Et.type;if(!dt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N){const It=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.bufferData(R.PIXEL_PACK_BUFFER,at.byteLength,R.STREAM_READ),R.readPixels(U,k,H,N,Ot.convert(Nt),Ot.convert(Bt),0),R.flush();const ie=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await Tp(R,ie,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,at)}finally{R.deleteBuffer(It),R.deleteSync(ie)}return at}}finally{const Et=C!==null?pt.get(C).__webglFramebuffer:null;K.bindFramebuffer(R.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(E.image.width*H),at=Math.floor(E.image.height*H),vt=U!==null?U.x:0,wt=U!==null?U.y:0;yt.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,vt,wt,N,at),K.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,H=null,N=0){E.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let at,vt,wt,Et,Nt,Bt;k!==null?(at=k.max.x-k.min.x,vt=k.max.y-k.min.y,wt=k.min.x,Et=k.min.y):(at=E.image.width,vt=E.image.height,wt=0,Et=0),H!==null?(Nt=H.x,Bt=H.y):(Nt=0,Bt=0);const It=Ot.convert(U.format),ie=Ot.convert(U.type);yt.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ue=R.getParameter(R.UNPACK_ROW_LENGTH),de=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Qe=R.getParameter(R.UNPACK_SKIP_PIXELS),se=R.getParameter(R.UNPACK_SKIP_ROWS),Ct=R.getParameter(R.UNPACK_SKIP_IMAGES),Ie=E.isCompressedTexture?E.mipmaps[N]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ie.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ie.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Et),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Nt,Bt,at,vt,It,ie,Ie.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Nt,Bt,Ie.width,Ie.height,It,Ie.data):R.texSubImage2D(R.TEXTURE_2D,N,Nt,Bt,at,vt,It,ie,Ie),R.pixelStorei(R.UNPACK_ROW_LENGTH,ue),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Qe),R.pixelStorei(R.UNPACK_SKIP_ROWS,se),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ct),N===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,H=null,N=0){E.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let at,vt,wt,Et,Nt,Bt,It,ie,ue;const de=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(at=k.max.x-k.min.x,vt=k.max.y-k.min.y,wt=k.max.z-k.min.z,Et=k.min.x,Nt=k.min.y,Bt=k.min.z):(at=de.width,vt=de.height,wt=de.depth,Et=0,Nt=0,Bt=0),H!==null?(It=H.x,ie=H.y,ue=H.z):(It=0,ie=0,ue=0);const Qe=Ot.convert(U.format),se=Ot.convert(U.type);let Ct;if(U.isData3DTexture)yt.setTexture3D(U,0),Ct=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)yt.setTexture2DArray(U,0),Ct=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Ie=R.getParameter(R.UNPACK_ROW_LENGTH),re=R.getParameter(R.UNPACK_IMAGE_HEIGHT),fn=R.getParameter(R.UNPACK_SKIP_PIXELS),qi=R.getParameter(R.UNPACK_SKIP_ROWS),tn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,de.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Et),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Bt),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ct,N,It,ie,ue,at,vt,wt,Qe,se,de.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Ct,N,It,ie,ue,at,vt,wt,Qe,de.data):R.texSubImage3D(Ct,N,It,ie,ue,at,vt,wt,Qe,se,de),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ie),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,re),R.pixelStorei(R.UNPACK_SKIP_PIXELS,fn),R.pixelStorei(R.UNPACK_SKIP_ROWS,qi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,tn),N===0&&U.generateMipmaps&&R.generateMipmap(Ct),K.unbindTexture()},this.initRenderTarget=function(E){pt.get(E).__webglFramebuffer===void 0&&yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?yt.setTextureCube(E,0):E.isData3DTexture?yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?yt.setTexture2DArray(E,0):yt.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){L=0,T=0,C=null,K.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Eo?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===T0?"display-p3":"srgb"}}class Lo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new Lo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Do{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=n}clone(){return new Do(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rs extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uo{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=p0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ys("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new A;class rn{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Gt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Gt(e,this.array),n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ic extends Ve{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let us;const zs=new A,ds=new A,fs=new A,hs=new G,ks=new G,hf=new Pt,sr=new A,Vs=new A,rr=new A,ql=new G,Ta=new G,Zl=new G;class pf extends Qt{constructor(t=new Ic){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Wt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uo(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new rn(n,3,0,!1)),us.setAttribute("uv",new rn(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new G(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),hf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;or(sr.set(-.5,-.5,0),fs,o,ds,i,r),or(Vs.set(.5,-.5,0),fs,o,ds,i,r),or(rr.set(.5,.5,0),fs,o,ds,i,r),ql.set(0,0),Ta.set(1,0),Zl.set(1,1);let a=t.ray.intersectTriangle(sr,Vs,rr,!1,zs);if(a===null&&(or(Vs.set(-.5,.5,0),fs,o,ds,i,r),Ta.set(0,1),a=t.ray.intersectTriangle(sr,rr,Vs,!1,zs),a===null))return;const c=t.ray.origin.distanceTo(zs);c<t.near||c>t.far||e.push({distance:c,point:zs.clone(),uv:sn.getInterpolation(zs,sr,Vs,rr,ql,Ta,Zl,new G),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function or(s,t,e,n,i,r){hs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ks.x=r*hs.x-i*hs.y,ks.y=i*hs.x+r*hs.y):ks.copy(hs),s.copy(t),s.x+=ks.x,s.y+=ks.y,s.applyMatrix4(hf)}const ar=new A,$l=new A;class mf extends Qt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ar.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(ar);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){ar.setFromMatrixPosition(t.matrixWorld),$l.setFromMatrixPosition(this.matrixWorld);const n=ar.distanceTo($l)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const Kl=new A,Jl=new $t,jl=new $t,kx=new A,Ql=new Pt,cr=new A,Ca=new Ee,tu=new Pt,Ra=new Gi;class gf extends ee{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ja,this.bindMatrix=new Pt,this.bindMatrixInverse=new Pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new we),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,cr),this.boundingBox.expandByPoint(cr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ee),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,cr),this.boundingSphere.expandByPoint(cr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),t.ray.intersectsSphere(Ca)!==!1&&(tu.copy(i).invert(),Ra.copy(t.ray).applyMatrix4(tu),!(this.boundingBox!==null&&Ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ra)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new $t,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ja?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Jl.fromBufferAttribute(i.attributes.skinIndex,t),jl.fromBufferAttribute(i.attributes.skinWeight,t),Kl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=jl.getComponent(r);if(o!==0){const a=Jl.getComponent(r);Ql.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(kx.copy(Kl).applyMatrix4(Ql),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Lc extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class An extends le{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Re,u=Re,d,f){super(null,o,a,c,l,u,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=new Pt,Vx=new Pt;class No{constructor(t=[],e=[]){this.uuid=on(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Pt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Vx;eu.multiplyMatrices(a,e[r]),eu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new No(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new An(e,t,t,Ye,Je);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lc),this.bones.push(o),this.boneInverses.push(new Pt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Es extends ne{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ps=new Pt,nu=new Pt,lr=[],iu=new we,Hx=new Pt,Hs=new ee,Gs=new Ee;class _f extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new we),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),iu.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(iu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ee),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Gs.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ps),nu.multiplyMatrices(n,ps),Hs.matrixWorld=nu,Hs.raycast(t,lr);for(let o=0,a=lr.length;o<a;o++){const c=lr[o];c.instanceId=r,c.object=this,e.push(c)}lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new An(new Float32Array(i*this.count),i,this.count,Mo,Je));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Gx(s,t){return s.z-t.z}function Wx(s,t){return t.z-s.z}class Xx{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const o=i[this.index];r.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=e,o.index=n}reset(){this.list.length=0,this.index=0}}const oi=new Pt,Pa=new Pt,Yx=new Pt,qx=new ft(1,1,1),su=new Pt,Ia=new R0,ur=new we,Mi=new Ee,Ws=new A,ru=new A,Zx=new A,La=new Xx,ze=new ee,dr=[];function $x(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}class xf extends ee{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,i){super(new Wt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new An(e,t,t,Ye,Je);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new An(e,t,t,A0,Zn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxIndexCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new An(e,t,t,Ye,Je);n.colorSpace=te.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),d=new ne(u,c,l);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new ne(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new we);const t=this._geometryCount,e=this.boundingBox,n=this._drawInfo;e.makeEmpty();for(let i=0;i<t;i++){if(n[i].active===!1)continue;const r=n[i].geometryIndex;this.getMatrixAt(i,oi),this.getBoundingBoxAt(r,ur).applyMatrix4(oi),e.union(ur)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ee);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,oi),this.getBoundingSphereAt(r,Mi).applyMatrix4(oi),t.union(Mi)}}addInstance(t){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:t});const e=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;Yx.toArray(i,e*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(qx.toArray(r.image.data,e*4),r.needsUpdate=!0),e}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const l=t.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._geometryCount;return this._geometryCount++,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new we,sphereInitialized:!1,sphere:new Ee}),this.setGeometryAt(d,t),d}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(i&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const h in n.attributes){const p=e.getAttribute(h),_=n.getAttribute(h);$x(p,_,c);const g=p.itemSize;for(let m=p.count,v=l;m<v;m++){const x=c+m;for(let y=0;y<g;y++)_.setComponent(x,y,0)}_.needsUpdate=!0,_.addUpdateRange(c*g,l*g)}if(i){const h=a.indexStart;for(let p=0;p<o.count;p++)r.setX(h+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)r.setX(h+p,c);r.needsUpdate=!0,r.addUpdateRange(h,a.indexCount)}const u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const d=this._drawRanges[t],f=e.getAttribute("position");return d.count=i?o.count:f.count,this._visibilityChanged=!0,t}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const o=r.index,a=r.attributes.position,c=this._drawRanges[t];for(let l=c.start,u=c.start+c.count;l<u;l++){let d=l;o&&(d=o.getX(d)),i.expandByPoint(Ws.fromBufferAttribute(a,d))}n.boxInitialized=!0}return e.copy(i),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(t,ur),ur.getCenter(i.center);const o=r.index,a=r.attributes.position,c=this._drawRanges[t];let l=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let f=u;o&&(f=o.getX(f)),Ws.fromBufferAttribute(a,f),l=Math.max(l,i.center.distanceToSquared(Ws))}i.radius=Math.sqrt(l),n.sphereInitialized=!0}return e.copy(i),e}setMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,i=this._drawInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}raycast(t,e){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,o=this.geometry;ze.material=this.material,ze.geometry.index=o.index,ze.geometry.attributes=o.attributes,ze.geometry.boundingBox===null&&(ze.geometry.boundingBox=new we),ze.geometry.boundingSphere===null&&(ze.geometry.boundingSphere=new Ee);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=i[l];ze.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,ze.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,ze.geometry.boundingBox),this.getBoundingSphereAt(l,ze.geometry.boundingSphere),ze.raycast(t,dr);for(let d=0,f=dr.length;d<f;d++){const h=dr[d];h.object=this,h.batchId=a,e.push(h)}dr.length=0}ze.material=null,ze.geometry.index=null,ze.geometry.attributes={},ze.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled,h=this._indirectTexture,p=h.image.data;f&&(su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ia.setFromProjectionMatrix(su,t.coordinateSystem));let _=0;if(this.sortObjects){Pa.copy(this.matrixWorld).invert(),Ws.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Pa),ru.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Pa);for(let v=0,x=c.length;v<x;v++)if(c[v].visible&&c[v].active){const y=c[v].geometryIndex;this.getMatrixAt(v,oi),this.getBoundingSphereAt(y,Mi).applyMatrix4(oi);let L=!1;if(f&&(L=!Ia.intersectsSphere(Mi)),!L){const T=Zx.subVectors(Mi.center,Ws).dot(ru);La.push(d[y],T,v)}}const g=La.list,m=this.customSort;m===null?g.sort(r.transparent?Wx:Gx):m.call(this,g,n);for(let v=0,x=g.length;v<x;v++){const y=g[v];l[_]=y.start*a,u[_]=y.count,p[_]=y.index,_++}La.reset()}else for(let g=0,m=c.length;g<m;g++)if(c[g].visible&&c[g].active){const v=c[g].geometryIndex;let x=!1;if(f&&(this.getMatrixAt(g,oi),this.getBoundingSphereAt(v,Mi).applyMatrix4(oi),x=!Ia.intersectsSphere(Mi)),!x){const y=d[v];l[_]=y.start*a,u[_]=y.count,p[_]=g,_++}}h.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class Ze extends Ve{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fo=new A,ho=new A,ou=new Pt,Xs=new Gi,fr=new Ee,Da=new A,au=new A;class ui extends Qt{constructor(t=new Wt,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)fo.fromBufferAttribute(e,i-1),ho.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fo.distanceTo(ho);t.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;ou.copy(i).invert(),Xs.copy(t.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,g=p-1;_<g;_+=l){const m=u.getX(_),v=u.getX(_+1),x=hr(this,t,Xs,c,m,v);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(p-1),g=u.getX(h),m=hr(this,t,Xs,c,_,g);m&&e.push(m)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,g=p-1;_<g;_+=l){const m=hr(this,t,Xs,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=hr(this,t,Xs,c,p-1,h);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hr(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(fo.fromBufferAttribute(o,i),ho.fromBufferAttribute(o,r),e.distanceSqToSegment(fo,ho,Da,au)>n)return;Da.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Da);if(!(c<t.near||c>t.far))return{distance:c,point:au.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const cu=new A,lu=new A;class In extends ui{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)cu.fromBufferAttribute(e,i),lu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cu.distanceTo(lu);t.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vf extends ui{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Dc extends Ve{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uu=new Pt,nc=new Gi,pr=new Ee,mr=new A;class yf extends Qt{constructor(t=new Wt,e=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;uu.copy(i).invert(),nc.copy(t.ray).applyMatrix4(uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let p=f,_=h;p<_;p++){const g=l.getX(p);mr.fromBufferAttribute(d,g),du(mr,g,c,i,t,e,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let p=f,_=h;p<_;p++)mr.fromBufferAttribute(d,p),du(mr,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function du(s,t,e,n,i,r,o){const a=nc.distanceSqToPoint(s);if(a<e){const c=new A;nc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Kx extends le{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Me,this.magFilter=r!==void 0?r:Me,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Jx extends le{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Re,this.minFilter=Re,this.generateMipmaps=!1,this.needsUpdate=!0}}class Oo extends le{constructor(t,e,n,i,r,o,a,c,l,u,d,f){super(null,o,a,c,l,u,i,r,d,f),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class jx extends Oo{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=dn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends Oo{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,qn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class t2 extends le{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,h=(o-u)/f;return(i+h)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new G:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],o=[],a=new A,c=new Pt;for(let h=0;h<=t;h++){const p=h/t;i[h]=this.getTangentAt(p,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(he(i[h-1].dot(i[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,p))}o[h].crossVectors(i[h],r[h])}if(e===!0){let h=Math.acos(he(r[0].dot(r[t]),-1,1));h/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],h*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fo extends xn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new G){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mf extends Fo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uc(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,i(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const gr=new A,Ua=new Uc,Na=new Uc,Oa=new Uc;class Sf extends xn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(gr.subVectors(i[0],i[1]).add(i[0]),l=gr);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(gr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Ua.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,p,_,g),Na.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,p,_,g),Oa.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Na.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Oa.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(Ua.calc(c),Na.calc(c),Oa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fu(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function e2(s,t){const e=1-s;return e*e*t}function n2(s,t){return 2*(1-s)*s*t}function i2(s,t){return s*s*t}function n0(s,t,e,n){return e2(s,t)+n2(s,e)+i2(s,n)}function s2(s,t){const e=1-s;return e*e*e*t}function r2(s,t){const e=1-s;return 3*e*e*s*t}function o2(s,t){return 3*(1-s)*s*s*t}function a2(s,t){return s*s*s*t}function i0(s,t,e,n,i){return s2(s,t)+r2(s,e)+o2(s,n)+a2(s,i)}class Nc extends xn{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(i0(t,i.x,r.x,o.x,a.x),i0(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bf extends xn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(i0(t,i.x,r.x,o.x,a.x),i0(t,i.y,r.y,o.y,a.y),i0(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oc extends xn{constructor(t=new G,e=new G){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new G){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends xn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fc extends xn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(n0(t,i.x,r.x,o.x),n0(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bc extends xn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(n0(t,i.x,r.x,o.x),n0(t,i.y,r.y,o.y),n0(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new G){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(fu(a,c.x,l.x,u.x,d.x),fu(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new G().fromArray(i))}return this}}var po=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:Sf,CubicBezierCurve:Nc,CubicBezierCurve3:bf,EllipseCurve:Fo,LineCurve:Oc,LineCurve3:wf,QuadraticBezierCurve:Fc,QuadraticBezierCurve3:Bc,SplineCurve:zc});class Ef extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new po[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new po[i.type]().fromJSON(i))}return this}}class _0 extends Ef{constructor(t){super(),this.type="Path",this.currentPoint=new G,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Oc(this.currentPoint.clone(),new G(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Fc(this.currentPoint.clone(),new G(t,e),new G(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Nc(this.currentPoint.clone(),new G(t,e),new G(n,i),new G(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Fo(t,e,n,i,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class P0 extends Wt{constructor(t=[new G(0,-.5),new G(.5,0),new G(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=he(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new A,f=new G,h=new A,p=new A,_=new A;let g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-g,h.z=m*0,_.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-g,h.z=m*0,p.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),c.push(h.x,h.y,h.z),_.copy(p)}for(let v=0;v<=e;v++){const x=n+v*u*i,y=Math.sin(x),L=Math.cos(x);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*L,o.push(d.x,d.y,d.z),f.x=v/e,f.y=T/(t.length-1),a.push(f.x,f.y);const C=c[3*T+0]*y,I=c[3*T+1],w=c[3*T+0]*L;l.push(C,I,w)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const y=x+v*t.length,L=y,T=y+t.length,C=y+t.length+1,I=y+1;r.push(L,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("uv",new bt(a,2)),this.setAttribute("normal",new bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new P0(t.points,t.segments,t.phiStart,t.phiLength)}}class Bo extends P0{constructor(t=1,e=1,n=4,i=8){const r=new _0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class zo extends Wt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,u=new G;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const h=n+d/e*i;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ps extends Wt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],f=[],h=[];let p=0;const _=[],g=n/2;let m=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(h,2));function v(){const y=new A,L=new A;let T=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const w=[],b=I/r,D=b*(e-t)+t;for(let V=0;V<=i;V++){const F=V/i,Y=F*c+a,Z=Math.sin(Y),W=Math.cos(Y);L.x=D*Z,L.y=-b*n+g,L.z=D*W,d.push(L.x,L.y,L.z),y.set(Z,C,W).normalize(),f.push(y.x,y.y,y.z),h.push(F,1-b),w.push(p++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){const b=_[w][I],D=_[w+1][I],V=_[w+1][I+1],F=_[w][I+1];u.push(b,D,F),u.push(D,V,F),T+=6}l.addGroup(m,T,0),m+=T}function x(y){const L=p,T=new G,C=new A;let I=0;const w=y===!0?t:e,b=y===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,g*b,0),f.push(0,b,0),h.push(.5,.5),p++;const D=p;for(let V=0;V<=i;V++){const Y=V/i*c+a,Z=Math.cos(Y),W=Math.sin(Y);C.x=w*W,C.y=g*b,C.z=w*Z,d.push(C.x,C.y,C.z),f.push(0,b,0),T.x=Z*.5+.5,T.y=W*.5*b+.5,h.push(T.x,T.y),p++}for(let V=0;V<i;V++){const F=L+V,Y=D+V;y===!0?u.push(Y,Y+1,F):u.push(Y+1,Y,F),I+=3}l.addGroup(m,I,y===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ko extends Ps{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ko(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fi extends Wt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new A,y=new A,L=new A;for(let T=0;T<e.length;T+=3)h(e[T+0],x),h(e[T+1],y),h(e[T+2],L),c(x,y,L,v)}function c(v,x,y,L){const T=L+1,C=[];for(let I=0;I<=T;I++){C[I]=[];const w=v.clone().lerp(y,I/T),b=x.clone().lerp(y,I/T),D=T-I;for(let V=0;V<=D;V++)V===0&&I===T?C[I][V]=w:C[I][V]=w.clone().lerp(b,V/D)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){const b=Math.floor(w/2);w%2===0?(f(C[I][b+1]),f(C[I+1][b]),f(C[I][b])):(f(C[I][b+1]),f(C[I+1][b+1]),f(C[I+1][b]))}}function l(v){const x=new A;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){const v=new A;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=g(v)/2/Math.PI+.5,L=m(v)/Math.PI+.5;o.push(y,1-L)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],L=o[v+4],T=Math.max(x,y,L),C=Math.min(x,y,L);T>.9&&C<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function h(v,x){const y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function p(){const v=new A,x=new A,y=new A,L=new A,T=new G,C=new G,I=new G;for(let w=0,b=0;w<r.length;w+=9,b+=6){v.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),L.copy(v).add(x).add(y).divideScalar(3);const D=g(L);_(T,b+0,v,D),_(C,b+2,x,D),_(I,b+4,y,D)}}function _(v,x,y,L){L<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=L/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.vertices,t.indices,t.radius,t.details)}}class Vo extends fi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vo(t.radius,t.detail)}}const _r=new A,xr=new A,Fa=new A,vr=new sn;class Af extends Wt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Bi*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=vr;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),vr.getNormal(Fa),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=d[v],L=d[x],T=vr[u[v]],C=vr[u[x]],I=`${y}_${L}`,w=`${L}_${y}`;w in f&&f[w]?(Fa.dot(f[w].normal)<=r&&(h.push(T.x,T.y,T.z),h.push(C.x,C.y,C.z)),f[w]=null):I in f||(f[I]={index0:l[v],index1:l[x],normal:Fa.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:g}=f[p];_r.fromBufferAttribute(a,_),xr.fromBufferAttribute(a,g),h.push(_r.x,_r.y,_r.z),h.push(xr.x,xr.y,xr.z)}this.setAttribute("position",new bt(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Xn extends _0{constructor(t){super(t),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new _0().fromJSON(i))}return this}}const c2={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Tf(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,d,f,h;if(n&&(r=h2(s,t,r,e)),s.length>80*e){a=l=s[0],c=u=s[1];for(let p=e;p<i;p+=e)d=s[p],f=s[p+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);h=Math.max(l-a,u-c),h=h!==0?32767/h:0}return x0(r,o,e,a,c,h,0),o}};function Tf(s,t,e,n,i){let r,o;if(i===w2(s,t,e,n)>0)for(r=t;r<e;r+=n)o=hu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=hu(r,s[r],s[r+1],o);return o&&Ho(o,o.next)&&(y0(o),o=o.next),o}function Hi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ho(e,e.next)||ce(e.prev,e,e.next)===0)){if(y0(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function x0(s,t,e,n,i,r,o){if(!s)return;!o&&r&&x2(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?u2(s,n,i,r):l2(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),y0(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=d2(Hi(s),t,e),x0(s,t,e,n,i,r,2)):o===2&&f2(s,t,e,n,i,r):x0(Hi(s),t,e,n,i,r,1);break}}}function l2(s){const t=s.prev,e=s,n=s.next;if(ce(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,h=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&vs(i,a,r,c,o,l,p.x,p.y)&&ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u2(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ce(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,d=r.y,f=o.y,h=a<c?a<l?a:l:c<l?c:l,p=u<d?u<f?u:f:d<f?d:f,_=a>c?a>l?a:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,m=ic(h,p,t,e,n),v=ic(_,g,t,e,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=m&&y&&y.z<=v;){if(x.x>=h&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&vs(a,u,c,d,l,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=h&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&vs(a,u,c,d,l,f,y.x,y.y)&&ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=h&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&vs(a,u,c,d,l,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=h&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&vs(a,u,c,d,l,f,y.x,y.y)&&ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function d2(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ho(i,r)&&Cf(i,n,n.next,r)&&v0(i,r)&&v0(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),y0(n),y0(n.next),n=s=r),n=n.next}while(n!==s);return Hi(n)}function f2(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M2(o,a)){let c=Rf(o,a);o=Hi(o,o.next),c=Hi(c,c.next),x0(o,t,e,n,i,r,0),x0(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function h2(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Tf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(y2(l));for(i.sort(p2),r=0;r<i.length;r++)e=m2(i[r],e);return e}function p2(s,t){return s.x-t.x}function m2(s,t){const e=g2(s,t);if(!e)return t;const n=Rf(e,s);return Hi(n,n.next),Hi(e,e.next)}function g2(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,d;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&vs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),v0(e,s)&&(d<u||d===u&&(e.x>i.x||e.x===i.x&&_2(i,e)))&&(i=e,u=d)),e=e.next;while(e!==a);return i}function _2(s,t){return ce(s.prev,s,t.prev)<0&&ce(t.next,s,s.next)<0}function x2(s,t,e,n){let i=s;do i.z===0&&(i.z=ic(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,v2(i)}function v2(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function ic(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function y2(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function vs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function M2(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!S2(s,t)&&(v0(s,t)&&v0(t,s)&&b2(s,t)&&(ce(s.prev,s,t.prev)||ce(s,t.prev,t))||Ho(s,t)&&ce(s.prev,s,s.next)>0&&ce(t.prev,t,t.next)>0)}function ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ho(s,t){return s.x===t.x&&s.y===t.y}function Cf(s,t,e,n){const i=Mr(ce(s,t,e)),r=Mr(ce(s,t,n)),o=Mr(ce(e,n,s)),a=Mr(ce(e,n,t));return!!(i!==r&&o!==a||i===0&&yr(s,e,t)||r===0&&yr(s,n,t)||o===0&&yr(e,s,n)||a===0&&yr(e,t,n))}function yr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Mr(s){return s>0?1:s<0?-1:0}function S2(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function v0(s,t){return ce(s.prev,s,s.next)<0?ce(s,t,s.next)>=0&&ce(s,s.prev,t)>=0:ce(s,t,s.prev)<0||ce(s,s.next,t)<0}function b2(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Rf(s,t){const e=new sc(s.i,s.x,s.y),n=new sc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hu(s,t,e,n){const i=new sc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function y0(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function w2(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Tn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Tn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];pu(t),mu(n,t);let o=t.length;e.forEach(pu);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,mu(n,e[c]);const a=c2.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function pu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function mu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Go extends Wt{constructor(t=new Xn([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new bt(i,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:h-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:E2;let x,y=!1,L,T,C,I;m&&(x=m.getSpacedPoints(u),y=!0,f=!1,L=m.computeFrenetFrames(u,!1),T=new A,C=new A,I=new A),f||(g=0,h=0,p=0,_=0);const w=a.extractPoints(l);let b=w.shape;const D=w.holes;if(!Tn.isClockWise(b)){b=b.reverse();for(let R=0,ot=D.length;R<ot;R++){const et=D[R];Tn.isClockWise(et)&&(D[R]=et.reverse())}}const F=Tn.triangulateShape(b,D),Y=b;for(let R=0,ot=D.length;R<ot;R++){const et=D[R];b=b.concat(et)}function Z(R,ot,et){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(ot,et)}const W=b.length,J=F.length;function q(R,ot,et){let dt,K,Rt;const pt=R.x-ot.x,yt=R.y-ot.y,P=et.x-R.x,S=et.y-R.y,z=pt*pt+yt*yt,tt=pt*S-yt*P;if(Math.abs(tt)>Number.EPSILON){const Q=Math.sqrt(z),j=Math.sqrt(P*P+S*S),At=ot.x-yt/Q,lt=ot.y+pt/Q,_t=et.x-S/j,zt=et.y+P/j,rt=((_t-At)*S-(zt-lt)*P)/(pt*S-yt*P);dt=At+pt*rt-R.x,K=lt+yt*rt-R.y;const gt=dt*dt+K*K;if(gt<=2)return new G(dt,K);Rt=Math.sqrt(gt/2)}else{let Q=!1;pt>Number.EPSILON?P>Number.EPSILON&&(Q=!0):pt<-Number.EPSILON?P<-Number.EPSILON&&(Q=!0):Math.sign(yt)===Math.sign(S)&&(Q=!0),Q?(dt=-yt,K=pt,Rt=Math.sqrt(z)):(dt=pt,K=yt,Rt=Math.sqrt(z/2))}return new G(dt/Rt,K/Rt)}const ht=[];for(let R=0,ot=Y.length,et=ot-1,dt=R+1;R<ot;R++,et++,dt++)et===ot&&(et=0),dt===ot&&(dt=0),ht[R]=q(Y[R],Y[et],Y[dt]);const mt=[];let xt,Xt=ht.concat();for(let R=0,ot=D.length;R<ot;R++){const et=D[R];xt=[];for(let dt=0,K=et.length,Rt=K-1,pt=dt+1;dt<K;dt++,Rt++,pt++)Rt===K&&(Rt=0),pt===K&&(pt=0),xt[dt]=q(et[dt],et[Rt],et[pt]);mt.push(xt),Xt=Xt.concat(xt)}for(let R=0;R<g;R++){const ot=R/g,et=h*Math.cos(ot*Math.PI/2),dt=p*Math.sin(ot*Math.PI/2)+_;for(let K=0,Rt=Y.length;K<Rt;K++){const pt=Z(Y[K],ht[K],dt);ut(pt.x,pt.y,-et)}for(let K=0,Rt=D.length;K<Rt;K++){const pt=D[K];xt=mt[K];for(let yt=0,P=pt.length;yt<P;yt++){const S=Z(pt[yt],xt[yt],dt);ut(S.x,S.y,-et)}}}const Kt=p+_;for(let R=0;R<W;R++){const ot=f?Z(b[R],Xt[R],Kt):b[R];y?(C.copy(L.normals[0]).multiplyScalar(ot.x),T.copy(L.binormals[0]).multiplyScalar(ot.y),I.copy(x[0]).add(C).add(T),ut(I.x,I.y,I.z)):ut(ot.x,ot.y,0)}for(let R=1;R<=u;R++)for(let ot=0;ot<W;ot++){const et=f?Z(b[ot],Xt[ot],Kt):b[ot];y?(C.copy(L.normals[R]).multiplyScalar(et.x),T.copy(L.binormals[R]).multiplyScalar(et.y),I.copy(x[R]).add(C).add(T),ut(I.x,I.y,I.z)):ut(et.x,et.y,d/u*R)}for(let R=g-1;R>=0;R--){const ot=R/g,et=h*Math.cos(ot*Math.PI/2),dt=p*Math.sin(ot*Math.PI/2)+_;for(let K=0,Rt=Y.length;K<Rt;K++){const pt=Z(Y[K],ht[K],dt);ut(pt.x,pt.y,d+et)}for(let K=0,Rt=D.length;K<Rt;K++){const pt=D[K];xt=mt[K];for(let yt=0,P=pt.length;yt<P;yt++){const S=Z(pt[yt],xt[yt],dt);y?ut(S.x,S.y+x[u-1].y,x[u-1].x+et):ut(S.x,S.y,d+et)}}}$(),st();function $(){const R=i.length/3;if(f){let ot=0,et=W*ot;for(let dt=0;dt<J;dt++){const K=F[dt];Dt(K[2]+et,K[1]+et,K[0]+et)}ot=u+g*2,et=W*ot;for(let dt=0;dt<J;dt++){const K=F[dt];Dt(K[0]+et,K[1]+et,K[2]+et)}}else{for(let ot=0;ot<J;ot++){const et=F[ot];Dt(et[2],et[1],et[0])}for(let ot=0;ot<J;ot++){const et=F[ot];Dt(et[0]+W*u,et[1]+W*u,et[2]+W*u)}}n.addGroup(R,i.length/3-R,0)}function st(){const R=i.length/3;let ot=0;Mt(Y,ot),ot+=Y.length;for(let et=0,dt=D.length;et<dt;et++){const K=D[et];Mt(K,ot),ot+=K.length}n.addGroup(R,i.length/3-R,1)}function Mt(R,ot){let et=R.length;for(;--et>=0;){const dt=et;let K=et-1;K<0&&(K=R.length-1);for(let Rt=0,pt=u+g*2;Rt<pt;Rt++){const yt=W*Rt,P=W*(Rt+1),S=ot+dt+yt,z=ot+K+yt,tt=ot+K+P,Q=ot+dt+P;Vt(S,z,tt,Q)}}}function ut(R,ot,et){c.push(R),c.push(ot),c.push(et)}function Dt(R,ot,et){Lt(R),Lt(ot),Lt(et);const dt=i.length/3,K=v.generateTopUV(n,i,dt-3,dt-2,dt-1);Zt(K[0]),Zt(K[1]),Zt(K[2])}function Vt(R,ot,et,dt){Lt(R),Lt(ot),Lt(dt),Lt(ot),Lt(et),Lt(dt);const K=i.length/3,Rt=v.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);Zt(Rt[0]),Zt(Rt[1]),Zt(Rt[3]),Zt(Rt[1]),Zt(Rt[2]),Zt(Rt[3])}function Lt(R){i.push(c[R*3+0]),i.push(c[R*3+1]),i.push(c[R*3+2])}function Zt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return A2(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new po[i.type]().fromJSON(i)),new Go(n,t.options)}}const E2={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new G(r,o),new G(a,c),new G(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],f=t[i*3],h=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-p),new G(_,1-m)]:[new G(a,1-c),new G(u,1-d),new G(h,1-p),new G(g,1-m)]}};function A2(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wo extends fi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wo(t.radius,t.detail)}}class I0 extends fi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new I0(t.radius,t.detail)}}class Xo extends Wt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let d=t;const f=(e-t)/i,h=new A,p=new G;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),p.x=(h.x/e+1)/2,p.y=(h.y/e+1)/2,u.push(p.x,p.y)}d+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,x=v,y=v+n+1,L=v+n+2,T=v+1;a.push(x,y,T),a.push(y,L,T)}}this.setIndex(a),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Is extends Wt{constructor(t=new Xn([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new bt(i,3)),this.setAttribute("normal",new bt(r,3)),this.setAttribute("uv",new bt(o,2));function l(u){const d=i.length/3,f=u.extractPoints(e);let h=f.shape;const p=f.holes;Tn.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];Tn.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=Tn.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];h=h.concat(v)}for(let g=0,m=h.length;g<m;g++){const v=h[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],x=v[0]+d,y=v[1]+d,L=v[2]+d;n.push(x,y,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return T2(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Is(n,t.curveSegments)}}function T2(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Yn extends Wt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new A,f=new A,h=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){const T=L/e;d.x=-t*Math.cos(i+T*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+T*r)*Math.sin(o+x*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(T+y,1-x),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const x=u[m][v+1],y=u[m][v],L=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&h.push(x,y,T),(m!==n-1||c<Math.PI)&&h.push(y,L,T)}this.setIndex(h),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yo extends fi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yo(t.radius,t.detail)}}class qo extends Wt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new A,d=new A,f=new A;for(let h=0;h<=n;h++)for(let p=0;p<=i;p++){const _=p/i*r,g=h/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(h/n)}for(let h=1;h<=n;h++)for(let p=1;p<=i;p++){const _=(i+1)*h+p-1,g=(i+1)*(h-1)+p-1,m=(i+1)*(h-1)+p,v=(i+1)*h+p;o.push(_,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zo extends Wt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],d=new A,f=new A,h=new A,p=new A,_=new A,g=new A,m=new A;for(let x=0;x<=n;++x){const y=x/n*r*Math.PI*2;v(y,r,o,t,h),v(y+.01,r,o,t,p),g.subVectors(p,h),m.addVectors(p,h),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let L=0;L<=i;++L){const T=L/i*Math.PI*2,C=-e*Math.cos(T),I=e*Math.sin(T);d.x=h.x+(C*m.x+I*_.x),d.y=h.y+(C*m.y+I*_.y),d.z=h.z+(C*m.z+I*_.z),c.push(d.x,d.y,d.z),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),u.push(x/n),u.push(L/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){const L=(i+1)*(x-1)+(y-1),T=(i+1)*x+(y-1),C=(i+1)*x+y,I=(i+1)*(x-1)+y;a.push(L,T,I),a.push(T,C,I)}this.setIndex(a),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(u,2));function v(x,y,L,T,C){const I=Math.cos(x),w=Math.sin(x),b=L/y*x,D=Math.cos(b);C.x=T*(2+D)*.5*I,C.y=T*(2+D)*w*.5,C.z=T*Math.sin(b)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class $o extends Wt{constructor(t=new Bc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new G;let u=new A;const d=[],f=[],h=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(h,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),v(),m()}function g(x){u=t.getPointAt(x/e,u);const y=o.normals[x],L=o.binormals[x];for(let T=0;T<=i;T++){const C=T/i*Math.PI*2,I=Math.sin(C),w=-Math.cos(C);c.x=w*y.x+I*L.x,c.y=w*y.y+I*L.y,c.z=w*y.z+I*L.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){const L=(i+1)*(x-1)+(y-1),T=(i+1)*x+(y-1),C=(i+1)*x+y,I=(i+1)*(x-1)+y;p.push(L,T,I),p.push(T,C,I)}}function v(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)l.x=x/e,l.y=y/i,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $o(new po[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class kc extends Wt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new A,r=new A;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],f=d.start,h=d.count;for(let p=f,_=f+h;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),v=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),gu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,d=3*a+(l+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),gu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new bt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function gu(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var _u=Object.freeze({__proto__:null,BoxGeometry:Jn,CapsuleGeometry:Bo,CircleGeometry:zo,ConeGeometry:ko,CylinderGeometry:Ps,DodecahedronGeometry:Vo,EdgesGeometry:Af,ExtrudeGeometry:Go,IcosahedronGeometry:Wo,LatheGeometry:P0,OctahedronGeometry:I0,PlaneGeometry:Wi,PolyhedronGeometry:fi,RingGeometry:Xo,ShapeGeometry:Is,SphereGeometry:Yn,TetrahedronGeometry:Yo,TorusGeometry:qo,TorusKnotGeometry:Zo,TubeGeometry:$o,WireframeGeometry:kc});class Pf extends Ve{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ft(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Vc extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hc extends Ve{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class If extends Hc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Lf extends Ve{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Df extends Ve{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Uf extends Ve{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Nf extends Ve{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Of extends Ve{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ft(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ff extends Ze{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Ni(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Bf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zf(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function rc(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Gc(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function C2(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),d=[],f=[];for(let h=0;h<l.times.length;++h){const p=l.times[h]*i;if(!(p<e||p>=n)){d.push(l.times[h]);for(let _=0;_<u;++_)f.push(l.values[h*u+_])}}d.length!==0&&(l.times=Ni(d,l.times.constructor),l.values=Ni(f,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function R2(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let u=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let f=0;const h=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=h/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const m=u,v=d-u;_=a.values.slice(m,v)}else if(r>=a.times[p]){const m=p*d+u,v=m+d-u;_=a.values.slice(m,v)}else{const m=a.createInterpolant(),v=u,x=d-u;m.evaluate(r),_=m.resultBuffer.slice(v,x)}c==="quaternion"&&new Ne().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const v=m*h+f;if(c==="quaternion")Ne.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const x=h-f*2;for(let y=0;y<x;++y)l.values[v+y]-=_[y]}}}return s.blendMode=yc,s}const P2={convertArray:Ni,isTypedArray:Bf,getKeyframeOrder:zf,sortedArray:rc,flattenJSON:Gc,subclip:C2,makeClipAdditive:R2};class L0{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kf extends L0{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Li,endingEnd:Li}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Di:r=t,a=2*e-n;break;case u0:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Di:o=t,c=2*n-e;break;case u0:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,x=(-1-h)*g+(1.5+h)*_+.5*p,y=h*g-h*_;for(let L=0;L!==a;++L)r[L]=m*o[u+L]+v*o[l+L]+x*o[c+L]+y*o[d+L];return r}}class Wc extends L0{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*u;return r}}class Vf extends L0{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class vn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ni(e,this.TimeBufferType),this.values=Ni(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ni(t.times,Array),values:Ni(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case l0:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case Dr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return l0;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Dr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Bf(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Dr,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{const d=a*n,f=d-n,h=d+n;for(let p=0;p!==n;++p){const _=e[d+p];if(_!==e[f+p]||_!==e[h+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const d=a*n,f=o*n;for(let h=0;h!==n;++h)e[f+h]=e[d+h]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=lo;class Xi extends vn{constructor(t,e,n){super(t,e,n)}}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=l0;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xc extends vn{}Xc.prototype.ValueTypeName="color";class M0 extends vn{}M0.prototype.ValueTypeName="number";class Hf extends L0{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let u=l+a;l!==u;l+=4)Ne.slerpFlat(r,0,o,l-a,o,l,c);return r}}class D0 extends vn{InterpolantFactoryMethodLinear(t){return new Hf(this.times,this.values,this.getValueSize(),t)}}D0.prototype.ValueTypeName="quaternion";D0.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends vn{constructor(t,e,n){super(t,e,n)}}Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=l0;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class S0 extends vn{}S0.prototype.ValueTypeName="vector";class b0{constructor(t="",e=-1,n=[],i=wo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(L2(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=zf(c);c=rc(c,1,u),l=rc(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new M0(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let f=i[d];f||(i[d]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,h,p,_){if(h.length!==0){const g=[],m=[];Gc(h,g,m,p),g.length!==0&&_.push(new d(f,g,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let d=0;d<l.length;d++){const f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)h[f[p].morphTargets[_]]=-1;for(const _ in h){const g=[],m=[];for(let v=0;v!==f[p].morphTargets.length;++v){const x=f[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new M0(".morphTargetInfluence["+_+"]",g,m))}c=h.length*o}else{const h=".bones["+e[d].name+"]";n(S0,h+".position",f,"pos",i),n(D0,h+".quaternion",f,"rot",i),n(S0,h+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function I2(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return M0;case"vector":case"vector2":case"vector3":case"vector4":return S0;case"color":return Xc;case"quaternion":return D0;case"bool":case"boolean":return Xi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function L2(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=I2(s.type);if(s.times===void 0){const e=[],n=[];Gc(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Hn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Yc{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const h=l[d],p=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null}}}const Gf=new Yc;class je{constructor(t){this.manager=t!==void 0?t:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}je.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class D2 extends Error{constructor(t,e){super(t),this.response=e}}class $n extends je{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Hn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Bn[t]!==void 0){Bn[t].push({onLoad:e,onProgress:n,onError:i});return}Bn[t]=[],Bn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Bn[t],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,p=h!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){d.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;const L=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:h});for(let T=0,C=u.length;T<C;T++){const I=u[T];I.onProgress&&I.onProgress(L)}m.enqueue(y),v()}},x=>{m.error(x)})}}});return new Response(g)}else throw new D2(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(p=>h.decode(p))}}}).then(l=>{Hn.add(t,l);const u=Bn[t];delete Bn[t];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=Bn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Bn[t];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class U2 extends je{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new $n(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=b0.parse(t[n]);e.push(i)}return e}}class N2 extends je{constructor(t){super(t)}load(t,e,n,i){const r=this,o=[],a=new Oo,c=new $n(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(d){c.load(t[d],function(f){const h=r.parse(f,!0);o[d]={width:h.width,height:h.height,format:h.format,mipmaps:h.mipmaps},l+=1,l===6&&(h.mipmapCount===1&&(a.minFilter=Me),a.image=o,a.format=h.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let d=0,f=t.length;d<f;++d)u(d);else c.load(t,function(d){const f=r.parse(d,!0);if(f.isCubemap){const h=f.mipmaps.length/f.mipmapCount;for(let p=0;p<h;p++){o[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),o[p].format=f.format,o[p].width=f.width,o[p].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=Me),a.format=f.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}class w0 extends je{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Hn.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=g0("img");function c(){u(),Hn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){u(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class O2 extends je{constructor(t){super(t)}load(t,e,n,i){const r=new C0;r.colorSpace=un;const o=new w0(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class F2 extends je{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new An,a=new $n(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:dn,o.wrapT=l.wrapT!==void 0?l.wrapT:dn,o.magFilter=l.magFilter!==void 0?l.magFilter:Me,o.minFilter=l.minFilter!==void 0?l.minFilter:Me,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=wn),l.mipmapCount===1&&(o.minFilter=Me),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,e&&e(o,l)},n,i),o}}class Wf extends je{constructor(t){super(t)}load(t,e,n,i){const r=new le,o=new w0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class hi extends Qt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xf extends hi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ba=new Pt,xu=new A,vu=new A;class qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new R0,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vu),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class B2 extends qc{constructor(){super(new ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=bs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yf extends hi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new B2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const yu=new Pt,Ys=new A,za=new A;class z2 extends qc{constructor(){super(new ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new G(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class qf extends hi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new z2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class k2 extends qc{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zf extends hi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new k2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $f extends hi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kf extends hi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Jf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new A)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class jf extends hi{constructor(t=new Jf,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Ko extends je{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,o=new $n(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=Ko.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new ft().setHex(o.value);break;case"v2":i.uniforms[r].value=new G().fromArray(o.value);break;case"v3":i.uniforms[r].value=new A().fromArray(o.value);break;case"v4":i.uniforms[r].value=new $t().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Ht().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Pt().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new G().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new G().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:Pf,SpriteMaterial:Ic,RawShaderMaterial:Vc,ShaderMaterial:qe,PointsMaterial:Dc,MeshPhysicalMaterial:If,MeshStandardMaterial:Hc,MeshPhongMaterial:Lf,MeshToonMaterial:Df,MeshNormalMaterial:Uf,MeshLambertMaterial:Nf,MeshDepthMaterial:Rc,MeshDistanceMaterial:Pc,MeshBasicMaterial:Oe,MeshMatcapMaterial:Of,LineDashedMaterial:Ff,LineBasicMaterial:Ze,Material:Ve};return new e[t]}}class oc{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Zc extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Qf extends je{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new $n(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(h,p){if(e[p]!==void 0)return e[p];const g=h.interleavedBuffers[p],m=r(h,g.buffer),v=_s(g.type,m),x=new Uo(v,g.stride);return x.uuid=g.uuid,e[p]=x,x}function r(h,p){if(n[p]!==void 0)return n[p];const g=h.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=t.isInstancedBufferGeometry?new Zc:new Wt,a=t.data.index;if(a!==void 0){const h=_s(a.type,a.array);o.setIndex(new ne(h,1))}const c=t.data.attributes;for(const h in c){const p=c[h];let _;if(p.isInterleavedBufferAttribute){const g=i(t.data,p.data);_=new rn(g,p.itemSize,p.offset,p.normalized)}else{const g=_s(p.type,p.array),m=p.isInstancedBufferAttribute?Es:ne;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(h,_)}const l=t.data.morphAttributes;if(l)for(const h in l){const p=l[h],_=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let x;if(v.isInterleavedBufferAttribute){const y=i(t.data,v.data);x=new rn(y,v.itemSize,v.offset,v.normalized)}else{const y=_s(v.type,v.array);x=new ne(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}o.morphAttributes[h]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let h=0,p=d.length;h!==p;++h){const _=d[h];o.addGroup(_.start,_.count,_.materialIndex)}const f=t.data.boundingSphere;if(f!==void 0){const h=new A;f.center!==void 0&&h.fromArray(f.center),o.boundingSphere=new Ee(h,f.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class V2 extends je{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?oc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new $n(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+t+".",d.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?oc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new $n(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,c,a,n),u=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),e!==void 0){let d=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,i,a,o,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new Xn().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new No().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Qf;for(let r=0,o=t.length;r<o;r++){let a;const c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in _u?a=_u[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new Ko;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const c=t[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=b0.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:_s(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new Yc(e);r=new w0(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=t.length;l<u;l++){const d=t[l],f=d.url;if(Array.isArray(f)){const h=[];for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new An(m.data,m.width,m.height)))}i[d.uuid]=new Ui(h)}else{const h=a(d.url);i[d.uuid]=new Ui(h)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:_s(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new w0(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.url;if(Array.isArray(l)){const u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d],p=await r(h);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new An(p.data,p.width,p.height)))}n[c.uuid]=new Ui(u)}else{const u=await r(c.url);n[c.uuid]=new Ui(u)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=e[a.image],l=c.data;let u;Array.isArray(l)?(u=new C0,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new An:u=new le,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,H2)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Mu),u.wrapT=n(a.wrap[1],Mu)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Su)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Su)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(t,e,n,i,r){let o;function a(f){return e[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),e[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const h=[];for(let p=0,_=f.length;p<_;p++){const g=f[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),h.push(n[g])}return h}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,d;switch(t.type){case"Scene":o=new Rs,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new ft(t.background):o.background=l(t.background)),t.environment!==void 0&&(o.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Do(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Lo(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new ge(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Po(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new $f(t.color,t.intensity);break;case"DirectionalLight":o=new Zf(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new qf(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Kf(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Yf(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new Xf(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new jf().fromJSON(t);break;case"SkinnedMesh":u=a(t.geometry),d=c(t.material),o=new gf(u,d),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":u=a(t.geometry),d=c(t.material),o=new ee(u,d);break;case"InstancedMesh":u=a(t.geometry),d=c(t.material);const f=t.count,h=t.instanceMatrix,p=t.instanceColor;o=new _f(u,d,f),o.instanceMatrix=new Es(new Float32Array(h.array),16),p!==void 0&&(o.instanceColor=new Es(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(t.geometry),d=c(t.material),o=new xf(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),o.geometry=u,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{const g=new we;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new Ee;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=l(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=l(t.colorsTexture.uuid));break;case"LOD":o=new mf;break;case"Line":o=new ui(a(t.geometry),c(t.material));break;case"LineLoop":o=new vf(a(t.geometry),c(t.material));break;case"LineSegments":o=new In(a(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new yf(a(t.geometry),c(t.material));break;case"Sprite":o=new pf(c(t.material));break;case"Group":o=new Vn;break;case"Bone":o=new Lc;break;default:o=new Qt}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const f=t.children;for(let h=0;h<f.length;h++)o.add(this.parseObject(f[h],e,n,i,r))}if(t.animations!==void 0){const f=t.animations;for(let h=0;h<f.length;h++){const p=f[h];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const f=t.levels;for(let h=0;h<f.length;h++){const p=f[h],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new Qt}})}}const H2={UVMapping:_o,CubeReflectionMapping:qn,CubeRefractionMapping:li,EquirectangularReflectionMapping:r0,EquirectangularRefractionMapping:o0,CubeUVReflectionMapping:As},Mu={RepeatWrapping:a0,ClampToEdgeWrapping:dn,MirroredRepeatWrapping:c0},Su={NearestFilter:Re,NearestMipmapNearestFilter:uc,NearestMipmapLinearFilter:gs,LinearFilter:Me,LinearMipmapNearestFilter:$s,LinearMipmapLinearFilter:wn};class G2 extends je{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Hn.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hn.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Hn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Hn.add(t,c),r.manager.itemStart(t)}}let Sr;class $c{static getContext(){return Sr===void 0&&(Sr=new(window.AudioContext||window.webkitAudioContext)),Sr}static setContext(t){Sr=t}}class W2 extends je{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new $n(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{const l=c.slice(0);$c.getContext().decodeAudioData(l,function(d){e(d)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(t)}}}const bu=new Pt,wu=new Pt,Si=new Pt;class X2{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ge,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ge,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Si.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Bi*e.fov*.5)/e.zoom;let a,c;wu.elements[12]=-i,bu.elements[12]=i,a=-o*e.aspect+r,c=o*e.aspect+r,Si.elements[0]=2*e.near/(c-a),Si.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(Si),a=-o*e.aspect-r,c=o*e.aspect-r,Si.elements[0]=2*e.near/(c-a),Si.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(Si)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(wu),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(bu)}}class th{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eu(){return(typeof performance>"u"?Date:performance).now()}const bi=new A,Au=new Ne,Y2=new A,wi=new A;class q2 extends Qt{constructor(){super(),this.type="AudioListener",this.context=$c.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new th}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(bi,Au,Y2),wi.set(0,0,-1).applyQuaternion(Au),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(bi.x,i),e.positionY.linearRampToValueAtTime(bi.y,i),e.positionZ.linearRampToValueAtTime(bi.z,i),e.forwardX.linearRampToValueAtTime(wi.x,i),e.forwardY.linearRampToValueAtTime(wi.y,i),e.forwardZ.linearRampToValueAtTime(wi.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(bi.x,bi.y,bi.z),e.setOrientation(wi.x,wi.y,wi.z,n.x,n.y,n.z)}}class eh extends Qt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Ei=new A,Tu=new Ne,Z2=new A,Ai=new A;class $2 extends eh{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ei,Tu,Z2),Ai.set(0,0,1).applyQuaternion(Tu);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ei.x,n),e.positionY.linearRampToValueAtTime(Ei.y,n),e.positionZ.linearRampToValueAtTime(Ei.z,n),e.orientationX.linearRampToValueAtTime(Ai.x,n),e.orientationY.linearRampToValueAtTime(Ai.y,n),e.orientationZ.linearRampToValueAtTime(Ai.z,n)}else e.setPosition(Ei.x,Ei.y,Ei.z),e.setOrientation(Ai.x,Ai.y,Ai.z)}}class K2{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class nh{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Ne.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;Ne.multiplyQuaternionsFlat(t,o,t,e,t,n),Ne.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Kc="\\[\\]\\.:\\/",J2=new RegExp("["+Kc+"]","g"),Jc="[^"+Kc+"]",j2="[^"+Kc.replace("\\.","")+"]",Q2=/((?:WC+[\/:])*)/.source.replace("WC",Jc),tv=/(WCOD+)?/.source.replace("WCOD",j2),ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),iv=new RegExp("^"+Q2+tv+ev+nv+"$"),sv=["material","materials","bones","map"];class rv{constructor(t,e,n){const i=n||jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class jt{constructor(t,e,n){this.path=e,this.parsedPath=n||jt.parseTrackName(e),this.node=jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new jt.Composite(t,e,n):new jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J2,"")}static parseTrackName(t){const e=iv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}jt.Composite=rv;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ov{constructor(){this.isAnimationObjectGroup=!0,this.uuid=on(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,c=t.length,l=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const f=arguments[u],h=f.uuid;let p=e[h];if(p===void 0){p=c++,e[h]=p,t.push(f);for(let _=0,g=o;_!==g;++_)r[_].push(new jt(f,n[_],i[_]))}else if(p<l){a=t[p];const _=--l,g=t[_];e[g.uuid]=p,t[p]=g,e[h]=_,t[_]=f;for(let m=0,v=o;m!==v;++m){const x=r[m],y=x[_];let L=x[p];x[p]=y,L===void 0&&(L=new jt(f,n[m],i[m])),x[_]=L}}else t[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0&&u>=r){const d=r++,f=t[d];e[f.uuid]=u,t[u]=f,e[l]=d,t[d]=c;for(let h=0,p=i;h!==p;++h){const _=n[h],g=_[d],m=_[u];_[u]=g,_[d]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,d=e[u];if(d!==void 0)if(delete e[u],d<r){const f=--r,h=t[f],p=--o,_=t[p];e[h.uuid]=d,t[d]=h,e[_.uuid]=f,t[f]=_,t.pop();for(let g=0,m=i;g!==m;++g){const v=n[g],x=v[f],y=v[p];v[d]=x,v[f]=y,v.pop()}}else{const f=--o,h=t[f];f>0&&(e[h.uuid]=d),t[d]=h,t.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[d]=g[f],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,d=new Array(l);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(d);for(let f=u,h=c.length;f!==h;++f){const p=c[f];d[f]=new jt(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=t[a];e[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class ih{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:Li,endingEnd:Li};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Bd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case yc:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case wo:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===zd;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Fd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Di,i.endingEnd=Di):(t?i.endingStart=this.zeroSlopeAtStart?Di:Li:i.endingStart=u0,e?i.endingEnd=this.zeroSlopeAtEnd?Di:Li:i.endingEnd=u0)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const av=new Float32Array(1);class cv extends Pn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const f=i[d],h=f.name;let p=u[h];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,h));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;p=new nh(jt.create(n,h,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,h),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Wc(new Float32Array(2),new Float32Array(2),1,av),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?b0.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=wo),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new ih(this,o,e,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?b0.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,d=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,e[u]=d,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class jc{constructor(t){this.value=t}clone(){return new jc(this.value.clone===void 0?this.value:this.value.clone())}}let lv=0;class uv extends Pn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:lv++}),this.name="",this.usage=p0,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class mo extends Uo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class dv{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Cu=new Pt;class sh{constructor(t,e,n=0,i=1/0){this.ray=new Gi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(t,e=!0,n=[]){return ac(t,this,n,e),n.sort(Ru),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ac(t[i],this,n,e);return n.sort(Ru),n}}function Ru(s,t){return s.distance-t.distance}function ac(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ac(r[o],t,e,!0)}}class cc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fv{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class Qc{constructor(t,e,n,i){Qc.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const Pu=new G;class hv{constructor(t=new G(1/0,1/0),e=new G(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Iu=new A,br=new A;class rh{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Iu.subVectors(t,this.start),br.subVectors(this.end,this.start);const n=br.dot(br);let r=br.dot(Iu)/n;return e&&(r=he(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Lu=new A;class pv extends Qt{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Wt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new bt(i,3));const r=new Ze({fog:!1,toneMapped:!1});this.cone=new In(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Lu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Lu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ai=new A,wr=new Pt,ka=new Pt;class mv extends In{constructor(t){const e=oh(t),n=new Wt,i=[],r=[],o=new ft(0,0,1),a=new ft(0,1,0);for(let l=0;l<e.length;l++){const u=e[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new bt(i,3)),n.setAttribute("color",new bt(r,3));const c=new Ze({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");ka.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(wr.multiplyMatrices(ka,a.matrixWorld),ai.setFromMatrixPosition(wr),i.setXYZ(o,ai.x,ai.y,ai.z),wr.multiplyMatrices(ka,a.parent.matrixWorld),ai.setFromMatrixPosition(wr),i.setXYZ(o+1,ai.x,ai.y,ai.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function oh(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,oh(s.children[e]));return t}class gv extends ee{constructor(t,e,n){const i=new Yn(e,4,2),r=new Oe({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const _v=new A,Du=new ft,Uu=new ft;class xv extends Qt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new I0(e);i.rotateY(Math.PI*.5),this.material=new Oe({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new ne(o,3)),this.add(new ee(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Du.copy(this.light.color),Uu.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Du:Uu;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(_v.setFromMatrixPosition(this.light.matrixWorld).negate())}}class vv extends In{constructor(t=10,e=10,n=4473924,i=8947848){n=new ft(n),i=new ft(i);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,h=0,p=-a;f<=e;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=f===r?n:i;_.toArray(l,h),h+=3,_.toArray(l,h),h+=3,_.toArray(l,h),h+=3,_.toArray(l,h),h+=3}const u=new Wt;u.setAttribute("position",new bt(c,3)),u.setAttribute("color",new bt(l,3));const d=new Ze({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yv extends In{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new ft(r),o=new ft(o);const a=[],c=[];if(e>1)for(let d=0;d<e;d++){const f=d/e*(Math.PI*2),h=Math.sin(f)*t,p=Math.cos(f)*t;a.push(0,0,0),a.push(h,0,p);const _=d&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const f=d&1?r:o,h=t-t/n*d;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*h,m=Math.cos(_)*h;a.push(g,0,m),c.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*h,m=Math.cos(_)*h,a.push(g,0,m),c.push(f.r,f.g,f.b)}}const l=new Wt;l.setAttribute("position",new bt(a,3)),l.setAttribute("color",new bt(c,3));const u=new Ze({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Nu=new A,Er=new A,Ou=new A;class Mv extends Qt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Wt;i.setAttribute("position",new bt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Ze({fog:!1,toneMapped:!1});this.lightPlane=new ui(i,r),this.add(this.lightPlane),i=new Wt,i.setAttribute("position",new bt([0,0,0,0,0,1],3)),this.targetLine=new ui(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Nu.setFromMatrixPosition(this.light.matrixWorld),Er.setFromMatrixPosition(this.light.target.matrixWorld),Ou.subVectors(Er,Nu),this.lightPlane.lookAt(Er),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Er),this.targetLine.scale.z=Ou.length()}}const Ar=new A,fe=new Ro;class Sv extends In{constructor(t){const e=new Wt,n=new Ze({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new bt(i,3)),e.setAttribute("color",new bt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new ft(16755200),u=new ft(16711680),d=new ft(43775),f=new ft(16777215),h=new ft(3355443);this.setColors(l,u,d,f,h)}setColors(t,e,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;fe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),me("c",e,t,fe,0,0,-1),me("t",e,t,fe,0,0,1),me("n1",e,t,fe,-n,-i,-1),me("n2",e,t,fe,n,-i,-1),me("n3",e,t,fe,-n,i,-1),me("n4",e,t,fe,n,i,-1),me("f1",e,t,fe,-n,-i,1),me("f2",e,t,fe,n,-i,1),me("f3",e,t,fe,-n,i,1),me("f4",e,t,fe,n,i,1),me("u1",e,t,fe,n*.7,i*1.1,-1),me("u2",e,t,fe,-n*.7,i*1.1,-1),me("u3",e,t,fe,0,i*2,-1),me("cf1",e,t,fe,-n,0,1),me("cf2",e,t,fe,n,0,1),me("cf3",e,t,fe,0,-i,1),me("cf4",e,t,fe,0,i,1),me("cn1",e,t,fe,-n,0,-1),me("cn2",e,t,fe,n,0,-1),me("cn3",e,t,fe,0,-i,-1),me("cn4",e,t,fe,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function me(s,t,e,n,i,r,o){Ar.set(i,r,o).unproject(n);const a=t[s];if(a!==void 0){const c=e.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Ar.x,Ar.y,Ar.z)}}const Tr=new we;class bv extends In{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Wt;r.setIndex(new ne(n,1)),r.setAttribute("position",new ne(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Tr.setFromObject(this.object),Tr.isEmpty())return;const e=Tr.min,n=Tr.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wv extends In{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Wt;r.setIndex(new ne(n,1)),r.setAttribute("position",new bt(i,3)),super(r,new Ze({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ev extends ui{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Wt;o.setAttribute("position",new bt(r,3)),o.computeBoundingSphere(),super(o,new Ze({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Wt;c.setAttribute("position",new bt(a,3)),c.computeBoundingSphere(),this.add(new ee(c,new Oe({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Fu=new A;let Cr,Va;class Av extends Qt{constructor(t=new A(0,0,1),e=new A(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Cr===void 0&&(Cr=new Wt,Cr.setAttribute("position",new bt([0,0,0,0,1,0],3)),Va=new Ps(0,.5,1,5,1),Va.translate(0,-.5,0)),this.position.copy(e),this.line=new ui(Cr,new Ze({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ee(Va,new Oe({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Fu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Fu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Tv extends In{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Wt;i.setAttribute("position",new bt(e,3)),i.setAttribute("color",new bt(n,3));const r=new Ze({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new ft,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Cv{constructor(){this.type="ShapePath",this.color=new ft,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new _0,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const v=[];for(let x=0,y=m.length;x<y;x++){const L=m[x],T=new Xn;T.curves=L.curves,v.push(T)}return v}function n(m,v){const x=v.length;let y=!1;for(let L=x-1,T=0;T<x;L=T++){let C=v[L],I=v[T],w=I.x-C.x,b=I.y-C.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(C=v[T],w=-w,I=v[L],b=-b),m.y<C.y||m.y>I.y)continue;if(m.y===C.y){if(m.x===C.x)return!0}else{const D=b*(m.x-C.x)-w*(m.y-C.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(m.y!==C.y)continue;if(I.x<=m.x&&m.x<=C.x||C.x<=m.x&&m.x<=I.x)return!0}}return y}const i=Tn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Xn,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=t?!u:u;const d=[],f=[];let h=[],p=0,_;f[p]=void 0,h[p]=[];for(let m=0,v=r.length;m<v;m++)a=r[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&f[p]&&p++,f[p]={s:new Xn,p:_},f[p].s.curves=a.curves,u&&p++,h[p]=[]):h[p].push({h:a,p:_[0]});if(!f[0])return e(r);if(f.length>1){let m=!1,v=0;for(let x=0,y=f.length;x<y;x++)d[x]=[];for(let x=0,y=f.length;x<y;x++){const L=h[x];for(let T=0;T<L.length;T++){const C=L[T];let I=!0;for(let w=0;w<f.length;w++)n(C.p,f[w].p)&&(x!==w&&v++,I?(I=!1,d[w].push(C)):m=!0);I&&d[x].push(C)}}v>0&&m===!1&&(h=d)}let g;for(let m=0,v=f.length;m<v;m++){c=f[m].s,l.push(c),g=h[m];for(let x=0,y=g.length;x<y;x++)c.holes.push(g[x].h)}return l}}class Rv extends _n{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);const Pv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ld,AddEquation:ci,AddOperation:Cd,AdditiveAnimationBlendMode:yc,AdditiveBlending:Za,AgXToneMapping:Ud,AlphaFormat:pc,AlwaysCompare:$d,AlwaysDepth:Md,AlwaysStencilFunc:ja,AmbientLight:$f,AnimationAction:ih,AnimationClip:b0,AnimationLoader:U2,AnimationMixer:cv,AnimationObjectGroup:ov,AnimationUtils:P2,ArcCurve:Mf,ArrayCamera:df,ArrowHelper:Av,AttachedBindMode:Ja,Audio:eh,AudioAnalyser:K2,AudioContext:$c,AudioListener:q2,AudioLoader:W2,AxesHelper:Tv,BackSide:ke,BasicDepthPacking:kd,BasicShadowMap:Ph,BatchedMesh:xf,Bone:Lc,BooleanKeyframeTrack:Xi,Box2:hv,Box3:we,Box3Helper:wv,BoxGeometry:Jn,BoxHelper:bv,BufferAttribute:ne,BufferGeometry:Wt,BufferGeometryLoader:Qf,ByteType:dc,Cache:Hn,Camera:Ro,CameraHelper:Sv,CanvasTexture:t2,CapsuleGeometry:Bo,CatmullRomCurve3:Sf,CineonToneMapping:Id,CircleGeometry:zo,ClampToEdgeWrapping:dn,Clock:th,Color:ft,ColorKeyframeTrack:Xc,ColorManagement:te,CompressedArrayTexture:jx,CompressedCubeTexture:Qx,CompressedTexture:Oo,CompressedTextureLoader:N2,ConeGeometry:ko,ConstantAlphaFactor:xd,ConstantColorFactor:gd,CubeCamera:nf,CubeReflectionMapping:qn,CubeRefractionMapping:li,CubeTexture:C0,CubeTextureLoader:O2,CubeUVReflectionMapping:As,CubicBezierCurve:Nc,CubicBezierCurve3:bf,CubicInterpolant:kf,CullFaceBack:qa,CullFaceFront:td,CullFaceFrontBack:Rh,CullFaceNone:Qu,Curve:xn,CurvePath:Ef,CustomBlending:nd,CustomToneMapping:Dd,CylinderGeometry:Ps,Cylindrical:fv,Data3DTexture:wc,DataArrayTexture:Ao,DataTexture:An,DataTextureLoader:F2,DataUtils:Hp,DecrementStencilOp:Wh,DecrementWrapStencilOp:Yh,DefaultLoadingManager:Gf,DepthFormat:Fi,DepthStencilFormat:Vi,DepthTexture:Cc,DetachedBindMode:Od,DirectionalLight:Zf,DirectionalLightHelper:Mv,DiscreteInterpolant:Vf,DisplayP3ColorSpace:Eo,DodecahedronGeometry:Vo,DoubleSide:Ke,DstAlphaFactor:dd,DstColorFactor:hd,DynamicCopyUsage:ap,DynamicDrawUsage:ep,DynamicReadUsage:sp,EdgesGeometry:Af,EllipseCurve:Fo,EqualCompare:Xd,EqualDepth:bd,EqualStencilFunc:Kh,EquirectangularReflectionMapping:r0,EquirectangularRefractionMapping:o0,Euler:an,EventDispatcher:Pn,ExtrudeGeometry:Go,FileLoader:$n,Float16BufferAttribute:Zp,Float32BufferAttribute:bt,FloatType:Je,Fog:Do,FogExp2:Lo,FramebufferTexture:Jx,FrontSide:Cn,Frustum:R0,GLBufferAttribute:dv,GLSL1:lp,GLSL3:uo,GreaterCompare:Yd,GreaterDepth:Ed,GreaterEqualCompare:Zd,GreaterEqualDepth:wd,GreaterEqualStencilFunc:tp,GreaterStencilFunc:jh,GridHelper:vv,Group:Vn,HalfFloatType:Ts,HemisphereLight:Xf,HemisphereLightHelper:xv,IcosahedronGeometry:Wo,ImageBitmapLoader:G2,ImageLoader:w0,ImageUtils:jd,IncrementStencilOp:Gh,IncrementWrapStencilOp:Xh,InstancedBufferAttribute:Es,InstancedBufferGeometry:Zc,InstancedInterleavedBuffer:mo,InstancedMesh:_f,Int16BufferAttribute:Yp,Int32BufferAttribute:qp,Int8BufferAttribute:Gp,IntType:xo,InterleavedBuffer:Uo,InterleavedBufferAttribute:rn,Interpolant:L0,InterpolateDiscrete:l0,InterpolateLinear:lo,InterpolateSmooth:Dr,InvertStencilOp:qh,KeepStencilOp:Ri,KeyframeTrack:vn,LOD:mf,LatheGeometry:P0,Layers:To,LessCompare:Wd,LessDepth:Sd,LessEqualCompare:Mc,LessEqualDepth:s0,LessEqualStencilFunc:Jh,LessStencilFunc:$h,Light:hi,LightProbe:jf,Line:ui,Line3:rh,LineBasicMaterial:Ze,LineCurve:Oc,LineCurve3:wf,LineDashedMaterial:Ff,LineLoop:vf,LineSegments:In,LinearDisplayP3ColorSpace:T0,LinearFilter:Me,LinearInterpolant:Wc,LinearMipMapLinearFilter:Uh,LinearMipMapNearestFilter:Dh,LinearMipmapLinearFilter:wn,LinearMipmapNearestFilter:$s,LinearSRGBColorSpace:Kn,LinearToneMapping:Rd,LinearTransfer:d0,Loader:je,LoaderUtils:oc,LoadingManager:Yc,LoopOnce:Fd,LoopPingPong:zd,LoopRepeat:Bd,LuminanceAlphaFormat:_c,LuminanceFormat:gc,MOUSE:Ti,Material:Ve,MaterialLoader:Ko,MathUtils:bc,Matrix2:Qc,Matrix3:Ht,Matrix4:Pt,MaxEquation:od,Mesh:ee,MeshBasicMaterial:Oe,MeshDepthMaterial:Rc,MeshDistanceMaterial:Pc,MeshLambertMaterial:Nf,MeshMatcapMaterial:Of,MeshNormalMaterial:Uf,MeshPhongMaterial:Lf,MeshPhysicalMaterial:If,MeshStandardMaterial:Hc,MeshToonMaterial:Df,MinEquation:rd,MirroredRepeatWrapping:c0,MixOperation:Td,MultiplyBlending:Ka,MultiplyOperation:E0,NearestFilter:Re,NearestMipMapLinearFilter:Lh,NearestMipMapNearestFilter:Ih,NearestMipmapLinearFilter:gs,NearestMipmapNearestFilter:uc,NeutralToneMapping:Nd,NeverCompare:Gd,NeverDepth:yd,NeverStencilFunc:Zh,NoBlending:Gn,NoColorSpace:zn,NoToneMapping:Wn,NormalAnimationBlendMode:wo,NormalBlending:Oi,NotEqualCompare:qd,NotEqualDepth:Ad,NotEqualStencilFunc:Qh,NumberKeyframeTrack:M0,Object3D:Qt,ObjectLoader:V2,ObjectSpaceNormalMap:Hd,OctahedronGeometry:I0,OneFactor:cd,OneMinusConstantAlphaFactor:vd,OneMinusConstantColorFactor:_d,OneMinusDstAlphaFactor:fd,OneMinusDstColorFactor:pd,OneMinusSrcAlphaFactor:Or,OneMinusSrcColorFactor:ud,OrthographicCamera:Po,P3Primaries:h0,PCFShadowMap:lc,PCFSoftShadowMap:ed,PMREMGenerator:Qa,Path:_0,PerspectiveCamera:ge,Plane:gn,PlaneGeometry:Wi,PlaneHelper:Ev,PointLight:qf,PointLightHelper:gv,Points:yf,PointsMaterial:Dc,PolarGridHelper:yv,PolyhedronGeometry:fi,PositionalAudio:$2,PropertyBinding:jt,PropertyMixer:nh,QuadraticBezierCurve:Fc,QuadraticBezierCurve3:Bc,Quaternion:Ne,QuaternionKeyframeTrack:D0,QuaternionLinearInterpolant:Hf,RED_GREEN_RGTC2_Format:ao,RED_RGTC1_Format:vc,REVISION:go,RGBADepthPacking:Vd,RGBAFormat:Ye,RGBAIntegerFormat:bo,RGBA_ASTC_10x10_Format:eo,RGBA_ASTC_10x5_Format:jr,RGBA_ASTC_10x6_Format:Qr,RGBA_ASTC_10x8_Format:to,RGBA_ASTC_12x10_Format:no,RGBA_ASTC_12x12_Format:io,RGBA_ASTC_4x4_Format:Wr,RGBA_ASTC_5x4_Format:Xr,RGBA_ASTC_5x5_Format:Yr,RGBA_ASTC_6x5_Format:qr,RGBA_ASTC_6x6_Format:Zr,RGBA_ASTC_8x5_Format:$r,RGBA_ASTC_8x6_Format:Kr,RGBA_ASTC_8x8_Format:Jr,RGBA_BPTC_Format:t0,RGBA_ETC2_EAC_Format:Gr,RGBA_PVRTC_2BPPV1_Format:kr,RGBA_PVRTC_4BPPV1_Format:zr,RGBA_S3TC_DXT1_Format:Js,RGBA_S3TC_DXT3_Format:js,RGBA_S3TC_DXT5_Format:Qs,RGBDepthPacking:zh,RGBFormat:mc,RGBIntegerFormat:Nh,RGB_BPTC_SIGNED_Format:so,RGB_BPTC_UNSIGNED_Format:ro,RGB_ETC1_Format:Vr,RGB_ETC2_Format:Hr,RGB_PVRTC_2BPPV1_Format:Br,RGB_PVRTC_4BPPV1_Format:Fr,RGB_S3TC_DXT1_Format:Ks,RGDepthPacking:kh,RGFormat:xc,RGIntegerFormat:So,RawShaderMaterial:Vc,Ray:Gi,Raycaster:sh,Rec709Primaries:f0,RectAreaLight:Kf,RedFormat:Mo,RedIntegerFormat:A0,ReinhardToneMapping:Pd,RenderTarget:Qd,RepeatWrapping:a0,ReplaceStencilOp:Hh,ReverseSubtractEquation:sd,RingGeometry:Xo,SIGNED_RED_GREEN_RGTC2_Format:co,SIGNED_RED_RGTC1_Format:oo,SRGBColorSpace:un,SRGBTransfer:oe,Scene:Rs,ShaderChunk:Yt,ShaderLib:We,ShaderMaterial:qe,ShadowMaterial:Pf,Shape:Xn,ShapeGeometry:Is,ShapePath:Cv,ShapeUtils:Tn,ShortType:fc,Skeleton:No,SkeletonHelper:mv,SkinnedMesh:gf,Source:Ui,Sphere:Ee,SphereGeometry:Yn,Spherical:cc,SphericalHarmonics3:Jf,SplineCurve:zc,SpotLight:Yf,SpotLightHelper:pv,Sprite:pf,SpriteMaterial:Ic,SrcAlphaFactor:Nr,SrcAlphaSaturateFactor:md,SrcColorFactor:ld,StaticCopyUsage:op,StaticDrawUsage:p0,StaticReadUsage:ip,StereoCamera:X2,StreamCopyUsage:cp,StreamDrawUsage:np,StreamReadUsage:rp,StringKeyframeTrack:Yi,SubtractEquation:id,SubtractiveBlending:$a,TOUCH:Ci,TangentSpaceNormalMap:di,TetrahedronGeometry:Yo,Texture:le,TextureLoader:Wf,TextureUtils:Px,TorusGeometry:qo,TorusKnotGeometry:Zo,Triangle:sn,TriangleFanDrawMode:Bh,TriangleStripDrawMode:Fh,TrianglesDrawMode:Oh,TubeGeometry:$o,UVMapping:_o,Uint16BufferAttribute:Ec,Uint32BufferAttribute:Ac,Uint8BufferAttribute:Wp,Uint8ClampedBufferAttribute:Xp,Uniform:jc,UniformsGroup:uv,UniformsLib:ct,UniformsUtils:Co,UnsignedByteType:Rn,UnsignedInt248Type:ki,UnsignedInt5999Type:hc,UnsignedIntType:Zn,UnsignedShort4444Type:vo,UnsignedShort5551Type:yo,UnsignedShortType:Ss,VSMShadowMap:Sn,Vector2:G,Vector3:A,Vector4:$t,VectorKeyframeTrack:S0,VideoTexture:Kx,WebGL3DRenderTarget:Lp,WebGLArrayRenderTarget:Ip,WebGLCoordinateSystem:En,WebGLCubeRenderTarget:sf,WebGLMultipleRenderTargets:Rv,WebGLRenderTarget:_n,WebGLRenderer:ff,WebGLUtils:uf,WebGPUCoordinateSystem:m0,WireframeGeometry:kc,WrapAroundEnding:u0,ZeroCurvatureEnding:Li,ZeroFactor:ad,ZeroSlopeEnding:Di,ZeroStencilOp:Vh,createCanvasElement:Jd},Symbol.toStringTag,{value:"Module"})),Iv=s=>{const t=new Rs,e=new ge(75,window.innerWidth/window.innerHeight,.1,1e3),n=new Jn,i=new Oe({color:15728725}),r=new ee(n,i);return t.add(r),e.position.z=5,{update_scene:()=>{r.rotation.x+=.01,r.rotation.y+=.01,s.render(t,e)},camera:e,resetter:()=>{}}};function Lv(s,t,e){return Math.max(t,Math.min(e,s))}const Dv=[[[{vertices:[[-4.25,5.5],[4.25,5.5],[4.25,-5.5],[-4.25,-5.5]],links:[null,null,null,null]}]],[[{vertices:[[-4.25,1.25],[0,5.5],[4.25,5.5],[4.25,-5.5],[-4.25,-5.5]],links:[[1,0,0],null,null,null,null]}],[{vertices:[[-4.25,1.25],[0,5.5],[0,1.25]],links:[[-1,0,0],null,null]}]],[[{vertices:[[-4.25,1.25],[0,5.5],[4.25,1.25],[4.25,-5.5],[-4.25,-5.5]],links:[[1,0,0],[1,1,2],null,null,null]}],[{vertices:[[-4.25,1.25],[0,5.5],[0,1.25]],links:[[-1,0,0],null,null]},{vertices:[[0,5.5],[0,1.25],[4.25,1.25]],links:[null,null,[-1,0,1]]}]],[[{vertices:[[-4.25,1.25],[4.25,1.25],[4.25,-5.5],[-4.25,-5.5]],links:[[2,0,0],null,null,null]}],[{vertices:[[-4.25,1.25],[0,1.25],[0,-3]],links:[null,null,[1,0,2]]},{vertices:[[0,-3],[0,1.25],[4.25,1.25]],links:[null,null,[1,0,1]]}],[{vertices:[[-4.25,1.25],[4.25,1.25],[0,-3]],links:[[-2,0,0],[-1,1,2],[-1,0,2]]}]]],Bu={type:"change"},Ha={type:"start"},zu={type:"end"},Rr=new Gi,ku=new gn,Uv=Math.cos(70*bc.DEG2RAD);class ah extends Pn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",_t),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bu),n.update(),r=i.NONE},this.update=function(){const M=new A,O=new Ne().setFromUnitVectors(t.up,new A(0,1,0)),B=O.clone().invert(),X=new A,nt=new Ne,Tt=new A,Ft=2*Math.PI;return function(Se=null){const Jt=n.object.position;M.copy(Jt).sub(n.target),M.applyQuaternion(O),a.setFromVector3(M),n.autoRotate&&r===i.NONE&&V(b(Se)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let be=n.minAzimuthAngle,_e=n.maxAzimuthAngle;isFinite(be)&&isFinite(_e)&&(be<-Math.PI?be+=Ft:be>Math.PI&&(be-=Ft),_e<-Math.PI?_e+=Ft:_e>Math.PI&&(_e-=Ft),be<=_e?a.theta=Math.max(be,Math.min(_e,a.theta)):a.theta=a.theta>(be+_e)/2?Math.max(be,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let jn=!1;if(n.zoomToCursor&&T||n.object.isOrthographicCamera)a.radius=mt(a.radius);else{const Pe=a.radius;a.radius=mt(a.radius*l),jn=Pe!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion(B),Jt.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&T){let Pe=null;if(n.object.isPerspectiveCamera){const Ln=M.length();Pe=mt(Ln*l);const pi=Ln-Pe;n.object.position.addScaledVector(y,pi),n.object.updateMatrixWorld(),jn=!!pi}else if(n.object.isOrthographicCamera){const Ln=new A(L.x,L.y,0);Ln.unproject(n.object);const pi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),jn=pi!==n.object.zoom;const Ds=new A(L.x,L.y,0);Ds.unproject(n.object),n.object.position.sub(Ds).add(Ln),n.object.updateMatrixWorld(),Pe=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Pe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Pe).add(n.object.position):(Rr.origin.copy(n.object.position),Rr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Rr.direction))<Uv?t.lookAt(n.target):(ku.setFromNormalAndCoplanarPoint(n.object.up,n.target),Rr.intersectPlane(ku,n.target))))}else if(n.object.isOrthographicCamera){const Pe=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Pe!==n.object.zoom&&(n.object.updateProjectionMatrix(),jn=!0)}return l=1,T=!1,jn||X.distanceToSquared(n.object.position)>o||8*(1-nt.dot(n.object.quaternion))>o||Tt.distanceToSquared(n.target)>o?(n.dispatchEvent(Bu),X.copy(n.object.position),nt.copy(n.object.quaternion),Tt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",gt),n.domElement.removeEventListener("pointerdown",yt),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_t),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new cc,c=new cc;let l=1;const u=new A,d=new G,f=new G,h=new G,p=new G,_=new G,g=new G,m=new G,v=new G,x=new G,y=new A,L=new G;let T=!1;const C=[],I={};let w=!1;function b(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function D(M){const O=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*O)}function V(M){c.theta-=M}function F(M){c.phi-=M}const Y=function(){const M=new A;return function(B,X){M.setFromMatrixColumn(X,0),M.multiplyScalar(-B),u.add(M)}}(),Z=function(){const M=new A;return function(B,X){n.screenSpacePanning===!0?M.setFromMatrixColumn(X,1):(M.setFromMatrixColumn(X,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(B),u.add(M)}}(),W=function(){const M=new A;return function(B,X){const nt=n.domElement;if(n.object.isPerspectiveCamera){const Tt=n.object.position;M.copy(Tt).sub(n.target);let Ft=M.length();Ft*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*B*Ft/nt.clientHeight,n.object.matrix),Z(2*X*Ft/nt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(B*(n.object.right-n.object.left)/n.object.zoom/nt.clientWidth,n.object.matrix),Z(X*(n.object.top-n.object.bottom)/n.object.zoom/nt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ht(M,O){if(!n.zoomToCursor)return;T=!0;const B=n.domElement.getBoundingClientRect(),X=M-B.left,nt=O-B.top,Tt=B.width,Ft=B.height;L.x=X/Tt*2-1,L.y=-(nt/Ft)*2+1,y.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function mt(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function xt(M){d.set(M.clientX,M.clientY)}function Xt(M){ht(M.clientX,M.clientX),m.set(M.clientX,M.clientY)}function Kt(M){p.set(M.clientX,M.clientY)}function $(M){f.set(M.clientX,M.clientY),h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;V(2*Math.PI*h.x/O.clientHeight),F(2*Math.PI*h.y/O.clientHeight),d.copy(f),n.update()}function st(M){v.set(M.clientX,M.clientY),x.subVectors(v,m),x.y>0?J(D(x.y)):x.y<0&&q(D(x.y)),m.copy(v),n.update()}function Mt(M){_.set(M.clientX,M.clientY),g.subVectors(_,p).multiplyScalar(n.panSpeed),W(g.x,g.y),p.copy(_),n.update()}function ut(M){ht(M.clientX,M.clientY),M.deltaY<0?q(D(M.deltaY)):M.deltaY>0&&J(D(M.deltaY)),n.update()}function Dt(M){let O=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),O=!0;break}O&&(M.preventDefault(),n.update())}function Vt(M){if(C.length===1)d.set(M.pageX,M.pageY);else{const O=kt(M),B=.5*(M.pageX+O.x),X=.5*(M.pageY+O.y);d.set(B,X)}}function Lt(M){if(C.length===1)p.set(M.pageX,M.pageY);else{const O=kt(M),B=.5*(M.pageX+O.x),X=.5*(M.pageY+O.y);p.set(B,X)}}function Zt(M){const O=kt(M),B=M.pageX-O.x,X=M.pageY-O.y,nt=Math.sqrt(B*B+X*X);m.set(0,nt)}function R(M){n.enableZoom&&Zt(M),n.enablePan&&Lt(M)}function ot(M){n.enableZoom&&Zt(M),n.enableRotate&&Vt(M)}function et(M){if(C.length==1)f.set(M.pageX,M.pageY);else{const B=kt(M),X=.5*(M.pageX+B.x),nt=.5*(M.pageY+B.y);f.set(X,nt)}h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;V(2*Math.PI*h.x/O.clientHeight),F(2*Math.PI*h.y/O.clientHeight),d.copy(f)}function dt(M){if(C.length===1)_.set(M.pageX,M.pageY);else{const O=kt(M),B=.5*(M.pageX+O.x),X=.5*(M.pageY+O.y);_.set(B,X)}g.subVectors(_,p).multiplyScalar(n.panSpeed),W(g.x,g.y),p.copy(_)}function K(M){const O=kt(M),B=M.pageX-O.x,X=M.pageY-O.y,nt=Math.sqrt(B*B+X*X);v.set(0,nt),x.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),J(x.y),m.copy(v);const Tt=(M.pageX+O.x)*.5,Ft=(M.pageY+O.y)*.5;ht(Tt,Ft)}function Rt(M){n.enableZoom&&K(M),n.enablePan&&dt(M)}function pt(M){n.enableZoom&&K(M),n.enableRotate&&et(M)}function yt(M){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",S)),!St(M)&&(qt(M),M.pointerType==="touch"?zt(M):z(M)))}function P(M){n.enabled!==!1&&(M.pointerType==="touch"?rt(M):tt(M))}function S(M){switch(Ut(M),C.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(zu),r=i.NONE;break;case 1:const O=C[0],B=I[O];zt({pointerId:O,pageX:B.x,pageY:B.y});break}}function z(M){let O;switch(M.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Ti.DOLLY:if(n.enableZoom===!1)return;Xt(M),r=i.DOLLY;break;case Ti.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;Kt(M),r=i.PAN}else{if(n.enableRotate===!1)return;xt(M),r=i.ROTATE}break;case Ti.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;xt(M),r=i.ROTATE}else{if(n.enablePan===!1)return;Kt(M),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ha)}function tt(M){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(M);break;case i.DOLLY:if(n.enableZoom===!1)return;st(M);break;case i.PAN:if(n.enablePan===!1)return;Mt(M);break}}function Q(M){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(M.preventDefault(),n.dispatchEvent(Ha),ut(j(M)),n.dispatchEvent(zu))}function j(M){const O=M.deltaMode,B={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(O){case 1:B.deltaY*=16;break;case 2:B.deltaY*=100;break}return M.ctrlKey&&!w&&(B.deltaY*=10),B}function At(M){M.key==="Control"&&(w=!0,n.domElement.getRootNode().addEventListener("keyup",lt,{passive:!0,capture:!0}))}function lt(M){M.key==="Control"&&(w=!1,n.domElement.getRootNode().removeEventListener("keyup",lt,{passive:!0,capture:!0}))}function _t(M){n.enabled===!1||n.enablePan===!1||Dt(M)}function zt(M){switch(Ot(M),C.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;Vt(M),r=i.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;Lt(M),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(M),r=i.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ot(M),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ha)}function rt(M){switch(Ot(M),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;et(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;dt(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Rt(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(M),n.update();break;default:r=i.NONE}}function gt(M){n.enabled!==!1&&M.preventDefault()}function qt(M){C.push(M.pointerId)}function Ut(M){delete I[M.pointerId];for(let O=0;O<C.length;O++)if(C[O]==M.pointerId){C.splice(O,1);return}}function St(M){for(let O=0;O<C.length;O++)if(C[O]==M.pointerId)return!0;return!1}function Ot(M){let O=I[M.pointerId];O===void 0&&(O=new G,I[M.pointerId]=O),O.set(M.pageX,M.pageY)}function kt(M){const O=M.pointerId===C[0]?C[1]:C[0];return I[O]}n.domElement.addEventListener("contextmenu",gt),n.domElement.addEventListener("pointerdown",yt),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}class ch{constructor({camera:t,scene:e,domElement:n,getInteractables:i,onPress:r,onMove:o,onRelease:a,enablePan:c=!1,showPointer:l=!1,showPlane:u=!1,faceBounded:d=!0,multitouchDelayMs:f=20}){it(this,"cameraRef");it(this,"controls");it(this,"pointer",new G);it(this,"showPointer");it(this,"showPlane");it(this,"faceBounded");it(this,"raycaster",new sh);it(this,"multitouchTimer",null);it(this,"multitouchDelayMs");it(this,"isInteracting",!1);it(this,"interactionSphere");it(this,"interactingPlane");it(this,"touchPoint",null);it(this,"touchNormal",null);it(this,"touchMesh",null);it(this,"getInteractables");it(this,"onPress");it(this,"onMove");it(this,"onRelease");it(this,"intersects",[]);it(this,"updatePointer",t=>{"touches"in t?(this.pointer.x=t.touches[0].clientX/window.innerWidth*2-1,this.pointer.y=-(t.touches[0].clientY/window.innerHeight)*2+1):(this.pointer.x=t.clientX/window.innerWidth*2-1,this.pointer.y=-(t.clientY/window.innerHeight)*2+1)});it(this,"onPointerDown",t=>{t.preventDefault();const e="touches"in t;if(e&&t.touches.length>1&&this.multitouchTimer!==null){clearTimeout(this.multitouchTimer),this.multitouchTimer=null;return}this.updatePointer(t),this.raycaster.setFromCamera(this.pointer,this.cameraRef),this.intersects=this.raycaster.intersectObjects(this.getInteractables()),this.intersects.length!==0&&(e?this.multitouchTimer=setTimeout(()=>{this.startInteracting(),this.multitouchTimer=null},this.multitouchDelayMs):this.startInteracting())});it(this,"startInteracting",()=>{var n;this.controls.enabled=!1,this.isInteracting=!0,this.touchPoint=this.intersects[0].point,this.touchMesh=this.intersects[0].object,this.touchNormal=this.intersects[0].face.normal.clone().normalize(),this.touchNormal.transformDirection(this.touchMesh.matrixWorld),this.touchNormal.dot(this.raycaster.ray.direction)>0&&this.touchNormal.negate(),this.interactionSphere.visible=this.showPointer,this.interactionSphere.position.copy(this.intersects[0].point),this.interactingPlane.visible=this.showPlane;const t=new Ne().setFromUnitVectors(new A(0,0,1),this.touchNormal),e=this.intersects[0].point;this.interactingPlane.position.copy(e),this.interactingPlane.quaternion.copy(t),(n=this.onPress)==null||n.call(this)});it(this,"onPointerMove",t=>{var e;this.isInteracting&&(this.updatePointer(t),this.raycaster.setFromCamera(this.pointer,this.cameraRef),this.intersects=this.raycaster.intersectObjects(this.faceBounded?[this.touchMesh]:[this.touchMesh,this.interactingPlane]),this.intersects.length!==0&&(this.touchPoint=this.intersects[0].point,this.interactionSphere.position.copy(this.intersects[0].point),(e=this.onMove)==null||e.call(this)))});it(this,"onPointerUp",()=>{var t;this.isInteracting&&(this.controls.enabled=!0,this.isInteracting=!1,this.touchPoint=null,this.touchNormal=null,this.touchMesh=null,this.interactionSphere.visible=!1,this.interactingPlane.visible=!1,(t=this.onRelease)==null||t.call(this))});it(this,"getIntersections",()=>this.intersects);it(this,"update",()=>{this.controls.update()});it(this,"dispose",()=>{this.controls.dispose(),window.removeEventListener("mousedown",this.onPointerDown),window.removeEventListener("mousemove",this.onPointerMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchstart",this.onPointerDown),window.removeEventListener("touchmove",this.onPointerMove),window.removeEventListener("touchend",this.onPointerUp),this.interactionSphere.geometry.dispose(),this.interactionSphere.material.dispose()});this.cameraRef=t,this.controls=new ah(t,n),this.controls.enablePan=c,this.showPointer=l,this.showPlane=u,this.faceBounded=d,this.multitouchDelayMs=f,this.getInteractables=i,this.onPress=r,this.onMove=o,this.onRelease=a;const h=new Yn(.1,16,16),p=new Oe({color:65535});this.interactionSphere=new ee(h,p),e.add(this.interactionSphere),this.interactionSphere.visible=!1;const _=new Wi(1e3,1e3),g=new Oe({color:16776960,side:Ke,transparent:!0,opacity:.5});this.interactingPlane=new ee(_,g),e.add(this.interactingPlane),this.interactingPlane.visible=!1,window.addEventListener("mousedown",this.onPointerDown,!1),window.addEventListener("mousemove",this.onPointerMove,!1),window.addEventListener("mouseup",this.onPointerUp,!1),window.addEventListener("touchstart",this.onPointerDown,!1),window.addEventListener("touchmove",this.onPointerMove,!1),window.addEventListener("touchend",this.onPointerUp,!1)}}const Vu=new we,Pr=new A;class lh extends Zc{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new bt(t,3)),this.setAttribute("uv",new bt(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new mo(e,6,1);return this.setAttribute("instanceStart",new rn(n,3,0)),this.setAttribute("instanceEnd",new rn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new mo(e,6,1);return this.setAttribute("instanceColorStart",new rn(n,3,0)),this.setAttribute("instanceColorEnd",new rn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new kc(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new we);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Vu.setFromBufferAttribute(e),this.boundingBox.union(Vu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ee),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pr.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pr)),Pr.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pr));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new G(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};We.line={uniforms:Co.merge([ct.common,ct.fog,ct.line]),vertexShader:`
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
		`};class U0 extends qe{constructor(t){super({type:"LineMaterial",uniforms:Co.clone(We.line.uniforms),vertexShader:We.line.vertexShader,fragmentShader:We.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ga=new $t,Hu=new A,Gu=new A,Le=new $t,De=new $t,yn=new $t,Wa=new A,Xa=new Pt,Ue=new rh,Wu=new A,Ir=new we,Lr=new Ee,Mn=new $t;let bn,zi;function Xu(s,t,e){return Mn.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),Mn.multiplyScalar(1/Mn.w),Mn.x=zi/e.width,Mn.y=zi/e.height,Mn.applyMatrix4(s.projectionMatrixInverse),Mn.multiplyScalar(1/Mn.w),Math.abs(Math.max(Mn.x,Mn.y))}function Nv(s,t){const e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){Ue.start.fromBufferAttribute(i,a),Ue.end.fromBufferAttribute(r,a),Ue.applyMatrix4(e);const l=new A,u=new A;bn.distanceSqToSegment(Ue.start,Ue.end,u,l),u.distanceTo(l)<zi*.5&&t.push({point:u,pointOnLine:l,distance:bn.origin.distanceTo(u),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function Ov(s,t,e){const n=t.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),d=-t.near;bn.at(1,yn),yn.w=1,yn.applyMatrix4(t.matrixWorldInverse),yn.applyMatrix4(n),yn.multiplyScalar(1/yn.w),yn.x*=r.x/2,yn.y*=r.y/2,yn.z=0,Wa.copy(yn),Xa.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,h=u;f<h;f++){if(Le.fromBufferAttribute(c,f),De.fromBufferAttribute(l,f),Le.w=1,De.w=1,Le.applyMatrix4(Xa),De.applyMatrix4(Xa),Le.z>d&&De.z>d)continue;if(Le.z>d){const x=Le.z-De.z,y=(Le.z-d)/x;Le.lerp(De,y)}else if(De.z>d){const x=De.z-Le.z,y=(De.z-d)/x;De.lerp(Le,y)}Le.applyMatrix4(n),De.applyMatrix4(n),Le.multiplyScalar(1/Le.w),De.multiplyScalar(1/De.w),Le.x*=r.x/2,Le.y*=r.y/2,De.x*=r.x/2,De.y*=r.y/2,Ue.start.copy(Le),Ue.start.z=0,Ue.end.copy(De),Ue.end.z=0;const _=Ue.closestPointToPointParameter(Wa,!0);Ue.at(_,Wu);const g=bc.lerp(Le.z,De.z,_),m=g>=-1&&g<=1,v=Wa.distanceTo(Wu)<zi*.5;if(m&&v){Ue.start.fromBufferAttribute(c,f),Ue.end.fromBufferAttribute(l,f),Ue.start.applyMatrix4(o),Ue.end.applyMatrix4(o);const x=new A,y=new A;bn.distanceSqToSegment(Ue.start,Ue.end,y,x),e.push({point:y,pointOnLine:x,distance:bn.origin.distanceTo(y),object:s,face:null,faceIndex:f,uv:null,uv1:null})}}}class Fv extends ee{constructor(t=new lh,e=new U0({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Hu.fromBufferAttribute(e,o),Gu.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Hu.distanceTo(Gu);const r=new mo(i,2,1);return t.setAttribute("instanceDistanceStart",new rn(r,1,0)),t.setAttribute("instanceDistanceEnd",new rn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;bn=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;zi=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Lr.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=zi*.5;else{const d=Math.max(i.near,Lr.distanceToPoint(bn.origin));l=Xu(i,d,c.resolution)}if(Lr.radius+=l,bn.intersectsSphere(Lr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ir.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=zi*.5;else{const d=Math.max(i.near,Ir.distanceToPoint(bn.origin));u=Xu(i,d,c.resolution)}Ir.expandByScalar(u),bn.intersectsBox(Ir)!==!1&&(n?Nv(this,e):Ov(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ga),this.material.uniforms.resolution.value.set(Ga.z,Ga.w))}}class Jo extends lh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setColors(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class tl extends Fv{constructor(t=new Jo,e=new U0({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const Bv=(s,t)=>s.x*t.y-s.y*t.x,zv=(s,t)=>{const[e,n]=s,[i,r]=t,o=new G().subVectors(n,e),a=new G().subVectors(r,i),c=o.x*a.y-o.y*a.x;if(c===0)return null;const l=new G().subVectors(i,e),u=(l.x*a.y-l.y*a.x)/c;return u>=0&&u<=1?e.clone().add(o.multiplyScalar(u)):null},kv=(s,t,e,n)=>{const i=new G().subVectors(t,s),r=new G().subVectors(s,e),o=i.dot(i),a=2*r.dot(i),c=r.dot(r)-n*n,l=a*a-4*o*c;if(l<0)return[];const u=Math.sqrt(l),d=(-a-u)/(2*o),f=(-a+u)/(2*o),h=[];if(d>=0&&d<=1){const p=new G().addVectors(s,i.clone().multiplyScalar(d));h.push(p)}if(f>=0&&f<=1){const p=new G().addVectors(s,i.clone().multiplyScalar(f));h.push(p)}return h};function Vv(s,t,e=[]){let n=new G(0,0),i=0;for(let a=0;a<s.length;a++){const c=(a+1)%s.length,l=Bv(s[a],s[c]);i+=l,n.add(s[a].clone().add(s[c]).multiplyScalar(l))}i/=2,n.divideScalar(6*i);const r=s.map(a=>{const c=new G().subVectors(a,n);return c.multiplyScalar(t),new G().addVectors(n,c)}),o=e.map(a=>{const c=new G().subVectors(a,n);return c.multiplyScalar(t),new G().addVectors(n,c)});return e.length===0?r:[r,o]}const Hv=s=>`${s[0]}_${s[1]}`,Gv=(s,t)=>{if(!t)return{hide_debug_geometry:()=>{},show_debug_geometry:()=>{}};const e=new Yn(.2,32,32),n=new Oe({color:16711680}),i=new ee(e,n);i.visible=!1,s.add(i);const r=new Yn(.2,32,32),o=new Oe({color:255}),a=new ee(r,o);a.visible=!1,s.add(a);const c=new Yn(.2,32,32),l=new Oe({color:65280}),u=new ee(c,l);u.visible=!1,s.add(u);const d=new Jo;d.setPositions([-10,-10,0,10,10,0]);const f=new U0({color:16711935,linewidth:10,dashed:!1});f.resolution.set(window.innerWidth,window.innerHeight);const h=new tl(d,f);return h.visible=!1,s.add(h),{hide_debug_geometry:()=>{i.visible=!1,a.visible=!1,u.visible=!1,h.visible=!1},show_debug_geometry:(g,m,v,x,y)=>{i.visible=!0,a.visible=!0,u.visible=!0,h.visible=!0,i.position.copy(v),a.position.copy(g),u.position.copy(m),h.geometry.setPositions([x.x,x.y,x.z,y.x,y.y,y.z])}}},uh=s=>t=>{const e=new Xv({thing_t:s,renderer:t});return{update_scene:e.update_scene,camera:e.camera,resetter:e.resetter}},ms=s=>t=>{const e=[[{vertices:s,links:s.map(n=>null)}]];return uh(e)(t)},Wv=s=>uh(Dv[2])(s);class Xv{constructor({thing_t:t,renderer:e,layer_thickness:n=.01,background_color:i=0,edge_color:r=16777215,face_color:o=0,debug_geometry:a=!1,shrink_workspaces:c=!1}){it(this,"layer_thickness");it(this,"background_color");it(this,"edge_color");it(this,"face_color");it(this,"debug_geometry");it(this,"shrink_workspaces");it(this,"scene");it(this,"camera");it(this,"renderer");it(this,"controls");it(this,"prime_clip_planes",[]);it(this,"copy_clip_planes",[]);it(this,"thing_t");it(this,"facet_idx_to_template_coords");it(this,"template_coords_to_facet_idx");it(this,"prime_mesh_to_facet_idx");it(this,"prime_facets");it(this,"prime_edges");it(this,"prime_group");it(this,"copy_facets");it(this,"copy_edges");it(this,"copy_group");it(this,"active_edge",null);it(this,"fold_initial_facet_idx",-1);it(this,"fold_initial_edge_idx",-1);it(this,"fold_sign",null);it(this,"active_layers_near_idx",-1);it(this,"active_layers_far_idx",-1);it(this,"from_point",new A);it(this,"mid_point",new A);it(this,"to_point",new A);it(this,"p0",new A);it(this,"p1",new A);it(this,"hide_debug_geometry");it(this,"show_debug_geometry");it(this,"construct_thing",(t,e,n)=>{const i=new Vn,r=[],o=[],a=[];return t.forEach((c,l)=>c.forEach((u,d)=>{const f=new Yv({vertices:u.vertices,z_offset:l*this.layer_thickness,color:this.face_color,edge_color:this.edge_color,clipping_planes:e});r.push(f),a.push([l,d]),i.add(f.mesh),i.add(f.lines),u.links.forEach((h,p)=>{if(h===null)return;const[_,g,m]=h;if(_<0)return;const v=new Yu({p0:u.vertices[p],p1:u.vertices[(p+1)%u.vertices.length],thickness:_*this.layer_thickness,z_offset:l*this.layer_thickness,color:this.face_color,edge_color:this.edge_color,clipping_planes:e});o.push(v),i.add(v.mesh),i.add(v.lines)})})),n?(this.prime_facets=r,this.prime_edges=o,this.prime_mesh_to_facet_idx=new Map,this.facet_idx_to_template_coords=new Map,this.template_coords_to_facet_idx=new Map,r.forEach((c,l)=>{this.prime_mesh_to_facet_idx.set(c.mesh,l),this.facet_idx_to_template_coords.set(l,a[l]),this.template_coords_to_facet_idx.set(Hv(a[l]),l)})):(this.copy_facets=r,this.copy_edges=o),i});it(this,"rebuild_thing",t=>{this.prime_group&&this.copy_group&&(this.scene.remove(this.prime_group),this.prime_group=new Vn,this.scene.remove(this.copy_group),this.copy_group=new Vn),this.prime_group=this.construct_thing(t,this.prime_clip_planes,!0),this.copy_group=this.construct_thing(t,this.copy_clip_planes,!1),this.scene.add(this.prime_group),this.scene.add(this.copy_group),this.copy_group.visible=!1});it(this,"determine_fold_sign",()=>{const e=this.prime_facets[this.fold_initial_facet_idx].mesh.matrixWorld,i=new A(0,0,1).applyMatrix4(e).dot(this.controls.touchNormal);this.fold_sign=i>0?1:-1});it(this,"determine_fold_from_point",()=>{const t=this.prime_facets[this.fold_initial_facet_idx],e=[];t.vertices.forEach(a=>{const c=new A(a.x,a.y,0);c.applyMatrix4(t.mesh.matrixWorld),e.push(c)});let n=e[0];const i=this.controls.touchPoint;let r=n.distanceTo(i),o=0;for(let a=1;a<e.length+1;a++){const c=e[a%e.length].clone().sub(e[a-1]),l=i.clone().sub(e[a-1]),u=Lv(l.dot(c)/c.dot(c),0,1),d=c.clone().multiplyScalar(u).add(e[a-1]),f=d.distanceTo(i);f<r&&(r=f,n=d,o=a-1)}this.from_point.copy(n),this.fold_initial_edge_idx=o});it(this,"determine_active_facet_layers",()=>{const t=[],e=new Set,[n,i]=this.facet_idx_to_template_coords.get(this.fold_initial_facet_idx);for(this.active_layers_near_idx=n,this.active_layers_far_idx=n,this.thing_t[n][i].links[this.fold_initial_edge_idx]!==null&&t.push([n,i,this.fold_initial_edge_idx]);t.length>0;){const[o,a,c]=t.pop(),l=`${o}-${a}-${c}`;if(e.has(l)){console.error(`Malformed thing template. Cycle detected at layer ${o}, facet ${a}, edge ${c}`);continue}if(e.add(l),o<0||o>=this.thing_t.length){console.error(`Malformed thing template. Invalid layer index: ${o}`);continue}if(this.thing_t[o][a].links[c]===null){console.error(`Malformed thing template. No link found for layer ${o}, facet ${a}, edge ${c}`);continue}const[u,d,f]=this.thing_t[o][a].links[c],h=o+u,p=this.thing_t[h][d].links;console.assert(p[f][0]===-u,"Invalid link direction"),console.assert(p[f][1]===a,"Invalid connected facet index"),console.assert(p[f][2]===c,"Invalid connected edge index"),u*this.fold_sign>0?this.fold_sign*h>this.fold_sign*this.active_layers_near_idx&&(this.active_layers_near_idx=h):this.fold_sign*h<this.fold_sign*this.active_layers_far_idx&&(this.active_layers_far_idx=h)}this.fold_sign===1?this.active_layers_near_idx=this.thing_t.length-1:this.active_layers_near_idx=0,console.log("active_layers_near_idx",this.active_layers_near_idx),console.log("active_layers_far_idx",this.active_layers_far_idx)});it(this,"hide_facets_below_active_layer",(t,e)=>{t.forEach((n,i)=>{const[r,o]=this.facet_idx_to_template_coords.get(i),a=this.fold_sign*(r-this.active_layers_near_idx)>0;n.mesh.visible=a,n.lines.visible=a}),t[this.fold_initial_facet_idx].mesh.visible=!0,t[this.fold_initial_facet_idx].lines.visible=!0,e.forEach((n,i)=>{})});it(this,"update_midpoint",()=>{this.mid_point.copy(this.from_point).lerp(this.to_point,.5)});it(this,"fit_to_workspace_obstacles",()=>{const t=this.prime_facets[this.fold_initial_facet_idx],e=t.mesh.matrixWorld.clone().invert();let n;n=this.from_point.clone().applyMatrix4(e);const i=new G(n.x,n.y);n=this.to_point.clone().applyMatrix4(e);const r=new G(n.x,n.y);let o,a;this.shrink_workspaces?([o,[a]]=Vv(t.vertices,.95,[i]),o.push(a.clone().lerp(i,2))):(o=t.vertices,a=i);let c=1/0,l=null,u=1/0,d=null;for(let f of o){const h=f.distanceTo(a),p=r.distanceTo(f);if(p<h)return;p-h<u&&(u=p-h,d=r.clone().sub(f).normalize().multiplyScalar(h).add(f));const _=kv(a,r,f,h);if(_.length!==0)for(let g of _){const m=g.distanceTo(r);m<c&&(c=m,l=g)}}l===null&&(l=d),n=new A(l.x,l.y,0),this.to_point.copy(n.applyMatrix4(t.mesh.matrixWorld)),this.mid_point.copy(this.from_point).lerp(this.to_point,.5)});it(this,"fit_to_edge_obstacles",()=>{});it(this,"transform_copy_group",()=>{if(this.from_point.clone().sub(this.to_point).lengthSq()<.001)return;const t=this.to_point.clone().sub(this.from_point).normalize(),e=new A().crossVectors(t,this.controls.touchNormal).normalize();this.copy_group.position.copy(this.prime_group.position),this.copy_group.rotation.copy(this.prime_group.rotation);const n=new Pt;n.makeRotationAxis(e,Math.PI),this.copy_group.position.sub(this.mid_point),this.copy_group.applyMatrix4(n),this.copy_group.position.add(this.mid_point),this.copy_group.position.add(this.controls.touchNormal.clone().multiplyScalar(this.layer_thickness*this.determine_fold_height())),this.update_clipping_planes(),this.update_active_edge()});it(this,"update_clipping_planes",()=>{const t=this.to_point.clone().sub(this.from_point).normalize(),e=-this.mid_point.dot(t);this.prime_clip_planes[0].normal.copy(t),this.prime_clip_planes[0].constant=e,this.copy_clip_planes[0].normal.copy(t),this.copy_clip_planes[0].constant=e});it(this,"disable_clipping_planes",()=>{this.prime_clip_planes[0].constant=1e3,this.copy_clip_planes[0].constant=1e3});it(this,"update_active_edge",()=>{if(this.delete_active_edge(),this.compute_fold_endpoints(),this.p0.clone().sub(this.p1).lengthSq()<.001)return;const t=this.prime_facets[this.fold_initial_facet_idx].mesh.matrixWorld,e=t.clone().invert(),n=this.p0.clone().applyMatrix4(e),i=this.p1.clone().applyMatrix4(e);this.active_edge=new Yu({p1:[n.x,n.y],p0:[i.x,i.y],thickness:this.fold_sign*this.layer_thickness*this.determine_fold_height(),z_offset:0,color:this.face_color,edge_color:this.edge_color,clipping_planes:[]}),this.active_edge.mesh.applyMatrix4(t),this.active_edge.lines.applyMatrix4(t),this.active_edge.add_to_scene(this.scene)});it(this,"delete_active_edge",()=>{this.active_edge&&(this.scene.remove(this.active_edge.mesh),this.scene.remove(this.active_edge.lines),this.active_edge=null)});it(this,"compute_fold_endpoints",()=>{const t=this.prime_facets[this.fold_initial_facet_idx],e=t.vertices.map(p=>new G(p.x,p.y)),n=t.mesh.matrixWorld.clone().invert(),i=this.mid_point.clone().applyMatrix4(n),r=this.from_point.clone().applyMatrix4(n),o=this.to_point.clone().applyMatrix4(n),a=r.clone().sub(o).normalize(),c=new G(i.x,i.y),l=new G(-a.y,a.x),u=[c,c.clone().add(l)],d=[];for(let p=1;p<e.length+1;p++){const _=e[p-1],g=e[p%e.length],m=zv([_,g],u);m!==null&&d.push(m)}if(d.length<2){this.delete_active_edge(),this.p0=new A,this.p1=new A;return}d.length>2&&console.error("More than 2 intersections found");const[f,h]=d;this.p0=new A(f.x,f.y,0),this.p1=new A(h.x,h.y,0),this.p0.applyMatrix4(t.mesh.matrixWorld),this.p1.applyMatrix4(t.mesh.matrixWorld)});it(this,"determine_fold_height",()=>{const[t,e]=this.facet_idx_to_template_coords.get(this.fold_initial_facet_idx);return this.fold_sign===null?(console.error("fold sign not determined"),0):this.fold_sign===1?this.thing_t.length-t:t+1});it(this,"on_press",()=>{this.on_release(),this.copy_group.visible=!0,this.fold_initial_facet_idx=this.prime_mesh_to_facet_idx.get(this.controls.touchMesh),this.determine_fold_sign(),this.determine_fold_from_point(),this.determine_active_facet_layers(),this.hide_facets_below_active_layer(this.copy_facets,this.prime_edges),this.on_move()});it(this,"on_move",()=>{this.to_point.copy(this.controls.touchPoint),this.update_midpoint(),this.transform_copy_group()});it(this,"on_release",()=>{this.fold_initial_facet_idx=-1,this.fold_initial_edge_idx=-1,this.active_layers_near_idx=-1,this.active_layers_far_idx=-1,this.fold_sign=null,this.copy_group.visible=!1,this.disable_clipping_planes(),this.delete_active_edge()});it(this,"update_scene",()=>{this.controls.isInteracting?this.show_debug_geometry(this.from_point,this.mid_point,this.to_point,this.p0,this.p1):this.hide_debug_geometry(),this.renderer.render(this.scene,this.camera)});it(this,"resetter",()=>{this.controls.dispose()});this.thing_t=t,this.layer_thickness=n,this.background_color=i,this.edge_color=r,this.face_color=o,this.debug_geometry=a,this.shrink_workspaces=c,this.renderer=e,this.scene=new Rs,this.scene.background=new ft(this.background_color),this.camera=new ge(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=15,this.renderer.localClippingEnabled=!0,this.renderer.clippingPlanes=[],this.prime_clip_planes.push(new gn(new A(0,1,0).normalize(),0)),this.copy_clip_planes.push(new gn(new A(0,1,0).normalize(),0)),this.disable_clipping_planes();const{hide_debug_geometry:l,show_debug_geometry:u}=Gv(this.scene,this.debug_geometry);this.hide_debug_geometry=l,this.show_debug_geometry=u,this.rebuild_thing(this.thing_t),this.controls=new ch({camera:this.camera,scene:this.scene,domElement:this.renderer.domElement,getInteractables:()=>this.prime_facets.map(d=>d.mesh),onPress:this.on_press,onMove:this.on_move,faceBounded:!1,showPlane:!1})}}class Yv{constructor({vertices:t,z_offset:e=0,color:n,edge_color:i,clipping_planes:r}){it(this,"vertices");it(this,"mesh");it(this,"lines");this.vertices=t.map(([d,f])=>new G(d,f));const o=new Xn(this.vertices),a=new Is(o),c=new Oe({color:n,side:Ke,clippingPlanes:r});this.mesh=new ee(a,c),this.mesh.position.z=e;const l=new Jo;l.setPositions([...this.vertices,this.vertices[0]].map(d=>[d.x,d.y,e]).flat());const u=new U0({color:i,linewidth:2,clippingPlanes:r});u.resolution.set(window.innerWidth,window.innerHeight),this.lines=new tl(l,u)}add_to_scene(t){t.add(this.mesh),t.add(this.lines)}}class Yu{constructor({p0:t,p1:e,thickness:n,z_offset:i,color:r,edge_color:o,clipping_planes:a}){it(this,"mesh");it(this,"lines");const c=new Wt,l=new Float32Array([t[0],t[1],i+n,t[0],t[1],i,e[0],e[1],i,e[0],e[1],i+n]);c.setIndex([0,1,2,2,3,0]),c.setAttribute("position",new ne(l,3));const u=new Oe({color:r,side:Ke,clippingPlanes:a});this.mesh=new ee(c,u);const d=new Jo;d.setPositions([...l,...l.slice(0,3)]);const f=new U0({color:o,linewidth:2,clippingPlanes:a});f.resolution.set(window.innerWidth,window.innerHeight),this.lines=new tl(d,f)}add_to_scene(t){t.add(this.mesh),t.add(this.lines)}}const qv=ms([[-1.75,1],[1.75,1],[1.75,-1],[-1.75,-1]]),Zv=["sheet0.png"],$v=[{id:87,width:51,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:42.798,chnl:15,x:0,y:0,page:0},{id:109,width:50,height:32,xoffset:0,yoffset:6.969999999999999,xadvance:42.462,chnl:15,x:0,y:41,page:0},{id:64,width:48,height:47,xoffset:0,yoffset:-.9679999999999964,xadvance:44.142,chnl:15,x:0,y:75,page:0},{id:81,width:34,height:48,xoffset:0,yoffset:-.8000000000000043,xadvance:30.072000000000003,chnl:15,x:0,y:124,page:0},{id:124,width:12,height:48,xoffset:0,yoffset:-3.740000000000002,xadvance:9.786000000000001,chnl:15,x:0,y:174,page:0},{id:40,width:18,height:47,xoffset:0,yoffset:-1.6400000000000006,xadvance:11.592,chnl:15,x:0,y:224,page:0},{id:41,width:18,height:47,xoffset:0,yoffset:-1.6400000000000006,xadvance:11.760000000000002,chnl:15,x:0,y:273,page:0},{id:123,width:22,height:47,xoffset:0,yoffset:-1.6400000000000006,xadvance:14.868,chnl:15,x:0,y:322,page:0},{id:125,width:22,height:47,xoffset:0,yoffset:-1.6400000000000006,xadvance:14.868,chnl:15,x:0,y:371,page:0},{id:36,width:31,height:46,xoffset:0,yoffset:-3.6980000000000004,xadvance:27.3,chnl:15,x:0,y:420,page:0},{id:47,width:29,height:46,xoffset:0,yoffset:-3.8659999999999997,xadvance:17.598000000000003,chnl:15,x:33,y:420,page:0},{id:74,width:21,height:46,xoffset:0,yoffset:-.42200000000000415,xadvance:14.112,chnl:15,x:64,y:420,page:0},{id:77,width:46,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:39.858000000000004,chnl:15,x:0,y:468,page:0},{id:92,width:29,height:46,xoffset:0,yoffset:-3.8659999999999997,xadvance:17.598000000000003,chnl:15,x:87,y:420,page:0},{id:106,width:18,height:46,xoffset:0,yoffset:-.33800000000000097,xadvance:11.214,chnl:15,x:118,y:420,page:0},{id:91,width:19,height:45,xoffset:0,yoffset:-.7580000000000027,xadvance:13.776000000000002,chnl:15,x:138,y:420,page:0},{id:93,width:19,height:45,xoffset:0,yoffset:-.7580000000000027,xadvance:13.776000000000002,chnl:15,x:159,y:420,page:0},{id:119,width:45,height:32,xoffset:0,yoffset:7.474,xadvance:36.75,chnl:15,x:48,y:468,page:0},{id:37,width:43,height:40,xoffset:0,yoffset:-.8840000000000003,xadvance:37.002,chnl:15,x:180,y:420,page:0},{id:65,width:41,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:33.264,chnl:15,x:225,y:420,page:0},{id:33,width:14,height:40,xoffset:0,yoffset:-.42200000000000415,xadvance:9.324,chnl:15,x:24,y:371,page:0},{id:38,width:38,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:31.164,chnl:15,x:40,y:371,page:0},{id:48,width:31,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:27.216,chnl:15,x:80,y:371,page:0},{id:49,width:23,height:40,xoffset:0,yoffset:-.5480000000000018,xadvance:16.002000000000002,chnl:15,x:113,y:371,page:0},{id:50,width:29,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:25.242,chnl:15,x:138,y:371,page:0},{id:51,width:29,height:40,xoffset:0,yoffset:-.7580000000000027,xadvance:24.066000000000003,chnl:15,x:169,y:371,page:0},{id:53,width:30,height:40,xoffset:0,yoffset:-.42200000000000415,xadvance:23.94,chnl:15,x:200,y:371,page:0},{id:54,width:31,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:25.662000000000003,chnl:15,x:232,y:371,page:0},{id:56,width:33,height:40,xoffset:0,yoffset:-.7160000000000011,xadvance:27.846,chnl:15,x:265,y:371,page:0},{id:57,width:31,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:25.662000000000003,chnl:15,x:300,y:371,page:0},{id:63,width:28,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:20.916,chnl:15,x:333,y:371,page:0},{id:67,width:32,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:27.468,chnl:15,x:363,y:371,page:0},{id:71,width:33,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:29.274,chnl:15,x:397,y:371,page:0},{id:72,width:40,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:33.264,chnl:15,x:268,y:420,page:0},{id:78,width:40,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:33.012,chnl:15,x:310,y:420,page:0},{id:79,width:34,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:30.072000000000003,chnl:15,x:432,y:371,page:0},{id:83,width:31,height:40,xoffset:0,yoffset:-.8000000000000043,xadvance:27.3,chnl:15,x:468,y:371,page:0},{id:85,width:39,height:40,xoffset:0,yoffset:-.42200000000000415,xadvance:32.256,chnl:15,x:24,y:322,page:0},{id:86,width:40,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:31.626,chnl:15,x:352,y:420,page:0},{id:98,width:31,height:40,xoffset:0,yoffset:-.42200000000000415,xadvance:25.494000000000003,chnl:15,x:65,y:322,page:0},{id:100,width:32,height:40,xoffset:0,yoffset:-.42200000000000415,xadvance:25.158,chnl:15,x:98,y:322,page:0},{id:102,width:23,height:40,xoffset:0,yoffset:-1.3459999999999965,xadvance:15.876000000000001,chnl:15,x:132,y:322,page:0},{id:35,width:36,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:27.762,chnl:15,x:394,y:420,page:0},{id:52,width:33,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:25.326,chnl:15,x:432,y:420,page:0},{id:55,width:31,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:23.604000000000003,chnl:15,x:467,y:420,page:0},{id:66,width:34,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:28.518,chnl:15,x:157,y:322,page:0},{id:68,width:36,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:30.618000000000002,chnl:15,x:193,y:322,page:0},{id:69,width:33,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:27.090000000000003,chnl:15,x:231,y:322,page:0},{id:70,width:33,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:26.25,chnl:15,x:266,y:322,page:0},{id:73,width:20,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:13.860000000000001,chnl:15,x:301,y:322,page:0},{id:75,width:39,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:31.542,chnl:15,x:323,y:322,page:0},{id:76,width:33,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:26.208000000000002,chnl:15,x:364,y:322,page:0},{id:80,width:34,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:27.552000000000003,chnl:15,x:399,y:322,page:0},{id:82,width:36,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:29.022000000000002,chnl:15,x:435,y:322,page:0},{id:84,width:36,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:28.728,chnl:15,x:473,y:322,page:0},{id:88,width:38,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:29.400000000000002,chnl:15,x:20,y:273,page:0},{id:89,width:38,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:29.694000000000003,chnl:15,x:60,y:273,page:0},{id:90,width:32,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:26.376,chnl:15,x:100,y:273,page:0},{id:103,width:33,height:39,xoffset:0,yoffset:6.969999999999999,xadvance:26.292,chnl:15,x:134,y:273,page:0},{id:104,width:35,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:28.098000000000003,chnl:15,x:169,y:273,page:0},{id:105,width:20,height:39,xoffset:0,yoffset:-.33800000000000097,xadvance:12.474,chnl:15,x:206,y:273,page:0},{id:107,width:33,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:26.46,chnl:15,x:228,y:273,page:0},{id:108,width:20,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:12.936,chnl:15,x:263,y:273,page:0},{id:112,width:32,height:39,xoffset:0,yoffset:6.969999999999999,xadvance:25.872,chnl:15,x:285,y:273,page:0},{id:113,width:31,height:39,xoffset:0,yoffset:6.969999999999999,xadvance:24.864,chnl:15,x:319,y:273,page:0},{id:126,width:39,height:39,xoffset:0,yoffset:-.42200000000000415,xadvance:28.686000000000003,chnl:15,x:352,y:273,page:0},{id:116,width:23,height:38,xoffset:0,yoffset:.9220000000000041,xadvance:16.296,chnl:15,x:393,y:273,page:0},{id:121,width:36,height:38,xoffset:0,yoffset:7.474,xadvance:27.384,chnl:15,x:418,y:273,page:0},{id:59,width:15,height:37,xoffset:0,yoffset:7.263999999999999,xadvance:8.022,chnl:15,x:456,y:273,page:0},{id:110,width:35,height:32,xoffset:0,yoffset:6.969999999999999,xadvance:28.098000000000003,chnl:15,x:95,y:468,page:0},{id:117,width:35,height:32,xoffset:0,yoffset:7.474,xadvance:28.056,chnl:15,x:132,y:468,page:0},{id:118,width:35,height:32,xoffset:0,yoffset:7.474,xadvance:26.502000000000002,chnl:15,x:169,y:468,page:0},{id:95,width:34,height:12,xoffset:0,yoffset:33.556000000000004,xadvance:23.646,chnl:15,x:206,y:468,page:0},{id:120,width:33,height:32,xoffset:0,yoffset:7.474,xadvance:24.612000000000002,chnl:15,x:473,y:273,page:0},{id:58,width:14,height:32,xoffset:0,yoffset:7.263999999999999,xadvance:8.022,chnl:15,x:20,y:224,page:0},{id:97,width:32,height:32,xoffset:0,yoffset:6.969999999999999,xadvance:25.242,chnl:15,x:36,y:224,page:0},{id:99,width:28,height:32,xoffset:0,yoffset:6.969999999999999,xadvance:22.512,chnl:15,x:70,y:224,page:0},{id:101,width:29,height:32,xoffset:0,yoffset:6.969999999999999,xadvance:23.688000000000002,chnl:15,x:100,y:224,page:0},{id:111,width:30,height:32,xoffset:0,yoffset:6.969999999999999,xadvance:24.654,chnl:15,x:131,y:224,page:0},{id:114,width:25,height:32,xoffset:0,yoffset:7.263999999999999,xadvance:18.27,chnl:15,x:163,y:224,page:0},{id:115,width:28,height:32,xoffset:0,yoffset:6.969999999999999,xadvance:22.470000000000002,chnl:15,x:190,y:224,page:0},{id:122,width:29,height:32,xoffset:0,yoffset:7.474,xadvance:23.184,chnl:15,x:220,y:224,page:0},{id:43,width:30,height:31,xoffset:0,yoffset:3.9460000000000015,xadvance:24.906000000000002,chnl:15,x:251,y:224,page:0},{id:60,width:29,height:30,xoffset:0,yoffset:4.282,xadvance:23.562,chnl:15,x:283,y:224,page:0},{id:62,width:29,height:30,xoffset:0,yoffset:4.282,xadvance:23.562,chnl:15,x:314,y:224,page:0},{id:61,width:28,height:23,xoffset:0,yoffset:8.062000000000001,xadvance:23.184,chnl:15,x:345,y:224,page:0},{id:42,width:23,height:24,xoffset:0,yoffset:-.42200000000000415,xadvance:15.96,chnl:15,x:14,y:174,page:0},{id:94,width:24,height:19,xoffset:0,yoffset:-.5060000000000002,xadvance:16.338,chnl:15,x:375,y:224,page:0},{id:45,width:22,height:13,xoffset:0,yoffset:14.950000000000003,xadvance:15.666,chnl:15,x:206,y:482,page:0},{id:34,width:19,height:21,xoffset:0,yoffset:-.42200000000000415,xadvance:12.474,chnl:15,x:14,y:200,page:0},{id:39,width:13,height:21,xoffset:0,yoffset:-.42200000000000415,xadvance:7.140000000000001,chnl:15,x:35,y:200,page:0},{id:44,width:14,height:18,xoffset:0,yoffset:25.618000000000002,xadvance:7.854,chnl:15,x:401,y:224,page:0},{id:96,width:17,height:16,xoffset:0,yoffset:-1.7239999999999966,xadvance:21,chnl:15,x:417,y:224,page:0},{id:46,width:14,height:14,xoffset:0,yoffset:25.324,xadvance:8.022,chnl:15,x:436,y:224,page:0},{id:32,width:0,height:0,xoffset:0,yoffset:28.978,xadvance:10.332,chnl:15,x:0,y:509,page:0}],Kv={face:"☞Quadon",size:42,bold:0,italic:0,charset:[" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],unicode:1,stretchH:100,smooth:1,aa:1,padding:[0,0,0,0],spacing:[2,2]},Jv={lineHeight:50.400000000000006,base:33.978,scaleW:512,scaleH:512,pages:1,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},jv=[{first:34,second:52,amount:-2.1},{first:34,second:55,amount:.8400000000000001},{first:34,second:65,amount:-3.3600000000000003},{first:34,second:74,amount:-.42000000000000004},{first:34,second:97,amount:-1.6800000000000002},{first:34,second:99,amount:-1.6800000000000002},{first:34,second:100,amount:-1.6800000000000002},{first:34,second:101,amount:-1.6800000000000002},{first:34,second:102,amount:-.21000000000000002},{first:34,second:103,amount:-2.52},{first:34,second:111,amount:-1.6800000000000002},{first:34,second:113,amount:-1.6800000000000002},{first:34,second:115,amount:-1.26},{first:36,second:42,amount:-.21000000000000002},{first:36,second:44,amount:-.21000000000000002},{first:36,second:46,amount:-.21000000000000002},{first:36,second:47,amount:-.8400000000000001},{first:36,second:49,amount:-.42000000000000004},{first:36,second:60,amount:-.21000000000000002},{first:36,second:62,amount:-.21000000000000002},{first:36,second:63,amount:-.8400000000000001},{first:36,second:65,amount:-.8400000000000001},{first:36,second:66,amount:-.42000000000000004},{first:36,second:68,amount:-.42000000000000004},{first:36,second:69,amount:-.42000000000000004},{first:36,second:70,amount:-.42000000000000004},{first:36,second:72,amount:-.42000000000000004},{first:36,second:73,amount:-.42000000000000004},{first:36,second:74,amount:-1.6800000000000002},{first:36,second:75,amount:-.42000000000000004},{first:36,second:76,amount:-.42000000000000004},{first:36,second:77,amount:-.42000000000000004},{first:36,second:78,amount:-.42000000000000004},{first:36,second:80,amount:-.42000000000000004},{first:36,second:82,amount:-.42000000000000004},{first:36,second:84,amount:-.8400000000000001},{first:36,second:85,amount:-.8400000000000001},{first:36,second:86,amount:-.8400000000000001},{first:36,second:87,amount:-.8400000000000001},{first:36,second:88,amount:-.8400000000000001},{first:36,second:89,amount:-.8400000000000001},{first:36,second:90,amount:-.42000000000000004},{first:36,second:92,amount:-1.26},{first:36,second:94,amount:-.21000000000000002},{first:36,second:95,amount:-.21000000000000002},{first:36,second:96,amount:-.21000000000000002},{first:36,second:97,amount:-.504},{first:36,second:98,amount:-.8400000000000001},{first:36,second:99,amount:-.21000000000000002},{first:36,second:100,amount:-.21000000000000002},{first:36,second:101,amount:-.21000000000000002},{first:36,second:103,amount:-.8400000000000001},{first:36,second:104,amount:-.42000000000000004},{first:36,second:107,amount:-.63},{first:36,second:108,amount:-.42000000000000004},{first:36,second:109,amount:-.42000000000000004},{first:36,second:110,amount:-.42000000000000004},{first:36,second:111,amount:-.21000000000000002},{first:36,second:112,amount:-.42000000000000004},{first:36,second:113,amount:-.21000000000000002},{first:36,second:114,amount:-.42000000000000004},{first:36,second:116,amount:-.42000000000000004},{first:36,second:117,amount:-1.1760000000000002},{first:36,second:118,amount:-.42000000000000004},{first:36,second:119,amount:-.42000000000000004},{first:36,second:121,amount:-2.016},{first:36,second:124,amount:-.21000000000000002},{first:37,second:98,amount:-.42000000000000004},{first:38,second:55,amount:-1.26},{first:38,second:74,amount:-1.26},{first:38,second:85,amount:-1.6800000000000002},{first:38,second:86,amount:-2.1},{first:38,second:87,amount:-1.6800000000000002},{first:38,second:89,amount:-2.52},{first:38,second:97,amount:-.42000000000000004},{first:38,second:98,amount:-1.26},{first:38,second:99,amount:-.42000000000000004},{first:38,second:100,amount:-.42000000000000004},{first:38,second:101,amount:-.42000000000000004},{first:38,second:103,amount:-.42000000000000004},{first:38,second:104,amount:-.42000000000000004},{first:38,second:108,amount:-.42000000000000004},{first:38,second:111,amount:-.42000000000000004},{first:38,second:113,amount:-.42000000000000004},{first:38,second:117,amount:-.63},{first:39,second:52,amount:-2.1},{first:39,second:55,amount:.8400000000000001},{first:39,second:65,amount:-3.3600000000000003},{first:39,second:74,amount:-.42000000000000004},{first:39,second:97,amount:-1.6800000000000002},{first:39,second:99,amount:-1.6800000000000002},{first:39,second:100,amount:-1.6800000000000002},{first:39,second:101,amount:-1.6800000000000002},{first:39,second:102,amount:-.21000000000000002},{first:39,second:103,amount:-2.52},{first:39,second:111,amount:-1.6800000000000002},{first:39,second:113,amount:-1.6800000000000002},{first:39,second:115,amount:-1.26},{first:40,second:54,amount:-1.26},{first:40,second:67,amount:-1.26},{first:40,second:71,amount:-1.26},{first:40,second:79,amount:-1.26},{first:40,second:81,amount:-1.26},{first:40,second:91,amount:.8400000000000001},{first:40,second:97,amount:-2.3520000000000003},{first:40,second:99,amount:-1.6800000000000002},{first:40,second:100,amount:-1.6800000000000002},{first:40,second:101,amount:-1.6800000000000002},{first:40,second:103,amount:-.42000000000000004},{first:40,second:106,amount:.42000000000000004},{first:40,second:107,amount:-.42000000000000004},{first:40,second:111,amount:-1.6800000000000002},{first:40,second:113,amount:-1.6800000000000002},{first:40,second:117,amount:-1.6800000000000002},{first:40,second:118,amount:-2.1},{first:41,second:44,amount:1.26},{first:41,second:46,amount:1.26},{first:41,second:99,amount:.8400000000000001},{first:41,second:100,amount:.8400000000000001},{first:41,second:101,amount:.8400000000000001},{first:41,second:111,amount:.8400000000000001},{first:41,second:113,amount:.8400000000000001},{first:42,second:42,amount:.42000000000000004},{first:42,second:44,amount:-.42000000000000004},{first:42,second:46,amount:-.42000000000000004},{first:42,second:60,amount:.42000000000000004},{first:42,second:62,amount:.42000000000000004},{first:42,second:65,amount:-1.26},{first:42,second:74,amount:-.42000000000000004},{first:42,second:90,amount:.8400000000000001},{first:42,second:94,amount:.42000000000000004},{first:42,second:95,amount:.42000000000000004},{first:42,second:96,amount:.42000000000000004},{first:42,second:97,amount:-1.6800000000000002},{first:42,second:99,amount:-.42000000000000004},{first:42,second:100,amount:-.42000000000000004},{first:42,second:101,amount:-.42000000000000004},{first:42,second:103,amount:-1.26},{first:42,second:107,amount:-.42000000000000004},{first:42,second:111,amount:-.42000000000000004},{first:42,second:113,amount:-.42000000000000004},{first:42,second:117,amount:.42000000000000004},{first:42,second:122,amount:-.42000000000000004},{first:42,second:124,amount:.42000000000000004},{first:43,second:49,amount:-.42000000000000004},{first:43,second:50,amount:-.42000000000000004},{first:43,second:51,amount:-.42000000000000004},{first:43,second:66,amount:-.42000000000000004},{first:43,second:68,amount:-.42000000000000004},{first:43,second:69,amount:-.42000000000000004},{first:43,second:70,amount:-.42000000000000004},{first:43,second:72,amount:-.42000000000000004},{first:43,second:73,amount:-.42000000000000004},{first:43,second:75,amount:-.42000000000000004},{first:43,second:76,amount:-.42000000000000004},{first:43,second:77,amount:-.42000000000000004},{first:43,second:78,amount:-.42000000000000004},{first:43,second:80,amount:-.42000000000000004},{first:43,second:82,amount:-.42000000000000004},{first:43,second:98,amount:-.42000000000000004},{first:43,second:99,amount:.42000000000000004},{first:43,second:100,amount:.42000000000000004},{first:43,second:101,amount:.42000000000000004},{first:43,second:111,amount:.42000000000000004},{first:43,second:113,amount:.42000000000000004},{first:44,second:40,amount:1.26},{first:44,second:52,amount:-.42000000000000004},{first:44,second:54,amount:-1.26},{first:44,second:55,amount:-3.7800000000000002},{first:44,second:57,amount:-.8400000000000001},{first:44,second:67,amount:-1.26},{first:44,second:71,amount:-1.26},{first:44,second:79,amount:-1.26},{first:44,second:81,amount:-1.26},{first:44,second:84,amount:-3.3600000000000003},{first:44,second:85,amount:-1.6800000000000002},{first:44,second:86,amount:-5.04},{first:44,second:87,amount:-4.2},{first:44,second:89,amount:-4.62},{first:44,second:98,amount:-.42000000000000004},{first:44,second:99,amount:-.8400000000000001},{first:44,second:100,amount:-.8400000000000001},{first:44,second:101,amount:-.8400000000000001},{first:44,second:103,amount:-1.6800000000000002},{first:44,second:106,amount:-.8400000000000001},{first:44,second:107,amount:-.42000000000000004},{first:44,second:111,amount:-.8400000000000001},{first:44,second:112,amount:-1.6800000000000002},{first:44,second:113,amount:-.8400000000000001},{first:44,second:116,amount:-2.1},{first:44,second:117,amount:-1.6800000000000002},{first:44,second:118,amount:-3.7800000000000002},{first:44,second:119,amount:-2.52},{first:44,second:121,amount:-3.3600000000000003},{first:45,second:49,amount:-.42000000000000004},{first:45,second:51,amount:-.8400000000000001},{first:45,second:54,amount:.42000000000000004},{first:45,second:55,amount:-3.7800000000000002},{first:45,second:65,amount:-2.1},{first:45,second:66,amount:-.42000000000000004},{first:45,second:67,amount:.42000000000000004},{first:45,second:68,amount:-.42000000000000004},{first:45,second:69,amount:-.42000000000000004},{first:45,second:70,amount:-.42000000000000004},{first:45,second:71,amount:.42000000000000004},{first:45,second:72,amount:-.42000000000000004},{first:45,second:73,amount:-.42000000000000004},{first:45,second:74,amount:-1.6800000000000002},{first:45,second:75,amount:-.42000000000000004},{first:45,second:76,amount:-.42000000000000004},{first:45,second:77,amount:-.42000000000000004},{first:45,second:78,amount:-.42000000000000004},{first:45,second:79,amount:.42000000000000004},{first:45,second:80,amount:-.42000000000000004},{first:45,second:81,amount:.42000000000000004},{first:45,second:82,amount:-.42000000000000004},{first:45,second:84,amount:-4.2},{first:45,second:85,amount:-.8400000000000001},{first:45,second:86,amount:-1.6800000000000002},{first:45,second:87,amount:-1.26},{first:45,second:88,amount:-2.1},{first:45,second:89,amount:-2.52},{first:45,second:103,amount:-.8400000000000001},{first:45,second:104,amount:-.8400000000000001},{first:45,second:108,amount:-.8400000000000001},{first:46,second:40,amount:1.26},{first:46,second:52,amount:-.42000000000000004},{first:46,second:54,amount:-1.26},{first:46,second:55,amount:-3.7800000000000002},{first:46,second:57,amount:-.8400000000000001},{first:46,second:67,amount:-1.26},{first:46,second:71,amount:-1.26},{first:46,second:79,amount:-1.26},{first:46,second:81,amount:-1.26},{first:46,second:84,amount:-3.3600000000000003},{first:46,second:85,amount:-1.6800000000000002},{first:46,second:86,amount:-5.04},{first:46,second:87,amount:-4.2},{first:46,second:89,amount:-4.62},{first:46,second:98,amount:-.42000000000000004},{first:46,second:99,amount:-.8400000000000001},{first:46,second:100,amount:-.8400000000000001},{first:46,second:101,amount:-.8400000000000001},{first:46,second:103,amount:-1.6800000000000002},{first:46,second:106,amount:-.8400000000000001},{first:46,second:107,amount:-.42000000000000004},{first:46,second:111,amount:-.8400000000000001},{first:46,second:112,amount:-1.6800000000000002},{first:46,second:113,amount:-.8400000000000001},{first:46,second:116,amount:-2.1},{first:46,second:117,amount:-1.6800000000000002},{first:46,second:118,amount:-3.7800000000000002},{first:46,second:119,amount:-2.52},{first:46,second:121,amount:-3.3600000000000003},{first:47,second:36,amount:-2.52},{first:47,second:54,amount:-2.9400000000000004},{first:47,second:65,amount:-4.2},{first:47,second:67,amount:-2.9400000000000004},{first:47,second:71,amount:-2.9400000000000004},{first:47,second:74,amount:-1.26},{first:47,second:79,amount:-2.9400000000000004},{first:47,second:81,amount:-2.9400000000000004},{first:47,second:83,amount:-2.52},{first:47,second:97,amount:-4.62},{first:47,second:99,amount:-3.7800000000000002},{first:47,second:100,amount:-3.7800000000000002},{first:47,second:101,amount:-3.7800000000000002},{first:47,second:102,amount:-2.1},{first:47,second:103,amount:-5.04},{first:47,second:105,amount:-1.6800000000000002},{first:47,second:106,amount:-2.1},{first:47,second:107,amount:-.8400000000000001},{first:47,second:109,amount:-2.52},{first:47,second:110,amount:-2.52},{first:47,second:111,amount:-3.7800000000000002},{first:47,second:112,amount:-1.6800000000000002},{first:47,second:113,amount:-3.7800000000000002},{first:47,second:114,amount:-2.52},{first:47,second:115,amount:-3.7800000000000002},{first:47,second:116,amount:-2.9400000000000004},{first:47,second:117,amount:-2.9400000000000004},{first:47,second:118,amount:-1.6800000000000002},{first:47,second:119,amount:-2.1},{first:47,second:122,amount:-3.7800000000000002},{first:48,second:37,amount:.8400000000000001},{first:48,second:48,amount:.8400000000000001},{first:48,second:54,amount:1.26},{first:48,second:67,amount:1.26},{first:48,second:71,amount:1.26},{first:48,second:79,amount:1.26},{first:48,second:81,amount:1.26},{first:48,second:99,amount:.42000000000000004},{first:48,second:100,amount:.42000000000000004},{first:48,second:101,amount:.42000000000000004},{first:48,second:111,amount:.42000000000000004},{first:48,second:113,amount:.42000000000000004},{first:49,second:37,amount:-.8400000000000001},{first:49,second:42,amount:-.42000000000000004},{first:49,second:43,amount:-.8400000000000001},{first:49,second:45,amount:-1.6800000000000002},{first:49,second:49,amount:-.42000000000000004},{first:49,second:52,amount:-2.52},{first:49,second:54,amount:-.21000000000000002},{first:49,second:60,amount:-.42000000000000004},{first:49,second:61,amount:-.8400000000000001},{first:49,second:62,amount:-.42000000000000004},{first:49,second:66,amount:-.42000000000000004},{first:49,second:67,amount:-.21000000000000002},{first:49,second:68,amount:-.42000000000000004},{first:49,second:69,amount:-.42000000000000004},{first:49,second:70,amount:-.42000000000000004},{first:49,second:71,amount:-.21000000000000002},{first:49,second:72,amount:-.42000000000000004},{first:49,second:73,amount:-.42000000000000004},{first:49,second:74,amount:-.8400000000000001},{first:49,second:75,amount:-.42000000000000004},{first:49,second:76,amount:-.42000000000000004},{first:49,second:77,amount:-.42000000000000004},{first:49,second:78,amount:-.42000000000000004},{first:49,second:79,amount:-.21000000000000002},{first:49,second:80,amount:-.42000000000000004},{first:49,second:81,amount:-.21000000000000002},{first:49,second:82,amount:-.42000000000000004},{first:49,second:94,amount:-.42000000000000004},{first:49,second:95,amount:-.42000000000000004},{first:49,second:96,amount:-.42000000000000004},{first:49,second:97,amount:-.756},{first:49,second:98,amount:-.63},{first:49,second:99,amount:-.63},{first:49,second:100,amount:-.63},{first:49,second:101,amount:-.63},{first:49,second:103,amount:-1.26},{first:49,second:105,amount:-.42000000000000004},{first:49,second:106,amount:-.42000000000000004},{first:49,second:107,amount:-.21000000000000002},{first:49,second:111,amount:-.63},{first:49,second:112,amount:-.42000000000000004},{first:49,second:113,amount:-.63},{first:49,second:116,amount:-.63},{first:49,second:117,amount:-.63},{first:49,second:118,amount:-.42000000000000004},{first:49,second:119,amount:-.5880000000000001},{first:49,second:124,amount:-.42000000000000004},{first:50,second:52,amount:-1.26},{first:50,second:56,amount:-.756},{first:51,second:37,amount:-.42000000000000004},{first:51,second:41,amount:-1.6800000000000002},{first:51,second:42,amount:-.42000000000000004},{first:51,second:44,amount:-.42000000000000004},{first:51,second:46,amount:-.42000000000000004},{first:51,second:48,amount:.42000000000000004},{first:51,second:49,amount:-.42000000000000004},{first:51,second:54,amount:.63},{first:51,second:55,amount:-.252},{first:51,second:60,amount:-.42000000000000004},{first:51,second:62,amount:-.42000000000000004},{first:51,second:65,amount:-.42000000000000004},{first:51,second:66,amount:-.42000000000000004},{first:51,second:67,amount:.63},{first:51,second:68,amount:-.42000000000000004},{first:51,second:69,amount:-.42000000000000004},{first:51,second:70,amount:-.42000000000000004},{first:51,second:71,amount:.63},{first:51,second:72,amount:-.42000000000000004},{first:51,second:73,amount:-.42000000000000004},{first:51,second:75,amount:-.42000000000000004},{first:51,second:76,amount:-.42000000000000004},{first:51,second:77,amount:-.42000000000000004},{first:51,second:78,amount:-.42000000000000004},{first:51,second:79,amount:.63},{first:51,second:80,amount:-.42000000000000004},{first:51,second:81,amount:.63},{first:51,second:82,amount:-.42000000000000004},{first:51,second:86,amount:-.8400000000000001},{first:51,second:87,amount:-.42000000000000004},{first:51,second:88,amount:-.42000000000000004},{first:51,second:92,amount:-2.1},{first:51,second:93,amount:-.42000000000000004},{first:51,second:94,amount:-.42000000000000004},{first:51,second:95,amount:-.42000000000000004},{first:51,second:96,amount:-.42000000000000004},{first:51,second:97,amount:-.42000000000000004},{first:51,second:98,amount:-.8400000000000001},{first:51,second:99,amount:-.7140000000000001},{first:51,second:100,amount:-.7140000000000001},{first:51,second:101,amount:-.7140000000000001},{first:51,second:103,amount:-.8400000000000001},{first:51,second:104,amount:-.21000000000000002},{first:51,second:106,amount:-.8400000000000001},{first:51,second:107,amount:-.21000000000000002},{first:51,second:108,amount:-.21000000000000002},{first:51,second:111,amount:-.7140000000000001},{first:51,second:112,amount:-.42000000000000004},{first:51,second:113,amount:-.7140000000000001},{first:51,second:116,amount:-.63},{first:51,second:117,amount:-.42000000000000004},{first:51,second:118,amount:-1.764},{first:51,second:119,amount:-.63},{first:51,second:124,amount:-.42000000000000004},{first:51,second:125,amount:-1.6800000000000002},{first:52,second:42,amount:-.42000000000000004},{first:52,second:44,amount:.42000000000000004},{first:52,second:46,amount:.42000000000000004},{first:52,second:48,amount:.8400000000000001},{first:52,second:58,amount:.42000000000000004},{first:52,second:59,amount:.42000000000000004},{first:52,second:60,amount:-.42000000000000004},{first:52,second:62,amount:-.42000000000000004},{first:52,second:94,amount:-.42000000000000004},{first:52,second:95,amount:-.42000000000000004},{first:52,second:96,amount:-.42000000000000004},{first:52,second:124,amount:-.42000000000000004},{first:53,second:48,amount:.42000000000000004},{first:54,second:48,amount:.42000000000000004},{first:54,second:55,amount:-.8400000000000001},{first:55,second:34,amount:.42000000000000004},{first:55,second:36,amount:-.42000000000000004},{first:55,second:37,amount:.42000000000000004},{first:55,second:38,amount:-.8400000000000001},{first:55,second:39,amount:.42000000000000004},{first:55,second:42,amount:.42000000000000004},{first:55,second:43,amount:-.42000000000000004},{first:55,second:44,amount:-2.9400000000000004},{first:55,second:45,amount:-1.26},{first:55,second:46,amount:-2.9400000000000004},{first:55,second:52,amount:-1.26},{first:55,second:54,amount:-.756},{first:55,second:56,amount:-1.3860000000000001},{first:55,second:60,amount:.42000000000000004},{first:55,second:61,amount:-.42000000000000004},{first:55,second:62,amount:.42000000000000004},{first:55,second:67,amount:-.756},{first:55,second:71,amount:-.756},{first:55,second:79,amount:-.756},{first:55,second:81,amount:-.756},{first:55,second:83,amount:-.42000000000000004},{first:55,second:93,amount:.42000000000000004},{first:55,second:94,amount:.42000000000000004},{first:55,second:95,amount:.42000000000000004},{first:55,second:96,amount:.42000000000000004},{first:55,second:97,amount:-1.26},{first:55,second:98,amount:-.42000000000000004},{first:55,second:99,amount:-.8400000000000001},{first:55,second:100,amount:-.8400000000000001},{first:55,second:101,amount:-.8400000000000001},{first:55,second:109,amount:-.42000000000000004},{first:55,second:110,amount:-.42000000000000004},{first:55,second:111,amount:-.8400000000000001},{first:55,second:113,amount:-.8400000000000001},{first:55,second:114,amount:-.42000000000000004},{first:55,second:124,amount:.42000000000000004},{first:56,second:37,amount:-.42000000000000004},{first:56,second:41,amount:-1.6800000000000002},{first:56,second:42,amount:-.42000000000000004},{first:56,second:44,amount:-.42000000000000004},{first:56,second:46,amount:-.42000000000000004},{first:56,second:48,amount:.42000000000000004},{first:56,second:49,amount:-.42000000000000004},{first:56,second:54,amount:.63},{first:56,second:55,amount:-.252},{first:56,second:60,amount:-.42000000000000004},{first:56,second:62,amount:-.42000000000000004},{first:56,second:65,amount:-.42000000000000004},{first:56,second:66,amount:-.42000000000000004},{first:56,second:67,amount:.63},{first:56,second:68,amount:-.42000000000000004},{first:56,second:69,amount:-.42000000000000004},{first:56,second:70,amount:-.42000000000000004},{first:56,second:71,amount:.63},{first:56,second:72,amount:-.42000000000000004},{first:56,second:73,amount:-.42000000000000004},{first:56,second:75,amount:-.42000000000000004},{first:56,second:76,amount:-.42000000000000004},{first:56,second:77,amount:-.42000000000000004},{first:56,second:78,amount:-.42000000000000004},{first:56,second:79,amount:.63},{first:56,second:80,amount:-.42000000000000004},{first:56,second:81,amount:.63},{first:56,second:82,amount:-.42000000000000004},{first:56,second:86,amount:-.8400000000000001},{first:56,second:87,amount:-.42000000000000004},{first:56,second:88,amount:-.42000000000000004},{first:56,second:92,amount:-2.1},{first:56,second:93,amount:-.42000000000000004},{first:56,second:94,amount:-.42000000000000004},{first:56,second:95,amount:-.42000000000000004},{first:56,second:96,amount:-.42000000000000004},{first:56,second:97,amount:-.42000000000000004},{first:56,second:98,amount:-.8400000000000001},{first:56,second:99,amount:-.7140000000000001},{first:56,second:100,amount:-.7140000000000001},{first:56,second:101,amount:-.7140000000000001},{first:56,second:103,amount:-.8400000000000001},{first:56,second:104,amount:-.21000000000000002},{first:56,second:106,amount:-.8400000000000001},{first:56,second:107,amount:-.21000000000000002},{first:56,second:108,amount:-.21000000000000002},{first:56,second:111,amount:-.7140000000000001},{first:56,second:112,amount:-.42000000000000004},{first:56,second:113,amount:-.7140000000000001},{first:56,second:116,amount:-.63},{first:56,second:117,amount:-.42000000000000004},{first:56,second:118,amount:-1.764},{first:56,second:119,amount:-.63},{first:56,second:124,amount:-.42000000000000004},{first:56,second:125,amount:-1.6800000000000002},{first:57,second:44,amount:-.42000000000000004},{first:57,second:46,amount:-.42000000000000004},{first:57,second:48,amount:.336},{first:58,second:85,amount:-.8400000000000001},{first:58,second:86,amount:-.8400000000000001},{first:58,second:87,amount:-.8400000000000001},{first:58,second:89,amount:-1.26},{first:58,second:103,amount:-.8400000000000001},{first:60,second:42,amount:.42000000000000004},{first:60,second:44,amount:-.42000000000000004},{first:60,second:46,amount:-.42000000000000004},{first:60,second:60,amount:.42000000000000004},{first:60,second:62,amount:.42000000000000004},{first:60,second:65,amount:-1.26},{first:60,second:74,amount:-.42000000000000004},{first:60,second:90,amount:.8400000000000001},{first:60,second:94,amount:.42000000000000004},{first:60,second:95,amount:.42000000000000004},{first:60,second:96,amount:.42000000000000004},{first:60,second:97,amount:-1.6800000000000002},{first:60,second:99,amount:-.42000000000000004},{first:60,second:100,amount:-.42000000000000004},{first:60,second:101,amount:-.42000000000000004},{first:60,second:103,amount:-1.26},{first:60,second:107,amount:-.42000000000000004},{first:60,second:111,amount:-.42000000000000004},{first:60,second:113,amount:-.42000000000000004},{first:60,second:117,amount:.42000000000000004},{first:60,second:122,amount:-.42000000000000004},{first:60,second:124,amount:.42000000000000004},{first:61,second:49,amount:-.42000000000000004},{first:61,second:50,amount:-.42000000000000004},{first:61,second:51,amount:-.42000000000000004},{first:61,second:66,amount:-.42000000000000004},{first:61,second:68,amount:-.42000000000000004},{first:61,second:69,amount:-.42000000000000004},{first:61,second:70,amount:-.42000000000000004},{first:61,second:72,amount:-.42000000000000004},{first:61,second:73,amount:-.42000000000000004},{first:61,second:75,amount:-.42000000000000004},{first:61,second:76,amount:-.42000000000000004},{first:61,second:77,amount:-.42000000000000004},{first:61,second:78,amount:-.42000000000000004},{first:61,second:80,amount:-.42000000000000004},{first:61,second:82,amount:-.42000000000000004},{first:61,second:98,amount:-.42000000000000004},{first:61,second:99,amount:.42000000000000004},{first:61,second:100,amount:.42000000000000004},{first:61,second:101,amount:.42000000000000004},{first:61,second:111,amount:.42000000000000004},{first:61,second:113,amount:.42000000000000004},{first:62,second:42,amount:.42000000000000004},{first:62,second:44,amount:-.42000000000000004},{first:62,second:46,amount:-.42000000000000004},{first:62,second:60,amount:.42000000000000004},{first:62,second:62,amount:.42000000000000004},{first:62,second:65,amount:-1.26},{first:62,second:74,amount:-.42000000000000004},{first:62,second:90,amount:.8400000000000001},{first:62,second:94,amount:.42000000000000004},{first:62,second:95,amount:.42000000000000004},{first:62,second:96,amount:.42000000000000004},{first:62,second:97,amount:-1.6800000000000002},{first:62,second:99,amount:-.42000000000000004},{first:62,second:100,amount:-.42000000000000004},{first:62,second:101,amount:-.42000000000000004},{first:62,second:103,amount:-1.26},{first:62,second:107,amount:-.42000000000000004},{first:62,second:111,amount:-.42000000000000004},{first:62,second:113,amount:-.42000000000000004},{first:62,second:117,amount:.42000000000000004},{first:62,second:122,amount:-.42000000000000004},{first:62,second:124,amount:.42000000000000004},{first:63,second:97,amount:-1.6800000000000002},{first:63,second:99,amount:-.8400000000000001},{first:63,second:100,amount:-.8400000000000001},{first:63,second:101,amount:-.8400000000000001},{first:63,second:111,amount:-.8400000000000001},{first:63,second:113,amount:-.8400000000000001},{first:64,second:65,amount:-.8400000000000001},{first:64,second:74,amount:-1.26},{first:64,second:97,amount:-1.26},{first:64,second:103,amount:-.42000000000000004},{first:64,second:107,amount:-.8400000000000001},{first:65,second:34,amount:-2.52},{first:65,second:39,amount:-2.52},{first:65,second:45,amount:-2.9400000000000004},{first:65,second:49,amount:-.63},{first:65,second:54,amount:-.8400000000000001},{first:65,second:63,amount:-2.52},{first:65,second:66,amount:-.63},{first:65,second:67,amount:-.8400000000000001},{first:65,second:68,amount:-.63},{first:65,second:69,amount:-.63},{first:65,second:70,amount:-.63},{first:65,second:71,amount:-.8400000000000001},{first:65,second:72,amount:-.63},{first:65,second:73,amount:-.63},{first:65,second:74,amount:-.672},{first:65,second:75,amount:-.63},{first:65,second:76,amount:-.63},{first:65,second:77,amount:-.63},{first:65,second:78,amount:-.63},{first:65,second:79,amount:-.8400000000000001},{first:65,second:80,amount:-.63},{first:65,second:81,amount:-.8400000000000001},{first:65,second:82,amount:-.63},{first:65,second:84,amount:-4.62},{first:65,second:85,amount:-2.9400000000000004},{first:65,second:86,amount:-5.292000000000001},{first:65,second:87,amount:-4.872},{first:65,second:89,amount:-5.04},{first:65,second:92,amount:-6.300000000000001},{first:65,second:98,amount:-2.7720000000000002},{first:65,second:99,amount:-1.1340000000000001},{first:65,second:100,amount:-1.1340000000000001},{first:65,second:101,amount:-1.1340000000000001},{first:65,second:103,amount:-1.26},{first:65,second:106,amount:-1.05},{first:65,second:107,amount:-.63},{first:65,second:109,amount:-.672},{first:65,second:110,amount:-.672},{first:65,second:111,amount:-1.1340000000000001},{first:65,second:112,amount:-1.6800000000000002},{first:65,second:113,amount:-1.1340000000000001},{first:65,second:114,amount:-.672},{first:65,second:115,amount:-.21000000000000002},{first:65,second:116,amount:-1.8900000000000001},{first:65,second:117,amount:-2.52},{first:65,second:118,amount:-4.2},{first:65,second:119,amount:-2.9400000000000004},{first:66,second:37,amount:-.42000000000000004},{first:66,second:41,amount:-1.6800000000000002},{first:66,second:42,amount:-.42000000000000004},{first:66,second:44,amount:-.42000000000000004},{first:66,second:46,amount:-.42000000000000004},{first:66,second:48,amount:.42000000000000004},{first:66,second:49,amount:-.42000000000000004},{first:66,second:54,amount:.63},{first:66,second:55,amount:-.252},{first:66,second:60,amount:-.42000000000000004},{first:66,second:62,amount:-.42000000000000004},{first:66,second:65,amount:-.42000000000000004},{first:66,second:66,amount:-.42000000000000004},{first:66,second:67,amount:.63},{first:66,second:68,amount:-.42000000000000004},{first:66,second:69,amount:-.42000000000000004},{first:66,second:70,amount:-.42000000000000004},{first:66,second:71,amount:.63},{first:66,second:72,amount:-.42000000000000004},{first:66,second:73,amount:-.42000000000000004},{first:66,second:75,amount:-.42000000000000004},{first:66,second:76,amount:-.42000000000000004},{first:66,second:77,amount:-.42000000000000004},{first:66,second:78,amount:-.42000000000000004},{first:66,second:79,amount:.63},{first:66,second:80,amount:-.42000000000000004},{first:66,second:81,amount:.63},{first:66,second:82,amount:-.42000000000000004},{first:66,second:86,amount:-.8400000000000001},{first:66,second:87,amount:-.42000000000000004},{first:66,second:88,amount:-.42000000000000004},{first:66,second:92,amount:-2.1},{first:66,second:93,amount:-.42000000000000004},{first:66,second:94,amount:-.42000000000000004},{first:66,second:95,amount:-.42000000000000004},{first:66,second:96,amount:-.42000000000000004},{first:66,second:97,amount:-.42000000000000004},{first:66,second:98,amount:-.8400000000000001},{first:66,second:99,amount:-.7140000000000001},{first:66,second:100,amount:-.7140000000000001},{first:66,second:101,amount:-.7140000000000001},{first:66,second:103,amount:-.8400000000000001},{first:66,second:104,amount:-.21000000000000002},{first:66,second:106,amount:-.8400000000000001},{first:66,second:107,amount:-.21000000000000002},{first:66,second:108,amount:-.21000000000000002},{first:66,second:111,amount:-.7140000000000001},{first:66,second:112,amount:-.42000000000000004},{first:66,second:113,amount:-.7140000000000001},{first:66,second:116,amount:-.63},{first:66,second:117,amount:-.42000000000000004},{first:66,second:118,amount:-1.764},{first:66,second:119,amount:-.63},{first:66,second:124,amount:-.42000000000000004},{first:66,second:125,amount:-1.6800000000000002},{first:67,second:49,amount:.21000000000000002},{first:67,second:54,amount:.42000000000000004},{first:67,second:66,amount:.21000000000000002},{first:67,second:67,amount:.42000000000000004},{first:67,second:68,amount:.21000000000000002},{first:67,second:69,amount:.21000000000000002},{first:67,second:70,amount:.21000000000000002},{first:67,second:71,amount:.42000000000000004},{first:67,second:72,amount:.21000000000000002},{first:67,second:73,amount:.21000000000000002},{first:67,second:75,amount:.21000000000000002},{first:67,second:76,amount:.21000000000000002},{first:67,second:77,amount:.21000000000000002},{first:67,second:78,amount:.21000000000000002},{first:67,second:79,amount:.42000000000000004},{first:67,second:80,amount:.21000000000000002},{first:67,second:81,amount:.42000000000000004},{first:67,second:82,amount:.21000000000000002},{first:67,second:92,amount:-1.26},{first:67,second:97,amount:-.252},{first:67,second:98,amount:-.21000000000000002},{first:67,second:103,amount:-1.05},{first:67,second:107,amount:-.42000000000000004},{first:67,second:115,amount:-.21000000000000002},{first:68,second:36,amount:-.21000000000000002},{first:68,second:38,amount:-.21000000000000002},{first:68,second:41,amount:-2.1},{first:68,second:44,amount:-.42000000000000004},{first:68,second:46,amount:-.42000000000000004},{first:68,second:47,amount:-2.1},{first:68,second:48,amount:1.26},{first:68,second:49,amount:-.336},{first:68,second:54,amount:.42000000000000004},{first:68,second:65,amount:-.63},{first:68,second:66,amount:-.336},{first:68,second:67,amount:.42000000000000004},{first:68,second:68,amount:-.336},{first:68,second:69,amount:-.336},{first:68,second:70,amount:-.336},{first:68,second:71,amount:.42000000000000004},{first:68,second:72,amount:-.336},{first:68,second:73,amount:-.336},{first:68,second:74,amount:-.8400000000000001},{first:68,second:75,amount:-.336},{first:68,second:76,amount:-.336},{first:68,second:77,amount:-.336},{first:68,second:78,amount:-.336},{first:68,second:79,amount:.42000000000000004},{first:68,second:80,amount:-.336},{first:68,second:81,amount:.42000000000000004},{first:68,second:82,amount:-.336},{first:68,second:83,amount:-.21000000000000002},{first:68,second:84,amount:-.42000000000000004},{first:68,second:85,amount:-.63},{first:68,second:86,amount:-.42000000000000004},{first:68,second:87,amount:-.63},{first:68,second:88,amount:-.21000000000000002},{first:68,second:89,amount:-.8400000000000001},{first:68,second:90,amount:.21000000000000002},{first:68,second:92,amount:-3.3600000000000003},{first:68,second:97,amount:-.21000000000000002},{first:68,second:98,amount:-.8400000000000001},{first:68,second:103,amount:-1.05},{first:68,second:104,amount:-.63},{first:68,second:107,amount:-.42000000000000004},{first:68,second:108,amount:-.63},{first:68,second:121,amount:.8400000000000001},{first:68,second:122,amount:-.42000000000000004},{first:68,second:125,amount:-2.1},{first:69,second:45,amount:-.42000000000000004},{first:69,second:49,amount:-.21000000000000002},{first:69,second:54,amount:-.21000000000000002},{first:69,second:63,amount:-.21000000000000002},{first:69,second:66,amount:-.21000000000000002},{first:69,second:67,amount:-.21000000000000002},{first:69,second:68,amount:-.21000000000000002},{first:69,second:69,amount:-.21000000000000002},{first:69,second:70,amount:-.21000000000000002},{first:69,second:71,amount:-.21000000000000002},{first:69,second:72,amount:-.21000000000000002},{first:69,second:73,amount:-.21000000000000002},{first:69,second:75,amount:-.21000000000000002},{first:69,second:76,amount:-.21000000000000002},{first:69,second:77,amount:-.21000000000000002},{first:69,second:78,amount:-.21000000000000002},{first:69,second:79,amount:-.21000000000000002},{first:69,second:80,amount:-.21000000000000002},{first:69,second:81,amount:-.21000000000000002},{first:69,second:82,amount:-.21000000000000002},{first:69,second:84,amount:-.504},{first:69,second:85,amount:-.42000000000000004},{first:69,second:86,amount:-.42000000000000004},{first:69,second:87,amount:-.42000000000000004},{first:69,second:89,amount:-.42000000000000004},{first:69,second:98,amount:-.63},{first:69,second:103,amount:-.8400000000000001},{first:69,second:107,amount:-.42000000000000004},{first:69,second:109,amount:-.504},{first:69,second:110,amount:-.504},{first:69,second:114,amount:-.504},{first:69,second:117,amount:-.42000000000000004},{first:70,second:36,amount:-.462},{first:70,second:38,amount:-3.108},{first:70,second:44,amount:-4.2},{first:70,second:45,amount:-3.2760000000000002},{first:70,second:46,amount:-4.2},{first:70,second:47,amount:-4.62},{first:70,second:49,amount:-.9660000000000001},{first:70,second:54,amount:-.8400000000000001},{first:70,second:58,amount:-.756},{first:70,second:65,amount:-4.788},{first:70,second:66,amount:-.9660000000000001},{first:70,second:67,amount:-.8400000000000001},{first:70,second:68,amount:-.9660000000000001},{first:70,second:69,amount:-.9660000000000001},{first:70,second:70,amount:-.9660000000000001},{first:70,second:71,amount:-.8400000000000001},{first:70,second:72,amount:-.9660000000000001},{first:70,second:73,amount:-.9660000000000001},{first:70,second:74,amount:-1.26},{first:70,second:75,amount:-.9660000000000001},{first:70,second:76,amount:-.9660000000000001},{first:70,second:77,amount:-.9660000000000001},{first:70,second:78,amount:-.9660000000000001},{first:70,second:79,amount:-.8400000000000001},{first:70,second:80,amount:-.9660000000000001},{first:70,second:81,amount:-.8400000000000001},{first:70,second:82,amount:-.9660000000000001},{first:70,second:83,amount:-.462},{first:70,second:84,amount:-1.1760000000000002},{first:70,second:85,amount:-.756},{first:70,second:86,amount:-1.008},{first:70,second:87,amount:-.756},{first:70,second:88,amount:-.252},{first:70,second:89,amount:-1.008},{first:70,second:90,amount:-.21000000000000002},{first:70,second:97,amount:-5.292000000000001},{first:70,second:98,amount:-2.3520000000000003},{first:70,second:99,amount:-4.578},{first:70,second:100,amount:-4.578},{first:70,second:101,amount:-4.578},{first:70,second:102,amount:-3.4440000000000004},{first:70,second:103,amount:-5.712000000000001},{first:70,second:104,amount:-2.3520000000000003},{first:70,second:105,amount:-3.108},{first:70,second:106,amount:-2.8560000000000003},{first:70,second:107,amount:-2.1},{first:70,second:108,amount:-2.3520000000000003},{first:70,second:109,amount:-3.192},{first:70,second:110,amount:-3.192},{first:70,second:111,amount:-4.578},{first:70,second:112,amount:-3.108},{first:70,second:113,amount:-4.578},{first:70,second:114,amount:-3.192},{first:70,second:115,amount:-3.2760000000000002},{first:70,second:116,amount:-1.26},{first:70,second:117,amount:-2.7720000000000002},{first:70,second:118,amount:-1.848},{first:70,second:119,amount:-2.184},{first:70,second:120,amount:-2.2680000000000002},{first:70,second:121,amount:-2.3520000000000003},{first:70,second:122,amount:-2.8560000000000003},{first:71,second:34,amount:.42000000000000004},{first:71,second:39,amount:.42000000000000004},{first:71,second:54,amount:.42000000000000004},{first:71,second:63,amount:-.42000000000000004},{first:71,second:67,amount:.42000000000000004},{first:71,second:71,amount:.42000000000000004},{first:71,second:74,amount:-1.26},{first:71,second:79,amount:.42000000000000004},{first:71,second:81,amount:.42000000000000004},{first:71,second:84,amount:-1.092},{first:71,second:85,amount:-.8400000000000001},{first:71,second:86,amount:-1.26},{first:71,second:87,amount:-1.26},{first:71,second:88,amount:-.8400000000000001},{first:71,second:89,amount:-.8400000000000001},{first:71,second:90,amount:.42000000000000004},{first:71,second:92,amount:-1.26},{first:71,second:98,amount:-.42000000000000004},{first:71,second:99,amount:.084},{first:71,second:100,amount:.084},{first:71,second:101,amount:.084},{first:71,second:103,amount:-.63},{first:71,second:111,amount:.084},{first:71,second:113,amount:.084},{first:71,second:117,amount:-.168},{first:72,second:37,amount:-.8400000000000001},{first:72,second:42,amount:-.42000000000000004},{first:72,second:43,amount:-.8400000000000001},{first:72,second:45,amount:-1.6800000000000002},{first:72,second:49,amount:-.42000000000000004},{first:72,second:52,amount:-2.52},{first:72,second:54,amount:-.21000000000000002},{first:72,second:60,amount:-.42000000000000004},{first:72,second:61,amount:-.8400000000000001},{first:72,second:62,amount:-.42000000000000004},{first:72,second:66,amount:-.42000000000000004},{first:72,second:67,amount:-.21000000000000002},{first:72,second:68,amount:-.42000000000000004},{first:72,second:69,amount:-.42000000000000004},{first:72,second:70,amount:-.42000000000000004},{first:72,second:71,amount:-.21000000000000002},{first:72,second:72,amount:-.42000000000000004},{first:72,second:73,amount:-.42000000000000004},{first:72,second:74,amount:-.8400000000000001},{first:72,second:75,amount:-.42000000000000004},{first:72,second:76,amount:-.42000000000000004},{first:72,second:77,amount:-.42000000000000004},{first:72,second:78,amount:-.42000000000000004},{first:72,second:79,amount:-.21000000000000002},{first:72,second:80,amount:-.42000000000000004},{first:72,second:81,amount:-.21000000000000002},{first:72,second:82,amount:-.42000000000000004},{first:72,second:94,amount:-.42000000000000004},{first:72,second:95,amount:-.42000000000000004},{first:72,second:96,amount:-.42000000000000004},{first:72,second:97,amount:-.756},{first:72,second:98,amount:-.63},{first:72,second:99,amount:-.63},{first:72,second:100,amount:-.63},{first:72,second:101,amount:-.63},{first:72,second:103,amount:-1.26},{first:72,second:105,amount:-.42000000000000004},{first:72,second:106,amount:-.42000000000000004},{first:72,second:107,amount:-.21000000000000002},{first:72,second:111,amount:-.63},{first:72,second:112,amount:-.42000000000000004},{first:72,second:113,amount:-.63},{first:72,second:116,amount:-.63},{first:72,second:117,amount:-.63},{first:72,second:118,amount:-.42000000000000004},{first:72,second:119,amount:-.5880000000000001},{first:72,second:124,amount:-.42000000000000004},{first:73,second:37,amount:-.8400000000000001},{first:73,second:42,amount:-.42000000000000004},{first:73,second:43,amount:-.8400000000000001},{first:73,second:45,amount:-1.6800000000000002},{first:73,second:49,amount:-.42000000000000004},{first:73,second:52,amount:-2.52},{first:73,second:54,amount:-.21000000000000002},{first:73,second:60,amount:-.42000000000000004},{first:73,second:61,amount:-.8400000000000001},{first:73,second:62,amount:-.42000000000000004},{first:73,second:66,amount:-.42000000000000004},{first:73,second:67,amount:-.21000000000000002},{first:73,second:68,amount:-.42000000000000004},{first:73,second:69,amount:-.42000000000000004},{first:73,second:70,amount:-.42000000000000004},{first:73,second:71,amount:-.21000000000000002},{first:73,second:72,amount:-.42000000000000004},{first:73,second:73,amount:-.42000000000000004},{first:73,second:74,amount:-.8400000000000001},{first:73,second:75,amount:-.42000000000000004},{first:73,second:76,amount:-.42000000000000004},{first:73,second:77,amount:-.42000000000000004},{first:73,second:78,amount:-.42000000000000004},{first:73,second:79,amount:-.21000000000000002},{first:73,second:80,amount:-.42000000000000004},{first:73,second:81,amount:-.21000000000000002},{first:73,second:82,amount:-.42000000000000004},{first:73,second:94,amount:-.42000000000000004},{first:73,second:95,amount:-.42000000000000004},{first:73,second:96,amount:-.42000000000000004},{first:73,second:97,amount:-.756},{first:73,second:98,amount:-.63},{first:73,second:99,amount:-.63},{first:73,second:100,amount:-.63},{first:73,second:101,amount:-.63},{first:73,second:103,amount:-1.26},{first:73,second:105,amount:-.42000000000000004},{first:73,second:106,amount:-.42000000000000004},{first:73,second:107,amount:-.21000000000000002},{first:73,second:111,amount:-.63},{first:73,second:112,amount:-.42000000000000004},{first:73,second:113,amount:-.63},{first:73,second:116,amount:-.63},{first:73,second:117,amount:-.63},{first:73,second:118,amount:-.42000000000000004},{first:73,second:119,amount:-.5880000000000001},{first:73,second:124,amount:-.42000000000000004},{first:74,second:38,amount:-1.6800000000000002},{first:74,second:44,amount:-1.6800000000000002},{first:74,second:45,amount:-1.26},{first:74,second:46,amount:-1.6800000000000002},{first:74,second:47,amount:-2.9400000000000004},{first:74,second:49,amount:-.42000000000000004},{first:74,second:54,amount:-.42000000000000004},{first:74,second:58,amount:-.42000000000000004},{first:74,second:64,amount:-.8400000000000001},{first:74,second:65,amount:-2.1},{first:74,second:66,amount:-.42000000000000004},{first:74,second:67,amount:-.42000000000000004},{first:74,second:68,amount:-.42000000000000004},{first:74,second:69,amount:-.42000000000000004},{first:74,second:70,amount:-.42000000000000004},{first:74,second:71,amount:-.42000000000000004},{first:74,second:72,amount:-.42000000000000004},{first:74,second:73,amount:-.42000000000000004},{first:74,second:74,amount:-1.26},{first:74,second:75,amount:-.42000000000000004},{first:74,second:76,amount:-.42000000000000004},{first:74,second:77,amount:-.42000000000000004},{first:74,second:78,amount:-.42000000000000004},{first:74,second:79,amount:-.42000000000000004},{first:74,second:80,amount:-.42000000000000004},{first:74,second:81,amount:-.42000000000000004},{first:74,second:82,amount:-.42000000000000004},{first:74,second:92,amount:-.42000000000000004},{first:74,second:97,amount:-1.092},{first:74,second:98,amount:-1.26},{first:74,second:99,amount:-1.848},{first:74,second:100,amount:-1.848},{first:74,second:101,amount:-1.848},{first:74,second:102,amount:-.42000000000000004},{first:74,second:103,amount:-1.6800000000000002},{first:74,second:105,amount:-.42000000000000004},{first:74,second:106,amount:-.42000000000000004},{first:74,second:107,amount:-.21000000000000002},{first:74,second:109,amount:-.8400000000000001},{first:74,second:110,amount:-.8400000000000001},{first:74,second:111,amount:-1.848},{first:74,second:112,amount:-.42000000000000004},{first:74,second:113,amount:-1.848},{first:74,second:114,amount:-.8400000000000001},{first:74,second:115,amount:-1.4700000000000002},{first:74,second:116,amount:-.42000000000000004},{first:74,second:117,amount:-1.4280000000000002},{first:74,second:118,amount:-.42000000000000004},{first:74,second:119,amount:-.42000000000000004},{first:74,second:122,amount:-1.05},{first:75,second:45,amount:-1.6800000000000002},{first:75,second:54,amount:-.42000000000000004},{first:75,second:67,amount:-.42000000000000004},{first:75,second:71,amount:-.42000000000000004},{first:75,second:79,amount:-.42000000000000004},{first:75,second:81,amount:-.42000000000000004},{first:75,second:84,amount:-.252},{first:75,second:97,amount:-1.008},{first:75,second:98,amount:-1.218},{first:75,second:99,amount:-1.9320000000000002},{first:75,second:100,amount:-1.9320000000000002},{first:75,second:101,amount:-1.9320000000000002},{first:75,second:102,amount:-.924},{first:75,second:103,amount:-.882},{first:75,second:104,amount:-.252},{first:75,second:105,amount:-.42000000000000004},{first:75,second:106,amount:-.672},{first:75,second:107,amount:-.21000000000000002},{first:75,second:108,amount:-.252},{first:75,second:111,amount:-1.9320000000000002},{first:75,second:112,amount:-1.218},{first:75,second:113,amount:-1.9320000000000002},{first:75,second:115,amount:-.756},{first:75,second:116,amount:-1.344},{first:75,second:117,amount:-3.3600000000000003},{first:75,second:118,amount:-4.284000000000001},{first:75,second:119,amount:-3.7800000000000002},{first:75,second:120,amount:-.252},{first:75,second:121,amount:-3.3600000000000003},{first:76,second:33,amount:.8400000000000001},{first:76,second:34,amount:-3.7800000000000002},{first:76,second:39,amount:-3.7800000000000002},{first:76,second:42,amount:.42000000000000004},{first:76,second:55,amount:-1.26},{first:76,second:60,amount:.42000000000000004},{first:76,second:62,amount:.42000000000000004},{first:76,second:63,amount:-2.52},{first:76,second:74,amount:-.8400000000000001},{first:76,second:84,amount:-4.368},{first:76,second:85,amount:-1.8900000000000001},{first:76,second:86,amount:-3.7800000000000002},{first:76,second:87,amount:-2.9400000000000004},{first:76,second:89,amount:-4.62},{first:76,second:92,amount:-5.04},{first:76,second:94,amount:.42000000000000004},{first:76,second:95,amount:.42000000000000004},{first:76,second:96,amount:.42000000000000004},{first:76,second:97,amount:-.21000000000000002},{first:76,second:98,amount:-1.6800000000000002},{first:76,second:112,amount:-.42000000000000004},{first:76,second:116,amount:-.8400000000000001},{first:76,second:117,amount:-.63},{first:76,second:118,amount:-2.1},{first:76,second:119,amount:-1.6800000000000002},{first:76,second:121,amount:-2.52},{first:76,second:124,amount:.42000000000000004},{first:77,second:37,amount:-.8400000000000001},{first:77,second:42,amount:-.42000000000000004},{first:77,second:43,amount:-.8400000000000001},{first:77,second:45,amount:-1.6800000000000002},{first:77,second:49,amount:-.42000000000000004},{first:77,second:52,amount:-2.52},{first:77,second:54,amount:-.21000000000000002},{first:77,second:60,amount:-.42000000000000004},{first:77,second:61,amount:-.8400000000000001},{first:77,second:62,amount:-.42000000000000004},{first:77,second:66,amount:-.42000000000000004},{first:77,second:67,amount:-.21000000000000002},{first:77,second:68,amount:-.42000000000000004},{first:77,second:69,amount:-.42000000000000004},{first:77,second:70,amount:-.42000000000000004},{first:77,second:71,amount:-.21000000000000002},{first:77,second:72,amount:-.42000000000000004},{first:77,second:73,amount:-.42000000000000004},{first:77,second:74,amount:-.8400000000000001},{first:77,second:75,amount:-.42000000000000004},{first:77,second:76,amount:-.42000000000000004},{first:77,second:77,amount:-.42000000000000004},{first:77,second:78,amount:-.42000000000000004},{first:77,second:79,amount:-.21000000000000002},{first:77,second:80,amount:-.42000000000000004},{first:77,second:81,amount:-.21000000000000002},{first:77,second:82,amount:-.42000000000000004},{first:77,second:94,amount:-.42000000000000004},{first:77,second:95,amount:-.42000000000000004},{first:77,second:96,amount:-.42000000000000004},{first:77,second:97,amount:-.756},{first:77,second:98,amount:-.63},{first:77,second:99,amount:-.63},{first:77,second:100,amount:-.63},{first:77,second:101,amount:-.63},{first:77,second:103,amount:-1.26},{first:77,second:105,amount:-.42000000000000004},{first:77,second:106,amount:-.42000000000000004},{first:77,second:107,amount:-.21000000000000002},{first:77,second:111,amount:-.63},{first:77,second:112,amount:-.42000000000000004},{first:77,second:113,amount:-.63},{first:77,second:116,amount:-.63},{first:77,second:117,amount:-.63},{first:77,second:118,amount:-.42000000000000004},{first:77,second:119,amount:-.5880000000000001},{first:77,second:124,amount:-.42000000000000004},{first:78,second:38,amount:-1.26},{first:78,second:44,amount:-2.1},{first:78,second:45,amount:-1.26},{first:78,second:46,amount:-2.1},{first:78,second:47,amount:-.8400000000000001},{first:78,second:49,amount:-.21000000000000002},{first:78,second:54,amount:-.63},{first:78,second:58,amount:-.8400000000000001},{first:78,second:65,amount:-2.52},{first:78,second:66,amount:-.21000000000000002},{first:78,second:67,amount:-.63},{first:78,second:68,amount:-.21000000000000002},{first:78,second:69,amount:-.21000000000000002},{first:78,second:70,amount:-.21000000000000002},{first:78,second:71,amount:-.63},{first:78,second:72,amount:-.21000000000000002},{first:78,second:73,amount:-.21000000000000002},{first:78,second:74,amount:-1.26},{first:78,second:75,amount:-.21000000000000002},{first:78,second:76,amount:-.21000000000000002},{first:78,second:77,amount:-.21000000000000002},{first:78,second:78,amount:-.21000000000000002},{first:78,second:79,amount:-.63},{first:78,second:80,amount:-.21000000000000002},{first:78,second:81,amount:-.63},{first:78,second:82,amount:-.21000000000000002},{first:78,second:85,amount:-.42000000000000004},{first:78,second:90,amount:-.21000000000000002},{first:78,second:97,amount:-2.226},{first:78,second:98,amount:-.8400000000000001},{first:78,second:99,amount:-1.6800000000000002},{first:78,second:100,amount:-1.6800000000000002},{first:78,second:101,amount:-1.6800000000000002},{first:78,second:102,amount:-.8400000000000001},{first:78,second:103,amount:-2.52},{first:78,second:107,amount:-.42000000000000004},{first:78,second:109,amount:-.42000000000000004},{first:78,second:110,amount:-.42000000000000004},{first:78,second:111,amount:-1.6800000000000002},{first:78,second:112,amount:-.42000000000000004},{first:78,second:113,amount:-1.6800000000000002},{first:78,second:114,amount:-.42000000000000004},{first:78,second:115,amount:-1.26},{first:78,second:116,amount:-.8400000000000001},{first:78,second:117,amount:-.8400000000000001},{first:78,second:118,amount:-.42000000000000004},{first:78,second:119,amount:-.42000000000000004},{first:78,second:120,amount:-.42000000000000004},{first:78,second:121,amount:-.42000000000000004},{first:78,second:122,amount:-.8400000000000001},{first:79,second:36,amount:-.21000000000000002},{first:79,second:38,amount:-.21000000000000002},{first:79,second:41,amount:-2.1},{first:79,second:44,amount:-.42000000000000004},{first:79,second:46,amount:-.42000000000000004},{first:79,second:47,amount:-2.1},{first:79,second:48,amount:1.26},{first:79,second:49,amount:-.336},{first:79,second:54,amount:.42000000000000004},{first:79,second:65,amount:-.63},{first:79,second:66,amount:-.336},{first:79,second:67,amount:.42000000000000004},{first:79,second:68,amount:-.336},{first:79,second:69,amount:-.336},{first:79,second:70,amount:-.336},{first:79,second:71,amount:.42000000000000004},{first:79,second:72,amount:-.336},{first:79,second:73,amount:-.336},{first:79,second:74,amount:-.8400000000000001},{first:79,second:75,amount:-.336},{first:79,second:76,amount:-.336},{first:79,second:77,amount:-.336},{first:79,second:78,amount:-.336},{first:79,second:79,amount:.42000000000000004},{first:79,second:80,amount:-.336},{first:79,second:81,amount:.42000000000000004},{first:79,second:82,amount:-.336},{first:79,second:83,amount:-.21000000000000002},{first:79,second:84,amount:-.42000000000000004},{first:79,second:85,amount:-.63},{first:79,second:86,amount:-.42000000000000004},{first:79,second:87,amount:-.63},{first:79,second:88,amount:-.21000000000000002},{first:79,second:89,amount:-.8400000000000001},{first:79,second:90,amount:.21000000000000002},{first:79,second:92,amount:-3.3600000000000003},{first:79,second:97,amount:-.21000000000000002},{first:79,second:98,amount:-.8400000000000001},{first:79,second:103,amount:-1.05},{first:79,second:104,amount:-.63},{first:79,second:107,amount:-.42000000000000004},{first:79,second:108,amount:-.63},{first:79,second:121,amount:.8400000000000001},{first:79,second:122,amount:-.42000000000000004},{first:79,second:125,amount:-2.1},{first:80,second:38,amount:-.8400000000000001},{first:80,second:44,amount:-3.7800000000000002},{first:80,second:46,amount:-3.7800000000000002},{first:80,second:65,amount:-4.2},{first:80,second:74,amount:-1.6800000000000002},{first:80,second:85,amount:-.42000000000000004},{first:80,second:89,amount:-3.3600000000000003},{first:80,second:92,amount:-2.1},{first:80,second:93,amount:-.8400000000000001},{first:80,second:97,amount:-2.1},{first:80,second:98,amount:-.8400000000000001},{first:80,second:99,amount:-.7140000000000001},{first:80,second:100,amount:-.7140000000000001},{first:80,second:101,amount:-.7140000000000001},{first:80,second:102,amount:-.42000000000000004},{first:80,second:103,amount:-1.26},{first:80,second:104,amount:-.42000000000000004},{first:80,second:106,amount:-.42000000000000004},{first:80,second:107,amount:-.8400000000000001},{first:80,second:108,amount:-.42000000000000004},{first:80,second:109,amount:-.42000000000000004},{first:80,second:110,amount:-.42000000000000004},{first:80,second:111,amount:-.7140000000000001},{first:80,second:113,amount:-.7140000000000001},{first:80,second:114,amount:-.42000000000000004},{first:80,second:122,amount:-.8400000000000001},{first:81,second:36,amount:-.21000000000000002},{first:81,second:38,amount:-.21000000000000002},{first:81,second:41,amount:-2.1},{first:81,second:44,amount:-.42000000000000004},{first:81,second:46,amount:-.42000000000000004},{first:81,second:47,amount:-2.1},{first:81,second:48,amount:1.26},{first:81,second:49,amount:-.336},{first:81,second:54,amount:.42000000000000004},{first:81,second:65,amount:-.63},{first:81,second:66,amount:-.336},{first:81,second:67,amount:.42000000000000004},{first:81,second:68,amount:-.336},{first:81,second:69,amount:-.336},{first:81,second:70,amount:-.336},{first:81,second:71,amount:.42000000000000004},{first:81,second:72,amount:-.336},{first:81,second:73,amount:-.336},{first:81,second:74,amount:-.8400000000000001},{first:81,second:75,amount:-.336},{first:81,second:76,amount:-.336},{first:81,second:77,amount:-.336},{first:81,second:78,amount:-.336},{first:81,second:79,amount:.42000000000000004},{first:81,second:80,amount:-.336},{first:81,second:81,amount:.42000000000000004},{first:81,second:82,amount:-.336},{first:81,second:83,amount:-.21000000000000002},{first:81,second:84,amount:-.42000000000000004},{first:81,second:85,amount:-.63},{first:81,second:86,amount:-.42000000000000004},{first:81,second:87,amount:-.63},{first:81,second:88,amount:-.21000000000000002},{first:81,second:89,amount:-.8400000000000001},{first:81,second:90,amount:.21000000000000002},{first:81,second:92,amount:-3.3600000000000003},{first:81,second:97,amount:-.21000000000000002},{first:81,second:98,amount:-.8400000000000001},{first:81,second:103,amount:-1.05},{first:81,second:104,amount:-.63},{first:81,second:107,amount:-.42000000000000004},{first:81,second:108,amount:-.63},{first:81,second:121,amount:.8400000000000001},{first:81,second:122,amount:-.42000000000000004},{first:81,second:125,amount:-2.1},{first:82,second:42,amount:-.8400000000000001},{first:82,second:45,amount:-.8400000000000001},{first:82,second:49,amount:-.8400000000000001},{first:82,second:54,amount:-.42000000000000004},{first:82,second:60,amount:-.8400000000000001},{first:82,second:62,amount:-.8400000000000001},{first:82,second:63,amount:-1.05},{first:82,second:64,amount:-.42000000000000004},{first:82,second:66,amount:-.8400000000000001},{first:82,second:67,amount:-.42000000000000004},{first:82,second:68,amount:-.8400000000000001},{first:82,second:69,amount:-.8400000000000001},{first:82,second:70,amount:-.8400000000000001},{first:82,second:71,amount:-.42000000000000004},{first:82,second:72,amount:-.8400000000000001},{first:82,second:73,amount:-.8400000000000001},{first:82,second:74,amount:-1.26},{first:82,second:75,amount:-.8400000000000001},{first:82,second:76,amount:-.8400000000000001},{first:82,second:77,amount:-.8400000000000001},{first:82,second:78,amount:-.8400000000000001},{first:82,second:79,amount:-.42000000000000004},{first:82,second:80,amount:-.8400000000000001},{first:82,second:81,amount:-.42000000000000004},{first:82,second:82,amount:-.8400000000000001},{first:82,second:84,amount:-1.26},{first:82,second:85,amount:-1.6800000000000002},{first:82,second:86,amount:-1.6800000000000002},{first:82,second:87,amount:-1.6800000000000002},{first:82,second:89,amount:-1.6800000000000002},{first:82,second:92,amount:-2.9400000000000004},{first:82,second:94,amount:-.8400000000000001},{first:82,second:95,amount:-.8400000000000001},{first:82,second:96,amount:-.8400000000000001},{first:82,second:97,amount:-.21000000000000002},{first:82,second:98,amount:-1.26},{first:82,second:99,amount:-.63},{first:82,second:100,amount:-.63},{first:82,second:101,amount:-.63},{first:82,second:103,amount:-.63},{first:82,second:106,amount:-.21000000000000002},{first:82,second:111,amount:-.63},{first:82,second:112,amount:-1.26},{first:82,second:113,amount:-.63},{first:82,second:116,amount:-.8400000000000001},{first:82,second:117,amount:-.42000000000000004},{first:82,second:118,amount:-.8400000000000001},{first:82,second:119,amount:-1.05},{first:82,second:124,amount:-.8400000000000001},{first:83,second:42,amount:-.21000000000000002},{first:83,second:44,amount:-.21000000000000002},{first:83,second:46,amount:-.21000000000000002},{first:83,second:47,amount:-.8400000000000001},{first:83,second:49,amount:-.42000000000000004},{first:83,second:60,amount:-.21000000000000002},{first:83,second:62,amount:-.21000000000000002},{first:83,second:63,amount:-.8400000000000001},{first:83,second:65,amount:-.8400000000000001},{first:83,second:66,amount:-.42000000000000004},{first:83,second:68,amount:-.42000000000000004},{first:83,second:69,amount:-.42000000000000004},{first:83,second:70,amount:-.42000000000000004},{first:83,second:72,amount:-.42000000000000004},{first:83,second:73,amount:-.42000000000000004},{first:83,second:74,amount:-1.6800000000000002},{first:83,second:75,amount:-.42000000000000004},{first:83,second:76,amount:-.42000000000000004},{first:83,second:77,amount:-.42000000000000004},{first:83,second:78,amount:-.42000000000000004},{first:83,second:80,amount:-.42000000000000004},{first:83,second:82,amount:-.42000000000000004},{first:83,second:84,amount:-.8400000000000001},{first:83,second:85,amount:-.8400000000000001},{first:83,second:86,amount:-.8400000000000001},{first:83,second:87,amount:-.8400000000000001},{first:83,second:88,amount:-.8400000000000001},{first:83,second:89,amount:-.8400000000000001},{first:83,second:90,amount:-.42000000000000004},{first:83,second:92,amount:-1.26},{first:83,second:94,amount:-.21000000000000002},{first:83,second:95,amount:-.21000000000000002},{first:83,second:96,amount:-.21000000000000002},{first:83,second:97,amount:-.504},{first:83,second:98,amount:-.8400000000000001},{first:83,second:99,amount:-.21000000000000002},{first:83,second:100,amount:-.21000000000000002},{first:83,second:101,amount:-.21000000000000002},{first:83,second:103,amount:-.8400000000000001},{first:83,second:104,amount:-.42000000000000004},{first:83,second:107,amount:-.63},{first:83,second:108,amount:-.42000000000000004},{first:83,second:109,amount:-.42000000000000004},{first:83,second:110,amount:-.42000000000000004},{first:83,second:111,amount:-.21000000000000002},{first:83,second:112,amount:-.42000000000000004},{first:83,second:113,amount:-.21000000000000002},{first:83,second:114,amount:-.42000000000000004},{first:83,second:116,amount:-.42000000000000004},{first:83,second:117,amount:-1.1760000000000002},{first:83,second:118,amount:-.42000000000000004},{first:83,second:119,amount:-.42000000000000004},{first:83,second:121,amount:-2.016},{first:83,second:124,amount:-.21000000000000002},{first:84,second:36,amount:-.168},{first:84,second:38,amount:-1.6800000000000002},{first:84,second:42,amount:-1.26},{first:84,second:44,amount:-3.7800000000000002},{first:84,second:45,amount:-3.7800000000000002},{first:84,second:46,amount:-3.7800000000000002},{first:84,second:47,amount:-3.7800000000000002},{first:84,second:49,amount:-.42000000000000004},{first:84,second:54,amount:-.336},{first:84,second:60,amount:-1.26},{first:84,second:62,amount:-1.26},{first:84,second:64,amount:-1.6800000000000002},{first:84,second:65,amount:-3.3600000000000003},{first:84,second:66,amount:-.42000000000000004},{first:84,second:67,amount:-.336},{first:84,second:68,amount:-.42000000000000004},{first:84,second:69,amount:-.42000000000000004},{first:84,second:70,amount:-.42000000000000004},{first:84,second:71,amount:-.336},{first:84,second:72,amount:-.42000000000000004},{first:84,second:73,amount:-.42000000000000004},{first:84,second:74,amount:-.8400000000000001},{first:84,second:75,amount:-.42000000000000004},{first:84,second:76,amount:-.42000000000000004},{first:84,second:77,amount:-.42000000000000004},{first:84,second:78,amount:-.42000000000000004},{first:84,second:79,amount:-.336},{first:84,second:80,amount:-.42000000000000004},{first:84,second:81,amount:-.336},{first:84,second:82,amount:-.42000000000000004},{first:84,second:83,amount:-.168},{first:84,second:90,amount:-.8400000000000001},{first:84,second:94,amount:-1.26},{first:84,second:95,amount:-1.26},{first:84,second:96,amount:-1.26},{first:84,second:97,amount:-4.5360000000000005},{first:84,second:98,amount:-.8400000000000001},{first:84,second:99,amount:-4.452},{first:84,second:100,amount:-4.452},{first:84,second:101,amount:-4.452},{first:84,second:102,amount:-1.848},{first:84,second:103,amount:-4.2},{first:84,second:104,amount:-.8400000000000001},{first:84,second:105,amount:-.42000000000000004},{first:84,second:107,amount:-.336},{first:84,second:108,amount:-.8400000000000001},{first:84,second:109,amount:-3.024},{first:84,second:110,amount:-3.024},{first:84,second:111,amount:-4.452},{first:84,second:112,amount:-3.108},{first:84,second:113,amount:-4.452},{first:84,second:114,amount:-3.024},{first:84,second:115,amount:-2.7720000000000002},{first:84,second:116,amount:-.504},{first:84,second:117,amount:-1.6800000000000002},{first:84,second:118,amount:-2.2680000000000002},{first:84,second:119,amount:-2.0580000000000003},{first:84,second:120,amount:-2.604},{first:84,second:121,amount:-2.436},{first:84,second:122,amount:-2.7720000000000002},{first:84,second:124,amount:-1.26},{first:85,second:36,amount:-.21000000000000002},{first:85,second:38,amount:-1.26},{first:85,second:44,amount:-2.1},{first:85,second:45,amount:-1.26},{first:85,second:46,amount:-2.1},{first:85,second:47,amount:-1.6800000000000002},{first:85,second:54,amount:-.42000000000000004},{first:85,second:58,amount:-.42000000000000004},{first:85,second:64,amount:-.8400000000000001},{first:85,second:65,amount:-1.6800000000000002},{first:85,second:67,amount:-.42000000000000004},{first:85,second:71,amount:-.42000000000000004},{first:85,second:74,amount:-1.26},{first:85,second:79,amount:-.42000000000000004},{first:85,second:81,amount:-.42000000000000004},{first:85,second:83,amount:-.21000000000000002},{first:85,second:97,amount:-1.6800000000000002},{first:85,second:98,amount:-1.6800000000000002},{first:85,second:99,amount:-1.26},{first:85,second:100,amount:-1.26},{first:85,second:101,amount:-1.26},{first:85,second:102,amount:-.21000000000000002},{first:85,second:103,amount:-2.1},{first:85,second:105,amount:-.8400000000000001},{first:85,second:106,amount:-.8400000000000001},{first:85,second:107,amount:-.42000000000000004},{first:85,second:109,amount:-.8400000000000001},{first:85,second:110,amount:-.8400000000000001},{first:85,second:111,amount:-1.26},{first:85,second:112,amount:-.8400000000000001},{first:85,second:113,amount:-1.26},{first:85,second:114,amount:-.8400000000000001},{first:85,second:115,amount:-.8400000000000001},{first:85,second:116,amount:-.42000000000000004},{first:85,second:117,amount:-.42000000000000004},{first:85,second:118,amount:-.42000000000000004},{first:85,second:119,amount:-.42000000000000004},{first:85,second:120,amount:-.42000000000000004},{first:85,second:122,amount:-.8400000000000001},{first:86,second:36,amount:-.42000000000000004},{first:86,second:38,amount:-2.1},{first:86,second:44,amount:-4.62},{first:86,second:45,amount:-2.52},{first:86,second:46,amount:-4.62},{first:86,second:49,amount:-.42000000000000004},{first:86,second:54,amount:-.63},{first:86,second:58,amount:-.8400000000000001},{first:86,second:65,amount:-4.2},{first:86,second:66,amount:-.42000000000000004},{first:86,second:67,amount:-.63},{first:86,second:68,amount:-.42000000000000004},{first:86,second:69,amount:-.42000000000000004},{first:86,second:70,amount:-.42000000000000004},{first:86,second:71,amount:-.63},{first:86,second:72,amount:-.42000000000000004},{first:86,second:73,amount:-.42000000000000004},{first:86,second:74,amount:-1.26},{first:86,second:75,amount:-.42000000000000004},{first:86,second:76,amount:-.42000000000000004},{first:86,second:77,amount:-.42000000000000004},{first:86,second:78,amount:-.42000000000000004},{first:86,second:79,amount:-.63},{first:86,second:80,amount:-.42000000000000004},{first:86,second:81,amount:-.63},{first:86,second:82,amount:-.42000000000000004},{first:86,second:83,amount:-.42000000000000004},{first:86,second:87,amount:-.42000000000000004},{first:86,second:88,amount:-.42000000000000004},{first:86,second:89,amount:-.42000000000000004},{first:86,second:90,amount:-.21000000000000002},{first:86,second:97,amount:-4.032},{first:86,second:98,amount:-1.26},{first:86,second:99,amount:-4.872},{first:86,second:100,amount:-4.872},{first:86,second:101,amount:-4.872},{first:86,second:102,amount:-2.604},{first:86,second:103,amount:-5.46},{first:86,second:104,amount:-1.512},{first:86,second:105,amount:-1.9320000000000002},{first:86,second:106,amount:-2.1},{first:86,second:107,amount:-1.344},{first:86,second:108,amount:-1.512},{first:86,second:109,amount:-3.528},{first:86,second:110,amount:-3.528},{first:86,second:111,amount:-4.872},{first:86,second:112,amount:-3.696},{first:86,second:113,amount:-4.872},{first:86,second:114,amount:-3.528},{first:86,second:115,amount:-4.284000000000001},{first:86,second:116,amount:-2.016},{first:86,second:117,amount:-3.696},{first:86,second:118,amount:-2.52},{first:86,second:119,amount:-1.9320000000000002},{first:86,second:120,amount:-2.1},{first:86,second:121,amount:-2.7720000000000002},{first:86,second:122,amount:-3.3600000000000003},{first:87,second:36,amount:-.8400000000000001},{first:87,second:38,amount:-2.1},{first:87,second:44,amount:-4.2},{first:87,second:45,amount:-2.52},{first:87,second:46,amount:-4.2},{first:87,second:49,amount:-.42000000000000004},{first:87,second:54,amount:-1.05},{first:87,second:58,amount:-.42000000000000004},{first:87,second:65,amount:-3.7800000000000002},{first:87,second:66,amount:-.42000000000000004},{first:87,second:67,amount:-1.05},{first:87,second:68,amount:-.42000000000000004},{first:87,second:69,amount:-.42000000000000004},{first:87,second:70,amount:-.42000000000000004},{first:87,second:71,amount:-1.05},{first:87,second:72,amount:-.42000000000000004},{first:87,second:73,amount:-.42000000000000004},{first:87,second:74,amount:-1.26},{first:87,second:75,amount:-.42000000000000004},{first:87,second:76,amount:-.42000000000000004},{first:87,second:77,amount:-.42000000000000004},{first:87,second:78,amount:-.42000000000000004},{first:87,second:79,amount:-1.05},{first:87,second:80,amount:-.42000000000000004},{first:87,second:81,amount:-1.05},{first:87,second:82,amount:-.42000000000000004},{first:87,second:83,amount:-.8400000000000001},{first:87,second:88,amount:-.42000000000000004},{first:87,second:97,amount:-2.898},{first:87,second:98,amount:-.8400000000000001},{first:87,second:99,amount:-4.074},{first:87,second:100,amount:-4.074},{first:87,second:101,amount:-4.074},{first:87,second:102,amount:-2.3520000000000003},{first:87,second:103,amount:-4.284000000000001},{first:87,second:104,amount:-.8400000000000001},{first:87,second:105,amount:-2.3520000000000003},{first:87,second:106,amount:-.756},{first:87,second:107,amount:-.42000000000000004},{first:87,second:108,amount:-.8400000000000001},{first:87,second:109,amount:-2.3520000000000003},{first:87,second:110,amount:-2.3520000000000003},{first:87,second:111,amount:-4.074},{first:87,second:112,amount:-3.2760000000000002},{first:87,second:113,amount:-4.074},{first:87,second:114,amount:-2.3520000000000003},{first:87,second:115,amount:-3.5700000000000003},{first:87,second:116,amount:-1.512},{first:87,second:117,amount:-2.604},{first:87,second:118,amount:-2.1},{first:87,second:119,amount:-1.596},{first:87,second:120,amount:-1.596},{first:87,second:121,amount:-2.7720000000000002},{first:87,second:122,amount:-2.604},{first:88,second:45,amount:-1.26},{first:88,second:54,amount:-.42000000000000004},{first:88,second:67,amount:-.42000000000000004},{first:88,second:71,amount:-.42000000000000004},{first:88,second:79,amount:-.42000000000000004},{first:88,second:81,amount:-.42000000000000004},{first:88,second:86,amount:-.42000000000000004},{first:88,second:87,amount:-.42000000000000004},{first:88,second:98,amount:-.8400000000000001},{first:88,second:99,amount:-.42000000000000004},{first:88,second:100,amount:-.42000000000000004},{first:88,second:101,amount:-.42000000000000004},{first:88,second:103,amount:-.8400000000000001},{first:88,second:111,amount:-.42000000000000004},{first:88,second:112,amount:-.42000000000000004},{first:88,second:113,amount:-.42000000000000004},{first:88,second:116,amount:-.8400000000000001},{first:88,second:117,amount:-.8400000000000001},{first:88,second:118,amount:-.42000000000000004},{first:88,second:119,amount:-.42000000000000004},{first:89,second:36,amount:-2.8560000000000003},{first:89,second:38,amount:-2.52},{first:89,second:44,amount:-4.2},{first:89,second:45,amount:-4.2},{first:89,second:46,amount:-4.2},{first:89,second:47,amount:-4.62},{first:89,second:49,amount:-.42000000000000004},{first:89,second:54,amount:-2.436},{first:89,second:58,amount:-.8400000000000001},{first:89,second:64,amount:-2.52},{first:89,second:65,amount:-4.2},{first:89,second:66,amount:-.42000000000000004},{first:89,second:67,amount:-2.436},{first:89,second:68,amount:-.42000000000000004},{first:89,second:69,amount:-.42000000000000004},{first:89,second:70,amount:-.42000000000000004},{first:89,second:71,amount:-2.436},{first:89,second:72,amount:-.42000000000000004},{first:89,second:73,amount:-.42000000000000004},{first:89,second:74,amount:-.8400000000000001},{first:89,second:75,amount:-.42000000000000004},{first:89,second:76,amount:-.42000000000000004},{first:89,second:77,amount:-.42000000000000004},{first:89,second:78,amount:-.42000000000000004},{first:89,second:79,amount:-2.436},{first:89,second:80,amount:-.42000000000000004},{first:89,second:81,amount:-2.436},{first:89,second:82,amount:-.42000000000000004},{first:89,second:83,amount:-2.8560000000000003},{first:89,second:85,amount:-.756},{first:89,second:87,amount:-.42000000000000004},{first:89,second:88,amount:-.42000000000000004},{first:89,second:90,amount:-1.596},{first:89,second:97,amount:-4.956},{first:89,second:98,amount:-.8400000000000001},{first:89,second:99,amount:-4.62},{first:89,second:100,amount:-4.62},{first:89,second:101,amount:-4.62},{first:89,second:102,amount:-2.016},{first:89,second:103,amount:-4.872},{first:89,second:104,amount:-1.092},{first:89,second:105,amount:-2.8560000000000003},{first:89,second:106,amount:-2.3520000000000003},{first:89,second:107,amount:-1.512},{first:89,second:108,amount:-1.092},{first:89,second:109,amount:-3.192},{first:89,second:110,amount:-3.192},{first:89,second:111,amount:-4.62},{first:89,second:112,amount:-3.7800000000000002},{first:89,second:113,amount:-4.62},{first:89,second:114,amount:-3.192},{first:89,second:115,amount:-5.04},{first:89,second:116,amount:-1.9320000000000002},{first:89,second:117,amount:-3.528},{first:89,second:118,amount:-3.7800000000000002},{first:89,second:119,amount:-.42000000000000004},{first:89,second:120,amount:-2.7720000000000002},{first:89,second:121,amount:-3.108},{first:89,second:122,amount:-3.2760000000000002},{first:90,second:47,amount:1.6800000000000002},{first:90,second:49,amount:-.21000000000000002},{first:90,second:66,amount:-.21000000000000002},{first:90,second:68,amount:-.21000000000000002},{first:90,second:69,amount:-.21000000000000002},{first:90,second:70,amount:-.21000000000000002},{first:90,second:72,amount:-.21000000000000002},{first:90,second:73,amount:-.21000000000000002},{first:90,second:75,amount:-.21000000000000002},{first:90,second:76,amount:-.21000000000000002},{first:90,second:77,amount:-.21000000000000002},{first:90,second:78,amount:-.21000000000000002},{first:90,second:80,amount:-.21000000000000002},{first:90,second:82,amount:-.21000000000000002},{first:90,second:85,amount:-.252},{first:90,second:98,amount:-.8400000000000001},{first:90,second:103,amount:-.42000000000000004},{first:90,second:117,amount:-.756},{first:91,second:48,amount:-.42000000000000004},{first:91,second:52,amount:-1.6800000000000002},{first:91,second:54,amount:-.8400000000000001},{first:91,second:55,amount:.42000000000000004},{first:91,second:67,amount:-.8400000000000001},{first:91,second:71,amount:-.8400000000000001},{first:91,second:79,amount:-.8400000000000001},{first:91,second:81,amount:-.8400000000000001},{first:91,second:99,amount:-1.26},{first:91,second:100,amount:-1.26},{first:91,second:101,amount:-1.26},{first:91,second:106,amount:.8400000000000001},{first:91,second:111,amount:-1.26},{first:91,second:113,amount:-1.26},{first:91,second:117,amount:-1.26},{first:91,second:118,amount:-1.26},{first:91,second:119,amount:-1.26},{first:92,second:54,amount:-.42000000000000004},{first:92,second:67,amount:-.42000000000000004},{first:92,second:71,amount:-.42000000000000004},{first:92,second:74,amount:.8400000000000001},{first:92,second:79,amount:-.42000000000000004},{first:92,second:81,amount:-.42000000000000004},{first:92,second:84,amount:-4.2},{first:92,second:85,amount:-2.9400000000000004},{first:92,second:89,amount:-4.2},{first:92,second:97,amount:-.8400000000000001},{first:92,second:98,amount:-.42000000000000004},{first:92,second:99,amount:-2.1},{first:92,second:100,amount:-2.1},{first:92,second:101,amount:-2.1},{first:92,second:103,amount:.8400000000000001},{first:92,second:106,amount:1.6800000000000002},{first:92,second:111,amount:-2.1},{first:92,second:113,amount:-2.1},{first:92,second:116,amount:-2.1},{first:92,second:117,amount:-2.1},{first:92,second:118,amount:-3.7800000000000002},{first:94,second:42,amount:.42000000000000004},{first:94,second:44,amount:-.42000000000000004},{first:94,second:46,amount:-.42000000000000004},{first:94,second:60,amount:.42000000000000004},{first:94,second:62,amount:.42000000000000004},{first:94,second:65,amount:-1.26},{first:94,second:74,amount:-.42000000000000004},{first:94,second:90,amount:.8400000000000001},{first:94,second:94,amount:.42000000000000004},{first:94,second:95,amount:.42000000000000004},{first:94,second:96,amount:.42000000000000004},{first:94,second:97,amount:-1.6800000000000002},{first:94,second:99,amount:-.42000000000000004},{first:94,second:100,amount:-.42000000000000004},{first:94,second:101,amount:-.42000000000000004},{first:94,second:103,amount:-1.26},{first:94,second:107,amount:-.42000000000000004},{first:94,second:111,amount:-.42000000000000004},{first:94,second:113,amount:-.42000000000000004},{first:94,second:117,amount:.42000000000000004},{first:94,second:122,amount:-.42000000000000004},{first:94,second:124,amount:.42000000000000004},{first:95,second:42,amount:.42000000000000004},{first:95,second:44,amount:-.42000000000000004},{first:95,second:46,amount:-.42000000000000004},{first:95,second:60,amount:.42000000000000004},{first:95,second:62,amount:.42000000000000004},{first:95,second:65,amount:-1.26},{first:95,second:74,amount:-.42000000000000004},{first:95,second:90,amount:.8400000000000001},{first:95,second:94,amount:.42000000000000004},{first:95,second:95,amount:.42000000000000004},{first:95,second:96,amount:.42000000000000004},{first:95,second:97,amount:-1.6800000000000002},{first:95,second:99,amount:-.42000000000000004},{first:95,second:100,amount:-.42000000000000004},{first:95,second:101,amount:-.42000000000000004},{first:95,second:103,amount:-1.26},{first:95,second:107,amount:-.42000000000000004},{first:95,second:111,amount:-.42000000000000004},{first:95,second:113,amount:-.42000000000000004},{first:95,second:117,amount:.42000000000000004},{first:95,second:122,amount:-.42000000000000004},{first:95,second:124,amount:.42000000000000004},{first:96,second:42,amount:.42000000000000004},{first:96,second:44,amount:-.42000000000000004},{first:96,second:46,amount:-.42000000000000004},{first:96,second:60,amount:.42000000000000004},{first:96,second:62,amount:.42000000000000004},{first:96,second:65,amount:-1.26},{first:96,second:74,amount:-.42000000000000004},{first:96,second:90,amount:.8400000000000001},{first:96,second:94,amount:.42000000000000004},{first:96,second:95,amount:.42000000000000004},{first:96,second:96,amount:.42000000000000004},{first:96,second:97,amount:-1.6800000000000002},{first:96,second:99,amount:-.42000000000000004},{first:96,second:100,amount:-.42000000000000004},{first:96,second:101,amount:-.42000000000000004},{first:96,second:103,amount:-1.26},{first:96,second:107,amount:-.42000000000000004},{first:96,second:111,amount:-.42000000000000004},{first:96,second:113,amount:-.42000000000000004},{first:96,second:117,amount:.42000000000000004},{first:96,second:122,amount:-.42000000000000004},{first:96,second:124,amount:.42000000000000004},{first:97,second:34,amount:-.8400000000000001},{first:97,second:39,amount:-.8400000000000001},{first:97,second:40,amount:.8400000000000001},{first:97,second:41,amount:-.8400000000000001},{first:97,second:42,amount:.21000000000000002},{first:97,second:45,amount:-1.26},{first:97,second:57,amount:-.42000000000000004},{first:97,second:60,amount:.21000000000000002},{first:97,second:62,amount:.21000000000000002},{first:97,second:63,amount:-2.1},{first:97,second:86,amount:-3.7800000000000002},{first:97,second:92,amount:-4.62},{first:97,second:93,amount:-.21000000000000002},{first:97,second:94,amount:.21000000000000002},{first:97,second:95,amount:.21000000000000002},{first:97,second:96,amount:.21000000000000002},{first:97,second:97,amount:-.5880000000000001},{first:97,second:98,amount:-2.31},{first:97,second:99,amount:-.5880000000000001},{first:97,second:100,amount:-.5880000000000001},{first:97,second:101,amount:-.5880000000000001},{first:97,second:103,amount:-.168},{first:97,second:104,amount:-.63},{first:97,second:106,amount:-.8400000000000001},{first:97,second:107,amount:-.8400000000000001},{first:97,second:108,amount:-.63},{first:97,second:109,amount:-.63},{first:97,second:110,amount:-.63},{first:97,second:111,amount:-.5880000000000001},{first:97,second:112,amount:-1.26},{first:97,second:113,amount:-.5880000000000001},{first:97,second:114,amount:-.63},{first:97,second:115,amount:-.42000000000000004},{first:97,second:116,amount:-.9660000000000001},{first:97,second:117,amount:-1.6800000000000002},{first:97,second:118,amount:-2.1},{first:97,second:119,amount:-1.8900000000000001},{first:97,second:121,amount:-1.9320000000000002},{first:97,second:124,amount:.21000000000000002},{first:97,second:125,amount:-.8400000000000001},{first:98,second:41,amount:-2.436},{first:98,second:42,amount:-.21000000000000002},{first:98,second:44,amount:-.8400000000000001},{first:98,second:46,amount:-.8400000000000001},{first:98,second:47,amount:-.8400000000000001},{first:98,second:60,amount:-.21000000000000002},{first:98,second:62,amount:-.21000000000000002},{first:98,second:63,amount:-1.26},{first:98,second:74,amount:-2.1},{first:98,second:92,amount:-2.52},{first:98,second:93,amount:-.8400000000000001},{first:98,second:94,amount:-.21000000000000002},{first:98,second:95,amount:-.21000000000000002},{first:98,second:96,amount:-.21000000000000002},{first:98,second:97,amount:-.8400000000000001},{first:98,second:98,amount:-1.6800000000000002},{first:98,second:99,amount:-.29400000000000004},{first:98,second:100,amount:-.29400000000000004},{first:98,second:101,amount:-.29400000000000004},{first:98,second:103,amount:-1.05},{first:98,second:104,amount:-.8400000000000001},{first:98,second:105,amount:-.21000000000000002},{first:98,second:107,amount:-.8400000000000001},{first:98,second:108,amount:-.8400000000000001},{first:98,second:109,amount:-.63},{first:98,second:110,amount:-.63},{first:98,second:111,amount:-.29400000000000004},{first:98,second:112,amount:-.8400000000000001},{first:98,second:113,amount:-.29400000000000004},{first:98,second:114,amount:-.63},{first:98,second:116,amount:-.42000000000000004},{first:98,second:117,amount:-.42000000000000004},{first:98,second:118,amount:-.8400000000000001},{first:98,second:119,amount:-.8400000000000001},{first:98,second:120,amount:-.8400000000000001},{first:98,second:121,amount:-.8400000000000001},{first:98,second:122,amount:-.5880000000000001},{first:98,second:124,amount:-.21000000000000002},{first:98,second:125,amount:-2.436},{first:99,second:38,amount:-.42000000000000004},{first:99,second:41,amount:-.504},{first:99,second:63,amount:-.42000000000000004},{first:99,second:64,amount:-.42000000000000004},{first:99,second:74,amount:-.8400000000000001},{first:99,second:84,amount:-.42000000000000004},{first:99,second:85,amount:-.8400000000000001},{first:99,second:86,amount:-.8400000000000001},{first:99,second:87,amount:-1.05},{first:99,second:89,amount:-1.26},{first:99,second:92,amount:-2.52},{first:99,second:97,amount:-.63},{first:99,second:98,amount:-1.26},{first:99,second:99,amount:-.42000000000000004},{first:99,second:100,amount:-.42000000000000004},{first:99,second:101,amount:-.42000000000000004},{first:99,second:103,amount:-1.26},{first:99,second:104,amount:-.63},{first:99,second:107,amount:-.8400000000000001},{first:99,second:108,amount:-.63},{first:99,second:111,amount:-.42000000000000004},{first:99,second:113,amount:-.42000000000000004},{first:99,second:125,amount:-.504},{first:100,second:34,amount:-.42000000000000004},{first:100,second:39,amount:-.42000000000000004},{first:100,second:41,amount:-.336},{first:100,second:45,amount:-.8400000000000001},{first:100,second:63,amount:-1.26},{first:100,second:74,amount:-.8400000000000001},{first:100,second:92,amount:-1.26},{first:100,second:97,amount:-.336},{first:100,second:98,amount:-2.1},{first:100,second:99,amount:-.7140000000000001},{first:100,second:100,amount:-.7140000000000001},{first:100,second:101,amount:-.7140000000000001},{first:100,second:103,amount:-1.26},{first:100,second:104,amount:-.42000000000000004},{first:100,second:106,amount:-.42000000000000004},{first:100,second:107,amount:-.42000000000000004},{first:100,second:108,amount:-.42000000000000004},{first:100,second:109,amount:-.21000000000000002},{first:100,second:110,amount:-.21000000000000002},{first:100,second:111,amount:-.7140000000000001},{first:100,second:112,amount:-.8400000000000001},{first:100,second:113,amount:-.7140000000000001},{first:100,second:114,amount:-.21000000000000002},{first:100,second:116,amount:-1.05},{first:100,second:117,amount:-1.05},{first:100,second:118,amount:-1.26},{first:100,second:119,amount:-1.26},{first:100,second:121,amount:-1.4280000000000002},{first:100,second:125,amount:-.336},{first:101,second:34,amount:-.42000000000000004},{first:101,second:39,amount:-.42000000000000004},{first:101,second:41,amount:-2.52},{first:101,second:42,amount:-.42000000000000004},{first:101,second:44,amount:-.42000000000000004},{first:101,second:45,amount:.42000000000000004},{first:101,second:46,amount:-.42000000000000004},{first:101,second:47,amount:-1.05},{first:101,second:60,amount:-.42000000000000004},{first:101,second:62,amount:-.42000000000000004},{first:101,second:63,amount:-1.26},{first:101,second:74,amount:-1.26},{first:101,second:92,amount:-4.62},{first:101,second:93,amount:-1.26},{first:101,second:94,amount:-.42000000000000004},{first:101,second:95,amount:-.42000000000000004},{first:101,second:96,amount:-.42000000000000004},{first:101,second:97,amount:-.42000000000000004},{first:101,second:98,amount:-2.1},{first:101,second:99,amount:-.42000000000000004},{first:101,second:100,amount:-.42000000000000004},{first:101,second:101,amount:-.42000000000000004},{first:101,second:102,amount:-.21000000000000002},{first:101,second:103,amount:-1.596},{first:101,second:104,amount:-.8400000000000001},{first:101,second:105,amount:-.42000000000000004},{first:101,second:106,amount:-.42000000000000004},{first:101,second:107,amount:-.8400000000000001},{first:101,second:108,amount:-.8400000000000001},{first:101,second:109,amount:-.924},{first:101,second:110,amount:-.924},{first:101,second:111,amount:-.42000000000000004},{first:101,second:112,amount:-1.092},{first:101,second:113,amount:-.42000000000000004},{first:101,second:114,amount:-.924},{first:101,second:115,amount:-.252},{first:101,second:116,amount:-.63},{first:101,second:117,amount:-.546},{first:101,second:118,amount:-.63},{first:101,second:119,amount:-.8400000000000001},{first:101,second:120,amount:-.21000000000000002},{first:101,second:124,amount:-.42000000000000004},{first:101,second:125,amount:-2.52},{first:102,second:38,amount:-1.26},{first:102,second:44,amount:-.8400000000000001},{first:102,second:46,amount:-.8400000000000001},{first:102,second:64,amount:-.8400000000000001},{first:102,second:74,amount:-.8400000000000001},{first:102,second:97,amount:-2.1},{first:102,second:98,amount:-1.26},{first:102,second:99,amount:-.924},{first:102,second:100,amount:-.924},{first:102,second:101,amount:-.924},{first:102,second:103,amount:-.8400000000000001},{first:102,second:104,amount:-.8400000000000001},{first:102,second:107,amount:-.42000000000000004},{first:102,second:108,amount:-.8400000000000001},{first:102,second:109,amount:-.168},{first:102,second:110,amount:-.168},{first:102,second:111,amount:-.924},{first:102,second:113,amount:-.924},{first:102,second:114,amount:-.168},{first:102,second:116,amount:-.8400000000000001},{first:102,second:117,amount:-.8400000000000001},{first:102,second:122,amount:-.8400000000000001},{first:103,second:33,amount:.8400000000000001},{first:103,second:38,amount:-.21000000000000002},{first:103,second:47,amount:.8400000000000001},{first:103,second:92,amount:-.8400000000000001},{first:103,second:97,amount:-.63},{first:103,second:98,amount:-1.05},{first:103,second:99,amount:-.9660000000000001},{first:103,second:100,amount:-.9660000000000001},{first:103,second:101,amount:-.9660000000000001},{first:103,second:103,amount:-.42000000000000004},{first:103,second:106,amount:.8400000000000001},{first:103,second:111,amount:-.9660000000000001},{first:103,second:113,amount:-.9660000000000001},{first:104,second:34,amount:-.8400000000000001},{first:104,second:39,amount:-.8400000000000001},{first:104,second:40,amount:.8400000000000001},{first:104,second:41,amount:-.8400000000000001},{first:104,second:42,amount:.21000000000000002},{first:104,second:45,amount:-1.26},{first:104,second:57,amount:-.42000000000000004},{first:104,second:60,amount:.21000000000000002},{first:104,second:62,amount:.21000000000000002},{first:104,second:63,amount:-2.1},{first:104,second:86,amount:-3.7800000000000002},{first:104,second:92,amount:-4.62},{first:104,second:93,amount:-.21000000000000002},{first:104,second:94,amount:.21000000000000002},{first:104,second:95,amount:.21000000000000002},{first:104,second:96,amount:.21000000000000002},{first:104,second:97,amount:-.5880000000000001},{first:104,second:98,amount:-2.31},{first:104,second:99,amount:-.5880000000000001},{first:104,second:100,amount:-.5880000000000001},{first:104,second:101,amount:-.5880000000000001},{first:104,second:103,amount:-.168},{first:104,second:104,amount:-.63},{first:104,second:106,amount:-.8400000000000001},{first:104,second:107,amount:-.8400000000000001},{first:104,second:108,amount:-.63},{first:104,second:109,amount:-.63},{first:104,second:110,amount:-.63},{first:104,second:111,amount:-.5880000000000001},{first:104,second:112,amount:-1.26},{first:104,second:113,amount:-.5880000000000001},{first:104,second:114,amount:-.63},{first:104,second:115,amount:-.42000000000000004},{first:104,second:116,amount:-.9660000000000001},{first:104,second:117,amount:-1.6800000000000002},{first:104,second:118,amount:-2.1},{first:104,second:119,amount:-1.8900000000000001},{first:104,second:121,amount:-1.9320000000000002},{first:104,second:124,amount:.21000000000000002},{first:104,second:125,amount:-.8400000000000001},{first:105,second:42,amount:.042},{first:105,second:45,amount:-.42000000000000004},{first:105,second:52,amount:-.42000000000000004},{first:105,second:60,amount:.042},{first:105,second:62,amount:.042},{first:105,second:63,amount:-.8400000000000001},{first:105,second:86,amount:-1.26},{first:105,second:92,amount:-.8400000000000001},{first:105,second:94,amount:.042},{first:105,second:95,amount:.042},{first:105,second:96,amount:.042},{first:105,second:97,amount:-.42000000000000004},{first:105,second:98,amount:-1.26},{first:105,second:99,amount:-.378},{first:105,second:100,amount:-.378},{first:105,second:101,amount:-.378},{first:105,second:103,amount:-.8400000000000001},{first:105,second:106,amount:-.21000000000000002},{first:105,second:109,amount:-.168},{first:105,second:110,amount:-.168},{first:105,second:111,amount:-.378},{first:105,second:112,amount:-.42000000000000004},{first:105,second:113,amount:-.378},{first:105,second:114,amount:-.168},{first:105,second:116,amount:-.336},{first:105,second:117,amount:-.63},{first:105,second:118,amount:-1.9320000000000002},{first:105,second:119,amount:-1.6800000000000002},{first:105,second:124,amount:.042},{first:106,second:92,amount:-.8400000000000001},{first:106,second:98,amount:-.8400000000000001},{first:106,second:118,amount:-.63},{first:106,second:119,amount:-.63},{first:107,second:41,amount:-.672},{first:107,second:63,amount:-.42000000000000004},{first:107,second:92,amount:-2.52},{first:107,second:97,amount:-.42000000000000004},{first:107,second:98,amount:-1.6800000000000002},{first:107,second:99,amount:-.924},{first:107,second:100,amount:-.924},{first:107,second:101,amount:-.924},{first:107,second:103,amount:-.42000000000000004},{first:107,second:107,amount:-.8400000000000001},{first:107,second:111,amount:-.924},{first:107,second:113,amount:-.924},{first:107,second:116,amount:-.63},{first:107,second:117,amount:-.8400000000000001},{first:107,second:121,amount:-.8400000000000001},{first:107,second:125,amount:-.672},{first:108,second:34,amount:-.42000000000000004},{first:108,second:39,amount:-.42000000000000004},{first:108,second:41,amount:-.336},{first:108,second:45,amount:-.8400000000000001},{first:108,second:63,amount:-1.26},{first:108,second:74,amount:-.8400000000000001},{first:108,second:92,amount:-1.26},{first:108,second:97,amount:-.336},{first:108,second:98,amount:-2.1},{first:108,second:99,amount:-.7140000000000001},{first:108,second:100,amount:-.7140000000000001},{first:108,second:101,amount:-.7140000000000001},{first:108,second:103,amount:-1.26},{first:108,second:104,amount:-.42000000000000004},{first:108,second:106,amount:-.42000000000000004},{first:108,second:107,amount:-.42000000000000004},{first:108,second:108,amount:-.42000000000000004},{first:108,second:109,amount:-.21000000000000002},{first:108,second:110,amount:-.21000000000000002},{first:108,second:111,amount:-.7140000000000001},{first:108,second:112,amount:-.8400000000000001},{first:108,second:113,amount:-.7140000000000001},{first:108,second:114,amount:-.21000000000000002},{first:108,second:116,amount:-1.05},{first:108,second:117,amount:-1.05},{first:108,second:118,amount:-1.26},{first:108,second:119,amount:-1.26},{first:108,second:121,amount:-1.4280000000000002},{first:108,second:125,amount:-.336},{first:109,second:34,amount:-.8400000000000001},{first:109,second:39,amount:-.8400000000000001},{first:109,second:40,amount:.8400000000000001},{first:109,second:41,amount:-.8400000000000001},{first:109,second:42,amount:.21000000000000002},{first:109,second:45,amount:-1.26},{first:109,second:57,amount:-.42000000000000004},{first:109,second:60,amount:.21000000000000002},{first:109,second:62,amount:.21000000000000002},{first:109,second:63,amount:-2.1},{first:109,second:86,amount:-3.7800000000000002},{first:109,second:92,amount:-4.62},{first:109,second:93,amount:-.21000000000000002},{first:109,second:94,amount:.21000000000000002},{first:109,second:95,amount:.21000000000000002},{first:109,second:96,amount:.21000000000000002},{first:109,second:97,amount:-.5880000000000001},{first:109,second:98,amount:-2.31},{first:109,second:99,amount:-.5880000000000001},{first:109,second:100,amount:-.5880000000000001},{first:109,second:101,amount:-.5880000000000001},{first:109,second:103,amount:-.168},{first:109,second:104,amount:-.63},{first:109,second:106,amount:-.8400000000000001},{first:109,second:107,amount:-.8400000000000001},{first:109,second:108,amount:-.63},{first:109,second:109,amount:-.63},{first:109,second:110,amount:-.63},{first:109,second:111,amount:-.5880000000000001},{first:109,second:112,amount:-1.26},{first:109,second:113,amount:-.5880000000000001},{first:109,second:114,amount:-.63},{first:109,second:115,amount:-.42000000000000004},{first:109,second:116,amount:-.9660000000000001},{first:109,second:117,amount:-1.6800000000000002},{first:109,second:118,amount:-2.1},{first:109,second:119,amount:-1.8900000000000001},{first:109,second:121,amount:-1.9320000000000002},{first:109,second:124,amount:.21000000000000002},{first:109,second:125,amount:-.8400000000000001},{first:110,second:34,amount:-.8400000000000001},{first:110,second:39,amount:-.8400000000000001},{first:110,second:40,amount:.8400000000000001},{first:110,second:41,amount:-.8400000000000001},{first:110,second:42,amount:.21000000000000002},{first:110,second:45,amount:-1.26},{first:110,second:57,amount:-.42000000000000004},{first:110,second:60,amount:.21000000000000002},{first:110,second:62,amount:.21000000000000002},{first:110,second:63,amount:-2.1},{first:110,second:86,amount:-3.7800000000000002},{first:110,second:92,amount:-4.62},{first:110,second:93,amount:-.21000000000000002},{first:110,second:94,amount:.21000000000000002},{first:110,second:95,amount:.21000000000000002},{first:110,second:96,amount:.21000000000000002},{first:110,second:97,amount:-.5880000000000001},{first:110,second:98,amount:-2.31},{first:110,second:99,amount:-.5880000000000001},{first:110,second:100,amount:-.5880000000000001},{first:110,second:101,amount:-.5880000000000001},{first:110,second:103,amount:-.168},{first:110,second:104,amount:-.63},{first:110,second:106,amount:-.8400000000000001},{first:110,second:107,amount:-.8400000000000001},{first:110,second:108,amount:-.63},{first:110,second:109,amount:-.63},{first:110,second:110,amount:-.63},{first:110,second:111,amount:-.5880000000000001},{first:110,second:112,amount:-1.26},{first:110,second:113,amount:-.5880000000000001},{first:110,second:114,amount:-.63},{first:110,second:115,amount:-.42000000000000004},{first:110,second:116,amount:-.9660000000000001},{first:110,second:117,amount:-1.6800000000000002},{first:110,second:118,amount:-2.1},{first:110,second:119,amount:-1.8900000000000001},{first:110,second:121,amount:-1.9320000000000002},{first:110,second:124,amount:.21000000000000002},{first:110,second:125,amount:-.8400000000000001},{first:111,second:34,amount:-.42000000000000004},{first:111,second:39,amount:-.42000000000000004},{first:111,second:41,amount:-2.52},{first:111,second:42,amount:-.42000000000000004},{first:111,second:44,amount:-.42000000000000004},{first:111,second:45,amount:.42000000000000004},{first:111,second:46,amount:-.42000000000000004},{first:111,second:47,amount:-1.05},{first:111,second:60,amount:-.42000000000000004},{first:111,second:62,amount:-.42000000000000004},{first:111,second:63,amount:-1.26},{first:111,second:74,amount:-1.26},{first:111,second:92,amount:-4.62},{first:111,second:93,amount:-1.26},{first:111,second:94,amount:-.42000000000000004},{first:111,second:95,amount:-.42000000000000004},{first:111,second:96,amount:-.42000000000000004},{first:111,second:97,amount:-.42000000000000004},{first:111,second:98,amount:-2.1},{first:111,second:99,amount:-.42000000000000004},{first:111,second:100,amount:-.42000000000000004},{first:111,second:101,amount:-.42000000000000004},{first:111,second:102,amount:-.21000000000000002},{first:111,second:103,amount:-1.596},{first:111,second:104,amount:-.8400000000000001},{first:111,second:105,amount:-.42000000000000004},{first:111,second:106,amount:-.42000000000000004},{first:111,second:107,amount:-.8400000000000001},{first:111,second:108,amount:-.8400000000000001},{first:111,second:109,amount:-.924},{first:111,second:110,amount:-.924},{first:111,second:111,amount:-.42000000000000004},{first:111,second:112,amount:-1.092},{first:111,second:113,amount:-.42000000000000004},{first:111,second:114,amount:-.924},{first:111,second:115,amount:-.252},{first:111,second:116,amount:-.63},{first:111,second:117,amount:-.546},{first:111,second:118,amount:-.63},{first:111,second:119,amount:-.8400000000000001},{first:111,second:120,amount:-.21000000000000002},{first:111,second:124,amount:-.42000000000000004},{first:111,second:125,amount:-2.52},{first:112,second:41,amount:-2.436},{first:112,second:42,amount:-.21000000000000002},{first:112,second:44,amount:-.8400000000000001},{first:112,second:46,amount:-.8400000000000001},{first:112,second:47,amount:-.8400000000000001},{first:112,second:60,amount:-.21000000000000002},{first:112,second:62,amount:-.21000000000000002},{first:112,second:63,amount:-1.26},{first:112,second:74,amount:-2.1},{first:112,second:92,amount:-2.52},{first:112,second:93,amount:-.8400000000000001},{first:112,second:94,amount:-.21000000000000002},{first:112,second:95,amount:-.21000000000000002},{first:112,second:96,amount:-.21000000000000002},{first:112,second:97,amount:-.8400000000000001},{first:112,second:98,amount:-1.6800000000000002},{first:112,second:99,amount:-.29400000000000004},{first:112,second:100,amount:-.29400000000000004},{first:112,second:101,amount:-.29400000000000004},{first:112,second:103,amount:-1.05},{first:112,second:104,amount:-.8400000000000001},{first:112,second:105,amount:-.21000000000000002},{first:112,second:107,amount:-.8400000000000001},{first:112,second:108,amount:-.8400000000000001},{first:112,second:109,amount:-.63},{first:112,second:110,amount:-.63},{first:112,second:111,amount:-.29400000000000004},{first:112,second:112,amount:-.8400000000000001},{first:112,second:113,amount:-.29400000000000004},{first:112,second:114,amount:-.63},{first:112,second:116,amount:-.42000000000000004},{first:112,second:117,amount:-.42000000000000004},{first:112,second:118,amount:-.8400000000000001},{first:112,second:119,amount:-.8400000000000001},{first:112,second:120,amount:-.8400000000000001},{first:112,second:121,amount:-.8400000000000001},{first:112,second:122,amount:-.5880000000000001},{first:112,second:124,amount:-.21000000000000002},{first:112,second:125,amount:-2.436},{first:113,second:34,amount:-.8400000000000001},{first:113,second:38,amount:-.8400000000000001},{first:113,second:39,amount:-.8400000000000001},{first:113,second:41,amount:-.8400000000000001},{first:113,second:58,amount:-.8400000000000001},{first:113,second:98,amount:-2.31},{first:113,second:99,amount:-1.26},{first:113,second:100,amount:-1.26},{first:113,second:101,amount:-1.26},{first:113,second:102,amount:-.8400000000000001},{first:113,second:104,amount:-1.6800000000000002},{first:113,second:105,amount:-1.26},{first:113,second:106,amount:.42000000000000004},{first:113,second:108,amount:-1.6800000000000002},{first:113,second:109,amount:-1.26},{first:113,second:110,amount:-1.26},{first:113,second:111,amount:-1.26},{first:113,second:112,amount:-.8400000000000001},{first:113,second:113,amount:-1.26},{first:113,second:114,amount:-1.26},{first:113,second:115,amount:-.8400000000000001},{first:113,second:116,amount:-1.6800000000000002},{first:113,second:117,amount:-2.1},{first:113,second:118,amount:-1.6800000000000002},{first:113,second:119,amount:-1.6800000000000002},{first:113,second:120,amount:-.8400000000000001},{first:113,second:121,amount:-1.26},{first:113,second:122,amount:-.8400000000000001},{first:113,second:125,amount:-.8400000000000001},{first:114,second:38,amount:-.42000000000000004},{first:114,second:41,amount:-2.1},{first:114,second:44,amount:-2.9400000000000004},{first:114,second:46,amount:-2.9400000000000004},{first:114,second:47,amount:-2.9400000000000004},{first:114,second:92,amount:-2.52},{first:114,second:97,amount:-2.1},{first:114,second:98,amount:-1.05},{first:114,second:99,amount:-1.092},{first:114,second:100,amount:-1.092},{first:114,second:101,amount:-1.092},{first:114,second:103,amount:-1.6800000000000002},{first:114,second:104,amount:-.798},{first:114,second:105,amount:-.42000000000000004},{first:114,second:107,amount:-1.05},{first:114,second:108,amount:-.798},{first:114,second:109,amount:-.42000000000000004},{first:114,second:110,amount:-.42000000000000004},{first:114,second:111,amount:-1.092},{first:114,second:113,amount:-1.092},{first:114,second:114,amount:-.42000000000000004},{first:114,second:115,amount:-.8400000000000001},{first:114,second:116,amount:-.42000000000000004},{first:114,second:117,amount:-.168},{first:114,second:122,amount:-.8400000000000001},{first:114,second:125,amount:-2.1},{first:115,second:41,amount:-2.52},{first:115,second:44,amount:-.42000000000000004},{first:115,second:46,amount:-.42000000000000004},{first:115,second:47,amount:-.42000000000000004},{first:115,second:63,amount:-.8400000000000001},{first:115,second:74,amount:-1.26},{first:115,second:92,amount:-2.52},{first:115,second:97,amount:-.882},{first:115,second:98,amount:-1.6800000000000002},{first:115,second:99,amount:-.378},{first:115,second:100,amount:-.378},{first:115,second:101,amount:-.378},{first:115,second:103,amount:-.798},{first:115,second:104,amount:-.21000000000000002},{first:115,second:105,amount:-.63},{first:115,second:106,amount:-.8400000000000001},{first:115,second:107,amount:-.5880000000000001},{first:115,second:108,amount:-.21000000000000002},{first:115,second:111,amount:-.378},{first:115,second:112,amount:-.8400000000000001},{first:115,second:113,amount:-.378},{first:115,second:115,amount:-.546},{first:115,second:116,amount:-.63},{first:115,second:117,amount:-.672},{first:115,second:118,amount:-.8400000000000001},{first:115,second:119,amount:-1.05},{first:115,second:120,amount:-.42000000000000004},{first:115,second:122,amount:-.42000000000000004},{first:115,second:125,amount:-2.52},{first:116,second:49,amount:-.21000000000000002},{first:116,second:66,amount:-.21000000000000002},{first:116,second:68,amount:-.21000000000000002},{first:116,second:69,amount:-.21000000000000002},{first:116,second:70,amount:-.21000000000000002},{first:116,second:72,amount:-.21000000000000002},{first:116,second:73,amount:-.21000000000000002},{first:116,second:74,amount:-.8400000000000001},{first:116,second:75,amount:-.21000000000000002},{first:116,second:76,amount:-.21000000000000002},{first:116,second:77,amount:-.21000000000000002},{first:116,second:78,amount:-.21000000000000002},{first:116,second:80,amount:-.21000000000000002},{first:116,second:82,amount:-.21000000000000002},{first:116,second:92,amount:-2.52},{first:116,second:97,amount:-1.1760000000000002},{first:116,second:98,amount:-1.6800000000000002},{first:116,second:99,amount:-1.302},{first:116,second:100,amount:-1.302},{first:116,second:101,amount:-1.302},{first:116,second:103,amount:-1.05},{first:116,second:106,amount:-.42000000000000004},{first:116,second:107,amount:-.21000000000000002},{first:116,second:111,amount:-1.302},{first:116,second:113,amount:-1.302},{first:116,second:115,amount:-.798},{first:116,second:116,amount:-.8400000000000001},{first:116,second:117,amount:-.42000000000000004},{first:116,second:118,amount:-.8400000000000001},{first:116,second:119,amount:-.8400000000000001},{first:116,second:122,amount:-.504},{first:117,second:34,amount:-.42000000000000004},{first:117,second:39,amount:-.42000000000000004},{first:117,second:42,amount:-.8400000000000001},{first:117,second:45,amount:-.8400000000000001},{first:117,second:60,amount:-.8400000000000001},{first:117,second:62,amount:-.8400000000000001},{first:117,second:63,amount:-.8400000000000001},{first:117,second:74,amount:-.42000000000000004},{first:117,second:92,amount:-2.9400000000000004},{first:117,second:94,amount:-.8400000000000001},{first:117,second:95,amount:-.8400000000000001},{first:117,second:96,amount:-.8400000000000001},{first:117,second:97,amount:-.42000000000000004},{first:117,second:98,amount:-1.6800000000000002},{first:117,second:99,amount:-.42000000000000004},{first:117,second:100,amount:-.42000000000000004},{first:117,second:101,amount:-.42000000000000004},{first:117,second:106,amount:-.8400000000000001},{first:117,second:109,amount:-.21000000000000002},{first:117,second:110,amount:-.21000000000000002},{first:117,second:111,amount:-.42000000000000004},{first:117,second:112,amount:-.8400000000000001},{first:117,second:113,amount:-.42000000000000004},{first:117,second:114,amount:-.21000000000000002},{first:117,second:115,amount:-.084},{first:117,second:116,amount:-.8400000000000001},{first:117,second:117,amount:-1.26},{first:117,second:118,amount:-1.6800000000000002},{first:117,second:119,amount:-1.26},{first:117,second:121,amount:-1.6800000000000002},{first:117,second:124,amount:-.8400000000000001},{first:118,second:34,amount:.8400000000000001},{first:118,second:38,amount:-.8400000000000001},{first:118,second:39,amount:.8400000000000001},{first:118,second:41,amount:-1.6800000000000002},{first:118,second:44,amount:-3.7800000000000002},{first:118,second:46,amount:-3.7800000000000002},{first:118,second:47,amount:-4.2},{first:118,second:64,amount:-.42000000000000004},{first:118,second:92,amount:-2.1},{first:118,second:97,amount:-1.6800000000000002},{first:118,second:98,amount:-1.26},{first:118,second:99,amount:-1.3860000000000001},{first:118,second:100,amount:-1.3860000000000001},{first:118,second:101,amount:-1.3860000000000001},{first:118,second:103,amount:-.8400000000000001},{first:118,second:104,amount:-.8400000000000001},{first:118,second:105,amount:-.42000000000000004},{first:118,second:107,amount:-.42000000000000004},{first:118,second:108,amount:-.8400000000000001},{first:118,second:109,amount:-.42000000000000004},{first:118,second:110,amount:-.42000000000000004},{first:118,second:111,amount:-1.3860000000000001},{first:118,second:113,amount:-1.3860000000000001},{first:118,second:114,amount:-.42000000000000004},{first:118,second:122,amount:-.8400000000000001},{first:118,second:125,amount:-1.6800000000000002},{first:119,second:38,amount:-.8400000000000001},{first:119,second:41,amount:-1.6800000000000002},{first:119,second:44,amount:-2.52},{first:119,second:46,amount:-2.52},{first:119,second:93,amount:-.8400000000000001},{first:119,second:97,amount:-1.6800000000000002},{first:119,second:98,amount:-1.26},{first:119,second:99,amount:-.882},{first:119,second:100,amount:-.882},{first:119,second:101,amount:-.882},{first:119,second:103,amount:-1.26},{first:119,second:104,amount:-.8400000000000001},{first:119,second:107,amount:-.42000000000000004},{first:119,second:108,amount:-.8400000000000001},{first:119,second:109,amount:-.63},{first:119,second:110,amount:-.63},{first:119,second:111,amount:-.882},{first:119,second:113,amount:-.882},{first:119,second:114,amount:-.63},{first:119,second:122,amount:-.42000000000000004},{first:119,second:125,amount:-1.6800000000000002},{first:120,second:97,amount:-.21000000000000002},{first:120,second:98,amount:-.8400000000000001},{first:120,second:112,amount:-.42000000000000004},{first:121,second:47,amount:-1.008},{first:121,second:49,amount:-.252},{first:121,second:65,amount:-2.2680000000000002},{first:121,second:66,amount:-.252},{first:121,second:68,amount:-.252},{first:121,second:69,amount:-.252},{first:121,second:70,amount:-.252},{first:121,second:72,amount:-.252},{first:121,second:73,amount:-.252},{first:121,second:75,amount:-.252},{first:121,second:76,amount:-.252},{first:121,second:77,amount:-.252},{first:121,second:78,amount:-.252},{first:121,second:80,amount:-.252},{first:121,second:82,amount:-.252},{first:121,second:84,amount:-.756},{first:121,second:97,amount:-2.1},{first:121,second:98,amount:-1.6800000000000002},{first:121,second:99,amount:-.924},{first:121,second:100,amount:-.924},{first:121,second:101,amount:-.924},{first:121,second:103,amount:-1.008},{first:121,second:104,amount:-.252},{first:121,second:108,amount:-.252},{first:121,second:109,amount:-.63},{first:121,second:110,amount:-.63},{first:121,second:111,amount:-.924},{first:121,second:112,amount:-1.764},{first:121,second:113,amount:-.924},{first:121,second:114,amount:-.63},{first:121,second:115,amount:-1.512},{first:121,second:117,amount:-.504},{first:121,second:122,amount:-1.26},{first:122,second:34,amount:.42000000000000004},{first:122,second:39,amount:.42000000000000004},{first:122,second:92,amount:-2.1},{first:122,second:97,amount:-.42000000000000004},{first:122,second:98,amount:-.8400000000000001},{first:122,second:99,amount:-.21000000000000002},{first:122,second:100,amount:-.21000000000000002},{first:122,second:101,amount:-.21000000000000002},{first:122,second:103,amount:-.21000000000000002},{first:122,second:111,amount:-.21000000000000002},{first:122,second:113,amount:-.21000000000000002},{first:122,second:117,amount:-.252},{first:122,second:119,amount:-.42000000000000004},{first:123,second:54,amount:-1.26},{first:123,second:67,amount:-1.26},{first:123,second:71,amount:-1.26},{first:123,second:79,amount:-1.26},{first:123,second:81,amount:-1.26},{first:123,second:91,amount:.8400000000000001},{first:123,second:97,amount:-2.3520000000000003},{first:123,second:99,amount:-1.6800000000000002},{first:123,second:100,amount:-1.6800000000000002},{first:123,second:101,amount:-1.6800000000000002},{first:123,second:103,amount:-.42000000000000004},{first:123,second:106,amount:.42000000000000004},{first:123,second:107,amount:-.42000000000000004},{first:123,second:111,amount:-1.6800000000000002},{first:123,second:113,amount:-1.6800000000000002},{first:123,second:117,amount:-1.6800000000000002},{first:123,second:118,amount:-2.1},{first:124,second:42,amount:.42000000000000004},{first:124,second:44,amount:-.42000000000000004},{first:124,second:46,amount:-.42000000000000004},{first:124,second:60,amount:.42000000000000004},{first:124,second:62,amount:.42000000000000004},{first:124,second:65,amount:-1.26},{first:124,second:74,amount:-.42000000000000004},{first:124,second:90,amount:.8400000000000001},{first:124,second:94,amount:.42000000000000004},{first:124,second:95,amount:.42000000000000004},{first:124,second:96,amount:.42000000000000004},{first:124,second:97,amount:-1.6800000000000002},{first:124,second:99,amount:-.42000000000000004},{first:124,second:100,amount:-.42000000000000004},{first:124,second:101,amount:-.42000000000000004},{first:124,second:103,amount:-1.26},{first:124,second:107,amount:-.42000000000000004},{first:124,second:111,amount:-.42000000000000004},{first:124,second:113,amount:-.42000000000000004},{first:124,second:117,amount:.42000000000000004},{first:124,second:122,amount:-.42000000000000004},{first:124,second:124,amount:.42000000000000004}],Qv={pages:Zv,chars:$v,info:Kv,common:Jv,kernings:jv};function dh(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fh={exports:{}};(function(s){var t=/\n/,e=`
`,n=/\s/;s.exports=function(l,u){var d=s.exports.lines(l,u);return d.map(function(f){return l.substring(f.start,f.end)}).join(`
`)},s.exports.lines=function(u,d){if(d=d||{},d.width===0&&d.mode!=="nowrap")return[];u=u||"";var f=typeof d.width=="number"?d.width:Number.MAX_VALUE,h=Math.max(0,d.start||0),p=typeof d.end=="number"?d.end:u.length,_=d.mode,g=d.measure||c;return _==="pre"?o(g,u,h,p,f):a(g,u,h,p,f,_)};function i(l,u,d,f){var h=l.indexOf(u,d);return h===-1||h>f?f:h}function r(l){return n.test(l)}function o(l,u,d,f,h){for(var p=[],_=d,g=d;g<f&&g<u.length;g++){var m=u.charAt(g),v=t.test(m);if(v||g===f-1){var x=v?g:g+1,y=l(u,_,x,h);p.push(y),_=g+1}}return p}function a(l,u,d,f,h,p){var _=[],g=h;for(p==="nowrap"&&(g=Number.MAX_VALUE);d<f&&d<u.length;){for(var m=i(u,e,d,f);d<m&&r(u.charAt(d));)d++;var v=l(u,d,m,g),x=d+(v.end-v.start),y=x+e.length;if(x<m){for(;x>d&&!r(u.charAt(x));)x--;if(x===d)y>d+e.length&&y--,x=y;else for(y=x;x>d&&r(u.charAt(x-e.length));)x--}if(x>=d){var L=l(u,d,x,g);_.push(L)}d=y}return _}function c(l,u,d,f){var h=Math.min(f,d-u);return{start:u,end:u+h}}})(fh);var ty=fh.exports,ey=iy,ny=Object.prototype.hasOwnProperty;function iy(){for(var s={},t=0;t<arguments.length;t++){var e=arguments[t];for(var n in e)ny.call(e,n)&&(s[n]=e[n])}return s}var sy=function(t,e){return typeof t=="number"?t:typeof e=="number"?e:0},ry=ty,hh=ey,qu=sy,Zu=["x","e","a","o","n","s","r","c","u","m","v","w","z"],$u=["m","w"],Ku=["H","I","N","E","F","K","L","T","U","V","W","X","Y","Z"],ph=9,mh=32,oy=0,gh=1,_h=2,ay=function(t){return new Ls(t)};function Ls(s){this.glyphs=[],this._measure=this.computeMetrics.bind(this),this.update(s)}Ls.prototype.update=function(s){if(s=hh({measure:this._measure},s),this._opt=s,this._opt.tabSize=qu(this._opt.tabSize,4),!s.font)throw new Error("must provide a valid bitmap font");var t=this.glyphs,e=s.text||"",n=s.font;this._setupSpaceGlyphs(n);var i=ry.lines(e,s),r=s.width||0;t.length=0;var o=i.reduce(function(g,m){return Math.max(g,m.width,r)},0),a=0,c=0,l=qu(s.lineHeight,n.common.lineHeight),u=n.common.base,d=l-u,f=s.letterSpacing||0,h=l*i.length-d,p=hy(this._opt.align);c-=h,this._width=o,this._height=h,this._descender=l-u,this._baseline=u,this._xHeight=uy(n),this._capHeight=fy(n),this._lineHeight=l,this._ascender=l-d-this._xHeight;var _=this;i.forEach(function(g,m){for(var v=g.start,x=g.end,y=g.width,L,T=v;T<x;T++){var C=e.charCodeAt(T),I=_.getGlyph(n,C);if(I){L&&(a+=vh(n,L.id,I.id));var w=a;p===gh?w+=(o-y)/2:p===_h&&(w+=o-y),t.push({position:[w,c],data:I,index:T,line:m}),a+=I.xadvance+f,L=I}}c+=l,a=0}),this._linesTotal=i.length};Ls.prototype._setupSpaceGlyphs=function(s){if(this._fallbackSpaceGlyph=null,this._fallbackTabGlyph=null,!(!s.chars||s.chars.length===0)){var t=xh(s,mh)||dy(s)||s.chars[0],e=this._opt.tabSize*t.xadvance;this._fallbackSpaceGlyph=t,this._fallbackTabGlyph=hh(t,{x:0,y:0,xadvance:e,id:ph,xoffset:0,yoffset:0,width:0,height:0})}};Ls.prototype.getGlyph=function(s,t){var e=xh(s,t);return e||(t===ph?this._fallbackTabGlyph:t===mh?this._fallbackSpaceGlyph:null)};Ls.prototype.computeMetrics=function(s,t,e,n){var i=this._opt.letterSpacing||0,r=this._opt.font,o=0,a=0,c=0,l,u;if(!r.chars||r.chars.length===0)return{start:t,end:t,width:0};e=Math.min(s.length,e);for(var d=t;d<e;d++){var f=s.charCodeAt(d),l=this.getGlyph(r,f);if(l){l.xoffset;var h=u?vh(r,u.id,l.id):0;o+=h;var p=o+l.xadvance+i,_=o+l.width;if(_>=n||p>=n)break;o=p,a=_,u=l}c++}return u&&(a+=u.xoffset),{start:t,end:t+c,width:a}};["width","height","descender","ascender","xHeight","baseline","capHeight","lineHeight"].forEach(cy);function cy(s){Object.defineProperty(Ls.prototype,s,{get:ly(s),configurable:!0})}function ly(s){return new Function(["return function "+s+"() {","  return this._"+s,"}"].join(`
`))()}function xh(s,t){if(!s.chars||s.chars.length===0)return null;var e=jo(s.chars,t);return e>=0?s.chars[e]:null}function uy(s){for(var t=0;t<Zu.length;t++){var e=Zu[t].charCodeAt(0),n=jo(s.chars,e);if(n>=0)return s.chars[n].height}return 0}function dy(s){for(var t=0;t<$u.length;t++){var e=$u[t].charCodeAt(0),n=jo(s.chars,e);if(n>=0)return s.chars[n]}return 0}function fy(s){for(var t=0;t<Ku.length;t++){var e=Ku[t].charCodeAt(0),n=jo(s.chars,e);if(n>=0)return s.chars[n].height}return 0}function vh(s,t,e){if(!s.kernings||s.kernings.length===0)return 0;for(var n=s.kernings,i=0;i<n.length;i++){var r=n[i];if(r.first===t&&r.second===e)return r.amount}return 0}function hy(s){return s==="center"?gh:s==="right"?_h:oy}function jo(s,t,e){e=e||0;for(var n=e;n<s.length;n++)if(s[n].id===t)return n;return-1}const py=dh(ay);var my=function(s){switch(s){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}},gy=Object.prototype.toString,_y=xy;function xy(s){return s.BYTES_PER_ELEMENT&&gy.call(s.buffer)==="[object ArrayBuffer]"||Array.isArray(s)}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var vy=function(s){return s!=null&&(yh(s)||yy(s)||!!s._isBuffer)};function yh(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function yy(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&yh(s.slice(0,0))}var My=my,Sy=_y,by=vy,wy=[0,2,3],Ey=[2,1,3],Ay=function(t,e){(!t||!(Sy(t)||by(t)))&&(e=t||{},t=null),typeof e=="number"?e={count:e}:e=e||{};for(var n=typeof e.type=="string"?e.type:"uint16",i=typeof e.count=="number"?e.count:1,r=e.start||0,o=e.clockwise!==!1?wy:Ey,a=o[0],c=o[1],l=o[2],u=i*6,d=t||new(My(n))(u),f=0,h=0;f<u;f+=6,h+=4){var p=f+r;d[p+0]=h+0,d[p+1]=h+1,d[p+2]=h+2,d[p+3]=h+a,d[p+4]=h+c,d[p+5]=h+l}return d};const Ty=dh(Ay);function Cy(s){const t=new Float32Array(s.length*4);let e=0;return s.forEach(n=>{const i=n.data.page||0;t[e++]=i,t[e++]=i,t[e++]=i,t[e++]=i}),t}function Ry(s,t,e,n){const i=new Float32Array(s.length*4*2);let r=0;return s.forEach(o=>{const a=o.data,c=a.x+a.width,l=a.y+a.height;let u=a.x/t,d=a.y/e,f=c/t,h=l/e;n&&(d=(e-a.y)/e,h=(e-l)/e),i[r++]=u,i[r++]=d,i[r++]=u,i[r++]=h,i[r++]=f,i[r++]=h,i[r++]=f,i[r++]=d}),i}function Py(s){const t=new Float32Array(s.length*4*2);let e=0;return s.forEach(n=>{const i=n.data,r=n.position[0]+i.xoffset,o=n.position[1]+i.yoffset,a=i.width,c=i.height;t[e++]=r,t[e++]=o,t[e++]=r,t[e++]=o+c,t[e++]=r+a,t[e++]=o+c,t[e++]=r+a,t[e++]=o}),t}const Ya=2,ye={min:[0,0],max:[0,0]};function Mh(s){const t=s.length/Ya;ye.min[0]=s[0],ye.min[1]=s[1],ye.max[0]=s[0],ye.max[1]=s[1];for(let e=0;e<t;e++){const n=s[e*Ya+0],i=s[e*Ya+1];ye.min[0]=Math.min(n,ye.min[0]),ye.min[1]=Math.min(i,ye.min[1]),ye.max[0]=Math.max(n,ye.max[0]),ye.max[1]=Math.max(i,ye.max[1])}}function Iy(s,t){Mh(s),t.min.set(ye.min[0],ye.min[1],0),t.max.set(ye.max[0],ye.max[1],0)}function Ly(s,t){Mh(s);const e=ye.min[0],n=ye.min[1],i=ye.max[0],r=ye.max[1],o=i-e,a=r-n,c=Math.sqrt(o*o+a*a);t.center.set(e+o/2,n+a/2,0),t.radius=c/2}class Dy extends Wt{constructor(e){super();it(this,"_opt");it(this,"layout");it(this,"visibleGlyphs");typeof e=="string"&&(e={text:e}),this._opt={...e},e&&this.update(e)}update(e){if(typeof e=="string"&&(e={text:e}),e={...this._opt,...e},!e.font)throw new TypeError("must specify a { font } in options");this.layout=py(e);const n=e.flipY!==!1,i=e.font,r=i.common.scaleW,o=i.common.scaleH,a=this.layout.glyphs.filter(d=>{const f=d.data;return f.width*f.height>0});this.visibleGlyphs=a;const c=Py(a),l=Ry(a,r,o,n),u=Ty([],{clockwise:!0,type:"uint16",count:a.length});if(this.setIndex(u),this.setAttribute("position",new ne(c,2)),this.setAttribute("uv",new ne(l,2)),!e.multipage&&this.getAttribute("page"))this.deleteAttribute("page");else if(e.multipage){const d=Cy(a);this.setAttribute("page",new ne(d,1))}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ee);const e=this.attributes.position.array,n=this.attributes.position.itemSize;if(!e||!n||e.length<2){this.boundingSphere.radius=0,this.boundingSphere.center.set(0,0,0);return}Ly(e,this.boundingSphere),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute likely has NaN values.')}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new we);const e=this.attributes.position.array,n=this.attributes.position.itemSize;if(!e||!n||e.length<2){this.boundingBox.makeEmpty();return}Iy(e,this.boundingBox)}}function Uy(s){return new Dy(s)}function Ny(s={}){const t=typeof s.opacity=="number"?s.opacity:1;typeof s.alphaTest=="number"&&s.alphaTest,s.precision;const e=s.color,n=s.map||new le;typeof s.negate=="boolean"&&s.negate;const{map:i,color:r,precision:o,opacity:a,negate:c,...l}=s;return new qe({uniforms:{opacity:{value:t},map:{value:n},color:{value:new ft(e)}},vertexShader:`
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
    `,fragmentShader:`
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
    `,glslVersion:uo,...l})}const Oy=s=>{const e=new Wf().load("../../fonts/Quadon-msdf.png"),n=new Oe({map:e}),i=new Jn(1,1,1),r=new ee(i,n),o=new Rs;o.background=new ft(2236962),o.add(r);const a=new ge(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=5,new ch({camera:a,scene:o,domElement:s.domElement,getInteractables:()=>[],enablePan:!0});const c=Uy({text:"Hello, World!",font:Qv,align:"left",flipY:e.flipY}),l=new Vc(Ny({map:e,color:65535,side:Ke,transparent:!0,depthTest:!1,depthWrite:!1,opacity:1})),u=new ee(c,l);return u.scale.set(.01,.01,.01),u.rotation.x=Math.PI,o.add(u),{update_scene:()=>{s.render(o,a)},camera:a,resetter:()=>{o.remove(r)}}},Sh=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,Fy=({foreground:s=16711680,background:t=0,side:e}={})=>new qe({side:e,uniforms:{radius:{value:.5},density:{value:1},circleColor:{value:new ft(s)},backgroundColor:{value:new ft(t)}},vertexShader:Sh,fragmentShader:`
            varying vec2 vUv;

            uniform float radius;
            uniform float density;
            uniform vec3 circleColor;
            uniform vec3 backgroundColor;

            float drawCircle(vec2 uv, vec2 position, float radius) {
                float dist = distance(uv, position);
                return 1.0 - smoothstep(radius - 0.01, radius + 0.01, dist);
            }

            void main() {
                vec2 uv = vUv * density;
                vec2 gridPos = fract(uv);
                vec2 gridCenter = vec2(0.5, 0.5);

                float circle = drawCircle(gridPos, gridCenter, radius);

                vec3 color = mix(backgroundColor, circleColor, circle);
                gl_FragColor = vec4(color, 1.0);
                // gl_FragColor = vec4(gridPos.x, gridPos.y, 0.0, 1.0);
            }`}),By=({foreground:s=255,background:t=16777215,side:e}={})=>new qe({uniforms:{inner_radius:{value:.45},outer_radius:{value:.5},vertical_spacing:{value:.5},vertical_stagger:{value:.25},horizontal_spacing:{value:.8},color0:{value:new ft(s)},color1:{value:new ft(t)}},side:e,vertexShader:Sh,fragmentShader:`
            // Fragment Shader
            varying vec2 vUv;

            uniform float inner_radius;
            uniform float outer_radius;
            uniform float vertical_spacing;
            uniform float vertical_stagger;
            uniform float horizontal_spacing;
            uniform vec3 color0;
            uniform vec3 color1;

            float drawArc(vec2 uv, vec2 center, float radius) {
                vec2 left_avoid = vec2(center.x - horizontal_spacing * 0.5, center.y - vertical_stagger);
                vec2 right_avoid = vec2(center.x + horizontal_spacing * 0.5, center.y - vertical_stagger);
                float dist = distance(uv, center);
                float left_dist = distance(uv, left_avoid);
                float right_dist = distance(uv, right_avoid);

                // draw the arc anywhere within radius, so long as it is not within left or right avoid circles (which have radius outer_radius)
                float arc = smoothstep(radius - 0.005, radius + 0.005, dist);
                float masks = step(outer_radius, left_dist) * step(outer_radius, right_dist);
                return arc * masks;
            }

            void main() {
                // generate the 4 arc colors ranging from color0 to color1
                vec3 c0 = color0;
                vec3 c1 = mix(color0, color1, 0.3333);
                vec3 c2 = mix(color0, color1, 0.6666);
                vec3 c3 = color1;


                // radiuses for each arc
                float r0 = outer_radius;
                float r1 = r0 * 0.75;
                float r2 = r0 * 0.50;
                float r3 = r0 * 0.25;
                float r4 = r0 * 0.0;

            
                // Create a grid where each cell is the size of the spacing
                vec2 scale = vec2(horizontal_spacing, vertical_spacing);
                vec2 uv = vUv / scale; // Scale the UV coordinates
                vec2 gridOffset = fract(uv);    // Position within the grid cell
                gridOffset *= scale; // Scale back to original size


                // just draw an arc in each cell
                vec2 center = vec2(horizontal_spacing * 0.5, 0.0);
                float arc0 = drawArc(gridOffset, center, r1) - drawArc(gridOffset, center, r0-0.01);
                float arc1 = drawArc(gridOffset, center, r2) - drawArc(gridOffset, center, r1-0.01);
                float arc2 = drawArc(gridOffset, center, r3) - drawArc(gridOffset, center, r2-0.01);
                float arc3 = drawArc(gridOffset, center, r4) - drawArc(gridOffset, center, r3-0.01);

                gl_FragColor =
                    + vec4(mix(vec3(0,0,0), c0, arc0), 1.0)
                    + vec4(mix(vec3(0,0,0), c1, arc1), 1.0)
                    + vec4(mix(vec3(0,0,0), c2, arc2), 1.0)
                    + vec4(mix(vec3(0,0,0), c3, arc3), 1.0);
                ;



                // gl_FragColor = vec4(gridOffset.x, gridOffset.y, 0.0, 1.0);

                // // Shift alternate rows by half a cell
                // if (mod(gridPos.y, 2.0) > 0.5) {
                //     gridOffset.x += 0.5;
                // }

                // // Adjust so the pattern repeats horizontally
                // gridOffset = fract(gridOffset);

                // // Draw the arc
                // float arc = drawArc(gridOffset, vec2(0.5, 0.5), radius);

                // // Mix the wave color and background color
                // vec3 color = mix(color1, color0, arc);

                // gl_FragColor = vec4(color, 1.0);
            }`}),zy=s=>{const t=new Rs,e=new ge(75,window.innerWidth/window.innerHeight,.1,1e3);new ah(e,s.domElement);const n=[[-8.5/2,11/2],[8.5/2,11/2],[8.5/2,-11/2],[-8.5/2,-11/2]],i=new Xn(n.map(([u,d])=>new G(u,d))),r=new Is(i);r.clearGroups(),r.addGroup(0,r.attributes.position.count*2,0),r.addGroup(0,r.attributes.position.count*2,1);const o=Fy({side:ke}),a=By({side:Cn}),c=new ee(r,[o,a]);return t.add(c),e.position.z=15,{update_scene:()=>{s.render(t,e)},camera:e,resetter:()=>{}}};window.THREE=Pv;const ky="1",Ju=document.getElementById("GameView"),ju=s=>{const t=new ff({antialias:!0});t.localClippingEnabled=!0,t.setSize(window.innerWidth,window.innerHeight),Ju.appendChild(t.domElement);const{update_scene:e,camera:n,resetter:i}=s(t),r=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()},o=()=>{requestAnimationFrame(o),e()};return o(),window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),r()}),()=>{Ju.removeChild(t.domElement),window.removeEventListener("resize",r),document.removeEventListener("keydown",i),i()}},Vy=()=>{const s=[Iv,ms([[-4.25,5.5],[4.25,5.5],[4.25,-5.5],[-4.25,-5.5]]),ms([[0,10],[9.511,3.09],[5.878,-8.09],[-5.878,-8.09],[-9.511,3.09]]),ms([[10,0],[5,8.66],[-5,8.66],[-10,0],[-5,-8.66],[5,-8.66]]),ms([[0,3],[-8.66,-5],[4.22,-5]]),ms([[0,10],[10,5],[5,-10],[0,-10],[-10,0],[-5,10]]),zy,Oy,qv,Wv];console.assert(s.length<=10,"Too many scenes included. Extra scenes will not be accessible via keyboard shortcuts.");const t=new Map;s.forEach((n,i)=>{const r=i.toString();t.set(r,n)});let e=ju(t.get(ky));document.addEventListener("keydown",n=>{const i=n.key;t.has(i)&&(e(),e=ju(t.get(i)))})};Vy();
