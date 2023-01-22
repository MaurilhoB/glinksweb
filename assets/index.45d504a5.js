var wt=Object.defineProperty,Ct=Object.defineProperties;var kt=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var He=(t,r,o)=>r in t?wt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,T=(t,r)=>{for(var o in r||(r={}))Ve.call(r,o)&&He(t,o,r[o]);if(oe)for(var o of oe(r))Oe.call(r,o)&&He(t,o,r[o]);return t},ee=(t,r)=>Ct(t,kt(r));var Ne=(t,r)=>{var o={};for(var i in t)Ve.call(t,i)&&r.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&oe)for(var i of oe(t))r.indexOf(i)<0&&Oe.call(t,i)&&(o[i]=t[i]);return o};import{s as l,B as H,j as a,a as e,b as N,c as St,d as te,p as ie,i as ke,e as S,y as D,P as At,C as Ge,l as k,F as P,f as We,M as Et,g as Ft,h as $t,k as Tt,m as Ue,u as ae,A as q,n as Se,I as j,o as U,q as Dt,r as It,S as Ae,t as qe,v as Ye,w as Ke,x as _t,z as Mt,T as _,D as Qe,E as G,G as Pt,H as se,U as Rt,J as Bt,K as Y,L as Je,N as zt,O as jt,Q as Lt,R as Ee,V as Fe,W as $e,X as Xe,Y as ce,Z as le,_ as R,$ as B,a0 as Ze,a1 as Vt,a2 as et,a3 as Ot,a4 as de,a5 as pe,a6 as Ht,a7 as ue,a8 as Nt,a9 as Gt,aa as Wt,ab as Ut,ac as qt,ad as Yt,ae as Kt,af as Qt,ag as tt,ah as Jt,ai as Xt,aj as Zt,ak as en,al as tn,am as nt,an as nn,ao as rn,ap as on,aq as rt,ar as an,as as sn,at as cn,au as ln,av as K,aw as dn,ax as pn}from"./vendor.c964111c.js";function Mo(){import("data:text/javascript,")}const un=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};un();const hn="A\xE7\xE3o",fn="Aventura",mn="Com\xE9dia",gn="Cotidiano",xn="Dem\xF4nios",bn="Dem\xEAncia",vn="Drama",yn="Ecchi",wn="Escolar",Cn="Espacial",kn="Esportes",Sn="Fantasia",An="Har\xE9m",En="Hist\xF3rico",Fn="Horror",$n="Infantil",Tn="Game",Dn="Josei",In="Magia",_n="Militar",Mn="Mist\xE9rio",Pn="Mecha",Rn="Musical",Bn="Policial",zn="Par\xF3dia",jn="Psicol\xF3gico",Ln="Romance",Vn="Samurai",On="Seinen",Hn="Shoujo",Nn="Shounen",Gn="Sobrenatural",Wn="Suspense",Un="Terror",qn="Trag\xE9dia",Yn="Thriller",Kn="Vampiros",Qn="Hentai",Jn="Yaoi",Xn="Yuri";var ot={acao:hn,aventura:fn,"artes-marciais":"Artes Marciais",comedia:mn,cotidiano:gn,demonios:xn,demencia:bn,drama:vn,ecchi:yn,escolar:wn,espacial:Cn,esportes:kn,fantasia:Sn,"ficcao-cientifica":"Fic\xE7\xE3o Cient\xEDfica",harem:An,historico:En,horror:Fn,infantil:$n,game:Tn,josei:Dn,magia:In,militar:_n,misterio:Mn,mecha:Pn,musical:Rn,policial:Bn,parodia:zn,psicologico:jn,romance:Ln,samurai:Vn,seinen:On,"sci-fi":"Sci-Fi",shoujo:Hn,"shoujo-ai":"Shoujo-Ai",shounen:Nn,"shounen-ai":"Shounen-Ai","slice-of-life":"Slice of Life",sobrenatural:Gn,"super-poderes":"Super Poderes",suspense:Wn,terror:Un,tragedia:qn,thriller:Yn,vampiros:Kn,"vida-escolar":"Vida Escolar",hentai:Qn,yaoi:Jn,yuri:Xn};const Zn=l(H).attrs({sx:{backgroundColor:"background.default"}})`
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
`;var er="/glinksweb/assets/confused.0d849045.png";function Q({onRetry:t,title:r,message:o,transparent:i}){return a(Zn,{style:{backgroundColor:i?"transparent":void 0},children:[e("img",{width:160,src:er,alt:"Confused Anime Girl"}),e("h1",{children:r}),e("p",{children:o}),t&&e(N,{variant:"outlined",onClick:t,children:"Tentar novamente"})]})}var tr="/glinksweb/assets/loading.62848bb2.webp";const he=St.create({baseURL:"https://animes.vision/api/v2"}),fe={async getReleases(){const{data:t}=await he.get("releases");return t},async getEpisode(t){const{data:r}=await he.get(`episode/${t}`);return r},async getAnime(t){const{data:r}=await he.get(`post/${t}`);return r},async search(t,r){const{data:o}=await he.get(`search?busca=${t}`,{params:r});return o}},Te=te()(ie(ke((t,r)=>({state:{favorites:[]},actions:{addFavorite(o){t(i=>{r().state.favorites.find(n=>n.id===o.id)||i.state.favorites.push(o)})},getFavorite(o){return r().state.favorites.find(i=>i.id==o)},updateFavorite(o){const i=r().state.favorites.findIndex(n=>n.id===o.id);if(i===-1)return;let s;return t(n=>{const u=n.state.favorites[i];s=T(T({},u),o),n.state.favorites[i]=s}),s},removeFavorite(o){t(i=>{const s=i.state.favorites.findIndex(n=>n.id===o.id);i.state.favorites.splice(s,1)})}}})),{name:"@Glinks:favorites",version:1,partialize:({state:t})=>({state:t})})),nr=te()(ie(ke((t,r)=>({state:{history:{}},actions:{getInfo(o){return r().state.history[o]},setInfo({id:o,time:i}){t(s=>void(s.state.history[o]={time:i}))}}})),{name:"@Glinks:playerhistory",version:1,partialize:({state:t})=>({state:t})})),ne=te()(ie(ke((t,r)=>({state:{favorites_filters:{language:"all",sorting:"time",status:"all"},clap_control:{on:!1,triggerValue:350}},actions:{setPreferences(o){t(i=>void(i.state=T(T({},i.state),o)))}}})),{name:"@Glinks:preferences",version:1,partialize:({state:t})=>({state:t})})),rr="___@GLinksS3arch",or="___@GLinksRel3ases",ir="___@GLinks4nimes",ar="___@GLinksEp1sode",sr=t=>new Promise(r=>setTimeout(r,t));function cr({videoProps:t,playerOptions:r,onReady:o}){const i=S(null),s=n=>{var u;n&&i.current&&((u=i.current.elements.wrapper)==null||u.appendChild(n))};return D(()=>{if(!i.current){const n=new At("video",r);i.current=n,o&&o(n)}},[r,t]),e("video",ee(T({},t),{ref:s}))}const lr=async({onClap:t,triggerValue:r})=>{const o=await navigator.mediaDevices.getUserMedia({audio:!0}),i=new AudioContext,s=i.createMediaStreamSource(o),n=i.createAnalyser();s.connect(n);let u=0;const c=new Float32Array(1024);function m(){requestAnimationFrame(m),n.getFloatTimeDomainData(c),f(c)&&t&&t()}function f(d){const h=Date.now();if(h-u<200)return!1;let y=0,g=0;for(let x=1;x<d.length;x++)Math.abs(d[x])>.25&&y++,(d[x]>0&&d[x-1]<0||d[x]<0&&d[x-1]>0)&&g++;return y>r&&g>30?(u=h,!0):!1}return m(),function(){i.close(),o.getTracks().forEach(h=>h.stop())}},dr=l.div`
  display: flex;
  border-radius: 2px;
  margin: 0 auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${t=>Ge`
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
`,me=l.span`
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  left: 0;
  width: 0;
  height: 80px;
`;function pr({onPlay:t,onPause:r,onBackward:o,onForward:i,playing:s}){const n=()=>{if(!d.current||!h.current||!y.current||!g.current||!m)return;let C;u===1&&(C=ge(d.current,3e3),C.onfinish=()=>{v.current?r&&r():t&&t(),b.current()}),u===2&&o&&(C=ge(y.current,3e3),C.onfinish=()=>{o(),b.current()}),u===3&&i&&(C=ge(h.current,3e3),C.onfinish=()=>{i(),b.current()}),u===4&&(C=ge(g.current,3e3),C.onfinish=()=>{f(!1)}),C&&(x.current=C,C.play())},[u,c]=k(0),[m,f]=k(!1),d=S(null),h=S(null),y=S(null),g=S(null),x=S(null),b=S(n),v=S(s),A=S(null),{triggerValue:w}=ne(C=>C.state.clap_control);D(()=>(lr({onClap:M,triggerValue:w}).then(C=>{A.current=C}),()=>{A.current&&A.current()}),[]),D(()=>{v.current=s},[s]),D(()=>{n()},[u]),D(()=>{b.current=n},[n]);const M=P(()=>{var C;(C=x.current)==null||C.cancel(),f(!0),c(z=>z===4?1:z<4?z+1:z-1)},[]);return e(We,{in:m,unmountOnExit:!0,children:a(dr,{focusedButton:u,id:"clap-controller",children:[a("div",{children:[s?e(Ft,{}):e(Et,{}),e(me,{ref:d})]}),a("div",{children:[e($t,{}),e(me,{ref:y})]}),a("div",{children:[e(Tt,{}),e(me,{ref:h})]}),a("div",{children:[e(Ue,{}),e(me,{ref:g})]})]})})}const ge=(t,r)=>{const o=new KeyframeEffect(t,[{width:"0%"},{width:"100%"}],{duration:r});return new Animation(o)},ur=l.div`
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
`,hr=l.div`
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
`,fr=l.div`
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
`,mr=l.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 22px;
    margin-top: 60px;
    color: #fff;
  }
`,at=l.span`
  display: inline-block;
  word-break: break-all;
  margin-top: 8px;
  color: #fff;
`,gr=l.div`
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
`;async function xr(t){let r=[];for await(const o of t){const i=await fe.getEpisode(String(o)),s={};i.data.source.forEach(n=>{s[n.type]=n.url}),r.push({info:{post_id:i.data.post_id,title_post:i.data.title_post,title:i.data.title,episode_id:i.data.id,control:i.data.control},source:s}),await sr(150)}return r}function De({episodes:t,shown:r,onClose:o}){if(!t||t.length===0||!t[0])return null;const[i,s]=k(t);D(()=>{s(t)},[t]);const{data:n,error:u}=ae(ar+i.join(""),()=>xr(i),{revalidateOnFocus:!1}),[c,m]=k(!1),[f,d]=k(0),[h,y]=k(""),g=Te(),x=ne(p=>p.state.clap_control),b=S(null),[v,A]=k(!1);D(()=>{if(!n)return;const p=n[f];if(g.actions.getFavorite(p.info.post_id)){const{post_id:$,episode_id:re,title:yt,control:Le}=p.info;g.actions.updateFavorite({id:$,lastWatched:{id:re,title:yt,next:Le.next?Le.next.id:!1}})}},[n,f]);const w=()=>{y("sd")},M=()=>{y("hd")},C=()=>{if(f-1>=0){d(p=>p-1);return}if(f===0){const p=n?n[0]:null,F=p==null?void 0:p.info.control.prev;F&&s([F.id,...i])}},z=()=>{if((n==null?void 0:n.length)&&f<n.length-1){d($=>$+1);return}const p=n?n[n.length-1]:null,F=p==null?void 0:p.info.control.next;F&&(s([...i,F.id]),d($=>$+1))},xe=()=>{const p=n==null?void 0:n.map(({source:F})=>F.sd);p&&Ke(p==null?void 0:p.join(`
`)),o()},be=()=>{const p=n==null?void 0:n.map(({source:F})=>F.hd);p&&Ke(p==null?void 0:p.join(`
`)),o()},V=q(()=>{var p;return!!((p=n==null?void 0:n[0])==null?void 0:p.source.hd)},[n]),Z=q(()=>{var p;return!!((p=n==null?void 0:n[0])==null?void 0:p.source.sd)},[n]),ve=q(()=>{if(!!n)return h?n[f].source[h]:n[f].source[V?"hd":"sd"]},[n,f,h]),E=nr(),O=S(),Be=P(p=>{if(!n||(O.current||(O.current=Date.now()),!(Date.now()-O.current>3e3)))return;const $=p.detail.plyr.duration,re=p.detail.plyr.currentTime;$-re>=5&&E.actions.setInfo({id:n[f].info.episode_id,time:re}),O.current=Date.now()},[n,f,E.actions,O]),ze=P(()=>{c&&z()},[c,z]),je=P(p=>{if(!n)return;const F=n[f].info.episode_id,$=E.actions.getInfo(F);$&&(p.detail.plyr.currentTime=$.time),c&&p.detail.plyr.play()},[n,f,E.actions,c]),ye=S(null),we=S(null),Ce=S(null);D(()=>{ye.current=Be,we.current=ze,Ce.current=je},[ze,Be,je]);const mt=P(p=>{var F;p.on("timeupdate",$=>{!ye.current||ye.current($)}),p.on("ended",$=>{!we.current||we.current($)}),p.on("loadeddata",$=>{!Ce.current||Ce.current($)}),p.on("playing",()=>A(!0)),p.on("pause",()=>A(!1)),(F=b.current)==null||F.destroy(),b.current=p},[]),gt=()=>{b.current&&b.current.paused&&b.current.play()},xt=()=>{b.current&&b.current.playing&&b.current.pause()},bt=()=>{b.current&&b.current.forward(10)},vt=()=>{b.current&&b.current.rewind(10)};return e(Se,{open:r,BackdropProps:{sx:{backgroundColor:"rgba(0, 0, 0, 0.96)"}},children:e(We,{in:r,unmountOnExit:!0,children:a(ur,{children:[(()=>u?e(Q,{title:"Erro!",message:"Houve um erro ao obter links",transparent:!0}):n?a(U,{children:[a(hr,{children:[e("p",{children:`${n[f].info.title_post} |  ${n[f].info.title}`}),a("div",{id:"video-wrapper",children:[e(cr,{onReady:mt,videoProps:{src:ve},playerOptions:{fullscreen:{container:"#video-wrapper"}}}),x.on&&e(pr,{onPlay:gt,onPause:xt,onForward:bt,onBackward:vt,playing:v})]}),a(fr,{children:[e(j,{onClick:C,children:e(Dt,{})}),e(j,{onClick:z,children:e(It,{})}),a("p",{children:["Auto-reprodu\xE7\xE3o:",e(Ae,{classes:{track:"switchtrack"},checked:c,onChange:()=>m(!c)})]})]})]}),a(it,{children:[Z&&e(N,{disabled:(h||(V?"hd":"sd"))==="sd",startIcon:e(qe,{}),variant:"contained",onClick:w,children:"Assistir SD"}),V&&e(N,{disabled:(h||(V?"hd":"sd"))==="hd",startIcon:e(Ye,{}),variant:"contained",onClick:M,children:"Assistir HD"})]}),a(it,{children:[Z&&e(N,{startIcon:e(qe,{}),variant:"contained",onClick:xe,children:"Copiar Link's SD"}),V&&e(N,{startIcon:e(Ye,{}),variant:"contained",onClick:be,children:"Copiar Link's HD"})]}),a(mr,{children:[V&&e("h4",{children:"Links HD"}),n.map(p=>(p==null?void 0:p.source.hd)?e(at,{children:p==null?void 0:p.source.hd}):null),Z&&e("h4",{children:"Links SD"}),n.map(p=>(p==null?void 0:p.source.sd)?e(at,{children:p==null?void 0:p.source.sd}):null)]})]}):e(gr,{children:e("img",{src:tr})}))(),e(j,{id:"close-btn",onClick:o,children:e(Ue,{})})]})})})}function br(i){var s=i,{count:t=1,sx:r}=s,o=Ne(s,["count","sx"]);return e(U,{children:new Array(t).fill(null).map((n,u)=>e(Mt,T({variant:"rectangular",sx:T({margin:"2px",borderRadius:"4px"},r)},o),`${u} - ${Date.now()}`))})}const I=_t(br),vr=l.div`
  margin-top: 20px;
`,st=l(_).attrs({variant:"body1"})`
  font-weight: 500;
`,Ie=l(Qe)`
  max-width: 60px;
  text-align: center;
`,ct=l.form`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  row-gap: 8px;
  margin-top: 20px;
`,_e=l.div`
  display: flex;
  ${t=>t.breakable&&Ge`
      flex-wrap: wrap;
    `}
`,Me=l.span`
  display: inline-block;
  width: ${t=>t.gap}px;
`,lt=l(N)``;function yr({anime:t}){const[r,o]=k(!1),[i,s]=k([]);t.episodes=t.episodes.sort((c,m)=>c.id>m.id?1:c.id<m.id?-1:0);const n=()=>o(!1),u=c=>{c.preventDefault();const m=c.target,f=new FormData(m);if(f.has("single")){const d=Number(f.get("single"));if(d>t.episodes.length)return alert(`${t.title} tem s\xF3 ${t.episodes.length} epis\xF3dios`);if(d<=0)return alert("Preencha o campo com valores numericos positivos.");const h=t.episodes[d-1];s([h.id]),o(!0)}if(f.has("from")&&f.has("to")){const d=Number(f.get("from")),h=Number(f.get("to"));if(!d||d<=0||!h||h<=0)return alert("Preencha o campo com valores numericos positivos.");if(d>h)return alert("O valor 'At\xE9' deve ser maior que o valor do campo 'De'.");if(h>t.episodes.length)return alert(`${t.title} tem s\xF3 ${t.episodes.length} epis\xF3dios`);let y=[];for(let g=d-1;g<h;g++)y.push(t.episodes[g].id);s(y),o(!0)}};return a(vr,{children:[a(_e,{breakable:!0,children:[a(ct,{onSubmit:u,children:[e(st,{children:"Baixar um epis\xF3dio"}),a(_e,{children:[e(Ie,{type:"number",autoComplete:"off",name:"single",placeholder:"N\xBA"}),e(Me,{gap:8}),e(lt,{type:"submit",children:"Ir"})]})]}),a(ct,{onSubmit:u,children:[e(st,{children:"Baixar m\xFAltiplos epis\xF3dios"}),a(_e,{children:[e(Ie,{type:"number",autoComplete:"off",name:"from",placeholder:"De"}),e(Me,{gap:12}),e(Ie,{type:"number",autoComplete:"off",name:"to",placeholder:"At\xE9"}),e(Me,{gap:8}),e(lt,{type:"submit",children:"Ir"})]})]})]}),e(De,{shown:r,onClose:n,episodes:i})]})}const wr=l(G)`
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
`,Cr=l.div`
  display: flex;
`,kr=l(Pt)`
  margin: 5px 0;
`,Sr=l.div`
  display: flex;
  flex: 1;
  column-gap: 20px;

  flex-wrap: wrap;

  border-radius: 10px;

  img {
    height: 380px;
    object-fit: cover;
  }
`,Ar=l.div`
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
`,Er=l.div`
  flex: 1;
  min-width: 260px;
  margin-top: 20px;
`,dt=l(_).attrs(t=>({variant:t.variant||"h4",color:"text.primary"}))`
  font-weight: 400;
`,L=l(_).attrs({variant:"body1",color:"text.secondary"})`
  margin-bottom: 6px;
`,W=l(H).attrs({component:"span",color:"text.primary"})`
  font-weight: 600;
  display: inline;
`,Fr=l.span`
  background: #0077b6;
  opacity: 0.9;
  border-radius: 5px;
  padding: 2px;
  margin: 2px;
  color: #ffffff;
  font-family: Roboto;
`,$r=l.div`
  p {
    display: inline;
  }

  p::after {
    content: '${t=>t.text.slice(0,280)}...';
    animation: ${({expanded:t,text:r})=>Dr(t?r:r.slice(0,280)+"...")}
      ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`,Tr=l(se)`
  padding: 5px;
  border-radius: 5px;
  margin-left: 2px;
  margin-bottom: 1px;
`,Dr=t=>Rt`
   0% {
    content: inherit;
  }
  50% {
    filter: blur(1px);
  }
  
  100% {
    content: '${t}'
  }
`,Ir=l.div`
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
`;function _r(){const{id:t}=Bt(),r=Te(),o=Y(),[i,s]=k(!1),[n,u]=k([]),c=()=>s(!1);if(!t)return o("/"),null;const{data:m,error:f}=ae(ir+t,async()=>await fe.getAnime(t)),d=m==null?void 0:m.data,h=r.actions.getFavorite(t),[y,g]=k(!0),x=q(()=>{if(d==null?void 0:d.description)return d.description.length>280},[d]),[b,v]=k(!1),[A,w]=k(()=>!!h),[M,C]=k(()=>!!(h==null?void 0:h.completed)),z=()=>{v(!b)},xe=()=>{if(!!d){if(w(!A),A)return r.actions.removeFavorite(d);r.actions.addFavorite(ee(T({},d),{completed:!1}))}},be=()=>{if(!d)return;const E=!M,O=r.actions.getFavorite(t);O&&(r.actions.updateFavorite(ee(T({},O),{completed:E})),C(E))},V=()=>{const E=h==null?void 0:h.lastWatched.id;E&&(u([E]),s(!0))},Z=()=>{const E=h==null?void 0:h.lastWatched.next;E&&(u([E]),s(!0))},ve=()=>{g(!1)};return D(()=>{v(!x)},[x]),f?e(Q,{title:"Erro!",message:"Erro ao buscar dados do anime",onRetry:()=>location.reload()}):a(wr,{children:[a(Sr,{children:[a(Ar,{children:[d&&e("img",{onLoad:ve,src:d.thumbnail}),y&&e(I,{height:380,width:250,sx:{margin:"0 auto",position:"absolute",top:0,left:0}})]}),a(Er,{children:[d?a(U,{children:[e(dt,{variant:"h5",children:d.title}),a(L,{children:[e(W,{children:"Ano:"})," ",d.year]}),e(L,{children:a(Cr,{style:{flexWrap:"wrap",alignItems:"center"},children:[e(W,{children:"G\xEAneros:"})," ",d.genres.split(",").map(E=>e(Fr,{children:ot[E]||E}))]})}),a(L,{children:[e(W,{children:"Autor:"})," ",d.author||"null"]}),a(L,{children:[e(W,{children:"Dire\xE7\xE3o:"})," ",d.direction||"null"]}),a(L,{children:[e(W,{children:"Est\xFAdios:"})," ",d.studio||"null"]}),a(L,{children:[e(W,{children:"Avalia\xE7\xE3o:"})," ",d.score||"null"," / 10"]}),a(L,{children:[e(W,{children:"Dura\xE7\xE3o:"})," ",d.duration||"null"]}),a(L,{children:[e(W,{children:"Epis\xF3dios:"})," ",d.episodes.length||"null"]})]}):a(U,{children:[e(I,{height:40,width:180,sx:{margin:"5px 0"}}),e(I,{count:7,sx:{margin:"5px 0"}})]}),d?a(Ir,{children:[e(j,{onClick:xe,children:A?e(Je,{}):e(zt,{})}),e(j,{onClick:be,children:M?e(jt,{}):e(Lt,{})}),(h==null?void 0:h.lastWatched)&&e("div",{children:a(L,{children:[a("button",{onClick:V,children:["Continuar ",h.lastWatched.title]}),h.lastWatched.next&&a(U,{children:[e("span",{children:"|"}),e("button",{onClick:Z,children:"Prox\xEDmo Epis\xF3dio"})]})]})})]}):e(I,{sx:{margin:"4px 0"},height:50}),e(kr,{}),d?a(U,{children:[e(dt,{variant:"h6",children:"Descri\xE7\xE3o"}),a($r,{expanded:b,text:d.description,children:[e(L,{}),x&&a(Tr,{onClick:z,children:["Ver ",b?"menos":"mais"]})]})]}):a(U,{children:[e(I,{sx:{margin:"4px 0"},height:30,width:110}),e(I,{count:3})]})]})]}),d?e(yr,{anime:d}):e(I,{sx:{marginTop:"20px"},height:60}),e(De,{shown:i,onClose:c,episodes:n})]})}const Pe=te()((t,r)=>({state:{props:{}},actions:{setProps(o){t({state:{props:T(T({},r().state.props),o)}})},resetProps(){t({state:{props:{}}})}}})),Mr=l(Ee)`
  width: 100%;
  min-height: 260px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,Pr=l.span`
  background: ${t=>t.bg};
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 4px;
  padding: 0 1px;
  > span {
    font-weight: 500;
  }
`,Rr=l(se)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Br({anime:t}){return a(Mr,{children:[e(Rr,{"data-animeid":t.id}),e(Fe,{component:"img",height:"260",image:t.thumbnail,alt:`${t.title} cover image`}),e($e,{children:e(_,{variant:"body2",component:"div",children:t.title})}),e(Pr,{bg:"#0077b6",children:e(_,{variant:"caption",color:"common.white",children:t.language[0].toUpperCase()+t.language.substring(1)})})]})}const zr=l(G)`
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
`;function jr({onSubmit:t}){const r=ne(),{favorites_filters:o}=r.state;return e(zr,{children:e("form",{onSubmit:s=>{if(s.preventDefault(),!s.target)return;const n=new FormData(s.target);let u={};for(const[c,m]of n.entries())u[c]=m;r.actions.setPreferences({favorites_filters:u}),t()},children:a(Xe,{children:[e(ce,{children:"Idioma"}),a(le,{defaultValue:o.language||"all",name:"language",row:!0,children:[e(R,{value:"all",control:e(B,{}),label:"Todos"}),e(R,{value:"dubbed",control:e(B,{}),label:"Dublados"}),e(R,{value:"subtitle",control:e(B,{}),label:"Legendados"})]}),e(ce,{children:"Ordem"}),a(le,{defaultValue:o.sorting||"asc",name:"sorting",row:!0,children:[e(R,{value:"asc",control:e(B,{}),label:"Alfab\xE9tica"}),e(R,{value:"time",control:e(B,{}),label:"Ultimo adicionado"})]}),e(ce,{children:"Estado"}),a(le,{defaultValue:o.status||"watching",name:"status",row:!0,children:[e(R,{value:"all",control:e(B,{}),label:"Todos"}),e(R,{value:"watching",control:e(B,{}),label:"Assistindo"}),e(R,{value:"completed",control:e(B,{}),label:"Completados"})]}),e(N,{variant:"contained",type:"submit",children:"Aplicar"})]})})})}const Lr=l(H).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,Vr=l(G)`
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
`,Or=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 15px;
  justify-items: center;
  grid-auto-rows: 1fr;
`;function Hr(){const[t,r]=k(!1),o=Pe(v=>v.actions),i=S(),[s,n]=k(""),u=Te(v=>v.state.favorites),{favorites_filters:c}=ne(v=>v.state),m=Y();D(()=>(o.setProps({inputRef:i,placeholder:"Buscar Favoritos",onKeyDown:void 0,onChange:d}),setTimeout(()=>{i.current&&(i.current.value="")},200),o.resetProps),[]);const f=S(),d=v=>{const A=v.target.value;f.current&&clearInterval(f.current),f.current=setTimeout(()=>{n(A)},300)},h=()=>{r(!0)},y=()=>{r(!1)},g=v=>{const{nodeName:A,dataset:w}=v.target;A!=="BUTTON"||!w.animeid||m(`/anime/${w.animeid}`)},x={dubbed:"dublado",subtitle:"legendado"},b=q(()=>{let v=[];const A=w=>{if(c.language!=="all"&&w.language.toLowerCase()!==x[c.language])return!1;if(c.status!=="all"){const M=w.completed?"completed":"watching";if(c.status!==M)return!1}return s?w.title.toLowerCase().includes(s.toLowerCase()):!0};if(c.sorting==="time"){for(let w=u.length-1;w>=0;w--)A(u[w])&&v.push(u[w]);return v}for(let w=0;w<u.length;w++)A(u[w])&&v.push(u[w]);return v.sort((w,M)=>w.title>M.title?1:w.title<M.title?-1:0)},[c,u,s]);return a(Lr,{children:[e(Vr,{children:e(j,{onClick:h,children:e(Ze,{})})}),e(Or,{onClick:g,children:b.map(v=>e(Br,{"data-animeid":v.id,anime:ee(T({},v),{id:String(v.id)})}))}),e(Se,{open:t,onClose:y,children:e(H,{sx:Nr.box,children:e(jr,{onSubmit:y})})})]})}const Nr={box:{maxWidth:"400px",height:"300px",margin:"0 auto",position:"relative",top:"50%",transform:"translateY(-50%)"},title:{fontSize:{lg:18,md:16,sm:14,xs:12}},text:{fontSize:{lg:14,md:14,sm:12,xs:10}},iconButton:{alignSelf:"center"},favoriteSkeleton:{container:{display:"flex",alignItems:"center"},middle:{display:"flex",flexDirection:"column",padding:"10px",alignSelf:"start",flex:1}}};function Gr(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const Wr=l(Ee)`
  width: 180px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,Ur=l.span`
  background: ${t=>t.bg};
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 4px;
  padding: 0 1px;
`,qr=l(se)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Yr({anime:t}){return a(Wr,{children:[e(qr,{"data-animeid":t.id}),e(Fe,{component:"img",height:"260",image:t.thumbnail,alt:`${t.title} cover image`}),e($e,{children:e(_,{variant:"body2",component:"div",children:t.title})}),e(Ur,{bg:"#0077b6",children:e(_,{variant:"caption",color:"common.white",children:t.dubbed?"Dublado":"Legendado"})})]})}const Kr=l(Ee)`
  width: 320px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,Qr=l(se)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Jr({episode:t,onAction:r}){return a(Kr,{children:[e(Qr,{onClick:()=>r(t)}),e(Fe,{component:"img",height:"180",image:t.thumbnail,alt:`${t.anime.title} ${t.title_episode}`}),a($e,{children:[e(_,{variant:"body1",component:"div",children:t.anime.title}),e(_,{variant:"body1",component:"div",children:t.title_episode})]})]})}const Xr=l(H).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
`,Zr=l.div``,J=l(Vt).attrs(()=>({leftIcon:et({}),rightIcon:et({})}))`
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
`,X=l(_).attrs(()=>({variant:"h6"}))`
  margin-top: 8px;
`;function eo(){const t=Y(),[r,o]=k(),[i,s]=k(!1),n=()=>s(!1),{error:u,data:c}=ae(or,fe.getReleases),m=q(()=>!Gr()&&c,[c]),f=P(g=>{o([g.id]),s(!0)},[]),d=P(g=>{const{nodeName:x,dataset:b}=g.target;x!=="BUTTON"||!b.animeid||t(`anime/${b.animeid}`)},[t]),h=P(()=>e(I,{width:180,height:350,count:12}),[]),y=P(g=>g.map(x=>e(Yr,{anime:x},x.id)),[]);return u?e(Q,{title:"Erro!",message:"Erro ao buscar dados",onRetry:()=>location.reload()}):a(Xr,{children:[e(X,{color:"text.primary",children:"Novos Epis\xF3dios"}),e(J,{arrows:m,children:c?c.lancamentos.map(g=>e(Jr,{episode:g,onAction:f},g.id)):e(I,{width:320,height:260,count:8})}),a(Zr,{onClick:d,children:[e(X,{color:"text.primary",children:"Ultimos Adicionados"}),e(J,{arrows:m,children:c?y(c==null?void 0:c.ultimos_adicionados):h()}),e(X,{color:"text.primary",children:"Mais Vistos"}),e(J,{arrows:m,children:c?y(c==null?void 0:c.mais_vistos):h()}),e(X,{color:"text.primary",children:"Filmes"}),e(J,{arrows:m,children:c?y(c==null?void 0:c.filmes):h()}),e(X,{color:"text.primary",children:"Dublados"}),e(J,{arrows:m,children:c?y(c==null?void 0:c.dublados):h()}),e(X,{color:"text.primary",children:"Desenhos Animados"}),e(J,{arrows:m,children:c?y(c==null?void 0:c.cartoons):h()})]}),e(De,{shown:i,onClose:n,episodes:r})]})}const pt=te()(ie(t=>{const r=o=>t(o);return{state:{mode:"light"},actions:{toggle:()=>r(({state:o})=>({state:{mode:o.mode==="light"?"dark":"light"}}))}}},{getStorage:()=>localStorage,name:"@GLinks:theme",version:1,partialize:({state:t})=>({state:{mode:t.mode}})})),to=l.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 5px 0;
`;function no(){const t=pt(),r=t.state.mode==="dark",o=Y(),[i,s]=k(r),n=()=>{s(!i),setTimeout(t.actions.toggle,80)},u=()=>{o("/favorites")},c=()=>{o("/")},m=()=>{o("/preferences")};return e(to,{children:a(Ot,{children:[a(de,{onClick:c,children:[e(pe,{children:e(Ht,{size:25})}),e(ue,{primary:"Inicio"})]}),a(de,{onClick:n,children:[e(pe,{children:i?e(Nt,{size:25}):e(Gt,{size:25})}),e(ue,{primary:`Tema: ${i?"Escuro":"Claro"}`}),e(Ae,{checked:i})]}),a(de,{onClick:u,children:[e(pe,{children:e(Je,{size:25})}),e(ue,{primary:"Favoritos"})]}),a(de,{onClick:m,children:[e(pe,{children:e(Wt,{size:25})}),e(ue,{primary:"Preferencias"})]})]})})}const ro=l(Ut)``,oo=l(qt)`
  margin: 0 10px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,io=l(Yt)``;function ao(){const t=Kt(),[r,o]=k(!1),i=S(),s=Qt();D(()=>{o(!1)},[s]);const n=Y(),u=P(()=>{o(!1)},[]),c=P(()=>{o(!0)},[]),m=d=>{var h;d.key==="Enter"&&n(`search?q=${(h=i.current)==null?void 0:h.value}`)},f=Pe(d=>d.state.props);return a(ro,{children:[e(io,{children:a(tt,{children:[e(j,{onClick:c,children:e(Jt,{size:24,color:t.palette.primary.contrastText})}),e(oo,T({placeholder:"Buscar...",fullWidth:!0,onKeyDown:m,inputRef:i,style:{color:t.palette.primary.contrastText}},f)),e(j,{children:e(Xt,{size:24,color:t.palette.primary.contrastText})})]})}),e(tt,{}),e(Zt,{variant:"temporary",open:r,onOpen:c,onClose:u,swipeAreaWidth:10,children:e(no,{})})]})}const so=l(H).attrs({sx:{backgroundColor:"background.default"}})`
  min-height: 100vh;
`;function co(){return a(so,{children:[e(ao,{}),e(en,{})]})}const lo=l(H).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,po=l.div`
  display: flex;
  align-items: center;
`,uo=l(G)`
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
`;function ho(){const{state:t,actions:r}=ne(),o=()=>{var m,f;const u=(m=i.current)==null?void 0:m.value,c=(f=s.current)==null?void 0:f.checked;typeof c=="boolean"&&typeof u=="string"&&r.setPreferences({clap_control:{on:c,triggerValue:Number(u)}})},i=S(null),s=S(null),n=S(t.clap_control.on);return D(()=>{i.current&&(i.current.value=t.clap_control.triggerValue.toString())},[]),e(lo,{children:a(uo,{children:[e("h3",{children:"Controle por palmas"}),a(po,{children:[e(Ae,{defaultChecked:n.current,inputRef:s}),e("p",{children:"Valor do gatilho:"}),e(Qe,{inputRef:i,type:"number"}),e(j,{onClick:o,children:e(tn,{})})]})]})})}function fo(t){return new Array(t).fill(null)}const mo=l(G)`
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
`;function go({onSubmit:t}){const[r,o]=nt(),i=r.get("lang");return e(mo,{children:e("form",{onSubmit:n=>{if(n.preventDefault(),!n.target)return;const u=new FormData(n.target);let c={};for(const m of r.entries()){const f=m[0],d=m[1];c[f]=d}for(const m of u.entries()){const f=m[0],d=m[1];c[f]=d}o(c,{replace:!0}),t()},children:a(Xe,{children:[e(ce,{children:"Idioma"}),a(le,{defaultValue:i||"",name:"lang",row:!0,children:[e(R,{value:"",control:e(B,{}),label:"Todos"}),e(R,{value:"dublado",control:e(B,{}),label:"Dublados"}),e(R,{value:"legendado",control:e(B,{}),label:"Legendados"})]}),e(N,{variant:"contained",type:"submit",children:"Aplicar"})]})})})}const xo=l(H).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,bo=l(G)`
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
`,ut=l(G).attrs({component:"li"})`
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  padding: 10px;
  position: relative;

  & + li {
    margin-top: 10px;
  }
`,vo=l(nn)`
  text-decoration: none;
  display: flex;
  flex: 1;
  color: inherit;

  -webkit-tap-highlight-color: transparent;
`,ht=l.div`
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
`,ft=l.div`
  margin-top: 10px;
`,yo=l(_).attrs(()=>({variant:"h6"}))`
  font-weight: 400;
`,wo=l(_).attrs(()=>({variant:"body1",color:"text.secondary"}))``;l(G)`
  margin: 4px;
  padding: 5px 10px;
`;const Co=l.div`
  display: flex;
  margin-top: 4px;
  flex-wrap: wrap;
  gap: 3px;
`,ko=l.span`
  background: #0077b6;
  border-radius: 5px;
  padding: 0 2px;
  margin-left: 2px;
  color: #fafafa;
  font-weight: 300;
  font-size: 15px;
  font-family: Roboto;
`;function So(){const[t,r]=k(!1),o=Y(),[i]=nt(),s=i.get("q");let n={};for(const[g,x]of i.entries())n[g]=x;delete n.q;const{data:u,error:c}=ae(rr+i.toString(),()=>fe.search(s||"",n)),m=Pe(g=>g.actions),f=S();D(()=>(m.setProps({inputRef:f,onKeyDown:g=>{var x;g.key==="Enter"&&o(`?q=${(x=f.current)==null?void 0:x.value}`,{replace:!0})}}),m.resetProps),[]);const d=()=>{r(!0)},h=()=>{r(!1)},y=()=>c?e(Q,{title:"Erro!",message:"Houve um erro ao buscar dados",onRetry:()=>location.reload()}):u?Array.isArray(u)?u.length===0?e(Q,{title:"Nada encontrado!",message:"Teste pesquisar por outro termo"}):u.slice(0,300).map(g=>{var x;return e(ut,{children:a(vo,{to:`/anime/${g.id}`,children:[e(ht,{children:e("img",{src:g.thumbnail})}),a(ft,{children:[e(yo,{sx:Re.title,children:g.title.length>70?g.title.slice(0,67)+"...":g.title}),a(wo,{sx:Re.text,children:["Ano: ",g.year]}),e(Co,{children:(x=g.genres)==null?void 0:x.split(",").slice(0,5).map(b=>e(ko,{children:ot[b]}))})]})]})},g.id)}):e(Q,{title:"Erro!",message:"Tipo de resposta do servidor desconhecida"}):fo(10).map((g,x)=>a(ut,{children:[e(ht,{children:e(I,{width:160,height:230})}),a(ft,{style:{flex:1},children:[e(I,{height:34,sx:{marginTop:"4px",marginRight:"10px"}}),e(I,{sx:{marginTop:"4px",marginRight:"60px"}}),e(I,{sx:{marginTop:"4px"}})]})]},String(x)));return a(xo,{children:[e(bo,{children:e(j,{onClick:d,children:e(Ze,{})})}),e("ul",{children:y()}),e(Se,{open:t,onClose:h,children:e(rn,{sx:Re.box,children:e(go,{onSubmit:h})})})]})}const Re={box:{maxWidth:"400px",height:"300px",margin:"0 auto",position:"relative",top:"50%",transform:"translateY(-50%)"},title:{fontSize:{lg:20,md:18,sm:16,xs:14}},text:{fontSize:{lg:16,md:16,sm:14,xs:12}}},Ao=on`
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
`,Eo={palette:{mode:"light",primary:{main:"#3f51b5"},secondary:{main:"#f50057"},background:{default:"#f3f3f3",paper:"#ffffff"}}},Fo={palette:{mode:"dark",primary:{main:"#3f51b5"},secondary:{main:"#f50057"}}},$o=rt(Eo),To=rt(Fo),Do=()=>{const t=pt(r=>r.state.mode);return e(an,{injectFirst:!0,children:a(sn,{theme:t==="light"?$o:To,children:[e(cn,{children:e(ln,{children:a(K,{path:"/",element:e(co,{}),children:[e(K,{index:!0,element:e(eo,{})}),e(K,{path:"anime/:id",element:e(_r,{})}),e(K,{path:"favorites",element:e(Hr,{})}),e(K,{path:"search",element:e(So,{})}),e(K,{path:"preferences",element:e(ho,{})})]})})}),e(dn,{}),e(Ao,{})]})})};pn(e(Do,{}),document.getElementById("app"));export{Mo as __vite_legacy_guard};
