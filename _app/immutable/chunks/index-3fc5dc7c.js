function x(){}const K=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(W)}function q(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Lt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Bt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,l){if(r){const s=Q(e,n,i,l);t.p(s,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),T=U?t=>requestAnimationFrame(t):x;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&T(X)}function Y(t){let e;return w.size===0&&T(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let D=!1;function ht(){D=!0}function mt(){D=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:pt(1,r,_=>e[n[_]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<l.length&&s[o].claim_order>=l[c].claim_order;)c++;const f=c<l.length?l[c]:null;t.insertBefore(s[o],f)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=et("style");return $t(Z(t),e),e.sheet}function $t(t,e){return gt(t.head||t,e),e.sheet}function bt(t,e){if(D){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){D&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function It(){return F(" ")}function Gt(){return F("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){vt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Et(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Wt(t,e,n){return Et(t,e,n,et)}function Nt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Qt(t){return Nt(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Xt(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Yt(t,e){return new t(e)}const M=new Map;let O=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:xt(e),rules:{}};return M.set(t,n),n}function it(t,e,n,i,r,l,s,u=0){const o=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=o){const p=e+(n-e)*l(m);c+=m*100+`%{${s(p,1-p)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${At(f)}_${u}`,_=Z(t),{stylesheet:d,rules:h}=M.get(_)||Ct(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,O+=1,a}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||St())}function St(){T(()=>{O||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),M.clear())})}let k;function N(t){k=t}function rt(){if(!k)throw new Error("Function called outside component initialization");return k}function Zt(t){rt().$$.on_mount.push(t)}function te(t){rt().$$.after_update.push(t)}const b=[],G=[],S=[],J=[],st=Promise.resolve();let R=!1;function ct(){R||(R=!0,st.then(ot))}function ee(){return ct(),st}function A(t){S.push(t)}const z=new Set;let $=0;function ot(){if($!==0)return;const t=k;do{try{for(;$<b.length;){const e=b[$];$++,N(e),jt(e.$$)}}catch(e){throw b.length=0,$=0,e}for(N(null),b.length=0,$=0;G.length;)G.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];z.has(n)||(z.add(n),n())}S.length=0}while(b.length);for(;J.length;)J.pop()();R=!1,z.clear(),N(t)}function jt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let E;function lt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function P(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function ne(){g={r:0,c:[],p:g}}function ie(){g.r||v(g.c),g=g.p}function Mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function re(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut={duration:0};function se(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,u,o=0;function c(){s&&B(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=K,tick:y=x,css:m}=r||ut;m&&(s=it(t,0,1,d,_,h,m,o++)),y(0,1);const p=V()+_,at=p+d;u&&u.abort(),l=!0,A(()=>P(t,!0,"start")),u=Y(L=>{if(l){if(L>=at)return y(1,0),P(t,!0,"end"),c(),l=!1;if(L>=p){const H=h((L-p)/d);y(H,1-H)}}return l})}let a=!1;return{start(){a||(a=!0,B(t),q(r)?(r=r(i),lt().then(f)):f())},invalidate(){a=!1},end(){l&&(c(),l=!1)}}}function ce(t,e,n){const i={direction:"out"};let r=e(t,n,i),l=!0,s;const u=g;u.r+=1;function o(){const{delay:c=0,duration:f=300,easing:a=K,tick:_=x,css:d}=r||ut;d&&(s=it(t,1,0,f,c,a,d));const h=V()+c,y=h+f;A(()=>P(t,!1,"start")),Y(m=>{if(l){if(m>=y)return _(0,1),P(t,!1,"end"),--u.r||v(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return l})}return q(r)?lt().then(()=>{r=r(i),o()}):o(),{end(c){c&&r.tick&&r.tick(1,0),l&&(s&&B(t,s),l=!1)}}}function oe(t){t&&t.c()}function le(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||A(()=>{const s=t.$$.on_mount.map(W).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(A)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,r,l,s,u=[-1]){const o=k;N(t);const c=t.$$={fragment:null,ctx:[],props:l,update:x,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&qt(t,a)),_}):[],c.update(),f=!0,v(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){ht();const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(tt)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),mt(),ot()}N(o)}class ae{$destroy(){Pt(this,1),this.$destroy=x}$on(e,n){if(!q(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as A,ee as B,x as C,Bt as D,bt as E,Tt as F,Ft as G,Rt as H,zt as I,Jt as J,Xt as K,K as L,A as M,se as N,ce as O,Lt as P,ae as S,It as a,Ht as b,Qt as c,ie as d,Gt as e,Mt as f,ne as g,tt as h,ue as i,te as j,et as k,Wt as l,wt as m,Kt as n,Zt as o,Vt as p,F as q,Nt as r,Dt as s,re as t,Ut as u,G as v,Yt as w,oe as x,le as y,Ot as z};
