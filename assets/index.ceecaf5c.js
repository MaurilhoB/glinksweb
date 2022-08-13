var vt=Object.defineProperty,yt=Object.defineProperties;var wt=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var Oe=(t,r,i)=>r in t?vt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,$=(t,r)=>{for(var i in r||(r={}))je.call(r,i)&&Oe(t,i,r[i]);if(se)for(var i of se(r))Ve.call(r,i)&&Oe(t,i,r[i]);return t},re=(t,r)=>yt(t,wt(r));var He=(t,r)=>{var i={};for(var n in t)je.call(t,n)&&r.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&se)for(var n of se(t))r.indexOf(n)<0&&Ve.call(t,n)&&(i[n]=t[n]);return i};import{s as l,B as O,j as o,a as e,b as H,c as Ct,d as ie,p as ce,i as Se,e as C,y as I,P as kt,C as Ne,l as k,F as P,f as Ge,M as St,g as At,h as Ft,k as Et,m as We,u as le,A as K,n as Ae,I as B,o as q,q as $t,r as Tt,S as Fe,t as Ue,v as qe,w as Ye,x as _t,z as Dt,T as M,D as Ke,E as N,G as It,H as de,U as Mt,J as Pt,K as Q,L as Qe,N as Lt,O as Rt,Q as Bt,R as Ee,V as $e,W as Te,X as Je,Y as pe,Z as ue,_ as L,$ as R,a0 as Xe,a1 as zt,a2 as Ze,a3 as jt,a4 as he,a5 as fe,a6 as Vt,a7 as me,a8 as Ot,a9 as Ht,aa as Nt,ab as Gt,ac as Wt,ad as Ut,ae as qt,af as Yt,ag as et,ah as Kt,ai as Qt,aj as Jt,ak as Xt,al as Zt,am as tt,an as en,ao as tn,ap as nn,aq as nt,ar as rn,as as on,at as an,au as sn,av as J,aw as cn,ax as ln}from"./vendor.c964111c.js";function Ti(){import("data:text/javascript,")}const dn=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}};dn();const pn="A\xE7\xE3o",un="Aventura",hn="Com\xE9dia",fn="Cotidiano",mn="Dem\xF4nios",gn="Dem\xEAncia",xn="Drama",bn="Ecchi",vn="Escolar",yn="Espacial",wn="Esportes",Cn="Fantasia",kn="Har\xE9m",Sn="Hist\xF3rico",An="Horror",Fn="Infantil",En="Game",$n="Josei",Tn="Magia",_n="Militar",Dn="Mist\xE9rio",In="Mecha",Mn="Musical",Pn="Policial",Ln="Par\xF3dia",Rn="Psicol\xF3gico",Bn="Romance",zn="Samurai",jn="Seinen",Vn="Shoujo",On="Shounen",Hn="Sobrenatural",Nn="Suspense",Gn="Terror",Wn="Trag\xE9dia",Un="Thriller",qn="Vampiros",Yn="Hentai",Kn="Yaoi",Qn="Yuri";var rt={acao:pn,aventura:un,"artes-marciais":"Artes Marciais",comedia:hn,cotidiano:fn,demonios:mn,demencia:gn,drama:xn,ecchi:bn,escolar:vn,espacial:yn,esportes:wn,fantasia:Cn,"ficcao-cientifica":"Fic\xE7\xE3o Cient\xEDfica",harem:kn,historico:Sn,horror:An,infantil:Fn,game:En,josei:$n,magia:Tn,militar:_n,misterio:Dn,mecha:In,musical:Mn,policial:Pn,parodia:Ln,psicologico:Rn,romance:Bn,samurai:zn,seinen:jn,"sci-fi":"Sci-Fi",shoujo:Vn,"shoujo-ai":"Shoujo-Ai",shounen:On,"shounen-ai":"Shounen-Ai","slice-of-life":"Slice of Life",sobrenatural:Hn,"super-poderes":"Super Poderes",suspense:Nn,terror:Gn,tragedia:Wn,thriller:Un,vampiros:qn,"vida-escolar":"Vida Escolar",hentai:Yn,yaoi:Kn,yuri:Qn};const Jn=l(O).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  & > h1 {
    margin-top: 20px;
  }

  & > button {
    margin-top: 10px;
  }
`;var Xn="/assets/confused.0d849045.png";function X({onRetry:t,title:r,message:i,transparent:n}){return o(Jn,{style:{backgroundColor:n?"transparent":void 0},children:[e("img",{width:160,src:Xn,alt:"Confused Anime Girl"}),e("h1",{children:r}),e("p",{children:i}),t&&e(H,{variant:"outlined",onClick:t,children:"Tentar novamente"})]})}var Zn="/assets/loading.62848bb2.webp";const ge=Ct.create({baseURL:"https://animes.vision/api/v2"}),xe={async getReleases(){const{data:t}=await ge.get("releases");return t},async getEpisode(t){const{data:r}=await ge.get(`episode/${t}`);return r},async getAnime(t){const{data:r}=await ge.get(`post/${t}`);return r},async search(t,r){const{data:i}=await ge.get(`search?busca=${t}`,{params:r});return i}},_e=ie()(ce(Se((t,r)=>({state:{favorites:[]},actions:{addFavorite(i){t(n=>{r().state.favorites.find(c=>c.id===i.id)||n.state.favorites.push(i)})},getFavorite(i){return r().state.favorites.find(n=>n.id==i)},updateFavorite(i){const n=r().state.favorites.findIndex(c=>c.id===i.id);if(n===-1)return;let s;return t(c=>{const p=c.state.favorites[n];s=$($({},p),i),c.state.favorites[n]=s}),s},removeFavorite(i){t(n=>{const s=n.state.favorites.findIndex(c=>c.id===i.id);n.state.favorites.splice(s,1)})}}})),{name:"@Glinks:favorites",version:1,partialize:({state:t})=>({state:t})})),er=ie()(ce(Se((t,r)=>({state:{history:{}},actions:{getInfo(i){return r().state.history[i]},setInfo({id:i,time:n}){t(s=>void(s.state.history[i]={time:n}))}}})),{name:"@Glinks:playerhistory",version:1,partialize:({state:t})=>({state:t})})),oe=ie()(ce(Se((t,r)=>({state:{favorites_filters:{language:"all",sorting:"time",status:"all"},clap_control:{on:!1,triggerValue:350}},actions:{setPreferences(i){t(n=>void(n.state=$($({},n.state),i)))}}})),{name:"@Glinks:preferences",version:1,partialize:({state:t})=>({state:t})})),tr="___@GLinksS3arch",nr="___@GLinksRel3ases",rr="___@GLinks4nimes",ir="___@GLinksEp1sode",or=t=>new Promise(r=>setTimeout(r,t));function ar({videoProps:t,playerOptions:r,onReady:i}){const n=C(null),s=c=>{var p;c&&n.current&&((p=n.current.elements.wrapper)==null||p.appendChild(c))};return I(()=>{if(!n.current){const c=new kt("video",r);n.current=c,i&&i(c)}},[r,t]),e("video",re($({},t),{ref:s}))}const sr=async({onClap:t,triggerValue:r})=>{const i=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,s=n.createMediaStreamSource(i),c=n.createAnalyser();s.connect(c);let p=0;const a=new Float32Array(1024);function m(){requestAnimationFrame(m),c.getFloatTimeDomainData(a),g(a)&&t&&t()}function g(d){const f=Date.now();if(f-p<200)return!1;let y=0,h=0;for(let x=1;x<d.length;x++)Math.abs(d[x])>.25&&y++,(d[x]>0&&d[x-1]<0||d[x]<0&&d[x-1]>0)&&h++;return y>r&&h>30?(p=f,!0):!1}return m(),function(){n.close(),i.getTracks().forEach(f=>f.stop())}},cr=l.div`
  display: flex;
  border-radius: 2px;
  margin: 0 auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${t=>Ne`
    & div:nth-child(${t.focusedButton}) {
      background-color: #00b2ff;
    }
  `}

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s linear;

    width: 80px;
    height: 80px;

    position: relative;

    background-color: rgba(0, 0, 0, 0.6);

    svg {
      font-size: 3.2rem;
      color: #fff;
    }
  }
`,be=l.span`
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  left: 0;
  width: 0;
  height: 80px;
`;function lr({onPlay:t,onPause:r,onBackward:i,onForward:n,playing:s}){const c=()=>{if(!d.current||!f.current||!y.current||!h.current||!m)return;let w;p===1&&(w=ve(d.current,3e3),w.onfinish=()=>{b.current?r&&r():t&&t(),S.current()}),p===2&&i&&(w=ve(y.current,3e3),w.onfinish=()=>{i(),S.current()}),p===3&&n&&(w=ve(f.current,3e3),w.onfinish=()=>{n(),S.current()}),p===4&&(w=ve(h.current,3e3),w.onfinish=()=>{g(!1)}),w&&(x.current=w,w.play())},[p,a]=k(0),[m,g]=k(!1),d=C(null),f=C(null),y=C(null),h=C(null),x=C(null),S=C(c),b=C(s),A=C(null),{triggerValue:v}=oe(w=>w.state.clap_control);I(()=>(sr({onClap:T,triggerValue:v}).then(w=>{A.current=w}),()=>{A.current&&A.current()}),[]),I(()=>{b.current=s},[s]),I(()=>{c()},[p]),I(()=>{S.current=c},[c]);const T=P(()=>{var w;(w=x.current)==null||w.cancel(),g(!0),a(j=>j===4?1:j<4?j+1:j-1)},[]);return e(Ge,{in:m,unmountOnExit:!0,children:o(cr,{focusedButton:p,id:"clap-controller",children:[o("div",{children:[s?e(At,{}):e(St,{}),e(be,{ref:d})]}),o("div",{children:[e(Ft,{}),e(be,{ref:y})]}),o("div",{children:[e(Et,{}),e(be,{ref:f})]}),o("div",{children:[e(We,{}),e(be,{ref:h})]})]})})}const ve=(t,r)=>{const i=new KeyframeEffect(t,[{width:"0%"},{width:"100%"}],{duration:r});return new Animation(i)},dr=l.div`
  display: flex;
  padding: 20px 10px;
  overflow-y: scroll;
  flex-direction: column;
  height: 100%;
  position: relative;

  & #close-btn {
    position: absolute;
    top: 20px;
    right: 10px;
    color: #fff;
  }
`,pr=l.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 60px auto 0;

  > p {
    font-size: 16px;
    padding: 10px;
    color: #fff;
  }

  #video-wrapper {
    display: flex;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    box-sizing: border-box;

    & > .plyr {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    #video-wrapper {
      width: 98%;
    }
  }
`,ur=l.div`
  display: flex;
  margin: 0 auto;
  width: 60%;

  & .switchtrack {
    background-color: #fff;
  }

  svg {
    fill: #fff;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    white-space: nowrap;
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    & {
      width: 90%;
    }
  }

  button {
    margin-right: 10px;
  }
`,it=l.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;

  & .Mui-disabled {
    color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.12);
  }

  & button {
    margin: 6px;
  }
`,hr=l.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 22px;
    margin-top: 60px;
    color: #fff;
  }
`,ot=l.span`
  display: inline-block;
  word-break: break-all;
  margin-top: 8px;
  color: #fff;
`,fr=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;

  img {
    border-radius: 50%;
    width: 200px;
    height: auto;
  }
`;function De({episodes:t,shown:r,onClose:i}){if(!t||t.length===0||!t[0])return null;const{data:n,error:s}=le(ir+t.join(""),async()=>{let u=[];for await(const F of t){const _=await xe.getEpisode(String(F)),U={};_.data.source.forEach(ae=>{U[ae.type]=ae.url}),u.push({info:{post_id:_.data.post_id,title_post:_.data.title_post,title:_.data.title,episode_id:_.data.id,control:_.data.control},source:U}),await or(150)}return u},{revalidateOnFocus:!1}),[c,p]=k(!1),[a,m]=k(0),[g,d]=k(""),f=_e(),y=oe(u=>u.state.clap_control),h=C(null),[x,S]=k(!1);I(()=>{if(!n)return;const u=n[a];if(f.actions.getFavorite(u.info.post_id)){const{post_id:_,episode_id:U,title:ae,control:ze}=u.info;f.actions.updateFavorite({id:_,lastWatched:{id:U,title:ae,next:ze.next?ze.next.id:!1}})}},[n,a]);const b=()=>{d("sd")},A=()=>{d("hd")},v=()=>{a-1>=0&&m(u=>u-1)},T=()=>{(n==null?void 0:n.length)&&a<n.length-1&&m(u=>u+1)},w=()=>{const u=n==null?void 0:n.map(({source:F})=>F.sd);u&&Ye(u==null?void 0:u.join(`
`)),i()},j=()=>{const u=n==null?void 0:n.map(({source:F})=>F.hd);u&&Ye(u==null?void 0:u.join(`
`)),i()},V=K(()=>{var u;return!!((u=n==null?void 0:n[0])==null?void 0:u.source.hd)},[n]),te=K(()=>{var u;return!!((u=n==null?void 0:n[0])==null?void 0:u.source.sd)},[n]),ye=K(()=>{if(!!n)return g?n[a].source[g]:n[a].source[V?"hd":"sd"]},[n,a,g]),Y=er(),W=C(),E=P(u=>{if(!n||(W.current||(W.current=Date.now()),!(Date.now()-W.current>3e3)))return;const _=u.detail.plyr.duration,U=u.detail.plyr.currentTime;_-U>=5&&Y.actions.setInfo({id:n[a].info.episode_id,time:U}),W.current=Date.now()},[n,a,Y.actions,W]),ne=P(()=>{c&&T()},[c,T]),Be=P(u=>{if(!n)return;const F=n[a].info.episode_id,_=Y.actions.getInfo(F);_&&(u.detail.plyr.currentTime=_.time),c&&u.detail.plyr.play()},[n,a,Y.actions,c]),we=C(null),Ce=C(null),ke=C(null);I(()=>{we.current=E,Ce.current=ne,ke.current=Be},[ne,E,Be]);const ft=P(u=>{u.on("timeupdate",F=>{!we.current||we.current(F)}),u.on("ended",F=>{!Ce.current||Ce.current(F)}),u.on("loadeddata",F=>{!ke.current||ke.current(F)}),u.on("playing",()=>S(!0)),u.on("pause",()=>S(!1)),h.current=u},[]),mt=()=>{h.current&&h.current.paused&&h.current.play()},gt=()=>{h.current&&h.current.playing&&h.current.pause()},xt=()=>{h.current&&h.current.forward(10)},bt=()=>{h.current&&h.current.rewind(10)};return e(Ae,{open:r,BackdropProps:{sx:{backgroundColor:"rgba(0, 0, 0, 0.96)"}},children:e(Ge,{in:r,unmountOnExit:!0,children:o(dr,{children:[(()=>s?e(X,{title:"Erro!",message:"Houve um erro ao obter links",transparent:!0}):n?o(q,{children:[o(pr,{children:[e("p",{children:`${n[a].info.title_post} |  ${n[a].info.title}`}),o("div",{id:"video-wrapper",children:[e(ar,{onReady:ft,videoProps:{src:ye},playerOptions:{fullscreen:{container:"#video-wrapper"}}}),y.on&&e(lr,{onPlay:mt,onPause:gt,onForward:xt,onBackward:bt,playing:x})]}),o(ur,{children:[e(B,{onClick:v,children:e($t,{})}),e(B,{onClick:T,children:e(Tt,{})}),o("p",{children:["Auto-reprodu\xE7\xE3o:",e(Fe,{classes:{track:"switchtrack"},checked:c,onChange:()=>p(!c)})]})]})]}),o(it,{children:[te&&e(H,{disabled:(g||(V?"hd":"sd"))==="sd",startIcon:e(Ue,{}),variant:"contained",onClick:b,children:"Assistir SD"}),V&&e(H,{disabled:(g||(V?"hd":"sd"))==="hd",startIcon:e(qe,{}),variant:"contained",onClick:A,children:"Assistir HD"})]}),o(it,{children:[te&&e(H,{startIcon:e(Ue,{}),variant:"contained",onClick:w,children:"Copiar Link's SD"}),V&&e(H,{startIcon:e(qe,{}),variant:"contained",onClick:j,children:"Copiar Link's HD"})]}),o(hr,{children:[V&&e("h4",{children:"Links HD"}),n.map(u=>(u==null?void 0:u.source.hd)?e(ot,{children:u==null?void 0:u.source.hd}):null),te&&e("h4",{children:"Links SD"}),n.map(u=>(u==null?void 0:u.source.sd)?e(ot,{children:u==null?void 0:u.source.sd}):null)]})]}):e(fr,{children:e("img",{src:Zn})}))(),e(B,{id:"close-btn",onClick:i,children:e(We,{})})]})})})}function mr(n){var s=n,{count:t=1,sx:r}=s,i=He(s,["count","sx"]);return e(q,{children:new Array(t).fill(null).map((c,p)=>e(Dt,$({variant:"rectangular",sx:$({margin:"2px",borderRadius:"4px"},r)},i),`${p} - ${Date.now()}`))})}const D=_t(mr),gr=l.div`
  margin-top: 20px;
`,at=l(M).attrs({variant:"body1"})`
  font-weight: 500;
`,Ie=l(Ke)`
  max-width: 60px;
  text-align: center;
`,st=l.form`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  row-gap: 8px;
  margin-top: 20px;
`,Me=l.div`
  display: flex;
  ${t=>t.breakable&&Ne`
      flex-wrap: wrap;
    `}
`,Pe=l.span`
  display: inline-block;
  width: ${t=>t.gap}px;
`,ct=l(H)``;function xr({anime:t}){const[r,i]=k(!1),[n,s]=k([]),c=()=>i(!1),p=a=>{a.preventDefault();const m=a.target,g=new FormData(m);if(g.has("single")){const d=Number(g.get("single"));if(d>t.episodes.length)return alert(`${t.title} tem s\xF3 ${t.episodes.length} epis\xF3dios`);if(d<=0)return alert("Preencha o campo com valores numericos positivos.");const f=t.episodes[d-1];s([f.id]),i(!0)}if(g.has("from")&&g.has("to")){const d=Number(g.get("from")),f=Number(g.get("to"));if(!d||d<=0||!f||f<=0)return alert("Preencha o campo com valores numericos positivos.");if(d>f)return alert("O valor 'At\xE9' deve ser maior que o valor do campo 'De'.");if(f>t.episodes.length)return alert(`${t.title} tem s\xF3 ${t.episodes.length} epis\xF3dios`);let y=[];for(let h=d-1;h<f;h++)y.push(t.episodes[h].id);s(y),i(!0)}};return o(gr,{children:[o(Me,{breakable:!0,children:[o(st,{onSubmit:p,children:[e(at,{children:"Baixar um epis\xF3dio"}),o(Me,{children:[e(Ie,{type:"number",autoComplete:"off",name:"single",placeholder:"N\xBA"}),e(Pe,{gap:8}),e(ct,{type:"submit",children:"Ir"})]})]}),o(st,{onSubmit:p,children:[e(at,{children:"Baixar m\xFAltiplos epis\xF3dios"}),o(Me,{children:[e(Ie,{type:"number",autoComplete:"off",name:"from",placeholder:"De"}),e(Pe,{gap:12}),e(Ie,{type:"number",autoComplete:"off",name:"to",placeholder:"At\xE9"}),e(Pe,{gap:8}),e(ct,{type:"submit",children:"Ir"})]})]})]}),e(De,{shown:r,onClose:c,episodes:n})]})}const br=l(N)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 28px;
  margin: 0 40px;
  margin-top: 20px;
  position: relative;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
  @media screen and (max-width: 720px) {
    margin: 0;
  }
`,vr=l.div`
  display: flex;
`,yr=l(It)`
  margin: 5px 0;
`,wr=l.div`
  display: flex;
  flex: 1;
  column-gap: 20px;

  flex-wrap: wrap;

  border-radius: 10px;

  img {
    height: 380px;
    object-fit: cover;
  }
`,Cr=l.div`
  min-width: 250px;
  height: 380px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  button {
    z-index: 999;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto;
    img {
      margin: 0;
    }
  }

  @media screen and (max-width: 720px) {
    margin: 0 auto;
  }
`,kr=l.div`
  flex: 1;
  min-width: 260px;
  margin-top: 20px;
`,lt=l(M).attrs(t=>({variant:t.variant||"h4",color:"text.primary"}))`
  font-weight: 400;
`,z=l(M).attrs({variant:"body1",color:"text.secondary"})`
  margin-bottom: 6px;
`,G=l(O).attrs({component:"span",color:"text.primary"})`
  font-weight: 600;
  display: inline;
`,Sr=l.span`
  background: #0077b6;
  opacity: 0.9;
  border-radius: 5px;
  padding: 2px;
  margin: 2px;
  color: #ffffff;
  font-family: Roboto;
`,Ar=l.div`
  p {
    display: inline;
  }

  p::after {
    content: '${t=>t.text.slice(0,280)}...';
    animation: ${({expanded:t,text:r})=>Er(t?r:r.slice(0,280)+"...")}
      ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`,Fr=l(de)`
  padding: 5px;
  border-radius: 5px;
  margin-left: 2px;
  margin-bottom: 1px;
`,Er=t=>Mt`
   0% {
    content: inherit;
  }
  50% {
    filter: blur(1px);
  }
  
  100% {
    content: '${t}'
  }
`,$r=l.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 12px 0;

  & > div {
    margin: 12px 5px;
    padding: 0 4px;

    span {
      margin: 0 8px;
      color: inherit;
    }

    button {
      font-weight: 500;
      font-size: 14px;
      white-space: nowrap;
      color: inherit;
      background: transparent;
      outline: none;
      border: 0;
    }

    p {
      margin: 0;
    }
  }
`;function Tr(){const{id:t}=Pt(),r=_e(),i=Q(),[n,s]=k(!1),[c,p]=k([]),a=()=>s(!1);if(!t)return i("/"),null;const{data:m,error:g}=le(rr+t,async()=>await xe.getAnime(t)),d=m==null?void 0:m.data,f=r.actions.getFavorite(t),[y,h]=k(!0),x=K(()=>{if(d==null?void 0:d.description)return d.description.length>280},[d]),[S,b]=k(!1),[A,v]=k(()=>!!f),[T,w]=k(()=>!!(f==null?void 0:f.completed)),j=()=>{b(!S)},V=()=>{if(!!d){if(v(!A),A)return r.actions.removeFavorite(d);r.actions.addFavorite(re($({},d),{completed:!1}))}},te=()=>{if(!d)return;const E=!T,ne=r.actions.getFavorite(t);ne&&(r.actions.updateFavorite(re($({},ne),{completed:E})),w(E))},ye=()=>{const E=f==null?void 0:f.lastWatched.id;E&&(p([E]),s(!0))},Y=()=>{const E=f==null?void 0:f.lastWatched.next;E&&(p([E]),s(!0))},W=()=>{h(!1)};return I(()=>{b(!x)},[x]),g?e(X,{title:"Erro!",message:"Erro ao buscar dados do anime",onRetry:()=>location.reload()}):o(br,{children:[o(wr,{children:[o(Cr,{children:[d&&e("img",{onLoad:W,src:d.thumbnail}),y&&e(D,{height:380,width:250,sx:{margin:"0 auto",position:"absolute",top:0,left:0}})]}),o(kr,{children:[d?o(q,{children:[e(lt,{variant:"h5",children:d.title}),o(z,{children:[e(G,{children:"Ano:"})," ",d.year]}),e(z,{children:o(vr,{style:{flexWrap:"wrap",alignItems:"center"},children:[e(G,{children:"G\xEAneros:"})," ",d.genres.split(",").map(E=>e(Sr,{children:rt[E]||E}))]})}),o(z,{children:[e(G,{children:"Autor:"})," ",d.author||"null"]}),o(z,{children:[e(G,{children:"Dire\xE7\xE3o:"})," ",d.direction||"null"]}),o(z,{children:[e(G,{children:"Est\xFAdios:"})," ",d.studio||"null"]}),o(z,{children:[e(G,{children:"Avalia\xE7\xE3o:"})," ",d.score||"null"," / 10"]}),o(z,{children:[e(G,{children:"Dura\xE7\xE3o:"})," ",d.duration||"null"]}),o(z,{children:[e(G,{children:"Epis\xF3dios:"})," ",d.episodes.length||"null"]})]}):o(q,{children:[e(D,{height:40,width:180,sx:{margin:"5px 0"}}),e(D,{count:7,sx:{margin:"5px 0"}})]}),d?o($r,{children:[e(B,{onClick:V,children:A?e(Qe,{}):e(Lt,{})}),e(B,{onClick:te,children:T?e(Rt,{}):e(Bt,{})}),(f==null?void 0:f.lastWatched)&&e("div",{children:o(z,{children:[o("button",{onClick:ye,children:["Continuar ",f.lastWatched.title]}),f.lastWatched.next&&o(q,{children:[e("span",{children:"|"}),e("button",{onClick:Y,children:"Prox\xEDmo Epis\xF3dio"})]})]})})]}):e(D,{sx:{margin:"4px 0"},height:50}),e(yr,{}),d?o(q,{children:[e(lt,{variant:"h6",children:"Descri\xE7\xE3o"}),o(Ar,{expanded:S,text:d.description,children:[e(z,{}),x&&o(Fr,{onClick:j,children:["Ver ",S?"menos":"mais"]})]})]}):o(q,{children:[e(D,{sx:{margin:"4px 0"},height:30,width:110}),e(D,{count:3})]})]})]}),d?e(xr,{anime:d}):e(D,{sx:{marginTop:"20px"},height:60}),e(De,{shown:n,onClose:a,episodes:c})]})}const Le=ie()((t,r)=>({state:{props:{}},actions:{setProps(i){t({state:{props:$($({},r().state.props),i)}})},resetProps(){t({state:{props:{}}})}}})),_r=l(Ee)`
  width: 100%;
  min-height: 260px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,Dr=l.span`
  background: ${t=>t.bg};
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 4px;
  padding: 0 1px;
  > span {
    font-weight: 500;
  }
`,Ir=l(de)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Mr({anime:t}){return o(_r,{children:[e(Ir,{"data-animeid":t.id}),e($e,{component:"img",height:"260",image:t.thumbnail,alt:`${t.title} cover image`}),e(Te,{children:e(M,{variant:"body2",component:"div",children:t.title})}),e(Dr,{bg:"#0077b6",children:e(M,{variant:"caption",color:"common.white",children:t.language[0].toUpperCase()+t.language.substring(1)})})]})}const Pr=l(N)`
  border-radius: 10px;
  margin: 0 auto;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 20px;
  }

  @media screen and (max-width: 400px) {
    margin: 0 10px;
  }
`;function Lr({onSubmit:t}){const r=oe(),{favorites_filters:i}=r.state;return e(Pr,{children:e("form",{onSubmit:s=>{if(s.preventDefault(),!s.target)return;const c=new FormData(s.target);let p={};for(const[a,m]of c.entries())p[a]=m;r.actions.setPreferences({favorites_filters:p}),t()},children:o(Je,{children:[e(pe,{children:"Idioma"}),o(ue,{defaultValue:i.language||"all",name:"language",row:!0,children:[e(L,{value:"all",control:e(R,{}),label:"Todos"}),e(L,{value:"dubbed",control:e(R,{}),label:"Dublados"}),e(L,{value:"subtitle",control:e(R,{}),label:"Legendados"})]}),e(pe,{children:"Ordem"}),o(ue,{defaultValue:i.sorting||"asc",name:"sorting",row:!0,children:[e(L,{value:"asc",control:e(R,{}),label:"Alfab\xE9tica"}),e(L,{value:"time",control:e(R,{}),label:"Ultimo adicionado"})]}),e(pe,{children:"Estado"}),o(ue,{defaultValue:i.status||"watching",name:"status",row:!0,children:[e(L,{value:"all",control:e(R,{}),label:"Todos"}),e(L,{value:"watching",control:e(R,{}),label:"Assistindo"}),e(L,{value:"completed",control:e(R,{}),label:"Completados"})]}),e(H,{variant:"contained",type:"submit",children:"Aplicar"})]})})})}const Rr=l(O).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,Br=l(N)`
  height: 60px;
  margin: 0px 0px 20px;
  position: relative;

  button {
    position: absolute;
    right: 10px;
    top: 30px;
    transform: translateY(-50%);
    font-size: 26px;
  }
`,zr=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 15px;
  justify-items: center;
  grid-auto-rows: 1fr;
`;function jr(){const[t,r]=k(!1),i=Le(b=>b.actions),n=C(),[s,c]=k(""),p=_e(b=>b.state.favorites),{favorites_filters:a}=oe(b=>b.state),m=Q();I(()=>(i.setProps({inputRef:n,placeholder:"Buscar Favoritos",onKeyDown:void 0,onChange:d}),setTimeout(()=>{n.current&&(n.current.value="")},200),i.resetProps),[]);const g=C(),d=b=>{const A=b.target.value;g.current&&clearInterval(g.current),g.current=setTimeout(()=>{c(A)},300)},f=()=>{r(!0)},y=()=>{r(!1)},h=b=>{const{nodeName:A,dataset:v}=b.target;A!=="BUTTON"||!v.animeid||m(`/anime/${v.animeid}`)},x={dubbed:"dublado",subtitle:"legendado"},S=K(()=>{let b=[];const A=v=>{if(a.language!=="all"&&v.language.toLowerCase()!==x[a.language])return!1;if(a.status!=="all"){const T=v.completed?"completed":"watching";if(a.status!==T)return!1}return s?v.title.toLowerCase().includes(s.toLowerCase()):!0};if(a.sorting==="time"){for(let v=p.length-1;v>=0;v--)A(p[v])&&b.push(p[v]);return b}for(let v=0;v<p.length;v++)A(p[v])&&b.push(p[v]);return b.sort((v,T)=>v.title>T.title?1:v.title<T.title?-1:0)},[a,p,s]);return o(Rr,{children:[e(Br,{children:e(B,{onClick:f,children:e(Xe,{})})}),e(zr,{onClick:h,children:S.map(b=>e(Mr,{"data-animeid":b.id,anime:re($({},b),{id:String(b.id)})}))}),e(Ae,{open:t,onClose:y,children:e(O,{sx:Vr.box,children:e(Lr,{onSubmit:y})})})]})}const Vr={box:{maxWidth:"400px",height:"300px",margin:"0 auto",position:"relative",top:"50%",transform:"translateY(-50%)"},title:{fontSize:{lg:18,md:16,sm:14,xs:12}},text:{fontSize:{lg:14,md:14,sm:12,xs:10}},iconButton:{alignSelf:"center"},favoriteSkeleton:{container:{display:"flex",alignItems:"center"},middle:{display:"flex",flexDirection:"column",padding:"10px",alignSelf:"start",flex:1}}};function Or(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const Hr=l(Ee)`
  width: 180px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,Nr=l.span`
  background: ${t=>t.bg};
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 4px;
  padding: 0 1px;
`,Gr=l(de)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Wr({anime:t}){return o(Hr,{children:[e(Gr,{"data-animeid":t.id}),e($e,{component:"img",height:"260",image:t.thumbnail,alt:`${t.title} cover image`}),e(Te,{children:e(M,{variant:"body2",component:"div",children:t.title})}),e(Nr,{bg:"#0077b6",children:e(M,{variant:"caption",color:"common.white",children:t.dubbed?"Dublado":"Legendado"})})]})}const Ur=l(Ee)`
  width: 320px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,qr=l(de)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Yr({episode:t,onAction:r}){return o(Ur,{children:[e(qr,{onClick:()=>r(t)}),e($e,{component:"img",height:"180",image:t.thumbnail,alt:`${t.anime.title} ${t.title_episode}`}),o(Te,{children:[e(M,{variant:"body1",component:"div",children:t.anime.title}),e(M,{variant:"body1",component:"div",children:t.title_episode})]})]})}const Kr=l(O).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
`,Qr=l.div``,Z=l(zt).attrs(()=>({leftIcon:Ze({}),rightIcon:Ze({})}))`
  [data-arrow] {
    display: ${({arrows:t})=>t?"flex":"none"};
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.1s linear;

    width: 50px;
    height: 50px;
    z-index: 1000;

    cursor: pointer;

    svg {
      fill: #fff;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.5);

      svg {
        fill: #000;
      }
    }
  }

  [data-arrow='left'] {
    position: absolute;
    top: calc(50% - 25px);
    left: 10px;

    svg {
      transform: rotate(-180deg);
    }
  }
  [data-arrow='right'] {
    position: absolute;
    top: calc(50% - 25px);
    right: 10px;
  }
`,ee=l(M).attrs(()=>({variant:"h6"}))`
  margin-top: 8px;
`;function Jr(){const t=Q(),[r,i]=k(),[n,s]=k(!1),c=()=>s(!1),{error:p,data:a}=le(nr,xe.getReleases),m=K(()=>!Or()&&a,[a]),g=P(h=>{i([h.id]),s(!0)},[]),d=P(h=>{const{nodeName:x,dataset:S}=h.target;x!=="BUTTON"||!S.animeid||t(`anime/${S.animeid}`)},[t]),f=P(()=>e(D,{width:180,height:350,count:12}),[]),y=P(h=>h.map(x=>e(Wr,{anime:x},x.id)),[]);return p?e(X,{title:"Erro!",message:"Erro ao buscar dados",onRetry:()=>location.reload()}):o(Kr,{children:[e(ee,{color:"text.primary",children:"Novos Epis\xF3dios"}),e(Z,{arrows:m,children:a?a.lancamentos.map(h=>e(Yr,{episode:h,onAction:g},h.id)):e(D,{width:320,height:260,count:8})}),o(Qr,{onClick:d,children:[e(ee,{color:"text.primary",children:"Ultimos Adicionados"}),e(Z,{arrows:m,children:a?y(a==null?void 0:a.ultimos_adicionados):f()}),e(ee,{color:"text.primary",children:"Mais Vistos"}),e(Z,{arrows:m,children:a?y(a==null?void 0:a.mais_vistos):f()}),e(ee,{color:"text.primary",children:"Filmes"}),e(Z,{arrows:m,children:a?y(a==null?void 0:a.filmes):f()}),e(ee,{color:"text.primary",children:"Dublados"}),e(Z,{arrows:m,children:a?y(a==null?void 0:a.dublados):f()}),e(ee,{color:"text.primary",children:"Desenhos Animados"}),e(Z,{arrows:m,children:a?y(a==null?void 0:a.cartoons):f()})]}),e(De,{shown:n,onClose:c,episodes:r})]})}const dt=ie()(ce(t=>{const r=i=>t(i);return{state:{mode:"light"},actions:{toggle:()=>r(({state:i})=>({state:{mode:i.mode==="light"?"dark":"light"}}))}}},{getStorage:()=>localStorage,name:"@GLinks:theme",version:1,partialize:({state:t})=>({state:{mode:t.mode}})})),Xr=l.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 5px 0;
`;function Zr(){const t=dt(),r=t.state.mode==="dark",i=Q(),[n,s]=k(r),c=()=>{s(!n),setTimeout(t.actions.toggle,80)},p=()=>{i("/favorites")},a=()=>{i("/")},m=()=>{i("/preferences")};return e(Xr,{children:o(jt,{children:[o(he,{onClick:a,children:[e(fe,{children:e(Vt,{size:25})}),e(me,{primary:"Inicio"})]}),o(he,{onClick:c,children:[e(fe,{children:n?e(Ot,{size:25}):e(Ht,{size:25})}),e(me,{primary:`Tema: ${n?"Escuro":"Claro"}`}),e(Fe,{checked:n})]}),o(he,{onClick:p,children:[e(fe,{children:e(Qe,{size:25})}),e(me,{primary:"Favoritos"})]}),o(he,{onClick:m,children:[e(fe,{children:e(Nt,{size:25})}),e(me,{primary:"Preferencias"})]})]})})}const ei=l(Gt)``,ti=l(Wt)`
  margin: 0 10px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,ni=l(Ut)``;function ri(){const t=qt(),[r,i]=k(!1),n=C(),s=Yt();I(()=>{i(!1)},[s]);const c=Q(),p=P(()=>{i(!1)},[]),a=P(()=>{i(!0)},[]),m=d=>{var f;d.key==="Enter"&&c(`search?q=${(f=n.current)==null?void 0:f.value}`)},g=Le(d=>d.state.props);return o(ei,{children:[e(ni,{children:o(et,{children:[e(B,{onClick:a,children:e(Kt,{size:24,color:t.palette.primary.contrastText})}),e(ti,$({placeholder:"Buscar...",fullWidth:!0,onKeyDown:m,inputRef:n,style:{color:t.palette.primary.contrastText}},g)),e(B,{children:e(Qt,{size:24,color:t.palette.primary.contrastText})})]})}),e(et,{}),e(Jt,{variant:"temporary",open:r,onOpen:a,onClose:p,swipeAreaWidth:10,children:e(Zr,{})})]})}const ii=l(O).attrs({sx:{backgroundColor:"background.default"}})`
  min-height: 100vh;
`;function oi(){return o(ii,{children:[e(ri,{}),e(Xt,{})]})}const ai=l(O).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,si=l.div`
  display: flex;
  align-items: center;
`,ci=l(N)`
  padding: 20px;
  p {
    margin-right: 10px;
  }
  input {
    width: 40px;
  }
  button {
    margin: 0 10px;
  }
`;function li(){const{state:t,actions:r}=oe(),i=()=>{var m,g;const p=(m=n.current)==null?void 0:m.value,a=(g=s.current)==null?void 0:g.checked;typeof a=="boolean"&&typeof p=="string"&&r.setPreferences({clap_control:{on:a,triggerValue:Number(p)}})},n=C(null),s=C(null),c=C(t.clap_control.on);return I(()=>{n.current&&(n.current.value=t.clap_control.triggerValue.toString())},[]),e(ai,{children:o(ci,{children:[e("h3",{children:"Controle por palmas"}),o(si,{children:[e(Fe,{defaultChecked:c.current,inputRef:s}),e("p",{children:"Valor do gatilho:"}),e(Ke,{inputRef:n,type:"number"}),e(B,{onClick:i,children:e(Zt,{})})]})]})})}function di(t){return new Array(t).fill(null)}const pi=l(N)`
  border-radius: 10px;
  margin: 0 auto;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 20px;
  }

  @media screen and (max-width: 400px) {
    margin: 0 10px;
  }
`;function ui({onSubmit:t}){const[r,i]=tt(),n=r.get("lang");return e(pi,{children:e("form",{onSubmit:c=>{if(c.preventDefault(),!c.target)return;const p=new FormData(c.target);let a={};for(const m of r.entries()){const g=m[0],d=m[1];a[g]=d}for(const m of p.entries()){const g=m[0],d=m[1];a[g]=d}i(a,{replace:!0}),t()},children:o(Je,{children:[e(pe,{children:"Idioma"}),o(ue,{defaultValue:n||"",name:"lang",row:!0,children:[e(L,{value:"",control:e(R,{}),label:"Todos"}),e(L,{value:"dublado",control:e(R,{}),label:"Dublados"}),e(L,{value:"legendado",control:e(R,{}),label:"Legendados"})]}),e(H,{variant:"contained",type:"submit",children:"Aplicar"})]})})})}const hi=l(O).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,fi=l(N)`
  height: 60px;
  margin: 0px 0px 20px;
  position: relative;

  button {
    position: absolute;
    right: 10px;
    top: 30px;
    transform: translateY(-50%);
    font-size: 26px;
  }
`,pt=l(N).attrs({component:"li"})`
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  padding: 10px;
  position: relative;

  & + li {
    margin-top: 10px;
  }
`,mi=l(en)`
  text-decoration: none;
  display: flex;
  flex: 1;
  color: inherit;

  -webkit-tap-highlight-color: transparent;
`,ut=l.div`
  width: 160px;
  height: 230px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  overflow: hidden;
  margin-right: 10px;

  img {
    object-fit: cover;
    width: 160px;
    height: 230px;
  }
`,ht=l.div`
  margin-top: 10px;
`,gi=l(M).attrs(()=>({variant:"h6"}))`
  font-weight: 400;
`,xi=l(M).attrs(()=>({variant:"body1",color:"text.secondary"}))``;l(N)`
  margin: 4px;
  padding: 5px 10px;
`;const bi=l.div`
  display: flex;
  margin-top: 4px;
  flex-wrap: wrap;
  gap: 3px;
`,vi=l.span`
  background: #0077b6;
  border-radius: 5px;
  padding: 0 2px;
  margin-left: 2px;
  color: #fafafa;
  font-weight: 300;
  font-size: 15px;
  font-family: Roboto;
`;function yi(){const[t,r]=k(!1),i=Q(),[n]=tt(),s=n.get("q");let c={};for(const[h,x]of n.entries())c[h]=x;delete c.q;const{data:p,error:a}=le(tr+n.toString(),()=>xe.search(s||"",c)),m=Le(h=>h.actions),g=C();I(()=>(m.setProps({inputRef:g,onKeyDown:h=>{var x;h.key==="Enter"&&i(`?q=${(x=g.current)==null?void 0:x.value}`,{replace:!0})}}),m.resetProps),[]);const d=()=>{r(!0)},f=()=>{r(!1)},y=()=>a?e(X,{title:"Erro!",message:"Houve um erro ao buscar dados",onRetry:()=>location.reload()}):p?Array.isArray(p)?p.length===0?e(X,{title:"Nada encontrado!",message:"Teste pesquisar por outro termo"}):p.slice(0,300).map(h=>{var x;return e(pt,{children:o(mi,{to:`/anime/${h.id}`,children:[e(ut,{children:e("img",{src:h.thumbnail})}),o(ht,{children:[e(gi,{sx:Re.title,children:h.title.length>70?h.title.slice(0,67)+"...":h.title}),o(xi,{sx:Re.text,children:["Ano: ",h.year]}),e(bi,{children:(x=h.genres)==null?void 0:x.split(",").slice(0,5).map(S=>e(vi,{children:rt[S]}))})]})]})},h.id)}):e(X,{title:"Erro!",message:"Tipo de resposta do servidor desconhecida"}):di(10).map((h,x)=>o(pt,{children:[e(ut,{children:e(D,{width:160,height:230})}),o(ht,{style:{flex:1},children:[e(D,{height:34,sx:{marginTop:"4px",marginRight:"10px"}}),e(D,{sx:{marginTop:"4px",marginRight:"60px"}}),e(D,{sx:{marginTop:"4px"}})]})]},String(x)));return o(hi,{children:[e(fi,{children:e(B,{onClick:d,children:e(Xe,{})})}),e("ul",{children:y()}),e(Ae,{open:t,onClose:f,children:e(tn,{sx:Re.box,children:e(ui,{onSubmit:f})})})]})}const Re={box:{maxWidth:"400px",height:"300px",margin:"0 auto",position:"relative",top:"50%",transform:"translateY(-50%)"},title:{fontSize:{lg:20,md:18,sm:16,xs:14}},text:{fontSize:{lg:16,md:16,sm:14,xs:12}}},wi=nn`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`,Ci={palette:{mode:"light",primary:{main:"#3f51b5"},secondary:{main:"#f50057"},background:{default:"#f3f3f3",paper:"#ffffff"}}},ki={palette:{mode:"dark",primary:{main:"#3f51b5"},secondary:{main:"#f50057"}}},Si=nt(Ci),Ai=nt(ki),Fi=()=>{const t=dt(r=>r.state.mode);return e(rn,{injectFirst:!0,children:o(on,{theme:t==="light"?Si:Ai,children:[e(an,{children:e(sn,{children:o(J,{path:"/",element:e(oi,{}),children:[e(J,{index:!0,element:e(Jr,{})}),e(J,{path:"anime/:id",element:e(Tr,{})}),e(J,{path:"favorites",element:e(jr,{})}),e(J,{path:"search",element:e(yi,{})}),e(J,{path:"preferences",element:e(li,{})})]})})}),e(cn,{}),e(wi,{})]})})};ln(e(Fi,{}),document.getElementById("app"));export{Ti as __vite_legacy_guard};
