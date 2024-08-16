import{bf as C,f as j,r as y,bo as B,bx as D,bw as L,D as G,aX as u,aY as h,a8 as U,aQ as O,b5 as t,b3 as s,b0 as l,b1 as w,b2 as n,b4 as a,a$ as N,ao as P,br as V,bD as W,ac as m,bp as i,cO as E}from"./index-3f4e5f1d.js";import{S as g}from"./index-fdcfd674.js";import{b as A,e as Q,N as X,f as Y,j as q,t as $,c as H,a as J,_ as K,l as R}from"./index-b5fe9ad4.js";import{N as Z}from"./Alert-487cf1ec.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";function se(){return C({url:"/file/getList"})}function te(b){return C({url:"/file/deletes",data:{ids:b}})}const ae={class:"bg-slate-200 dark:bg-zinc-900 p-2 h-full"},oe={class:"flex justify-center mt-2"},le={key:0,class:"flex"},ne={class:"card transparent-grid"},ie={class:"text-xs"},re={class:"flex justify-center mt-[10px]"},ce={class:"mb-2"},de={class:"text-slate-500"},pe={class:"text-xs"},ue={class:"mb-2"},fe={class:"text-slate-500"},_e={class:"text-xs"},me={class:"mb-2"},ge={class:"text-slate-500"},ve={class:"text-xs"},ye=j({__name:"index",setup(b){const v=y([]),p=B(),F=D(),x=L(),f=y(!1),r=y({show:!1,title:"",fileInfo:null});async function k(){f.value=!0;const{data:e}=await se();v.value=e.list,f.value=!1}async function M(e){await R(e)?p.success(i("apps.uploadsFileManager.copySuccess")):p.error(i("apps.uploadsFileManager.copyFailed"))}function I(e){F.warning({title:i("common.warning"),content:i("apps.uploadsFileManager.deleteWarningText"),positiveText:i("common.confirm"),negativeText:i("common.cancel"),onPositiveClick:()=>{S(e)}})}async function S(e){try{const{code:c,msg:o}=await te([e]);c===0?(k(),p.success(i("common.success"))):p.error(`${i("common.failed")}:${o}`)}catch{p.error(i("common.failed"))}}function T(e){r.value.fileInfo=e,r.value.show=!0}function z(e){x.panelConfig.backgroundImageSrc=e,E({panel:x.panelConfig})}return G(()=>{k()}),(e,c)=>(u(),h("div",ae,[U(t(s(A),{size:"small"},null,512),[[O,f.value]]),t(s(Z),{type:"info",bordered:!1},{default:l(()=>[w(n(e.$t("apps.uploadsFileManager.alertText")),1)]),_:1}),a("div",oe,[v.value.length===0&&!f.value?(u(),h("div",le,n(e.$t("apps.uploadsFileManager.nothingText")),1)):(u(),N(s(J),{key:1},{default:l(()=>[t(s(H),{cols:"2 300:2 600:4 900:6 1100:9","x-gap":5,"y-gap":5},{default:l(()=>[(u(!0),h(P,null,V(v.value,(o,_)=>(u(),N(s(Q),{key:_},{default:l(()=>[t(s(W),{size:"small",style:{"border-radius":"5px"},bordered:!0},{cover:l(()=>[a("div",ne,[t(s(X),{lazy:!0,style:{"object-fit":"contain",height:"100%"},src:o.src},null,8,["src"])])]),footer:l(()=>[a("span",ie,[t(s(Y),null,{default:l(()=>[w(n(o.fileName),1)]),_:2},1024)]),a("div",re,[t(s(q),null,{default:l(()=>[t(s(m),{size:"tiny",tertiary:"",style:{cursor:"pointer"},title:e.$t("apps.uploadsFileManager.copyLink"),onClick:d=>M(o.src)},{icon:l(()=>[t(s(g),{icon:"ion-copy"})]),_:2},1032,["title","onClick"]),t(s(m),{size:"tiny",tertiary:"",style:{cursor:"pointer"},title:s($)(o.createTime),onClick:d=>T(o)},{icon:l(()=>[t(s(g),{icon:"mdi-information-box-outline"})]),_:2},1032,["title","onClick"]),t(s(m),{size:"tiny",tertiary:"",style:{cursor:"pointer"},title:e.$t("apps.uploadsFileManager.setWallpaper"),onClick:d=>z(o.src)},{icon:l(()=>[t(s(g),{icon:"lucide:wallpaper"})]),_:2},1032,["title","onClick"]),t(s(m),{size:"tiny",tertiary:"",type:"error",style:{cursor:"pointer"},title:e.$t("common.delete"),onClick:d=>I(o.id)},{icon:l(()=>[t(s(g),{icon:"material-symbols-delete"})]),_:2},1032,["title","onClick"])]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))]),t(s(K),{show:r.value.show,"onUpdate:show":c[0]||(c[0]=o=>r.value.show=o),style:{"max-width":"300px"},size:"small",title:e.$t("apps.uploadsFileManager.infoTitle")},{default:l(()=>{var o,_,d;return[a("div",null,[a("div",null,[a("div",ce,[a("span",de,n(e.$t("apps.uploadsFileManager.fileName")),1),a("div",pe,n((o=r.value.fileInfo)==null?void 0:o.fileName),1)]),a("div",ue,[a("span",fe,n(e.$t("apps.uploadsFileManager.path")),1),a("div",_e,n((_=r.value.fileInfo)==null?void 0:_.src),1)]),a("div",me,[a("span",ge,n(e.$t("apps.uploadsFileManager.uploadTime")),1),a("div",ve,n(s($)((d=r.value.fileInfo)==null?void 0:d.createTime)),1)])])])]}),_:1},8,["show","title"])]))}});const he=ee(ye,[["__scopeId","data-v-ad2e06f3"]]),$e=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));export{he as U,se as g,$e as i};
