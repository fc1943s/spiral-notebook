var F=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var V=F((P,T)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=e(o);fetch(o.href,u)}})();let _;const j=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});j.decode();let h=new Uint8Array;function m(){return h.byteLength===0&&(h=new Uint8Array(_.memory.buffer)),h}function S(n,t){return j.decode(m().subarray(n,n+t))}const g=new Array(32).fill(void 0);g.push(void 0,null,!0,!1);let l=g.length;function i(n){l===g.length&&g.push(g.length+1);const t=l;if(l=g[t],typeof l!="number")throw new Error("corrupt heap");return g[t]=n,t}function c(n){return g[n]}function d(n){if(typeof n!="boolean")throw new Error("expected a boolean argument")}function E(n){const t=typeof n;if(t=="number"||t=="boolean"||n==null)return`${n}`;if(t=="string")return`"${n}"`;if(t=="symbol"){const o=n.description;return o==null?"Symbol":`Symbol(${o})`}if(t=="function"){const o=n.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(n)){const o=n.length;let u="[";o>0&&(u+=E(n[0]));for(let s=1;s<o;s++)u+=", "+E(n[s]);return u+="]",u}const e=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(e.length>1)r=e[1];else return toString.call(n);if(r=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:r}let O=0;const p=new TextEncoder("utf-8"),U=typeof p.encodeInto=="function"?function(n,t){return p.encodeInto(n,t)}:function(n,t){const e=p.encode(n);return t.set(e),{read:n.length,written:e.length}};function M(n,t,e){if(typeof n!="string")throw new Error("expected a string argument");if(e===void 0){const b=p.encode(n),w=t(b.length);return m().subarray(w,w+b.length).set(b),O=b.length,w}let r=n.length,o=t(r);const u=m();let s=0;for(;s<r;s++){const b=n.charCodeAt(s);if(b>127)break;u[o+s]=b}if(s!==r){s!==0&&(n=n.slice(s)),o=e(o,r,r=s+n.length*3);const b=m().subarray(o+s,o+r),w=U(n,b);if(w.read!==n.length)throw new Error("failed to pass whole string");s+=w.written}return O=s,o}let A=new Int32Array;function W(){return A.byteLength===0&&(A=new Int32Array(_.memory.buffer)),A}function R(n){n<36||(g[n]=l,l=n)}function x(n){const t=c(n);return R(n),t}function $(){_.client()}function f(n,t){try{return n.apply(this,t)}catch(e){let r=function(){try{return e instanceof Error?`${e.message}

Stack:
${e.stack}`:e.toString()}catch{return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",r),e}}function I(n){return n==null}function y(n,t){return n===0?c(t):S(n,t)}function a(n,t){try{return n.apply(this,t)}catch(e){_.__wbindgen_exn_store(i(e))}}function k(n,t){return m().subarray(n/1,n/1+t)}function C(n){if(typeof n!="number")throw new Error("expected a number argument")}async function N(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(r){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const e=await n.arrayBuffer();return await WebAssembly.instantiate(e,t)}else{const e=await WebAssembly.instantiate(n,t);return e instanceof WebAssembly.Instance?{instance:e,module:n}:e}}function q(){const n={};return n.wbg={},n.wbg.__wbindgen_string_new=function(t,e){const r=S(t,e);return i(r)},n.wbg.__wbg_instanceof_Window_acc97ff9f5d2c7b4=function(){return f(function(t){let e;try{e=c(t)instanceof Window}catch{e=!1}const r=e;return d(r),r},arguments)},n.wbg.__wbg_document_3ead31dbcad65886=function(){return f(function(t){const e=c(t).document;return I(e)?0:i(e)},arguments)},n.wbg.__wbg_body_3cb4b4042b9a632b=function(){return f(function(t){const e=c(t).body;return I(e)?0:i(e)},arguments)},n.wbg.__wbg_createElement_976dbb84fe1661b5=function(){return a(function(t,e,r){var o=y(e,r);const u=c(t).createElement(o);return i(u)},arguments)},n.wbg.__wbg_setAttribute_d8436c14a59ab1af=function(){return a(function(t,e,r,o,u){var s=y(e,r),b=y(o,u);c(t).setAttribute(s,b)},arguments)},n.wbg.__wbg_log_4b5638ad60bdc54a=function(){return f(function(t){console.log(c(t))},arguments)},n.wbg.__wbg_appendChild_e513ef0e5098dfdd=function(){return a(function(t,e){const r=c(t).appendChild(c(e));return i(r)},arguments)},n.wbg.__wbindgen_is_object=function(t){const e=c(t),r=typeof e=="object"&&e!==null;return d(r),r},n.wbg.__wbindgen_is_string=function(t){const e=typeof c(t)=="string";return d(e),e},n.wbg.__wbg_crypto_e1d53a1d73fb10b8=function(){return f(function(t){const e=c(t).crypto;return i(e)},arguments)},n.wbg.__wbg_msCrypto_6e7d3e1f92610cbb=function(){return f(function(t){const e=c(t).msCrypto;return i(e)},arguments)},n.wbg.__wbg_getRandomValues_805f1c3d65988a5a=function(){return a(function(t,e){c(t).getRandomValues(c(e))},arguments)},n.wbg.__wbg_randomFillSync_6894564c2c334c42=function(){return a(function(t,e,r){c(t).randomFillSync(k(e,r))},arguments)},n.wbg.__wbg_require_78a3dcfbdba9cbce=function(){return a(function(){const t=T.require;return i(t)},arguments)},n.wbg.__wbg_process_038c26bf42b093f8=function(){return f(function(t){const e=c(t).process;return i(e)},arguments)},n.wbg.__wbg_versions_ab37218d2f0b24a8=function(){return f(function(t){const e=c(t).versions;return i(e)},arguments)},n.wbg.__wbg_node_080f4b19d15bc1fe=function(){return f(function(t){const e=c(t).node;return i(e)},arguments)},n.wbg.__wbg_newnoargs_b5b063fc6c2f0376=function(){return f(function(t,e){var r=y(t,e);const o=new Function(r);return i(o)},arguments)},n.wbg.__wbg_call_97ae9d8645dc388b=function(){return a(function(t,e){const r=c(t).call(c(e));return i(r)},arguments)},n.wbg.__wbg_call_168da88779e35f61=function(){return a(function(t,e,r){const o=c(t).call(c(e),c(r));return i(o)},arguments)},n.wbg.__wbg_getTime_cb82adb2556ed13e=function(){return f(function(t){return c(t).getTime()},arguments)},n.wbg.__wbg_new0_a57059d72c5b7aee=function(){return f(function(){const t=new Date;return i(t)},arguments)},n.wbg.__wbg_globalThis_7f206bda628d5286=function(){return a(function(){const t=globalThis.globalThis;return i(t)},arguments)},n.wbg.__wbg_self_6d479506f72c6a71=function(){return a(function(){const t=self.self;return i(t)},arguments)},n.wbg.__wbg_window_f2557cc78490aceb=function(){return a(function(){const t=window.window;return i(t)},arguments)},n.wbg.__wbg_global_ba75c50d1cf384f4=function(){return a(function(){const t=global.global;return i(t)},arguments)},n.wbg.__wbg_new_8c3f0052272a457a=function(){return f(function(t){const e=new Uint8Array(c(t));return i(e)},arguments)},n.wbg.__wbg_newwithlength_f5933855e4f48a19=function(){return f(function(t){const e=new Uint8Array(t>>>0);return i(e)},arguments)},n.wbg.__wbg_subarray_58ad4efbb5bcb886=function(){return f(function(t,e,r){const o=c(t).subarray(e>>>0,r>>>0);return i(o)},arguments)},n.wbg.__wbg_length_9e1ae1900cb0fbd5=function(){return f(function(t){const e=c(t).length;return C(e),e},arguments)},n.wbg.__wbg_set_83db9690f9353e79=function(){return f(function(t,e,r){c(t).set(c(e),r>>>0)},arguments)},n.wbg.__wbindgen_is_function=function(t){const e=typeof c(t)=="function";return d(e),e},n.wbg.__wbindgen_is_undefined=function(t){const e=c(t)===void 0;return d(e),e},n.wbg.__wbindgen_object_clone_ref=function(t){const e=c(t);return i(e)},n.wbg.__wbg_buffer_3f3d764d4747d564=function(){return f(function(t){const e=c(t).buffer;return i(e)},arguments)},n.wbg.__wbindgen_debug_string=function(t,e){const r=E(c(e)),o=M(r,_.__wbindgen_malloc,_.__wbindgen_realloc),u=O;W()[t/4+1]=u,W()[t/4+0]=o},n.wbg.__wbindgen_object_drop_ref=function(t){x(t)},n.wbg.__wbindgen_throw=function(t,e){throw new Error(S(t,e))},n.wbg.__wbindgen_memory=function(){const t=_.memory;return i(t)},n}function B(n,t){return _=n.exports,L.__wbindgen_wasm_module=t,A=new Int32Array,h=new Uint8Array,_}async function L(n){typeof n>"u"&&(n=new URL("/tictactoe/assets/client_bg-d093e13a.wasm",self.location));const t=q();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:e,module:r}=await N(await n,t);return B(e,r)}async function D(){await L(),$()}D()});export default V();