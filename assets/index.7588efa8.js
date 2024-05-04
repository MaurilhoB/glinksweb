var st=Object.defineProperty,ct=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var me=(t,o,r)=>o in t?st(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,$=(t,o)=>{for(var r in o||(o={}))Fe.call(o,r)&&me(t,r,o[r]);if(te)for(var r of te(o))Te.call(o,r)&&me(t,r,o[r]);return t},G=(t,o)=>ct(t,lt(o));var De=(t,o)=>{var r={};for(var i in t)Fe.call(t,i)&&o.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&te)for(var i of te(t))o.indexOf(i)<0&&Te.call(t,i)&&(r[i]=t[i]);return r};var Ie=(t,o,r)=>(me(t,typeof o!="symbol"?o+"":o,r),r);import{s as c,B,j as s,a as e,b as j,g as dt,F as H,M as pt,c as ut,l as ge,d as Q,p as ne,i as xe,e as S,y as E,v as ht,C as Me,f as k,h as R,k as Pe,m as ft,n as mt,o as gt,q as xt,r as Re,u as re,A as U,t as ve,I as P,w as vt,x as bt,S as be,z as Le,D as Be,E as je,T as F,G as ze,P as z,H as yt,J as oe,U as wt,K as Ct,L as q,N as Ne,O as kt,Q as St,R as $t,V as ye,W as we,X as Ce,Y as Oe,Z as ie,_ as ae,$ as D,a0 as I,a1 as Ve,a2 as At,a3 as He,a4 as Et,a5 as se,a6 as ce,a7 as _t,a8 as le,a9 as Ft,aa as Tt,ab as Dt,ac as It,ad as Mt,ae as Pt,af as Rt,ag as Lt,ah as We,ai as Bt,aj as jt,ak as zt,al as Nt,am as Ot,an as Ge,ao as Vt,ap as Ht,aq as Wt,ar as Ue,as as Gt,at as Ut,au as qt,av as Yt,aw as Y,ax as Kt,ay as Jt}from"./vendor.53ced421.js";function Co(){import("data:text/javascript,")}const Qt=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};Qt();const Xt="A\xE7\xE3o",Zt="Aventura",en="Com\xE9dia",tn="Cotidiano",nn="Dem\xF4nios",rn="Dem\xEAncia",on="Drama",an="Ecchi",sn="Escolar",cn="Espacial",ln="Esportes",dn="Fantasia",pn="Har\xE9m",un="Hist\xF3rico",hn="Horror",fn="Infantil",mn="Game",gn="Josei",xn="Magia",vn="Militar",bn="Mist\xE9rio",yn="Mecha",wn="Musical",Cn="Policial",kn="Par\xF3dia",Sn="Psicol\xF3gico",$n="Romance",An="Samurai",En="Seinen",_n="Shoujo",Fn="Shounen",Tn="Sobrenatural",Dn="Suspense",In="Terror",Mn="Trag\xE9dia",Pn="Thriller",Rn="Vampiros",Ln="Hentai",Bn="Yaoi",jn="Yuri";var zn={acao:Xt,aventura:Zt,"artes-marciais":"Artes Marciais",comedia:en,cotidiano:tn,demonios:nn,demencia:rn,drama:on,ecchi:an,escolar:sn,espacial:cn,esportes:ln,fantasia:dn,"ficcao-cientifica":"Fic\xE7\xE3o Cient\xEDfica",harem:pn,historico:un,horror:hn,infantil:fn,game:mn,josei:gn,magia:xn,militar:vn,misterio:bn,mecha:yn,musical:wn,policial:Cn,parodia:kn,psicologico:Sn,romance:$n,samurai:An,seinen:En,"sci-fi":"Sci-Fi",shoujo:_n,"shoujo-ai":"Shoujo-Ai",shounen:Fn,"shounen-ai":"Shounen-Ai","slice-of-life":"Slice of Life",sobrenatural:Tn,"super-poderes":"Super Poderes",suspense:Dn,terror:In,tragedia:Mn,thriller:Pn,vampiros:Rn,"vida-escolar":"Vida Escolar",hentai:Ln,yaoi:Bn,yuri:jn};const Nn=c(B).attrs({sx:{backgroundColor:"background.default"}})`
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
`;var On="./assets/confused.0d849045.png";function K({onRetry:t,title:o,message:r,transparent:i}){return s(Nn,{style:{backgroundColor:i?"transparent":void 0},children:[e("img",{width:160,src:On,alt:"Confused Anime Girl"}),e("h1",{children:o}),e("p",{children:r}),t&&e(j,{variant:"outlined",onClick:t,children:"Tentar novamente"})]})}function Vn(i){var a=i,{count:t=1,sx:o}=a,r=De(a,["count","sx"]);return e(H,{children:new Array(t).fill(null).map((n,p)=>e(pt,$({variant:"rectangular",sx:$({margin:"2px",borderRadius:"4px"},o)},r),`${p} - ${Date.now()}`))})}const _=dt(Vn);var Hn="./assets/loading.62848bb2.webp";class de{constructor(){Ie(this,"http");this.http=ut.create({baseURL:"https://www.anroll.net"})}async getEpisode(o){const{data:r}=await this.http.get(`/e/${o}`,{responseType:"text"}),i=ge(r),n=JSON.parse(i("#__NEXT_DATA__").text()).props.pageProps.data;return{id:o,resource:`https://cdn-zenitsu-gamabunta.b-cdn.net/cf/hls/animes/${n.anime.slug_serie}/${n.n_episodio}.mp4/media-1/stream.m3u8`,title:`${n.anime.titulo} - Epis\xF3dio ${n.n_episodio}`,anime_id:n.anime.generate_id,next:n.nextEp.generate_id,previous:n.prevEp.generate_id}}async getAnime(o){const{data:r}=await this.http.get(`/a/${o}`,{responseType:"text"}),i=ge(r),n=JSON.parse(i("#__NEXT_DATA__").text()).props.pageProps.data,p=n.id_serie;let u=[],l=1;for(;;){const h=`https://apiv3-prd.anroll.net/animes/${p}/episodes?page=${l}&order=asc`,{data:d}=await this.http.get(h);console.log(d);const f=d.data.map(x=>({id:x.generate_id,title:`${x.anime.titulo} - Ep\xEDsodio ${x.n_episodio}`}));for(const x of f)u.push(x);if(d.meta.hasNextPage){l++;continue}break}return{id:o,cover:`https://static.anroll.net/images/animes/capas/130x209/${n.slug_serie}.jpg`,description:n.sinopse,episodes:u,title:n.titulo,genres:n.generos,director:n.diretor,score:n.score,duration:n.duracao,year:n.ano}}async getReleases(){const{data:o}=await this.http.get("/",{responseType:"text"}),r=ge(o);return r("ul li.release-item").toArray().map(n=>{const p=r.load(n)("a").attr("href"),u=r.load(n)("a img").attr("src"),l=r.load(n)("a h1").text(),h=r.load(n)("a h1 + span").text();return{id:(p==null?void 0:p.replace("/e/",""))||"",title:`${l}`,episode:`${h.replace(/Episódio[^1-9]+/g,"Epis\xF3dio ")}`,cover:decodeURIComponent((u==null?void 0:u.replace(/^.+url=|\&w=.+$/gm,""))||"")}})}async search(o){let r=[];const{data:i}=await this.http.get(`https://apiv2-prd.anroll.net/search?q=${o}`);if(i.data_anime){const a=i.data_anime.map(n=>({id:n.generate_id,title:n.titulo,cover:`https://static.anroll.net/images/animes/capas/130x209/${n.slug_serie}.jpg`}));r=[...r,...a]}if(i.data_filme){const a=i.data_filme.map(n=>({id:n.generate_id,title:n.nome_filme,cover:`https://static.anroll.net/images/filmes/capas/130x209/${n.slug_filme}.jpg`}));r=[...r,...a]}return r}}const ke=Q()(ne(xe((t,o)=>({state:{favorites:[]},actions:{addFavorite(r){t(i=>{o().state.favorites.find(n=>n.id===r.id)||i.state.favorites.push(r)})},getFavorite(r){return o().state.favorites.find(i=>i.id==r)},updateFavorite(r){const i=o().state.favorites.findIndex(n=>n.id===r.id);if(i===-1)return;let a;return t(n=>{const p=n.state.favorites[i];a=$($({},p),r),n.state.favorites[i]=a}),a},removeFavorite(r){t(i=>{const a=i.state.favorites.findIndex(n=>n.id===r);i.state.favorites.splice(a,1)})}}})),{name:"@Glinks:favorites",version:1,partialize:({state:t})=>({state:t})})),Wn=Q()(ne(xe((t,o)=>({state:{history:{}},actions:{getInfo(r){return o().state.history[r]},setInfo({id:r,time:i}){t(a=>void(a.state.history[r]={time:i}))}}})),{name:"@Glinks:playerhistory",version:1,partialize:({state:t})=>({state:t})})),X=Q()(ne(xe((t,o)=>({state:{favorites_filters:{language:"all",sorting:"time",status:"all"},clap_control:{on:!1,triggerValue:350}},actions:{setPreferences(r){t(i=>void(i.state=$($({},i.state),r)))}}})),{name:"@Glinks:preferences",version:1,partialize:({state:t})=>({state:t})})),Gn="___@GLinksS3arch",Un="___@GLinksRel3ases",qn="___@GLinks4nimes",Yn="___@GLinksEp1sode";function Kn({videoProps:t,onReady:o}){const r=S(null);return E(()=>{const i=ht("video-player");return o(i),r.current=i,()=>{var a;(a=r.current)==null||a.dispose()}},[]),e("video",G($({id:"video-player",class:"video-js"},t.options),{children:t.sources}))}const Jn=async({onClap:t,triggerValue:o})=>{const r=await navigator.mediaDevices.getUserMedia({audio:!0}),i=new AudioContext,a=i.createMediaStreamSource(r),n=i.createAnalyser();a.connect(n);let p=0;const u=new Float32Array(1024);function l(){requestAnimationFrame(l),n.getFloatTimeDomainData(u),h(u)&&t&&t()}function h(d){const f=Date.now();if(f-p<200)return!1;let x=0,m=0;for(let b=1;b<d.length;b++)Math.abs(d[b])>.25&&x++,(d[b]>0&&d[b-1]<0||d[b]<0&&d[b-1]>0)&&m++;return x>o&&m>30?(p=f,!0):!1}return l(),function(){i.close(),r.getTracks().forEach(f=>f.stop())}},Qn=c.div`
  display: flex;
  border-radius: 2px;
  margin: 0 auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${t=>Me`
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
`,pe=c.span`
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  left: 0;
  width: 0;
  height: 80px;
`;function Xn({onPlay:t,onPause:o,onBackward:r,onForward:i,playing:a}){const n=()=>{if(!d.current||!f.current||!x.current||!m.current||!l)return;let C;p===1&&(C=ue(d.current,3e3),C.onfinish=()=>{w.current?o&&o():t&&t(),v.current()}),p===2&&r&&(C=ue(x.current,3e3),C.onfinish=()=>{r(),v.current()}),p===3&&i&&(C=ue(f.current,3e3),C.onfinish=()=>{i(),v.current()}),p===4&&(C=ue(m.current,3e3),C.onfinish=()=>{h(!1)}),C&&(b.current=C,C.play())},[p,u]=k(0),[l,h]=k(!1),d=S(null),f=S(null),x=S(null),m=S(null),b=S(null),v=S(n),w=S(a),A=S(null),{triggerValue:y}=X(C=>C.state.clap_control);E(()=>(Jn({onClap:T,triggerValue:y}).then(C=>{A.current=C}),()=>{A.current&&A.current()}),[]),E(()=>{w.current=a},[a]),E(()=>{n()},[p]),E(()=>{v.current=n},[n]);const T=R(()=>{var C;(C=b.current)==null||C.cancel(),h(!0),u(M=>M===4?1:M<4?M+1:M-1)},[]);return e(Pe,{in:l,unmountOnExit:!0,children:s(Qn,{focusedButton:p,id:"clap-controller",children:[s("div",{children:[a?e(mt,{}):e(ft,{}),e(pe,{ref:d})]}),s("div",{children:[e(gt,{}),e(pe,{ref:x})]}),s("div",{children:[e(xt,{}),e(pe,{ref:f})]}),s("div",{children:[e(Re,{}),e(pe,{ref:m})]})]})})}const ue=(t,o)=>{const r=new KeyframeEffect(t,[{width:"0%"},{width:"100%"}],{duration:o});return new Animation(r)},Zn=c.div`
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
`,er=c.div`
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
`,tr=c.div`
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
`,qe=c.div`
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
`,nr=c.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 22px;
    margin-top: 60px;
    color: #fff;
  }
`,rr=c.span`
  display: inline-block;
  word-break: break-all;
  margin-top: 8px;
  color: #fff;
`,or=c.div`
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
`,ir=new de;async function ar(t){let o=[];for await(const r of t){const i=await ir.getEpisode(r);o.push(i)}return o}function Se({episodes:t,shown:o,onClose:r}){if(!t||t.length===0||!t[0])return null;const[i,a]=k(t);E(()=>{a(t)},[t]);const{data:n,error:p}=re(Yn+i.join(""),()=>ar(i),{revalidateOnFocus:!1}),[u,l]=k(!1),[h,d]=k(0),[f,x]=k(""),m=ke(),b=X(g=>g.state.clap_control),v=S(null),[w,A]=k(!1);E(()=>{var W;if(!n)return;const g=n[h];m.actions.getFavorite(g.anime_id)&&m.actions.updateFavorite({id:g.anime_id,lastWatched:{id:g.id,title:g.title,anime_id:g.anime_id,previous:g.previous?g.previous:void 0,next:g.next?g.next:void 0}}),(W=v.current)==null||W.src({type:"application/x-mpegURL",src:n[h].resource})},[n,h]);const y=()=>{x("sd")},T=()=>{x("hd")},C=()=>{if(h-1>=0&&n){d(g=>g-1);return}if(h===0){const g=n?n[0]:null;(g==null?void 0:g.previous)&&a([g.previous,...i])}},M=()=>{if((n==null?void 0:n.length)&&h<n.length-1){d(W=>W+1);return}const g=n?n[n.length-1]:null,V=g==null?void 0:g.next;V&&(a([...i,V]),d(W=>W+1))},he=()=>{const g=n==null?void 0:n.map(V=>V.resource);g&&je(g==null?void 0:g.join(`
`)),r()},fe=()=>{const g=n==null?void 0:n.map(V=>V.resource);g&&je(g==null?void 0:g.join(`
`)),r()},O=U(()=>!0,[n]),Z=U(()=>!1,[]);U(()=>{if(!!n)return n[h].resource},[n,h,f]),Wn(),S();const L=R(()=>{u&&M()},[u,M]),ee=R(g=>{v.current=g,g.on("end",L)},[]),rt=()=>{v.current&&v.current.paused()&&v.current.play()},ot=()=>{v.current&&!v.current.paused()&&v.current.pause()},it=()=>{if(v.current&&v.current.currentTime()&&v.current){const g=v.current.currentTime();v.current.currentTime(g+10)}},at=()=>{if(v.current&&v.current.currentTime()&&v.current){const g=v.current.currentTime();v.current.currentTime(g-10)}};return e(ve,{open:o,BackdropProps:{sx:{backgroundColor:"rgba(0, 0, 0, 0.96)"}},children:e(Pe,{in:o,unmountOnExit:!0,children:s(Zn,{children:[(()=>p?e(K,{title:"Erro!",message:"Houve um erro ao obter links",transparent:!0}):n?s(H,{children:[s(er,{children:[e("p",{children:`${n[h].title}`}),s("div",{id:"video-wrapper",children:[e(Kn,{onReady:ee,videoProps:{options:{controls:!0},sources:[e("source",{src:n[h].resource,type:"application/x-mpegURL"})]}}),b.on&&e(Xn,{onPlay:rt,onPause:ot,onForward:it,onBackward:at,playing:w})]}),s(tr,{children:[e(P,{onClick:C,children:e(vt,{})}),e(P,{onClick:M,children:e(bt,{})}),s("p",{children:["Auto-reprodu\xE7\xE3o:",e(be,{classes:{track:"switchtrack"},checked:u,onChange:()=>l(!u)})]})]})]}),s(qe,{children:[Z&&e(j,{disabled:(f||(O?"hd":"sd"))==="sd",startIcon:e(Le,{}),variant:"contained",onClick:y,children:"Assistir SD"}),O&&e(j,{disabled:(f||(O?"hd":"sd"))==="hd",startIcon:e(Be,{}),variant:"contained",onClick:T,children:"Assistir HD"})]}),s(qe,{children:[Z&&e(j,{startIcon:e(Le,{}),variant:"contained",onClick:he,children:"Copiar Link's SD"}),O&&e(j,{startIcon:e(Be,{}),variant:"contained",onClick:fe,children:"Copiar Link's HD"})]}),s(nr,{children:[O&&e("h4",{children:"Links HD"}),n.map(g=>e(rr,{children:g.resource}))]})]}):e(or,{children:e("img",{src:Hn})}))(),e(P,{id:"close-btn",onClick:r,children:e(Re,{})})]})})})}const sr=c.div`
  margin-top: 20px;
`,Ye=c(F).attrs({variant:"body1"})`
  font-weight: 500;
`,$e=c(ze)`
  max-width: 60px;
  text-align: center;
`,Ke=c.form`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  row-gap: 8px;
  margin-top: 20px;
`,Ae=c.div`
  display: flex;
  ${t=>t.breakable&&Me`
      flex-wrap: wrap;
    `}
`,Ee=c.span`
  display: inline-block;
  width: ${t=>t.gap}px;
`,Je=c(j)``;function cr({anime:t}){const[o,r]=k(!1),[i,a]=k([]),[n,p]=k(t);E(()=>{if(!t.episodes||t.episodes.length==0)return;const h=t.episodes.sort((d,f)=>d.title>f.title?1:d.title<f.title?-1:0);p(G($({},t),{episodes:h}))},[t]);const u=()=>r(!1),l=h=>{h.preventDefault();const d=h.target,f=new FormData(d);if(f.has("single")){const x=Number(f.get("single"));if(x>n.episodes.length)return alert(`${n.title} tem s\xF3 ${n.episodes.length} epis\xF3dios`);if(x<=0)return alert("Preencha o campo com valores numericos positivos.");const m=n.episodes[x-1];a([m.id]),r(!0)}if(f.has("from")&&f.has("to")){const x=Number(f.get("from")),m=Number(f.get("to"));if(!x||x<=0||!m||m<=0)return alert("Preencha o campo com valores numericos positivos.");if(x>m)return alert("O valor 'At\xE9' deve ser maior que o valor do campo 'De'.");if(m>n.episodes.length)return alert(`${n.title} tem s\xF3 ${n.episodes.length} epis\xF3dios`);let b=[];for(let v=x-1;v<m;v++)b.push(n.episodes[v].id);a(b),r(!0)}};return s(sr,{children:[s(Ae,{breakable:!0,children:[s(Ke,{onSubmit:l,children:[e(Ye,{children:"Baixar um epis\xF3dio"}),s(Ae,{children:[e($e,{type:"number",autoComplete:"off",name:"single",placeholder:"N\xBA"}),e(Ee,{gap:8}),e(Je,{type:"submit",children:"Ir"})]})]}),s(Ke,{onSubmit:l,children:[e(Ye,{children:"Baixar m\xFAltiplos epis\xF3dios"}),s(Ae,{children:[e($e,{type:"number",autoComplete:"off",name:"from",placeholder:"De"}),e(Ee,{gap:12}),e($e,{type:"number",autoComplete:"off",name:"to",placeholder:"At\xE9"}),e(Ee,{gap:8}),e(Je,{type:"submit",children:"Ir"})]})]})]}),e(Se,{shown:o,onClose:u,episodes:i})]})}const lr=c(z)`
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
`,dr=c.div`
  display: flex;
`,pr=c(yt)`
  margin: 5px 0;
`,ur=c.div`
  display: flex;
  flex: 1;
  column-gap: 20px;

  flex-wrap: wrap;

  border-radius: 10px;

  img {
    height: 380px;
    object-fit: cover;
  }
`,hr=c.div`
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
`,fr=c.div`
  flex: 1;
  min-width: 260px;
  margin-top: 20px;
`,Qe=c(F).attrs(t=>({variant:t.variant||"h4",color:"text.primary"}))`
  font-weight: 400;
`,N=c(F).attrs({variant:"body1",color:"text.secondary"})`
  margin-bottom: 6px;
`,J=c(B).attrs({component:"span",color:"text.primary"})`
  font-weight: 600;
  display: inline;
`,mr=c.span`
  background: #0077b6;
  opacity: 0.9;
  border-radius: 5px;
  padding: 2px;
  margin: 2px;
  color: #ffffff;
  font-family: Roboto;
`,gr=c.div`
  p {
    display: inline;
  }

  p::after {
    content: '${t=>t.text.slice(0,280)}...';
    animation: ${({expanded:t,text:o})=>vr(t?o:o.slice(0,280)+"...")}
      ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`,xr=c(oe)`
  padding: 5px;
  border-radius: 5px;
  margin-left: 2px;
  margin-bottom: 1px;
`,vr=t=>wt`
   0% {
    content: inherit;
  }
  50% {
    filter: blur(1px);
  }
  
  100% {
    content: '${t}'
  }
`,br=c.div`
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
`,yr=new de;function wr(){const{id:t}=Ct(),o=ke(),r=q(),[i,a]=k(!1),[n,p]=k([]),u=()=>a(!1);if(!t)return r("/"),null;const{data:l,error:h}=re(qn+t,async()=>await yr.getAnime(t)),d=o.actions.getFavorite(t),[f,x]=k(!0),m=U(()=>{if(l==null?void 0:l.description)return l.description.length>280},[l]),[b,v]=k(!1),[w,A]=k(()=>!!d),[y,T]=k(()=>!!(d==null?void 0:d.completed)),C=()=>{v(!b)},M=()=>{if(!!l){if(A(!w),w)return o.actions.removeFavorite(l.id);o.actions.addFavorite(G($({},l),{completed:!1}))}},he=()=>{if(!l)return;const L=!y,ee=o.actions.getFavorite(t);ee&&(o.actions.updateFavorite(G($({},ee),{completed:L})),T(L))},fe=()=>{d&&d.lastWatched&&(p([d.lastWatched.id]),a(!0))},O=()=>{d&&d.lastWatched&&d.lastWatched.next&&(p([d.lastWatched.next]),a(!0))},Z=()=>{x(!1)};return E(()=>{v(!m)},[m]),h?e(K,{title:"Erro!",message:"Erro ao buscar dados do anime",onRetry:()=>location.reload()}):s(lr,{children:[s(ur,{children:[s(hr,{children:[l&&e("img",{onLoad:Z,src:l.cover}),f&&e(_,{height:380,width:250,sx:{margin:"0 auto",position:"absolute",top:0,left:0}})]}),s(fr,{children:[l?s(H,{children:[e(Qe,{variant:"h5",children:l.title}),s(N,{children:[e(J,{children:"Ano:"})," ",l.year]}),e(N,{children:s(dr,{style:{flexWrap:"wrap",alignItems:"center"},children:[e(J,{children:"G\xEAneros:"})," ",l.genres?l.genres.split(",").map(L=>e(mr,{children:zn[L]||L[0].toUpperCase()+L.slice(1)})):null]})}),s(N,{children:[e(J,{children:"Dire\xE7\xE3o:"})," ",l.director||"null"]}),s(N,{children:[e(J,{children:"Avalia\xE7\xE3o:"})," ",l.score||"null"," / 10"]}),s(N,{children:[e(J,{children:"Dura\xE7\xE3o:"})," ",l.duration||"null"]}),s(N,{children:[e(J,{children:"Epis\xF3dios:"})," ",l.episodes.length||"null"]})]}):s(H,{children:[e(_,{height:40,width:180,sx:{margin:"5px 0"}}),e(_,{count:7,sx:{margin:"5px 0"}})]}),l?s(br,{children:[e(P,{onClick:M,children:w?e(Ne,{}):e(kt,{})}),e(P,{onClick:he,children:y?e(St,{}):e($t,{})}),(d==null?void 0:d.lastWatched)&&e("div",{children:s(N,{children:[s("button",{onClick:fe,children:["Continuar ",d.lastWatched.title]}),d.lastWatched.next&&s(H,{children:[e("span",{children:"|"}),e("button",{onClick:O,children:"Prox\xEDmo Epis\xF3dio"})]})]})})]}):e(_,{sx:{margin:"4px 0"},height:50}),e(pr,{}),l?s(H,{children:[e(Qe,{variant:"h6",children:"Descri\xE7\xE3o"}),s(gr,{expanded:b,text:l.description,children:[e(N,{}),m&&s(xr,{onClick:C,children:["Ver ",b?"menos":"mais"]})]})]}):s(H,{children:[e(_,{sx:{margin:"4px 0"},height:30,width:110}),e(_,{count:3})]})]})]}),l?e(cr,{anime:l}):e(_,{sx:{marginTop:"20px"},height:60}),e(Se,{shown:i,onClose:u,episodes:n})]})}const _e=Q()((t,o)=>({state:{props:{}},actions:{setProps(r){t({state:{props:$($({},o().state.props),r)}})},resetProps(){t({state:{props:{}}})}}})),Cr=c(ye)`
  width: 100%;
  min-height: 260px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,kr=c.span`
  background: ${t=>t.bg};
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 4px;
  padding: 0 1px;
  > span {
    font-weight: 500;
  }
`,Sr=c(oe)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function $r({anime:t}){return s(Cr,{children:[e(Sr,{"data-animeid":t.id}),e(we,{component:"img",height:"260",image:t.cover,alt:`${t.title} cover image`}),e(Ce,{children:e(F,{variant:"body2",component:"div",children:t.title})}),e(kr,{bg:"#0077b6",children:t.language&&e(F,{variant:"caption",color:"common.white",children:t.language[0].toUpperCase()+t.language.substring(1)})})]})}const Ar=c(z)`
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
`;function Er({onSubmit:t}){const o=X(),{favorites_filters:r}=o.state;return e(Ar,{children:e("form",{onSubmit:a=>{if(a.preventDefault(),!a.target)return;const n=new FormData(a.target);let p={};for(const[u,l]of n.entries())p[u]=l;o.actions.setPreferences({favorites_filters:p}),t()},children:s(Oe,{children:[e(ie,{children:"Idioma"}),s(ae,{defaultValue:r.language||"all",name:"language",row:!0,children:[e(D,{value:"all",control:e(I,{}),label:"Todos"}),e(D,{value:"dubbed",control:e(I,{}),label:"Dublados"}),e(D,{value:"subtitle",control:e(I,{}),label:"Legendados"})]}),e(ie,{children:"Ordem"}),s(ae,{defaultValue:r.sorting||"asc",name:"sorting",row:!0,children:[e(D,{value:"asc",control:e(I,{}),label:"Alfab\xE9tica"}),e(D,{value:"time",control:e(I,{}),label:"Ultimo adicionado"})]}),e(ie,{children:"Estado"}),s(ae,{defaultValue:r.status||"watching",name:"status",row:!0,children:[e(D,{value:"all",control:e(I,{}),label:"Todos"}),e(D,{value:"watching",control:e(I,{}),label:"Assistindo"}),e(D,{value:"completed",control:e(I,{}),label:"Completados"})]}),e(j,{variant:"contained",type:"submit",children:"Aplicar"})]})})})}const _r=c(B).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,Fr=c(z)`
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
`,Tr=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 15px;
  justify-items: center;
  grid-auto-rows: 1fr;
`;function Dr(){const[t,o]=k(!1),r=_e(w=>w.actions),i=S(),[a,n]=k(""),p=ke(w=>w.state.favorites),{favorites_filters:u}=X(w=>w.state),l=q();E(()=>(r.setProps({inputRef:i,placeholder:"Buscar Favoritos",onKeyDown:void 0,onChange:d}),setTimeout(()=>{i.current&&(i.current.value="")},200),r.resetProps),[]);const h=S(),d=w=>{const A=w.target.value;h.current&&clearInterval(h.current),h.current=setTimeout(()=>{n(A)},300)},f=()=>{o(!0)},x=()=>{o(!1)},m=w=>{const{nodeName:A,dataset:y}=w.target;A!=="BUTTON"||!y.animeid||l(`/anime/${y.animeid}`)},b={dubbed:"dublado",subtitle:"legendado"},v=U(()=>{let w=[];const A=y=>{var T;if(u.language!=="all"&&((T=y==null?void 0:y.language)==null?void 0:T.toLowerCase())!==b[u.language])return!1;if(u.status!=="all"){const C=y.completed?"completed":"watching";if(u.status!==C)return!1}return a?y.title.toLowerCase().includes(a.toLowerCase()):!0};if(u.sorting==="time"){for(let y=p.length-1;y>=0;y--)A(p[y])&&w.push(p[y]);return w}for(let y=0;y<p.length;y++)A(p[y])&&w.push(p[y]);return w.sort((y,T)=>y.title>T.title?1:y.title<T.title?-1:0)},[u,p,a]);return s(_r,{children:[e(Fr,{children:e(P,{onClick:f,children:e(Ve,{})})}),e(Tr,{onClick:m,children:v.map(w=>e($r,{"data-animeid":w.id,anime:G($({},w),{id:String(w.id)})}))}),e(ve,{open:t,onClose:x,children:e(B,{sx:Ir.box,children:e(Er,{onSubmit:x})})})]})}const Ir={box:{maxWidth:"400px",height:"300px",margin:"0 auto",position:"relative",top:"50%",transform:"translateY(-50%)"},title:{fontSize:{lg:18,md:16,sm:14,xs:12}},text:{fontSize:{lg:14,md:14,sm:12,xs:10}},iconButton:{alignSelf:"center"},favoriteSkeleton:{container:{display:"flex",alignItems:"center"},middle:{display:"flex",flexDirection:"column",padding:"10px",alignSelf:"start",flex:1}}};function Mr(){return"ontouchstart"in window||navigator.maxTouchPoints>0}const Pr=c(ye)`
  width: 180px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,Rr=c.span`
  background: ${t=>t.bg};
  position: absolute;
  top: 3px;
  right: 3px;
  border-radius: 4px;
  padding: 0 1px;
`,Lr=c(oe)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Br({anime:t}){return s(Pr,{children:[e(Lr,{"data-animeid":t.id}),e(we,{component:"img",height:"260",image:t.thumbnail,alt:`${t.title} cover image`}),e(Ce,{children:e(F,{variant:"body2",component:"div",children:t.title})}),e(Rr,{bg:"#0077b6",children:e(F,{variant:"caption",color:"common.white",children:t.dubbed?"Dublado":"Legendado"})})]})}const jr=c(ye)`
  width: 320px;
  margin: 2px;
  position: relative;
  display: inline-block;
`,zr=c(oe)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;function Nr({release:t,onAction:o}){return s(jr,{children:[e(zr,{onClick:()=>o(t)}),e(we,{component:"img",height:"180",image:t.cover,alt:`${t.title}`}),s(Ce,{children:[e(F,{variant:"body1",component:"div",children:t.title}),e(F,{variant:"body1",component:"div",children:t.episode})]})]})}const Or=c(B).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
`;c.div``;const Vr=c(At).attrs(()=>({leftIcon:He({}),rightIcon:He({})}))`
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
`,Hr=c(F).attrs(()=>({variant:"h6"}))`
  margin-top: 8px;
`,Wr=new de;function Gr(){const t=q(),[o,r]=k(),[i,a]=k(!1),n=()=>a(!1),{error:p,data:u}=re(Un,()=>Wr.getReleases()),l=U(()=>!Mr()&&u,[u]),h=R(d=>{r([d.id]),a(!0)},[]);return R(d=>{const{nodeName:f,dataset:x}=d.target;f!=="BUTTON"||!x.animeid||t(`anime/${x.animeid}`)},[t]),R(()=>e(_,{width:180,height:350,count:12}),[]),R(d=>d.map(f=>e(Br,{anime:f},f.id)),[]),p?e(K,{title:"Erro!",message:"Erro ao buscar dados",onRetry:()=>location.reload()}):s(Or,{children:[e(Hr,{color:"text.primary",children:"Novos Epis\xF3dios"}),e(Vr,{arrows:l,children:u?u.map(d=>e(Nr,{release:d,onAction:h},d.id)):e(_,{width:320,height:260,count:8})}),e(Se,{shown:i,onClose:n,episodes:o})]})}const Xe=Q()(ne(t=>{const o=r=>t(r);return{state:{mode:"light"},actions:{toggle:()=>o(({state:r})=>({state:{mode:r.mode==="light"?"dark":"light"}}))}}},{getStorage:()=>localStorage,name:"@GLinks:theme",version:1,partialize:({state:t})=>({state:{mode:t.mode}})})),Ur=c.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 5px 0;
`;function qr(){const t=Xe(),o=t.state.mode==="dark",r=q(),[i,a]=k(o),n=()=>{a(!i),setTimeout(t.actions.toggle,80)},p=()=>{r("/favorites")},u=()=>{r("/")},l=()=>{r("/preferences")};return e(Ur,{children:s(Et,{children:[s(se,{onClick:u,children:[e(ce,{children:e(_t,{size:25})}),e(le,{primary:"Inicio"})]}),s(se,{onClick:n,children:[e(ce,{children:i?e(Ft,{size:25}):e(Tt,{size:25})}),e(le,{primary:`Tema: ${i?"Escuro":"Claro"}`}),e(be,{checked:i})]}),s(se,{onClick:p,children:[e(ce,{children:e(Ne,{size:25})}),e(le,{primary:"Favoritos"})]}),s(se,{onClick:l,children:[e(ce,{children:e(Dt,{size:25})}),e(le,{primary:"Preferencias"})]})]})})}const Yr=c(It)``,Kr=c(Mt)`
  margin: 0 10px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,Jr=c(Pt)``;function Qr(){const t=Rt(),[o,r]=k(!1),i=S(),a=Lt();E(()=>{r(!1)},[a]);const n=q(),p=R(()=>{r(!1)},[]),u=R(()=>{r(!0)},[]),l=f=>{var x,m;if((f==null?void 0:f.key)==="Enter"&&((x=i.current)==null?void 0:x.value))return n(`search?q=${(m=i.current)==null?void 0:m.value}`)},h=f=>{var x,m;if((x=i.current)==null?void 0:x.value)return n(`search?q=${(m=i.current)==null?void 0:m.value}`)},d=_e(f=>f.state.props);return s(Yr,{children:[e(Jr,{children:s(We,{children:[e(P,{onClick:u,children:e(Bt,{size:24,color:t.palette.primary.contrastText})}),e(Kr,$({placeholder:"Buscar...",fullWidth:!0,onKeyDown:l,inputRef:i,style:{color:t.palette.primary.contrastText}},d)),e(P,{onClick:h,children:e(jt,{size:24,color:t.palette.primary.contrastText})})]})}),e(We,{}),e(zt,{variant:"temporary",open:o,onOpen:u,onClose:p,swipeAreaWidth:10,children:e(qr,{})})]})}const Xr=c(B).attrs({sx:{backgroundColor:"background.default"}})`
  min-height: 100vh;
`;function Zr(){return s(Xr,{children:[e(Qr,{}),e(Nt,{})]})}const eo=c(B).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,to=c.div`
  display: flex;
  align-items: center;
`,no=c(z)`
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
`;function ro(){const{state:t,actions:o}=X(),r=()=>{var l,h;const p=(l=i.current)==null?void 0:l.value,u=(h=a.current)==null?void 0:h.checked;typeof u=="boolean"&&typeof p=="string"&&o.setPreferences({clap_control:{on:u,triggerValue:Number(p)}})},i=S(null),a=S(null),n=S(t.clap_control.on);return E(()=>{i.current&&(i.current.value=t.clap_control.triggerValue.toString())},[]),e(eo,{children:s(no,{children:[e("h3",{children:"Controle por palmas"}),s(to,{children:[e(be,{defaultChecked:n.current,inputRef:a}),e("p",{children:"Valor do gatilho:"}),e(ze,{inputRef:i,type:"number"}),e(P,{onClick:r,children:e(Ot,{})})]})]})})}function oo(t){return new Array(t).fill(null)}const io=c(z)`
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
`;function ao({onSubmit:t}){const[o,r]=Ge(),i=o.get("lang");return e(io,{children:e("form",{onSubmit:n=>{if(n.preventDefault(),!n.target)return;const p=new FormData(n.target);let u={};for(const l of o.entries()){const h=l[0],d=l[1];u[h]=d}for(const l of p.entries()){const h=l[0],d=l[1];u[h]=d}r(u,{replace:!0}),t()},children:s(Oe,{children:[e(ie,{children:"Idioma"}),s(ae,{defaultValue:i||"",name:"lang",row:!0,children:[e(D,{value:"",control:e(I,{}),label:"Todos"}),e(D,{value:"dublado",control:e(I,{}),label:"Dublados"}),e(D,{value:"legendado",control:e(I,{}),label:"Legendados"})]}),e(j,{variant:"contained",type:"submit",children:"Aplicar"})]})})})}const so=c(B).attrs({sx:{backgroundColor:"background.default"}})`
  padding: 8px;
  display: flex;
  flex-direction: column;
`,co=c(z)`
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
`,Ze=c(z).attrs({component:"li"})`
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  padding: 10px;
  position: relative;

  & + li {
    margin-top: 10px;
  }
`,lo=c(Vt)`
  text-decoration: none;
  display: flex;
  flex: 1;
  color: inherit;

  -webkit-tap-highlight-color: transparent;
`,et=c.div`
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
`,tt=c.div`
  margin-top: 10px;
`,po=c(F).attrs(()=>({variant:"h6"}))`
  font-weight: 400;
`;c(F).attrs(()=>({variant:"body1",color:"text.secondary"}))``;c(z)`
  margin: 4px;
  padding: 5px 10px;
`;c.div`
  display: flex;
  margin-top: 4px;
  flex-wrap: wrap;
  gap: 3px;
`;c.span`
  background: #0077b6;
  border-radius: 5px;
  padding: 0 2px;
  margin-left: 2px;
  color: #fafafa;
  font-weight: 300;
  font-size: 15px;
  font-family: Roboto;
`;const uo=new de;function ho(){const[t,o]=k(!1),r=q(),[i]=Ge(),a=i.get("q");let n={};for(const[m,b]of i.entries())n[m]=b;delete n.q;const{data:p,error:u}=re(Gn+i.toString(),()=>uo.search(a||"")),l=_e(m=>m.actions),h=S();E(()=>(l.setProps({inputRef:h,onKeyDown:m=>{var b;m.key==="Enter"&&r(`?q=${(b=h.current)==null?void 0:b.value}`,{replace:!0})}}),l.resetProps),[]);const d=()=>{o(!0)},f=()=>{o(!1)},x=()=>u?e(K,{title:"Erro!",message:"Houve um erro ao buscar dados",onRetry:()=>location.reload()}):p?Array.isArray(p)?p.length===0?e(K,{title:"Nada encontrado!",message:"Teste pesquisar por outro termo"}):p.slice(0,300).map(m=>e(Ze,{children:s(lo,{to:`/anime/${m.id}`,children:[e(et,{children:e("img",{src:m.cover})}),e(tt,{children:e(po,{sx:nt.title,children:m.title.length>70?m.title.slice(0,67)+"...":m.title})})]})},m.id)):e(K,{title:"Erro!",message:"Tipo de resposta do servidor desconhecida"}):oo(10).map((m,b)=>s(Ze,{children:[e(et,{children:e(_,{width:160,height:230})}),s(tt,{style:{flex:1},children:[e(_,{height:34,sx:{marginTop:"4px",marginRight:"10px"}}),e(_,{sx:{marginTop:"4px",marginRight:"60px"}}),e(_,{sx:{marginTop:"4px"}})]})]},String(b)));return s(so,{children:[e(co,{children:e(P,{onClick:d,children:e(Ve,{})})}),e("ul",{children:x()}),e(ve,{open:t,onClose:f,children:e(Ht,{sx:nt.box,children:e(ao,{onSubmit:f})})})]})}const nt={box:{maxWidth:"400px",height:"300px",margin:"0 auto",position:"relative",top:"50%",transform:"translateY(-50%)"},title:{fontSize:{lg:20,md:18,sm:16,xs:14}},text:{fontSize:{lg:16,md:16,sm:14,xs:12}}},fo=Wt`
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
`,mo={palette:{mode:"light",primary:{main:"#3f51b5"},secondary:{main:"#f50057"},background:{default:"#f3f3f3",paper:"#ffffff"}}},go={palette:{mode:"dark",primary:{main:"#3f51b5"},secondary:{main:"#f50057"}}},xo=Ue(mo),vo=Ue(go),bo=()=>{const t=Xe(o=>o.state.mode);return e(Gt,{injectFirst:!0,children:s(Ut,{theme:t==="light"?xo:vo,children:[e(qt,{children:e(Yt,{children:s(Y,{path:"/",element:e(Zr,{}),children:[e(Y,{index:!0,element:e(Gr,{})}),e(Y,{path:"anime/:id",element:e(wr,{})}),e(Y,{path:"favorites",element:e(Dr,{})}),e(Y,{path:"search",element:e(ho,{})}),e(Y,{path:"preferences",element:e(ro,{})})]})})}),e(Kt,{}),e(fo,{})]})})};Jt(e(bo,{}),document.getElementById("app"));export{Co as __vite_legacy_guard};
