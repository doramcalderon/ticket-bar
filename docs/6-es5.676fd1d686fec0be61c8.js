(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{aoIK:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",(function(){return u}));var o=n("aiEM");const r=new WeakMap,a=(t,e,n,o=0)=>{r.has(t)!==n&&(n?i(t,e,o):c(t,e))},s=t=>t===t.getRootNode().activeElement,i=(t,e,n)=>{const o=e.parentNode,a=e.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o.appendChild(a),r.set(t,a);const s="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d(".concat(s,"px,").concat(n,"px,0) scale(0)")},c=(t,e)=>{const n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},l="input, textarea, [no-blur]",d=(t,e)=>{if("INPUT"!==t.tagName)return;if(t.parentElement&&"ION-INPUT"===t.parentElement.tagName)return;if(t.parentElement&&t.parentElement.parentElement&&"ION-SEARCHBAR"===t.parentElement.parentElement.tagName)return;const n=t.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset","".concat(e,"px")):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},u=t=>{const e=document,n=t.getNumber("keyboardHeight",290),r=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",!0),c=t.getBoolean("inputBlurring",!0),u=t.getBoolean("scrollPadding",!0),m=Array.from(e.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,f=new WeakMap,E=t=>{const e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),c=t.closest("ion-content");if(e){if(c&&i&&!p.has(t)){const n=((t,e,n)=>{if(!n||!e)return()=>{};const o=n=>{s(e)&&a(t,e,n)},r=()=>a(t,e,!1),i=()=>o(!0),c=()=>o(!1);return n.addEventListener("ionScrollStart",i),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",r),()=>{n.removeEventListener("ionScrollStart",i),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",r)}})(t,e,c);p.set(t,n)}if(c&&r&&!f.has(t)){const r=((t,e,n,r)=>{let i;const c=t=>{i=Object(o.j)(t)},l=c=>{if(!i)return;const l=Object(o.j)(c);((t,e,n)=>{if(e&&n){const t=e.x-n.x,o=e.y-n.y;return t*t+o*o>36}return!1})(0,i,l)||s(e)||(c.preventDefault(),c.stopPropagation(),((t,e,n,o)=>{const r=((t,e,n)=>((t,e,n,o)=>{const r=t.top,a=t.bottom,s=e.top,i=s+15,c=.5*Math.min(e.bottom,o-n)-a,l=i-r,d=Math.round(c<0?-c:l>0?-l:0),u=Math.min(d,r-s),m=Math.abs(u);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m/.3)),scrollPadding:n,inputSafeY:4-(r-i)}})((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight))(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(a(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(()=>{a(t,e,!1,r.inputSafeY),e.focus()}))})(t,e,n,r))};return t.addEventListener("touchstart",c,!0),t.addEventListener("touchend",l,!0),()=>{t.removeEventListener("touchstart",c,!0),t.removeEventListener("touchend",l,!0)}})(t,e,c,n);f.set(t,r)}}};c&&(()=>{let t=!0,e=!1;const n=document;n.addEventListener("ionScrollStart",()=>{e=!0}),n.addEventListener("focusin",()=>{t=!0},!0),n.addEventListener("touchend",o=>{if(e)return void(e=!1);const r=n.activeElement;if(!r)return;if(r.matches(l))return;const a=o.target;a!==r&&(a.matches(l)||a.closest(l)||(t=!1,setTimeout(()=>{t||r.blur()},50)))},!1)})(),u&&(t=>{const e=document;e.addEventListener("focusin",e=>{d(e.target,t)}),e.addEventListener("focusout",t=>{d(t.target,0)})})(n);for(var v=0,g=m;v<g.length;v++){const t=g[v];E(t)}e.addEventListener("ionInputDidLoad",t=>{E(t.detail)}),e.addEventListener("ionInputDidUnload",t=>{(t=>{if(i){const e=p.get(t);e&&e(),p.delete(t)}if(r){const e=f.get(t);e&&e(),f.delete(t)}})(t.detail)})}}}]);