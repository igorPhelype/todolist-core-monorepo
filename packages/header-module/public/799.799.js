(self.webpackChunkheader_module=self.webpackChunkheader_module||[]).push([[799],{799:(t,e,n)=>{"use strict";function o(){}function s(t){return t()}function c(){return Object.create(null)}function r(t){t.forEach(s)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t){return 0===Object.keys(t).length}function a(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function m(t){p=t}n.d(e,{f_:()=>q,R3:()=>a,Lj:()=>$,og:()=>f,bG:()=>h,S1:()=>O,$T:()=>d,ZT:()=>o,N8:()=>l}),new Set,new Set;const b=[],g=[],y=[],_=[],k=Promise.resolve();let w=!1;function x(t){y.push(t)}let C=!1;const E=new Set;function v(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];m(e),S(e.$$)}for(m(null),b.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(b.length);for(;_.length;)_.pop()();w=!1,C=!1,E.clear()}}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const T=new Set;let j;function A(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e,n,l,u,a,d=[-1]){const h=p;m(t);const $=t.$$={fragment:null,ctx:null,props:a,update:o,not_equal:u,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:e.context||[]),callbacks:c(),dirty:d,skip_bound:!1};let g=!1;if($.ctx=n?n(t,e.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return $.ctx&&u($.ctx[e],$.ctx[e]=s)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](s),g&&function(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,k.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],$.update(),g=!0,r($.before_update),$.fragment=!!l&&l($.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();e.intro&&((y=t.$$.fragment)&&y.i&&(T.delete(y),y.i(_))),function(t,e,n,o){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,n),o||x((()=>{const e=l.map(s).filter(i);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(x)}(t,e.target,e.anchor,e.customElement),v()}var y,_;m(h)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(j=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(s).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){A(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!u(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class q{$destroy(){A(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!u(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}}}]);