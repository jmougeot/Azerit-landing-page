/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dr="185";const dn="",Lt="srgb",zi="srgb-linear",Vi="linear",Ke="srgb";const jr="300 es";function wa(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pa(){const i=Hi("canvas");return i.style.display="block",i}const es={};function ts(...i){const e="THREE."+i.shift();console.log(e,...i)}function js(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=js(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=js(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hn(...i){const e=i.join(" ");e in es||(es[e]=!0,Ce(...i))}function Da(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const La={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ns=1234567;const ii=Math.PI/180,li=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function Lr(i,e){return(i%e+e)%e}function Ia(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fa(i,e,t){return i!==e?(t-i)/(e-i):0}function ri(i,e,t){return(1-t)*i+t*e}function Ua(i,e,t,n){return ri(i,e,1-Math.exp(-t*n))}function Na(i,e=1){return e-Math.abs(Lr(i,e*2)-e)}function Oa(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ba(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ga(i,e){return i+Math.floor(Math.random()*(e-i+1))}function za(i,e){return i+Math.random()*(e-i)}function Va(i){return i*(.5-Math.random())}function Ha(i){i!==void 0&&(ns=i);let e=ns+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ka(i){return i*ii}function Wa(i){return i*li}function Xa(i){return(i&i-1)===0&&i!==0}function qa(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ya(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ka(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),f=a((e+n)/2),m=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*f,l*m,l*h,o*c);break;case"YZY":i.set(l*h,o*f,l*m,o*c);break;case"ZXZ":i.set(l*m,l*h,o*f,o*c);break;case"XZX":i.set(o*f,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*f,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*f,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const is={DEG2RAD:ii,RAD2DEG:li,generateUUID:qn,clamp:Oe,euclideanModulo:Lr,mapLinear:Ia,inverseLerp:Fa,lerp:ri,damp:Ua,pingpong:Na,smoothstep:Oa,smootherstep:Ba,randInt:Ga,randFloat:za,randFloatSpread:Va,seededRandom:Ha,degToRad:ka,radToDeg:Wa,isPowerOfTwo:Xa,ceilPowerOfTwo:qa,floorPowerOfTwo:Ya,setQuaternionFromProperEuler:Ka,normalize:Tt,denormalize:Gn},Gr=class Gr{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gr.prototype.isVector2=!0;let be=Gr;class Yn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],m=n[r+3],h=s[a+0],p=s[a+1],v=s[a+2],S=s[a+3];if(m!==S||l!==h||c!==p||f!==v){let _=l*h+c*p+f*v+m*S;_<0&&(h=-h,p=-p,v=-v,S=-S,_=-_);let d=1-o;if(_<.9995){const b=Math.acos(_),R=Math.sin(b);d=Math.sin(d*b)/R,o=Math.sin(o*b)/R,l=l*d+h*o,c=c*d+p*o,f=f*d+v*o,m=m*d+S*o}else{l=l*d+h*o,c=c*d+p*o,f=f*d+v*o,m=m*d+S*o;const b=1/Math.sqrt(l*l+c*c+f*f+m*m);l*=b,c*=b,f*=b,m*=b}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],m=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+f*m+l*p-c*h,e[t+1]=l*v+f*h+c*m-o*p,e[t+2]=c*v+f*p+o*h-l*m,e[t+3]=f*v-o*m-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),m=o(s/2),h=l(n/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*f*m+c*p*v,this._y=c*p*m-h*f*v,this._z=c*f*v+h*p*m,this._w=c*f*m-h*p*v;break;case"YXZ":this._x=h*f*m+c*p*v,this._y=c*p*m-h*f*v,this._z=c*f*v-h*p*m,this._w=c*f*m+h*p*v;break;case"ZXY":this._x=h*f*m-c*p*v,this._y=c*p*m+h*f*v,this._z=c*f*v+h*p*m,this._w=c*f*m-h*p*v;break;case"ZYX":this._x=h*f*m-c*p*v,this._y=c*p*m+h*f*v,this._z=c*f*v-h*p*m,this._w=c*f*m+h*p*v;break;case"YZX":this._x=h*f*m+c*p*v,this._y=c*p*m+h*f*v,this._z=c*f*v-h*p*m,this._w=c*f*m-h*p*v;break;case"XZY":this._x=h*f*m-c*p*v,this._y=c*p*m-h*f*v,this._z=c*f*v+h*p*m,this._w=c*f*m+h*p*v;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],m=t[10],h=n+o+m;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>m){const p=2*Math.sqrt(1+n-o-m);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-n-m);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+m-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zr=class zr{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),f=2*(o*t-s*r),m=2*(s*n-a*t);return this.x=t+l*c+a*m-o*f,this.y=n+l*f+o*c-s*m,this.z=r+l*m+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ji.copy(this).projectOnVector(e),this.sub(Ji)}reflect(e){return this.sub(Ji.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zr.prototype.isVector3=!0;let I=zr;const Ji=new I,rs=new Yn,Vr=class Vr{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],m=n[7],h=n[2],p=n[5],v=n[8],S=r[0],_=r[3],d=r[6],b=r[1],R=r[4],M=r[7],A=r[2],E=r[5],P=r[8];return s[0]=a*S+o*b+l*A,s[3]=a*_+o*R+l*E,s[6]=a*d+o*M+l*P,s[1]=c*S+f*b+m*A,s[4]=c*_+f*R+m*E,s[7]=c*d+f*M+m*P,s[2]=h*S+p*b+v*A,s[5]=h*_+p*R+v*E,s[8]=h*d+p*M+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],m=f*a-o*c,h=o*l-f*s,p=c*s-a*l,v=t*m+n*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=m*S,e[1]=(r*c-f*n)*S,e[2]=(o*n-r*a)*S,e[3]=h*S,e[4]=(f*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($i.makeScale(e,t)),this}rotate(e){return Hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($i.makeRotation(-e)),this}translate(e,t){return Hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($i.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vr.prototype.isMatrix3=!0;let De=Vr;const $i=new De,ss=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),as=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Za(){const i={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ke&&(r.r=en(r.r),r.g=en(r.g),r.b=en(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dn?Vi:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zi]:{primaries:e,whitePoint:n,transfer:Vi,toXYZ:ss,fromXYZ:as,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:ss,fromXYZ:as,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const He=Za();function en(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bn;class Ja{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bn===void 0&&(bn=Hi("canvas")),bn.width=e.width,bn.height=e.height;const r=bn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=en(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(en(t[n]/255)*255):t[n]=en(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $a=0;class Ir{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$a++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qi(r[a].image)):s.push(Qi(r[a]))}else s=Qi(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qi(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Qa=0;const ji=new I;class yt extends yn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=yt.DEFAULT_ANISOTROPY,f=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qa++}),this.uuid=qn(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ji).x}get height(){return this.source.getSize(ji).y}get depth(){return this.source.getSize(ji).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=300;yt.DEFAULT_ANISOTROPY=1;const Hr=class Hr{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],f=l[4],m=l[8],h=l[1],p=l[5],v=l[9],S=l[2],_=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(m-S)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+h)<.1&&Math.abs(m+S)<.1&&Math.abs(v+_)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,M=(p+1)/2,A=(d+1)/2,E=(f+h)/4,P=(m+S)/4,g=(v+_)/4;return R>M&&R>A?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=E/n,s=P/n):M>A?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=g/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=P/s,r=g/s),this.set(n,r,s,t),this}let b=Math.sqrt((_-v)*(_-v)+(m-S)*(m-S)+(h-f)*(h-f));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(m-S)/b,this.z=(h-f)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hr.prototype.isVector4=!0;let ct=Hr;class ja extends yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new yt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kt extends ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ea extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eo extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ki=class ki{constructor(e,t,n,r,s,a,o,l,c,f,m,h,p,v,S,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,f,m,h,p,v,S,_)}set(e,t,n,r,s,a,o,l,c,f,m,h,p,v,S,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=m,d[14]=h,d[3]=p,d[7]=v,d[11]=S,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ki().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Rn.setFromMatrixColumn(e,0).length(),s=1/Rn.setFromMatrixColumn(e,1).length(),a=1/Rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const h=a*f,p=a*m,v=o*f,S=o*m;t[0]=l*f,t[4]=-l*m,t[8]=c,t[1]=p+v*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,p=l*m,v=c*f,S=c*m;t[0]=h+S*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=p*o-v,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,p=l*m,v=c*f,S=c*m;t[0]=h-S*o,t[4]=-a*m,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*f,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,p=a*m,v=o*f,S=o*m;t[0]=l*f,t[4]=v*c-p,t[8]=h*c+S,t[1]=l*m,t[5]=S*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*f,t[4]=S-h*m,t[8]=v*m+p,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*m+v,t[10]=h-S*m}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*f,t[4]=-m,t[8]=c*f,t[1]=h*m+S,t[5]=a*f,t[9]=p*m-v,t[2]=v*m-p,t[6]=o*f,t[10]=S*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(to,e,no)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),an.crossVectors(n,Pt),an.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),an.crossVectors(n,Pt)),an.normalize(),pi.crossVectors(Pt,an),r[0]=an.x,r[4]=pi.x,r[8]=Pt.x,r[1]=an.y,r[5]=pi.y,r[9]=Pt.y,r[2]=an.z,r[6]=pi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],m=n[5],h=n[9],p=n[13],v=n[2],S=n[6],_=n[10],d=n[14],b=n[3],R=n[7],M=n[11],A=n[15],E=r[0],P=r[4],g=r[8],T=r[12],F=r[1],D=r[5],O=r[9],W=r[13],q=r[2],B=r[6],X=r[10],k=r[14],$=r[3],j=r[7],oe=r[11],fe=r[15];return s[0]=a*E+o*F+l*q+c*$,s[4]=a*P+o*D+l*B+c*j,s[8]=a*g+o*O+l*X+c*oe,s[12]=a*T+o*W+l*k+c*fe,s[1]=f*E+m*F+h*q+p*$,s[5]=f*P+m*D+h*B+p*j,s[9]=f*g+m*O+h*X+p*oe,s[13]=f*T+m*W+h*k+p*fe,s[2]=v*E+S*F+_*q+d*$,s[6]=v*P+S*D+_*B+d*j,s[10]=v*g+S*O+_*X+d*oe,s[14]=v*T+S*W+_*k+d*fe,s[3]=b*E+R*F+M*q+A*$,s[7]=b*P+R*D+M*B+A*j,s[11]=b*g+R*O+M*X+A*oe,s[15]=b*T+R*W+M*k+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],m=e[6],h=e[10],p=e[14],v=e[3],S=e[7],_=e[11],d=e[15],b=l*p-c*h,R=o*p-c*m,M=o*h-l*m,A=a*p-c*f,E=a*h-l*f,P=a*m-o*f;return t*(S*b-_*R+d*M)-n*(v*b-_*A+d*E)+r*(v*R-S*A+d*P)-s*(v*M-S*E+_*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],m=e[9],h=e[10],p=e[11],v=e[12],S=e[13],_=e[14],d=e[15],b=t*o-n*a,R=t*l-r*a,M=t*c-s*a,A=n*l-r*o,E=n*c-s*o,P=r*c-s*l,g=f*S-m*v,T=f*_-h*v,F=f*d-p*v,D=m*_-h*S,O=m*d-p*S,W=h*d-p*_,q=b*W-R*O+M*D+A*F-E*T+P*g;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/q;return e[0]=(o*W-l*O+c*D)*B,e[1]=(r*O-n*W-s*D)*B,e[2]=(S*P-_*E+d*A)*B,e[3]=(h*E-m*P-p*A)*B,e[4]=(l*F-a*W-c*T)*B,e[5]=(t*W-r*F+s*T)*B,e[6]=(_*M-v*P-d*R)*B,e[7]=(f*P-h*M+p*R)*B,e[8]=(a*O-o*F+c*g)*B,e[9]=(n*F-t*O-s*g)*B,e[10]=(v*E-S*M+d*b)*B,e[11]=(m*M-f*E-p*b)*B,e[12]=(o*T-a*D-l*g)*B,e[13]=(t*D-n*T+r*g)*B,e[14]=(S*R-v*A-_*b)*B,e[15]=(f*A-m*R+h*b)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,m=o+o,h=s*c,p=s*f,v=s*m,S=a*f,_=a*m,d=o*m,b=l*c,R=l*f,M=l*m,A=n.x,E=n.y,P=n.z;return r[0]=(1-(S+d))*A,r[1]=(p+M)*A,r[2]=(v-R)*A,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(h+d))*E,r[6]=(_+b)*E,r[7]=0,r[8]=(v+R)*P,r[9]=(_-b)*P,r[10]=(1-(h+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Rn.set(r[0],r[1],r[2]).length();const o=Rn.set(r[4],r[5],r[6]).length(),l=Rn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Bt.copy(this);const c=1/a,f=1/o,m=1/l;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=f,Bt.elements[5]*=f,Bt.elements[6]*=f,Bt.elements[8]*=m,Bt.elements[9]*=m,Bt.elements[10]*=m,t.setFromRotationMatrix(Bt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=2e3,l=!1){const c=this.elements,f=2*s/(t-e),m=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(o===2e3)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===2001)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,l=!1){const c=this.elements,f=2/(t-e),m=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(o===2e3)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===2001)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ki.prototype.isMatrix4=!0;let ut=ki;const Rn=new I,Bt=new ut,to=new I(0,0,0),no=new I(1,1,1),an=new I,pi=new I,Pt=new I,os=new ut,ls=new Yn;class En{constructor(e=0,t=0,n=0,r=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],m=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return os.makeRotationFromQuaternion(e),this.setFromRotationMatrix(os,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ls.setFromEuler(this),this.setFromQuaternion(ls,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let io=0;const cs=new I,Cn=new Yn,Zt=new ut,mi=new I,Zn=new I,ro=new I,so=new Yn,us=new I(1,0,0),hs=new I(0,1,0),fs=new I(0,0,1),ds={type:"added"},ao={type:"removed"},wn={type:"childadded",child:null},er={type:"childremoved",child:null};class Ct extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:io++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new I,t=new En,n=new Yn,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new De}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.premultiply(Cn),this}rotateX(e){return this.rotateOnAxis(us,e)}rotateY(e){return this.rotateOnAxis(hs,e)}rotateZ(e){return this.rotateOnAxis(fs,e)}translateOnAxis(e,t){return cs.copy(e).applyQuaternion(this.quaternion),this.position.add(cs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(us,e)}translateY(e){return this.translateOnAxis(hs,e)}translateZ(e){return this.translateOnAxis(fs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mi.copy(e):mi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(Zn,mi,this.up):Zt.lookAt(mi,Zn,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),Cn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ds),wn.child=e,this.dispatchEvent(wn),wn.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ao),er.child=e,this.dispatchEvent(er),er.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ds),wn.child=e,this.dispatchEvent(wn),wn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,e,ro),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,so,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),m=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oo={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const _=t.getJointPose(S,n),d=this._getHandJoint(c,S);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=f.position.distanceTo(m.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oo)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const na={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},_i={h:0,s:0,l:0};function nr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=He.workingColorSpace){if(e=Lr(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=nr(a,s,e+1/3),this.g=nr(a,s,e),this.b=nr(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=na[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return He.workingToColorSpace(Et.copy(this),e),Math.round(Oe(Et.r*255,0,255))*65536+Math.round(Oe(Et.g*255,0,255))*256+Math.round(Oe(Et.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=f<=.5?m/(a+o):m/(2-a-o),a){case n:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-n)/m+2;break;case s:l=(n-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Lt){He.workingToColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(on),this.setHSL(on.h+e,on.s+t,on.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(_i);const n=ri(on.h,_i.h,t),r=ri(on.s,_i.s,t),s=ri(on.l,_i.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Be;Be.NAMES=na;class lo extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gt=new I,Jt=new I,ir=new I,$t=new I,Pn=new I,Dn=new I,ps=new I,rr=new I,sr=new I,ar=new I,or=new ct,lr=new ct,cr=new ct;class Vt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),Jt.subVectors(n,t),ir.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(Jt),l=Gt.dot(ir),c=Jt.dot(Jt),f=Jt.dot(ir),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,p=(c*l-o*f)*h,v=(a*f-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$t)===null?!1:$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,$t)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$t.x),l.addScaledVector(a,$t.y),l.addScaledVector(o,$t.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return or.setScalar(0),lr.setScalar(0),cr.setScalar(0),or.fromBufferAttribute(e,t),lr.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(or,s.x),a.addScaledVector(lr,s.y),a.addScaledVector(cr,s.z),a}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),Jt.subVectors(e,t),Gt.cross(Jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Gt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Pn.subVectors(r,n),Dn.subVectors(s,n),rr.subVectors(e,n);const l=Pn.dot(rr),c=Dn.dot(rr);if(l<=0&&c<=0)return t.copy(n);sr.subVectors(e,r);const f=Pn.dot(sr),m=Dn.dot(sr);if(f>=0&&m<=f)return t.copy(r);const h=l*m-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Pn,a);ar.subVectors(e,s);const p=Pn.dot(ar),v=Dn.dot(ar);if(v>=0&&p<=v)return t.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Dn,o);const _=f*v-p*m;if(_<=0&&m-f>=0&&p-v>=0)return ps.subVectors(s,r),o=(m-f)/(m-f+(p-v)),t.copy(r).addScaledVector(ps,o);const d=1/(_+S+h);return a=S*d,o=h*d,t.copy(n).addScaledVector(Pn,a).addScaledVector(Dn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ci{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gi.copy(n.boundingBox)),gi.applyMatrix4(e.matrixWorld),this.union(gi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),vi.subVectors(this.max,Jn),Ln.subVectors(e.a,Jn),In.subVectors(e.b,Jn),Fn.subVectors(e.c,Jn),ln.subVectors(In,Ln),cn.subVectors(Fn,In),_n.subVectors(Ln,Fn);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-_n.z,_n.y,ln.z,0,-ln.x,cn.z,0,-cn.x,_n.z,0,-_n.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-_n.y,_n.x,0];return!ur(t,Ln,In,Fn,vi)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,Ln,In,Fn,vi))?!1:(xi.crossVectors(ln,cn),t=[xi.x,xi.y,xi.z],ur(t,Ln,In,Fn,vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qt=[new I,new I,new I,new I,new I,new I,new I,new I],zt=new I,gi=new ci,Ln=new I,In=new I,Fn=new I,ln=new I,cn=new I,_n=new I,Jn=new I,vi=new I,xi=new I,gn=new I;function ur(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gn.fromArray(i,s);const o=r.x*Math.abs(gn.x)+r.y*Math.abs(gn.y)+r.z*Math.abs(gn.z),l=e.dot(gn),c=t.dot(gn),f=n.dot(gn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const mt=new I,Mi=new be;let co=0;class Ot extends yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:co++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix3(e),this.setXY(t,Mi.x,Mi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ra extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}const uo=new ci,$n=new I,hr=new I;class Wi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uo.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$n.subVectors(e,this.center);const t=$n.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($n,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($n.copy(e.center).add(hr)),this.expandByPoint($n.copy(e.center).sub(hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ho=0;const Ut=new ut,fr=new Ct,Un=new I,Dt=new ci,Qn=new ci,vt=new I;class Rt extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ho++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wa(e)?ra:ia)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Dt.min,Qn.min),Dt.expandByPoint(vt),vt.addVectors(Dt.max,Qn.max),Dt.expandByPoint(vt)):(Dt.expandByPoint(Qn.min),Dt.expandByPoint(Qn.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)vt.fromBufferAttribute(o,c),l&&(Un.fromBufferAttribute(e,c),vt.add(Un)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new I,l[g]=new I;const c=new I,f=new I,m=new I,h=new be,p=new be,v=new be,S=new I,_=new I;function d(g,T,F){c.fromBufferAttribute(n,g),f.fromBufferAttribute(n,T),m.fromBufferAttribute(n,F),h.fromBufferAttribute(s,g),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,F),f.sub(c),m.sub(c),p.sub(h),v.sub(h);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(m,-p.y).multiplyScalar(D),_.copy(m).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(D),o[g].add(S),o[T].add(S),o[F].add(S),l[g].add(_),l[T].add(_),l[F].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let g=0,T=b.length;g<T;++g){const F=b[g],D=F.start,O=F.count;for(let W=D,q=D+O;W<q;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const R=new I,M=new I,A=new I,E=new I;function P(g){A.fromBufferAttribute(r,g),E.copy(A);const T=o[g];R.copy(T),R.sub(A.multiplyScalar(A.dot(T))).normalize(),M.crossVectors(E,T);const D=M.dot(l[g])<0?-1:1;a.setXYZW(g,R.x,R.y,R.z,D)}for(let g=0,T=b.length;g<T;++g){const F=b[g],D=F.start,O=F.count;for(let W=D,q=D+O;W<q;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,f=new I,m=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,_),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,_),o.add(f),l.add(f),c.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,m=o.normalized,h=new c.constructor(l.length*f);let p=0,v=0;for(let S=0,_=l.length;S<_;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let d=0;d<f;d++)h[v++]=c[p++]}return new Ot(h,f,m)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,m=c.length;f<m;f++){const h=c[f],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let m=0,h=c.length;m<h;m++){const p=c[m];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],m=s[c];for(let h=0,p=m.length;h<p;h++)f.push(m[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fo=0;class ui extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fo++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jt=new I,dr=new I,Si=new I,un=new I,pr=new I,Ei=new I,mr=new I;class sa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){dr.copy(e).add(t).multiplyScalar(.5),Si.copy(t).sub(e).normalize(),un.copy(this.origin).sub(dr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Si),o=un.dot(this.direction),l=-un.dot(Si),c=un.lengthSq(),f=Math.abs(1-a*a);let m,h,p,v;if(f>0)if(m=a*l-o,h=a*o-l,v=s*f,m>=0)if(h>=-v)if(h<=v){const S=1/f;m*=S,h*=S,p=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h=-s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h<=-v?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-l),s),p=-m*m+h*(h+2*l)+c):h<=v?(m=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-l),s),p=-m*m+h*(h+2*l)+c);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(dr).addScaledVector(Si,h),p}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),r=jt.dot(jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-h.z)*m,l=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,l=(e.min.z-h.z)*m),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,r,s){pr.subVectors(t,e),Ei.subVectors(n,e),mr.crossVectors(pr,Ei);let a=this.direction.dot(mr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,e);const l=o*this.direction.dot(Ei.crossVectors(un,Ei));if(l<0)return null;const c=o*this.direction.dot(pr.cross(un));if(c<0||l+c>a)return null;const f=-o*un.dot(mr);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ms=new ut,vn=new sa,yi=new Wi,_s=new I,Ti=new I,Ai=new I,bi=new I,_r=new I,Ri=new I,gs=new I,Ci=new I;class bt extends Ct{constructor(e=new Rt,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ri.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],m=s[l];f!==0&&(_r.fromBufferAttribute(m,e),a?Ri.addScaledVector(_r,f):Ri.addScaledVector(_r.sub(t),f))}t.add(Ri)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(s),vn.copy(e.ray).recast(e.near),!(yi.containsPoint(vn.origin)===!1&&(vn.intersectSphere(yi,_s)===null||vn.origin.distanceToSquared(_s)>(e.far-e.near)**2))&&(ms.copy(s).invert(),vn.copy(e.ray).applyMatrix4(ms),!(n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const _=h[v],d=a[_.materialIndex],b=Math.max(_.start,p.start),R=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let M=b,A=R;M<A;M+=3){const E=o.getX(M),P=o.getX(M+1),g=o.getX(M+2);r=wi(this,d,e,n,c,f,m,E,P,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let _=v,d=S;_<d;_+=3){const b=o.getX(_),R=o.getX(_+1),M=o.getX(_+2);r=wi(this,a,e,n,c,f,m,b,R,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const _=h[v],d=a[_.materialIndex],b=Math.max(_.start,p.start),R=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let M=b,A=R;M<A;M+=3){const E=M,P=M+1,g=M+2;r=wi(this,d,e,n,c,f,m,E,P,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let _=v,d=S;_<d;_+=3){const b=_,R=_+1,M=_+2;r=wi(this,a,e,n,c,f,m,b,R,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function po(i,e,t,n,r,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;Ci.copy(o),Ci.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ci);return c<t.near||c>t.far?null:{distance:c,point:Ci.clone(),object:i}}function wi(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ti),i.getVertexPosition(l,Ai),i.getVertexPosition(c,bi);const f=po(i,e,t,n,Ti,Ai,bi,gs);if(f){const m=new I;Vt.getBarycoord(gs,Ti,Ai,bi,m),r&&(f.uv=Vt.getInterpolatedAttribute(r,o,l,c,m,new be)),s&&(f.uv1=Vt.getInterpolatedAttribute(s,o,l,c,m,new be)),a&&(f.normal=Vt.getInterpolatedAttribute(a,o,l,c,m,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Vt.getNormal(Ti,Ai,bi,h.normal),f.face=h,f.barycoord=m}return f}class mo extends yt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,f=1003,m,h){super(null,a,o,l,c,f,r,s,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gr=new I,_o=new I,go=new De;class Mn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=gr.subVectors(n,t).cross(_o.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(gr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||go.getNormalMatrix(e),r=this.coplanarPoint(gr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xn=new Wi,vo=new be(.5,.5),Pi=new I;class aa{constructor(e=new Mn,t=new Mn,n=new Mn,r=new Mn,s=new Mn,a=new Mn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],m=s[5],h=s[6],p=s[7],v=s[8],S=s[9],_=s[10],d=s[11],b=s[12],R=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-a,p-f,d-v,A-b).normalize(),r[1].setComponents(c+a,p+f,d+v,A+b).normalize(),r[2].setComponents(c+o,p+m,d+S,A+R).normalize(),r[3].setComponents(c-o,p-m,d-S,A-R).normalize(),n)r[4].setComponents(l,h,_,M).normalize(),r[5].setComponents(c-l,p-h,d-_,A-M).normalize();else if(r[4].setComponents(c-l,p-h,d-_,A-M).normalize(),t===2e3)r[5].setComponents(c+l,p+h,d+_,A+M).normalize();else if(t===2001)r[5].setComponents(l,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(e){xn.center.set(0,0,0);const t=vo.distanceTo(e.center);return xn.radius=.7071067811865476+t,xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Pi.x=r.normal.x>0?e.max.x:e.min.x,Pi.y=r.normal.y>0?e.max.y:e.min.y,Pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xo extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vs=new ut,Cr=new sa,Di=new Wi,Li=new I;class Mo extends Ct{constructor(e=new Rt,t=new xo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),Di.radius+=s,e.ray.intersectsSphere(Di)===!1)return;vs.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(vs);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,S=p;v<S;v++){const _=c.getX(v);Li.fromBufferAttribute(m,_),xs(Li,_,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let v=h,S=p;v<S;v++)Li.fromBufferAttribute(m,v),xs(Li,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xs(i,e,t,n,r,s,a){const o=Cr.distanceSqToPoint(i);if(o<t){const l=new I;Cr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class oa extends yt{constructor(e=[],t=301,n,r,s,a,o,l,c,f){super(e,t,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class So extends yt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn extends yt{constructor(e,t,n=1014,r,s,a,o=1003,l=1003,c,f=1026,m=1){if(f!==1026&&f!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:m};super(h,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Eo extends Wn{constructor(e,t=1014,n=301,r,s,a=1003,o=1003,l,c=1026){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class la extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hi extends Rt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],m=[];let h=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(m,2));function v(S,_,d,b,R,M,A,E,P,g,T){const F=M/P,D=A/g,O=M/2,W=A/2,q=E/2,B=P+1,X=g+1;let k=0,$=0;const j=new I;for(let oe=0;oe<X;oe++){const fe=oe*D-W;for(let _e=0;_e<B;_e++){const Ve=_e*F-O;j[S]=Ve*b,j[_]=fe*R,j[d]=q,c.push(j.x,j.y,j.z),j[S]=0,j[_]=0,j[d]=E>0?1:-1,f.push(j.x,j.y,j.z),m.push(_e/P),m.push(1-oe/g),k+=1}}for(let oe=0;oe<g;oe++)for(let fe=0;fe<P;fe++){const _e=h+fe+B*oe,Ve=h+fe+B*(oe+1),tt=h+(fe+1)+B*(oe+1),Ge=h+(fe+1)+B*oe;l.push(_e,Ve,Ge),l.push(Ve,tt,Ge),$+=6}o.addGroup(p,$,T),p+=$,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fr extends Rt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],m=[],h=[],p=[];let v=0;const S=[],_=n/2;let d=0;b(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(f),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function b(){const M=new I,A=new I;let E=0;const P=(t-e)/n;for(let g=0;g<=s;g++){const T=[],F=g/s,D=F*(t-e)+e;for(let O=0;O<=r;O++){const W=O/r,q=W*l+o,B=Math.sin(q),X=Math.cos(q);A.x=D*B,A.y=-F*n+_,A.z=D*X,m.push(A.x,A.y,A.z),M.set(B,P,X).normalize(),h.push(M.x,M.y,M.z),p.push(W,1-F),T.push(v++)}S.push(T)}for(let g=0;g<r;g++)for(let T=0;T<s;T++){const F=S[T][g],D=S[T+1][g],O=S[T+1][g+1],W=S[T][g+1];(e>0||T!==0)&&(f.push(F,D,W),E+=3),(t>0||T!==s-1)&&(f.push(D,O,W),E+=3)}c.addGroup(d,E,0),d+=E}function R(M){const A=v,E=new be,P=new I;let g=0;const T=M===!0?e:t,F=M===!0?1:-1;for(let O=1;O<=r;O++)m.push(0,_*F,0),h.push(0,F,0),p.push(.5,.5),v++;const D=v;for(let O=0;O<=r;O++){const q=O/r*l+o,B=Math.cos(q),X=Math.sin(q);P.x=T*X,P.y=_*F,P.z=T*B,m.push(P.x,P.y,P.z),h.push(0,F,0),E.x=B*.5+.5,E.y=X*.5*F+.5,p.push(E.x,E.y),v++}for(let O=0;O<r;O++){const W=A+O,q=D+O;M===!0?f.push(q,q+1,W):f.push(q+1,q,W),g+=3}c.addGroup(d,g,M===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const f=n[r],h=n[r+1]-f,p=(a-f)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new be:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,r=[],s=[],a=[],o=new I,l=new ut;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),m=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Oe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Oe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ca extends tn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),m=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*m+this.aX,c=h*m+p*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yo extends ca{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ur(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,m){let h=(a-s)/c-(o-s)/(c+f)+(o-a)/f,p=(o-a)/f-(l-a)/(f+m)+(l-o)/m;h*=f,p*=f,r(a,o,h,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Ms=new I,Ss=new I,vr=new Ur,xr=new Ur,Mr=new Ur;class To extends tn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(Ss.subVectors(r[0],r[1]).add(r[0]),c=Ss);const m=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(Ms.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Ms),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(m),p),S=Math.pow(m.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p);S<1e-4&&(S=1),v<1e-4&&(v=S),_<1e-4&&(_=S),vr.initNonuniformCatmullRom(c.x,m.x,h.x,f.x,v,S,_),xr.initNonuniformCatmullRom(c.y,m.y,h.y,f.y,v,S,_),Mr.initNonuniformCatmullRom(c.z,m.z,h.z,f.z,v,S,_)}else this.curveType==="catmullrom"&&(vr.initCatmullRom(c.x,m.x,h.x,f.x,this.tension),xr.initCatmullRom(c.y,m.y,h.y,f.y,this.tension),Mr.initCatmullRom(c.z,m.z,h.z,f.z,this.tension));return n.set(vr.calc(l),xr.calc(l),Mr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Es(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Ao(i,e){const t=1-i;return t*t*e}function bo(i,e){return 2*(1-i)*i*e}function Ro(i,e){return i*i*e}function si(i,e,t,n){return Ao(i,e)+bo(i,t)+Ro(i,n)}function Co(i,e){const t=1-i;return t*t*t*e}function wo(i,e){const t=1-i;return 3*t*t*i*e}function Po(i,e){return 3*(1-i)*i*i*e}function Do(i,e){return i*i*i*e}function ai(i,e,t,n,r){return Co(i,e)+wo(i,t)+Po(i,n)+Do(i,r)}class Lo extends tn{constructor(e=new be,t=new be,n=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ai(e,r.x,s.x,a.x,o.x),ai(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Io extends tn{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ai(e,r.x,s.x,a.x,o.x),ai(e,r.y,s.y,a.y,o.y),ai(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fo extends tn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uo extends tn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class No extends tn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(si(e,r.x,s.x,a.x),si(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nr extends tn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(si(e,r.x,s.x,a.x),si(e,r.y,s.y,a.y),si(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oo extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],m=r[a>r.length-3?r.length-1:a+2];return n.set(Es(o,l.x,c.x,f.x,m.x),Es(o,l.y,c.y,f.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new be().fromArray(r))}return this}}var Bo=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:To,CubicBezierCurve:Lo,CubicBezierCurve3:Io,EllipseCurve:ca,LineCurve:Fo,LineCurve3:Uo,QuadraticBezierCurve:No,QuadraticBezierCurve3:Nr,SplineCurve:Oo});class Xi extends Rt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,m=e/o,h=t/l,p=[],v=[],S=[],_=[];for(let d=0;d<f;d++){const b=d*h-a;for(let R=0;R<c;R++){const M=R*m-s;v.push(M,-b,0),S.push(0,0,1),_.push(R/o),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const R=b+c*d,M=b+c*(d+1),A=b+1+c*(d+1),E=b+1+c*d;p.push(R,M,E),p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Or extends Rt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let m=e;const h=(t-e)/r,p=new I,v=new be;for(let S=0;S<=r;S++){for(let _=0;_<=n;_++){const d=s+_/n*a;p.x=m*Math.cos(d),p.y=m*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,f.push(v.x,v.y)}m+=h}for(let S=0;S<r;S++){const _=S*(n+1);for(let d=0;d<n;d++){const b=d+_,R=b,M=b+n+1,A=b+n+2,E=b+1;o.push(R,M,E),o.push(M,A,E)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class oi extends Rt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],m=new I,h=new I,p=[],v=[],S=[],_=[];for(let d=0;d<=n;d++){const b=[],R=d/n,M=a+R*o,A=e*Math.cos(M),E=Math.sqrt(e*e-A*A);let P=0;d===0&&a===0?P=.5/t:d===n&&l===Math.PI&&(P=-.5/t);for(let g=0;g<=t;g++){const T=g/t,F=r+T*s;m.x=-E*Math.cos(F),m.y=A,m.z=E*Math.sin(F),v.push(m.x,m.y,m.z),h.copy(m).normalize(),S.push(h.x,h.y,h.z),_.push(T+P,1-R),b.push(c++)}f.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const R=f[d][b+1],M=f[d][b],A=f[d+1][b],E=f[d+1][b+1];(d!==0||a>0)&&p.push(R,M,E),(d!==n-1||l<Math.PI)&&p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Br extends Rt{constructor(e=new Nr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new be;let f=new I;const m=[],h=[],p=[],v=[];S(),this.setIndex(v),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function S(){for(let R=0;R<t;R++)_(R);_(s===!1?t:0),b(),d()}function _(R){f=e.getPointAt(R/t,f);const M=a.normals[R],A=a.binormals[R];for(let E=0;E<=r;E++){const P=E/r*Math.PI*2,g=Math.sin(P),T=-Math.cos(P);l.x=T*M.x+g*A.x,l.y=T*M.y+g*A.y,l.z=T*M.z+g*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=f.x+n*l.x,o.y=f.y+n*l.y,o.z=f.z+n*l.z,m.push(o.x,o.y,o.z)}}function d(){for(let R=1;R<=t;R++)for(let M=1;M<=r;M++){const A=(r+1)*(R-1)+(M-1),E=(r+1)*R+(M-1),P=(r+1)*R+M,g=(r+1)*(R-1)+M;v.push(A,E,g),v.push(E,P,g)}}function b(){for(let R=0;R<=t;R++)for(let M=0;M<=r;M++)c.x=R/t,c.y=M/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Br(new Bo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(ys(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ys(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Xn(i[t]);for(const r in n)e[r]=n[r]}return e}function ys(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Go(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ua(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const zo={clone:Xn,merge:At};var Vo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ho=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vo,this.fragmentShader=Ho,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xn(e.uniforms),this.uniformsGroups=Go(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new be().fromArray(r.value);break;case"v3":this.uniforms[n].value=new I().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(r.value);break;case"m3":this.uniforms[n].value=new De().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ko extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wo extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xo extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ii=new I,Fi=new Yn,Xt=new I;class ha extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ii,Fi,Xt),Xt.x===1&&Xt.y===1&&Xt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ii,Fi,Xt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ii,Fi,Xt),Xt.x===1&&Xt.y===1&&Xt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ii,Fi,Xt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hn=new I,Ts=new be,As=new be;class Nt extends ha{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return li*2*Math.atan(Math.tan(ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,Ts,As),t.subVectors(As,Ts)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ii*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fa extends ha{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nn=-90,On=1;class qo extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(Nn,On,e,t);r.layers=this.layers,this.add(r);const s=new Nt(Nn,On,e,t);s.layers=this.layers,this.add(s);const a=new Nt(Nn,On,e,t);a.layers=this.layers,this.add(a);const o=new Nt(Nn,On,e,t);o.layers=this.layers,this.add(o);const l=new Nt(Nn,On,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Nn,On,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,h,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Yo extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kr=class kr{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};kr.prototype.isMatrix2=!0;let bs=kr;function Rs(i,e,t,n){const r=Ko(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ko(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dr}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dr);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function da(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Zo(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,m=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){const f=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,f);else{m.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<m.length;p++){const v=m[h],S=m[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,m[h]=S)}m.length=h+1;for(let p=0,v=m.length;p<v;p++){const S=m[p];i.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Jo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$o=`#ifdef USE_ALPHAHASH
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
#endif`,Qo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n1=`#ifdef USE_AOMAP
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
#endif`,i1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c1=`#ifdef USE_IRIDESCENCE
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
#endif`,u1=`#ifdef USE_BUMPMAP
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S1=`vec3 transformedNormal = objectNormal;
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
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O1=`#ifdef USE_GRADIENTMAP
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
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,k1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,K1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a2=`#if defined( USE_POINTS_UV )
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
#endif`,o2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`#ifdef USE_MORPHTARGETS
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
#endif`,d2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x2=`#ifdef USE_NORMALMAP
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
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,b2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,U2=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,N2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O2=`#ifdef USE_SKINNING
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
#endif`,B2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k2=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X2=`#ifdef USE_TRANSMISSION
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$2=`uniform sampler2D t2D;
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
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
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
}`,i0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
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
}`,c0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,p0=`#define MATCAP
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
}`,m0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,g0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v0=`#define PHONG
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
}`,x0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M0=`#define STANDARD
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
}`,S0=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,E0=`#define TOON
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
}`,y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,T0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,C0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,w0=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Jo,alphahash_pars_fragment:$o,alphamap_fragment:Qo,alphamap_pars_fragment:jo,alphatest_fragment:e1,alphatest_pars_fragment:t1,aomap_fragment:n1,aomap_pars_fragment:i1,batching_pars_vertex:r1,batching_vertex:s1,begin_vertex:a1,beginnormal_vertex:o1,bsdfs:l1,iridescence_fragment:c1,bumpmap_pars_fragment:u1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:f1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:p1,color_fragment:m1,color_pars_fragment:_1,color_pars_vertex:g1,color_vertex:v1,common:x1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:S1,displacementmap_pars_vertex:E1,displacementmap_vertex:y1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:b1,colorspace_pars_fragment:R1,envmap_fragment:C1,envmap_common_pars_fragment:w1,envmap_pars_fragment:P1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:H1,envmap_vertex:L1,fog_vertex:I1,fog_pars_vertex:F1,fog_fragment:U1,fog_pars_fragment:N1,gradientmap_pars_fragment:O1,lightmap_pars_fragment:B1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:z1,lights_pars_begin:V1,lights_toon_fragment:k1,lights_toon_pars_fragment:W1,lights_phong_fragment:X1,lights_phong_pars_fragment:q1,lights_physical_fragment:Y1,lights_physical_pars_fragment:K1,lights_fragment_begin:Z1,lights_fragment_maps:J1,lights_fragment_end:$1,lightprobes_pars_fragment:Q1,logdepthbuf_fragment:j1,logdepthbuf_pars_fragment:e2,logdepthbuf_pars_vertex:t2,logdepthbuf_vertex:n2,map_fragment:i2,map_pars_fragment:r2,map_particle_fragment:s2,map_particle_pars_fragment:a2,metalnessmap_fragment:o2,metalnessmap_pars_fragment:l2,morphinstance_vertex:c2,morphcolor_vertex:u2,morphnormal_vertex:h2,morphtarget_pars_vertex:f2,morphtarget_vertex:d2,normal_fragment_begin:p2,normal_fragment_maps:m2,normal_pars_fragment:_2,normal_pars_vertex:g2,normal_vertex:v2,normalmap_pars_fragment:x2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:S2,clearcoat_pars_fragment:E2,iridescence_pars_fragment:y2,opaque_fragment:T2,packing:A2,premultiplied_alpha_fragment:b2,project_vertex:R2,dithering_fragment:C2,dithering_pars_fragment:w2,roughnessmap_fragment:P2,roughnessmap_pars_fragment:D2,shadowmap_pars_fragment:L2,shadowmap_pars_vertex:I2,shadowmap_vertex:F2,shadowmask_pars_fragment:U2,skinbase_vertex:N2,skinning_pars_vertex:O2,skinning_vertex:B2,skinnormal_vertex:G2,specularmap_fragment:z2,specularmap_pars_fragment:V2,tonemapping_fragment:H2,tonemapping_pars_fragment:k2,transmission_fragment:W2,transmission_pars_fragment:X2,uv_pars_fragment:q2,uv_pars_vertex:Y2,uv_vertex:K2,worldpos_vertex:Z2,background_vert:J2,background_frag:$2,backgroundCube_vert:Q2,backgroundCube_frag:j2,cube_vert:e0,cube_frag:t0,depth_vert:n0,depth_frag:i0,distance_vert:r0,distance_frag:s0,equirect_vert:a0,equirect_frag:o0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:u0,meshbasic_frag:h0,meshlambert_vert:f0,meshlambert_frag:d0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:_0,meshnormal_frag:g0,meshphong_vert:v0,meshphong_frag:x0,meshphysical_vert:M0,meshphysical_frag:S0,meshtoon_vert:E0,meshtoon_frag:y0,points_vert:T0,points_frag:A0,shadow_vert:b0,shadow_frag:R0,sprite_vert:C0,sprite_frag:w0},ue={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Yt={basic:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:At([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:At([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:At([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:At([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:At([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:At([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:At([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:At([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:At([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:At([ue.lights,ue.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Yt.physical={uniforms:At([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ui={r:0,b:0,g:0},P0=new ut,pa=new De;pa.set(-1,0,0,0,1,0,0,0,1);function D0(i,e,t,n,r,s){const a=new Be(0);let o=r===!0?0:1,l,c,f=null,m=0,h=null;function p(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const M=b.backgroundBlurriness>0;R=e.get(R,M)}return R}function v(b){let R=!1;const M=p(b);M===null?_(a,o):M&&M.isColor&&(_(M,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,R){const M=p(R);M&&(M.isCubeTexture||M.mapping===306)?(c===void 0&&(c=new bt(new hi(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Xn(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pa),c.material.toneMapped=He.getTransfer(M.colorSpace)!==Ke,(f!==M||m!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,m=M.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new bt(new Xi(2,2),new It({name:"BackgroundMaterial",uniforms:Xn(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=He.getTransfer(M.colorSpace)!==Ke,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,m=M.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function _(b,R){b.getRGB(Ui,ua(i)),t.buffers.color.setClear(Ui.r,Ui.g,Ui.b,R,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,_(a,o)},render:v,addToRenderList:S,dispose:d}}function L0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(D,O,W,q,B){let X=!1;const k=m(D,q,W,O);s!==k&&(s=k,c(s.object)),X=p(D,q,W,B),X&&v(D,q,W,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(D,O,W,q),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function f(D){return i.deleteVertexArray(D)}function m(D,O,W,q){const B=q.wireframe===!0;let X=n[O.id];X===void 0&&(X={},n[O.id]=X);const k=D.isInstancedMesh===!0?D.id:0;let $=X[k];$===void 0&&($={},X[k]=$);let j=$[W.id];j===void 0&&(j={},$[W.id]=j);let oe=j[B];return oe===void 0&&(oe=h(l()),j[B]=oe),oe}function h(D){const O=[],W=[],q=[];for(let B=0;B<t;B++)O[B]=0,W[B]=0,q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:q,object:D,attributes:{},index:null}}function p(D,O,W,q){const B=s.attributes,X=O.attributes;let k=0;const $=W.getAttributes();for(const j in $)if($[j].location>=0){const fe=B[j];let _e=X[j];if(_e===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),fe===void 0||fe.attribute!==_e||_e&&fe.data!==_e.data)return!0;k++}return s.attributesNum!==k||s.index!==q}function v(D,O,W,q){const B={},X=O.attributes;let k=0;const $=W.getAttributes();for(const j in $)if($[j].location>=0){let fe=X[j];fe===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));const _e={};_e.attribute=fe,fe&&fe.data&&(_e.data=fe.data),B[j]=_e,k++}s.attributes=B,s.attributesNum=k,s.index=q}function S(){const D=s.newAttributes;for(let O=0,W=D.length;O<W;O++)D[O]=0}function _(D){d(D,0)}function d(D,O){const W=s.newAttributes,q=s.enabledAttributes,B=s.attributeDivisors;W[D]=1,q[D]===0&&(i.enableVertexAttribArray(D),q[D]=1),B[D]!==O&&(i.vertexAttribDivisor(D,O),B[D]=O)}function b(){const D=s.newAttributes,O=s.enabledAttributes;for(let W=0,q=O.length;W<q;W++)O[W]!==D[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function R(D,O,W,q,B,X,k){k===!0?i.vertexAttribIPointer(D,O,W,B,X):i.vertexAttribPointer(D,O,W,q,B,X)}function M(D,O,W,q){S();const B=q.attributes,X=W.getAttributes(),k=O.defaultAttributeValues;for(const $ in X){const j=X[$];if(j.location>=0){let oe=B[$];if(oe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const fe=oe.normalized,_e=oe.itemSize,Ve=e.get(oe);if(Ve===void 0)continue;const tt=Ve.buffer,Ge=Ve.type,J=Ve.bytesPerElement,ne=Ge===i.INT||Ge===i.UNSIGNED_INT||oe.gpuType===1013;if(oe.isInterleavedBufferAttribute){const ee=oe.data,we=ee.stride,Pe=oe.offset;if(ee.isInstancedInterleavedBuffer){for(let Te=0;Te<j.locationSize;Te++)d(j.location+Te,ee.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<j.locationSize;Te++)_(j.location+Te);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Te=0;Te<j.locationSize;Te++)R(j.location+Te,_e/j.locationSize,Ge,fe,we*J,(Pe+_e/j.locationSize*Te)*J,ne)}else{if(oe.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)d(j.location+ee,oe.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ee=0;ee<j.locationSize;ee++)_(j.location+ee);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ee=0;ee<j.locationSize;ee++)R(j.location+ee,_e/j.locationSize,Ge,fe,_e*J,_e/j.locationSize*ee*J,ne)}}else if(k!==void 0){const fe=k[$];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(j.location,fe);break;case 3:i.vertexAttrib3fv(j.location,fe);break;case 4:i.vertexAttrib4fv(j.location,fe);break;default:i.vertexAttrib1fv(j.location,fe)}}}}b()}function A(){T();for(const D in n){const O=n[D];for(const W in O){const q=O[W];for(const B in q){const X=q[B];for(const k in X)f(X[k].object),delete X[k];delete q[B]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const O=n[D.id];for(const W in O){const q=O[W];for(const B in q){const X=q[B];for(const k in X)f(X[k].object),delete X[k];delete q[B]}}delete n[D.id]}function P(D){for(const O in n){const W=n[O];for(const q in W){const B=W[q];if(B[D.id]===void 0)continue;const X=B[D.id];for(const k in X)f(X[k].object),delete X[k];delete B[D.id]}}}function g(D){for(const O in n){const W=n[O],q=D.isInstancedMesh===!0?D.id:0,B=W[q];if(B!==void 0){for(const X in B){const k=B[X];for(const $ in k)f(k[$].object),delete k[$];delete B[X]}delete W[q],Object.keys(W).length===0&&delete n[O]}}}function T(){F(),a=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:g,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:_,disableUnusedAttributes:b}}function I0(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let p=0;p<f;p++)h+=c[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function F0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const g=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!g)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Ce("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const m=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:A,samples:E}}function U0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Mn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const p=m.length!==0||h||n!==0||r;return r=h,n=m.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){t=f(m,h,0)},this.setState=function(m,h,p){const v=m.clippingPlanes,S=m.clipIntersection,_=m.clipShadows,d=i.get(m);if(!r||v===null||v.length===0||s&&!_)s?f(null):c();else{const b=s?0:n,R=b*4;let M=d.clippingState||null;l.value=M,M=f(v,h,R,p);for(let A=0;A!==R;++A)M[A]=t[A];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,h,p,v){const S=m!==null?m.length:0;let _=null;if(S!==0){if(_=l.value,v!==!0||_===null){const d=p+S*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(_===null||_.length<d)&&(_=new Float32Array(d));for(let R=0,M=p;R!==S;++R,M+=4)a.copy(m[R]).applyMatrix4(b,o),a.normal.toArray(_,M),_[M+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}const pn=4,Cs=[.125,.215,.35,.446,.526,.582],Sn=20,N0=256,jn=new fa,ws=new Be;let Sr=null,Er=0,yr=0,Tr=!1;const O0=new I;class Ps{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=O0}=s;Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Is(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ls(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr,Er,yr),this._renderer.xr.enabled=Tr,e.scissorTest=!1,Bn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:zi,depthBuffer:!1},r=Ds(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ds(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B0(s)),this._blurMaterial=z0(s,e,t),this._ggxMaterial=G0(s,e,t)}return r}_compileMaterial(e){const t=new bt(new Rt,e);this._renderer.compile(t,jn)}_sceneToCubeUV(e,t,n,r,s){const l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,p=m.toneMapping;m.getClearColor(ws),m.toneMapping=0,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new hi,new Vn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,_=S.material;let d=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,d=!0):(_.color.copy(ws),d=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[R],s.y,s.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[R]));const A=this._cubeSize;Bn(r,M*A,R>2?A:0,A,A),m.setRenderTarget(r),d&&m.render(S,l),m.render(e,l)}m.toneMapping=p,m.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Is()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ls());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bn(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,jn)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-f*f),h=0+c*1.25,p=m*h,{_lodMax:v}=this,S=this._sizeLods[n],_=3*S*(n>v-pn?n-v+pn:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,Bn(s,_,d,3*S,2*S),r.setRenderTarget(s),r.render(o,jn),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,Bn(e,_,d,3*S,2*S),r.setRenderTarget(e),r.render(o,jn)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const f=3,m=this._lodMeshes[r];m.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sn-1),S=s/v,_=isFinite(s)?1+Math.floor(f*S):Sn;_>Sn&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Sn}`);const d=[];let b=0;for(let P=0;P<Sn;++P){const g=P/S,T=Math.exp(-g*g/2);d.push(T),P===0?b+=T:P<_&&(b+=2*T)}for(let P=0;P<d.length;P++)d[P]=d[P]/b;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:R}=this;h.dTheta.value=v,h.mipInt.value=R-n;const M=this._sizeLods[r],A=3*M*(r>R-pn?r-R+pn:0),E=4*(this._cubeSize-M);Bn(t,A,E,3*M,2*M),l.setRenderTarget(t),l.render(m,jn)}}function B0(i){const e=[],t=[],n=[];let r=i;const s=i-pn+1+Cs.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-pn?l=Cs[a-i+pn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,m=1+c,h=[f,f,m,f,m,m,f,f,m,m,f,m],p=6,v=6,S=3,_=2,d=1,b=new Float32Array(S*v*p),R=new Float32Array(_*v*p),M=new Float32Array(d*v*p);for(let E=0;E<p;E++){const P=E%3*2/3-1,g=E>2?0:-1,T=[P,g,0,P+2/3,g,0,P+2/3,g+1,0,P,g,0,P+2/3,g+1,0,P,g+1,0];b.set(T,S*v*E),R.set(h,_*v*E);const F=[E,E,E,E,E,E];M.set(F,d*v*E)}const A=new Rt;A.setAttribute("position",new Ot(b,S)),A.setAttribute("uv",new Ot(R,_)),A.setAttribute("faceIndex",new Ot(M,d)),n.push(new bt(A,null)),r>pn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ds(i,e,t){const n=new Kt(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bn(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function G0(i,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function z0(i,e,t){const n=new Float32Array(Sn),r=new I(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ls(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Is(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qi(){return`

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
	`}class ma extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:Xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new bt(r,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function V0(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===303||p===304)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const S=new ma(v.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,v=p===303||p===304,S=p===301||p===302;if(v||S){let _=t.get(h);const d=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Ps(i)),_=v?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const b=h.image;return v&&b&&b.height>0||S&&b&&l(b)?(n===null&&(n=new Ps(i)),_=v?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",f),_.texture):null}}}return h}function o(h,p){return p===303?h.mapping=301:p===304&&(h.mapping=302),h}function l(h){let p=0;const v=6;for(let S=0;S<v;S++)h[S]!==void 0&&p++;return p===v}function c(h){const p=h.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function f(h){const p=h.target;p.removeEventListener("dispose",f);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function H0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Hn("WebGLRenderer: "+n+" extension not supported."),r}}}function k0(i,e,t,n){const r={},s=new WeakMap;function a(m){const h=m.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(m,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(m){const h=m.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(m){const h=[],p=m.index,v=m.attributes.position;let S=0;if(v===void 0)return;if(p!==null){const b=p.array;S=p.version;for(let R=0,M=b.length;R<M;R+=3){const A=b[R+0],E=b[R+1],P=b[R+2];h.push(A,E,E,P,P,A)}}else{const b=v.array;S=v.version;for(let R=0,M=b.length/3-1;R<M;R+=3){const A=R+0,E=R+1,P=R+2;h.push(A,E,E,P,P,A)}}const _=new(v.count>=65535?ra:ia)(h,1);_.version=S;const d=s.get(m);d&&e.remove(d),s.set(m,_)}function f(m){const h=s.get(m);if(h){const p=m.index;p!==null&&h.version<p.version&&c(m)}else c(m);return s.get(m)}return{get:o,update:l,getWireframeAttribute:f}}function W0(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,h){i.drawElements(n,h,s,m*a),t.update(h,n,1)}function c(m,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,m*a,p),t.update(h,n,p))}function f(m,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,m,0,p);let S=0;for(let _=0;_<p;_++)S+=h[_];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function X0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function q0(i,e,t){const n=new WeakMap,r=new ct;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==m){let T=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;p===!0&&(R=1),v===!0&&(R=2),S===!0&&(R=3);let M=o.attributes.position.count*R,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*A*4*m),P=new ea(E,M,A,m);P.type=1015,P.needsUpdate=!0;const g=R*4;for(let F=0;F<m;F++){const D=_[F],O=d[F],W=b[F],q=M*A*4*F;for(let B=0;B<D.count;B++){const X=B*g;p===!0&&(r.fromBufferAttribute(D,B),E[q+X+0]=r.x,E[q+X+1]=r.y,E[q+X+2]=r.z,E[q+X+3]=0),v===!0&&(r.fromBufferAttribute(O,B),E[q+X+4]=r.x,E[q+X+5]=r.y,E[q+X+6]=r.z,E[q+X+7]=0),S===!0&&(r.fromBufferAttribute(W,B),E[q+X+8]=r.x,E[q+X+9]=r.y,E[q+X+10]=r.z,E[q+X+11]=W.itemSize===4?r.w:1)}}h={count:m,texture:P,size:new be(M,A)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Y0(i,e,t,n,r){let s=new WeakMap;function a(c){const f=r.render.frame,m=c.geometry,h=e.get(c,m);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return h}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const K0={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Z0(i,e,t,n,r,s){const a=new Kt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Wn(e,t):void 0}),o=new Kt(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),l=new Rt;l.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pt([0,2,0,0,2,0],2));const c=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new bt(l,c),m=new fa(-1,1,1,-1,0,1);let h=null,p=null,v=!1,S,_=null,d=[],b=!1;this.setSize=function(R,M){a.setSize(R,M),o.setSize(R,M);for(let A=0;A<d.length;A++){const E=d[A];E.setSize&&E.setSize(R,M)}},this.setEffects=function(R){d=R,b=d.length>0&&d[0].isRenderPass===!0;const M=a.width,A=a.height;for(let E=0;E<d.length;E++){const P=d[E];P.setSize&&P.setSize(M,A)}},this.begin=function(R,M){if(v||R.toneMapping===0&&d.length===0)return!1;if(_=M,M!==null){const A=M.width,E=M.height;(a.width!==A||a.height!==E)&&this.setSize(A,E)}return b===!1&&R.setRenderTarget(a),S=R.toneMapping,R.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(R,M){R.toneMapping=S,v=!0;let A=a,E=o;for(let P=0;P<d.length;P++){const g=d[P];if(g.enabled!==!1&&(g.render(R,E,A,M),g.needsSwap!==!1)){const T=A;A=E,E=T}}if(h!==R.outputColorSpace||p!==R.toneMapping){h=R.outputColorSpace,p=R.toneMapping,c.defines={},He.getTransfer(h)===Ke&&(c.defines.SRGB_TRANSFER="");const P=K0[p];P&&(c.defines[P]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(_),R.render(f,m),_=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const _a=new yt,wr=new Wn(1,1),ga=new ea,va=new eo,xa=new oa,Fs=[],Us=[],Ns=new Float32Array(16),Os=new Float32Array(9),Bs=new Float32Array(4);function Kn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Fs[r];if(s===void 0&&(s=new Float32Array(r),Fs[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yi(i,e){let t=Us[e];t===void 0&&(t=new Int32Array(e),Us[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function e4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Bs.set(n),i.uniformMatrix2fv(this.addr,!1,Bs),gt(t,n)}}function t4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Os.set(n),i.uniformMatrix3fv(this.addr,!1,Os),gt(t,n)}}function n4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Ns.set(n),i.uniformMatrix4fv(this.addr,!1,Ns),gt(t,n)}}function i4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function s4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function a4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function o4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function c4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function u4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function h4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wr.compareFunction=t.isReversedDepthBuffer()?518:515,s=wr):s=_a,t.setTexture2D(e||s,r)}function f4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||va,r)}function d4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xa,r)}function p4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ga,r)}function m4(i){switch(i){case 5126:return J0;case 35664:return $0;case 35665:return Q0;case 35666:return j0;case 35674:return e4;case 35675:return t4;case 35676:return n4;case 5124:case 35670:return i4;case 35667:case 35671:return r4;case 35668:case 35672:return s4;case 35669:case 35673:return a4;case 5125:return o4;case 36294:return l4;case 36295:return c4;case 36296:return u4;case 35678:case 36198:case 36298:case 36306:case 35682:return h4;case 35679:case 36299:case 36307:return f4;case 35680:case 36300:case 36308:case 36293:return d4;case 36289:case 36303:case 36311:case 36292:return p4}}function _4(i,e){i.uniform1fv(this.addr,e)}function g4(i,e){const t=Kn(e,this.size,2);i.uniform2fv(this.addr,t)}function v4(i,e){const t=Kn(e,this.size,3);i.uniform3fv(this.addr,t)}function x4(i,e){const t=Kn(e,this.size,4);i.uniform4fv(this.addr,t)}function M4(i,e){const t=Kn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S4(i,e){const t=Kn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E4(i,e){const t=Kn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function y4(i,e){i.uniform1iv(this.addr,e)}function T4(i,e){i.uniform2iv(this.addr,e)}function A4(i,e){i.uniform3iv(this.addr,e)}function b4(i,e){i.uniform4iv(this.addr,e)}function R4(i,e){i.uniform1uiv(this.addr,e)}function C4(i,e){i.uniform2uiv(this.addr,e)}function w4(i,e){i.uniform3uiv(this.addr,e)}function P4(i,e){i.uniform4uiv(this.addr,e)}function D4(i,e,t){const n=this.cache,r=e.length,s=Yi(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=wr:a=_a;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function L4(i,e,t){const n=this.cache,r=e.length,s=Yi(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||va,s[a])}function I4(i,e,t){const n=this.cache,r=e.length,s=Yi(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||xa,s[a])}function F4(i,e,t){const n=this.cache,r=e.length,s=Yi(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ga,s[a])}function U4(i){switch(i){case 5126:return _4;case 35664:return g4;case 35665:return v4;case 35666:return x4;case 35674:return M4;case 35675:return S4;case 35676:return E4;case 5124:case 35670:return y4;case 35667:case 35671:return T4;case 35668:case 35672:return A4;case 35669:case 35673:return b4;case 5125:return R4;case 36294:return C4;case 36295:return w4;case 36296:return P4;case 35678:case 36198:case 36298:case 36306:case 35682:return D4;case 35679:case 36299:case 36307:return L4;case 35680:case 36300:case 36308:case 36293:return I4;case 36289:case 36303:case 36311:case 36292:return F4}}class N4{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m4(t.type)}}class O4{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U4(t.type)}}class B4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Gs(i,e){i.seq.push(e),i.map[e.id]=e}function G4(i,e,t){const n=i.name,r=n.length;for(Ar.lastIndex=0;;){const s=Ar.exec(n),a=Ar.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Gs(t,c===void 0?new N4(o,i,e):new O4(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new B4(o),Gs(t,m)),t=m}}}class Gi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);G4(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function zs(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const z4=37297;let V4=0;function H4(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Vs=new De;function k4(i){He._getMatrix(Vs,He.workingColorSpace,i);const e=`mat3( ${Vs.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case Vi:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+H4(i.getShaderSource(e),o)}else return s}function W4(i,e){const t=k4(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const X4={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function q4(i,e){const t=X4[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ni=new I;function Y4(){He.getLuminanceCoefficients(Ni);const i=Ni.x.toFixed(4),e=Ni.y.toFixed(4),t=Ni.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K4(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ni).join(`
`)}function Z4(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J4(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ni(i){return i!==""}function ks(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ws(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $4=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(i){return i.replace($4,j4)}const Q4=new Map;function j4(i,e){let t=Ue[e];if(t===void 0){const n=Q4.get(e);if(n!==void 0)t=Ue[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pr(t)}const e6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xs(i){return i.replace(e6,t6)}function t6(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qs(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const n6={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function i6(i){return n6[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r6={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function s6(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r6[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const a6={302:"ENVMAP_MODE_REFRACTION"};function o6(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a6[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l6={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function c6(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l6[i.combine]||"ENVMAP_BLENDING_NONE"}function u6(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function h6(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=i6(t),c=s6(t),f=o6(t),m=c6(t),h=u6(t),p=K4(t),v=Z4(s),S=r.createProgram();let _,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ni).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ni).join(`
`),d.length>0&&(d+=`
`)):(_=[qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),d=[qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ue.tonemapping_pars_fragment:"",t.toneMapping!==0?q4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,W4("linearToOutputTexel",t.outputColorSpace),Y4(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),a=Pr(a),a=ks(a,t),a=Ws(a,t),o=Pr(o),o=ks(o,t),o=Ws(o,t),a=Xs(a),o=Xs(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=b+_+a,M=b+d+o,A=zs(r,r.VERTEX_SHADER,R),E=zs(r,r.FRAGMENT_SHADER,M);r.attachShader(S,A),r.attachShader(S,E),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(D){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(E)||"",B=O.trim(),X=W.trim(),k=q.trim();let $=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,E);else{const oe=Hs(r,A,"vertex"),fe=Hs(r,E,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+oe+`
`+fe)}else B!==""?Ce("WebGLProgram: Program Info Log:",B):(X===""||k==="")&&(j=!1);j&&(D.diagnostics={runnable:$,programLog:B,vertexShader:{log:X,prefix:_},fragmentShader:{log:k,prefix:d}})}r.deleteShader(A),r.deleteShader(E),g=new Gi(r,S),T=J4(r,S)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(S,z4)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V4++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=E,this}let f6=0;class d6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new p6(e),t.set(e,n)),n}}class p6{constructor(e){this.id=f6++,this.code=e,this.usedTimes=0}}function m6(i){return i===1030||i===37490||i===36285}function _6(i,e,t,n,r,s){const a=new ta,o=new d6,l=new Set,c=[],f=new Map,m=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,T,F,D,O,W){const q=D.fog,B=O.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,$=e.get(g.envMap||X,k),j=$&&$.mapping===306?$.image.height:null,oe=p[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Ce("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=fe!==void 0?fe.length:0;let Ve=0;B.morphAttributes.position!==void 0&&(Ve=1),B.morphAttributes.normal!==void 0&&(Ve=2),B.morphAttributes.color!==void 0&&(Ve=3);let tt,Ge,J,ne;if(oe){const xe=Yt[oe];tt=xe.vertexShader,Ge=xe.fragmentShader}else{tt=g.vertexShader,Ge=g.fragmentShader;const xe=o.getVertexShaderStage(g),ot=o.getFragmentShaderStage(g);o.update(g,xe,ot),J=xe.id,ne=ot.id}const ee=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,nt=!!g.map,Fe=!!g.matcap,We=!!$,ke=!!g.aoMap,ze=!!g.lightMap,it=!!g.bumpMap&&g.wireframe===!1,at=!!g.normalMap,ht=!!g.displacementMap,st=!!g.emissiveMap,Qe=!!g.metalnessMap,rt=!!g.roughnessMap,U=g.anisotropy>0,xt=g.clearcoat>0,Ye=g.dispersion>0,y=g.iridescence>0,u=g.sheen>0,w=g.transmission>0,C=U&&!!g.anisotropyMap,V=xt&&!!g.clearcoatMap,te=xt&&!!g.clearcoatNormalMap,ie=xt&&!!g.clearcoatRoughnessMap,Y=y&&!!g.iridescenceMap,K=y&&!!g.iridescenceThicknessMap,re=u&&!!g.sheenColorMap,ve=u&&!!g.sheenRoughnessMap,ae=!!g.specularMap,le=!!g.specularColorMap,Ae=!!g.specularIntensityMap,Re=w&&!!g.transmissionMap,Le=w&&!!g.thicknessMap,L=!!g.gradientMap,se=!!g.alphaMap,Z=g.alphaTest>0,ce=!!g.alphaHash,pe=!!g.extensions;let Q=0;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=i.toneMapping);const Se={shaderID:oe,shaderType:g.type,shaderName:g.name,vertexShader:tt,fragmentShader:Ge,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:ne,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:nt,matcap:Fe,envMap:We,envMapMode:We&&$.mapping,envMapCubeUVHeight:j,aoMap:ke,lightMap:ze,bumpMap:it,normalMap:at,displacementMap:ht,emissiveMap:st,normalMapObjectSpace:at&&g.normalMapType===1,normalMapTangentSpace:at&&g.normalMapType===0,packedNormalMap:at&&g.normalMapType===0&&m6(g.normalMap.format),metalnessMap:Qe,roughnessMap:rt,anisotropy:U,anisotropyMap:C,clearcoat:xt,clearcoatMap:V,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,dispersion:Ye,iridescence:y,iridescenceMap:Y,iridescenceThicknessMap:K,sheen:u,sheenColorMap:re,sheenRoughnessMap:ve,specularMap:ae,specularColorMap:le,specularIntensityMap:Ae,transmission:w,transmissionMap:Re,thicknessMap:Le,gradientMap:L,opaque:g.transparent===!1&&g.blending===1&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:Z,alphaHash:ce,combine:g.combine,mapUv:nt&&v(g.map.channel),aoMapUv:ke&&v(g.aoMap.channel),lightMapUv:ze&&v(g.lightMap.channel),bumpMapUv:it&&v(g.bumpMap.channel),normalMapUv:at&&v(g.normalMap.channel),displacementMapUv:ht&&v(g.displacementMap.channel),emissiveMapUv:st&&v(g.emissiveMap.channel),metalnessMapUv:Qe&&v(g.metalnessMap.channel),roughnessMapUv:rt&&v(g.roughnessMap.channel),anisotropyMapUv:C&&v(g.anisotropyMap.channel),clearcoatMapUv:V&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(g.sheenRoughnessMap.channel),specularMapUv:ae&&v(g.specularMap.channel),specularColorMapUv:le&&v(g.specularColorMap.channel),specularIntensityMapUv:Ae&&v(g.specularIntensityMap.channel),transmissionMapUv:Re&&v(g.transmissionMap.channel),thicknessMapUv:Le&&v(g.thicknessMap.channel),alphaMapUv:se&&v(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(at||U),vertexNormals:!!B.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(nt||se),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||B.attributes.normal===void 0&&at===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:we,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:nt&&g.map.isVideoTexture===!0&&He.getTransfer(g.map.colorSpace)===Ke,decodeVideoTextureEmissive:st&&g.emissiveMap.isVideoTexture===!0&&He.getTransfer(g.emissiveMap.colorSpace)===Ke,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:pe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&g.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function _(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const F in g.defines)T.push(F),T.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(d(T,g),b(T,g),T.push(i.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function d(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function b(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function R(g){const T=p[g.type];let F;if(T){const D=Yt[T];F=zo.clone(D.uniforms)}else F=g.uniforms;return F}function M(g,T){let F=f.get(T);return F!==void 0?++F.usedTimes:(F=new h6(i,T,g,r),c.push(F),f.set(T,F)),F}function A(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),f.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:R,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:P}}function g6(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function v6(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ys(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ks(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,S,_,d){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:_,group:d},i[e]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=v,b.materialVariant=a(h),b.groupOrder=S,b.renderOrder=h.renderOrder,b.z=_,b.group=d),e++,b}function l(h,p,v,S,_,d){const b=o(h,p,v,S,_,d);v.transmission>0?n.push(b):v.transparent===!0?r.push(b):t.push(b)}function c(h,p,v,S,_,d){const b=o(h,p,v,S,_,d);v.transmission>0?n.unshift(b):v.transparent===!0?r.unshift(b):t.unshift(b)}function f(h,p,v){t.length>1&&t.sort(h||v6),n.length>1&&n.sort(p||Ys),r.length>1&&r.sort(p||Ys),v&&(t.reverse(),n.reverse(),r.reverse())}function m(){for(let h=e,p=i.length;h<p;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:m,sort:f}}function x6(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ks,i.set(n,[a])):r>=s.length?(a=new Ks,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function M6(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function S6(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let E6=0;function y6(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function T6(i){const e=new M6,t=S6(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new ut,a=new ut;function o(c){let f=0,m=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,v=0,S=0,_=0,d=0,b=0,R=0,M=0,A=0,E=0,P=0;c.sort(y6);for(let T=0,F=c.length;T<F;T++){const D=c[T],O=D.color,W=D.intensity,q=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===1030?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=O.r*W,m+=O.g*W,h+=O.b*W;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],W);P++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,$=t.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(W),X.distance=q,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[S]=X;const k=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,k.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[S]=k.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[S]=$,n.spotShadowMap[S]=B,M++}S++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(O).multiplyScalar(W),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=X,_++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const k=D.shadow,$=t.get(D);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=D.shadow.matrix,R++}n.point[v]=X,v++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(W),X.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[d]=X,d++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=h;const g=n.hash;(g.directionalLength!==p||g.pointLength!==v||g.spotLength!==S||g.rectAreaLength!==_||g.hemiLength!==d||g.numDirectionalShadows!==b||g.numPointShadows!==R||g.numSpotShadows!==M||g.numSpotMaps!==A||g.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=_,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,g.directionalLength=p,g.pointLength=v,g.spotLength=S,g.rectAreaLength=_,g.hemiLength=d,g.numDirectionalShadows=b,g.numPointShadows=R,g.numSpotShadows=M,g.numSpotMaps=A,g.numLightProbes=P,n.version=E6++)}function l(c,f){let m=0,h=0,p=0,v=0,S=0;const _=f.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const R=c[d];if(R.isDirectionalLight){const M=n.directional[m];M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),m++}else if(R.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),p++}else if(R.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(_),a.identity(),s.copy(R.matrixWorld),s.premultiply(_),a.extractRotation(s),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(_),h++}else if(R.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(_),S++}}}return{setup:o,setupView:l,state:n}}function Zs(i){const e=new T6(i),t=[],n=[],r=[];function s(h){m.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function f(h){e.setupView(t,h)}const m={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function A6(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Zs(i),e.set(r,[o])):s>=a.length?(o=new Zs(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const b6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C6=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],w6=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Js=new ut,ei=new I,br=new I;function P6(i,e,t){let n=new aa;const r=new be,s=new be,a=new ct,o=new Wo,l=new Xo,c={},f=t.maxTextureSize,m={0:1,1:0,2:2},h=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:b6,fragmentShader:R6}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Rt;v.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new bt(v,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(E,P,g){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===2&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const T=i.getRenderTarget(),F=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(0),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=d!==this.type;W&&P.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(B=>B.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,B=E.length;q<B;q++){const X=E[q],k=X.shadow;if(k===void 0){Ce("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const $=k.getFrameExtents();r.multiply($),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,k.mapSize.y=s.y));const j=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===3){if(X.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Kt(r.x,r.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new Wn(r.x,r.y,1015),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=1026,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=1003,k.map.depthTexture.magFilter=1003}else X.isPointLight?(k.map=new ma(r.x),k.map.depthTexture=new Eo(r.x,1014)):(k.map=new Kt(r.x,r.y),k.map.depthTexture=new Wn(r.x,r.y,1014)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=1026,this.type===1?(k.map.depthTexture.compareFunction=j?518:515,k.map.depthTexture.minFilter=1006,k.map.depthTexture.magFilter=1006):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=1003,k.map.depthTexture.magFilter=1003);k.camera.updateProjectionMatrix()}const oe=k.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<oe;fe++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(k.map),i.clear());const _e=k.getViewport(fe);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),O.viewport(a)}if(X.isPointLight){const _e=k.camera,Ve=k.matrix,tt=X.distance||_e.far;tt!==_e.far&&(_e.far=tt,_e.updateProjectionMatrix()),ei.setFromMatrixPosition(X.matrixWorld),_e.position.copy(ei),br.copy(_e.position),br.add(C6[fe]),_e.up.copy(w6[fe]),_e.lookAt(br),_e.updateMatrixWorld(),Ve.makeTranslation(-ei.x,-ei.y,-ei.z),Js.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Js,_e.coordinateSystem,_e.reversedDepth)}else k.updateMatrices(X);n=k.getFrustum(),M(P,g,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===3&&b(k,g),k.needsUpdate=!1}d=this.type,_.needsUpdate=!1,i.setRenderTarget(T,F,D)};function b(E,P){const g=e.update(S);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Kt(r.x,r.y,{format:1030,type:1016})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,g,h,S,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,g,p,S,null)}function R(E,P,g,T){let F=null;const D=g.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)F=D;else if(F=g.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=F.uuid,W=P.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let B=q[W];B===void 0&&(B=F.clone(),q[W]=B,P.addEventListener("dispose",A)),F=B}if(F.visible=P.visible,F.wireframe=P.wireframe,T===3?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:m[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,g.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const O=i.properties.get(F);O.light=g}return F}function M(E,P,g,T,F){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,E.matrixWorld);const W=e.update(E),q=E.material;if(Array.isArray(q)){const B=W.groups;for(let X=0,k=B.length;X<k;X++){const $=B[X],j=q[$.materialIndex];if(j&&j.visible){const oe=R(E,j,T,F);E.onBeforeShadow(i,E,P,g,W,oe,$),i.renderBufferDirect(g,null,W,oe,E,$),E.onAfterShadow(i,E,P,g,W,oe,$)}}}else if(q.visible){const B=R(E,q,T,F);E.onBeforeShadow(i,E,P,g,W,B,null),i.renderBufferDirect(g,null,W,B,E,null),E.onAfterShadow(i,E,P,g,W,B,null)}}const O=E.children;for(let W=0,q=O.length;W<q;W++)M(O[W],P,g,T,F)}function A(E){E.target.removeEventListener("dispose",A);for(const g in c){const T=c[g],F=E.target.uuid;F in T&&(T[F].dispose(),delete T[F])}}}function D6(i,e){function t(){let L=!1;const se=new ct;let Z=null;const ce=new ct(0,0,0,0);return{setMask:function(pe){Z!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){L=pe},setClear:function(pe,Q,Se,xe,ot){ot===!0&&(pe*=xe,Q*=xe,Se*=xe),se.set(pe,Q,Se,xe),ce.equals(se)===!1&&(i.clearColor(pe,Q,Se,xe),ce.copy(se))},reset:function(){L=!1,Z=null,ce.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,Z=null,ce=null,pe=null;return{setReversed:function(Q){if(se!==Q){const Se=e.get("EXT_clip_control");Q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),se=Q;const xe=pe;pe=null,this.setClear(xe)}},getReversed:function(){return se},setTest:function(Q){Q?ee(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Q){Z!==Q&&!L&&(i.depthMask(Q),Z=Q)},setFunc:function(Q){if(se&&(Q=La[Q]),ce!==Q){switch(Q){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Q}},setLocked:function(Q){L=Q},setClear:function(Q){pe!==Q&&(pe=Q,se&&(Q=1-Q),i.clearDepth(Q))},reset:function(){L=!1,Z=null,ce=null,pe=null,se=!1}}}function r(){let L=!1,se=null,Z=null,ce=null,pe=null,Q=null,Se=null,xe=null,ot=null;return{setTest:function(je){L||(je?ee(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(je){se!==je&&!L&&(i.stencilMask(je),se=je)},setFunc:function(je,Ht,kt){(Z!==je||ce!==Ht||pe!==kt)&&(i.stencilFunc(je,Ht,kt),Z=je,ce=Ht,pe=kt)},setOp:function(je,Ht,kt){(Q!==je||Se!==Ht||xe!==kt)&&(i.stencilOp(je,Ht,kt),Q=je,Se=Ht,xe=kt)},setLocked:function(je){L=je},setClear:function(je){ot!==je&&(i.clearStencil(je),ot=je)},reset:function(){L=!1,se=null,Z=null,ce=null,pe=null,Q=null,Se=null,xe=null,ot=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let f={},m={},h={},p=new WeakMap,v=[],S=null,_=!1,d=null,b=null,R=null,M=null,A=null,E=null,P=null,g=new Be(0,0,0),T=0,F=!1,D=null,O=null,W=null,q=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=$>=2);let oe=null,fe={};const _e=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),tt=new ct().fromArray(_e),Ge=new ct().fromArray(Ve);function J(L,se,Z,ce){const pe=new Uint8Array(4),Q=i.createTexture();i.bindTexture(L,Q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<Z;Se++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(se+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Q}const ne={};ne[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(3),it(!1),at(1),ee(i.CULL_FACE),ke(0);function ee(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function we(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Pe(L,se){return h[L]!==se?(i.bindFramebuffer(L,se),h[L]=se,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Te(L,se){let Z=v,ce=!1;if(L){Z=p.get(se),Z===void 0&&(Z=[],p.set(se,Z));const pe=L.textures;if(Z.length!==pe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Se=pe.length;Q<Se;Q++)Z[Q]=i.COLOR_ATTACHMENT0+Q;Z.length=pe.length,ce=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Z)}function nt(L){return S!==L?(i.useProgram(L),S=L,!0):!1}const Fe={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Fe[103]=i.MIN,Fe[104]=i.MAX;const We={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function ke(L,se,Z,ce,pe,Q,Se,xe,ot,je){if(L===0){_===!0&&(we(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),L!==5){if(L!==d||je!==F){if((b!==100||A!==100)&&(i.blendEquation(i.FUNC_ADD),b=100,A=100),je)switch(L){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}R=null,M=null,E=null,P=null,g.set(0,0,0),T=0,d=L,F=je}return}pe=pe||se,Q=Q||Z,Se=Se||ce,(se!==b||pe!==A)&&(i.blendEquationSeparate(Fe[se],Fe[pe]),b=se,A=pe),(Z!==R||ce!==M||Q!==E||Se!==P)&&(i.blendFuncSeparate(We[Z],We[ce],We[Q],We[Se]),R=Z,M=ce,E=Q,P=Se),(xe.equals(g)===!1||ot!==T)&&(i.blendColor(xe.r,xe.g,xe.b,ot),g.copy(xe),T=ot),d=L,F=!1}function ze(L,se){L.side===2?we(i.CULL_FACE):ee(i.CULL_FACE);let Z=L.side===1;se&&(Z=!Z),it(Z),L.blending===1&&L.transparent===!1?ke(0):ke(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function at(L){L!==0?(ee(i.CULL_FACE),L!==O&&(L===1?i.cullFace(i.BACK):L===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),O=L}function ht(L){L!==W&&(k&&i.lineWidth(L),W=L)}function st(L,se,Z){L?(ee(i.POLYGON_OFFSET_FILL),(q!==se||B!==Z)&&(q=se,B=Z,a.getReversed()&&(se=-se),i.polygonOffset(se,Z))):we(i.POLYGON_OFFSET_FILL)}function Qe(L){L?ee(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function rt(L){L===void 0&&(L=i.TEXTURE0+X-1),oe!==L&&(i.activeTexture(L),oe=L)}function U(L,se,Z){Z===void 0&&(oe===null?Z=i.TEXTURE0+X-1:Z=oe);let ce=fe[Z];ce===void 0&&(ce={type:void 0,texture:void 0},fe[Z]=ce),(ce.type!==L||ce.texture!==se)&&(oe!==Z&&(i.activeTexture(Z),oe=Z),i.bindTexture(L,se||ne[L]),ce.type=L,ce.texture=se)}function xt(){const L=fe[oe];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function u(){try{i.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function w(){try{i.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function C(){try{i.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function te(){try{i.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function ie(){try{i.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function K(){try{i.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function re(L){return m[L]!==void 0?m[L]:i.getParameter(L)}function ve(L,se){m[L]!==se&&(i.pixelStorei(L,se),m[L]=se)}function ae(L){tt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),tt.copy(L))}function le(L){Ge.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function Ae(L,se){let Z=c.get(se);Z===void 0&&(Z=new WeakMap,c.set(se,Z));let ce=Z.get(L);ce===void 0&&(ce=i.getUniformBlockIndex(se,L.name),Z.set(L,ce))}function Re(L,se){const ce=c.get(se).get(L);l.get(se)!==ce&&(i.uniformBlockBinding(se,ce,L.__bindingPointIndex),l.set(se,ce))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},oe=null,fe={},h={},p=new WeakMap,v=[],S=null,_=!1,d=null,b=null,R=null,M=null,A=null,E=null,P=null,g=new Be(0,0,0),T=0,F=!1,D=null,O=null,W=null,q=null,B=null,tt.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:we,bindFramebuffer:Pe,drawBuffers:Te,useProgram:nt,setBlending:ke,setMaterial:ze,setFlipSided:it,setCullFace:at,setLineWidth:ht,setPolygonOffset:st,setScissorTest:Qe,activeTexture:rt,bindTexture:U,unbindTexture:xt,compressedTexImage2D:Ye,compressedTexImage3D:y,texImage2D:Y,texImage3D:K,pixelStorei:ve,getParameter:re,updateUBOMapping:Ae,uniformBlockBinding:Re,texStorage2D:te,texStorage3D:ie,texSubImage2D:u,texSubImage3D:w,compressedTexSubImage2D:C,compressedTexSubImage3D:V,scissor:ae,viewport:le,reset:Le}}function L6(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,f=new WeakMap,m=new Set;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,u){return v?new OffscreenCanvas(y,u):Hi("canvas")}function _(y,u,w){let C=1;const V=Ye(y);if((V.width>w||V.height>w)&&(C=w/Math.max(V.width,V.height)),C<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const te=Math.floor(C*V.width),ie=Math.floor(C*V.height);h===void 0&&(h=S(te,ie));const Y=u?S(te,ie):h;return Y.width=te,Y.height=ie,Y.getContext("2d").drawImage(y,0,0,te,ie),Ce("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+te+"x"+ie+")."),Y}else return"data"in y&&Ce("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),y;return y}function d(y){return y.generateMipmaps}function b(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(y,u,w,C,V,te=!1){if(y!==null){if(i[y]!==void 0)return i[y];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ie;C&&(ie=e.get("EXT_texture_norm16"),ie||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=u;if(u===i.RED&&(w===i.FLOAT&&(Y=i.R32F),w===i.HALF_FLOAT&&(Y=i.R16F),w===i.UNSIGNED_BYTE&&(Y=i.R8),w===i.UNSIGNED_SHORT&&ie&&(Y=ie.R16_EXT),w===i.SHORT&&ie&&(Y=ie.R16_SNORM_EXT)),u===i.RED_INTEGER&&(w===i.UNSIGNED_BYTE&&(Y=i.R8UI),w===i.UNSIGNED_SHORT&&(Y=i.R16UI),w===i.UNSIGNED_INT&&(Y=i.R32UI),w===i.BYTE&&(Y=i.R8I),w===i.SHORT&&(Y=i.R16I),w===i.INT&&(Y=i.R32I)),u===i.RG&&(w===i.FLOAT&&(Y=i.RG32F),w===i.HALF_FLOAT&&(Y=i.RG16F),w===i.UNSIGNED_BYTE&&(Y=i.RG8),w===i.UNSIGNED_SHORT&&ie&&(Y=ie.RG16_EXT),w===i.SHORT&&ie&&(Y=ie.RG16_SNORM_EXT)),u===i.RG_INTEGER&&(w===i.UNSIGNED_BYTE&&(Y=i.RG8UI),w===i.UNSIGNED_SHORT&&(Y=i.RG16UI),w===i.UNSIGNED_INT&&(Y=i.RG32UI),w===i.BYTE&&(Y=i.RG8I),w===i.SHORT&&(Y=i.RG16I),w===i.INT&&(Y=i.RG32I)),u===i.RGB_INTEGER&&(w===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),w===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),w===i.UNSIGNED_INT&&(Y=i.RGB32UI),w===i.BYTE&&(Y=i.RGB8I),w===i.SHORT&&(Y=i.RGB16I),w===i.INT&&(Y=i.RGB32I)),u===i.RGBA_INTEGER&&(w===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),w===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),w===i.UNSIGNED_INT&&(Y=i.RGBA32UI),w===i.BYTE&&(Y=i.RGBA8I),w===i.SHORT&&(Y=i.RGBA16I),w===i.INT&&(Y=i.RGBA32I)),u===i.RGB&&(w===i.UNSIGNED_SHORT&&ie&&(Y=ie.RGB16_EXT),w===i.SHORT&&ie&&(Y=ie.RGB16_SNORM_EXT),w===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),w===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),u===i.RGBA){const K=te?Vi:He.getTransfer(V);w===i.FLOAT&&(Y=i.RGBA32F),w===i.HALF_FLOAT&&(Y=i.RGBA16F),w===i.UNSIGNED_BYTE&&(Y=K===Ke?i.SRGB8_ALPHA8:i.RGBA8),w===i.UNSIGNED_SHORT&&ie&&(Y=ie.RGBA16_EXT),w===i.SHORT&&ie&&(Y=ie.RGBA16_SNORM_EXT),w===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),w===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function A(y,u){let w;return y?u===null||u===1014||u===1020?w=i.DEPTH24_STENCIL8:u===1015?w=i.DEPTH32F_STENCIL8:u===1012&&(w=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===1014||u===1020?w=i.DEPTH_COMPONENT24:u===1015?w=i.DEPTH_COMPONENT32F:u===1012&&(w=i.DEPTH_COMPONENT16),w}function E(y,u){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==1003&&y.minFilter!==1006?Math.log2(Math.max(u.width,u.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?u.mipmaps.length:1}function P(y){const u=y.target;u.removeEventListener("dispose",P),T(u),u.isVideoTexture&&f.delete(u),u.isHTMLTexture&&m.delete(u)}function g(y){const u=y.target;u.removeEventListener("dispose",g),D(u)}function T(y){const u=n.get(y);if(u.__webglInit===void 0)return;const w=y.source,C=p.get(w);if(C){const V=C[u.__cacheKey];V.usedTimes--,V.usedTimes===0&&F(y),Object.keys(C).length===0&&p.delete(w)}n.remove(y)}function F(y){const u=n.get(y);i.deleteTexture(u.__webglTexture);const w=y.source,C=p.get(w);delete C[u.__cacheKey],a.memory.textures--}function D(y){const u=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(u.__webglFramebuffer[C]))for(let V=0;V<u.__webglFramebuffer[C].length;V++)i.deleteFramebuffer(u.__webglFramebuffer[C][V]);else i.deleteFramebuffer(u.__webglFramebuffer[C]);u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer[C])}else{if(Array.isArray(u.__webglFramebuffer))for(let C=0;C<u.__webglFramebuffer.length;C++)i.deleteFramebuffer(u.__webglFramebuffer[C]);else i.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&i.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let C=0;C<u.__webglColorRenderbuffer.length;C++)u.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(u.__webglColorRenderbuffer[C]);u.__webglDepthRenderbuffer&&i.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const w=y.textures;for(let C=0,V=w.length;C<V;C++){const te=n.get(w[C]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(w[C])}n.remove(y)}let O=0;function W(){O=0}function q(){return O}function B(y){O=y}function X(){const y=O;return y>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),O+=1,y}function k(y){const u=[];return u.push(y.wrapS),u.push(y.wrapT),u.push(y.wrapR||0),u.push(y.magFilter),u.push(y.minFilter),u.push(y.anisotropy),u.push(y.internalFormat),u.push(y.format),u.push(y.type),u.push(y.generateMipmaps),u.push(y.premultiplyAlpha),u.push(y.flipY),u.push(y.unpackAlignment),u.push(y.colorSpace),u.join()}function $(y,u){const w=n.get(y);if(y.isVideoTexture&&U(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&w.__version!==y.version){const C=y.image;if(C===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{we(w,y,u);return}}else y.isExternalTexture&&(w.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,w.__webglTexture,i.TEXTURE0+u)}function j(y,u){const w=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&w.__version!==y.version){we(w,y,u);return}else y.isExternalTexture&&(w.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,w.__webglTexture,i.TEXTURE0+u)}function oe(y,u){const w=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&w.__version!==y.version){we(w,y,u);return}t.bindTexture(i.TEXTURE_3D,w.__webglTexture,i.TEXTURE0+u)}function fe(y,u){const w=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&w.__version!==y.version){Pe(w,y,u);return}t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+u)}const _e={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Ve={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},tt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Ge(y,u){if(u.type===1015&&e.has("OES_texture_float_linear")===!1&&(u.magFilter===1006||u.magFilter===1007||u.magFilter===1005||u.magFilter===1008||u.minFilter===1006||u.minFilter===1007||u.minFilter===1005||u.minFilter===1008)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,_e[u.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,_e[u.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,_e[u.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Ve[u.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Ve[u.minFilter]),u.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,tt[u.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===1003||u.minFilter!==1005&&u.minFilter!==1008||u.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||n.get(u).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,r.getMaxAnisotropy())),n.get(u).__currentAnisotropy=u.anisotropy}}}function J(y,u){let w=!1;y.__webglInit===void 0&&(y.__webglInit=!0,u.addEventListener("dispose",P));const C=u.source;let V=p.get(C);V===void 0&&(V={},p.set(C,V));const te=k(u);if(te!==y.__cacheKey){V[te]===void 0&&(V[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,w=!0),V[te].usedTimes++;const ie=V[y.__cacheKey];ie!==void 0&&(V[y.__cacheKey].usedTimes--,ie.usedTimes===0&&F(u)),y.__cacheKey=te,y.__webglTexture=V[te].texture}return w}function ne(y,u,w){return Math.floor(Math.floor(y/w)/u)}function ee(y,u,w,C){const te=y.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,u.width,u.height,w,C,u.data);else{te.sort((ve,ae)=>ve.start-ae.start);let ie=0;for(let ve=1;ve<te.length;ve++){const ae=te[ie],le=te[ve],Ae=ae.start+ae.count,Re=ne(le.start,u.width,4),Le=ne(ae.start,u.width,4);le.start<=Ae+1&&Re===Le&&ne(le.start+le.count-1,u.width,4)===Re?ae.count=Math.max(ae.count,le.start+le.count-ae.start):(++ie,te[ie]=le)}te.length=ie+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,u.width);for(let ve=0,ae=te.length;ve<ae;ve++){const le=te[ve],Ae=Math.floor(le.start/4),Re=Math.ceil(le.count/4),Le=Ae%u.width,L=Math.floor(Ae/u.width),se=Re,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Le,L,se,Z,w,C,u.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function we(y,u,w){let C=i.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(C=i.TEXTURE_2D_ARRAY),u.isData3DTexture&&(C=i.TEXTURE_3D);const V=J(y,u),te=u.source;t.bindTexture(C,y.__webglTexture,i.TEXTURE0+w);const ie=n.get(te);if(te.version!==ie.__version||V===!0){if(t.activeTexture(i.TEXTURE0+w),(typeof ImageBitmap<"u"&&u.image instanceof ImageBitmap)===!1){const Z=He.getPrimaries(He.workingColorSpace),ce=u.colorSpace===dn?null:He.getPrimaries(u.colorSpace),pe=u.colorSpace===dn||Z===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment);let K=_(u.image,!1,r.maxTextureSize);K=xt(u,K);const re=s.convert(u.format,u.colorSpace),ve=s.convert(u.type);let ae=M(u.internalFormat,re,ve,u.normalized,u.colorSpace,u.isVideoTexture);Ge(C,u);let le;const Ae=u.mipmaps,Re=u.isVideoTexture!==!0,Le=ie.__version===void 0||V===!0,L=te.dataReady,se=E(u,K);if(u.isDepthTexture)ae=A(u.format===1027,u.type),Le&&(Re?t.texStorage2D(i.TEXTURE_2D,1,ae,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ae,K.width,K.height,0,re,ve,null));else if(u.isDataTexture)if(Ae.length>0){Re&&Le&&t.texStorage2D(i.TEXTURE_2D,se,ae,Ae[0].width,Ae[0].height);for(let Z=0,ce=Ae.length;Z<ce;Z++)le=Ae[Z],Re?L&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,re,ve,le.data):t.texImage2D(i.TEXTURE_2D,Z,ae,le.width,le.height,0,re,ve,le.data);u.generateMipmaps=!1}else Re?(Le&&t.texStorage2D(i.TEXTURE_2D,se,ae,K.width,K.height),L&&ee(u,K,re,ve)):t.texImage2D(i.TEXTURE_2D,0,ae,K.width,K.height,0,re,ve,K.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){Re&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ae,Ae[0].width,Ae[0].height,K.depth);for(let Z=0,ce=Ae.length;Z<ce;Z++)if(le=Ae[Z],u.format!==1023)if(re!==null)if(Re){if(L)if(u.layerUpdates.size>0){const pe=Rs(le.width,le.height,u.format,u.type);for(const Q of u.layerUpdates){const Se=le.data.subarray(Q*pe/le.data.BYTES_PER_ELEMENT,(Q+1)*pe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Q,le.width,le.height,1,re,Se)}u.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,K.depth,re,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ae,le.width,le.height,K.depth,0,le.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,K.depth,re,ve,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ae,le.width,le.height,K.depth,0,re,ve,le.data)}else{Re&&Le&&t.texStorage2D(i.TEXTURE_2D,se,ae,Ae[0].width,Ae[0].height);for(let Z=0,ce=Ae.length;Z<ce;Z++)le=Ae[Z],u.format!==1023?re!==null?Re?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,re,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ae,le.width,le.height,0,le.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?L&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,re,ve,le.data):t.texImage2D(i.TEXTURE_2D,Z,ae,le.width,le.height,0,re,ve,le.data)}else if(u.isDataArrayTexture)if(Re){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ae,K.width,K.height,K.depth),L)if(u.layerUpdates.size>0){const Z=Rs(K.width,K.height,u.format,u.type);for(const ce of u.layerUpdates){const pe=K.data.subarray(ce*Z/K.data.BYTES_PER_ELEMENT,(ce+1)*Z/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,K.width,K.height,1,re,ve,pe)}u.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,re,ve,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,K.width,K.height,K.depth,0,re,ve,K.data);else if(u.isData3DTexture)Re?(Le&&t.texStorage3D(i.TEXTURE_3D,se,ae,K.width,K.height,K.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,re,ve,K.data)):t.texImage3D(i.TEXTURE_3D,0,ae,K.width,K.height,K.depth,0,re,ve,K.data);else if(u.isFramebufferTexture){if(Le)if(Re)t.texStorage2D(i.TEXTURE_2D,se,ae,K.width,K.height);else{let Z=K.width,ce=K.height;for(let pe=0;pe<se;pe++)t.texImage2D(i.TEXTURE_2D,pe,ae,Z,ce,0,re,ve,null),Z>>=1,ce>>=1}}else if(u.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),K.parentNode!==Z){Z.appendChild(K),m.add(u),Z.onpaint=ce=>{const pe=ce.changedElements;for(const Q of m)pe.includes(Q.image)&&(Q.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const pe=i.RGBA,Q=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,Q,Se,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Re&&Le){const Z=Ye(Ae[0]);t.texStorage2D(i.TEXTURE_2D,se,ae,Z.width,Z.height)}for(let Z=0,ce=Ae.length;Z<ce;Z++)le=Ae[Z],Re?L&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,re,ve,le):t.texImage2D(i.TEXTURE_2D,Z,ae,re,ve,le);u.generateMipmaps=!1}else if(Re){if(Le){const Z=Ye(K);t.texStorage2D(i.TEXTURE_2D,se,ae,Z.width,Z.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,ve,K)}else t.texImage2D(i.TEXTURE_2D,0,ae,re,ve,K);d(u)&&b(C),ie.__version=te.version,u.onUpdate&&u.onUpdate(u)}y.__version=u.version}function Pe(y,u,w){if(u.image.length!==6)return;const C=J(y,u),V=u.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+w);const te=n.get(V);if(V.version!==te.__version||C===!0){t.activeTexture(i.TEXTURE0+w);const ie=He.getPrimaries(He.workingColorSpace),Y=u.colorSpace===dn?null:He.getPrimaries(u.colorSpace),K=u.colorSpace===dn||ie===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const re=u.isCompressedTexture||u.image[0].isCompressedTexture,ve=u.image[0]&&u.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!re&&!ve?ae[Q]=_(u.image[Q],!0,r.maxCubemapSize):ae[Q]=ve?u.image[Q].image:u.image[Q],ae[Q]=xt(u,ae[Q]);const le=ae[0],Ae=s.convert(u.format,u.colorSpace),Re=s.convert(u.type),Le=M(u.internalFormat,Ae,Re,u.normalized,u.colorSpace),L=u.isVideoTexture!==!0,se=te.__version===void 0||C===!0,Z=V.dataReady;let ce=E(u,le);Ge(i.TEXTURE_CUBE_MAP,u);let pe;if(re){L&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Le,le.width,le.height);for(let Q=0;Q<6;Q++){pe=ae[Q].mipmaps;for(let Se=0;Se<pe.length;Se++){const xe=pe[Se];u.format!==1023?Ae!==null?L?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Le,xe.width,xe.height,0,xe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,xe.width,xe.height,Ae,Re,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Le,xe.width,xe.height,0,Ae,Re,xe.data)}}}else{if(pe=u.mipmaps,L&&se){pe.length>0&&ce++;const Q=Ye(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Le,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ve){L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,Ae,Re,ae[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,ae[Q].width,ae[Q].height,0,Ae,Re,ae[Q].data);for(let Se=0;Se<pe.length;Se++){const ot=pe[Se].image[Q].image;L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,ot.width,ot.height,Ae,Re,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Le,ot.width,ot.height,0,Ae,Re,ot.data)}}else{L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,Re,ae[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,Ae,Re,ae[Q]);for(let Se=0;Se<pe.length;Se++){const xe=pe[Se];L?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,Ae,Re,xe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Le,Ae,Re,xe.image[Q])}}}d(u)&&b(i.TEXTURE_CUBE_MAP),te.__version=V.version,u.onUpdate&&u.onUpdate(u)}y.__version=u.version}function Te(y,u,w,C,V,te){const ie=s.convert(w.format,w.colorSpace),Y=s.convert(w.type),K=M(w.internalFormat,ie,Y,w.normalized,w.colorSpace),re=n.get(u),ve=n.get(w);if(ve.__renderTarget=u,!re.__hasExternalTextures){const ae=Math.max(1,u.width>>te),le=Math.max(1,u.height>>te);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,te,K,ae,le,u.depth,0,ie,Y,null):t.texImage2D(V,te,K,ae,le,0,ie,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),rt(u)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,C,V,ve.__webglTexture,0,Qe(u)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,C,V,ve.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(y,u,w){if(i.bindRenderbuffer(i.RENDERBUFFER,y),u.depthBuffer){const C=u.depthTexture,V=C&&C.isDepthTexture?C.type:null,te=A(u.stencilBuffer,V),ie=u.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;rt(u)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(u),te,u.width,u.height):w?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(u),te,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,te,u.width,u.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,y)}else{const C=u.textures;for(let V=0;V<C.length;V++){const te=C[V],ie=s.convert(te.format,te.colorSpace),Y=s.convert(te.type),K=M(te.internalFormat,ie,Y,te.normalized,te.colorSpace);rt(u)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(u),K,u.width,u.height):w?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(u),K,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,K,u.width,u.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(y,u,w){const C=u.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=n.get(u.depthTexture);if(V.__renderTarget=u,(!V.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),C){if(V.__webglInit===void 0&&(V.__webglInit=!0,u.depthTexture.addEventListener("dispose",P)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,u.depthTexture);const re=s.convert(u.depthTexture.format),ve=s.convert(u.depthTexture.type);let ae;u.depthTexture.format===1026?ae=i.DEPTH_COMPONENT24:u.depthTexture.format===1027&&(ae=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ae,u.width,u.height,0,re,ve,null)}}else $(u.depthTexture,0);const te=V.__webglTexture,ie=Qe(u),Y=C?i.TEXTURE_CUBE_MAP_POSITIVE_X+w:i.TEXTURE_2D,K=u.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(u.depthTexture.format===1026)rt(u)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,te,0);else if(u.depthTexture.format===1027)rt(u)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(y){const u=n.get(y),w=y.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==y.depthTexture){const C=y.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),C){const V=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,C.removeEventListener("dispose",V)};C.addEventListener("dispose",V),u.__depthDisposeCallback=V}u.__boundDepthTexture=C}if(y.depthTexture&&!u.__autoAllocateDepthBuffer)if(w)for(let C=0;C<6;C++)Fe(u.__webglFramebuffer[C],y,C);else{const C=y.texture.mipmaps;C&&C.length>0?Fe(u.__webglFramebuffer[0],y,0):Fe(u.__webglFramebuffer,y,0)}else if(w){u.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[C]),u.__webglDepthbuffer[C]===void 0)u.__webglDepthbuffer[C]=i.createRenderbuffer(),nt(u.__webglDepthbuffer[C],y,!1);else{const V=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=u.__webglDepthbuffer[C];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,te)}}else{const C=y.texture.mipmaps;if(C&&C.length>0?t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=i.createRenderbuffer(),nt(u.__webglDepthbuffer,y,!1);else{const V=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=u.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(y,u,w){const C=n.get(y);u!==void 0&&Te(C.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),w!==void 0&&We(y)}function ze(y){const u=y.texture,w=n.get(y),C=n.get(u);y.addEventListener("dispose",g);const V=y.textures,te=y.isWebGLCubeRenderTarget===!0,ie=V.length>1;if(ie||(C.__webglTexture===void 0&&(C.__webglTexture=i.createTexture()),C.__version=u.version,a.memory.textures++),te){w.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(u.mipmaps&&u.mipmaps.length>0){w.__webglFramebuffer[Y]=[];for(let K=0;K<u.mipmaps.length;K++)w.__webglFramebuffer[Y][K]=i.createFramebuffer()}else w.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){w.__webglFramebuffer=[];for(let Y=0;Y<u.mipmaps.length;Y++)w.__webglFramebuffer[Y]=i.createFramebuffer()}else w.__webglFramebuffer=i.createFramebuffer();if(ie)for(let Y=0,K=V.length;Y<K;Y++){const re=n.get(V[Y]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&rt(y)===!1){w.__webglMultisampledFramebuffer=i.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let Y=0;Y<V.length;Y++){const K=V[Y];w.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,w.__webglColorRenderbuffer[Y]);const re=s.convert(K.format,K.colorSpace),ve=s.convert(K.type),ae=M(K.internalFormat,re,ve,K.normalized,K.colorSpace,y.isXRRenderTarget===!0),le=Qe(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ae,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,w.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(w.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(w.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,u);for(let Y=0;Y<6;Y++)if(u.mipmaps&&u.mipmaps.length>0)for(let K=0;K<u.mipmaps.length;K++)Te(w.__webglFramebuffer[Y][K],y,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else Te(w.__webglFramebuffer[Y],y,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(u)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let Y=0,K=V.length;Y<K;Y++){const re=V[Y],ve=n.get(re);let ae=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ae=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,ve.__webglTexture),Ge(ae,re),Te(w.__webglFramebuffer,y,re,i.COLOR_ATTACHMENT0+Y,ae,0),d(re)&&b(ae)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Y=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,C.__webglTexture),Ge(Y,u),u.mipmaps&&u.mipmaps.length>0)for(let K=0;K<u.mipmaps.length;K++)Te(w.__webglFramebuffer[K],y,u,i.COLOR_ATTACHMENT0,Y,K);else Te(w.__webglFramebuffer,y,u,i.COLOR_ATTACHMENT0,Y,0);d(u)&&b(Y),t.unbindTexture()}y.depthBuffer&&We(y)}function it(y){const u=y.textures;for(let w=0,C=u.length;w<C;w++){const V=u[w];if(d(V)){const te=R(y),ie=n.get(V).__webglTexture;t.bindTexture(te,ie),b(te),t.unbindTexture()}}}const at=[],ht=[];function st(y){if(y.samples>0){if(rt(y)===!1){const u=y.textures,w=y.width,C=y.height;let V=i.COLOR_BUFFER_BIT;const te=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(y),Y=u.length>1;if(Y)for(let re=0;re<u.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const K=y.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let re=0;re<u.length;re++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[re]);const ve=n.get(u[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,w,C,0,0,w,C,V,i.NEAREST),l===!0&&(at.length=0,ht.length=0,at.push(i.COLOR_ATTACHMENT0+re),y.depthBuffer&&y.resolveDepthBuffer===!1&&(at.push(te),ht.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<u.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,ie.__webglColorRenderbuffer[re]);const ve=n.get(u[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const u=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[u])}}}function Qe(y){return Math.min(r.maxSamples,y.samples)}function rt(y){const u=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function U(y){const u=a.render.frame;f.get(y)!==u&&(f.set(y,u),y.update())}function xt(y,u){const w=y.colorSpace,C=y.format,V=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||w!==zi&&w!==dn&&(He.getTransfer(w)===Ke?(C!==1023||V!==1009)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",w)),u}function Ye(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=oe,this.setTextureCube=fe,this.rebindTextures=ke,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function I6(i,e){function t(n,r=dn){let s;const a=He.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const F6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U6=`
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

}`;class N6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new It({vertexShader:F6,fragmentShader:U6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O6 extends yn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,m=null,h=null,p=null,v=null;const S=typeof XRWebGLBinding<"u",_=new N6,d={},b=t.getContextAttributes();let R=null,M=null;const A=[],E=[],P=new be;let g=null;const T=new Nt;T.viewport=new ct;const F=new Nt;F.viewport=new ct;const D=[T,F],O=new Yo;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=A[J];return ne===void 0&&(ne=new tr,A[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=A[J];return ne===void 0&&(ne=new tr,A[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=A[J];return ne===void 0&&(ne=new tr,A[J]=ne),ne.getHandSpace()};function B(J){const ne=E.indexOf(J.inputSource);if(ne===-1)return;const ee=A[ne];ee!==void 0&&(ee.update(J.inputSource,J.frame,c||a),ee.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let J=0;J<A.length;J++){const ne=E[J];ne!==null&&(E[J]=null,A[J].disconnect(ne))}W=null,q=null,_.reset();for(const J in d)delete d[J];e.setRenderTarget(R),p=null,h=null,m=null,r=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,we=null,Pe=null;b.depth&&(Pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=b.stencil?1027:1026,we=b.stencil?1020:1014);const Te={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Kt(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new Wn(h.textureWidth,h.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Kt(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(J){for(let ne=0;ne<J.removed.length;ne++){const ee=J.removed[ne],we=E.indexOf(ee);we>=0&&(E[we]=null,A[we].disconnect(ee))}for(let ne=0;ne<J.added.length;ne++){const ee=J.added[ne];let we=E.indexOf(ee);if(we===-1){for(let Te=0;Te<A.length;Te++)if(Te>=E.length){E.push(ee),we=Te;break}else if(E[Te]===null){E[Te]=ee,we=Te;break}if(we===-1)break}const Pe=A[we];Pe&&Pe.connect(ee)}}const $=new I,j=new I;function oe(J,ne,ee){$.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const we=$.distanceTo(j),Pe=ne.projectionMatrix.elements,Te=ee.projectionMatrix.elements,nt=Pe[14]/(Pe[10]-1),Fe=Pe[14]/(Pe[10]+1),We=(Pe[9]+1)/Pe[5],ke=(Pe[9]-1)/Pe[5],ze=(Pe[8]-1)/Pe[0],it=(Te[8]+1)/Te[0],at=nt*ze,ht=nt*it,st=we/(-ze+it),Qe=st*-ze;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(st),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const rt=nt+st,U=Fe+st,xt=at-Qe,Ye=ht+(we-Qe),y=We*Fe/U*rt,u=ke*Fe/U*rt;J.projectionMatrix.makePerspective(xt,Ye,y,u,rt,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,ee=J.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(ee=_.depthFar)),O.near=F.near=T.near=ne,O.far=F.far=T.far=ee,(W!==O.near||q!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,q=O.far),O.layers.mask=J.layers.mask|6,T.layers.mask=O.layers.mask&-5,F.layers.mask=O.layers.mask&-3;const we=J.parent,Pe=O.cameras;fe(O,we);for(let Te=0;Te<Pe.length;Te++)fe(Pe[Te],we);Pe.length===2?oe(O,T,F):O.projectionMatrix.copy(T.projectionMatrix),_e(J,O,we)};function _e(J,ne,ee){ee===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=li*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(J){return d[J]};let Ve=null;function tt(J,ne){if(f=ne.getViewerPose(c||a),v=ne,f!==null){const ee=f.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let we=!1;ee.length!==O.cameras.length&&(O.cameras.length=0,we=!0);for(let Fe=0;Fe<ee.length;Fe++){const We=ee[Fe];let ke=null;if(p!==null)ke=p.getViewport(We);else{const it=m.getViewSubImage(h,We);ke=it.viewport,Fe===0&&(e.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(M))}let ze=D[Fe];ze===void 0&&(ze=new Nt,ze.layers.enable(Fe),ze.viewport=new ct,D[Fe]=ze),ze.matrix.fromArray(We.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(We.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ke.x,ke.y,ke.width,ke.height),Fe===0&&(O.matrix.copy(ze.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),we===!0&&O.cameras.push(ze)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){m=n.getBinding();const Fe=m.getDepthInformation(ee[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(Fe,r.renderState)}if(Pe&&Pe.includes("camera-access")&&S){e.state.unbindTexture(),m=n.getBinding();for(let Fe=0;Fe<ee.length;Fe++){const We=ee[Fe].camera;if(We){let ke=d[We];ke||(ke=new la,d[We]=ke);const ze=m.getCameraImage(We);ke.sourceTexture=ze}}}}for(let ee=0;ee<A.length;ee++){const we=E[ee],Pe=A[ee];we!==null&&Pe!==void 0&&Pe.update(we,ne,c||a)}Ve&&Ve(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Ge=new da;Ge.setAnimationLoop(tt),this.setAnimationLoop=function(J){Ve=J},this.dispose=function(){}}}const B6=new ut,Ma=new De;Ma.set(-1,0,0,0,1,0,0,0,1);function G6(i,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,ua(i)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,b,R,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),m(_,d)):d.isMeshPhongMaterial?(s(_,d),f(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),h(_,d),d.isMeshPhysicalMaterial&&p(_,d,M)):d.isMeshMatcapMaterial?(s(_,d),v(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),S(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?l(_,d,b,R):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===1&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===1&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const b=e.get(d),R=b.envMap,M=b.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(B6.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Ma),_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,b,R){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*b,_.scale.value=R*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function f(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function m(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function h(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,b){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,d){d.matcap&&(_.matcap.value=d.matcap)}function S(_,d){const b=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function z6(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const E=A.program;n.uniformBlockBinding(M,E)}function c(M,A){let E=r[M.id];E===void 0&&(_(M),E=f(M),r[M.id]=E,M.addEventListener("dispose",b));const P=A.program;n.updateUBOMapping(M,P);const g=e.render.frame;s[M.id]!==g&&(h(M),s[M.id]=g)}function f(M){const A=m();M.__bindingPointIndex=A;const E=i.createBuffer(),P=M.__size,g=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function m(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const A=r[M.id],E=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let g=0,T=E.length;g<T;g++){const F=E[g];if(Array.isArray(F))for(let D=0,O=F.length;D<O;D++)p(F[D],g,D,P);else p(F,g,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,A,E,P){if(S(M,A,E,P)===!0){const g=M.__offset,T=M.value;if(Array.isArray(T)){let F=0;for(let D=0;D<T.length;D++){const O=T[D],W=d(O);v(O,M.__data,F),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,M.__data)}}function v(M,A,E){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,E)}function S(M,A,E,P){const g=M.value,T=A+"_"+E;if(P[T]===void 0)return typeof g=="number"||typeof g=="boolean"?P[T]=g:ArrayBuffer.isView(g)?P[T]=g.slice():P[T]=g.clone(),!0;{const F=P[T];if(typeof g=="number"||typeof g=="boolean"){if(F!==g)return P[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(F.equals(g)===!1)return F.copy(g),!0}}return!1}function _(M){const A=M.uniforms;let E=0;const P=16;for(let T=0,F=A.length;T<F;T++){const D=Array.isArray(A[T])?A[T]:[A[T]];for(let O=0,W=D.length;O<W;O++){const q=D[O],B=Array.isArray(q.value)?q.value:[q.value];for(let X=0,k=B.length;X<k;X++){const $=B[X],j=d($),oe=E%P,fe=oe%j.boundary,_e=oe+fe;E+=fe,_e!==0&&P-_e<j.storage&&(E+=P-_e),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=j.storage}}}const g=E%P;return g>0&&(E+=P-g),M.__size=E,M.__cache={},this}function d(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),A}function b(M){const A=M.target;A.removeEventListener("dispose",b);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function R(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const V6=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qt=null;function H6(){return qt===null&&(qt=new mo(V6,16,16,1030,1016),qt.name="DFG_LUT",qt.minFilter=1006,qt.magFilter=1006,qt.wrapS=1001,qt.wrapT=1001,qt.generateMipmaps=!1,qt.needsUpdate=!0),qt}class k6{constructor(e={}){const{canvas:t=Pa(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=1009}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const S=p,_=new Set([1033,1031,1029]),d=new Set([1009,1014,1012,1020,1017,1018]),b=new Uint32Array(4),R=new Int32Array(4),M=new I;let A=null,E=null;const P=[],g=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let D=!1,O=null,W=null,q=null,B=null;this._outputColorSpace=Lt;let X=0,k=0,$=null,j=-1,oe=null;const fe=new ct,_e=new ct;let Ve=null;const tt=new Be(0);let Ge=0,J=t.width,ne=t.height,ee=1,we=null,Pe=null;const Te=new ct(0,0,J,ne),nt=new ct(0,0,J,ne);let Fe=!1;const We=new aa;let ke=!1,ze=!1;const it=new ut,at=new I,ht=new ct,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function rt(){return $===null?ee:1}let U=n;function xt(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dr}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),U===null){const N="webgl2";if(U=xt(N,x),U===null)throw xt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw qe("WebGLRenderer: "+x.message),x}let Ye,y,u,w,C,V,te,ie,Y,K,re,ve,ae,le,Ae,Re,Le,L,se,Z,ce,pe,Q;function Se(){Ye=new H0(U),Ye.init(),ce=new I6(U,Ye),y=new F0(U,Ye,e,ce),u=new D6(U,Ye),y.reversedDepthBuffer&&h&&u.buffers.depth.setReversed(!0),W=U.createFramebuffer(),q=U.createFramebuffer(),B=U.createFramebuffer(),w=new X0(U),C=new g6,V=new L6(U,Ye,u,C,y,ce,w),te=new V0(F),ie=new Zo(U),pe=new L0(U,ie),Y=new k0(U,ie,w,pe),K=new Y0(U,Y,ie,pe,w),L=new q0(U,y,V),Ae=new U0(C),re=new _6(F,te,Ye,y,pe,Ae),ve=new G6(F,C),ae=new x6,le=new A6(Ye),Le=new D0(F,te,u,K,v,l),Re=new P6(F,K,y),Q=new z6(U,w,y,u),se=new I0(U,Ye,w),Z=new W0(U,Ye,w),w.programs=re.programs,F.capabilities=y,F.extensions=Ye,F.properties=C,F.renderLists=ae,F.shadowMap=Re,F.state=u,F.info=w}Se(),S!==1009&&(T=new Z0(S,t.width,t.height,o,r,s));const xe=new O6(F,U);this.xr=xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(x){x!==void 0&&(ee=x,this.setSize(J,ne,!1))},this.getSize=function(x){return x.set(J,ne)},this.setSize=function(x,N,H=!0){if(xe.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}J=x,ne=N,t.width=Math.floor(x*ee),t.height=Math.floor(N*ee),H===!0&&(t.style.width=x+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(J*ee,ne*ee).floor()},this.setDrawingBufferSize=function(x,N,H){J=x,ne=N,ee=H,t.width=Math.floor(x*H),t.height=Math.floor(N*H),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(S===1009){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(fe)},this.getViewport=function(x){return x.copy(Te)},this.setViewport=function(x,N,H,G){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,N,H,G),u.viewport(fe.copy(Te).multiplyScalar(ee).round())},this.getScissor=function(x){return x.copy(nt)},this.setScissor=function(x,N,H,G){x.isVector4?nt.set(x.x,x.y,x.z,x.w):nt.set(x,N,H,G),u.scissor(_e.copy(nt).multiplyScalar(ee).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(x){u.setScissorTest(Fe=x)},this.setOpaqueSort=function(x){we=x},this.setTransparentSort=function(x){Pe=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,H=!0){let G=0;if(x){let z=!1;if($!==null){const de=$.texture.format;z=_.has(de)}if(z){const de=$.texture.type,ge=d.has(de),he=Le.getClearColor(),Me=Le.getClearAlpha(),Ee=he.r,Ie=he.g,Ne=he.b;ge?(b[0]=Ee,b[1]=Ie,b[2]=Ne,b[3]=Me,U.clearBufferuiv(U.COLOR,0,b)):(R[0]=Ee,R[1]=Ie,R[2]=Ne,R[3]=Me,U.clearBufferiv(U.COLOR,0,R))}else G|=U.COLOR_BUFFER_BIT}N&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),Le.dispose(),ae.dispose(),le.dispose(),C.dispose(),te.dispose(),K.dispose(),pe.dispose(),Q.dispose(),re.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Xr),xe.removeEventListener("sessionend",qr),mn.stop()};function ot(x){x.preventDefault(),ts("WebGLRenderer: Context Lost."),D=!0}function je(){ts("WebGLRenderer: Context Restored."),D=!1;const x=w.autoReset,N=Re.enabled,H=Re.autoUpdate,G=Re.needsUpdate,z=Re.type;Se(),w.autoReset=x,Re.enabled=N,Re.autoUpdate=H,Re.needsUpdate=G,Re.type=z}function Ht(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function kt(x){const N=x.target;N.removeEventListener("dispose",kt),Ea(N)}function Ea(x){ya(x),C.remove(x)}function ya(x){const N=C.get(x).programs;N!==void 0&&(N.forEach(function(H){re.releaseProgram(H)}),x.isShaderMaterial&&re.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,H,G,z,de){N===null&&(N=st);const ge=z.isMesh&&z.matrixWorld.determinantAffine()<0,he=ba(x,N,H,G,z);u.setMaterial(G,ge);let Me=H.index,Ee=1;if(G.wireframe===!0){if(Me=Y.getWireframeAttribute(H),Me===void 0)return;Ee=2}const Ie=H.drawRange,Ne=H.attributes.position;let ye=Ie.start*Ee,Ze=(Ie.start+Ie.count)*Ee;de!==null&&(ye=Math.max(ye,de.start*Ee),Ze=Math.min(Ze,(de.start+de.count)*Ee)),Me!==null?(ye=Math.max(ye,0),Ze=Math.min(Ze,Me.count)):Ne!=null&&(ye=Math.max(ye,0),Ze=Math.min(Ze,Ne.count));const ft=Ze-ye;if(ft<0||ft===1/0)return;pe.setup(z,G,he,H,Me);let lt,Je=se;if(Me!==null&&(lt=ie.get(Me),Je=Z,Je.setIndex(lt)),z.isMesh)G.wireframe===!0?(u.setLineWidth(G.wireframeLinewidth*rt()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(z.isLine){let Mt=G.linewidth;Mt===void 0&&(Mt=1),u.setLineWidth(Mt*rt()),z.isLineSegments?Je.setMode(U.LINES):z.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else z.isPoints?Je.setMode(U.POINTS):z.isSprite&&Je.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Mt=z._multiDrawStarts,me=z._multiDrawCounts,wt=z._multiDrawCount,Xe=Me?ie.get(Me).bytesPerElement:1,Ft=C.get(G).currentProgram.getUniforms();for(let Wt=0;Wt<wt;Wt++)Ft.setValue(U,"_gl_DrawID",Wt),Je.render(Mt[Wt]/Xe,me[Wt])}else if(z.isInstancedMesh)Je.renderInstances(ye,ft,z.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,me=Math.min(H.instanceCount,Mt);Je.renderInstances(ye,ft,me)}else Je.render(ye,ft)};function Wr(x,N,H){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,di(x,N,H),x.side=0,x.needsUpdate=!0,di(x,N,H),x.side=2):di(x,N,H)}this.compile=function(x,N,H=null){H===null&&(H=x),E=le.get(H),E.init(N),g.push(E),H.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),x!==H&&x.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const G=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const he=de[ge];Wr(he,H,z),G.add(he)}else Wr(de,H,z),G.add(de)}),E=g.pop(),G},this.compileAsync=function(x,N,H=null){const G=this.compile(x,N,H);return new Promise(z=>{function de(){if(G.forEach(function(ge){C.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){z(x);return}setTimeout(de,10)}Ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ki=null;function Ta(x){Ki&&Ki(x)}function Xr(){mn.stop()}function qr(){mn.start()}const mn=new da;mn.setAnimationLoop(Ta),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(x){Ki=x,xe.setAnimationLoop(x),x===null?mn.stop():mn.start()},xe.addEventListener("sessionstart",Xr),xe.addEventListener("sessionend",qr),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(x,N);const H=xe.enabled===!0&&xe.isPresenting===!0,G=T!==null&&($===null||H)&&T.begin(F,$);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(N),N=xe.getCamera()),x.isScene===!0&&x.onBeforeRender(F,x,N,$),E=le.get(x,g.length),E.init(N),E.state.textureUnits=V.getTextureUnits(),g.push(E),it.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),We.setFromProjectionMatrix(it,2e3,N.reversedDepth),ze=this.localClippingEnabled,ke=Ae.init(this.clippingPlanes,ze),A=ae.get(x,P.length),A.init(),P.push(A),xe.enabled===!0&&xe.isPresenting===!0){const ge=F.xr.getDepthSensingMesh();ge!==null&&Zi(ge,N,-1/0,F.sortObjects)}Zi(x,N,0,F.sortObjects),A.finish(),F.sortObjects===!0&&A.sort(we,Pe,N.reversedDepth),Qe=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Qe&&Le.addToRenderList(A,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Ae.beginShadows();const z=E.state.shadowsArray;if(Re.render(z,x,N),ke===!0&&Ae.endShadows(),(G&&T.hasRenderPass())===!1){const ge=A.opaque,he=A.transmissive;if(E.setupLights(),N.isArrayCamera){const Me=N.cameras;if(he.length>0)for(let Ee=0,Ie=Me.length;Ee<Ie;Ee++){const Ne=Me[Ee];Kr(ge,he,x,Ne)}Qe&&Le.render(x);for(let Ee=0,Ie=Me.length;Ee<Ie;Ee++){const Ne=Me[Ee];Yr(A,x,Ne,Ne.viewport)}}else he.length>0&&Kr(ge,he,x,N),Qe&&Le.render(x),Yr(A,x,N)}$!==null&&k===0&&(V.updateMultisampleRenderTarget($),V.updateRenderTargetMipmap($)),G&&T.end(F),x.isScene===!0&&x.onAfterRender(F,x,N),pe.resetDefaultState(),j=-1,oe=null,g.pop(),g.length>0?(E=g[g.length-1],V.setTextureUnits(E.state.textureUnits),ke===!0&&Ae.setGlobalState(F.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,O!==null&&O.renderEnd()};function Zi(x,N,H,G){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||We.intersectsSprite(x)){G&&ht.setFromMatrixPosition(x.matrixWorld).applyMatrix4(it);const ge=K.update(x),he=x.material;he.visible&&A.push(x,ge,he,H,ht.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||We.intersectsObject(x))){const ge=K.update(x),he=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ht.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ht.copy(ge.boundingSphere.center)),ht.applyMatrix4(x.matrixWorld).applyMatrix4(it)),Array.isArray(he)){const Me=ge.groups;for(let Ee=0,Ie=Me.length;Ee<Ie;Ee++){const Ne=Me[Ee],ye=he[Ne.materialIndex];ye&&ye.visible&&A.push(x,ge,ye,H,ht.z,Ne)}}else he.visible&&A.push(x,ge,he,H,ht.z,null)}}const de=x.children;for(let ge=0,he=de.length;ge<he;ge++)Zi(de[ge],N,H,G)}function Yr(x,N,H,G){const{opaque:z,transmissive:de,transparent:ge}=x;E.setupLightsView(H),ke===!0&&Ae.setGlobalState(F.clippingPlanes,H),G&&u.viewport(fe.copy(G)),z.length>0&&fi(z,N,H),de.length>0&&fi(de,N,H),ge.length>0&&fi(ge,N,H),u.buffers.depth.setTest(!0),u.buffers.depth.setMask(!0),u.buffers.color.setMask(!0),u.setPolygonOffset(!1)}function Kr(x,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const ye=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Kt(1,1,{generateMipmaps:!0,type:ye?1016:1009,minFilter:1008,samples:Math.max(4,y.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const de=E.state.transmissionRenderTarget[G.id],ge=G.viewport||fe;de.setSize(ge.z*F.transmissionResolutionScale,ge.w*F.transmissionResolutionScale);const he=F.getRenderTarget(),Me=F.getActiveCubeFace(),Ee=F.getActiveMipmapLevel();F.setRenderTarget(de),F.getClearColor(tt),Ge=F.getClearAlpha(),Ge<1&&F.setClearColor(16777215,.5),F.clear(),Qe&&Le.render(H);const Ie=F.toneMapping;F.toneMapping=0;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ke===!0&&Ae.setGlobalState(F.clippingPlanes,G),fi(x,H,G),V.updateMultisampleRenderTarget(de),V.updateRenderTargetMipmap(de),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ze=0,ft=N.length;Ze<ft;Ze++){const lt=N[Ze],{object:Je,geometry:Mt,material:me,group:wt}=lt;if(me.side===2&&Je.layers.test(G.layers)){const Xe=me.side;me.side=1,me.needsUpdate=!0,Zr(Je,H,G,Mt,me,wt),me.side=Xe,me.needsUpdate=!0,ye=!0}}ye===!0&&(V.updateMultisampleRenderTarget(de),V.updateRenderTargetMipmap(de))}F.setRenderTarget(he,Me,Ee),F.setClearColor(tt,Ge),Ne!==void 0&&(G.viewport=Ne),F.toneMapping=Ie}function fi(x,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let z=0,de=x.length;z<de;z++){const ge=x[z],{object:he,geometry:Me,group:Ee}=ge;let Ie=ge.material;Ie.allowOverride===!0&&G!==null&&(Ie=G),he.layers.test(H.layers)&&Zr(he,N,H,Me,Ie,Ee)}}function Zr(x,N,H,G,z,de){x.onBeforeRender(F,N,H,G,z,de),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(F,N,H,G,x,de),z.transparent===!0&&z.side===2&&z.forceSinglePass===!1?(z.side=1,z.needsUpdate=!0,F.renderBufferDirect(H,N,G,z,x,de),z.side=0,z.needsUpdate=!0,F.renderBufferDirect(H,N,G,z,x,de),z.side=2):F.renderBufferDirect(H,N,G,z,x,de),x.onAfterRender(F,N,H,G,z,de)}function di(x,N,H){N.isScene!==!0&&(N=st);const G=C.get(x),z=E.state.lights,de=E.state.shadowsArray,ge=z.state.version,he=re.getParameters(x,z.state,de,N,H,E.state.lightProbeGridArray),Me=re.getProgramCacheKey(he);let Ee=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=te.get(x.envMap||G.environment,Ie),G.envMapRotation=G.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",kt),Ee=new Map,G.programs=Ee);let Ne=Ee.get(Me);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===ge)return $r(x,he),Ne}else he.uniforms=re.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,H,he),x.onBeforeCompile(he,F),Ne=re.acquireProgram(he,Me),Ee.set(Me,Ne),G.uniforms=he.uniforms;const ye=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ye.clippingPlanes=Ae.uniform),$r(x,he),G.needsLights=Ca(x),G.lightsStateVersion=ge,G.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=Ne,G.uniformsList=null,Ne}function Jr(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Gi.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function $r(x,N){const H=C.get(x);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Aa(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let H=0,G=x.length;H<G;H++){const z=x[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function ba(x,N,H,G,z){N.isScene!==!0&&(N=st),V.resetTextureUnits();const de=N.fog,ge=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,he=$===null?F.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:He.workingColorSpace,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ee=te.get(G.envMap||ge,Me),Ie=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,ft=!!H.morphAttributes.color;let lt=0;G.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(lt=F.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Mt=Je!==void 0?Je.length:0,me=C.get(G),wt=E.state.lights;if(ke===!0&&(ze===!0||x!==oe)){const et=x===oe&&G.id===j;Ae.setState(G,x,et)}let Xe=!1;G.version===me.__version?(me.needsLights&&me.lightsStateVersion!==wt.state.version||me.outputColorSpace!==he||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==Ee||G.fog===!0&&me.fog!==de||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ae.numPlanes||me.numIntersection!==Ae.numIntersection)||me.vertexAlphas!==Ie||me.vertexTangents!==Ne||me.morphTargets!==ye||me.morphNormals!==Ze||me.morphColors!==ft||me.toneMapping!==lt||me.morphTargetsCount!==Mt||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,me.__version=G.version);let Ft=me.currentProgram;Xe===!0&&(Ft=di(G,N,z),O&&G.isNodeMaterial&&O.onUpdateProgram(G,Ft,me));let Wt=!1,nn=!1,Tn=!1;const $e=Ft.getUniforms(),dt=me.uniforms;if(u.useProgram(Ft.program)&&(Wt=!0,nn=!0,Tn=!0),G.id!==j&&(j=G.id,nn=!0),me.needsLights){const et=Aa(E.state.lightProbeGridArray,z);me.lightProbeGrid!==et&&(me.lightProbeGrid=et,nn=!0)}if(Wt||oe!==x){u.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),$e.setValue(U,"projectionMatrix",x.projectionMatrix),$e.setValue(U,"viewMatrix",x.matrixWorldInverse);const sn=$e.map.cameraPosition;sn!==void 0&&sn.setValue(U,at.setFromMatrixPosition(x.matrixWorld)),y.logarithmicDepthBuffer&&$e.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&$e.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),oe!==x&&(oe=x,nn=!0,Tn=!0)}if(me.needsLights&&(wt.state.directionalShadowMap.length>0&&$e.setValue(U,"directionalShadowMap",wt.state.directionalShadowMap,V),wt.state.spotShadowMap.length>0&&$e.setValue(U,"spotShadowMap",wt.state.spotShadowMap,V),wt.state.pointShadowMap.length>0&&$e.setValue(U,"pointShadowMap",wt.state.pointShadowMap,V)),z.isSkinnedMesh){$e.setOptional(U,z,"bindMatrix"),$e.setOptional(U,z,"bindMatrixInverse");const et=z.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),$e.setValue(U,"boneTexture",et.boneTexture,V))}z.isBatchedMesh&&($e.setOptional(U,z,"batchingTexture"),$e.setValue(U,"batchingTexture",z._matricesTexture,V),$e.setOptional(U,z,"batchingIdTexture"),$e.setValue(U,"batchingIdTexture",z._indirectTexture,V),$e.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&$e.setValue(U,"batchingColorTexture",z._colorsTexture,V));const rn=H.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&L.update(z,H,Ft),(nn||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,$e.setValue(U,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(dt.envMapIntensity.value=N.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=H6()),nn){if($e.setValue(U,"toneMappingExposure",F.toneMappingExposure),me.needsLights&&Ra(dt,Tn),de&&G.fog===!0&&ve.refreshFogUniforms(dt,de),ve.refreshMaterialUniforms(dt,G,ee,ne,E.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const et=me.lightProbeGrid;dt.probesSH.value=et.texture,dt.probesMin.value.copy(et.boundingBox.min),dt.probesMax.value.copy(et.boundingBox.max),dt.probesResolution.value.copy(et.resolution)}Gi.upload(U,Jr(me),dt,V)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Gi.upload(U,Jr(me),dt,V),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&$e.setValue(U,"center",z.center),$e.setValue(U,"modelViewMatrix",z.modelViewMatrix),$e.setValue(U,"normalMatrix",z.normalMatrix),$e.setValue(U,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){const et=G.uniformsGroups;for(let sn=0,An=et.length;sn<An;sn++){const Qr=et[sn];Q.update(Qr,Ft),Q.bind(Qr,Ft)}}return Ft}function Ra(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Ca(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(x,N,H){const G=C.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),C.get(x.texture).__webglTexture=N,C.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const H=C.get(x);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,H=0){$=x,X=N,k=H;let G=null,z=!1,de=!1;if(x){const he=C.get(x);if(he.__useDefaultFramebuffer!==void 0){u.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),fe.copy(x.viewport),_e.copy(x.scissor),Ve=x.scissorTest,u.viewport(fe),u.scissor(_e),u.setScissorTest(Ve),j=-1;return}else if(he.__webglFramebuffer===void 0)V.setupRenderTarget(x);else if(he.__hasExternalTextures)V.rebindTextures(x,C.get(x.texture).__webglTexture,C.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ie=x.depthTexture;if(he.__boundDepthTexture!==Ie){if(Ie!==null&&C.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(x)}}const Me=x.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);const Ee=C.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?G=Ee[N][H]:G=Ee[N],z=!0):x.samples>0&&V.useMultisampledRTT(x)===!1?G=C.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?G=Ee[H]:G=Ee,fe.copy(x.viewport),_e.copy(x.scissor),Ve=x.scissorTest}else fe.copy(Te).multiplyScalar(ee).floor(),_e.copy(nt).multiplyScalar(ee).floor(),Ve=Fe;if(H!==0&&(G=W),u.bindFramebuffer(U.FRAMEBUFFER,G)&&u.drawBuffers(x,G),u.viewport(fe),u.scissor(_e),u.setScissorTest(Ve),z){const he=C.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,H)}else if(de){const he=N;for(let Me=0;Me<x.textures.length;Me++){const Ee=C.get(x.textures[Me]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,H,he)}}else if(x!==null&&H!==0){const he=C.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,H)}j=-1},this.readRenderTargetPixels=function(x,N,H,G,z,de,ge,he=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=C.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){u.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Ee=x.textures[he],Ie=Ee.format,Ne=Ee.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!y.textureFormatReadable(Ie)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!y.textureTypeReadable(Ne)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-G&&H>=0&&H<=x.height-z&&U.readPixels(N,H,G,z,ce.convert(Ie),ce.convert(Ne),de)}finally{const Ee=$!==null?C.get($).__webglFramebuffer:null;u.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,N,H,G,z,de,ge,he=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=C.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me)if(N>=0&&N<=x.width-G&&H>=0&&H<=x.height-z){u.bindFramebuffer(U.FRAMEBUFFER,Me);const Ee=x.textures[he],Ie=Ee.format,Ne=Ee.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!y.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!y.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(N,H,G,z,ce.convert(Ie),ce.convert(Ne),0);const Ze=$!==null?C.get($).__webglFramebuffer:null;u.bindFramebuffer(U.FRAMEBUFFER,Ze);const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Da(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.deleteBuffer(ye),U.deleteSync(ft),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,H=0){const G=Math.pow(2,-H),z=Math.floor(x.image.width*G),de=Math.floor(x.image.height*G),ge=N!==null?N.x:0,he=N!==null?N.y:0;V.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,ge,he,z,de),u.unbindTexture()},this.copyTextureToTexture=function(x,N,H=null,G=null,z=0,de=0){let ge,he,Me,Ee,Ie,Ne,ye,Ze,ft;const lt=x.isCompressedTexture?x.mipmaps[de]:x.image;if(H!==null)ge=H.max.x-H.min.x,he=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Ie=H.min.y,Ne=H.isBox3?H.min.z:0;else{const dt=Math.pow(2,-z);ge=Math.floor(lt.width*dt),he=Math.floor(lt.height*dt),x.isDataArrayTexture?Me=lt.depth:x.isData3DTexture?Me=Math.floor(lt.depth*dt):Me=1,Ee=0,Ie=0,Ne=0}G!==null?(ye=G.x,Ze=G.y,ft=G.z):(ye=0,Ze=0,ft=0);const Je=ce.convert(N.format),Mt=ce.convert(N.type);let me;N.isData3DTexture?(V.setTexture3D(N,0),me=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(V.setTexture2DArray(N,0),me=U.TEXTURE_2D_ARRAY):(V.setTexture2D(N,0),me=U.TEXTURE_2D),u.activeTexture(U.TEXTURE0),u.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),u.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),u.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const wt=u.getParameter(U.UNPACK_ROW_LENGTH),Xe=u.getParameter(U.UNPACK_IMAGE_HEIGHT),Ft=u.getParameter(U.UNPACK_SKIP_PIXELS),Wt=u.getParameter(U.UNPACK_SKIP_ROWS),nn=u.getParameter(U.UNPACK_SKIP_IMAGES);u.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),u.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),u.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),u.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),u.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne);const Tn=x.isDataArrayTexture||x.isData3DTexture,$e=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const dt=C.get(x),rn=C.get(N),et=C.get(dt.__renderTarget),sn=C.get(rn.__renderTarget);u.bindFramebuffer(U.READ_FRAMEBUFFER,et.__webglFramebuffer),u.bindFramebuffer(U.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let An=0;An<Me;An++)Tn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,C.get(x).__webglTexture,z,Ne+An),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,C.get(N).__webglTexture,de,ft+An)),U.blitFramebuffer(Ee,Ie,ge,he,ye,Ze,ge,he,U.DEPTH_BUFFER_BIT,U.NEAREST);u.bindFramebuffer(U.READ_FRAMEBUFFER,null),u.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||C.has(x)){const dt=C.get(x),rn=C.get(N);u.bindFramebuffer(U.READ_FRAMEBUFFER,q),u.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let et=0;et<Me;et++)Tn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dt.__webglTexture,z,Ne+et):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,z),$e?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rn.__webglTexture,de,ft+et):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rn.__webglTexture,de),z!==0?U.blitFramebuffer(Ee,Ie,ge,he,ye,Ze,ge,he,U.COLOR_BUFFER_BIT,U.NEAREST):$e?U.copyTexSubImage3D(me,de,ye,Ze,ft+et,Ee,Ie,ge,he):U.copyTexSubImage2D(me,de,ye,Ze,Ee,Ie,ge,he);u.bindFramebuffer(U.READ_FRAMEBUFFER,null),u.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else $e?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(me,de,ye,Ze,ft,ge,he,Me,Je,Mt,lt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(me,de,ye,Ze,ft,ge,he,Me,Je,lt.data):U.texSubImage3D(me,de,ye,Ze,ft,ge,he,Me,Je,Mt,lt):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,ye,Ze,ge,he,Je,Mt,lt.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,ye,Ze,lt.width,lt.height,Je,lt.data):U.texSubImage2D(U.TEXTURE_2D,de,ye,Ze,ge,he,Je,Mt,lt);u.pixelStorei(U.UNPACK_ROW_LENGTH,wt),u.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xe),u.pixelStorei(U.UNPACK_SKIP_PIXELS,Ft),u.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),u.pixelStorei(U.UNPACK_SKIP_IMAGES,nn),de===0&&N.generateMipmaps&&U.generateMipmap(me),u.unbindTexture()},this.initRenderTarget=function(x){C.get(x).__webglFramebuffer===void 0&&V.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?V.setTextureCube(x,0):x.isData3DTexture?V.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?V.setTexture2DArray(x,0):V.setTexture2D(x,0),u.unbindTexture()},this.resetState=function(){X=0,k=0,$=null,u.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const W6=JSON.parse("[-840,-1570,-840,-1494,-840,-1417,-840,-1340,-840,-1264,-840,-1187,-840,-1111,-840,-1034,-840,-957,-840,-881,-840,-804,-840,-728,-840,-651,-840,-574,-840,-498,-840,-421,-840,-345,-840,-268,-840,-191,-840,-115,-840,-38,-840,38,-840,115,-840,191,-840,268,-840,345,-840,421,-840,498,-840,574,-840,651,-840,728,-840,804,-840,881,-840,957,-840,1034,-840,1111,-840,1187,-840,1264,-840,1340,-840,1417,-840,1494,-840,1570,-840,1647,-840,1723,-832,-1698,-832,-1562,-832,-1494,-832,-1426,-832,-1358,-832,-1291,-832,-1223,-832,-1155,-832,-1087,-832,-1019,-832,-951,-832,-883,-832,-815,-832,-747,-832,-679,-832,-543,-832,-475,-832,-408,-832,-340,-832,-272,-832,-204,-832,-136,-832,-68,-832,0,-832,68,-832,136,-832,204,-832,272,-832,340,-832,408,-832,475,-832,543,-832,611,-832,679,-832,747,-832,815,-832,883,-832,951,-832,1019,-832,1087,-832,1155,-832,1223,-832,1291,-832,1358,-832,1426,-832,1494,-832,1562,-832,1630,-824,-1500,-824,-1440,-824,-1380,-824,-1320,-824,-1260,-824,-1200,-824,-1140,-824,-1080,-824,-1020,-824,-960,-824,-900,-824,-840,-824,-780,-824,-720,-824,-660,-824,-540,-824,-480,-824,-420,-824,-360,-824,-300,-824,-240,-824,-180,-824,-120,-824,-60,-824,0,-824,60,-824,120,-824,180,-824,240,-824,300,-824,360,-824,420,-824,480,-824,540,-824,600,-824,660,-824,720,-824,780,-824,840,-824,900,-824,960,-824,1020,-824,1080,-824,1140,-824,1200,-824,1260,-824,1320,-824,1380,-824,1440,-824,1500,-824,1560,-816,-1500,-816,-1445,-816,-1391,-816,-1336,-816,-1282,-816,-1227,-816,-1173,-816,-1118,-816,-1064,-816,-1009,-816,-955,-816,-900,-816,-845,-816,-791,-816,-736,-816,-682,-816,-627,-816,-409,-816,-355,-816,-300,-816,-245,-816,-191,-816,-136,-816,-82,-816,-27,-816,27,-816,82,-816,136,-816,191,-816,245,-816,300,-816,355,-816,409,-816,464,-816,518,-816,573,-816,627,-816,682,-816,736,-816,791,-816,845,-816,900,-816,955,-816,1009,-816,1064,-816,1118,-816,1173,-816,1227,-816,1282,-816,1336,-816,1391,-816,1445,-816,1500,-816,1555,-816,1609,-808,-1450,-808,-1400,-808,-1350,-808,-1300,-808,-1250,-808,-1200,-808,-1150,-808,-1100,-808,-1050,-808,-1000,-808,-950,-808,-900,-808,-850,-808,-800,-808,-350,-808,-300,-808,-250,-808,-200,-808,-150,-808,-100,-808,-50,-808,0,-808,50,-808,100,-808,150,-808,200,-808,250,-808,300,-808,350,-808,400,-808,450,-808,500,-808,550,-808,600,-808,650,-808,700,-808,750,-808,800,-808,850,-808,900,-808,950,-808,1000,-808,1050,-808,1100,-808,1150,-808,1200,-808,1250,-808,1300,-808,1350,-808,1400,-808,1450,-808,1500,-808,1550,-808,1600,-800,-1454,-800,-1408,-800,-1362,-800,-1315,-800,-1269,-800,-1223,-800,-1177,-800,-1131,-800,-1085,-800,-1038,-800,-992,-800,-946,-800,-900,-800,-854,-800,-808,-800,-485,-800,-438,-800,-208,-800,-162,-800,-115,-800,-69,-800,-23,-800,23,-800,69,-800,115,-800,162,-800,208,-800,254,-800,300,-800,346,-800,392,-800,438,-800,485,-800,531,-800,577,-800,623,-800,669,-800,715,-800,762,-800,808,-800,854,-800,900,-800,946,-800,992,-800,1038,-800,1085,-800,1131,-800,1177,-800,1223,-800,1269,-800,1315,-800,1362,-800,1408,-800,1454,-800,1500,-800,1546,-800,1592,-792,-1629,-792,-1500,-792,-1457,-792,-1414,-792,-1371,-792,-1329,-792,-1286,-792,-1243,-792,-1200,-792,-1157,-792,-1114,-792,-1071,-792,-1029,-792,-986,-792,-943,-792,-900,-792,-857,-792,-814,-792,-471,-792,-300,-792,-257,-792,-214,-792,-171,-792,-129,-792,-86,-792,-43,-792,0,-792,43,-792,86,-792,129,-792,171,-792,214,-792,257,-792,300,-792,343,-792,386,-792,429,-792,471,-792,514,-792,557,-792,600,-792,643,-792,686,-792,729,-792,771,-792,814,-792,857,-792,900,-792,943,-792,986,-792,1029,-792,1071,-792,1114,-792,1157,-792,1200,-792,1243,-792,1286,-792,1329,-792,1371,-792,1414,-792,1457,-792,1500,-792,1543,-792,1586,-784,-1540,-784,-1500,-784,-1460,-784,-1420,-784,-1380,-784,-1340,-784,-1300,-784,-1260,-784,-1220,-784,-1180,-784,-1140,-784,-1100,-784,-1060,-784,-1020,-784,-980,-784,-940,-784,-900,-784,-860,-784,-820,-784,-780,-784,-460,-784,-340,-784,-300,-784,-260,-784,-220,-784,-180,-784,-140,-784,-100,-784,-60,-784,-20,-784,20,-784,60,-784,100,-784,140,-784,180,-784,220,-784,260,-784,300,-784,340,-784,380,-784,420,-784,460,-784,500,-784,540,-784,580,-784,620,-784,660,-784,700,-784,740,-784,780,-784,820,-784,860,-784,900,-784,940,-784,980,-784,1020,-784,1060,-784,1100,-784,1140,-784,1180,-784,1220,-784,1260,-784,1300,-784,1340,-784,1380,-784,1420,-784,1460,-784,1500,-784,1540,-784,1580,-784,1620,-784,1660,-776,-1577,-776,-1540,-776,-1466,-776,-1429,-776,-1392,-776,-1355,-776,-1318,-776,-1280,-776,-1243,-776,-1206,-776,-1169,-776,-1132,-776,-1095,-776,-1058,-776,-1021,-776,-984,-776,-946,-776,-909,-776,-872,-776,-835,-776,-798,-776,-761,-776,-315,-776,-278,-776,-241,-776,-204,-776,-167,-776,-130,-776,-93,-776,-56,-776,-19,-776,19,-776,56,-776,93,-776,130,-776,167,-776,204,-776,241,-776,278,-776,315,-776,353,-776,390,-776,427,-776,464,-776,501,-776,538,-776,575,-776,612,-776,649,-776,687,-776,724,-776,761,-776,798,-776,835,-776,872,-776,909,-776,946,-776,984,-776,1021,-776,1058,-776,1095,-776,1132,-776,1169,-776,1206,-776,1243,-776,1280,-776,1318,-776,1355,-776,1392,-776,1429,-776,1466,-776,1503,-776,1540,-776,1577,-776,1614,-776,1689,-768,-1433,-768,-1398,-768,-1363,-768,-1328,-768,-1293,-768,-1258,-768,-1223,-768,-1188,-768,-1153,-768,-1118,-768,-1083,-768,-1049,-768,-1014,-768,-979,-768,-944,-768,-909,-768,-874,-768,-839,-768,-804,-768,-280,-768,-245,-768,-210,-768,-175,-768,-140,-768,-105,-768,-70,-768,-35,-768,0,-768,35,-768,70,-768,105,-768,140,-768,175,-768,210,-768,245,-768,280,-768,315,-768,350,-768,384,-768,419,-768,454,-768,489,-768,524,-768,559,-768,594,-768,629,-768,664,-768,699,-768,734,-768,769,-768,804,-768,839,-768,874,-768,909,-768,944,-768,979,-768,1014,-768,1049,-768,1083,-768,1118,-768,1153,-768,1188,-768,1223,-768,1258,-768,1293,-768,1328,-768,1363,-768,1398,-768,1433,-768,1468,-768,1503,-768,1538,-768,1573,-768,1608,-760,-1437,-760,-1404,-760,-1371,-760,-1338,-760,-1305,-760,-1272,-760,-1239,-760,-1206,-760,-1172,-760,-1139,-760,-1106,-760,-1073,-760,-1040,-760,-1007,-760,-974,-760,-941,-760,-908,-760,-875,-760,-842,-760,-809,-760,-776,-760,-743,-760,-710,-760,-677,-760,-248,-760,-215,-760,-182,-760,-149,-760,-116,-760,-83,-760,-50,-760,-17,-760,17,-760,50,-760,83,-760,116,-760,149,-760,182,-760,215,-760,248,-760,281,-760,314,-760,347,-760,380,-760,413,-760,446,-760,479,-760,512,-760,545,-760,578,-760,611,-760,644,-760,677,-760,710,-760,743,-760,776,-760,809,-760,842,-760,875,-760,908,-760,941,-760,974,-760,1007,-760,1040,-760,1073,-760,1106,-760,1139,-760,1172,-760,1206,-760,1239,-760,1272,-760,1305,-760,1338,-760,1371,-760,1404,-760,1437,-760,1470,-760,1503,-760,1536,-760,1569,-760,1602,-752,-1377,-752,-1346,-752,-1315,-752,-1283,-752,-1252,-752,-1221,-752,-1190,-752,-1158,-752,-1127,-752,-1096,-752,-1033,-752,-970,-752,-939,-752,-908,-752,-877,-752,-845,-752,-814,-752,-783,-752,-751,-752,-720,-752,-689,-752,-657,-752,-157,-752,-125,-752,-94,-752,-63,-752,-31,-752,0,-752,31,-752,63,-752,94,-752,125,-752,157,-752,188,-752,219,-752,250,-752,282,-752,313,-752,344,-752,376,-752,407,-752,438,-752,470,-752,501,-752,532,-752,563,-752,595,-752,626,-752,657,-752,689,-752,720,-752,751,-752,783,-752,814,-752,845,-752,877,-752,908,-752,939,-752,970,-752,1002,-752,1033,-752,1064,-752,1096,-752,1127,-752,1158,-752,1190,-752,1221,-752,1252,-752,1283,-752,1315,-752,1346,-752,1377,-752,1409,-752,1440,-752,1471,-752,1503,-752,1534,-752,1565,-752,1597,-744,-1145,-744,-1116,-744,-997,-744,-967,-744,-937,-744,-907,-744,-878,-744,-848,-744,-818,-744,-788,-744,-759,-744,-729,-744,-699,-744,-669,-744,-640,-744,-610,-744,-164,-744,-134,-744,-104,-744,-74,-744,-45,-744,-15,-744,15,-744,45,-744,74,-744,104,-744,134,-744,164,-744,193,-744,223,-744,253,-744,283,-744,312,-744,342,-744,372,-744,402,-744,431,-744,461,-744,491,-744,521,-744,550,-744,580,-744,610,-744,640,-744,669,-744,699,-744,729,-744,759,-744,788,-744,818,-744,848,-744,878,-744,907,-744,937,-744,967,-744,997,-744,1026,-744,1056,-744,1086,-744,1116,-744,1145,-744,1175,-744,1205,-744,1235,-744,1264,-744,1294,-744,1324,-744,1354,-744,1383,-744,1413,-744,1443,-744,1473,-744,1502,-744,1532,-744,1562,-744,1592,-744,1621,-744,1651,-736,-964,-736,-935,-736,-907,-736,-879,-736,-850,-736,-794,-736,-709,-736,-680,-736,-652,-736,-624,-736,-142,-736,-113,-736,-85,-736,-57,-736,-28,-736,0,-736,28,-736,57,-736,85,-736,113,-736,142,-736,170,-736,198,-736,227,-736,255,-736,283,-736,312,-736,340,-736,369,-736,397,-736,425,-736,454,-736,482,-736,510,-736,539,-736,567,-736,595,-736,624,-736,652,-736,680,-736,709,-736,737,-736,765,-736,794,-736,822,-736,850,-736,879,-736,907,-736,935,-736,964,-736,992,-736,1020,-736,1049,-736,1077,-736,1106,-736,1134,-736,1162,-736,1191,-736,1219,-736,1247,-736,1276,-736,1304,-736,1332,-736,1361,-736,1389,-736,1417,-736,1446,-736,1474,-736,1502,-736,1531,-736,1559,-736,1587,-736,1616,-736,1644,-728,-663,-728,-636,-728,-609,-728,-122,-728,-95,-728,-68,-728,-41,-728,-14,-728,14,-728,41,-728,68,-728,95,-728,122,-728,149,-728,176,-728,203,-728,230,-728,257,-728,284,-728,311,-728,338,-728,365,-728,392,-728,420,-728,447,-728,474,-728,501,-728,528,-728,555,-728,582,-728,609,-728,636,-728,663,-728,690,-728,717,-728,744,-728,771,-728,798,-728,826,-728,853,-728,880,-728,907,-728,934,-728,961,-728,988,-728,1015,-728,1042,-728,1069,-728,1096,-728,1123,-728,1150,-728,1177,-728,1205,-728,1232,-728,1259,-728,1286,-728,1313,-728,1340,-728,1367,-728,1394,-728,1421,-728,1448,-728,1475,-728,1502,-728,1529,-728,1556,-728,1583,-728,1611,-728,1638,-728,1665,-728,1692,-720,-1010,-720,-984,-720,-699,-720,-647,-720,-104,-720,-78,-720,-52,-720,-26,-720,0,-720,26,-720,52,-720,78,-720,104,-720,129,-720,155,-720,181,-720,207,-720,233,-720,259,-720,285,-720,311,-720,337,-720,363,-720,388,-720,414,-720,440,-720,466,-720,492,-720,518,-720,544,-720,570,-720,596,-720,622,-720,647,-720,673,-720,725,-720,751,-720,777,-720,803,-720,829,-720,855,-720,881,-720,906,-720,932,-720,958,-720,984,-720,1010,-720,1036,-720,1062,-720,1088,-720,1114,-720,1140,-720,1165,-720,1191,-720,1217,-720,1243,-720,1269,-720,1295,-720,1321,-720,1347,-720,1373,-720,1399,-720,1424,-720,1450,-720,1476,-720,1502,-720,1528,-720,1554,-720,1580,-720,1606,-720,1632,-720,1658,-720,1683,-712,-708,-712,-683,-712,-658,-712,-633,-712,-62,-712,12,-712,37,-712,62,-712,87,-712,112,-712,137,-712,161,-712,186,-712,211,-712,236,-712,261,-712,286,-712,310,-712,335,-712,360,-712,385,-712,410,-712,434,-712,459,-712,484,-712,509,-712,534,-712,559,-712,583,-712,608,-712,633,-712,658,-712,683,-712,732,-712,757,-712,782,-712,807,-712,832,-712,857,-712,881,-712,906,-712,931,-712,956,-712,981,-712,1006,-712,1030,-712,1055,-712,1080,-712,1105,-712,1130,-712,1154,-712,1179,-712,1204,-712,1229,-712,1254,-712,1279,-712,1303,-712,1328,-712,1353,-712,1378,-712,1403,-712,1428,-712,1452,-712,1477,-712,1502,-712,1527,-712,1552,-712,1577,-712,1601,-712,1626,-712,1651,-712,1676,-704,-715,-704,-691,-704,-668,-704,-644,-704,95,-704,143,-704,167,-704,191,-704,262,-704,310,-704,334,-704,358,-704,381,-704,405,-704,429,-704,453,-704,477,-704,501,-704,525,-704,548,-704,572,-704,596,-704,620,-704,644,-704,668,-704,691,-704,739,-704,763,-704,787,-704,811,-704,834,-704,858,-704,882,-704,906,-704,930,-704,954,-704,977,-704,1001,-704,1025,-704,1049,-704,1073,-704,1097,-704,1121,-704,1144,-704,1168,-704,1192,-704,1216,-704,1240,-704,1264,-704,1287,-704,1311,-704,1335,-704,1359,-704,1383,-704,1407,-704,1430,-704,1454,-704,1478,-704,1502,-704,1526,-704,1550,-704,1574,-704,1597,-704,1621,-696,-722,-696,-699,-696,-676,-696,-654,-696,-631,-696,332,-696,401,-696,424,-696,447,-696,470,-696,493,-696,516,-696,539,-696,562,-696,585,-696,608,-696,631,-696,654,-696,676,-696,768,-696,791,-696,814,-696,837,-696,860,-696,883,-696,906,-696,929,-696,952,-696,975,-696,997,-696,1020,-696,1043,-696,1066,-696,1089,-696,1112,-696,1135,-696,1158,-696,1181,-696,1204,-696,1227,-696,1250,-696,1273,-696,1296,-696,1318,-696,1341,-696,1364,-696,1387,-696,1410,-696,1433,-696,1456,-696,1479,-696,1502,-696,1525,-696,1548,-696,1571,-696,1594,-688,-663,-688,-640,-688,331,-688,420,-688,442,-688,464,-688,486,-688,508,-688,530,-688,552,-688,574,-688,596,-688,618,-688,640,-688,663,-688,685,-688,795,-688,817,-688,839,-688,861,-688,883,-688,906,-688,928,-688,950,-688,972,-688,994,-688,1016,-688,1038,-688,1060,-688,1082,-688,1104,-688,1126,-688,1148,-688,1171,-688,1193,-688,1215,-688,1237,-688,1259,-688,1281,-688,1303,-688,1325,-688,1347,-688,1369,-688,1391,-688,1413,-688,1436,-688,1458,-688,1480,-688,1502,-688,1524,-688,1546,-680,-671,-680,458,-680,479,-680,501,-680,522,-680,543,-680,564,-680,586,-680,607,-680,628,-680,650,-680,671,-680,692,-680,820,-680,841,-680,863,-680,884,-680,905,-680,927,-680,948,-680,969,-680,991,-680,1012,-680,1033,-680,1054,-680,1076,-680,1097,-680,1118,-680,1140,-680,1161,-680,1182,-680,1204,-680,1225,-680,1246,-680,1267,-680,1289,-680,1310,-680,1331,-680,1353,-680,1374,-680,1395,-680,1417,-680,1438,-680,1459,-672,-672,-672,-652,-672,507,-672,528,-672,548,-672,569,-672,859,-672,879,-672,900,-672,921,-672,941,-672,962,-672,983,-672,1003,-672,1024,-672,1045,-672,1066,-672,1086,-672,1107,-672,1128,-672,1169,-672,1190,-672,1210,-672,1231,-672,1252,-672,1272,-672,1293,-672,1314,-672,1334,-672,1355,-672,1376,-672,1397,-672,1417,-672,1438,-664,-640,-664,520,-664,540,-664,560,-664,1020,-664,1040,-664,1060,-664,1120,-664,1140,-664,1260,-664,1300,-664,1320,-664,1340,-664,1360,-656,-629,-648,-637,-648,-619,-640,-603,-632,-559,-552,-693,-552,-679,-552,-665,-544,-708,-544,-680,-544,-666,-544,-364,-536,-735,-536,-721,-536,-694,-536,-681,-528,-735,-528,-721,-528,-708,-528,-695,-520,-747,-520,-734,-520,-721,-520,-708,-520,-695,-520,-604,-520,-591,-512,-734,-512,-721,-512,-709,-512,-696,-504,-746,-504,-734,-504,-721,-504,-709,-504,-696,-496,-746,-496,-734,-496,-721,-496,-709,-496,-697,-496,-684,-496,697,-488,-742,-488,-730,-488,-718,-488,-705,-488,-693,-488,-681,-480,-730,-480,-718,-480,-706,-480,-694,-480,-682,-480,-670,-472,-741,-472,-729,-472,-718,-472,-706,-472,-694,-472,-682,-472,-671,-472,-659,-464,-749,-464,-726,-464,-714,-464,-703,-464,-691,-464,-679,-464,517,-464,1690,-456,-737,-456,-726,-456,-714,-456,-703,-456,-691,-456,-680,-456,1674,-456,1686,-456,1697,-448,-734,-448,-722,-448,-711,-448,-700,-448,-688,-448,-677,-448,-666,-448,1682,-448,1693,-448,1704,-440,-722,-440,-711,-440,-700,-440,-689,-440,-678,-440,-667,-440,-656,-440,1689,-440,1700,-440,1711,-432,-741,-432,-719,-432,-708,-432,-697,-432,-686,-432,-675,-432,-664,-432,-653,-432,1465,-432,1707,-432,1718,-424,-737,-424,-727,-424,-716,-424,-705,-424,-694,-424,-683,-424,-672,-424,-661,-424,-651,-424,-640,-424,1453,-424,1464,-424,1475,-424,1713,-424,1724,-424,1735,-416,-726,-416,-716,-416,-705,-416,-694,-416,-684,-416,-673,-416,-662,-416,-652,-416,1453,-416,1464,-416,1474,-416,1720,-416,1731,-416,1741,-408,-734,-408,-723,-408,-713,-408,-702,-408,-691,-408,-681,-408,-670,-408,-660,-408,-639,-408,-628,-408,1452,-408,1726,-408,1758,-400,-730,-400,-720,-400,-710,-400,-699,-400,-689,-400,-678,-400,-668,-400,-657,-400,-647,-400,-637,-400,-626,-400,1440,-400,1482,-400,1753,-400,1763,-392,-727,-392,-717,-392,-707,-392,-696,-392,-686,-392,-676,-392,-665,-392,-655,-392,-645,-392,-634,-392,-624,-392,1738,-392,1748,-392,1759,-392,1769,-384,-734,-384,-724,-384,-714,-384,-704,-384,-693,-384,-683,-384,-673,-384,-663,-384,-653,-384,-642,-384,-632,-384,-622,-384,-612,-384,-602,-384,-592,-384,-581,-384,1428,-384,1438,-384,1448,-384,1458,-384,1469,-384,1754,-384,1764,-384,1775,-376,-731,-376,-721,-376,-711,-376,-701,-376,-691,-376,-681,-376,-671,-376,-661,-376,-650,-376,-640,-376,-630,-376,-620,-376,-610,-376,-600,-376,-590,-376,-580,-376,1407,-376,1417,-376,1427,-376,1437,-376,1447,-376,1457,-376,1467,-376,1477,-376,1487,-376,1750,-376,1760,-376,1780,-368,-725,-368,-715,-368,-705,-368,-695,-368,-685,-368,-675,-368,-665,-368,-655,-368,-645,-368,-635,-368,-625,-368,-615,-368,-605,-368,-595,-368,-585,-368,-575,-368,1405,-368,1415,-368,1425,-368,1435,-368,1445,-368,1455,-368,1465,-368,1475,-368,1485,-368,1495,-368,1745,-368,1755,-360,-722,-360,-712,-360,-702,-360,-692,-360,-682,-360,-673,-360,-663,-360,-653,-360,-643,-360,-633,-360,-623,-360,-613,-360,-603,-360,-593,-360,-584,-360,-574,-360,1375,-360,1404,-360,1414,-360,1424,-360,1434,-360,1444,-360,1454,-360,1464,-360,1474,-360,1484,-360,1493,-360,1741,-352,-719,-352,-709,-352,-699,-352,-690,-352,-680,-352,-670,-352,-660,-352,-651,-352,-641,-352,-631,-352,-621,-352,-611,-352,-602,-352,-592,-352,-582,-352,1394,-352,1404,-352,1414,-352,1423,-352,1433,-352,1443,-352,1453,-352,1463,-352,1472,-352,1482,-352,1492,-352,1502,-352,1736,-344,-713,-344,-704,-344,-694,-344,-684,-344,-674,-344,-665,-344,-655,-344,-645,-344,-636,-344,-626,-344,-616,-344,-606,-344,-597,-344,-587,-344,-577,-344,-568,-344,-558,-344,-548,-344,-539,-344,199,-344,1160,-344,1169,-344,1179,-344,1189,-344,1383,-344,1392,-344,1402,-344,1412,-344,1422,-344,1431,-344,1441,-344,1451,-344,1460,-344,1470,-344,1480,-344,1489,-344,1499,-344,1509,-336,-710,-336,-701,-336,-691,-336,-682,-336,-672,-336,-662,-336,-653,-336,-643,-336,-634,-336,-624,-336,-614,-336,-605,-336,-595,-336,-586,-336,-576,-336,-566,-336,-557,-336,-547,-336,-538,-336,192,-336,202,-336,211,-336,221,-336,230,-336,240,-336,250,-336,259,-336,269,-336,1162,-336,1171,-336,1181,-336,1190,-336,1200,-336,1210,-336,1219,-336,1229,-336,1238,-336,1354,-336,1363,-336,1382,-336,1392,-336,1402,-336,1411,-336,1421,-336,1430,-336,1440,-336,1450,-336,1459,-336,1469,-336,1478,-336,1488,-336,1498,-336,1507,-328,-714,-328,-705,-328,-695,-328,-686,-328,-676,-328,-667,-328,-657,-328,-648,-328,-638,-328,-629,-328,-619,-328,-610,-328,-600,-328,-590,-328,-581,-328,-571,-328,-562,-328,-552,-328,-543,-328,-533,-328,181,-328,190,-328,200,-328,210,-328,219,-328,229,-328,238,-328,248,-328,257,-328,267,-328,276,-328,1162,-328,1171,-328,1181,-328,1190,-328,1200,-328,1210,-328,1219,-328,1229,-328,1238,-328,1248,-328,1343,-328,1352,-328,1362,-328,1371,-328,1381,-328,1390,-328,1400,-328,1410,-328,1419,-328,1429,-328,1438,-328,1448,-328,1457,-328,1467,-328,1476,-328,1486,-328,1495,-328,1505,-328,1514,-320,-712,-320,-702,-320,-693,-320,-683,-320,-674,-320,-664,-320,-655,-320,-646,-320,-636,-320,-627,-320,-617,-320,-608,-320,-598,-320,-589,-320,-580,-320,-570,-320,-561,-320,-551,-320,-542,-320,-532,-320,-523,-320,184,-320,193,-320,203,-320,212,-320,221,-320,231,-320,240,-320,250,-320,259,-320,269,-320,278,-320,287,-320,1164,-320,1173,-320,1183,-320,1192,-320,1202,-320,1211,-320,1220,-320,1230,-320,1239,-320,1249,-320,1258,-320,1268,-320,1277,-320,1324,-320,1334,-320,1343,-320,1352,-320,1362,-320,1371,-320,1381,-320,1390,-320,1399,-320,1409,-320,1418,-320,1428,-320,1437,-320,1447,-320,1456,-320,1465,-320,1475,-320,1484,-320,1494,-320,1503,-320,1513,-320,1522,-312,-715,-312,-706,-312,-697,-312,-687,-312,-678,-312,-669,-312,-659,-312,-650,-312,-641,-312,-631,-312,-622,-312,-612,-312,-603,-312,-594,-312,-584,-312,-575,-312,-566,-312,-556,-312,-547,-312,-538,-312,-528,-312,-519,-312,-510,-312,182,-312,192,-312,201,-312,210,-312,220,-312,229,-312,238,-312,248,-312,257,-312,266,-312,276,-312,285,-312,295,-312,1155,-312,1164,-312,1174,-312,1183,-312,1192,-312,1202,-312,1211,-312,1220,-312,1230,-312,1239,-312,1248,-312,1258,-312,1267,-312,1276,-312,1286,-312,1295,-312,1304,-312,1314,-312,1323,-312,1332,-312,1342,-312,1351,-312,1361,-312,1370,-312,1379,-312,1389,-312,1398,-312,1407,-312,1417,-312,1426,-312,1435,-312,1445,-312,1454,-312,1463,-312,1473,-312,1482,-312,1491,-312,1501,-312,1510,-312,1519,-312,1529,-304,-710,-304,-701,-304,-691,-304,-682,-304,-673,-304,-663,-304,-654,-304,-645,-304,-636,-304,-626,-304,-617,-304,-608,-304,-598,-304,-589,-304,-580,-304,-571,-304,-561,-304,-552,-304,-543,-304,-534,-304,-524,-304,-515,-304,-506,-304,181,-304,190,-304,199,-304,209,-304,218,-304,227,-304,237,-304,246,-304,255,-304,264,-304,274,-304,283,-304,292,-304,302,-304,1155,-304,1164,-304,1174,-304,1183,-304,1192,-304,1202,-304,1211,-304,1220,-304,1229,-304,1239,-304,1248,-304,1257,-304,1266,-304,1276,-304,1285,-304,1294,-304,1304,-304,1313,-304,1322,-304,1331,-304,1341,-304,1350,-304,1359,-304,1369,-304,1378,-304,1387,-304,1396,-304,1406,-304,1415,-304,1424,-304,1434,-304,1443,-304,1452,-304,1461,-304,1471,-304,1480,-304,1489,-304,1498,-304,1508,-304,1517,-304,1526,-296,-704,-296,-695,-296,-686,-296,-677,-296,-668,-296,-658,-296,-649,-296,-640,-296,-631,-296,-621,-296,-612,-296,-603,-296,-594,-296,-585,-296,-575,-296,-566,-296,-557,-296,-548,-296,-539,-296,-529,-296,-520,-296,-511,-296,-502,-296,170,-296,180,-296,189,-296,198,-296,207,-296,216,-296,226,-296,235,-296,244,-296,253,-296,262,-296,272,-296,281,-296,290,-296,299,-296,308,-296,1155,-296,1165,-296,1174,-296,1183,-296,1192,-296,1202,-296,1211,-296,1220,-296,1229,-296,1238,-296,1248,-296,1257,-296,1266,-296,1275,-296,1284,-296,1294,-296,1303,-296,1312,-296,1321,-296,1330,-296,1340,-296,1349,-296,1358,-296,1367,-296,1376,-296,1386,-296,1395,-296,1404,-296,1413,-296,1423,-296,1432,-296,1441,-296,1450,-296,1459,-296,1469,-296,1478,-296,1487,-296,1496,-296,1505,-296,1515,-296,1524,-296,1533,-288,-708,-288,-699,-288,-690,-288,-681,-288,-672,-288,-662,-288,-653,-288,-644,-288,-635,-288,-626,-288,-617,-288,-608,-288,-598,-288,-589,-288,-580,-288,-571,-288,-562,-288,-553,-288,-544,-288,-535,-288,-525,-288,-516,-288,-507,-288,-498,-288,169,-288,178,-288,187,-288,196,-288,206,-288,215,-288,224,-288,233,-288,242,-288,251,-288,260,-288,270,-288,279,-288,288,-288,297,-288,306,-288,315,-288,1147,-288,1156,-288,1165,-288,1174,-288,1183,-288,1192,-288,1202,-288,1211,-288,1220,-288,1229,-288,1238,-288,1247,-288,1256,-288,1265,-288,1275,-288,1284,-288,1293,-288,1302,-288,1311,-288,1320,-288,1329,-288,1339,-288,1348,-288,1357,-288,1366,-288,1375,-288,1384,-288,1393,-288,1403,-288,1412,-288,1421,-288,1430,-288,1439,-288,1448,-288,1457,-288,1466,-288,1476,-288,1485,-288,1494,-288,1503,-288,1512,-288,1521,-288,1530,-280,-703,-280,-694,-280,-685,-280,-676,-280,-666,-280,-657,-280,-648,-280,-639,-280,-630,-280,-621,-280,-612,-280,-603,-280,-594,-280,-585,-280,-576,-280,-567,-280,-558,-280,-549,-280,-540,-280,-530,-280,-521,-280,-512,-280,-503,-280,-494,-280,159,-280,168,-280,177,-280,186,-280,195,-280,204,-280,213,-280,222,-280,231,-280,240,-280,249,-280,258,-280,268,-280,277,-280,286,-280,295,-280,304,-280,313,-280,322,-280,1147,-280,1156,-280,1165,-280,1174,-280,1183,-280,1192,-280,1202,-280,1211,-280,1220,-280,1229,-280,1238,-280,1247,-280,1256,-280,1265,-280,1274,-280,1283,-280,1292,-280,1301,-280,1310,-280,1319,-280,1328,-280,1338,-280,1347,-280,1356,-280,1365,-280,1374,-280,1383,-280,1392,-280,1401,-280,1410,-280,1419,-280,1428,-280,1437,-280,1446,-280,1455,-280,1464,-280,1474,-280,1483,-280,1492,-280,1501,-280,1510,-280,1519,-280,1528,-272,-706,-272,-697,-272,-688,-272,-679,-272,-671,-272,-661,-272,-653,-272,-644,-272,-634,-272,-626,-272,-616,-272,-607,-272,-599,-272,-589,-272,-580,-272,-571,-272,-562,-272,-553,-272,-544,-272,-535,-272,-526,-272,-517,-272,-508,-272,-499,-272,-490,-272,157,-272,167,-272,175,-272,185,-272,193,-272,203,-272,211,-272,221,-272,229,-272,239,-272,248,-272,257,-272,265,-272,275,-272,283,-272,293,-272,302,-272,311,-272,319,-272,1148,-272,1157,-272,1166,-272,1175,-272,1184,-272,1193,-272,1201,-272,1211,-272,1220,-272,1229,-272,1238,-272,1246,-272,1256,-272,1265,-272,1274,-272,1283,-272,1291,-272,1301,-272,1310,-272,1318,-272,1328,-272,1336,-272,1346,-272,1355,-272,1364,-272,1373,-272,1382,-272,1391,-272,1400,-272,1409,-272,1418,-272,1426,-272,1436,-272,1445,-272,1454,-272,1463,-272,1471,-272,1481,-272,1490,-272,1499,-272,1508,-272,1516,-272,1526,-264,-701,-264,-692,-264,-683,-264,-674,-264,-666,-264,-657,-264,-648,-264,-639,-264,-630,-264,-621,-264,-612,-264,-603,-264,-594,-264,-585,-264,-576,-264,-567,-264,-558,-264,-549,-264,-540,-264,-532,-264,-523,-264,-514,-264,-505,-264,-496,-264,-487,-264,156,-264,165,-264,174,-264,183,-264,192,-264,201,-264,210,-264,219,-264,228,-264,237,-264,246,-264,255,-264,264,-264,272,-264,281,-264,290,-264,299,-264,308,-264,317,-264,326,-264,1139,-264,1148,-264,1157,-264,1166,-264,1175,-264,1184,-264,1193,-264,1201,-264,1210,-264,1219,-264,1228,-264,1237,-264,1246,-264,1255,-264,1264,-264,1273,-264,1282,-264,1291,-264,1300,-264,1309,-264,1318,-264,1327,-264,1335,-264,1344,-264,1353,-264,1362,-264,1371,-264,1380,-264,1389,-264,1398,-264,1407,-264,1416,-264,1425,-264,1434,-264,1443,-264,1452,-264,1461,-264,1469,-264,1478,-264,1487,-264,1496,-264,1505,-264,1514,-264,1523,-256,-705,-256,-696,-256,-687,-256,-678,-256,-669,-256,-661,-256,-652,-256,-643,-256,-634,-256,-625,-256,-616,-256,-607,-256,-599,-256,-590,-256,-581,-256,-572,-256,-563,-256,-554,-256,-545,-256,-536,-256,-528,-256,-519,-256,-510,-256,-501,-256,-492,-256,155,-256,164,-256,173,-256,182,-256,191,-256,200,-256,208,-256,217,-256,226,-256,235,-256,244,-256,253,-256,262,-256,270,-256,279,-256,288,-256,297,-256,306,-256,315,-256,324,-256,1148,-256,1157,-256,1166,-256,1175,-256,1184,-256,1193,-256,1201,-256,1210,-256,1219,-256,1228,-256,1237,-256,1246,-256,1255,-256,1264,-256,1272,-256,1281,-256,1290,-256,1299,-256,1308,-256,1317,-256,1326,-256,1334,-256,1343,-256,1352,-256,1361,-256,1370,-256,1379,-256,1388,-256,1397,-256,1405,-256,1414,-256,1423,-256,1432,-256,1441,-256,1450,-256,1459,-256,1467,-256,1476,-256,1485,-256,1494,-256,1503,-256,1512,-256,1521,-248,-697,-248,-688,-248,-679,-248,-671,-248,-662,-248,-653,-248,-644,-248,-635,-248,-626,-248,-618,-248,-609,-248,-600,-248,-591,-248,-582,-248,-574,-248,-565,-248,-556,-248,-547,-248,-538,-248,-529,-248,-521,-248,-512,-248,-503,-248,-494,-248,-485,-248,-476,-248,150,-248,159,-248,168,-248,176,-248,185,-248,194,-248,203,-248,212,-248,221,-248,229,-248,238,-248,247,-248,256,-248,265,-248,274,-248,282,-248,291,-248,300,-248,309,-248,318,-248,326,-248,335,-248,344,-248,441,-248,450,-248,459,-248,468,-248,1138,-248,1147,-248,1156,-248,1165,-248,1174,-248,1182,-248,1191,-248,1200,-248,1209,-248,1218,-248,1226,-248,1235,-248,1244,-248,1253,-248,1262,-248,1271,-248,1279,-248,1288,-248,1297,-248,1306,-248,1315,-248,1324,-248,1332,-248,1341,-248,1350,-248,1359,-248,1368,-248,1376,-248,1385,-248,1394,-248,1403,-248,1412,-248,1421,-248,1429,-248,1438,-248,1447,-248,1456,-248,1465,-248,1474,-248,1482,-248,1491,-248,1500,-248,1509,-248,1518,-240,-701,-240,-692,-240,-683,-240,-674,-240,-666,-240,-657,-240,-648,-240,-639,-240,-631,-240,-622,-240,-613,-240,-604,-240,-596,-240,-587,-240,-578,-240,-569,-240,-561,-240,-552,-240,-543,-240,-534,-240,-526,-240,-517,-240,-508,-240,-499,-240,-491,-240,-482,-240,-473,-240,-464,-240,149,-240,158,-240,166,-240,175,-240,184,-240,193,-240,201,-240,210,-240,219,-240,228,-240,236,-240,245,-240,254,-240,263,-240,272,-240,280,-240,289,-240,298,-240,307,-240,315,-240,324,-240,333,-240,342,-240,350,-240,438,-240,447,-240,455,-240,464,-240,473,-240,1139,-240,1147,-240,1156,-240,1165,-240,1174,-240,1182,-240,1191,-240,1200,-240,1209,-240,1218,-240,1226,-240,1235,-240,1244,-240,1253,-240,1261,-240,1270,-240,1279,-240,1288,-240,1296,-240,1305,-240,1314,-240,1323,-240,1331,-240,1340,-240,1349,-240,1358,-240,1366,-240,1375,-240,1384,-240,1393,-240,1401,-240,1410,-240,1419,-240,1428,-240,1436,-240,1445,-240,1454,-240,1463,-240,1472,-240,1480,-240,1489,-240,1498,-240,1507,-232,-704,-232,-696,-232,-687,-232,-678,-232,-670,-232,-661,-232,-652,-232,-643,-232,-635,-232,-626,-232,-617,-232,-609,-232,-600,-232,-591,-232,-583,-232,-574,-232,-565,-232,-557,-232,-548,-232,-539,-232,-530,-232,-522,-232,-513,-232,-504,-232,-496,-232,-487,-232,-478,-232,-470,-232,-461,-232,-452,-232,148,-232,157,-232,165,-232,174,-232,183,-232,191,-232,200,-232,209,-232,217,-232,226,-232,235,-232,243,-232,252,-232,261,-232,270,-232,278,-232,287,-232,296,-232,304,-232,313,-232,322,-232,330,-232,339,-232,348,-232,443,-232,452,-232,461,-232,470,-232,1139,-232,1148,-232,1157,-232,1165,-232,1174,-232,1183,-232,1191,-232,1200,-232,1209,-232,1217,-232,1226,-232,1235,-232,1243,-232,1252,-232,1261,-232,1270,-232,1278,-232,1287,-232,1296,-232,1304,-232,1313,-232,1322,-232,1330,-232,1339,-232,1348,-232,1357,-232,1365,-232,1374,-232,1383,-232,1391,-232,1400,-232,1409,-232,1417,-232,1426,-232,1435,-232,1443,-232,1452,-232,1461,-232,1470,-232,1478,-232,1487,-232,1496,-232,1504,-224,-697,-224,-688,-224,-679,-224,-671,-224,-662,-224,-653,-224,-645,-224,-636,-224,-627,-224,-619,-224,-610,-224,-601,-224,-593,-224,-584,-224,-575,-224,-567,-224,-558,-224,-550,-224,-541,-224,-532,-224,-524,-224,-515,-224,-506,-224,-498,-224,-489,-224,-480,-224,-472,-224,-463,-224,-454,-224,-446,-224,-437,-224,-428,-224,-420,-224,151,-224,160,-224,169,-224,177,-224,186,-224,195,-224,203,-224,212,-224,221,-224,229,-224,238,-224,247,-224,255,-224,264,-224,273,-224,281,-224,290,-224,299,-224,307,-224,316,-224,325,-224,333,-224,342,-224,350,-224,437,-224,446,-224,454,-224,463,-224,472,-224,1138,-224,1147,-224,1155,-224,1164,-224,1173,-224,1181,-224,1190,-224,1199,-224,1207,-224,1216,-224,1225,-224,1233,-224,1242,-224,1250,-224,1259,-224,1268,-224,1276,-224,1285,-224,1294,-224,1302,-224,1311,-224,1320,-224,1328,-224,1337,-224,1346,-224,1354,-224,1363,-224,1372,-224,1380,-224,1389,-224,1398,-224,1406,-224,1415,-224,1424,-224,1432,-224,1441,-224,1450,-224,1458,-224,1467,-224,1475,-224,1484,-224,1493,-224,1501,-216,-698,-216,-689,-216,-680,-216,-672,-216,-663,-216,-655,-216,-646,-216,-637,-216,-629,-216,-620,-216,-611,-216,-603,-216,-594,-216,-586,-216,-577,-216,-568,-216,-560,-216,-551,-216,-543,-216,-534,-216,-525,-216,-517,-216,-508,-216,-500,-216,-491,-216,-482,-216,-474,-216,-465,-216,-456,-216,-448,-216,-439,-216,-431,-216,-422,-216,-413,-216,146,-216,155,-216,164,-216,172,-216,181,-216,189,-216,198,-216,207,-216,215,-216,224,-216,233,-216,241,-216,250,-216,258,-216,267,-216,276,-216,284,-216,293,-216,301,-216,310,-216,319,-216,327,-216,336,-216,344,-216,439,-216,448,-216,456,-216,465,-216,474,-216,482,-216,1154,-216,1163,-216,1171,-216,1180,-216,1189,-216,1197,-216,1206,-216,1214,-216,1223,-216,1232,-216,1240,-216,1249,-216,1257,-216,1266,-216,1275,-216,1283,-216,1292,-216,1300,-216,1309,-216,1318,-216,1326,-216,1335,-216,1344,-216,1352,-216,1361,-216,1369,-216,1378,-216,1387,-216,1395,-216,1404,-216,1412,-216,1421,-216,1430,-216,1438,-216,1447,-216,1456,-216,1464,-216,1473,-216,1481,-216,1490,-216,1662,-216,1679,-208,-1385,-208,-701,-208,-693,-208,-684,-208,-676,-208,-667,-208,-658,-208,-650,-208,-641,-208,-633,-208,-624,-208,-616,-208,-607,-208,-599,-208,-590,-208,-581,-208,-573,-208,-564,-208,-556,-208,-547,-208,-539,-208,-530,-208,-522,-208,-513,-208,-505,-208,-496,-208,-487,-208,-479,-208,-470,-208,-462,-208,-453,-208,-445,-208,-436,-208,-428,-208,-419,-208,-410,-208,137,-208,145,-208,154,-208,162,-208,171,-208,180,-208,188,-208,197,-208,205,-208,214,-208,222,-208,231,-208,239,-208,248,-208,257,-208,265,-208,274,-208,282,-208,291,-208,299,-208,308,-208,316,-208,325,-208,333,-208,342,-208,445,-208,453,-208,462,-208,470,-208,479,-208,1171,-208,1180,-208,1189,-208,1197,-208,1206,-208,1214,-208,1223,-208,1231,-208,1240,-208,1248,-208,1257,-208,1266,-208,1274,-208,1283,-208,1291,-208,1300,-208,1308,-208,1317,-208,1325,-208,1334,-208,1343,-208,1351,-208,1360,-208,1368,-208,1377,-208,1385,-208,1394,-208,1402,-208,1411,-208,1419,-208,1428,-208,1437,-208,1445,-208,1454,-208,1462,-208,1471,-208,1479,-208,1488,-208,1650,-200,-694,-200,-685,-200,-677,-200,-668,-200,-660,-200,-651,-200,-643,-200,-634,-200,-626,-200,-617,-200,-609,-200,-600,-200,-591,-200,-583,-200,-574,-200,-566,-200,-557,-200,-549,-200,-540,-200,-532,-200,-523,-200,-515,-200,-506,-200,-498,-200,-489,-200,-481,-200,-472,-200,-464,-200,-455,-200,-447,-200,-438,-200,-430,-200,-421,-200,-413,-200,-404,-200,132,-200,140,-200,149,-200,157,-200,166,-200,174,-200,183,-200,191,-200,200,-200,209,-200,217,-200,226,-200,234,-200,243,-200,251,-200,260,-200,268,-200,277,-200,285,-200,294,-200,302,-200,311,-200,319,-200,328,-200,336,-200,345,-200,447,-200,455,-200,464,-200,472,-200,481,-200,1204,-200,1213,-200,1221,-200,1230,-200,1238,-200,1247,-200,1255,-200,1264,-200,1272,-200,1281,-200,1289,-200,1298,-200,1306,-200,1315,-200,1323,-200,1332,-200,1340,-200,1349,-200,1357,-200,1366,-200,1374,-200,1383,-200,1391,-200,1400,-200,1409,-200,1417,-200,1426,-200,1434,-200,1443,-200,1451,-200,1460,-200,1468,-200,1477,-192,-695,-192,-686,-192,-678,-192,-669,-192,-661,-192,-652,-192,-644,-192,-635,-192,-627,-192,-618,-192,-610,-192,-601,-192,-593,-192,-584,-192,-576,-192,-568,-192,-559,-192,-551,-192,-542,-192,-534,-192,-525,-192,-517,-192,-508,-192,-500,-192,-491,-192,-483,-192,-474,-192,-466,-192,-457,-192,-449,-192,-440,-192,-432,-192,-424,-192,-415,-192,-407,-192,-398,-192,127,-192,136,-192,144,-192,152,-192,161,-192,169,-192,178,-192,186,-192,195,-192,203,-192,212,-192,220,-192,229,-192,237,-192,246,-192,254,-192,263,-192,271,-192,280,-192,288,-192,296,-192,305,-192,313,-192,322,-192,330,-192,339,-192,347,-192,356,-192,449,-192,457,-192,466,-192,474,-192,483,-192,1220,-192,1228,-192,1237,-192,1245,-192,1254,-192,1262,-192,1271,-192,1279,-192,1288,-192,1296,-192,1304,-192,1313,-192,1321,-192,1330,-192,1338,-192,1347,-192,1355,-192,1364,-192,1372,-192,1381,-192,1389,-192,1398,-192,1406,-192,1415,-192,1423,-192,1432,-192,1440,-192,1448,-192,1457,-192,1465,-184,-696,-184,-687,-184,-679,-184,-670,-184,-662,-184,-653,-184,-645,-184,-637,-184,-628,-184,-620,-184,-611,-184,-603,-184,-594,-184,-586,-184,-578,-184,-569,-184,-561,-184,-552,-184,-544,-184,-535,-184,-527,-184,-519,-184,-510,-184,-502,-184,-493,-184,-485,-184,-476,-184,-468,-184,-459,-184,-451,-184,-443,-184,-434,-184,-426,-184,-417,-184,-409,-184,-400,-184,122,-184,131,-184,139,-184,148,-184,156,-184,164,-184,173,-184,181,-184,190,-184,198,-184,207,-184,215,-184,223,-184,232,-184,240,-184,249,-184,257,-184,266,-184,274,-184,282,-184,291,-184,299,-184,308,-184,316,-184,325,-184,333,-184,341,-184,350,-184,358,-184,443,-184,451,-184,459,-184,468,-184,476,-184,485,-184,493,-184,1227,-184,1235,-184,1244,-184,1252,-184,1260,-184,1269,-184,1277,-184,1286,-184,1294,-184,1303,-184,1311,-184,1319,-184,1328,-184,1336,-184,1345,-184,1353,-184,1362,-184,1370,-184,1378,-184,1387,-184,1395,-184,1404,-184,1412,-184,1421,-184,1429,-184,1437,-184,1446,-184,1454,-184,1463,-176,-1494,-176,-713,-176,-705,-176,-697,-176,-688,-176,-680,-176,-671,-176,-663,-176,-655,-176,-646,-176,-638,-176,-629,-176,-621,-176,-613,-176,-604,-176,-596,-176,-587,-176,-579,-176,-571,-176,-562,-176,-554,-176,-545,-176,-537,-176,-529,-176,-520,-176,-512,-176,-503,-176,-495,-176,-487,-176,-478,-176,-470,-176,-462,-176,-453,-176,-445,-176,-436,-176,-428,-176,-420,-176,-411,-176,-403,-176,-394,-176,117,-176,126,-176,134,-176,143,-176,151,-176,159,-176,168,-176,176,-176,185,-176,193,-176,201,-176,210,-176,218,-176,227,-176,235,-176,243,-176,252,-176,260,-176,269,-176,277,-176,285,-176,294,-176,302,-176,310,-176,319,-176,327,-176,336,-176,344,-176,352,-176,361,-176,369,-176,445,-176,453,-176,462,-176,470,-176,478,-176,487,-176,1225,-176,1234,-176,1242,-176,1250,-176,1259,-176,1267,-176,1276,-176,1284,-176,1292,-176,1301,-176,1309,-176,1317,-176,1326,-176,1334,-176,1343,-176,1351,-176,1359,-176,1368,-176,1376,-176,1385,-176,1393,-176,1410,-176,1418,-176,1427,-176,1435,-176,1443,-176,1452,-176,1460,-176,1779,-168,-723,-168,-714,-168,-706,-168,-697,-168,-689,-168,-681,-168,-672,-168,-664,-168,-656,-168,-647,-168,-639,-168,-631,-168,-622,-168,-614,-168,-606,-168,-597,-168,-589,-168,-581,-168,-572,-168,-564,-168,-555,-168,-547,-168,-539,-168,-530,-168,-522,-168,-514,-168,-505,-168,-497,-168,-489,-168,-480,-168,-472,-168,-464,-168,-455,-168,-447,-168,-439,-168,-430,-168,-422,-168,-413,-168,-405,-168,-397,-168,121,-168,129,-168,138,-168,146,-168,155,-168,163,-168,171,-168,180,-168,188,-168,196,-168,205,-168,213,-168,221,-168,230,-168,238,-168,246,-168,255,-168,263,-168,271,-168,280,-168,288,-168,297,-168,305,-168,313,-168,322,-168,330,-168,338,-168,347,-168,355,-168,363,-168,372,-168,380,-168,388,-168,447,-168,455,-168,464,-168,472,-168,480,-168,489,-168,497,-168,1240,-168,1249,-168,1257,-168,1265,-168,1274,-168,1282,-168,1290,-168,1299,-168,1307,-168,1316,-168,1324,-168,1332,-168,1341,-168,1349,-168,1357,-168,1366,-168,1374,-168,1382,-168,1416,-168,1424,-168,1432,-168,1441,-168,1449,-160,-740,-160,-732,-160,-723,-160,-715,-160,-707,-160,-698,-160,-690,-160,-682,-160,-673,-160,-665,-160,-657,-160,-648,-160,-640,-160,-632,-160,-624,-160,-615,-160,-607,-160,-599,-160,-590,-160,-582,-160,-574,-160,-565,-160,-557,-160,-549,-160,-540,-160,-532,-160,-524,-160,-515,-160,-507,-160,-499,-160,-491,-160,-482,-160,-474,-160,-466,-160,-457,-160,-449,-160,-441,-160,-432,-160,-424,-160,-416,-160,-407,-160,-399,-160,-391,-160,125,-160,133,-160,141,-160,150,-160,158,-160,166,-160,175,-160,183,-160,191,-160,200,-160,208,-160,216,-160,224,-160,233,-160,241,-160,249,-160,258,-160,266,-160,274,-160,283,-160,291,-160,299,-160,308,-160,316,-160,324,-160,333,-160,341,-160,349,-160,358,-160,366,-160,374,-160,382,-160,391,-160,399,-160,457,-160,466,-160,474,-160,482,-160,491,-160,1247,-160,1255,-160,1264,-160,1272,-160,1280,-160,1289,-160,1297,-160,1305,-160,1314,-160,1322,-160,1330,-160,1339,-160,1347,-160,1355,-160,1364,-160,1372,-160,1422,-160,1430,-160,1438,-160,1447,-152,-747,-152,-738,-152,-730,-152,-722,-152,-713,-152,-705,-152,-697,-152,-688,-152,-680,-152,-672,-152,-664,-152,-655,-152,-647,-152,-639,-152,-630,-152,-622,-152,-614,-152,-606,-152,-597,-152,-589,-152,-581,-152,-572,-152,-564,-152,-556,-152,-547,-152,-539,-152,-531,-152,-523,-152,-514,-152,-506,-152,-498,-152,-489,-152,-481,-152,-473,-152,-465,-152,-456,-152,-448,-152,-440,-152,-431,-152,-423,-152,-415,-152,-406,-152,-398,-152,124,-152,133,-152,141,-152,149,-152,158,-152,166,-152,174,-152,182,-152,191,-152,199,-152,207,-152,216,-152,224,-152,232,-152,241,-152,249,-152,257,-152,265,-152,274,-152,282,-152,290,-152,299,-152,307,-152,315,-152,324,-152,332,-152,340,-152,348,-152,357,-152,365,-152,373,-152,382,-152,390,-152,398,-152,406,-152,473,-152,481,-152,489,-152,498,-152,1253,-152,1261,-152,1269,-152,1277,-152,1286,-152,1294,-152,1302,-152,1311,-152,1319,-152,1327,-152,1335,-152,1344,-152,1352,-152,1418,-152,1427,-152,1435,-152,1443,-152,1452,-152,1667,-144,-756,-144,-747,-144,-739,-144,-731,-144,-722,-144,-714,-144,-706,-144,-698,-144,-689,-144,-681,-144,-673,-144,-665,-144,-656,-144,-648,-144,-640,-144,-632,-144,-623,-144,-615,-144,-607,-144,-599,-144,-590,-144,-582,-144,-574,-144,-566,-144,-557,-144,-549,-144,-541,-144,-533,-144,-524,-144,-516,-144,-508,-144,-500,-144,-491,-144,-483,-144,-475,-144,-467,-144,-458,-144,-450,-144,-442,-144,-433,-144,-425,-144,-417,-144,-409,-144,-400,-144,-392,-144,128,-144,136,-144,144,-144,153,-144,161,-144,169,-144,178,-144,186,-144,194,-144,202,-144,211,-144,219,-144,227,-144,235,-144,244,-144,252,-144,260,-144,268,-144,277,-144,285,-144,293,-144,301,-144,310,-144,318,-144,326,-144,334,-144,343,-144,351,-144,359,-144,367,-144,376,-144,384,-144,392,-144,400,-144,483,-144,491,-144,500,-144,1267,-144,1276,-144,1300,-144,1309,-144,1317,-144,1325,-144,1333,-144,1342,-144,1350,-144,1416,-144,1424,-144,1433,-136,-1726,-136,-762,-136,-754,-136,-746,-136,-737,-136,-729,-136,-721,-136,-713,-136,-704,-136,-696,-136,-688,-136,-680,-136,-671,-136,-663,-136,-655,-136,-647,-136,-638,-136,-630,-136,-622,-136,-614,-136,-605,-136,-597,-136,-589,-136,-581,-136,-573,-136,-564,-136,-556,-136,-548,-136,-540,-136,-531,-136,-523,-136,-515,-136,-507,-136,-498,-136,-490,-136,-482,-136,-474,-136,-465,-136,-457,-136,-449,-136,-441,-136,-432,-136,-424,-136,-416,-136,-408,-136,-400,-136,-391,-136,128,-136,136,-136,144,-136,152,-136,161,-136,169,-136,177,-136,185,-136,194,-136,202,-136,210,-136,218,-136,227,-136,235,-136,243,-136,251,-136,259,-136,268,-136,276,-136,284,-136,292,-136,301,-136,309,-136,317,-136,325,-136,334,-136,342,-136,350,-136,358,-136,367,-136,375,-136,383,-136,391,-136,400,-136,490,-136,498,-136,1306,-136,1314,-136,1322,-136,1330,-136,1339,-136,1347,-136,1355,-136,1421,-136,1429,-128,-763,-128,-754,-128,-746,-128,-738,-128,-730,-128,-722,-128,-713,-128,-705,-128,-697,-128,-689,-128,-681,-128,-672,-128,-664,-128,-656,-128,-648,-128,-640,-128,-631,-128,-623,-128,-615,-128,-607,-128,-599,-128,-590,-128,-582,-128,-574,-128,-566,-128,-558,-128,-549,-128,-541,-128,-533,-128,-525,-128,-517,-128,-508,-128,-500,-128,-492,-128,-484,-128,-476,-128,-467,-128,-459,-128,-451,-128,-443,-128,-435,-128,-426,-128,-418,-128,-410,-128,-402,-128,-394,-128,131,-128,139,-128,148,-128,156,-128,164,-128,172,-128,180,-128,189,-128,197,-128,205,-128,213,-128,221,-128,230,-128,238,-128,246,-128,254,-128,262,-128,271,-128,279,-128,287,-128,295,-128,303,-128,312,-128,320,-128,328,-128,336,-128,344,-128,353,-128,361,-128,369,-128,377,-128,385,-128,394,-128,402,-128,451,-128,492,-128,1304,-128,1312,-128,1320,-128,1328,-128,1337,-128,1345,-128,1353,-128,1361,-128,1419,-128,1427,-120,-769,-120,-761,-120,-753,-120,-745,-120,-736,-120,-728,-120,-720,-120,-712,-120,-704,-120,-695,-120,-687,-120,-679,-120,-671,-120,-663,-120,-655,-120,-646,-120,-638,-120,-630,-120,-622,-120,-614,-120,-605,-120,-597,-120,-589,-120,-581,-120,-573,-120,-565,-120,-556,-120,-548,-120,-540,-120,-532,-120,-524,-120,-515,-120,-507,-120,-499,-120,-491,-120,-483,-120,-475,-120,-466,-120,-458,-120,-450,-120,-442,-120,-434,-120,-425,-120,-417,-120,-409,-120,-401,-120,-393,-120,-385,-120,139,-120,147,-120,155,-120,164,-120,172,-120,180,-120,188,-120,196,-120,205,-120,213,-120,221,-120,229,-120,237,-120,245,-120,254,-120,262,-120,270,-120,278,-120,286,-120,295,-120,303,-120,311,-120,319,-120,327,-120,335,-120,344,-120,352,-120,360,-120,368,-120,376,-120,385,-120,393,-120,401,-120,1334,-120,1342,-120,1358,-120,1424,-112,-776,-112,-767,-112,-759,-112,-751,-112,-743,-112,-735,-112,-727,-112,-718,-112,-710,-112,-702,-112,-694,-112,-686,-112,-678,-112,-669,-112,-661,-112,-653,-112,-645,-112,-637,-112,-629,-112,-620,-112,-612,-112,-604,-112,-596,-112,-588,-112,-580,-112,-571,-112,-563,-112,-555,-112,-547,-112,-539,-112,-531,-112,-522,-112,-514,-112,-506,-112,-498,-112,-490,-112,-482,-112,-473,-112,-465,-112,-457,-112,-449,-112,-441,-112,-433,-112,-424,-112,-416,-112,-408,-112,-400,-112,-392,-112,-384,-112,-376,-112,139,-112,147,-112,155,-112,163,-112,171,-112,180,-112,188,-112,196,-112,204,-112,212,-112,220,-112,229,-112,237,-112,245,-112,253,-112,261,-112,269,-112,278,-112,286,-112,294,-112,302,-112,310,-112,318,-112,327,-112,335,-112,343,-112,351,-112,359,-112,367,-112,376,-112,384,-112,392,-112,400,-104,-776,-104,-768,-104,-760,-104,-752,-104,-744,-104,-735,-104,-727,-104,-719,-104,-711,-104,-703,-104,-695,-104,-687,-104,-679,-104,-670,-104,-662,-104,-654,-104,-646,-104,-638,-104,-630,-104,-622,-104,-614,-104,-605,-104,-597,-104,-589,-104,-581,-104,-573,-104,-565,-104,-557,-104,-549,-104,-540,-104,-532,-104,-524,-104,-516,-104,-508,-104,-500,-104,-492,-104,-484,-104,-475,-104,-467,-104,-459,-104,-451,-104,-443,-104,-435,-104,-427,-104,-419,-104,-410,-104,-402,-104,-394,-104,-386,-104,-378,-104,-370,-104,142,-104,150,-104,158,-104,167,-104,175,-104,183,-104,191,-104,199,-104,207,-104,215,-104,223,-104,232,-104,240,-104,248,-104,256,-104,264,-104,272,-104,280,-104,288,-104,297,-104,305,-104,313,-104,321,-104,329,-104,337,-104,345,-104,353,-104,362,-104,370,-104,378,-104,386,-104,394,-104,402,-104,1499,-96,-782,-96,-774,-96,-766,-96,-758,-96,-750,-96,-742,-96,-734,-96,-726,-96,-718,-96,-709,-96,-701,-96,-693,-96,-685,-96,-677,-96,-669,-96,-661,-96,-653,-96,-645,-96,-636,-96,-628,-96,-620,-96,-612,-96,-604,-96,-596,-96,-588,-96,-580,-96,-572,-96,-564,-96,-555,-96,-547,-96,-539,-96,-531,-96,-523,-96,-515,-96,-507,-96,-499,-96,-491,-96,-482,-96,-474,-96,-466,-96,-458,-96,-450,-96,-442,-96,-434,-96,-426,-96,-418,-96,-409,-96,-401,-96,-393,-96,-385,-96,-377,-96,-369,-96,-361,-96,134,-96,142,-96,150,-96,158,-96,166,-96,174,-96,182,-96,191,-96,199,-96,207,-96,215,-96,223,-96,231,-96,239,-96,247,-96,255,-96,264,-96,272,-96,280,-96,288,-96,296,-96,304,-96,312,-96,320,-96,328,-96,336,-96,345,-96,353,-96,361,-96,369,-96,377,-96,385,-96,393,-96,1196,-96,1245,-96,1480,-96,1488,-96,1496,-96,1601,-88,-781,-88,-773,-88,-764,-88,-756,-88,-748,-88,-740,-88,-732,-88,-724,-88,-716,-88,-708,-88,-700,-88,-692,-88,-684,-88,-676,-88,-667,-88,-659,-88,-651,-88,-643,-88,-635,-88,-627,-88,-619,-88,-611,-88,-603,-88,-595,-88,-587,-88,-578,-88,-570,-88,-562,-88,-554,-88,-546,-88,-538,-88,-530,-88,-522,-88,-514,-88,-506,-88,-498,-88,-489,-88,-481,-88,-473,-88,-465,-88,-457,-88,-449,-88,-441,-88,-433,-88,-425,-88,-417,-88,-409,-88,-400,-88,-392,-88,-384,-88,-376,-88,-368,-88,-360,-88,-352,-88,133,-88,142,-88,150,-88,158,-88,166,-88,174,-88,182,-88,190,-88,198,-88,206,-88,214,-88,222,-88,231,-88,239,-88,247,-88,255,-88,263,-88,271,-88,279,-88,287,-88,295,-88,303,-88,311,-88,320,-88,328,-88,336,-88,344,-88,352,-88,360,-88,368,-88,376,-88,384,-88,392,-88,1161,-88,1169,-88,1177,-88,1185,-88,1209,-88,1218,-88,1258,-88,1266,-88,1412,-88,1420,-88,1428,-88,1468,-88,1476,-88,1484,-80,-787,-80,-779,-80,-771,-80,-763,-80,-755,-80,-747,-80,-739,-80,-730,-80,-722,-80,-714,-80,-706,-80,-698,-80,-690,-80,-682,-80,-674,-80,-666,-80,-658,-80,-650,-80,-642,-80,-634,-80,-626,-80,-617,-80,-609,-80,-601,-80,-593,-80,-585,-80,-577,-80,-569,-80,-561,-80,-553,-80,-545,-80,-537,-80,-529,-80,-521,-80,-513,-80,-504,-80,-496,-80,-488,-80,-480,-80,-472,-80,-464,-80,-456,-80,-448,-80,-440,-80,-432,-80,-424,-80,-416,-80,-408,-80,-400,-80,-391,-80,-383,-80,-375,-80,-367,-80,-359,-80,-351,-80,133,-80,141,-80,149,-80,157,-80,165,-80,174,-80,182,-80,190,-80,198,-80,206,-80,214,-80,222,-80,230,-80,238,-80,246,-80,254,-80,262,-80,270,-80,278,-80,287,-80,295,-80,303,-80,311,-80,319,-80,327,-80,335,-80,343,-80,351,-80,359,-80,367,-80,375,-80,383,-80,391,-80,1110,-80,1118,-80,1126,-80,1134,-80,1142,-80,1384,-80,1392,-80,1400,-80,1409,-80,1417,-80,1425,-80,1433,-80,1465,-80,1473,-80,1570,-72,-791,-72,-783,-72,-775,-72,-767,-72,-759,-72,-751,-72,-743,-72,-735,-72,-726,-72,-718,-72,-710,-72,-702,-72,-694,-72,-686,-72,-678,-72,-670,-72,-662,-72,-654,-72,-646,-72,-638,-72,-630,-72,-622,-72,-613,-72,-605,-72,-597,-72,-589,-72,-581,-72,-573,-72,-565,-72,-557,-72,-549,-72,-541,-72,-533,-72,-525,-72,-517,-72,-509,-72,-500,-72,-492,-72,-484,-72,-476,-72,-468,-72,-460,-72,-452,-72,-444,-72,-436,-72,-428,-72,-420,-72,-412,-72,-404,-72,-396,-72,-387,-72,-379,-72,-371,-72,-363,-72,-355,-72,129,-72,137,-72,145,-72,153,-72,161,-72,170,-72,178,-72,186,-72,194,-72,202,-72,210,-72,218,-72,226,-72,234,-72,242,-72,250,-72,258,-72,266,-72,274,-72,283,-72,291,-72,299,-72,307,-72,315,-72,323,-72,331,-72,339,-72,347,-72,355,-72,363,-72,371,-72,379,-72,387,-72,1065,-72,1074,-72,1082,-72,1090,-72,1098,-72,1106,-72,1114,-72,1122,-72,1130,-72,1316,-72,1396,-72,1404,-72,1413,-72,1421,-72,1429,-72,1437,-72,1445,-72,1453,-72,1461,-72,1469,-64,-805,-64,-797,-64,-789,-64,-781,-64,-773,-64,-765,-64,-757,-64,-749,-64,-741,-64,-733,-64,-725,-64,-717,-64,-709,-64,-701,-64,-693,-64,-685,-64,-677,-64,-668,-64,-660,-64,-652,-64,-644,-64,-636,-64,-628,-64,-620,-64,-612,-64,-604,-64,-596,-64,-588,-64,-580,-64,-572,-64,-564,-64,-556,-64,-548,-64,-540,-64,-532,-64,-523,-64,-515,-64,-507,-64,-499,-64,-491,-64,-483,-64,-475,-64,-467,-64,-459,-64,-451,-64,-443,-64,-435,-64,-427,-64,-419,-64,-411,-64,-403,-64,-395,-64,-387,-64,-379,-64,-370,-64,-362,-64,-354,-64,129,-64,137,-64,145,-64,153,-64,161,-64,169,-64,177,-64,185,-64,193,-64,201,-64,209,-64,217,-64,226,-64,234,-64,242,-64,250,-64,258,-64,266,-64,274,-64,282,-64,290,-64,298,-64,306,-64,314,-64,322,-64,330,-64,338,-64,346,-64,354,-64,362,-64,370,-64,379,-64,387,-64,395,-64,1063,-64,1071,-64,1079,-64,1385,-64,1393,-64,1401,-64,1409,-64,1417,-64,1426,-64,1434,-64,1442,-64,1450,-64,1458,-64,1466,-64,1474,-64,1554,-56,-804,-56,-796,-56,-787,-56,-779,-56,-771,-56,-763,-56,-755,-56,-747,-56,-739,-56,-731,-56,-723,-56,-715,-56,-707,-56,-699,-56,-691,-56,-683,-56,-675,-56,-667,-56,-659,-56,-651,-56,-643,-56,-635,-56,-627,-56,-619,-56,-611,-56,-603,-56,-595,-56,-587,-56,-579,-56,-571,-56,-562,-56,-554,-56,-546,-56,-538,-56,-530,-56,-522,-56,-514,-56,-506,-56,-498,-56,-490,-56,-482,-56,-474,-56,-466,-56,-458,-56,-450,-56,-442,-56,-434,-56,-426,-56,-418,-56,-410,-56,-402,-56,-394,-56,-386,-56,-378,-56,-370,-56,-362,-56,-354,-56,129,-56,137,-56,145,-56,153,-56,161,-56,169,-56,177,-56,185,-56,193,-56,201,-56,209,-56,217,-56,225,-56,233,-56,241,-56,249,-56,257,-56,265,-56,273,-56,281,-56,289,-56,297,-56,305,-56,313,-56,321,-56,329,-56,338,-56,346,-56,354,-56,362,-56,370,-56,378,-56,386,-56,1045,-56,1053,-56,1197,-56,1382,-56,1390,-56,1398,-56,1406,-56,1414,-56,1422,-56,1430,-56,1438,-56,1446,-56,1454,-56,1463,-56,1479,-56,1487,-56,1495,-56,1503,-56,1511,-48,-808,-48,-800,-48,-792,-48,-783,-48,-775,-48,-767,-48,-759,-48,-751,-48,-743,-48,-735,-48,-727,-48,-719,-48,-711,-48,-703,-48,-695,-48,-687,-48,-679,-48,-671,-48,-663,-48,-655,-48,-647,-48,-639,-48,-631,-48,-623,-48,-615,-48,-607,-48,-599,-48,-591,-48,-583,-48,-575,-48,-567,-48,-558,-48,-550,-48,-542,-48,-534,-48,-526,-48,-518,-48,-510,-48,-502,-48,-494,-48,-486,-48,-478,-48,-470,-48,-462,-48,-454,-48,-446,-48,-438,-48,-430,-48,-422,-48,-414,-48,-406,-48,-398,-48,-390,-48,-382,-48,-374,-48,125,-48,133,-48,141,-48,149,-48,157,-48,165,-48,173,-48,181,-48,189,-48,197,-48,205,-48,213,-48,221,-48,229,-48,237,-48,245,-48,253,-48,261,-48,269,-48,277,-48,285,-48,293,-48,301,-48,309,-48,317,-48,325,-48,333,-48,342,-48,350,-48,358,-48,366,-48,374,-48,382,-48,390,-48,1041,-48,1049,-48,1057,-48,1201,-48,1217,-48,1225,-48,1370,-48,1378,-48,1386,-48,1394,-48,1402,-48,1410,-48,1418,-48,1426,-48,1434,-48,1442,-48,1450,-48,1523,-40,-806,-40,-798,-40,-790,-40,-782,-40,-774,-40,-766,-40,-758,-40,-750,-40,-742,-40,-734,-40,-726,-40,-718,-40,-710,-40,-702,-40,-694,-40,-686,-40,-678,-40,-669,-40,-661,-40,-653,-40,-645,-40,-637,-40,-629,-40,-621,-40,-613,-40,-605,-40,-597,-40,-589,-40,-581,-40,-573,-40,-565,-40,-557,-40,-549,-40,-541,-40,-533,-40,-525,-40,-517,-40,-509,-40,-501,-40,-493,-40,-485,-40,-477,-40,-469,-40,-461,-40,-453,-40,-445,-40,-437,-40,-429,-40,-421,-40,-413,-40,-405,-40,-397,-40,-389,-40,116,-40,124,-40,132,-40,140,-40,148,-40,156,-40,164,-40,172,-40,180,-40,188,-40,196,-40,204,-40,212,-40,220,-40,229,-40,237,-40,245,-40,253,-40,261,-40,269,-40,277,-40,285,-40,293,-40,301,-40,309,-40,317,-40,325,-40,333,-40,341,-40,349,-40,357,-40,365,-40,373,-40,381,-40,389,-40,397,-40,1030,-40,1038,-40,1046,-40,1054,-40,1151,-40,1199,-40,1223,-40,1231,-40,1351,-40,1359,-40,1367,-40,1375,-40,1383,-40,1391,-40,1399,-40,1407,-40,1415,-40,1423,-40,1431,-40,1439,-40,1527,-32,-794,-32,-786,-32,-778,-32,-770,-32,-762,-32,-754,-32,-746,-32,-738,-32,-730,-32,-722,-32,-714,-32,-706,-32,-698,-32,-690,-32,-682,-32,-673,-32,-665,-32,-657,-32,-649,-32,-641,-32,-633,-32,-625,-32,-617,-32,-609,-32,-601,-32,-593,-32,-585,-32,-577,-32,-569,-32,-561,-32,-553,-32,-545,-32,-537,-32,-529,-32,-521,-32,-513,-32,-505,-32,-497,-32,-489,-32,-481,-32,-473,-32,-465,-32,-457,-32,-449,-32,-441,-32,-433,-32,-425,-32,-417,-32,-409,-32,-401,-32,112,-32,120,-32,128,-32,136,-32,144,-32,152,-32,160,-32,168,-32,176,-32,184,-32,192,-32,200,-32,208,-32,216,-32,224,-32,233,-32,241,-32,249,-32,257,-32,265,-32,273,-32,281,-32,289,-32,297,-32,305,-32,313,-32,321,-32,329,-32,337,-32,345,-32,353,-32,361,-32,369,-32,377,-32,385,-32,393,-32,401,-32,1018,-32,1026,-32,1034,-32,1042,-32,1050,-32,1058,-32,1122,-32,1139,-32,1147,-32,1155,-32,1195,-32,1203,-32,1211,-32,1219,-32,1267,-32,1283,-32,1291,-32,1299,-32,1331,-32,1339,-32,1347,-32,1363,-32,1371,-32,1379,-32,1387,-32,1395,-32,1403,-32,1411,-32,1419,-24,-800,-24,-792,-24,-784,-24,-776,-24,-768,-24,-760,-24,-752,-24,-744,-24,-736,-24,-728,-24,-720,-24,-712,-24,-704,-24,-696,-24,-688,-24,-680,-24,-672,-24,-664,-24,-656,-24,-648,-24,-640,-24,-632,-24,-624,-24,-616,-24,-608,-24,-600,-24,-592,-24,-584,-24,-576,-24,-568,-24,-560,-24,-552,-24,-544,-24,-536,-24,-528,-24,-520,-24,-512,-24,-504,-24,-496,-24,-488,-24,-480,-24,-472,-24,-464,-24,-456,-24,-448,-24,-432,-24,104,-24,112,-24,120,-24,128,-24,136,-24,144,-24,152,-24,160,-24,168,-24,176,-24,184,-24,192,-24,200,-24,208,-24,216,-24,224,-24,232,-24,240,-24,248,-24,256,-24,264,-24,272,-24,280,-24,288,-24,296,-24,304,-24,312,-24,320,-24,328,-24,336,-24,344,-24,352,-24,360,-24,368,-24,376,-24,384,-24,392,-24,400,-24,408,-24,1016,-24,1024,-24,1032,-24,1040,-24,1104,-24,1112,-24,1120,-24,1128,-24,1136,-24,1144,-24,1152,-24,1160,-24,1192,-24,1200,-24,1208,-24,1216,-24,1368,-24,1376,-24,1384,-24,1392,-24,1400,-16,-804,-16,-796,-16,-788,-16,-780,-16,-772,-16,-764,-16,-756,-16,-748,-16,-740,-16,-732,-16,-724,-16,-716,-16,-708,-16,-700,-16,-692,-16,-684,-16,-676,-16,-668,-16,-660,-16,-652,-16,-644,-16,-636,-16,-628,-16,-620,-16,-612,-16,-604,-16,-596,-16,-588,-16,-580,-16,-572,-16,-564,-16,-556,-16,-548,-16,-540,-16,-532,-16,-524,-16,-516,-16,-508,-16,-500,-16,-484,-16,-476,-16,-468,-16,-460,-16,-452,-16,92,-16,100,-16,108,-16,116,-16,124,-16,132,-16,140,-16,148,-16,156,-16,164,-16,172,-16,180,-16,188,-16,196,-16,204,-16,212,-16,220,-16,228,-16,236,-16,244,-16,252,-16,260,-16,268,-16,276,-16,284,-16,292,-16,300,-16,308,-16,316,-16,324,-16,332,-16,340,-16,348,-16,356,-16,364,-16,372,-16,380,-16,388,-16,396,-16,404,-16,412,-16,1012,-16,1020,-16,1028,-16,1036,-16,1044,-16,1060,-16,1108,-16,1116,-16,1124,-16,1132,-16,1140,-16,1148,-16,1156,-16,1164,-16,1196,-16,1204,-16,1212,-16,1220,-16,1276,-16,1324,-16,1332,-16,1340,-16,1380,-8,-912,-8,-800,-8,-792,-8,-784,-8,-776,-8,-768,-8,-760,-8,-752,-8,-744,-8,-736,-8,-728,-8,-720,-8,-712,-8,-704,-8,-696,-8,-688,-8,-680,-8,-672,-8,-664,-8,-656,-8,-648,-8,-640,-8,-632,-8,-624,-8,-616,-8,-608,-8,-600,-8,-592,-8,-584,-8,-576,-8,-568,-8,-560,-8,-552,-8,-544,-8,-536,-8,-528,-8,-520,-8,-504,-8,-496,-8,-488,-8,-480,-8,-472,-8,88,-8,96,-8,104,-8,112,-8,120,-8,128,-8,136,-8,144,-8,152,-8,160,-8,168,-8,176,-8,184,-8,192,-8,200,-8,208,-8,216,-8,224,-8,232,-8,240,-8,248,-8,256,-8,264,-8,272,-8,280,-8,288,-8,296,-8,304,-8,312,-8,320,-8,328,-8,336,-8,344,-8,352,-8,360,-8,368,-8,376,-8,384,-8,392,-8,400,-8,408,-8,416,-8,1008,-8,1016,-8,1024,-8,1032,-8,1096,-8,1104,-8,1112,-8,1120,-8,1128,-8,1136,-8,1144,-8,1152,-8,1160,-8,1168,-8,1200,-8,1224,-8,1232,-8,1320,-8,1328,-8,1336,0,-796,0,-788,0,-780,0,-772,0,-764,0,-756,0,-748,0,-740,0,-732,0,-724,0,-716,0,-708,0,-700,0,-692,0,-684,0,-676,0,-668,0,-660,0,-652,0,-644,0,-636,0,-628,0,-620,0,-612,0,-604,0,-596,0,-588,0,-580,0,-572,0,-564,0,-556,0,-548,0,-540,0,-532,0,-524,0,-516,0,-500,0,100,0,108,0,116,0,124,0,132,0,140,0,148,0,156,0,164,0,172,0,180,0,188,0,196,0,204,0,212,0,220,0,228,0,236,0,244,0,252,0,260,0,268,0,276,0,284,0,292,0,300,0,308,0,316,0,324,0,332,0,340,0,348,0,356,0,364,0,372,0,380,0,388,0,396,0,404,0,412,0,420,0,428,0,1004,0,1012,0,1020,0,1028,0,1036,0,1100,0,1108,0,1116,0,1124,0,1132,0,1140,0,1148,0,1156,0,1164,0,1172,8,-800,8,-792,8,-784,8,-776,8,-768,8,-760,8,-752,8,-744,8,-736,8,-728,8,-720,8,-712,8,-704,8,-696,8,-688,8,-680,8,-672,8,-664,8,-656,8,-648,8,-640,8,-632,8,-624,8,-616,8,-608,8,-600,8,-592,8,-584,8,-576,8,-568,8,-560,8,-552,8,-544,8,-536,8,-528,8,-520,8,-512,8,-504,8,104,8,112,8,120,8,128,8,136,8,144,8,152,8,160,8,168,8,176,8,184,8,192,8,200,8,208,8,216,8,224,8,232,8,240,8,248,8,256,8,264,8,272,8,280,8,288,8,296,8,304,8,312,8,320,8,328,8,336,8,344,8,352,8,360,8,368,8,376,8,384,8,392,8,400,8,408,8,416,8,424,8,432,8,992,8,1000,8,1008,8,1016,8,1024,8,1096,8,1104,8,1112,8,1120,8,1128,8,1136,8,1144,8,1152,8,1160,8,1168,8,1176,8,1208,8,1216,8,1224,8,1232,8,1240,8,1280,16,-788,16,-780,16,-772,16,-764,16,-756,16,-748,16,-740,16,-732,16,-724,16,-716,16,-708,16,-700,16,-692,16,-684,16,-676,16,-668,16,-660,16,-652,16,-644,16,-636,16,-628,16,-620,16,-612,16,-604,16,-596,16,-588,16,-580,16,-572,16,-564,16,-556,16,-548,16,-540,16,-532,16,-524,16,-516,16,-508,16,-500,16,100,16,108,16,116,16,124,16,132,16,140,16,148,16,156,16,164,16,172,16,180,16,188,16,196,16,204,16,212,16,220,16,228,16,236,16,244,16,252,16,260,16,268,16,276,16,284,16,292,16,300,16,308,16,316,16,324,16,332,16,340,16,348,16,356,16,364,16,372,16,380,16,388,16,396,16,404,16,412,16,420,16,428,16,436,16,444,16,988,16,996,16,1004,16,1012,16,1036,16,1092,16,1100,16,1116,16,1124,16,1132,16,1140,16,1148,16,1156,16,1164,16,1172,16,1180,16,1276,24,-784,24,-776,24,-768,24,-760,24,-752,24,-744,24,-736,24,-728,24,-720,24,-712,24,-704,24,-696,24,-688,24,-680,24,-672,24,-664,24,-656,24,-648,24,-640,24,-632,24,-624,24,-616,24,-608,24,-600,24,-592,24,-584,24,-576,24,-568,24,-560,24,-552,24,-544,24,-536,24,-528,24,-520,24,-512,24,104,24,112,24,120,24,128,24,136,24,144,24,152,24,160,24,168,24,176,24,184,24,192,24,200,24,208,24,216,24,224,24,232,24,240,24,248,24,256,24,264,24,272,24,280,24,288,24,296,24,304,24,312,24,320,24,328,24,336,24,344,24,352,24,360,24,368,24,376,24,384,24,392,24,400,24,408,24,416,24,424,24,432,24,440,24,448,24,456,24,984,24,992,24,1000,24,1024,24,1032,24,1120,24,1128,24,1136,24,1144,24,1152,24,1160,24,1168,24,1176,32,-770,32,-762,32,-754,32,-746,32,-738,32,-730,32,-722,32,-714,32,-706,32,-698,32,-690,32,-682,32,-673,32,-665,32,-657,32,-649,32,-641,32,-633,32,-625,32,-617,32,-609,32,-601,32,-593,32,-585,32,-577,32,-569,32,-561,32,-553,32,-545,32,-537,32,-529,32,-521,32,-513,32,104,32,112,32,120,32,128,32,136,32,144,32,152,32,160,32,168,32,176,32,184,32,192,32,200,32,208,32,216,32,224,32,233,32,241,32,249,32,257,32,265,32,273,32,281,32,289,32,297,32,305,32,313,32,321,32,329,32,337,32,345,32,353,32,361,32,369,32,377,32,385,32,393,32,401,32,409,32,417,32,425,32,433,32,441,32,449,32,457,32,465,32,978,32,986,32,994,32,1018,32,1026,32,1034,32,1131,32,1139,32,1147,32,1155,32,1163,32,1171,40,-774,40,-766,40,-758,40,-750,40,-742,40,-734,40,-726,40,-718,40,-710,40,-702,40,-694,40,-686,40,-678,40,-669,40,-661,40,-653,40,-645,40,-637,40,-629,40,-621,40,-613,40,-605,40,-597,40,-589,40,-581,40,-573,40,-565,40,-557,40,-549,40,-541,40,-533,40,-525,40,-517,40,100,40,108,40,116,40,124,40,132,40,140,40,148,40,156,40,164,40,172,40,180,40,188,40,196,40,204,40,212,40,220,40,229,40,237,40,245,40,253,40,261,40,269,40,277,40,285,40,293,40,301,40,309,40,317,40,325,40,333,40,341,40,349,40,357,40,365,40,373,40,381,40,389,40,397,40,405,40,413,40,421,40,429,40,437,40,445,40,453,40,461,40,469,40,966,40,974,40,982,40,1014,40,1022,40,1030,40,1143,40,1151,40,1159,40,1167,40,1175,48,-767,48,-759,48,-751,48,-743,48,-735,48,-727,48,-719,48,-711,48,-703,48,-695,48,-687,48,-679,48,-671,48,-663,48,-655,48,-647,48,-639,48,-631,48,-623,48,-615,48,-607,48,-599,48,-591,48,-583,48,-575,48,-567,48,-558,48,-550,48,-542,48,-534,48,-526,48,-84,48,-76,48,-68,48,-20,48,60,48,68,48,76,48,84,48,92,48,100,48,108,48,117,48,125,48,133,48,141,48,149,48,157,48,165,48,173,48,181,48,189,48,197,48,205,48,213,48,221,48,229,48,237,48,245,48,253,48,261,48,269,48,277,48,285,48,293,48,301,48,309,48,317,48,325,48,333,48,342,48,350,48,358,48,366,48,374,48,382,48,390,48,398,48,406,48,414,48,422,48,430,48,438,48,446,48,454,48,462,48,470,48,478,48,960,48,968,48,976,48,1008,48,1017,48,1025,48,1033,48,1153,48,1161,48,1169,48,1177,56,-771,56,-763,56,-755,56,-747,56,-739,56,-731,56,-723,56,-715,56,-707,56,-699,56,-691,56,-683,56,-675,56,-667,56,-659,56,-651,56,-643,56,-635,56,-627,56,-619,56,-611,56,-603,56,-595,56,-587,56,-579,56,-571,56,-562,56,-554,56,-546,56,-538,56,-96,56,-88,56,-80,56,-72,56,-64,56,-56,56,-48,56,-40,56,-32,56,-24,56,-16,56,-8,56,56,56,64,56,72,56,80,56,88,56,96,56,104,56,113,56,121,56,129,56,137,56,145,56,153,56,161,56,169,56,177,56,185,56,193,56,201,56,209,56,217,56,225,56,233,56,241,56,249,56,257,56,265,56,273,56,281,56,289,56,297,56,305,56,313,56,321,56,329,56,338,56,346,56,354,56,362,56,370,56,378,56,386,56,394,56,402,56,410,56,418,56,426,56,434,56,442,56,450,56,458,56,466,56,474,56,482,56,956,56,1004,56,1013,56,1021,56,1165,56,1173,56,1181,64,-773,64,-765,64,-757,64,-749,64,-741,64,-733,64,-725,64,-717,64,-709,64,-701,64,-693,64,-685,64,-677,64,-668,64,-660,64,-652,64,-644,64,-636,64,-628,64,-620,64,-612,64,-604,64,-596,64,-588,64,-580,64,-105,64,-97,64,-89,64,-81,64,-72,64,-64,64,-56,64,-48,64,-40,64,-32,64,-24,64,-16,64,-8,64,0,64,8,64,16,64,24,64,32,64,48,64,56,64,64,64,72,64,81,64,89,64,97,64,105,64,113,64,121,64,129,64,137,64,145,64,153,64,161,64,169,64,177,64,185,64,193,64,201,64,209,64,217,64,226,64,234,64,242,64,250,64,258,64,266,64,274,64,282,64,290,64,298,64,306,64,314,64,322,64,330,64,338,64,346,64,354,64,362,64,370,64,379,64,387,64,395,64,403,64,411,64,419,64,427,64,435,64,443,64,451,64,459,64,467,64,475,64,483,64,805,64,813,64,999,64,1007,64,1015,64,1168,64,1176,64,1248,72,-775,72,-767,72,-759,72,-751,72,-743,72,-735,72,-726,72,-718,72,-710,72,-702,72,-694,72,-686,72,-678,72,-670,72,-662,72,-654,72,-646,72,-638,72,-630,72,-622,72,-613,72,-605,72,-597,72,-589,72,-113,72,-105,72,-97,72,-89,72,-81,72,-73,72,-65,72,-57,72,-48,72,-40,72,-32,72,-24,72,-16,72,-8,72,0,72,8,72,16,72,24,72,32,72,40,72,48,72,57,72,65,72,73,72,81,72,89,72,97,72,105,72,113,72,121,72,129,72,137,72,145,72,153,72,161,72,170,72,178,72,186,72,194,72,202,72,210,72,218,72,226,72,234,72,242,72,250,72,258,72,266,72,274,72,283,72,291,72,299,72,307,72,315,72,323,72,331,72,339,72,347,72,355,72,363,72,371,72,379,72,387,72,396,72,404,72,412,72,420,72,428,72,436,72,444,72,452,72,460,72,468,72,476,72,484,72,492,72,799,72,807,72,815,72,1001,72,1243,72,1251,72,1259,80,-811,80,-779,80,-771,80,-763,80,-755,80,-747,80,-739,80,-730,80,-722,80,-714,80,-706,80,-698,80,-690,80,-682,80,-674,80,-666,80,-658,80,-650,80,-642,80,-634,80,-626,80,-617,80,-609,80,-601,80,-593,80,-125,80,-117,80,-109,80,-101,80,-93,80,-85,80,-77,80,-69,80,-61,80,-52,80,-44,80,-36,80,-28,80,-20,80,-12,80,-4,80,4,80,12,80,20,80,28,80,36,80,44,80,52,80,61,80,69,80,77,80,85,80,93,80,101,80,109,80,117,80,125,80,133,80,141,80,149,80,157,80,165,80,174,80,182,80,190,80,198,80,206,80,214,80,222,80,230,80,238,80,246,80,254,80,262,80,270,80,278,80,287,80,295,80,303,80,311,80,319,80,327,80,335,80,343,80,351,80,359,80,367,80,375,80,383,80,391,80,400,80,408,80,416,80,424,80,432,80,440,80,448,80,456,80,464,80,472,80,480,80,488,80,496,80,803,80,811,80,997,80,1231,80,1239,80,1247,80,1255,80,1263,88,-829,88,-821,88,-805,88,-781,88,-764,88,-756,88,-748,88,-740,88,-732,88,-724,88,-716,88,-708,88,-700,88,-692,88,-684,88,-676,88,-667,88,-659,88,-651,88,-643,88,-635,88,-627,88,-619,88,-125,88,-117,88,-109,88,-101,88,-93,88,-85,88,-77,88,-69,88,-61,88,-53,88,-44,88,-36,88,-28,88,-20,88,-12,88,-4,88,4,88,12,88,20,88,28,88,36,88,44,88,53,88,61,88,69,88,77,88,85,88,93,88,101,88,109,88,117,88,125,88,133,88,142,88,150,88,158,88,166,88,174,88,182,88,190,88,198,88,206,88,214,88,222,88,231,88,239,88,247,88,255,88,263,88,271,88,279,88,287,88,295,88,303,88,311,88,320,88,328,88,336,88,344,88,352,88,360,88,368,88,376,88,384,88,392,88,400,88,409,88,417,88,425,88,433,88,441,88,449,88,457,88,465,88,473,88,481,88,489,88,498,88,773,88,781,88,805,88,983,88,991,88,999,88,1177,88,1250,88,1258,96,-839,96,-831,96,-750,96,-742,96,-734,96,-726,96,-709,96,-701,96,-693,96,-685,96,-677,96,-669,96,-661,96,-653,96,-645,96,-636,96,-628,96,-620,96,-134,96,-126,96,-118,96,-109,96,-101,96,-93,96,-85,96,-77,96,-69,96,-61,96,-53,96,-45,96,-36,96,-28,96,-20,96,-12,96,-4,96,4,96,12,96,20,96,28,96,36,96,45,96,53,96,61,96,69,96,77,96,85,96,93,96,101,96,109,96,118,96,126,96,134,96,142,96,150,96,158,96,166,96,174,96,182,96,191,96,199,96,207,96,215,96,223,96,231,96,239,96,247,96,255,96,264,96,272,96,280,96,288,96,296,96,304,96,312,96,320,96,328,96,336,96,345,96,353,96,361,96,369,96,377,96,385,96,393,96,401,96,409,96,418,96,426,96,434,96,442,96,450,96,458,96,466,96,474,96,482,96,491,96,499,96,507,96,766,96,774,96,782,96,985,96,1050,96,1058,96,1228,104,-857,104,-849,104,-841,104,-752,104,-744,104,-735,104,-727,104,-719,104,-711,104,-703,104,-695,104,-687,104,-679,104,-670,104,-662,104,-638,104,-630,104,-614,104,-142,104,-134,104,-126,104,-118,104,-110,104,-102,104,-93,104,-85,104,-77,104,-69,104,-61,104,-53,104,-45,104,-37,104,-28,104,-20,104,-12,104,-4,104,4,104,12,104,20,104,28,104,37,104,45,104,53,104,61,104,69,104,77,104,85,104,93,104,102,104,110,104,118,104,126,104,134,104,142,104,150,104,158,104,167,104,175,104,183,104,191,104,199,104,207,104,215,104,223,104,232,104,240,104,248,104,256,104,264,104,272,104,280,104,288,104,297,104,305,104,313,104,321,104,329,104,337,104,345,104,353,104,362,104,370,104,378,104,386,104,394,104,402,104,410,104,419,104,427,104,435,104,443,104,451,104,459,104,467,104,475,104,484,104,492,104,500,104,508,104,768,104,776,104,784,104,792,104,987,104,1052,104,1060,104,1231,104,1239,112,-857,112,-849,112,-841,112,-735,112,-727,112,-702,112,-694,112,-686,112,-147,112,-139,112,-131,112,-122,112,-114,112,-106,112,-98,112,-90,112,-82,112,-73,112,-65,112,-57,112,-49,112,-41,112,-33,112,-24,112,-16,112,-8,112,0,112,8,112,16,112,24,112,33,112,41,112,49,112,57,112,65,112,73,112,82,112,90,112,98,112,106,112,114,112,122,112,131,112,139,112,147,112,155,112,163,112,171,112,180,112,188,112,196,112,204,112,212,112,220,112,229,112,237,112,245,112,253,112,261,112,269,112,278,112,286,112,294,112,302,112,310,112,318,112,327,112,335,112,343,112,351,112,359,112,367,112,376,112,384,112,392,112,400,112,408,112,416,112,424,112,433,112,490,112,498,112,506,112,759,112,767,112,776,112,784,112,792,112,988,112,1037,112,1045,112,1053,112,1061,112,1069,112,1078,112,1086,112,1224,112,1249,120,-859,120,-851,120,-843,120,-720,120,-155,120,-147,120,-139,120,-131,120,-123,120,-115,120,-106,120,-98,120,-90,120,-82,120,-74,120,-65,120,-57,120,-49,120,-41,120,-33,120,-25,120,-16,120,-8,120,0,120,8,120,16,120,25,120,33,120,41,120,49,120,57,120,65,120,74,120,82,120,90,120,98,120,106,120,115,120,123,120,131,120,139,120,147,120,155,120,164,120,172,120,180,120,188,120,196,120,205,120,213,120,221,120,229,120,237,120,245,120,254,120,262,120,270,120,278,120,286,120,295,120,303,120,311,120,319,120,327,120,335,120,344,120,352,120,360,120,368,120,376,120,385,120,393,120,401,120,409,120,417,120,425,120,753,120,761,120,769,120,777,120,785,120,794,120,990,120,998,120,1031,120,1039,120,1047,120,1055,120,1064,120,1072,120,1080,120,1088,120,1252,128,-869,128,-861,128,-853,128,-845,128,-836,128,-164,128,-156,128,-148,128,-139,128,-131,128,-123,128,-115,128,-107,128,-98,128,-90,128,-82,128,-74,128,-66,128,-57,128,-49,128,-41,128,-33,128,-25,128,-16,128,-8,128,0,128,8,128,16,128,25,128,33,128,41,128,49,128,57,128,66,128,74,128,82,128,90,128,98,128,107,128,115,128,123,128,131,128,139,128,148,128,156,128,164,128,172,128,180,128,189,128,197,128,205,128,213,128,221,128,230,128,238,128,246,128,254,128,262,128,271,128,279,128,287,128,295,128,303,128,312,128,320,128,328,128,336,128,344,128,353,128,361,128,369,128,377,128,385,128,394,128,402,128,410,128,418,128,426,128,443,128,754,128,763,128,771,128,779,128,787,128,795,128,992,128,1017,128,1025,128,1033,128,1041,128,1050,128,1058,128,1066,128,1074,128,1082,128,1091,128,1214,136,-894,136,-886,136,-877,136,-869,136,-861,136,-853,136,-844,136,-836,136,-161,136,-152,136,-144,136,-136,136,-128,136,-119,136,-111,136,-103,136,-95,136,-86,136,-78,136,-70,136,-62,136,-54,136,-45,136,-37,136,-29,136,-21,136,-12,136,-4,136,4,136,12,136,21,136,29,136,37,136,45,136,54,136,62,136,70,136,78,136,86,136,95,136,103,136,111,136,119,136,128,136,136,136,144,136,152,136,161,136,169,136,177,136,185,136,194,136,202,136,210,136,218,136,227,136,235,136,243,136,251,136,259,136,268,136,276,136,284,136,292,136,301,136,309,136,317,136,325,136,334,136,342,136,350,136,358,136,367,136,375,136,383,136,391,136,400,136,408,136,416,136,441,136,449,136,457,136,465,136,754,136,762,136,770,136,778,136,787,136,795,136,984,136,993,136,1001,136,1009,136,1017,136,1026,136,1034,136,1042,136,1050,136,1059,136,1067,136,1075,136,1083,136,1092,136,1223,136,1232,144,-912,144,-904,144,-896,144,-888,144,-879,144,-871,144,-863,144,-855,144,-846,144,-838,144,-169,144,-161,144,-153,144,-144,144,-136,144,-128,144,-120,144,-111,144,-103,144,-95,144,-87,144,-78,144,-70,144,-62,144,-54,144,-45,144,-37,144,-29,144,-21,144,-12,144,-4,144,4,144,12,144,21,144,29,144,37,144,45,144,54,144,62,144,70,144,78,144,87,144,95,144,103,144,111,144,120,144,128,144,136,144,144,144,153,144,161,144,169,144,178,144,186,144,194,144,202,144,211,144,219,144,227,144,235,144,244,144,252,144,260,144,268,144,277,144,285,144,293,144,301,144,310,144,318,144,326,144,334,144,343,144,351,144,359,144,367,144,376,144,384,144,392,144,400,144,409,144,433,144,442,144,450,144,458,144,467,144,475,144,483,144,747,144,756,144,764,144,772,144,780,144,789,144,797,144,987,144,995,144,1003,144,1011,144,1020,144,1028,144,1036,144,1044,144,1053,144,1061,144,1069,144,1078,144,1086,144,1210,152,-921,152,-912,152,-904,152,-896,152,-888,152,-879,152,-871,152,-863,152,-854,152,-846,152,-838,152,-232,152,-166,152,-158,152,-149,152,-141,152,-133,152,-124,152,-116,152,-108,152,-100,152,-91,152,-83,152,-75,152,-66,152,-58,152,-50,152,-41,152,-33,152,-25,152,-17,152,-8,152,0,152,8,152,17,152,25,152,33,152,41,152,50,152,58,152,66,152,75,152,83,152,91,152,100,152,108,152,116,152,124,152,133,152,141,152,149,152,158,152,166,152,174,152,182,152,191,152,199,152,207,152,216,152,224,152,232,152,241,152,249,152,257,152,265,152,274,152,282,152,290,152,299,152,307,152,315,152,324,152,332,152,340,152,348,152,357,152,365,152,373,152,382,152,390,152,431,152,440,152,448,152,456,152,465,152,473,152,481,152,489,152,498,152,506,152,747,152,755,152,763,152,771,152,780,152,788,152,796,152,979,152,987,152,995,152,1004,152,1012,152,1020,152,1029,152,1037,152,1045,152,1053,152,1062,152,1070,152,1078,152,1087,152,1203,152,1211,160,-973,160,-964,160,-956,160,-931,160,-923,160,-915,160,-906,160,-898,160,-890,160,-158,160,-150,160,-141,160,-133,160,-125,160,-116,160,-108,160,-100,160,-91,160,-83,160,-75,160,-67,160,-58,160,-50,160,-42,160,-33,160,-25,160,-17,160,-8,160,0,160,8,160,17,160,25,160,33,160,42,160,50,160,58,160,67,160,75,160,83,160,91,160,100,160,108,160,116,160,125,160,133,160,141,160,150,160,158,160,166,160,175,160,183,160,191,160,200,160,208,160,216,160,224,160,233,160,241,160,249,160,258,160,266,160,274,160,283,160,291,160,299,160,308,160,316,160,324,160,333,160,341,160,349,160,358,160,366,160,374,160,382,160,391,160,432,160,441,160,449,160,457,160,466,160,474,160,482,160,491,160,499,160,507,160,515,160,740,160,748,160,757,160,765,160,773,160,782,160,790,160,798,160,806,160,948,160,956,160,981,160,989,160,998,160,1006,160,1014,160,1023,160,1031,160,1039,160,1048,160,1056,160,1064,160,1073,160,1081,160,1206,160,1214,168,-998,168,-990,168,-981,168,-973,168,-965,168,-956,168,-948,168,-940,168,-931,168,-923,168,-915,168,-906,168,-898,168,-890,168,-230,168,-163,168,-155,168,-146,168,-138,168,-129,168,-121,168,-113,168,-104,168,-96,168,-88,168,-79,168,-71,168,-63,168,-54,168,-46,168,-38,168,-29,168,-21,168,-13,168,-4,168,4,168,13,168,21,168,29,168,38,168,46,168,54,168,63,168,71,168,79,168,88,168,96,168,104,168,113,168,121,168,129,168,138,168,146,168,155,168,163,168,171,168,180,168,188,168,196,168,205,168,213,168,221,168,230,168,238,168,246,168,255,168,263,168,271,168,280,168,288,168,297,168,305,168,313,168,322,168,330,168,338,168,347,168,355,168,363,168,372,168,380,168,388,168,430,168,439,168,447,168,455,168,464,168,472,168,480,168,489,168,497,168,505,168,514,168,522,168,530,168,739,168,748,168,756,168,764,168,773,168,781,168,789,168,798,168,806,168,814,168,823,168,948,168,956,168,965,168,973,168,981,168,990,168,998,168,1006,168,1015,168,1023,168,1032,168,1040,168,1048,168,1057,168,1065,168,1073,168,1207,168,1215,168,1224,176,-1007,176,-999,176,-990,176,-982,176,-973,176,-965,176,-957,176,-948,176,-940,176,-931,176,-923,176,-915,176,-906,176,-898,176,-890,176,-159,176,-151,176,-143,176,-134,176,-126,176,-117,176,-109,176,-101,176,-92,176,-84,176,-76,176,-67,176,-59,176,-50,176,-42,176,-34,176,-25,176,-17,176,-8,176,0,176,8,176,17,176,25,176,34,176,42,176,50,176,59,176,67,176,76,176,84,176,92,176,101,176,109,176,117,176,126,176,134,176,143,176,151,176,159,176,168,176,176,176,185,176,193,176,201,176,210,176,218,176,227,176,235,176,243,176,252,176,260,176,269,176,277,176,285,176,294,176,302,176,310,176,319,176,327,176,336,176,344,176,352,176,361,176,369,176,378,176,386,176,428,176,436,176,445,176,453,176,462,176,470,176,478,176,487,176,495,176,503,176,512,176,520,176,529,176,537,176,545,176,738,176,747,176,755,176,764,176,772,176,780,176,789,176,797,176,806,176,814,176,822,176,831,176,948,176,957,176,965,176,973,176,982,176,990,176,999,176,1007,176,1015,176,1024,176,1032,176,1041,176,1049,176,1057,176,1208,176,1217,184,-1033,184,-1024,184,-1016,184,-1007,184,-999,184,-991,184,-982,184,-974,184,-965,184,-957,184,-948,184,-932,184,-923,184,-915,184,-906,184,-898,184,-889,184,-780,184,-771,184,-738,184,-729,184,-721,184,-712,184,-704,184,-687,184,-670,184,-662,184,-156,184,-148,184,-139,184,-131,184,-122,184,-114,184,-105,184,-97,184,-89,184,-80,184,-72,184,-63,184,-55,184,-46,184,-38,184,-30,184,-21,184,-13,184,-4,184,4,184,13,184,21,184,30,184,38,184,46,184,55,184,63,184,72,184,80,184,89,184,97,184,105,184,114,184,122,184,131,184,139,184,148,184,156,184,164,184,173,184,181,184,190,184,198,184,207,184,215,184,223,184,232,184,240,184,249,184,257,184,266,184,274,184,282,184,291,184,299,184,308,184,316,184,325,184,333,184,341,184,350,184,358,184,367,184,375,184,417,184,426,184,434,184,443,184,451,184,459,184,468,184,476,184,485,184,493,184,502,184,510,184,519,184,527,184,535,184,544,184,552,184,561,184,738,184,746,184,755,184,763,184,771,184,780,184,788,184,797,184,805,184,814,184,822,184,830,184,839,184,948,184,957,184,965,184,974,184,982,184,991,184,999,184,1007,184,1016,184,1024,184,1033,184,1041,184,1050,184,1058,184,1092,184,1210,192,-1559,192,-1042,192,-1033,192,-1025,192,-1016,192,-1008,192,-1000,192,-991,192,-983,192,-974,192,-966,192,-906,192,-898,192,-889,192,-881,192,-720,192,-712,192,-703,192,-161,192,-152,192,-144,192,-136,192,-127,192,-119,192,-110,192,-102,192,-93,192,-85,192,-76,192,-68,192,-59,192,-51,192,-42,192,-34,192,-25,192,-17,192,-8,192,0,192,8,192,17,192,25,192,34,192,42,192,51,192,59,192,68,192,76,192,85,192,93,192,102,192,110,192,119,192,127,192,136,192,144,192,152,192,161,192,169,192,178,192,186,192,195,192,203,192,212,192,220,192,229,192,237,192,246,192,254,192,263,192,271,192,280,192,288,192,296,192,305,192,313,192,322,192,330,192,339,192,347,192,356,192,364,192,373,192,415,192,424,192,432,192,440,192,449,192,457,192,466,192,474,192,483,192,491,192,500,192,508,192,517,192,525,192,534,192,542,192,551,192,559,192,568,192,576,192,728,192,737,192,745,192,754,192,762,192,771,192,779,192,788,192,796,192,805,192,813,192,822,192,830,192,839,192,847,192,949,192,957,192,966,192,974,192,983,192,991,192,1000,192,1008,192,1016,192,1025,192,1033,192,1042,192,1050,192,1093,192,1101,200,-1553,200,-1051,200,-1043,200,-1034,200,-1026,200,-1017,200,-1009,200,-1000,200,-991,200,-983,200,-974,200,-966,200,-898,200,-889,200,-881,200,-770,200,-762,200,-753,200,-157,200,-149,200,-140,200,-132,200,-123,200,-115,200,-106,200,-98,200,-89,200,-81,200,-72,200,-64,200,-55,200,-47,200,-38,200,-30,200,-21,200,-13,200,-4,200,4,200,13,200,21,200,30,200,38,200,47,200,55,200,64,200,72,200,81,200,89,200,98,200,106,200,115,200,123,200,132,200,140,200,149,200,157,200,166,200,174,200,183,200,191,200,200,200,209,200,217,200,226,200,234,200,243,200,251,200,260,200,268,200,277,200,285,200,294,200,302,200,311,200,319,200,328,200,336,200,345,200,353,200,362,200,370,200,413,200,421,200,430,200,438,200,447,200,455,200,464,200,472,200,481,200,489,200,498,200,506,200,515,200,523,200,532,200,540,200,549,200,557,200,566,200,574,200,728,200,736,200,745,200,753,200,762,200,770,200,779,200,787,200,796,200,804,200,813,200,821,200,830,200,838,200,847,200,855,200,940,200,949,200,957,200,966,200,974,200,983,200,991,200,1000,200,1009,200,1017,200,1026,200,1034,200,1043,200,1051,200,1060,200,1102,208,-1052,208,-1043,208,-1035,208,-1026,208,-1018,208,-1009,208,-1000,208,-992,208,-983,208,-975,208,-898,208,-889,208,-881,208,-872,208,-778,208,-770,208,-761,208,-162,208,-154,208,-145,208,-137,208,-128,208,-120,208,-111,208,-103,208,-94,208,-86,208,-77,208,-68,208,-60,208,-51,208,-43,208,-34,208,-26,208,-17,208,-9,208,0,208,9,208,17,208,26,208,34,208,43,208,51,208,60,208,68,208,77,208,86,208,94,208,103,208,111,208,120,208,128,208,137,208,145,208,154,208,162,208,171,208,180,208,188,208,197,208,205,208,214,208,222,208,231,208,239,208,248,208,257,208,265,208,274,208,282,208,291,208,299,208,308,208,316,208,325,208,333,208,342,208,351,208,359,208,368,208,402,208,410,208,419,208,428,208,436,208,445,208,453,208,462,208,470,208,479,208,487,208,496,208,505,208,513,208,522,208,530,208,539,208,547,208,556,208,564,208,573,208,581,208,710,208,735,208,744,208,752,208,761,208,770,208,778,208,787,208,795,208,804,208,812,208,821,208,829,208,838,208,847,208,855,208,864,208,924,208,932,208,941,208,949,208,958,208,966,208,975,208,983,208,992,208,1000,208,1009,208,1018,208,1026,208,1035,208,1043,208,1052,208,1060,208,1103,216,-1051,216,-1042,216,-1033,216,-1025,216,-1016,216,-1008,216,-999,216,-990,216,-982,216,-827,216,-792,216,-784,216,-775,216,-164,216,-155,216,-146,216,-138,216,-129,216,-121,216,-112,216,-103,216,-95,216,-86,216,-78,216,-69,216,-60,216,-52,216,-43,216,-34,216,-26,216,-17,216,-9,216,0,216,9,216,17,216,26,216,34,216,43,216,52,216,60,216,69,216,78,216,86,216,95,216,103,216,112,216,121,216,129,216,138,216,146,216,155,216,164,216,172,216,181,216,189,216,198,216,207,216,215,216,224,216,233,216,241,216,250,216,258,216,267,216,276,216,284,216,293,216,301,216,310,216,319,216,327,216,336,216,344,216,353,216,362,216,396,216,405,216,413,216,422,216,431,216,439,216,448,216,456,216,465,216,474,216,482,216,491,216,500,216,508,216,517,216,525,216,534,216,543,216,551,216,560,216,568,216,577,216,586,216,698,216,706,216,715,216,732,216,741,216,749,216,758,216,767,216,775,216,784,216,792,216,801,216,810,216,818,216,827,216,835,216,844,216,853,216,861,216,870,216,922,216,930,216,939,216,947,216,956,216,965,216,973,216,982,216,990,216,999,216,1008,216,1016,216,1025,216,1033,216,1042,216,1051,216,1059,216,1068,216,1077,216,1094,216,1102,216,1111,224,-1051,224,-1043,224,-1034,224,-1025,224,-1017,224,-1008,224,-1000,224,-991,224,-982,224,-835,224,-818,224,-809,224,-800,224,-740,224,-731,224,-160,224,-151,224,-143,224,-134,224,-125,224,-117,224,-108,224,-100,224,-91,224,-82,224,-74,224,-65,224,-56,224,-48,224,-39,224,-30,224,-22,224,-13,224,-4,224,4,224,13,224,22,224,30,224,39,224,48,224,56,224,65,224,74,224,82,224,91,224,100,224,108,224,117,224,125,224,134,224,143,224,151,224,160,224,169,224,177,224,186,224,195,224,203,224,212,224,221,224,229,224,238,224,247,224,255,224,264,224,273,224,281,224,290,224,299,224,307,224,316,224,325,224,333,224,342,224,350,224,359,224,394,224,402,224,411,224,420,224,428,224,437,224,446,224,454,224,463,224,472,224,480,224,489,224,498,224,506,224,515,224,524,224,532,224,541,224,550,224,558,224,567,224,575,224,584,224,593,224,697,224,705,224,714,224,723,224,731,224,740,224,749,224,757,224,766,224,775,224,783,224,792,224,800,224,809,224,818,224,826,224,835,224,844,224,852,224,861,224,870,224,878,224,887,224,896,224,904,224,922,224,930,224,939,224,948,224,956,224,965,224,974,224,982,224,991,224,1000,224,1008,224,1017,224,1025,224,1034,224,1043,224,1051,224,1060,224,1069,224,1077,224,1086,224,1095,224,1103,224,1112,224,1121,224,1129,224,1207,232,-1096,232,-1061,232,-1052,232,-1043,232,-1035,232,-1026,232,-1017,232,-1009,232,-1000,232,-991,232,-983,232,-157,232,-148,232,-139,232,-130,232,-122,232,-113,232,-104,232,-96,232,-87,232,-78,232,-70,232,-61,232,-52,232,-43,232,-35,232,-26,232,-17,232,-9,232,0,232,9,232,17,232,26,232,35,232,43,232,52,232,61,232,70,232,78,232,87,232,96,232,104,232,113,232,122,232,130,232,139,232,148,232,157,232,165,232,174,232,183,232,191,232,200,232,209,232,217,232,226,232,235,232,243,232,252,232,261,232,270,232,278,232,287,232,296,232,304,232,313,232,322,232,330,232,339,232,348,232,391,232,400,232,409,232,417,232,426,232,435,232,443,232,452,232,461,232,470,232,478,232,487,232,496,232,504,232,513,232,522,232,530,232,539,232,548,232,557,232,565,232,574,232,583,232,687,232,696,232,704,232,713,232,722,232,730,232,739,232,748,232,757,232,765,232,774,232,783,232,791,232,800,232,809,232,817,232,826,232,835,232,843,232,852,232,861,232,870,232,878,232,887,232,896,232,904,232,913,232,922,232,930,232,939,232,948,232,957,232,965,232,974,232,983,232,991,232,1000,232,1009,232,1017,232,1026,232,1035,232,1043,232,1052,232,1061,232,1070,232,1078,232,1087,232,1096,232,1104,232,1113,232,1122,232,1130,232,1139,232,1148,232,1157,232,1165,232,1209,240,-1104,240,-1069,240,-1060,240,-1051,240,-1042,240,-1034,240,-1025,240,-1016,240,-1007,240,-999,240,-990,240,-981,240,-149,240,-140,240,-131,240,-123,240,-114,240,-105,240,-96,240,-88,240,-79,240,-70,240,-61,240,-53,240,-44,240,-35,240,-26,240,-18,240,-9,240,0,240,9,240,18,240,26,240,35,240,44,240,53,240,61,240,70,240,79,240,88,240,96,240,105,240,114,240,123,240,131,240,140,240,149,240,158,240,166,240,175,240,184,240,193,240,201,240,210,240,219,240,228,240,236,240,245,240,254,240,263,240,272,240,280,240,289,240,298,240,307,240,315,240,324,240,333,240,342,240,350,240,385,240,394,240,403,240,412,240,420,240,429,240,438,240,447,240,455,240,464,240,473,240,482,240,491,240,499,240,508,240,517,240,526,240,534,240,543,240,552,240,561,240,569,240,683,240,692,240,701,240,709,240,718,240,727,240,736,240,745,240,753,240,762,240,771,240,780,240,788,240,797,240,806,240,815,240,823,240,832,240,841,240,850,240,858,240,867,240,876,240,885,240,893,240,902,240,911,240,920,240,928,240,937,240,946,240,955,240,964,240,972,240,981,240,990,240,999,240,1007,240,1016,240,1025,240,1034,240,1042,240,1051,240,1060,240,1069,240,1077,240,1086,240,1095,240,1104,240,1112,240,1121,240,1130,240,1139,240,1147,240,1156,240,1165,240,1174,240,1209,248,-1112,248,-1076,248,-1068,248,-1059,248,-1050,248,-1041,248,-1032,248,-1024,248,-1015,248,-1006,248,-997,248,-988,248,-979,248,-141,248,-132,248,-124,248,-115,248,-106,248,-97,248,-88,248,-79,248,-71,248,-62,248,-53,248,-44,248,-35,248,-26,248,-18,248,-9,248,0,248,9,248,18,248,26,248,35,248,44,248,53,248,62,248,71,248,79,248,88,248,97,248,106,248,115,248,124,248,132,248,141,248,150,248,159,248,168,248,176,248,185,248,194,248,203,248,212,248,221,248,229,248,238,248,247,248,256,248,265,248,274,248,282,248,291,248,300,248,309,248,318,248,326,248,335,248,344,248,379,248,388,248,397,248,406,248,415,248,424,248,432,248,441,248,450,248,459,248,468,248,476,248,485,248,494,248,503,248,512,248,556,248,671,248,679,248,688,248,697,248,706,248,715,248,724,248,732,248,741,248,750,248,759,248,768,248,776,248,785,248,794,248,803,248,812,248,821,248,829,248,838,248,847,248,856,248,865,248,874,248,882,248,891,248,900,248,909,248,918,248,926,248,935,248,944,248,953,248,962,248,971,248,979,248,988,248,997,248,1006,248,1015,248,1024,248,1032,248,1041,248,1050,248,1059,248,1068,248,1076,248,1085,248,1094,248,1103,248,1112,248,1121,248,1129,248,1138,248,1147,248,1156,248,1165,248,1174,248,1182,248,1218,248,1253,256,-1113,256,-1086,256,-1077,256,-1068,256,-1060,256,-1051,256,-1042,256,-1033,256,-1024,256,-1015,256,-1006,256,-998,256,-989,256,-980,256,-811,256,-146,256,-137,256,-129,256,-120,256,-111,256,-102,256,-93,256,-84,256,-75,256,-67,256,-58,256,-49,256,-40,256,-31,256,-22,256,-13,256,-4,256,4,256,13,256,22,256,31,256,40,256,49,256,58,256,67,256,75,256,84,256,93,256,102,256,111,256,120,256,129,256,137,256,146,256,155,256,164,256,173,256,182,256,191,256,200,256,208,256,217,256,226,256,235,256,244,256,253,256,262,256,270,256,279,256,288,256,297,256,306,256,315,256,324,256,333,256,341,256,377,256,386,256,395,256,403,256,412,256,421,256,430,256,439,256,448,256,457,256,466,256,474,256,483,256,492,256,501,256,510,256,563,256,590,256,599,256,607,256,616,256,625,256,634,256,643,256,652,256,661,256,669,256,678,256,687,256,696,256,705,256,714,256,723,256,732,256,740,256,749,256,758,256,767,256,776,256,785,256,794,256,802,256,811,256,820,256,829,256,838,256,847,256,856,256,865,256,873,256,882,256,891,256,900,256,909,256,918,256,927,256,935,256,944,256,953,256,962,256,971,256,980,256,989,256,998,256,1006,256,1015,256,1024,256,1033,256,1042,256,1051,256,1060,256,1068,256,1077,256,1086,256,1095,256,1104,256,1113,256,1122,256,1131,256,1139,256,1148,256,1157,256,1166,256,1175,256,1184,256,1193,264,-1121,264,-1085,264,-1076,264,-1067,264,-1059,264,-1050,264,-1041,264,-1032,264,-1023,264,-1014,264,-1005,264,-996,264,-987,264,-978,264,-817,264,-808,264,-138,264,-130,264,-121,264,-112,264,-103,264,-94,264,-85,264,-76,264,-67,264,-58,264,-49,264,-40,264,-31,264,-22,264,-13,264,-4,264,4,264,13,264,22,264,31,264,40,264,49,264,58,264,67,264,76,264,85,264,94,264,103,264,112,264,121,264,130,264,138,264,147,264,156,264,165,264,174,264,183,264,192,264,201,264,210,264,219,264,228,264,237,264,246,264,255,264,264,264,272,264,281,264,290,264,299,264,308,264,317,264,326,264,335,264,371,264,380,264,389,264,398,264,406,264,415,264,424,264,433,264,442,264,451,264,460,264,469,264,478,264,487,264,496,264,576,264,585,264,594,264,603,264,612,264,621,264,630,264,639,264,648,264,657,264,666,264,674,264,683,264,692,264,701,264,710,264,719,264,728,264,737,264,746,264,755,264,764,264,773,264,782,264,791,264,800,264,808,264,817,264,826,264,835,264,844,264,853,264,862,264,871,264,880,264,889,264,898,264,907,264,916,264,925,264,933,264,942,264,951,264,960,264,969,264,978,264,987,264,996,264,1005,264,1014,264,1023,264,1032,264,1041,264,1050,264,1059,264,1067,264,1076,264,1085,264,1094,264,1103,264,1112,264,1121,264,1130,264,1139,264,1148,264,1157,264,1166,264,1175,264,1184,264,1193,272,-1138,272,-1129,272,-1102,272,-1093,272,-1084,272,-1075,272,-1066,272,-1057,272,-1048,272,-1039,272,-1030,272,-1021,272,-1012,272,-1003,272,-994,272,-985,272,-976,272,-824,272,-814,272,-805,272,-131,272,-122,272,-112,272,-103,272,-94,272,-86,272,-77,272,-67,272,-58,272,-49,272,-40,272,-32,272,-22,272,-13,272,-4,272,4,272,14,272,23,272,32,272,40,272,50,272,58,272,68,272,77,272,86,272,94,272,104,272,113,272,121,272,131,272,139,272,148,272,157,272,167,272,175,272,185,272,193,272,203,272,211,272,221,272,229,272,239,272,248,272,257,272,265,272,275,272,283,272,293,272,302,272,311,272,319,272,329,272,338,272,364,272,373,272,382,272,392,272,400,272,410,272,418,272,428,272,436,272,446,272,454,272,464,272,473,272,482,272,490,272,536,272,544,272,554,272,563,272,571,272,581,272,589,272,599,272,607,272,617,272,625,272,635,272,644,272,653,272,661,272,671,272,679,272,689,272,698,272,707,272,715,272,725,272,734,272,743,272,752,272,761,272,769,272,779,272,788,272,796,272,806,272,814,272,824,272,833,272,841,272,851,272,859,272,868,272,878,272,886,272,896,272,904,272,914,272,923,272,932,272,941,272,949,272,959,272,968,272,976,272,986,272,994,272,1004,272,1013,272,1021,272,1031,272,1040,272,1049,272,1058,272,1066,272,1076,272,1085,272,1093,272,1103,272,1111,272,1121,272,1130,272,1139,272,1148,272,1157,272,1166,272,1175,272,1184,272,1193,272,1201,280,-1138,280,-1129,280,-1111,280,-1102,280,-1093,280,-1084,280,-1075,280,-1065,280,-1056,280,-1047,280,-1038,280,-1029,280,-1020,280,-1011,280,-1002,280,-993,280,-984,280,-975,280,-821,280,-812,280,-122,280,-113,280,-104,280,-95,280,-86,280,-77,280,-68,280,-59,280,-50,280,-41,280,-32,280,-23,280,-14,280,-5,280,5,280,14,280,23,280,32,280,41,280,50,280,59,280,68,280,77,280,86,280,95,280,104,280,113,280,122,280,131,280,141,280,150,280,159,280,168,280,177,280,186,280,195,280,204,280,213,280,222,280,231,280,240,280,249,280,258,280,268,280,277,280,286,280,295,280,304,280,313,280,322,280,331,280,340,280,358,280,367,280,376,280,385,280,394,280,404,280,413,280,422,280,431,280,440,280,449,280,458,280,467,280,476,280,485,280,521,280,530,280,540,280,549,280,558,280,567,280,576,280,585,280,594,280,603,280,612,280,621,280,630,280,639,280,648,280,657,280,666,280,676,280,685,280,694,280,703,280,712,280,721,280,730,280,739,280,748,280,757,280,766,280,775,280,784,280,793,280,803,280,812,280,821,280,830,280,839,280,848,280,857,280,866,280,875,280,884,280,893,280,902,280,911,280,920,280,929,280,939,280,948,280,957,280,966,280,975,280,984,280,993,280,1002,280,1011,280,1020,280,1029,280,1038,280,1047,280,1056,280,1065,280,1075,280,1084,280,1093,280,1102,280,1111,280,1120,280,1129,280,1138,280,1147,280,1156,280,1165,280,1174,280,1183,280,1192,280,1202,288,-1138,288,-1110,288,-1101,288,-1092,288,-1083,288,-1074,288,-1064,288,-1055,288,-1046,288,-1037,288,-1028,288,-1019,288,-1010,288,-1001,288,-991,288,-982,288,-973,288,-964,288,-818,288,-809,288,-178,288,-105,288,-96,288,-87,288,-78,288,-69,288,-59,288,-50,288,-41,288,-32,288,-23,288,-14,288,-5,288,5,288,14,288,23,288,32,288,41,288,50,288,59,288,69,288,78,288,87,288,96,288,105,288,114,288,123,288,132,288,142,288,151,288,160,288,169,288,178,288,187,288,196,288,206,288,215,288,224,288,233,288,242,288,251,288,260,288,270,288,279,288,288,288,297,288,306,288,315,288,324,288,334,288,343,288,352,288,361,288,370,288,379,288,388,288,397,288,407,288,416,288,425,288,434,288,443,288,452,288,461,288,471,288,480,288,516,288,525,288,535,288,544,288,553,288,562,288,571,288,580,288,589,288,598,288,608,288,617,288,626,288,635,288,644,288,653,288,662,288,672,288,681,288,690,288,699,288,708,288,717,288,726,288,736,288,745,288,754,288,763,288,772,288,781,288,790,288,799,288,809,288,818,288,827,288,836,288,845,288,854,288,863,288,873,288,882,288,891,288,900,288,909,288,918,288,927,288,937,288,946,288,955,288,964,288,973,288,982,288,991,288,1001,288,1010,288,1019,288,1028,288,1037,288,1046,288,1055,288,1064,288,1074,288,1083,288,1092,288,1101,288,1110,288,1119,288,1128,288,1138,288,1147,288,1156,288,1165,288,1174,288,1183,288,1192,288,1202,288,1211,296,-1146,296,-1119,296,-1109,296,-1100,296,-1091,296,-1082,296,-1073,296,-1063,296,-1054,296,-1045,296,-1036,296,-1027,296,-1017,296,-1008,296,-999,296,-990,296,-981,296,-971,296,-962,296,-953,296,-944,296,-925,296,-907,296,-898,296,-833,296,-824,296,-815,296,-97,296,-87,296,-78,296,-69,296,-60,296,-51,296,-41,296,-32,296,-23,296,-14,296,-5,296,5,296,14,296,23,296,32,296,41,296,51,296,60,296,69,296,78,296,87,296,97,296,106,296,115,296,124,296,134,296,143,296,152,296,161,296,170,296,180,296,189,296,198,296,207,296,216,296,226,296,235,296,244,296,253,296,262,296,272,296,281,296,290,296,299,296,308,296,318,296,336,296,345,296,354,296,364,296,373,296,382,296,391,296,401,296,410,296,419,296,428,296,437,296,447,296,456,296,465,296,474,296,511,296,520,296,529,296,539,296,548,296,557,296,566,296,575,296,585,296,594,296,603,296,612,296,621,296,631,296,640,296,649,296,658,296,668,296,677,296,686,296,695,296,704,296,714,296,723,296,732,296,741,296,750,296,760,296,769,296,778,296,787,296,796,296,806,296,815,296,824,296,833,296,842,296,852,296,861,296,870,296,879,296,888,296,898,296,907,296,916,296,925,296,935,296,944,296,953,296,962,296,971,296,981,296,990,296,999,296,1008,296,1017,296,1027,296,1036,296,1045,296,1054,296,1063,296,1073,296,1082,296,1091,296,1100,296,1109,296,1119,296,1128,296,1137,296,1146,296,1155,296,1165,296,1174,296,1183,296,1192,296,1202,296,1211,304,-1155,304,-1127,304,-1118,304,-1109,304,-1099,304,-1090,304,-1081,304,-1072,304,-1062,304,-1053,304,-1044,304,-1035,304,-1025,304,-1016,304,-1007,304,-997,304,-988,304,-979,304,-970,304,-960,304,-951,304,-942,304,-932,304,-923,304,-914,304,-905,304,-895,304,-886,304,-877,304,-868,304,-858,304,-849,304,-840,304,-830,304,-821,304,-88,304,-79,304,-70,304,-60,304,-51,304,-42,304,-32,304,-23,304,-14,304,-5,304,5,304,14,304,23,304,32,304,42,304,51,304,60,304,70,304,79,304,88,304,97,304,107,304,116,304,125,304,135,304,144,304,153,304,162,304,172,304,181,304,199,304,209,304,218,304,227,304,237,304,246,304,255,304,264,304,274,304,283,304,292,304,302,304,311,304,320,304,329,304,339,304,348,304,357,304,366,304,376,304,385,304,394,304,404,304,413,304,422,304,431,304,441,304,450,304,459,304,469,304,478,304,487,304,496,304,506,304,515,304,524,304,534,304,543,304,552,304,561,304,571,304,580,304,589,304,598,304,608,304,617,304,626,304,636,304,645,304,654,304,663,304,673,304,682,304,691,304,701,304,710,304,719,304,728,304,738,304,747,304,756,304,765,304,775,304,784,304,793,304,803,304,812,304,821,304,830,304,840,304,849,304,858,304,868,304,877,304,886,304,895,304,905,304,914,304,923,304,932,304,942,304,951,304,960,304,970,304,979,304,988,304,997,304,1007,304,1016,304,1025,304,1035,304,1044,304,1053,304,1062,304,1072,304,1081,304,1090,304,1099,304,1109,304,1118,304,1127,304,1137,304,1146,304,1155,304,1164,304,1174,304,1183,304,1192,304,1202,312,-1155,312,-1127,312,-1117,312,-1108,312,-1099,312,-1089,312,-1080,312,-1071,312,-1061,312,-1052,312,-1043,312,-1033,312,-1024,312,-1015,312,-1005,312,-996,312,-986,312,-977,312,-968,312,-958,312,-949,312,-940,312,-930,312,-921,312,-912,312,-902,312,-893,312,-884,312,-874,312,-865,312,-856,312,-846,312,-837,312,-828,312,-818,312,-98,312,-89,312,-79,312,-70,312,-61,312,-51,312,-42,312,-33,312,-23,312,-14,312,-5,312,5,312,14,312,23,312,33,312,42,312,51,312,61,312,70,312,79,312,89,312,98,312,108,312,117,312,126,312,136,312,145,312,154,312,164,312,210,312,220,312,229,312,238,312,248,312,257,312,266,312,276,312,304,312,313,312,341,312,351,312,360,312,369,312,379,312,388,312,397,312,407,312,416,312,425,312,435,312,444,312,454,312,463,312,472,312,482,312,491,312,500,312,510,312,519,312,528,312,538,312,547,312,556,312,566,312,575,312,584,312,594,312,603,312,612,312,622,312,631,312,641,312,650,312,659,312,669,312,678,312,687,312,697,312,706,312,715,312,725,312,734,312,743,312,753,312,762,312,771,312,781,312,790,312,799,312,809,312,818,312,828,312,837,312,846,312,856,312,865,312,874,312,884,312,893,312,902,312,912,312,921,312,930,312,940,312,949,312,958,312,968,312,977,312,986,312,996,312,1005,312,1015,312,1024,312,1033,312,1043,312,1052,312,1061,312,1071,312,1080,312,1089,312,1099,312,1108,312,1117,312,1127,312,1136,312,1145,312,1155,312,1164,312,1174,312,1183,312,1192,312,1202,312,1211,320,-1164,320,-1154,320,-1145,320,-1136,320,-1126,320,-1117,320,-1107,320,-1098,320,-1088,320,-1079,320,-1070,320,-1060,320,-1051,320,-1041,320,-1032,320,-1023,320,-1013,320,-1004,320,-994,320,-985,320,-975,320,-966,320,-957,320,-947,320,-938,320,-928,320,-919,320,-909,320,-900,320,-891,320,-881,320,-872,320,-862,320,-853,320,-843,320,-834,320,-825,320,-815,320,-90,320,-80,320,-71,320,-61,320,-52,320,-42,320,-33,320,-24,320,-14,320,-5,320,5,320,14,320,24,320,33,320,42,320,52,320,61,320,71,320,80,320,90,320,99,320,108,320,118,320,127,320,137,320,146,320,203,320,212,320,221,320,231,320,240,320,353,320,363,320,372,320,382,320,391,320,401,320,410,320,419,320,429,320,438,320,448,320,457,320,466,320,476,320,485,320,495,320,504,320,514,320,523,320,532,320,542,320,551,320,561,320,570,320,580,320,589,320,598,320,608,320,617,320,627,320,636,320,646,320,655,320,664,320,674,320,683,320,693,320,702,320,712,320,721,320,730,320,740,320,749,320,759,320,768,320,777,320,787,320,796,320,806,320,815,320,825,320,834,320,843,320,853,320,862,320,872,320,881,320,891,320,900,320,909,320,919,320,928,320,938,320,947,320,957,320,966,320,975,320,985,320,994,320,1004,320,1013,320,1023,320,1032,320,1041,320,1051,320,1060,320,1070,320,1079,320,1088,320,1098,320,1107,320,1117,320,1126,320,1136,320,1145,320,1154,320,1164,320,1173,320,1183,320,1192,320,1202,320,1211,320,1305,320,1315,328,-1171,328,-1162,328,-1152,328,-1143,328,-1133,328,-1124,328,-1114,328,-1105,328,-1095,328,-1086,328,-1076,328,-1067,328,-1057,328,-1048,328,-1038,328,-1029,328,-1019,328,-1010,328,-1000,328,-990,328,-981,328,-971,328,-962,328,-952,328,-943,328,-933,328,-924,328,-914,328,-905,328,-895,328,-886,328,-876,328,-867,328,-857,328,-848,328,-838,328,-829,328,-819,328,-810,328,-800,328,-171,328,-86,328,-76,328,-67,328,-57,328,-48,328,-38,328,-29,328,-19,328,-10,328,0,328,10,328,19,328,29,328,38,328,48,328,57,328,67,328,76,328,86,328,95,328,105,328,114,328,124,328,133,328,219,328,352,328,362,328,371,328,381,328,390,328,400,328,410,328,419,328,429,328,438,328,448,328,457,328,467,328,476,328,486,328,495,328,505,328,514,328,524,328,533,328,543,328,552,328,562,328,571,328,581,328,590,328,600,328,610,328,619,328,629,328,638,328,648,328,657,328,667,328,676,328,686,328,695,328,705,328,714,328,724,328,733,328,743,328,752,328,762,328,771,328,781,328,790,328,800,328,810,328,819,328,829,328,838,328,848,328,857,328,867,328,876,328,886,328,895,328,905,328,914,328,924,328,933,328,943,328,952,328,962,328,971,328,981,328,990,328,1000,328,1010,328,1019,328,1029,328,1038,328,1048,328,1057,328,1067,328,1076,328,1086,328,1095,328,1105,328,1114,328,1124,328,1133,328,1143,328,1152,328,1162,328,1171,328,1181,328,1190,328,1200,328,1314,336,-1171,336,-1162,336,-1152,336,-1142,336,-1133,336,-1123,336,-1114,336,-1104,336,-1094,336,-1085,336,-1075,336,-1066,336,-1056,336,-1046,336,-1037,336,-1027,336,-1018,336,-1008,336,-998,336,-989,336,-979,336,-970,336,-960,336,-950,336,-941,336,-931,336,-922,336,-912,336,-902,336,-893,336,-883,336,-874,336,-864,336,-854,336,-845,336,-835,336,-826,336,-816,336,-806,336,-797,336,-67,336,-58,336,-48,336,-38,336,-29,336,-19,336,-10,336,0,336,10,336,19,336,29,336,38,336,48,336,58,336,67,336,77,336,86,336,96,336,106,336,355,336,365,336,374,336,384,336,394,336,403,336,413,336,422,336,432,336,442,336,451,336,461,336,470,336,480,336,490,336,499,336,509,336,518,336,528,336,538,336,547,336,557,336,566,336,576,336,586,336,595,336,605,336,614,336,624,336,634,336,643,336,653,336,662,336,672,336,682,336,691,336,701,336,710,336,720,336,730,336,739,336,749,336,758,336,768,336,778,336,787,336,797,336,806,336,816,336,826,336,835,336,845,336,854,336,864,336,874,336,883,336,893,336,902,336,912,336,922,336,931,336,941,336,950,336,960,336,970,336,979,336,989,336,998,336,1008,336,1018,336,1027,336,1037,336,1046,336,1056,336,1066,336,1075,336,1085,336,1094,336,1104,336,1114,336,1123,336,1133,336,1142,336,1152,336,1162,336,1171,336,1181,336,1190,336,1200,336,1306,336,1315,336,1334,344,-1189,344,-1179,344,-1169,344,-1160,344,-1150,344,-1140,344,-1130,344,-1121,344,-1111,344,-1101,344,-1092,344,-1082,344,-1072,344,-1063,344,-1053,344,-1043,344,-1033,344,-1024,344,-1014,344,-1004,344,-995,344,-985,344,-975,344,-965,344,-956,344,-946,344,-936,344,-927,344,-917,344,-907,344,-898,344,-888,344,-878,344,-868,344,-859,344,-849,344,-839,344,-830,344,-820,344,-810,344,-801,344,-791,344,-781,344,-63,344,-53,344,-44,344,-34,344,-24,344,-15,344,-5,344,5,344,15,344,24,344,34,344,44,344,53,344,63,344,73,344,82,344,92,344,102,344,364,344,374,344,383,344,393,344,403,344,412,344,422,344,432,344,442,344,451,344,461,344,471,344,480,344,490,344,500,344,509,344,519,344,529,344,539,344,548,344,558,344,568,344,577,344,587,344,597,344,606,344,616,344,626,344,636,344,645,344,655,344,665,344,674,344,684,344,694,344,704,344,713,344,723,344,733,344,742,344,752,344,762,344,771,344,781,344,791,344,801,344,810,344,820,344,830,344,839,344,849,344,859,344,868,344,878,344,888,344,898,344,907,344,917,344,927,344,936,344,946,344,956,344,965,344,975,344,985,344,995,344,1004,344,1014,344,1024,344,1033,344,1043,344,1053,344,1063,344,1072,344,1082,344,1092,344,1101,344,1111,344,1121,344,1130,344,1140,344,1150,344,1160,344,1169,344,1179,344,1189,344,1198,344,1315,344,1325,344,1354,344,1363,352,-1208,352,-1198,352,-1189,352,-1179,352,-1169,352,-1159,352,-1149,352,-1140,352,-1130,352,-1120,352,-1110,352,-1101,352,-1091,352,-1081,352,-1071,352,-1061,352,-1052,352,-1042,352,-1032,352,-1022,352,-1012,352,-1003,352,-993,352,-983,352,-973,352,-964,352,-954,352,-944,352,-934,352,-924,352,-915,352,-905,352,-895,352,-885,352,-876,352,-866,352,-856,352,-846,352,-836,352,-827,352,-817,352,-807,352,-797,352,-787,352,-778,352,-768,352,-54,352,-34,352,-15,352,-5,352,5,352,15,352,24,352,34,352,44,352,54,352,64,352,73,352,83,352,93,352,103,352,249,352,338,352,367,352,377,352,386,352,396,352,406,352,416,352,426,352,435,352,445,352,455,352,465,352,474,352,484,352,494,352,504,352,514,352,523,352,533,352,543,352,553,352,563,352,572,352,582,352,592,352,602,352,611,352,621,352,631,352,641,352,651,352,660,352,670,352,680,352,690,352,699,352,709,352,719,352,729,352,739,352,748,352,758,352,768,352,778,352,788,352,797,352,807,352,817,352,827,352,836,352,846,352,856,352,866,352,876,352,885,352,895,352,905,352,915,352,924,352,934,352,944,352,954,352,964,352,973,352,983,352,993,352,1003,352,1013,352,1022,352,1032,352,1042,352,1052,352,1061,352,1071,352,1081,352,1091,352,1101,352,1110,352,1120,352,1130,352,1140,352,1149,352,1159,352,1169,352,1179,352,1189,352,1267,352,1277,352,1286,352,1326,352,1335,352,1345,352,1355,352,1365,352,1374,352,1384,360,-1207,360,-1197,360,-1187,360,-1177,360,-1167,360,-1157,360,-1147,360,-1137,360,-1127,360,-1118,360,-1108,360,-1098,360,-1088,360,-1078,360,-1068,360,-1058,360,-1048,360,-1038,360,-1029,360,-1019,360,-1009,360,-999,360,-989,360,-979,360,-969,360,-959,360,-949,360,-940,360,-930,360,-920,360,-910,360,-900,360,-890,360,-880,360,-870,360,-860,360,-851,360,-841,360,-831,360,-821,360,-811,360,-801,360,-791,360,-781,360,-771,360,10,360,20,360,30,360,40,360,49,360,59,360,69,360,79,360,89,360,99,360,366,360,376,360,386,360,396,360,405,360,415,360,425,360,435,360,445,360,455,360,465,360,475,360,485,360,495,360,504,360,514,360,524,360,534,360,544,360,554,360,564,360,574,360,584,360,593,360,603,360,613,360,623,360,633,360,643,360,653,360,663,360,673,360,682,360,692,360,702,360,712,360,722,360,732,360,742,360,752,360,762,360,771,360,781,360,791,360,801,360,811,360,821,360,831,360,841,360,851,360,860,360,870,360,880,360,890,360,900,360,910,360,920,360,930,360,940,360,949,360,959,360,969,360,979,360,989,360,999,360,1009,360,1019,360,1029,360,1038,360,1048,360,1058,360,1068,360,1078,360,1088,360,1098,360,1108,360,1118,360,1127,360,1137,360,1147,360,1157,360,1167,360,1177,360,1187,360,1197,360,1276,360,1286,360,1296,360,1365,360,1375,360,1385,360,1395,360,1404,368,-1215,368,-1205,368,-1195,368,-1185,368,-1175,368,-1165,368,-1155,368,-1145,368,-1135,368,-1125,368,-1115,368,-1105,368,-1095,368,-1085,368,-1075,368,-1065,368,-1055,368,-1045,368,-1035,368,-1025,368,-1015,368,-1005,368,-995,368,-985,368,-975,368,-965,368,-955,368,-945,368,-935,368,-925,368,-915,368,-905,368,-895,368,-885,368,-875,368,-865,368,-855,368,-845,368,-835,368,-825,368,-815,368,-805,368,-795,368,-785,368,-775,368,-765,368,-55,368,-45,368,-35,368,45,368,65,368,75,368,85,368,95,368,225,368,285,368,295,368,305,368,315,368,325,368,335,368,345,368,355,368,365,368,375,368,385,368,395,368,405,368,415,368,425,368,435,368,445,368,455,368,465,368,475,368,485,368,495,368,505,368,535,368,545,368,555,368,565,368,575,368,585,368,595,368,605,368,615,368,625,368,635,368,645,368,655,368,665,368,675,368,685,368,695,368,705,368,715,368,725,368,735,368,745,368,755,368,765,368,775,368,785,368,795,368,805,368,815,368,825,368,835,368,845,368,855,368,865,368,875,368,885,368,895,368,905,368,915,368,925,368,935,368,945,368,955,368,965,368,975,368,985,368,995,368,1005,368,1015,368,1025,368,1035,368,1045,368,1055,368,1065,368,1075,368,1085,368,1095,368,1105,368,1115,368,1125,368,1135,368,1145,368,1155,368,1165,368,1175,368,1185,368,1195,368,1205,368,1215,368,1265,368,1275,368,1285,368,1375,368,1385,368,1395,368,1405,376,-1215,376,-1205,376,-1195,376,-1185,376,-1175,376,-1165,376,-1155,376,-1145,376,-1134,376,-1124,376,-1114,376,-1104,376,-1094,376,-1084,376,-1074,376,-1064,376,-1054,376,-1044,376,-1034,376,-1024,376,-1013,376,-1003,376,-993,376,-983,376,-973,376,-963,376,-953,376,-943,376,-933,376,-923,376,-913,376,-903,376,-892,376,-882,376,-872,376,-862,376,-852,376,-842,376,-832,376,-822,376,-812,376,-802,376,-792,376,-782,376,-771,376,-86,376,-76,376,-66,376,-55,376,-45,376,-35,376,-25,376,-15,376,136,376,146,376,217,376,227,376,277,376,287,376,297,376,308,376,318,376,328,376,338,376,348,376,358,376,368,376,378,376,388,376,398,376,408,376,418,376,429,376,439,376,449,376,459,376,469,376,479,376,489,376,539,376,550,376,560,376,570,376,580,376,590,376,600,376,610,376,620,376,630,376,640,376,650,376,661,376,671,376,681,376,691,376,701,376,711,376,721,376,731,376,741,376,751,376,761,376,771,376,782,376,792,376,802,376,812,376,822,376,832,376,842,376,852,376,862,376,872,376,882,376,892,376,903,376,913,376,923,376,933,376,943,376,953,376,963,376,973,376,983,376,993,376,1003,376,1013,376,1024,376,1034,376,1044,376,1054,376,1064,376,1074,376,1084,376,1094,376,1104,376,1114,376,1124,376,1134,376,1145,376,1155,376,1165,376,1175,376,1185,376,1205,376,1276,376,1286,376,1397,376,1407,384,-1224,384,-1214,384,-1203,384,-1193,384,-1183,384,-1173,384,-1163,384,-1152,384,-1142,384,-1132,384,-1122,384,-1112,384,-1101,384,-1091,384,-1081,384,-1071,384,-1061,384,-1050,384,-1040,384,-1030,384,-1020,384,-1010,384,-999,384,-989,384,-979,384,-969,384,-959,384,-948,384,-938,384,-928,384,-918,384,-908,384,-897,384,-887,384,-877,384,-867,384,-857,384,-846,384,-836,384,-826,384,-816,384,-806,384,-795,384,-785,384,-775,384,-765,384,-755,384,-82,384,-71,384,-61,384,-51,384,-41,384,-31,384,-20,384,-10,384,163,384,214,384,235,384,265,384,275,384,286,384,296,384,306,384,316,384,326,384,337,384,347,384,357,384,367,384,377,384,388,384,398,384,408,384,418,384,428,384,439,384,449,384,459,384,469,384,479,384,541,384,551,384,561,384,571,384,581,384,592,384,602,384,612,384,622,384,632,384,642,384,653,384,663,384,673,384,683,384,693,384,704,384,714,384,724,384,734,384,744,384,755,384,765,384,775,384,785,384,795,384,806,384,816,384,826,384,836,384,846,384,857,384,867,384,877,384,887,384,897,384,908,384,918,384,928,384,938,384,948,384,959,384,969,384,979,384,989,384,999,384,1010,384,1020,384,1030,384,1040,384,1050,384,1061,384,1071,384,1081,384,1091,384,1101,384,1112,384,1122,384,1132,384,1142,384,1152,384,1163,384,1173,384,1254,384,1265,384,1275,384,1397,384,1407,392,-1233,392,-1222,392,-1212,392,-1202,392,-1191,392,-1181,392,-1171,392,-1160,392,-1150,392,-1140,392,-1130,392,-1119,392,-1109,392,-1099,392,-1088,392,-1078,392,-1068,392,-1057,392,-1047,392,-1037,392,-1026,392,-1016,392,-1006,392,-995,392,-985,392,-975,392,-964,392,-954,392,-944,392,-934,392,-923,392,-913,392,-903,392,-892,392,-882,392,-872,392,-861,392,-851,392,-841,392,-830,392,-820,392,-810,392,-799,392,-789,392,-779,392,-768,392,-758,392,-748,392,-88,392,-77,392,-67,392,-57,392,-46,392,-36,392,-26,392,-15,392,-5,392,88,392,170,392,211,392,222,392,232,392,263,392,273,392,284,392,294,392,304,392,315,392,325,392,335,392,346,392,356,392,366,392,377,392,387,392,397,392,407,392,418,392,428,392,438,392,449,392,459,392,469,392,480,392,490,392,542,392,552,392,562,392,572,392,583,392,593,392,603,392,614,392,624,392,634,392,645,392,655,392,665,392,676,392,686,392,696,392,707,392,717,392,727,392,738,392,748,392,758,392,768,392,779,392,789,392,799,392,810,392,820,392,830,392,841,392,851,392,861,392,872,392,882,392,892,392,903,392,913,392,923,392,934,392,944,392,954,392,964,392,975,392,985,392,995,392,1006,392,1016,392,1026,392,1037,392,1047,392,1057,392,1068,392,1078,392,1088,392,1099,392,1109,392,1119,392,1130,392,1140,392,1150,392,1160,392,1171,392,1264,392,1274,392,1408,392,1418,400,-1231,400,-1221,400,-1210,400,-1200,400,-1190,400,-1179,400,-1169,400,-1158,400,-1148,400,-1137,400,-1127,400,-1117,400,-1106,400,-1096,400,-1085,400,-1075,400,-1064,400,-1054,400,-1043,400,-1033,400,-1023,400,-1012,400,-1002,400,-991,400,-981,400,-970,400,-960,400,-950,400,-939,400,-929,400,-918,400,-908,400,-897,400,-887,400,-877,400,-866,400,-856,400,-845,400,-835,400,-824,400,-814,400,-803,400,-793,400,-783,400,-772,400,-762,400,-751,400,-741,400,-83,400,-73,400,-63,400,-52,400,-42,400,-31,400,-21,400,-10,400,0,400,42,400,94,400,209,400,219,400,271,400,282,400,292,400,303,400,313,400,323,400,334,400,344,400,355,400,365,400,376,400,386,400,397,400,407,400,417,400,428,400,438,400,449,400,459,400,470,400,480,400,490,400,532,400,543,400,553,400,563,400,574,400,584,400,595,400,605,400,616,400,626,400,637,400,647,400,657,400,668,400,678,400,689,400,699,400,710,400,720,400,730,400,741,400,751,400,762,400,772,400,783,400,793,400,803,400,814,400,824,400,835,400,845,400,856,400,866,400,877,400,887,400,897,400,908,400,918,400,929,400,939,400,950,400,960,400,970,400,981,400,991,400,1002,400,1012,400,1023,400,1033,400,1043,400,1054,400,1064,400,1075,400,1085,400,1096,400,1106,400,1117,400,1127,400,1137,400,1148,400,1158,400,1169,400,1179,400,1190,400,1221,400,1231,400,1242,400,1252,400,1263,400,1273,400,1409,400,1419,408,-1240,408,-1230,408,-1219,408,-1209,408,-1198,408,-1188,408,-1177,408,-1167,408,-1156,408,-1145,408,-1135,408,-1124,408,-1114,408,-1103,408,-1093,408,-1082,408,-1072,408,-1061,408,-1050,408,-1040,408,-1029,408,-1019,408,-1008,408,-998,408,-987,408,-977,408,-966,408,-955,408,-945,408,-934,408,-924,408,-913,408,-903,408,-892,408,-882,408,-871,408,-860,408,-850,408,-839,408,-829,408,-818,408,-808,408,-797,408,-787,408,-776,408,-765,408,-755,408,-744,408,-734,408,-79,408,-69,408,-58,408,-48,408,-37,408,-26,408,-16,408,-5,408,5,408,90,408,153,408,164,408,174,408,195,408,206,408,216,408,227,408,238,408,269,408,301,408,311,408,322,408,333,408,343,408,354,408,364,408,375,408,385,408,396,408,406,408,417,408,428,408,438,408,449,408,459,408,470,408,480,408,491,408,544,408,554,408,565,408,575,408,586,408,596,408,607,408,618,408,628,408,639,408,649,408,660,408,670,408,681,408,691,408,702,408,713,408,723,408,734,408,744,408,755,408,765,408,776,408,787,408,797,408,808,408,818,408,829,408,839,408,850,408,860,408,871,408,882,408,892,408,903,408,913,408,924,408,934,408,945,408,955,408,966,408,977,408,987,408,998,408,1008,408,1019,408,1029,408,1040,408,1050,408,1061,408,1072,408,1082,408,1093,408,1103,408,1114,408,1124,408,1135,408,1145,408,1156,408,1167,408,1177,408,1188,408,1198,408,1209,408,1230,408,1240,408,1251,408,1262,408,1272,408,1283,408,1293,408,1409,416,-1239,416,-1228,416,-1218,416,-1207,416,-1196,416,-1186,416,-1175,416,-1164,416,-1154,416,-1143,416,-1132,416,-1122,416,-1111,416,-1100,416,-1090,416,-1079,416,-1068,416,-1058,416,-1047,416,-1036,416,-1026,416,-1015,416,-1004,416,-993,416,-983,416,-972,416,-961,416,-951,416,-940,416,-929,416,-919,416,-908,416,-897,416,-887,416,-876,416,-865,416,-855,416,-844,416,-833,416,-823,416,-812,416,-801,416,-791,416,-780,416,-769,416,-758,416,-748,416,-737,416,-726,416,-716,416,-705,416,-85,416,-75,416,-64,416,-53,416,-43,416,-32,416,-21,416,-11,416,0,416,11,416,21,416,128,416,139,416,150,416,203,416,214,416,224,416,235,416,246,416,256,416,267,416,278,416,331,416,342,416,353,416,417,416,427,416,438,416,449,416,459,416,470,416,481,416,545,416,555,416,566,416,577,416,588,416,598,416,609,416,620,416,630,416,641,416,652,416,662,416,673,416,684,416,694,416,705,416,716,416,726,416,737,416,748,416,758,416,769,416,780,416,791,416,801,416,812,416,823,416,833,416,844,416,855,416,865,416,876,416,887,416,897,416,908,416,919,416,929,416,940,416,951,416,961,416,972,416,983,416,993,416,1004,416,1015,416,1026,416,1036,416,1047,416,1058,416,1068,416,1079,416,1090,416,1100,416,1111,416,1122,416,1132,416,1143,416,1154,416,1164,416,1175,416,1186,416,1196,416,1207,416,1218,416,1228,416,1239,416,1250,416,1261,416,1271,416,1282,416,1293,424,-1236,424,-1225,424,-1214,424,-1204,424,-1193,424,-1182,424,-1171,424,-1160,424,-1149,424,-1139,424,-1128,424,-1117,424,-1106,424,-1095,424,-1084,424,-1073,424,-1063,424,-1052,424,-1041,424,-1030,424,-1019,424,-1008,424,-998,424,-987,424,-976,424,-965,424,-954,424,-943,424,-933,424,-922,424,-911,424,-900,424,-889,424,-878,424,-867,424,-857,424,-846,424,-835,424,-824,424,-813,424,-802,424,-792,424,-781,424,-770,424,-759,424,-748,424,-737,424,-727,424,-716,424,-87,424,-76,424,-65,424,-54,424,-43,424,-33,424,-22,424,-11,424,0,424,11,424,22,424,87,424,119,424,130,424,141,424,195,424,206,424,217,424,228,424,239,424,249,424,260,424,271,424,423,424,434,424,445,424,455,424,466,424,477,424,531,424,542,424,553,424,564,424,575,424,586,424,596,424,607,424,618,424,629,424,640,424,651,424,661,424,672,424,683,424,694,424,705,424,716,424,727,424,737,424,748,424,759,424,770,424,781,424,792,424,802,424,813,424,824,424,835,424,846,424,857,424,867,424,878,424,889,424,900,424,911,424,922,424,933,424,943,424,954,424,965,424,976,424,987,424,998,424,1008,424,1019,424,1030,424,1041,424,1052,424,1063,424,1073,424,1084,424,1095,424,1106,424,1117,424,1128,424,1139,424,1149,424,1160,424,1171,424,1182,424,1193,424,1204,424,1214,424,1225,424,1236,424,1247,424,1258,424,1269,424,1280,424,1290,424,1301,424,1399,424,1410,424,1431,432,-1235,432,-1224,432,-1213,432,-1202,432,-1191,432,-1180,432,-1169,432,-1158,432,-1147,432,-1136,432,-1125,432,-1114,432,-1103,432,-1092,432,-1081,432,-1070,432,-1059,432,-1048,432,-1037,432,-1026,432,-1015,432,-1004,432,-993,432,-982,432,-971,432,-960,432,-949,432,-938,432,-927,432,-916,432,-905,432,-895,432,-884,432,-873,432,-862,432,-851,432,-840,432,-829,432,-818,432,-807,432,-796,432,-785,432,-774,432,-763,432,-752,432,-741,432,-730,432,-719,432,-708,432,-82,432,-71,432,-60,432,-49,432,-38,432,-27,432,-16,432,-5,432,5,432,16,432,27,432,60,432,115,432,126,432,137,432,181,432,192,432,203,432,214,432,225,432,236,432,247,432,258,432,269,432,412,432,423,432,434,432,445,432,455,432,466,432,521,432,532,432,543,432,554,432,565,432,576,432,587,432,598,432,609,432,620,432,631,432,642,432,653,432,664,432,675,432,686,432,697,432,708,432,719,432,730,432,741,432,752,432,763,432,774,432,785,432,796,432,807,432,818,432,829,432,840,432,851,432,862,432,873,432,884,432,895,432,905,432,916,432,927,432,938,432,949,432,960,432,971,432,982,432,993,432,1004,432,1015,432,1026,432,1037,432,1048,432,1059,432,1070,432,1081,432,1092,432,1103,432,1114,432,1125,432,1136,432,1147,432,1158,432,1169,432,1180,432,1191,432,1202,432,1213,432,1224,432,1235,432,1246,432,1257,432,1268,432,1279,432,1290,432,1301,432,1312,432,1334,432,1345,432,1421,432,1432,432,1443,432,1454,440,-1233,440,-1222,440,-1211,440,-1200,440,-1189,440,-1178,440,-1167,440,-1156,440,-1144,440,-1133,440,-1122,440,-1111,440,-1100,440,-1089,440,-1078,440,-1067,440,-1056,440,-1044,440,-1033,440,-1022,440,-1011,440,-1000,440,-989,440,-978,440,-967,440,-956,440,-944,440,-933,440,-922,440,-911,440,-900,440,-889,440,-878,440,-867,440,-856,440,-844,440,-833,440,-822,440,-811,440,-800,440,-789,440,-778,440,-767,440,-756,440,-744,440,-733,440,-722,440,-711,440,-700,440,-656,440,-11,440,0,440,11,440,22,440,33,440,44,440,56,440,67,440,78,440,111,440,122,440,156,440,167,440,178,440,189,440,200,440,211,440,222,440,233,440,244,440,256,440,267,440,278,440,400,440,411,440,422,440,433,440,444,440,456,440,467,440,511,440,522,440,533,440,544,440,556,440,567,440,578,440,589,440,600,440,611,440,622,440,633,440,644,440,656,440,667,440,678,440,689,440,700,440,711,440,722,440,733,440,744,440,756,440,767,440,778,440,789,440,800,440,811,440,822,440,833,440,844,440,856,440,867,440,878,440,889,440,900,440,911,440,922,440,933,440,944,440,956,440,967,440,978,440,989,440,1000,440,1011,440,1022,440,1033,440,1044,440,1056,440,1067,440,1078,440,1089,440,1100,440,1111,440,1122,440,1133,440,1144,440,1156,440,1167,440,1178,440,1189,440,1200,440,1211,440,1222,440,1233,440,1244,440,1256,440,1267,440,1278,440,1289,440,1300,440,1311,440,1322,440,1333,440,1344,440,1356,440,1422,440,1433,448,-1230,448,-1219,448,-1208,448,-1196,448,-1185,448,-1174,448,-1162,448,-1151,448,-1140,448,-1129,448,-1117,448,-1106,448,-1095,448,-1083,448,-1072,448,-1061,448,-1050,448,-1038,448,-1027,448,-1016,448,-1004,448,-993,448,-982,448,-971,448,-959,448,-948,448,-937,448,-925,448,-914,448,-903,448,-892,448,-880,448,-869,448,-858,448,-846,448,-835,448,-824,448,-813,448,-801,448,-790,448,-779,448,-767,448,-756,448,-745,448,-734,448,-722,448,-711,448,-700,448,-688,448,-677,448,-655,448,-643,448,-632,448,-11,448,0,448,11,448,23,448,34,448,45,448,56,448,68,448,79,448,90,448,102,448,113,448,147,448,158,448,169,448,181,448,192,448,203,448,214,448,226,448,237,448,248,448,260,448,271,448,282,448,339,448,384,448,395,448,406,448,418,448,429,448,440,448,451,448,463,448,519,448,530,448,542,448,553,448,564,448,576,448,587,448,598,448,609,448,621,448,632,448,643,448,655,448,666,448,677,448,688,448,700,448,711,448,722,448,734,448,745,448,756,448,767,448,779,448,790,448,801,448,813,448,824,448,835,448,846,448,858,448,869,448,880,448,892,448,903,448,914,448,925,448,937,448,948,448,959,448,971,448,982,448,993,448,1004,448,1016,448,1027,448,1038,448,1050,448,1061,448,1072,448,1083,448,1095,448,1106,448,1117,448,1129,448,1140,448,1151,448,1162,448,1174,448,1185,448,1196,448,1208,448,1219,448,1230,448,1241,448,1253,448,1264,448,1275,448,1287,448,1298,448,1309,448,1320,448,1332,448,1343,448,1354,448,1422,456,-1229,456,-1217,456,-1206,456,-1194,456,-1183,456,-1171,456,-1160,456,-1149,456,-1137,456,-1126,456,-1114,456,-1103,456,-1091,456,-1080,456,-1069,456,-1057,456,-1046,456,-1034,456,-1023,456,-1011,456,-1000,456,-989,456,-977,456,-966,456,-954,456,-943,456,-931,456,-920,456,-909,456,-897,456,-886,456,-874,456,-863,456,-851,456,-840,456,-829,456,-817,456,-806,456,-794,456,-783,456,-771,456,-760,456,-749,456,-737,456,-726,456,-714,456,-703,456,-691,456,-680,456,-669,456,-657,456,-646,456,-634,456,-623,456,-611,456,-6,456,6,456,17,456,29,456,40,456,51,456,63,456,74,456,86,456,97,456,109,456,120,456,143,456,154,456,166,456,177,456,189,456,200,456,211,456,223,456,234,456,246,456,257,456,269,456,280,456,291,456,337,456,349,456,383,456,394,456,406,456,417,456,429,456,440,456,451,456,463,456,474,456,531,456,543,456,554,456,566,456,577,456,589,456,600,456,611,456,623,456,634,456,646,456,657,456,669,456,680,456,691,456,703,456,714,456,726,456,737,456,749,456,760,456,771,456,783,456,794,456,806,456,817,456,829,456,840,456,851,456,863,456,874,456,886,456,897,456,909,456,920,456,931,456,943,456,954,456,966,456,977,456,989,456,1000,456,1011,456,1023,456,1034,456,1046,456,1057,456,1069,456,1080,456,1091,456,1103,456,1114,456,1126,456,1137,456,1149,456,1160,456,1171,456,1183,456,1194,456,1206,456,1217,456,1229,456,1240,456,1251,456,1263,456,1274,456,1286,456,1297,456,1309,456,1320,456,1331,456,1343,456,1354,456,1366,464,-1237,464,-1225,464,-1214,464,-1202,464,-1190,464,-1179,464,-1167,464,-1155,464,-1144,464,-1132,464,-1121,464,-1109,464,-1097,464,-1086,464,-1074,464,-1063,464,-1051,464,-1039,464,-1028,464,-1016,464,-1005,464,-993,464,-981,464,-970,464,-958,464,-946,464,-935,464,-923,464,-912,464,-900,464,-888,464,-877,464,-865,464,-854,464,-842,464,-830,464,-819,464,-807,464,-795,464,-784,464,-772,464,-761,464,-749,464,-737,464,-726,464,-714,464,-703,464,-691,464,-679,464,-668,464,-656,464,-633,464,-621,464,-610,464,-6,464,6,464,17,464,29,464,41,464,52,464,64,464,75,464,87,464,99,464,110,464,122,464,134,464,145,464,157,464,168,464,180,464,192,464,203,464,215,464,226,464,238,464,250,464,261,464,273,464,285,464,296,464,331,464,343,464,354,464,389,464,401,464,412,464,424,464,435,464,447,464,459,464,470,464,482,464,540,464,552,464,563,464,575,464,586,464,598,464,610,464,621,464,633,464,645,464,656,464,668,464,679,464,691,464,703,464,714,464,726,464,737,464,749,464,761,464,772,464,784,464,795,464,807,464,819,464,830,464,842,464,854,464,865,464,877,464,888,464,900,464,912,464,923,464,935,464,946,464,958,464,970,464,981,464,993,464,1005,464,1016,464,1028,464,1039,464,1051,464,1063,464,1074,464,1086,464,1097,464,1109,464,1121,464,1132,464,1144,464,1155,464,1167,464,1179,464,1190,464,1202,464,1214,464,1225,464,1237,464,1248,464,1260,464,1272,464,1283,464,1295,464,1306,464,1318,464,1330,464,1341,464,1353,464,1365,464,1376,464,1423,464,1434,472,-1235,472,-1224,472,-1212,472,-1200,472,-1188,472,-1176,472,-1165,472,-1153,472,-1141,472,-1129,472,-1118,472,-1106,472,-1094,472,-1082,472,-1071,472,-1059,472,-1047,472,-1035,472,-1024,472,-1012,472,-1000,472,-988,472,-976,472,-965,472,-953,472,-941,472,-929,472,-918,472,-906,472,-894,472,-882,472,-871,472,-859,472,-847,472,-835,472,-824,472,-812,472,-800,472,-788,472,-776,472,-765,472,-753,472,-741,472,-729,472,-718,472,-694,472,-682,472,-671,472,-659,472,-553,472,-529,472,-12,472,0,472,12,472,24,472,35,472,47,472,59,472,71,472,82,472,94,472,106,472,118,472,129,472,141,472,153,472,165,472,176,472,188,472,200,472,212,472,224,472,235,472,247,472,259,472,271,472,282,472,294,472,306,472,318,472,329,472,341,472,353,472,365,472,376,472,388,472,400,472,412,472,424,472,435,472,447,472,459,472,471,472,482,472,494,472,506,472,518,472,529,472,541,472,553,472,565,472,576,472,588,472,600,472,612,472,624,472,635,472,647,472,659,472,671,472,682,472,694,472,706,472,718,472,729,472,741,472,753,472,765,472,776,472,788,472,800,472,812,472,824,472,835,472,847,472,859,472,871,472,882,472,894,472,906,472,918,472,929,472,941,472,953,472,965,472,976,472,988,472,1000,472,1012,472,1024,472,1035,472,1047,472,1059,472,1071,472,1082,472,1094,472,1106,472,1118,472,1129,472,1141,472,1153,472,1165,472,1176,472,1188,472,1200,472,1212,472,1224,472,1235,472,1247,472,1259,472,1271,472,1282,472,1294,472,1306,472,1318,472,1329,472,1341,472,1353,472,1365,472,1376,472,1424,480,-1244,480,-1232,480,-1220,480,-1208,480,-1196,480,-1184,480,-1172,480,-1160,480,-1148,480,-1136,480,-1124,480,-1112,480,-1100,480,-1088,480,-1076,480,-1064,480,-1052,480,-1041,480,-1029,480,-1017,480,-1005,480,-993,480,-981,480,-969,480,-957,480,-945,480,-933,480,-921,480,-909,480,-897,480,-885,480,-873,480,-861,480,-849,480,-837,480,-825,480,-813,480,-801,480,-789,480,-777,480,-765,480,-753,480,-742,480,-730,480,-718,480,-706,480,-694,480,-682,480,-670,480,-586,480,-574,480,-562,480,-550,480,-538,480,-36,480,-24,480,-12,480,0,480,12,480,24,480,36,480,48,480,60,480,72,480,84,480,96,480,108,480,120,480,132,480,144,480,155,480,167,480,179,480,191,480,203,480,215,480,227,480,239,480,251,480,263,480,275,480,287,480,299,480,311,480,323,480,335,480,347,480,359,480,371,480,383,480,395,480,407,480,419,480,431,480,443,480,454,480,466,480,478,480,490,480,502,480,514,480,526,480,538,480,550,480,562,480,574,480,586,480,598,480,610,480,622,480,634,480,646,480,658,480,670,480,682,480,694,480,706,480,718,480,730,480,742,480,753,480,765,480,777,480,789,480,801,480,813,480,825,480,837,480,849,480,861,480,873,480,885,480,897,480,909,480,921,480,933,480,945,480,957,480,969,480,981,480,993,480,1005,480,1017,480,1029,480,1041,480,1052,480,1064,480,1076,480,1088,480,1100,480,1112,480,1124,480,1136,480,1148,480,1160,480,1172,480,1184,480,1196,480,1208,480,1220,480,1232,480,1244,480,1256,480,1268,480,1280,480,1292,480,1304,480,1316,480,1328,480,1340,480,1351,480,1363,480,1375,480,1387,480,1423,488,-1241,488,-1216,488,-1204,488,-1192,488,-1180,488,-1168,488,-1155,488,-1143,488,-1131,488,-1119,488,-1107,488,-1095,488,-1082,488,-1070,488,-1058,488,-1046,488,-1034,488,-1022,488,-1009,488,-997,488,-985,488,-973,488,-961,488,-949,488,-936,488,-924,488,-912,488,-900,488,-888,488,-876,488,-864,488,-851,488,-839,488,-827,488,-815,488,-803,488,-791,488,-778,488,-766,488,-754,488,-742,488,-730,488,-718,488,-705,488,-693,488,-669,488,-657,488,-645,488,-584,488,-572,488,-559,488,-547,488,-12,488,0,488,12,488,24,488,36,488,49,488,61,488,73,488,85,488,97,488,109,488,122,488,134,488,146,488,158,488,170,488,182,488,195,488,207,488,219,488,231,488,243,488,255,488,268,488,280,488,292,488,304,488,316,488,328,488,341,488,353,488,365,488,377,488,389,488,401,488,414,488,426,488,438,488,450,488,462,488,474,488,486,488,499,488,511,488,523,488,535,488,547,488,559,488,572,488,584,488,596,488,608,488,620,488,632,488,645,488,657,488,669,488,681,488,693,488,705,488,718,488,730,488,742,488,754,488,766,488,778,488,791,488,803,488,815,488,827,488,839,488,851,488,864,488,876,488,888,488,900,488,912,488,924,488,936,488,949,488,961,488,973,488,985,488,997,488,1009,488,1022,488,1034,488,1046,488,1058,488,1070,488,1082,488,1095,488,1107,488,1119,488,1131,488,1143,488,1155,488,1168,488,1180,488,1192,488,1204,488,1216,488,1228,488,1241,488,1253,488,1265,488,1277,488,1289,488,1301,488,1314,488,1326,488,1338,488,1350,488,1362,488,1374,488,1386,488,1399,488,1423,496,-1264,496,-1251,496,-1239,496,-1227,496,-1214,496,-1202,496,-1190,496,-1177,496,-1165,496,-1153,496,-1140,496,-1128,496,-1116,496,-1103,496,-1091,496,-1079,496,-1066,496,-1054,496,-1042,496,-1029,496,-1017,496,-1005,496,-992,496,-980,496,-968,496,-955,496,-943,496,-931,496,-918,496,-906,496,-894,496,-882,496,-869,496,-857,496,-845,496,-832,496,-820,496,-808,496,-795,496,-783,496,-771,496,-758,496,-746,496,-734,496,-721,496,-709,496,-697,496,-684,496,-635,496,-573,496,-561,496,-18,496,6,496,18,496,31,496,43,496,55,496,68,496,80,496,92,496,105,496,117,496,129,496,142,496,154,496,166,496,179,496,191,496,203,496,216,496,228,496,240,496,253,496,265,496,277,496,290,496,302,496,314,496,327,496,339,496,351,496,364,496,376,496,388,496,401,496,413,496,425,496,438,496,450,496,462,496,475,496,487,496,499,496,512,496,524,496,536,496,549,496,561,496,573,496,586,496,598,496,610,496,623,496,635,496,647,496,660,496,672,496,684,496,697,496,709,496,721,496,734,496,746,496,758,496,771,496,783,496,795,496,808,496,820,496,832,496,845,496,857,496,869,496,882,496,894,496,906,496,918,496,931,496,943,496,955,496,968,496,980,496,992,496,1005,496,1017,496,1029,496,1042,496,1054,496,1066,496,1079,496,1091,496,1103,496,1116,496,1128,496,1140,496,1153,496,1165,496,1177,496,1190,496,1202,496,1214,496,1227,496,1239,496,1251,496,1264,496,1276,496,1288,496,1301,496,1313,496,1325,496,1338,496,1350,496,1362,496,1375,496,1387,496,1399,496,1424,496,1436,504,-1273,504,-1261,504,-1248,504,-1236,504,-1223,504,-1210,504,-1198,504,-1185,504,-1173,504,-1160,504,-1148,504,-1135,504,-1123,504,-1110,504,-1098,504,-1085,504,-1072,504,-1060,504,-1047,504,-1035,504,-1022,504,-1010,504,-997,504,-985,504,-972,504,-960,504,-947,504,-934,504,-922,504,-909,504,-897,504,-884,504,-872,504,-859,504,-847,504,-834,504,-822,504,-809,504,-797,504,-784,504,-771,504,-759,504,-746,504,-734,504,-721,504,-709,504,-696,504,-684,504,-671,504,-659,504,-646,504,-633,504,-621,504,-608,504,-571,504,-44,504,19,504,31,504,44,504,56,504,69,504,82,504,94,504,107,504,119,504,132,504,144,504,157,504,169,504,182,504,194,504,207,504,220,504,232,504,245,504,257,504,270,504,282,504,295,504,307,504,320,504,332,504,345,504,357,504,370,504,383,504,395,504,408,504,420,504,433,504,445,504,458,504,470,504,483,504,495,504,508,504,521,504,533,504,546,504,558,504,571,504,583,504,596,504,608,504,621,504,633,504,646,504,659,504,671,504,684,504,696,504,709,504,721,504,734,504,746,504,759,504,771,504,784,504,797,504,809,504,822,504,834,504,847,504,859,504,872,504,884,504,897,504,909,504,922,504,934,504,947,504,960,504,972,504,985,504,997,504,1010,504,1022,504,1035,504,1047,504,1060,504,1072,504,1085,504,1098,504,1110,504,1123,504,1135,504,1148,504,1160,504,1173,504,1185,504,1198,504,1210,504,1223,504,1236,504,1248,504,1261,504,1273,504,1286,504,1298,504,1311,504,1323,504,1336,504,1348,504,1361,504,1374,504,1386,504,1399,504,1424,504,1436,512,-1270,512,-1257,512,-1245,512,-1232,512,-1219,512,-1206,512,-1194,512,-1181,512,-1168,512,-1155,512,-1143,512,-1130,512,-1117,512,-1104,512,-1091,512,-1079,512,-1066,512,-1053,512,-1040,512,-1028,512,-1015,512,-1002,512,-989,512,-977,512,-964,512,-951,512,-938,512,-926,512,-913,512,-900,512,-887,512,-874,512,-862,512,-849,512,-836,512,-823,512,-811,512,-785,512,-772,512,-760,512,-747,512,-734,512,-721,512,-709,512,-696,512,-683,512,-670,512,-657,512,-645,512,-632,512,-619,512,-606,512,-594,512,-19,512,-6,512,6,512,32,512,45,512,57,512,70,512,83,512,96,512,109,512,121,512,134,512,147,512,160,512,172,512,185,512,198,512,211,512,223,512,236,512,249,512,262,512,274,512,287,512,300,512,313,512,326,512,338,512,351,512,364,512,377,512,389,512,402,512,415,512,428,512,440,512,453,512,466,512,479,512,491,512,504,512,517,512,530,512,543,512,555,512,568,512,581,512,594,512,606,512,619,512,632,512,645,512,657,512,670,512,683,512,696,512,709,512,721,512,734,512,747,512,760,512,772,512,785,512,798,512,811,512,823,512,836,512,849,512,862,512,874,512,887,512,900,512,913,512,926,512,938,512,951,512,964,512,977,512,989,512,1002,512,1015,512,1028,512,1040,512,1053,512,1066,512,1079,512,1091,512,1104,512,1117,512,1130,512,1143,512,1155,512,1168,512,1181,512,1194,512,1206,512,1219,512,1232,512,1245,512,1257,512,1270,512,1283,512,1296,512,1309,512,1321,512,1334,512,1347,512,1360,512,1372,512,1385,512,1398,512,1423,520,-1761,520,-1280,520,-1267,520,-1254,520,-1241,520,-1228,520,-1215,520,-1202,520,-1189,520,-1176,520,-1163,520,-1150,520,-1137,520,-1124,520,-1111,520,-1098,520,-1085,520,-1072,520,-1059,520,-1046,520,-1033,520,-1020,520,-1007,520,-994,520,-981,520,-968,520,-955,520,-942,520,-929,520,-916,520,-903,520,-890,520,-877,520,-864,520,-851,520,-838,520,-825,520,-812,520,-786,520,-773,520,-760,520,-747,520,-734,520,-721,520,-708,520,-695,520,-682,520,-669,520,-656,520,-643,520,-630,520,-617,520,-604,520,-591,520,-578,520,-565,520,-97,520,-84,520,-45,520,-32,520,-19,520,-6,520,6,520,45,520,58,520,71,520,84,520,97,520,110,520,123,520,136,520,149,520,162,520,175,520,188,520,201,520,214,520,227,520,240,520,253,520,266,520,279,520,292,520,305,520,318,520,331,520,344,520,357,520,370,520,383,520,396,520,409,520,422,520,435,520,448,520,461,520,474,520,487,520,500,520,513,520,526,520,539,520,552,520,565,520,578,520,591,520,604,520,617,520,630,520,643,520,656,520,669,520,682,520,695,520,708,520,721,520,734,520,747,520,760,520,773,520,786,520,799,520,812,520,825,520,838,520,851,520,864,520,877,520,890,520,903,520,916,520,929,520,942,520,955,520,968,520,981,520,994,520,1007,520,1020,520,1033,520,1046,520,1059,520,1072,520,1085,520,1098,520,1111,520,1124,520,1137,520,1150,520,1163,520,1176,520,1189,520,1202,520,1215,520,1228,520,1241,520,1254,520,1267,520,1280,520,1293,520,1306,520,1319,520,1332,520,1345,520,1358,520,1371,520,1384,520,1397,520,1410,520,1423,520,1566,520,1579,528,-1290,528,-1277,528,-1264,528,-1251,528,-1237,528,-1224,528,-1211,528,-1198,528,-1185,528,-1171,528,-1158,528,-1145,528,-1132,528,-1118,528,-1105,528,-1092,528,-1079,528,-1065,528,-1052,528,-1039,528,-1026,528,-1012,528,-999,528,-986,528,-973,528,-960,528,-946,528,-933,528,-920,528,-907,528,-893,528,-880,528,-867,528,-854,528,-840,528,-827,528,-787,528,-774,528,-761,528,-748,528,-735,528,-721,528,-708,528,-695,528,-682,528,-668,528,-655,528,-642,528,-629,528,-615,528,-602,528,-589,528,-576,528,-562,528,-86,528,-73,528,-33,528,-20,528,-7,528,7,528,60,528,73,528,86,528,99,528,113,528,126,528,139,528,152,528,165,528,179,528,192,528,205,528,218,528,232,528,245,528,258,528,271,528,285,528,298,528,311,528,324,528,338,528,351,528,364,528,377,528,390,528,404,528,417,528,430,528,443,528,457,528,470,528,483,528,496,528,510,528,523,528,536,528,549,528,563,528,576,528,589,528,602,528,615,528,629,528,642,528,655,528,668,528,682,528,695,528,708,528,721,528,735,528,748,528,761,528,774,528,788,528,801,528,814,528,827,528,840,528,854,528,867,528,880,528,893,528,907,528,920,528,933,528,946,528,960,528,973,528,986,528,999,528,1013,528,1026,528,1039,528,1052,528,1065,528,1079,528,1092,528,1105,528,1118,528,1132,528,1145,528,1158,528,1171,528,1185,528,1198,528,1211,528,1224,528,1238,528,1251,528,1264,528,1277,528,1290,528,1304,528,1317,528,1330,528,1343,528,1357,528,1370,528,1383,528,1396,528,1410,528,1423,528,1568,528,1582,536,-1328,536,-1301,536,-1274,536,-1261,536,-1247,536,-1234,536,-1220,536,-1207,536,-1193,536,-1180,536,-1166,536,-1153,536,-1139,536,-1126,536,-1112,536,-1099,536,-1085,536,-1072,536,-1058,536,-1045,536,-1031,536,-1018,536,-1004,536,-991,536,-978,536,-964,536,-951,536,-937,536,-924,536,-910,536,-897,536,-883,536,-870,536,-856,536,-843,536,-829,536,-789,536,-775,536,-762,536,-748,536,-735,536,-721,536,-708,536,-694,536,-681,536,-667,536,-654,536,-640,536,-627,536,-613,536,-587,536,-88,536,-74,536,-20,536,-7,536,74,536,88,536,101,536,115,536,128,536,142,536,155,536,169,536,182,536,196,536,209,536,222,536,236,536,249,536,263,536,276,536,290,536,303,536,317,536,330,536,344,536,357,536,371,536,384,536,398,536,411,536,425,536,438,536,452,536,465,536,479,536,492,536,506,536,519,536,533,536,546,536,560,536,573,536,587,536,600,536,613,536,627,536,640,536,654,536,667,536,681,536,694,536,708,536,721,536,735,536,748,536,762,536,775,536,789,536,802,536,816,536,829,536,843,536,856,536,870,536,883,536,897,536,910,536,924,536,937,536,951,536,964,536,978,536,991,536,1004,536,1018,536,1031,536,1045,536,1058,536,1072,536,1085,536,1099,536,1112,536,1126,536,1139,536,1153,536,1166,536,1180,536,1193,536,1207,536,1220,536,1234,536,1247,536,1261,536,1274,536,1288,536,1301,536,1315,536,1328,536,1342,536,1355,536,1369,536,1382,536,1396,536,1571,536,1584,536,1598,544,-1298,544,-1285,544,-1271,544,-1257,544,-1244,544,-1230,544,-1216,544,-1202,544,-1189,544,-1175,544,-1161,544,-1147,544,-1134,544,-1120,544,-1106,544,-1092,544,-1079,544,-1065,544,-1051,544,-1037,544,-1024,544,-1010,544,-996,544,-982,544,-969,544,-955,544,-941,544,-927,544,-914,544,-900,544,-886,544,-873,544,-859,544,-845,544,-831,544,-790,544,-776,544,-763,544,-749,544,-735,544,-721,544,-708,544,-694,544,-680,544,-666,544,-653,544,-639,544,-625,544,-611,544,-598,544,-584,544,-76,544,-62,544,-34,544,-21,544,-7,544,89,544,103,544,172,544,185,544,199,544,213,544,227,544,240,544,254,544,268,544,282,544,295,544,309,544,323,544,337,544,350,544,364,544,378,544,392,544,405,544,419,544,433,544,447,544,460,544,474,544,488,544,502,544,515,544,529,544,543,544,556,544,570,544,584,544,598,544,611,544,625,544,639,544,653,544,666,544,680,544,694,544,708,544,721,544,735,544,749,544,763,544,776,544,790,544,804,544,818,544,831,544,845,544,859,544,873,544,886,544,900,544,914,544,927,544,941,544,955,544,969,544,982,544,996,544,1010,544,1024,544,1037,544,1051,544,1065,544,1079,544,1092,544,1106,544,1120,544,1134,544,1147,544,1161,544,1175,544,1189,544,1202,544,1216,544,1230,544,1244,544,1257,544,1271,544,1285,544,1298,544,1312,544,1326,544,1340,544,1353,544,1367,544,1560,544,1573,544,1587,544,1601,552,-1324,552,-1310,552,-1296,552,-1282,552,-1268,552,-1254,552,-1240,552,-1226,552,-1212,552,-1198,552,-1184,552,-1170,552,-1156,552,-1142,552,-1128,552,-1114,552,-1100,552,-1086,552,-1072,552,-1058,552,-1044,552,-1030,552,-1016,552,-1002,552,-988,552,-974,552,-960,552,-946,552,-932,552,-918,552,-904,552,-889,552,-875,552,-861,552,-847,552,-833,552,-777,552,-763,552,-749,552,-735,552,-721,552,-707,552,-693,552,-679,552,-665,552,-651,552,-637,552,-623,552,-609,552,-77,552,-63,552,-49,552,-35,552,-21,552,91,552,105,552,119,552,147,552,217,552,231,552,245,552,259,552,273,552,287,552,301,552,315,552,329,552,343,552,357,552,371,552,385,552,399,552,413,552,427,552,441,552,455,552,469,552,483,552,497,552,511,552,525,552,539,552,553,552,567,552,581,552,595,552,609,552,623,552,637,552,651,552,665,552,679,552,693,552,707,552,721,552,735,552,749,552,763,552,777,552,791,552,805,552,819,552,833,552,847,552,861,552,875,552,889,552,904,552,918,552,932,552,946,552,960,552,974,552,988,552,1002,552,1016,552,1030,552,1044,552,1058,552,1072,552,1086,552,1100,552,1114,552,1128,552,1142,552,1156,552,1170,552,1184,552,1198,552,1212,552,1226,552,1240,552,1254,552,1268,552,1282,552,1296,552,1310,552,1324,552,1338,552,1352,552,1562,552,1576,552,1590,552,1604,552,1660,560,-1593,560,-1336,560,-1321,560,-1307,560,-1293,560,-1279,560,-1264,560,-1250,560,-1236,560,-1221,560,-1207,560,-1193,560,-1179,560,-1164,560,-1150,560,-1136,560,-1121,560,-1107,560,-1093,560,-1079,560,-1064,560,-1050,560,-1036,560,-1021,560,-1007,560,-993,560,-979,560,-964,560,-950,560,-936,560,-921,560,-907,560,-893,560,-879,560,-764,560,-750,560,-736,560,-721,560,-707,560,-693,560,-679,560,-664,560,-650,560,-636,560,-621,560,-36,560,93,560,121,560,136,560,221,560,236,560,250,560,264,560,279,560,293,560,307,560,321,560,336,560,350,560,364,560,379,560,393,560,407,560,421,560,436,560,450,560,464,560,479,560,493,560,507,560,521,560,536,560,550,560,564,560,579,560,593,560,607,560,621,560,636,560,650,560,664,560,679,560,693,560,707,560,721,560,736,560,750,560,764,560,779,560,793,560,807,560,821,560,836,560,850,560,864,560,879,560,893,560,907,560,921,560,936,560,950,560,964,560,979,560,993,560,1007,560,1021,560,1036,560,1050,560,1064,560,1079,560,1093,560,1107,560,1121,560,1136,560,1150,560,1164,560,1179,560,1193,560,1207,560,1221,560,1236,560,1250,560,1264,560,1279,560,1293,560,1307,560,1321,560,1336,560,1350,560,1364,560,1564,560,1579,560,1593,560,1607,568,-1580,568,-1332,568,-1317,568,-1302,568,-1288,568,-1273,568,-1259,568,-1244,568,-1229,568,-1215,568,-1200,568,-1185,568,-1171,568,-1156,568,-1141,568,-1127,568,-1112,568,-1098,568,-1083,568,-1068,568,-1054,568,-1039,568,-1024,568,-1010,568,-995,568,-980,568,-966,568,-951,568,-937,568,-922,568,-907,568,-893,568,-761,568,-746,568,-732,568,-717,568,-702,568,-688,568,-673,568,-659,568,-644,568,-629,568,-615,568,-44,568,-29,568,88,568,102,568,132,568,146,568,161,568,220,568,234,568,249,568,263,568,278,568,293,568,307,568,322,568,337,568,351,568,366,568,380,568,395,568,410,568,424,568,439,568,454,568,468,568,483,568,498,568,512,568,527,568,541,568,556,568,571,568,585,568,600,568,615,568,629,568,644,568,659,568,673,568,688,568,702,568,717,568,732,568,746,568,761,568,776,568,790,568,805,568,820,568,834,568,849,568,863,568,878,568,893,568,907,568,922,568,937,568,951,568,966,568,980,568,995,568,1010,568,1024,568,1039,568,1054,568,1068,568,1083,568,1098,568,1112,568,1127,568,1141,568,1156,568,1171,568,1185,568,1200,568,1215,568,1229,568,1244,568,1259,568,1273,568,1288,568,1302,568,1317,568,1332,568,1346,568,1361,568,1376,568,1566,568,1580,568,1595,568,1610,568,1624,576,-1568,576,-1524,576,-1359,576,-1344,576,-1329,576,-1315,576,-1300,576,-1285,576,-1270,576,-1255,576,-1240,576,-1225,576,-1210,576,-1195,576,-1180,576,-1165,576,-1150,576,-1135,576,-1120,576,-1105,576,-1090,576,-1076,576,-1061,576,-1046,576,-1031,576,-1016,576,-1001,576,-986,576,-971,576,-956,576,-941,576,-926,576,-762,576,-747,576,-732,576,-717,576,-702,576,-687,576,-672,576,-657,576,-642,576,-627,576,-75,576,-45,576,-30,576,120,576,134,576,149,576,164,576,224,576,254,576,269,576,284,576,299,576,314,576,329,576,344,576,359,576,373,576,388,576,403,576,418,576,433,576,448,576,463,576,478,576,493,576,508,576,523,576,538,576,553,576,568,576,583,576,598,576,612,576,627,576,642,576,657,576,672,576,687,576,702,576,717,576,732,576,747,576,762,576,777,576,792,576,807,576,822,576,837,576,851,576,866,576,881,576,896,576,911,576,926,576,941,576,956,576,971,576,986,576,1001,576,1016,576,1031,576,1046,576,1061,576,1076,576,1090,576,1105,576,1120,576,1135,576,1150,576,1165,576,1180,576,1195,576,1210,576,1225,576,1240,576,1255,576,1270,576,1285,576,1300,576,1315,576,1329,576,1344,576,1359,576,1374,576,1389,576,1583,576,1598,576,1613,576,1628,584,-1571,584,-1556,584,-1541,584,-1525,584,-1342,584,-1327,584,-1312,584,-1297,584,-1281,584,-1266,584,-1251,584,-1236,584,-1220,584,-1205,584,-1190,584,-1175,584,-1159,584,-1144,584,-1129,584,-1114,584,-1098,584,-1083,584,-1068,584,-1053,584,-1037,584,-1022,584,-1007,584,-992,584,-976,584,-961,584,-946,584,-931,584,-778,584,-763,584,-747,584,-732,584,-717,584,-702,584,-686,584,-656,584,-641,584,-46,584,61,584,76,584,122,584,137,584,153,584,229,584,244,584,259,584,275,584,290,584,305,584,320,584,336,584,351,584,366,584,381,584,397,584,412,584,427,584,442,584,458,584,473,584,488,584,503,584,519,584,534,584,549,584,564,584,580,584,595,584,610,584,625,584,641,584,656,584,671,584,686,584,702,584,717,584,732,584,747,584,763,584,778,584,793,584,808,584,824,584,839,584,854,584,869,584,885,584,900,584,915,584,931,584,946,584,961,584,976,584,992,584,1007,584,1022,584,1037,584,1053,584,1068,584,1083,584,1098,584,1114,584,1129,584,1144,584,1159,584,1175,584,1190,584,1205,584,1220,584,1236,584,1251,584,1266,584,1281,584,1297,584,1312,584,1327,584,1342,584,1358,584,1373,584,1388,584,1403,584,1602,584,1617,592,-1604,592,-1589,592,-1573,592,-1557,592,-1542,592,-1385,592,-1370,592,-1338,592,-1323,592,-1307,592,-1291,592,-1276,592,-1260,592,-1244,592,-1229,592,-1213,592,-1197,592,-1182,592,-1166,592,-1150,592,-1135,592,-1119,592,-1103,592,-1088,592,-1072,592,-1057,592,-1041,592,-1025,592,-1010,592,-994,592,-978,592,-963,592,-775,592,-759,592,-743,592,-728,592,-712,592,-697,592,-650,592,70,592,86,592,102,592,117,592,133,592,149,592,164,592,180,592,243,592,258,592,274,592,290,592,305,592,321,592,337,592,352,592,368,592,383,592,399,592,415,592,430,592,446,592,462,592,477,592,493,592,509,592,524,592,540,592,556,592,571,592,587,592,603,592,618,592,634,592,650,592,665,592,681,592,697,592,712,592,728,592,743,592,759,592,775,592,790,592,806,592,822,592,837,592,853,592,869,592,884,592,900,592,916,592,931,592,947,592,963,592,978,592,994,592,1010,592,1025,592,1041,592,1057,592,1072,592,1088,592,1103,592,1119,592,1135,592,1150,592,1166,592,1182,592,1197,592,1213,592,1229,592,1244,592,1260,592,1276,592,1291,592,1307,592,1323,592,1338,592,1354,592,1370,592,1385,592,1401,592,1417,592,1526,592,1542,592,1604,592,1620,600,-1640,600,-1608,600,-1592,600,-1576,600,-1560,600,-1544,600,-1528,600,-1512,600,-1496,600,-1416,600,-1400,600,-1384,600,-1368,600,-1352,600,-1336,600,-1320,600,-1304,600,-1288,600,-1272,600,-1256,600,-1240,600,-1224,600,-1208,600,-1192,600,-1176,600,-1160,600,-1144,600,-1128,600,-1112,600,-1096,600,-1080,600,-1064,600,-1048,600,-1032,600,-1016,600,-1000,600,-984,600,-968,600,-952,600,-760,600,-744,600,-728,600,-712,600,-648,600,-440,600,56,600,72,600,88,600,104,600,120,600,136,600,152,600,168,600,184,600,232,600,312,600,328,600,344,600,360,600,376,600,392,600,408,600,424,600,440,600,456,600,472,600,488,600,504,600,520,600,536,600,552,600,568,600,584,600,600,600,616,600,632,600,648,600,664,600,680,600,696,600,712,600,728,600,744,600,760,600,776,600,792,600,808,600,824,600,840,600,856,600,872,600,888,600,904,600,920,600,936,600,952,600,968,600,984,600,1000,600,1016,600,1032,600,1048,600,1064,600,1080,600,1096,600,1112,600,1128,600,1144,600,1160,600,1176,600,1192,600,1208,600,1224,600,1240,600,1256,600,1272,600,1288,600,1304,600,1320,600,1336,600,1352,600,1368,600,1384,600,1400,600,1416,600,1432,600,1448,600,1464,600,1480,600,1496,600,1512,600,1528,600,1544,600,1624,608,-1645,608,-1628,608,-1612,608,-1595,608,-1579,608,-1563,608,-1546,608,-1530,608,-1497,608,-1448,608,-1432,608,-1415,608,-1399,608,-1383,608,-1366,608,-1350,608,-1334,608,-1317,608,-1301,608,-1285,608,-1268,608,-1252,608,-1235,608,-1219,608,-1203,608,-1186,608,-1170,608,-1154,608,-1137,608,-1121,608,-1105,608,-1088,608,-1072,608,-1055,608,-1039,608,-1023,608,-1006,608,-990,608,-974,608,-957,608,-761,608,-745,608,-728,608,-712,608,-695,608,-466,608,-450,608,-434,608,-8,608,57,608,74,608,90,608,106,608,123,608,139,608,155,608,172,608,221,608,237,608,254,608,270,608,286,608,303,608,319,608,335,608,352,608,368,608,385,608,401,608,417,608,434,608,450,608,466,608,483,608,499,608,515,608,532,608,548,608,565,608,581,608,597,608,614,608,630,608,646,608,663,608,679,608,695,608,712,608,728,608,745,608,761,608,777,608,794,608,810,608,826,608,843,608,859,608,875,608,892,608,908,608,925,608,941,608,957,608,974,608,990,608,1006,608,1023,608,1039,608,1055,608,1072,608,1088,608,1105,608,1121,608,1137,608,1154,608,1170,608,1186,608,1203,608,1219,608,1235,608,1252,608,1268,608,1285,608,1301,608,1317,608,1334,608,1350,608,1366,608,1383,608,1399,608,1415,608,1432,608,1448,608,1465,608,1481,608,1497,608,1514,608,1530,608,1546,608,1645,608,1661,608,1677,608,1694,608,1710,616,-1649,616,-1632,616,-1615,616,-1598,616,-1581,616,-1564,616,-1548,616,-1531,616,-1514,616,-1497,616,-1480,616,-1464,616,-1447,616,-1430,616,-1413,616,-1396,616,-1379,616,-1363,616,-1346,616,-1329,616,-1312,616,-1295,616,-1279,616,-1262,616,-1245,616,-1228,616,-1211,616,-1194,616,-1178,616,-1161,616,-1144,616,-1127,616,-1110,616,-1093,616,-1077,616,-1060,616,-1043,616,-1026,616,-1009,616,-993,616,-976,616,-959,616,-942,616,-774,616,-757,616,-740,616,-723,616,-488,616,-471,616,-454,616,-437,616,67,616,84,616,101,616,118,616,135,616,151,616,168,616,219,616,236,616,252,616,269,616,286,616,303,616,320,616,336,616,353,616,370,616,387,616,404,616,421,616,437,616,454,616,471,616,488,616,505,616,521,616,538,616,555,616,572,616,589,616,606,616,622,616,639,616,656,616,673,616,690,616,707,616,723,616,740,616,757,616,774,616,791,616,807,616,824,616,841,616,858,616,875,616,892,616,908,616,925,616,942,616,959,616,976,616,993,616,1009,616,1026,616,1043,616,1060,616,1077,616,1093,616,1110,616,1127,616,1144,616,1161,616,1178,616,1194,616,1211,616,1228,616,1245,616,1262,616,1279,616,1295,616,1312,616,1329,616,1346,616,1363,616,1379,616,1396,616,1413,616,1430,616,1447,616,1464,616,1480,616,1497,616,1514,616,1531,616,1548,616,1564,616,1615,616,1649,616,1665,616,1682,616,1699,616,1716,616,1733,624,-1653,624,-1636,624,-1618,624,-1601,624,-1584,624,-1566,624,-1549,624,-1532,624,-1514,624,-1497,624,-1480,624,-1462,624,-1445,624,-1428,624,-1411,624,-1393,624,-1376,624,-1359,624,-1341,624,-1324,624,-1307,624,-1289,624,-1272,624,-1255,624,-1237,624,-1220,624,-1203,624,-1186,624,-1168,624,-1151,624,-1134,624,-1116,624,-1099,624,-1082,624,-1064,624,-1047,624,-1030,624,-1012,624,-995,624,-978,624,-961,624,-943,624,-770,624,-736,624,-684,624,-666,624,-493,624,-476,624,-459,624,-441,624,-424,624,78,624,95,624,113,624,130,624,147,624,164,624,216,624,234,624,251,624,268,624,286,624,303,624,320,624,338,624,355,624,372,624,389,624,407,624,424,624,441,624,459,624,476,624,493,624,511,624,528,624,545,624,563,624,580,624,597,624,614,624,632,624,649,624,666,624,684,624,701,624,718,624,736,624,753,624,770,624,788,624,805,624,822,624,839,624,857,624,874,624,891,624,909,624,926,624,943,624,961,624,978,624,995,624,1013,624,1030,624,1047,624,1064,624,1082,624,1099,624,1116,624,1134,624,1151,624,1168,624,1186,624,1203,624,1220,624,1238,624,1255,624,1272,624,1289,624,1307,624,1324,624,1341,624,1359,624,1376,624,1393,624,1411,624,1428,624,1445,624,1463,624,1480,624,1497,624,1514,624,1532,624,1549,624,1566,624,1584,624,1601,624,1618,624,1653,624,1670,624,1688,624,1705,624,1722,624,1739,624,1757,624,1791,632,-1694,632,-1640,632,-1623,632,-1605,632,-1587,632,-1569,632,-1552,632,-1534,632,-1516,632,-1499,632,-1481,632,-1463,632,-1445,632,-1428,632,-1410,632,-1392,632,-1374,632,-1357,632,-1339,632,-1321,632,-1303,632,-1286,632,-1268,632,-1250,632,-1233,632,-1215,632,-1197,632,-1179,632,-1162,632,-1144,632,-1126,632,-1108,632,-1091,632,-1073,632,-1055,632,-1037,632,-1020,632,-1002,632,-984,632,-967,632,-949,632,-931,632,-913,632,-700,632,-683,632,-665,632,-505,632,-488,632,-470,632,-452,632,-434,632,-417,632,98,632,115,632,133,632,151,632,168,632,186,632,222,632,239,632,257,632,275,632,293,632,310,632,328,632,346,632,364,632,381,632,399,632,417,632,434,632,452,632,470,632,488,632,505,632,523,632,541,632,559,632,576,632,594,632,612,632,630,632,647,632,665,632,683,632,700,632,718,632,736,632,754,632,771,632,789,632,807,632,825,632,842,632,860,632,878,632,896,632,913,632,931,632,949,632,967,632,984,632,1002,632,1020,632,1037,632,1055,632,1073,632,1091,632,1108,632,1126,632,1144,632,1162,632,1179,632,1197,632,1215,632,1233,632,1250,632,1268,632,1286,632,1303,632,1321,632,1339,632,1357,632,1374,632,1392,632,1410,632,1428,632,1445,632,1463,632,1481,632,1499,632,1516,632,1534,632,1552,632,1569,632,1587,632,1605,632,1623,632,1640,632,1658,632,1676,632,1694,632,1711,632,1729,632,1747,632,1765,632,1782,640,-1608,640,-1590,640,-1572,640,-1553,640,-1535,640,-1517,640,-1498,640,-1480,640,-1462,640,-1444,640,-1425,640,-1407,640,-1389,640,-1371,640,-1352,640,-1334,640,-1316,640,-1297,640,-1279,640,-1261,640,-1243,640,-1224,640,-1206,640,-1188,640,-1170,640,-1151,640,-1133,640,-1115,640,-1096,640,-1078,640,-1060,640,-1042,640,-1023,640,-1005,640,-987,640,-969,640,-950,640,-932,640,-914,640,-859,640,-841,640,-822,640,-713,640,-694,640,-676,640,-658,640,-512,640,-493,640,-475,640,-457,640,-439,640,-420,640,-219,640,-201,640,-183,640,-164,640,110,640,128,640,146,640,164,640,183,640,201,640,238,640,256,640,274,640,292,640,311,640,329,640,347,640,384,640,402,640,420,640,439,640,457,640,475,640,493,640,512,640,530,640,548,640,566,640,585,640,603,640,621,640,640,640,658,640,676,640,694,640,713,640,731,640,749,640,768,640,786,640,804,640,822,640,841,640,859,640,877,640,895,640,914,640,932,640,950,640,969,640,987,640,1005,640,1023,640,1042,640,1060,640,1078,640,1096,640,1115,640,1133,640,1151,640,1170,640,1188,640,1206,640,1224,640,1243,640,1261,640,1279,640,1297,640,1316,640,1334,640,1352,640,1371,640,1389,640,1407,640,1425,640,1444,640,1462,640,1480,640,1498,640,1517,640,1535,640,1553,640,1572,640,1590,640,1608,640,1626,640,1645,640,1663,640,1681,640,1699,640,1718,640,1736,640,1754,640,1773,648,-1744,648,-1650,648,-1631,648,-1594,648,-1575,648,-1556,648,-1537,648,-1519,648,-1500,648,-1481,648,-1462,648,-1444,648,-1425,648,-1406,648,-1387,648,-1369,648,-1350,648,-1331,648,-1312,648,-1294,648,-1275,648,-1256,648,-1237,648,-1219,648,-1200,648,-1181,648,-1162,648,-1144,648,-1125,648,-1106,648,-1087,648,-1069,648,-1050,648,-1031,648,-1012,648,-994,648,-975,648,-956,648,-937,648,-919,648,-900,648,-881,648,-862,648,-844,648,-769,648,-750,648,-731,648,-712,648,-694,648,-675,648,-487,648,-469,648,-450,648,-431,648,-412,648,-225,648,-206,648,-187,648,-169,648,-150,648,131,648,150,648,169,648,188,648,206,648,263,648,281,648,300,648,319,648,338,648,375,648,413,648,431,648,450,648,469,648,488,648,506,648,525,648,544,648,563,648,581,648,600,648,619,648,638,648,656,648,675,648,694,648,713,648,731,648,750,648,769,648,788,648,806,648,825,648,844,648,863,648,881,648,900,648,919,648,938,648,956,648,975,648,994,648,1013,648,1031,648,1050,648,1069,648,1088,648,1106,648,1125,648,1144,648,1163,648,1181,648,1200,648,1219,648,1238,648,1256,648,1275,648,1294,648,1313,648,1331,648,1350,648,1369,648,1388,648,1406,648,1425,648,1444,648,1463,648,1481,648,1500,648,1519,648,1538,648,1556,648,1575,648,1594,648,1613,648,1631,648,1650,648,1669,648,1688,648,1706,648,1725,648,1744,648,1763,648,1781,656,-1752,656,-1732,656,-1713,656,-1674,656,-1655,656,-1635,656,-1616,656,-1597,656,-1577,656,-1558,656,-1539,656,-1519,656,-1500,656,-1481,656,-1461,656,-1442,656,-1423,656,-1403,656,-1384,656,-1365,656,-1345,656,-1326,656,-1306,656,-1287,656,-1268,656,-1248,656,-1229,656,-1210,656,-1190,656,-1171,656,-1152,656,-1132,656,-1113,656,-1094,656,-1074,656,-1055,656,-1035,656,-1016,656,-997,656,-977,656,-958,656,-939,656,-919,656,-900,656,-881,656,-726,656,-706,656,-687,656,-648,656,-513,656,-494,656,-474,656,-455,656,-435,656,-416,656,-397,656,-377,656,-242,656,-223,656,-203,656,-184,656,-165,656,-145,656,126,656,145,656,165,656,184,656,203,656,261,656,281,656,300,656,319,656,339,656,416,656,435,656,455,656,474,656,494,656,513,656,532,656,552,656,571,656,590,656,610,656,629,656,648,656,668,656,687,656,706,656,726,656,745,656,765,656,784,656,803,656,823,656,842,656,861,656,881,656,900,656,919,656,939,656,958,656,977,656,997,656,1016,656,1035,656,1055,656,1074,656,1094,656,1113,656,1132,656,1152,656,1171,656,1190,656,1210,656,1229,656,1248,656,1268,656,1287,656,1306,656,1326,656,1345,656,1365,656,1384,656,1403,656,1423,656,1442,656,1461,656,1481,656,1500,656,1519,656,1539,656,1558,656,1577,656,1597,656,1616,656,1635,656,1655,656,1674,656,1694,656,1713,656,1732,656,1752,656,1771,656,1790,664,-1780,664,-1760,664,-1720,664,-1640,664,-1600,664,-1580,664,-1560,664,-1540,664,-1520,664,-1500,664,-1480,664,-1460,664,-1440,664,-1420,664,-1400,664,-1380,664,-1360,664,-1340,664,-1320,664,-1300,664,-1280,664,-1260,664,-1240,664,-1220,664,-1200,664,-1180,664,-1160,664,-1140,664,-1120,664,-1100,664,-1080,664,-1060,664,-1040,664,-1020,664,-1000,664,-980,664,-960,664,-940,664,-920,664,-900,664,-880,664,-840,664,-720,664,-700,664,-680,664,-660,664,-640,664,-620,664,-520,664,-500,664,-480,664,-460,664,-440,664,-420,664,-400,664,-380,664,-360,664,-160,664,140,664,160,664,180,664,200,664,220,664,240,664,260,664,280,664,300,664,320,664,360,664,380,664,400,664,420,664,460,664,480,664,500,664,520,664,540,664,560,664,580,664,600,664,620,664,640,664,660,664,680,664,740,664,760,664,780,664,800,664,820,664,840,664,860,664,880,664,900,664,920,664,940,664,960,664,980,664,1000,664,1020,664,1040,664,1060,664,1080,664,1100,664,1120,664,1140,664,1160,664,1180,664,1200,664,1220,664,1240,664,1260,664,1280,664,1300,664,1320,664,1340,664,1360,664,1380,664,1400,664,1420,664,1440,664,1460,664,1480,664,1500,664,1520,664,1540,664,1560,664,1580,664,1600,664,1620,664,1640,664,1660,664,1680,664,1700,664,1720,664,1740,664,1760,664,1780,672,-1790,672,-1769,672,-1624,672,-1603,672,-1583,672,-1562,672,-1541,672,-1521,672,-1500,672,-1479,672,-1459,672,-1438,672,-1417,672,-1397,672,-1376,672,-1355,672,-1334,672,-1314,672,-1293,672,-1272,672,-1252,672,-1231,672,-1210,672,-1190,672,-1169,672,-1148,672,-1128,672,-1107,672,-1086,672,-1066,672,-1045,672,-1024,672,-1003,672,-983,672,-962,672,-941,672,-921,672,-900,672,-879,672,-859,672,-838,672,-817,672,-714,672,-693,672,-672,672,-652,672,-528,672,-507,672,-486,672,-466,672,-445,672,-424,672,-403,672,-383,672,-362,672,-341,672,155,672,176,672,197,672,217,672,238,672,259,672,279,672,300,672,321,672,341,672,362,672,383,672,403,672,445,672,486,672,507,672,528,672,548,672,569,672,590,672,610,672,631,672,652,672,672,672,693,672,714,672,755,672,776,672,797,672,817,672,838,672,859,672,879,672,900,672,921,672,941,672,962,672,983,672,1003,672,1024,672,1045,672,1066,672,1086,672,1107,672,1128,672,1148,672,1169,672,1190,672,1210,672,1231,672,1252,672,1272,672,1293,672,1314,672,1334,672,1355,672,1376,672,1397,672,1417,672,1438,672,1459,672,1479,672,1500,672,1521,672,1541,672,1562,672,1583,672,1603,672,1624,672,1645,672,1666,672,1686,672,1707,672,1728,672,1748,672,1769,672,1790,680,-1779,680,-1651,680,-1630,680,-1608,680,-1587,680,-1566,680,-1544,680,-1523,680,-1502,680,-1480,680,-1459,680,-1438,680,-1417,680,-1395,680,-1374,680,-1353,680,-1331,680,-1310,680,-1289,680,-1267,680,-1246,680,-1225,680,-1204,680,-1182,680,-1161,680,-1076,680,-1054,680,-1033,680,-969,680,-948,680,-927,680,-905,680,-884,680,-841,680,-756,680,-714,680,-692,680,-671,680,-650,680,-522,680,-501,680,-479,680,-458,680,-437,680,-415,680,-394,680,-373,680,-351,680,-330,680,160,680,181,680,202,680,224,680,245,680,266,680,288,680,309,680,330,680,351,680,373,680,394,680,458,680,501,680,522,680,543,680,564,680,586,680,607,680,628,680,650,680,671,680,692,680,714,680,756,680,778,680,799,680,820,680,841,680,863,680,884,680,905,680,927,680,948,680,969,680,991,680,1012,680,1033,680,1054,680,1076,680,1097,680,1118,680,1140,680,1161,680,1182,680,1204,680,1225,680,1246,680,1267,680,1289,680,1310,680,1331,680,1353,680,1374,680,1395,680,1417,680,1438,680,1459,680,1480,680,1502,680,1523,680,1544,680,1566,680,1587,680,1608,680,1630,680,1651,680,1672,680,1693,680,1715,680,1736,680,1757,680,1779,688,-1656,688,-1634,688,-1612,688,-1590,688,-1568,688,-1546,688,-1524,688,-1502,688,-1480,688,-1458,688,-1436,688,-1413,688,-1391,688,-1369,688,-1347,688,-1325,688,-1303,688,-1281,688,-1259,688,-1237,688,-1215,688,-1193,688,-1171,688,-1148,688,-1126,688,-1104,688,-1060,688,-972,688,-928,688,-906,688,-883,688,-839,688,-817,688,-729,688,-707,688,-508,688,-486,688,-464,688,-442,688,-420,688,-398,688,-375,688,-353,688,-331,688,-309,688,-287,688,-265,688,177,688,199,688,221,688,243,688,265,688,287,688,309,688,331,688,353,688,486,688,530,688,618,688,640,688,663,688,707,688,751,688,795,688,817,688,839,688,861,688,883,688,906,688,928,688,950,688,972,688,994,688,1016,688,1038,688,1060,688,1082,688,1104,688,1126,688,1148,688,1171,688,1193,688,1215,688,1237,688,1259,688,1281,688,1303,688,1325,688,1347,688,1369,688,1391,688,1413,688,1436,688,1458,688,1480,688,1502,688,1524,688,1546,688,1568,688,1590,688,1612,688,1634,688,1656,688,1679,688,1723,688,1745,688,1767,688,1789,696,-1617,696,-1594,696,-1571,696,-1548,696,-1525,696,-1502,696,-1479,696,-1456,696,-1433,696,-1410,696,-1318,696,-1296,696,-1273,696,-1250,696,-1227,696,-1158,696,-1135,696,-1112,696,-1089,696,-1066,696,-1043,696,-975,696,-929,696,-837,696,-768,696,-745,696,-722,696,-699,696,-539,696,-493,696,-470,696,-447,696,-424,696,-401,696,-378,696,-355,696,-332,696,-310,696,-287,696,-264,696,-241,696,195,696,218,696,241,696,264,696,287,696,310,696,608,696,631,696,676,696,699,696,722,696,745,696,768,696,791,696,814,696,837,696,860,696,883,696,906,696,929,696,952,696,975,696,997,696,1020,696,1043,696,1066,696,1089,696,1112,696,1135,696,1158,696,1181,696,1204,696,1227,696,1250,696,1273,696,1296,696,1318,696,1341,696,1364,696,1387,696,1410,696,1433,696,1456,696,1479,696,1502,696,1525,696,1548,696,1571,696,1594,696,1639,696,1708,696,1731,696,1754,704,-1597,704,-1574,704,-1550,704,-1526,704,-1502,704,-1097,704,-1073,704,-1049,704,-1025,704,-954,704,-930,704,-882,704,-858,704,-834,704,-811,704,-787,704,-763,704,-739,704,-715,704,-691,704,-525,704,-501,704,-477,704,-453,704,-429,704,-405,704,-381,704,-358,704,-334,704,-310,704,-286,704,238,704,262,704,286,704,691,704,715,704,763,704,787,704,811,704,858,704,882,704,906,704,930,704,954,704,977,704,1001,704,1025,704,1049,704,1073,704,1097,704,1121,704,1144,704,1168,704,1192,704,1216,704,1240,704,1264,704,1287,704,1311,704,1335,704,1359,704,1383,704,1407,704,1430,704,1454,704,1478,704,1502,704,1526,704,1550,704,1574,704,1597,712,-1775,712,-1229,712,-1154,712,-1130,712,-1105,712,-1080,712,-1055,712,-956,712,-931,712,-832,712,-807,712,-782,712,-757,712,-732,712,-509,712,-484,712,-459,712,-434,712,-410,712,-385,712,-360,712,-335,712,-310,712,-286,712,-261,712,-236,712,559,712,683,712,708,712,757,712,807,712,857,712,881,712,906,712,931,712,956,712,981,712,1006,712,1030,712,1055,712,1080,712,1105,712,1130,712,1154,712,1179,712,1204,712,1229,712,1254,712,1279,712,1328,712,1353,712,1403,712,1428,712,1452,712,1477,712,1502,720,-1243,720,-1217,720,-1165,720,-1140,720,-1114,720,-1088,720,-1062,720,-984,720,-881,720,-855,720,-829,720,-803,720,-777,720,-751,720,-544,720,-518,720,-492,720,-466,720,-440,720,-414,720,-388,720,-363,720,-337,720,-311,720,-285,720,-259,720,-233,720,518,720,544,720,699,720,725,720,751,720,803,720,829,720,855,720,881,720,906,720,932,720,958,720,984,720,1010,720,1036,720,1062,720,1088,720,1114,720,1140,720,1165,720,1191,720,1217,720,1243,720,1269,720,1399,720,1424,720,1450,720,1476,728,-1232,728,-1205,728,-1150,728,-1123,728,-1096,728,-1069,728,-1015,728,-988,728,-880,728,-853,728,-826,728,-528,728,-501,728,-474,728,-447,728,-420,728,-392,728,-365,728,-338,728,-311,728,-284,728,-230,728,528,728,555,728,717,728,826,728,853,728,880,728,907,728,934,728,961,728,988,728,1015,728,1042,728,1069,728,1096,728,1123,728,1150,728,1177,728,1205,728,1232,728,1259,728,1286,736,-1219,736,-1191,736,-1162,736,-1049,736,-992,736,-935,736,-879,736,-822,736,-794,736,-539,736,-510,736,-482,736,-454,736,-425,736,-397,736,-369,736,-340,736,-312,736,-283,736,-255,736,-227,736,567,736,822,736,850,736,879,736,907,736,935,736,964,736,992,736,1020,736,1049,736,1106,736,1162,736,1247,736,1417,744,-1235,744,-550,744,-521,744,-491,744,-461,744,-431,744,-402,744,-372,744,-342,744,-312,744,-283,744,-253,744,-223,744,-193,744,580,744,878,744,907,744,937,744,967,744,997,744,1026,744,1056,744,1086,752,-1158,752,-1127,752,-1096,752,-1064,752,-1002,752,-939,752,-908,752,-877,752,-845,752,-814,752,-563,752,-532,752,-501,752,-470,752,-438,752,-407,752,-376,752,-344,752,-313,752,-282,752,-250,752,-219,752,-188,752,595,752,908,752,939,752,970,752,1002,752,1033,752,1064,752,1096,752,1127,752,1377,752,1409,752,1440,752,1471,760,-1206,760,-1139,760,-1007,760,-908,760,-578,760,-545,760,-512,760,-479,760,-446,760,-413,760,-380,760,-347,760,-314,760,-281,760,-248,760,-215,760,611,760,644,760,941,760,974,760,1007,760,1040,760,1073,760,1106,768,-1188,768,-944,768,-874,768,-839,768,-804,768,-664,768,-629,768,-594,768,-559,768,-524,768,-489,768,-454,768,-419,768,-384,768,-350,768,-315,768,-280,768,-245,768,664,768,1014,768,1049,776,-1058,776,-946,776,-909,776,-872,776,-798,776,-687,776,-649,776,-612,776,-575,776,-538,776,-501,776,-464,776,-427,776,-390,776,-353,776,-315,776,-278,776,-241,776,167,784,-1100,784,-1020,784,-980,784,-900,784,-860,784,-820,784,-780,784,-700,784,-660,784,-620,784,-580,784,-540,784,-500,784,-460,784,-420,784,-380,784,-340,784,-300,784,-260,784,-220,784,140,784,180,784,220,784,1020,792,-1029,792,-900,792,-857,792,-814,792,-771,792,-643,792,-600,792,-557,792,-514,792,-471,792,-429,792,-386,792,-343,792,-300,792,-257,792,-214,792,129,792,171,792,986,800,-992,800,-946,800,-900,800,-854,800,-808,800,-762,800,-715,800,-623,800,-577,800,-531,800,-485,800,-438,800,-392,800,-346,800,-300,800,-254,800,-208,800,162,800,208,800,254,800,992,808,-950,808,-850,808,-800,808,-750,808,-700,808,-650,808,-600,808,-550,808,-500,808,-450,808,-400,808,-350,808,-300,808,-250,808,-200,808,-150,808,500,808,550,808,600,808,950,816,-845,816,-791,816,-736,816,-682,816,-573,816,-518,816,-464,816,-409,816,-355,816,-300,816,-245,816,-136,824,-780,824,-720,824,-660,824,-420,824,-360,824,-300,824,-240,832,-408,832,-340]"),X6={dots:W6},q6={"Europe/London":[51.51,-.13],"Europe/Dublin":[53.33,-6.25],"Europe/Lisbon":[38.72,-9.13],"Europe/Madrid":[40.42,-3.7],"Europe/Paris":[48.85,2.35],"Europe/Brussels":[50.85,4.35],"Europe/Amsterdam":[52.37,4.9],"Europe/Berlin":[52.52,13.4],"Europe/Zurich":[47.38,8.54],"Europe/Rome":[41.9,12.5],"Europe/Vienna":[48.21,16.37],"Europe/Prague":[50.08,14.44],"Europe/Warsaw":[52.23,21.01],"Europe/Copenhagen":[55.68,12.57],"Europe/Stockholm":[59.33,18.07],"Europe/Oslo":[59.91,10.75],"Europe/Helsinki":[60.17,24.94],"Europe/Athens":[37.98,23.73],"Europe/Bucharest":[44.43,26.1],"Europe/Budapest":[47.5,19.05],"Europe/Kyiv":[50.45,30.52],"Europe/Kiev":[50.45,30.52],"Europe/Istanbul":[41.01,28.98],"Europe/Moscow":[55.75,37.62],"America/New_York":[40.71,-74],"America/Toronto":[43.65,-79.38],"America/Halifax":[44.65,-63.57],"America/Chicago":[41.85,-87.65],"America/Mexico_City":[19.43,-99.13],"America/Denver":[39.74,-104.98],"America/Phoenix":[33.45,-112.07],"America/Los_Angeles":[34.05,-118.24],"America/Vancouver":[49.28,-123.12],"America/Anchorage":[61.22,-149.9],"America/Bogota":[4.6,-74.08],"America/Lima":[-12.05,-77.04],"America/Sao_Paulo":[-23.55,-46.63],"America/Argentina/Buenos_Aires":[-34.6,-58.38],"America/Santiago":[-33.45,-70.67],"Asia/Jerusalem":[31.78,35.22],"Asia/Riyadh":[24.71,46.68],"Asia/Dubai":[25.2,55.27],"Asia/Tehran":[35.7,51.42],"Asia/Karachi":[24.86,67],"Asia/Kolkata":[22.57,88.36],"Asia/Calcutta":[22.57,88.36],"Asia/Dhaka":[23.81,90.41],"Asia/Bangkok":[13.75,100.5],"Asia/Ho_Chi_Minh":[10.82,106.63],"Asia/Jakarta":[-6.21,106.85],"Asia/Kuala_Lumpur":[3.14,101.69],"Asia/Singapore":[1.35,103.82],"Asia/Manila":[14.6,120.98],"Asia/Hong_Kong":[22.32,114.17],"Asia/Shanghai":[31.23,121.47],"Asia/Taipei":[25.03,121.57],"Asia/Seoul":[37.57,126.98],"Asia/Tokyo":[35.68,139.69],"Africa/Casablanca":[33.57,-7.59],"Africa/Algiers":[36.75,3.06],"Africa/Tunis":[36.8,10.18],"Africa/Lagos":[6.52,3.38],"Africa/Cairo":[30.04,31.24],"Africa/Nairobi":[-1.29,36.82],"Africa/Johannesburg":[-26.2,28.05],"Australia/Perth":[-31.95,115.86],"Australia/Adelaide":[-34.93,138.6],"Australia/Brisbane":[-27.47,153.03],"Australia/Melbourne":[-37.81,144.96],"Australia/Sydney":[-33.87,151.21],"Pacific/Auckland":[-36.85,174.76],"Pacific/Honolulu":[21.31,-157.86]};function Y6(){try{const t=Intl.DateTimeFormat().resolvedOptions().timeZone,n=t&&q6[t];if(n)return{lat:n[0],lng:n[1]}}catch{}const i=new Date().getTimezoneOffset();return{lat:30,lng:Math.max(-180,Math.min(180,-i/4))}}const fn=1,K6=5.15,Z6=.032,Oi=.55,J6=7,Sa=64,ti=Sa*6*6,$6=14,Q6=["#0a5c55","#0f766e","#1c8577","#2f9e8c"],j6="#7a8a1f",$s=["#0d9488","#10a394","#0f766e","#7a8a1f"],el="#0a4f49",tl="#14b8a6",Rr=new I(-.5,.55,.42).normalize();function Bi(i,e,t){const n=i*Math.PI/180,r=e*Math.PI/180;return new I(t*Math.cos(n)*Math.cos(r),t*Math.sin(n),-t*Math.cos(n)*Math.sin(r))}function nl(){const i=document.createElement("canvas");i.width=4,i.height=64;const e=i.getContext("2d"),t=e.createLinearGradient(0,64,0,0);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,4,64);const n=new So(i);return n.colorSpace=Lt,n}function Qs(i){const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function il(i){let e;try{e=new k6({antialias:!0,alpha:!0})}catch{return()=>{}}e.setClearColor(0,0),i.appendChild(e.domElement);const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=new lo,r=new Nt(28,1,.1,20);r.position.set(0,0,K6);const s=()=>e.render(n,r),a=new zn,o=new zn;a.add(o),n.add(a);const l=Y6(),c=Bi(l.lat,l.lng,fn);a.rotation.z=-.16,o.rotation.y=Math.atan2(-c.x,c.z),a.rotation.x=is.clamp(l.lat*Math.PI/180,-Oi,Oi);const f=new It({uniforms:{uLight:{value:Rr},uLit:{value:new Be("#ffffff")},uShadow:{value:new Be("#d7e9e4")}},vertexShader:`
      varying vec3 vN;
      void main() {
        vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uLight;
      uniform vec3 uLit;
      uniform vec3 uShadow;
      varying vec3 vN;
      void main() {
        float l = clamp(dot(normalize(vN), uLight), 0.0, 1.0);
        gl_FragColor = vec4(mix(uShadow, uLit, l), 1.0);
        #include <colorspace_fragment>
      }
    `}),m=new bt(new oi(fn*.99,64,64),f);o.add(m);const h=new It({transparent:!0,depthWrite:!1,side:1,uniforms:{uColor:{value:new Be(tl)},uLight:{value:Rr}},vertexShader:`
      uniform vec3 uLight;
      varying float vRim;
      varying float vFace;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        vRim = pow(1.0 - abs(dot(n, normalize(-mv.xyz))), 5.0);
        vFace = clamp(dot(n, uLight), 0.0, 1.0);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vRim;
      varying float vFace;
      void main() {
        gl_FragColor = vec4(uColor, vRim * mix(0.05, 1.0, vFace));
        #include <colorspace_fragment>
      }
    `}),p=new bt(new oi(fn*1.035,64,64),h);p.renderOrder=3,a.add(p);const v=X6.dots,S=v.length/2,_=new Float32Array(S*3),d=new Float32Array(S*3),b=Q6.map(u=>new Be(u)),R=new Be(j6),M=[];for(let u=0;u<S;u++){const w=Bi(v[u*2]/10,v[u*2+1]/10,fn);M.push(w),_.set([w.x,w.y,w.z],u*3);const C=Qs(u)<.045?R:b[Math.floor(Qs(u*7+3)*b.length)];d.set([C.r,C.g,C.b],u*3)}const A=new Rt;A.setAttribute("position",new Ot(_,3)),A.setAttribute("color",new Ot(d,3));const E=new It({transparent:!0,vertexColors:!0,uniforms:{uSize:{value:.031},uScale:{value:300},uLight:{value:Rr}},vertexShader:`
      uniform float uSize;
      uniform float uScale;
      uniform vec3 uLight;
      varying vec3 vColor;
      varying float vLight;
      void main() {
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * position);
        vLight = mix(0.22, 1.0, clamp(dot(n, uLight), 0.0, 1.0));
        gl_PointSize = uSize * uScale / -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vLight;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.36, d);
        if (a < 0.4) discard;
        gl_FragColor = vec4(vColor, a * vLight);
        #include <colorspace_fragment>
      }
    `});o.add(new Mo(A,E));const P=[];let g=performance.now();function T(){return M[Math.floor(Math.random()*M.length)]}const F=Bi(50,12,fn),D=Bi(42,-95,fn),O=M.filter(u=>u.angleTo(F)<.3),W=M.filter(u=>u.angleTo(D)<.42);function q(){const u=Math.random();return u<.4&&O.length?O[Math.floor(Math.random()*O.length)]:u<.76&&W.length?W[Math.floor(Math.random()*W.length)]:T()}function B(u,w){let C=q(),V=q();for(let ve=0;ve<20;ve++){const ae=C.angleTo(V);if(ae>.28&&ae<2.3)break;V=q()}const te=fn*(.35+.8*(C.angleTo(V)/Math.PI)),ie=C.clone().add(V).normalize().multiplyScalar(fn+te),Y=new Nr(C,ie,V),K=new Br(Y,Sa,.004,6),re=new Be($s[Math.floor(Math.random()*$s.length)]);if(u)u.mesh.geometry.dispose(),u.mesh.geometry=K,u.mesh.material.color=re;else{const ve=new bt(K,new Vn({color:re,transparent:!0,opacity:.85}));o.add(ve),u={mesh:ve,pulses:[],a:C,b:V,start:0,draw:0,hold:0,erase:0,gap:0,startPulsed:!1,endPulsed:!1}}return u.a=C,u.b=V,u.start=g+Math.random()*w,u.draw=1500+Math.random()*1e3,u.hold=600+Math.random()*800,u.erase=1200+Math.random()*800,u.gap=600+Math.random()*1800,u.startPulsed=!1,u.endPulsed=!1,u.mesh.geometry.setDrawRange(0,t?ti:0),u}const X=new Or(.55,.75,24);function k(u,w){if(t)return;const C=new bt(X,new Vn({color:u.mesh.material.color,transparent:!0,opacity:.55,side:2,depthWrite:!1}));C.position.copy(w).multiplyScalar(1.002),C.lookAt(w.clone().multiplyScalar(2)),C.scale.setScalar(.001),C.userData.born=g,o.add(C),u.pulses.push(C)}function $(u){for(let w=u.pulses.length-1;w>=0;w--){const C=u.pulses[w],V=(g-C.userData.born)/1400;V>=1?(o.remove(C),C.material.dispose(),u.pulses.splice(w,1)):(C.scale.setScalar(.001+V*.075),C.material.opacity=.55*(1-V))}}const j=u=>u*u*(3-2*u),oe=u=>u-u%3;function fe(u){$(u);const w=g-u.start;if(w<0)return;const C=u.mesh.geometry;if(w<u.draw)u.startPulsed||(u.startPulsed=!0,k(u,u.a),ne(u.a,u.mesh.material.color)),C.setDrawRange(0,oe(Math.floor(ti*j(w/u.draw))));else if(w<u.draw+u.hold)C.setDrawRange(0,ti),u.endPulsed||(u.endPulsed=!0,k(u,u.b),ne(u.b,u.mesh.material.color));else if(w<u.draw+u.hold+u.erase){const V=oe(Math.floor(ti*j((w-u.draw-u.hold)/u.erase)));C.setDrawRange(V,ti-V)}else w>u.draw+u.hold+u.erase+u.gap?B(u,400):C.setDrawRange(0,0)}for(let u=0;u<J6;u++)P.push(B(null,3500));const _e=nl(),Ve=new Fr(.0055,.0055,1,6,1,!0);Ve.translate(0,.5,0);const tt=new oi(.0065,8,8),Ge=[],J=new I(0,1,0);if(!t)for(let u=0;u<$6;u++){const w=new bt(Ve,new Vn({map:_e,transparent:!0,opacity:0,depthWrite:!1,side:2}));w.scale.set(1,.001,1),o.add(w);const C=new bt(tt,new Vn({color:el,transparent:!0,opacity:0,depthWrite:!1}));o.add(C),Ge.push({mesh:w,tip:C,dir:new I(0,1,0),born:-1,grow:0,hold:0,fade:0,gap:0,maxLen:.2})}function ne(u,w){let C;for(const V of Ge){if(V.born<0){C=V;break}(!C||V.born<C.born)&&(C=V)}C&&(C.mesh.position.copy(u),C.dir.copy(u).normalize(),C.mesh.quaternion.setFromUnitVectors(J,C.dir),C.mesh.material.color.copy(w),C.maxLen=.07+Math.random()*Math.random()*.3,C.grow=450+Math.random()*400,C.hold=1200+Math.random()*1600,C.fade=900+Math.random()*700,C.born=g)}const ee=u=>1-(1-u)*(1-u);function we(u){if(u.born<0)return;const w=g-u.born,C=u.mesh;if(w<u.grow)C.scale.y=Math.max(.001,u.maxLen*ee(w/u.grow)),C.material.opacity=.85*Math.min(1,w/150);else if(w<u.grow+u.hold)C.scale.y=u.maxLen,C.material.opacity=.85;else if(w<u.grow+u.hold+u.fade){const V=(w-u.grow-u.hold)/u.fade;C.scale.y=Math.max(.001,u.maxLen*(1-j(V))),C.material.opacity=.85*(1-V)}else C.scale.y=.001,C.material.opacity=0,u.born=-1;u.tip.position.copy(C.position).addScaledVector(u.dir,C.scale.y),u.tip.material.opacity=C.material.opacity}let Pe=!1,Te=0,nt=0,Fe=0;const We=e.domElement;We.style.touchAction="pan-y";const ke=u=>{Pe=!0,Te=u.clientX,nt=u.clientY,We.setPointerCapture(u.pointerId),i.classList.add("dragging")},ze=u=>{if(!Pe)return;const w=u.clientX-Te,C=u.clientY-nt;Te=u.clientX,nt=u.clientY,o.rotation.y+=w*.005,a.rotation.x=is.clamp(a.rotation.x+C*.003,-Oi,Oi),Fe=w*.005*60,t&&s()},it=()=>{Pe=!1,i.classList.remove("dragging")};We.addEventListener("pointerdown",ke),window.addEventListener("pointermove",ze),window.addEventListener("pointerup",it),window.addEventListener("pointercancel",it);const at=()=>{const u=i.clientWidth,w=i.clientHeight;if(!u||!w)return;const C=Math.min(window.devicePixelRatio||1,2);e.setPixelRatio(C),e.setSize(u,w),r.aspect=u/w,r.updateProjectionMatrix(),E.uniforms.uScale.value=w*C/2,t&&s()},ht=new ResizeObserver(at);ht.observe(i),at();let st=0,Qe=!0,rt=performance.now();const U=u=>{st=requestAnimationFrame(U);const w=Math.min((u-rt)/1e3,.1);rt=u,g=u,Pe||(Fe*=Math.pow(.05,w),o.rotation.y+=(Z6+Fe)*w);for(const C of P)fe(C);for(const C of Ge)we(C);s()},xt=()=>{!st&&Qe&&!t&&(rt=performance.now(),st=requestAnimationFrame(U))},Ye=()=>{cancelAnimationFrame(st),st=0},y=new IntersectionObserver(([u])=>{Qe=u.isIntersecting,Qe?xt():Ye()});return y.observe(i),t?s():xt(),()=>{Ye(),y.disconnect(),ht.disconnect(),We.removeEventListener("pointerdown",ke),window.removeEventListener("pointermove",ze),window.removeEventListener("pointerup",it),window.removeEventListener("pointercancel",it);for(const u of P){u.mesh.geometry.dispose(),u.mesh.material.dispose();for(const w of u.pulses)w.material.dispose()}for(const u of Ge)u.mesh.material.dispose(),u.tip.material.dispose();Ve.dispose(),tt.dispose(),_e.dispose(),X.dispose(),A.dispose(),E.dispose(),p.geometry.dispose(),h.dispose(),m.geometry.dispose(),f.dispose(),e.dispose(),i.removeChild(We)}}export{il as initGlobe};
