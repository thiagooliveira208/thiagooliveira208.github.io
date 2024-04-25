import{c as o,h as v,g as Q,L as D,d as de,i as fe,s as ae,f as ve,r as U,u as me,T as ge,v as he,j as P,e as be,M as ye}from"./index.4328fc1a.js";import{c as F,h as ke,d as z,a as pe}from"./render.44f041e4.js";import{c as xe}from"./dom.0c996d0c.js";const V={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ie(e,t=V){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const H="0 0 24 24",W=e=>e,I=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(le).join("|")+")"),$e=new RegExp("^("+Object.keys(ue).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,Se=/^img:/,we=/^svguse:/,Re=/^ion-/,Le=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=F({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=Q(),n=ie(e),u=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Ee.test(r)===!0){const[s,y=H]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(l=>{const[k,h,p]=l.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Se.test(r)===!0)return{img:!0,src:r.substring(4)};if(we.test(r)===!0){const[s,y=H]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=r.match(qe);if(b!==null)c=le[b[1]](r);else if(Le.test(r)===!0)c=r;else if(Re.test(r)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){c="notranslate material-symbols";const s=r.match(X);s!==null&&(r=r.substring(6),c+=se[s[1]]),q=r}else{c="notranslate material-icons";const s=r.match($e);s!==null&&(r=r.substring(2),c+=ue[s[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:u.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,ke(t.default)):f.value.img===!0?v(e.tag,c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Ce={size:{type:[Number,String],default:"1em"},color:String};function Be(e){return{cSize:o(()=>e.size in V?`${V[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var _e=F({name:"QSpinner",props:{...Ce,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Be(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Pe(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function G(e,t,a,n){a.modifiers.stop===!0&&ae(e);const u=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),r=document.createElement("span"),q=ve(e),{left:b,top:s,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),h=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-b-h}px`,x=`${(l-k)/2}px`,_=f?x:`${q.top-s-h}px`;r.className="q-ripple__inner",xe(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${u?" text-"+u:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const C=()=>{c.remove(),clearTimeout(B)};a.abort.push(C);let B=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,B=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,B=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(C),1)},275)},250)},50)}function J(e,{modifiers:t,value:a,arg:n}){const u=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var Te=pe({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&G(u,e,n,u.qKeyEvent===!0)},keystart:Pe(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&D(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&G(u,e,n,!0)},300)};J(n,t),e.__qripple=n,de(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&J(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),fe(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Oe=Object.keys(oe),Ae={align:{type:String,validator:e=>Oe.includes(e)}};function je(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function Ze(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function ce(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{ce(e,a)}):e.add(t)}function et(e){const t=new Set;return e.forEach(a=>{ce(t,a)}),Array.from(t)}function Me(e){return e.appContext.config.globalProperties.$router!==void 0}function tt(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){for(const a in t){const n=t[a],u=e[a];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((f,c)=>f!==u[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Ne(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Ne(e[a],t[a])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function De({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=Q(),{props:n,proxy:u,emit:f}=a,c=Me(a),r=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=o(()=>q.value===!0?_(n.to):null),s=o(()=>b.value!==null),y=o(()=>r.value===!0||s.value===!0),l=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:b.value.href,target:n.target}:{}),h=o(()=>{if(s.value===!1)return-1;const{matched:m}=b.value,{length:$}=m,S=m[$-1];if(S===void 0)return-1;const R=u.$route.matched;if(R.length===0)return-1;const L=R.findIndex(ee.bind(null,S));if(L!==-1)return L;const N=Z(m[$-2]);return $>1&&Z(S)===N&&R[R.length-1].path!==N?R.findIndex(ee.bind(null,m[$-2])):L}),p=o(()=>s.value===!0&&h.value!==-1&&ze(u.$route.params,b.value.params)),d=o(()=>p.value===!0&&h.value===u.$route.matched.length-1&&Ke(u.$route.params,b.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(m){try{return u.$router.resolve(m)}catch{}return null}function C(m,{returnRouterError:$,to:S=n.to,replace:R=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const L=u.$router[R===!0?"replace":"push"](S);return $===!0?L:L.then(()=>{}).catch(()=>{})}function B(m){if(s.value===!0){const $=S=>C(m,S);f("click",m,$),m.defaultPrevented!==!0&&$()}else f("click",m)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:l,resolvedLink:b,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:C,navigateOnClick:B}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ve={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Fe=/[^\s]\/[^\s]/,Ue=["flat","outline","push","unelevated"],He=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,We={...re,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ue.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ae.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Xe(e){const t=ie(e,Ve),a=je(e),{hasRouterLink:n,hasLink:u,linkTag:f,linkAttrs:c,navigateOnClick:r}=De({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),l=o(()=>He(e,"standard")),k=o(()=>{const d={tabindex:y.value};return u.value===!0?Object.assign(d,c.value):Qe.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Fe.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:u,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:E}=ye;let T=null,O=null,A=null;var nt=F({name:"QBtn",props:{...We,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=Q(),{classes:u,style:f,innerClasses:c,attributes:r,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Xe(e),l=U(null),k=U(null);let h=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=o(()=>({center:e.round})),B=o(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),m=o(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const i={onClick:S,onKeydown:R,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";i[`onTouchstart${g}`]=L}return i}return{onClick:P}}),$=o(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:f.value,...r.value,...m.value}));function S(i){if(l.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&l.value.contains(g)===!1&&g.contains(l.value)===!1){l.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,E),l.value!==null&&l.value.removeEventListener("blur",K,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,E),l.value.addEventListener("blur",K,E)}}s(i)}}function R(i){l.value!==null&&(a("keydown",i),D(i,[13,32])===!0&&O!==l.value&&(O!==null&&j(),i.defaultPrevented!==!0&&(l.value.focus(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),l.value.addEventListener("blur",w,E)),P(i)))}function L(i){l.value!==null&&(a("touchstart",i),i.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&j(),T=l.value,h=i.target,h.addEventListener("touchcancel",w,E),h.addEventListener("touchend",w,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function N(i){l.value!==null&&(i.qSkipRipple=p===!0,a("mousedown",i),i.defaultPrevented!==!0&&A!==l.value&&(A!==null&&j(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(i){if(l.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===l.value)){if(i!==void 0&&i.type==="keyup"){if(O===l.value&&D(i,[13,32])===!0){const g=new MouseEvent("click",i);g.qKeyEvent=!0,i.defaultPrevented===!0&&be(g),i.cancelBubble===!0&&ae(g),l.value.dispatchEvent(g),P(i),i.qKeyEvent=!0}a("keyup",i)}j()}}function j(i){const g=k.value;i!==!0&&(T===l.value||A===l.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===l.value&&(h!==null&&(h.removeEventListener("touchcancel",w,E),h.removeEventListener("touchend",w,E)),T=h=null),A===l.value&&(document.removeEventListener("mouseup",w,E),A=null),O===l.value&&(document.removeEventListener("keyup",w,!0),l.value!==null&&l.value.removeEventListener("blur",w,E),O=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function M(i){P(i),i.qSkipRipple=!0}return me(()=>{j(!0)}),Object.assign(n,{click:S}),()=>{let i=[];e.icon!==void 0&&i.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=z(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},i)),e.loading!==null&&g.push(v(ge,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(_e)])]:null)),he(v(b.value,$.value,g),[[Te,_.value,void 0,C.value]])}}});export{Y as Q,Te as R,nt as a,tt as b,De as c,_e as d,re as e,ie as f,et as g,Ze as h,Ie as u,Me as v};
