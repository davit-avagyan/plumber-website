import{_ as S}from"./nuxt-link.03ad2072.js";import{_ as g,o as i,c as d,a as t,m as R,i as U,s as z,j as O,g as e,b as s,w as l,F as f,r as L,l as y,d as c,t as r,T as K,k as M,p as V,e as j,f as A,q as D}from"./entry.72997830.js";import{_ as B}from"./form-for-order.9a39f929.js";import{c as o}from"./contact.79589a4f.js";const G={},q={class:"flex pr-2.5 lg:hidden"},E=t("div",{class:"space-y-2 group"},[t("span",{class:"block w-8 h-0.5 bg-gray-600 group-hover:bg-main"}),t("span",{class:"block w-8 h-0.5 bg-gray-600 group-hover:bg-main"}),t("span",{class:"block w-8 h-0.5 bg-gray-600 group-hover:bg-main"})],-1),J=[E];function P(a,_){return i(),d("div",q,J)}const Q=g(G,[["render",P]]),F=R("isSidebarOpen",{state:()=>({isOpen:!1}),actions:{toggleSidebar(){this.isOpen=!this.isOpen}}}),H=[{path:"/",title:"Hem"},{path:"/about",title:"Om oss"},{path:"/services",title:"Tjänster"},{path:"/contact-us",title:"Kontakta oss"}];const x=a=>(V("data-v-cf8348aa"),a=a(),j(),a),W={class:"bg-side-main-bg flex flex-col"},X={class:"flex flex-col"},Y={class:"pt-5"},Z={class:"contact-info-side-menu"},tt=x(()=>t("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})],-1)),et={class:"text-xs"},ot={class:"contact-info-side-menu"},st=x(()=>t("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})],-1)),nt={class:"contact-info-side-menu"},at=x(()=>t("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})],-1)),ct={class:"contact-info-side-menu"},lt=x(()=>t("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),rt={class:"text-xs"},it={__name:"mobile-side-menu",setup(a){U();const _=F(),{isOpen:p}=z(_),n=()=>_.toggleSidebar(),u=O(!1),v=C=>{u.value=!0},b=()=>{u.value=!1};return(C,w)=>{const h=S,k=B;return i(),d(f,null,[e(p)?(i(),d("div",{key:0,class:"lg:hidden absolute left-0 top-0 right-0 bottom-0 grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 z-10",onClick:n},[s(K,null,{default:l(()=>[t("div",W,[t("div",null,[t("div",X,[(i(!0),d(f,null,L(e(H),m=>(i(),y(h,{key:m.path,to:m.path,class:"py-4 px-10 text-sm text-white font-semibold hover:bg-side-main-bg-hover hover:text-main border-b-2 border-side-main-bg-hover"},{default:l(()=>[c(r(m.title),1)]),_:2},1032,["to"]))),128)),t("button",{onClick:v,class:"mt-2 header-links bg-[#3c414c] rounded-xl py-2 px-4 text-white uppercase font-semibold text-center transition-background-color ease-in-out delay-150 duration-300 hover:bg-black"}," Gratis offert ")]),t("div",Y,[t("div",Z,[tt,t("span",et,r(e(o).address),1)]),t("div",ot,[st,s(h,{class:"text-xs",to:`tel:${e(o).phone}`},{default:l(()=>[c(r(e(o).phone),1)]),_:1},8,["to"])]),t("div",nt,[at,s(h,{to:`mailto:${e(o).email}`},{default:l(()=>[c(r(e(o).email),1)]),_:1},8,["to"])]),t("div",ct,[lt,t("span",rt,r(e(o).workingDays)+" "+r(e(o).workingHours),1)])])])])]),_:1})])):M("",!0),e(u)?(i(),y(k,{key:1,onClose:b})):M("",!0)],64)}}},dt=g(it,[["__scopeId","data-v-cf8348aa"]]),N=""+new URL("logo-last.f833753b.jpg",import.meta.url).href,I=""+new URL("logo-1.7ca59999.png",import.meta.url).href;const T=a=>(V("data-v-f9cabd80"),a=a(),j(),a),_t={class:"shadow-sm bg-gray-500 px-4"},pt={class:"md:container mx-auto flex justify-between items-center"},ut={class:"flex items-center gap-4"},ht=T(()=>t("img",{src:N,alt:"logo",class:"w-52 h-24"},null,-1)),mt=T(()=>t("img",{src:I,class:"w-[80px] h-[80px] rounded-full",alt:"certificate logo"},null,-1)),ft={class:"hidden lg:flex gap-4 items-center"},gt={__name:"header",setup(a){const _=F(),p=()=>_.toggleSidebar(),n=O(!1),u=b=>{n.value=!0},v=()=>{n.value=!1};return(b,C)=>{const w=S,h=Q,k=dt,m=B;return i(),d(f,null,[t("div",null,[t("header",_t,[t("nav",pt,[t("div",ut,[s(w,{to:"/",class:"header-links"},{default:l(()=>[ht]),_:1}),mt]),t("ul",ft,[(i(!0),d(f,null,L(e(H),$=>(i(),d("li",{key:$.path},[s(w,{to:$.path,class:"header-links"},{default:l(()=>[c(r($.title),1)]),_:2},1032,["to"])]))),128)),t("button",{onClick:u,class:"header-links bg-[#3c414c] rounded-xl py-2 px-4 text-white uppercase font-semibold text-center transition-background-color ease-in-out delay-150 duration-300 hover:bg-black"}," Gratis offert ")]),s(h,{onClick:p}),s(k)])])]),e(n)?(i(),y(m,{key:0,onClose:v})):M("",!0)],64)}}},xt=g(gt,[["__scopeId","data-v-f9cabd80"]]),vt=""+new URL("id-06-logo.af4da9d2.jpg",import.meta.url).href,bt=""+new URL("Trygg-Hansa-Logo.a7b3bb4b.png",import.meta.url).href,wt={class:"shadow-sm bg-[#3c414c] py-24 text-2xl"},kt={class:"md:container mx-auto grid md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-1 xs:px-5 gap-x-16"},$t={class:"flex col-span-1 md:col-span-2 flex-col lg:flex-row"},yt={class:"flex flex-col"},Mt=t("p",{class:"footer-section-titles"},"Om oss",-1),St=t("img",{src:N,alt:"logo",class:"w-52 h-24"},null,-1),Ct={class:"footer-section-content"},Ot=A('<div class=""><div class="flex flex-col"><p class="footer-section-titles">Certifieringar</p><div class="flex flex-col md:flex-row gap-4"><img src="'+I+'" class="w-[100px] h-[100px] rounded-full" alt="certificate logo"><img src="'+vt+'" class="w-[100px] h-[100px] rounded-lg" alt="certificate logo"></div></div><div class="flex flex-col"><img src="'+bt+'" class="w-[200px] h-[100px] rounded-md" alt="Trygg-Hansa-Logo"></div></div>',1),Lt={class:"flex flex-col col-span-1 md:col-span-3 md:pl-5"},Vt=t("p",{class:"footer-section-titles"},"Offertförfrågan",-1),jt={class:"footer-section-content"},Bt={class:"footer-section-content"},Ft={class:"flex flex-col sm:col-span-2"},Ht=t("p",{class:"footer-section-titles"},"Karriär",-1),Nt={class:"footer-section-content"},It={__name:"footer",setup(a){return(_,p)=>{const n=S;return i(),d("div",null,[t("footer",wt,[t("div",kt,[t("div",$t,[t("div",yt,[Mt,s(n,{to:"/",class:""},{default:l(()=>[St]),_:1}),t("p",Ct,r(e(o).address),1),s(n,{to:`mailto:${e(o).email}`,class:"footer-section-content hover:text-main"},{default:l(()=>[c(r(e(o).email),1)]),_:1},8,["to"]),s(n,{to:`tel:${e(o).phone}`,class:"footer-section-content hover:text-main"},{default:l(()=>[c(r(e(o).phone),1)]),_:1},8,["to"])]),Ot]),t("div",Lt,[Vt,t("p",jt,[c("För att få en kostnadsfri hembesök eller om du har några funderingar eller frågor, är du välkommen att kontakta oss på telefonnummer "),s(n,{to:`tel:${e(o).phone}`,class:"hover:text-main text-gray-400"},{default:l(()=>[c(r(e(o).phone),1)]),_:1},8,["to"]),c(" eller fylla i vårt formulär nedan. Vi svarar alltid snabbt!")]),t("p",Bt,[s(n,{to:"/contact-us",class:"hover:text-main text-gray-400"},{default:l(()=>[c("Klicka bara här ")]),_:1}),c(" för förfrågan. ")])]),t("div",Ft,[Ht,t("p",Nt,[c("Om du vill jobba hos oss vänligen skicka ditt CV till "),t("strong",null,[s(n,{to:`mailto:${e(o).email}`,class:"hover:text-main text-gray-400"},{default:l(()=>[c(r(e(o).email),1)]),_:1},8,["to"])])])])])])])}}},Tt=It,Rt={},Ut={class:"mx-auto"};function zt(a,_){const p=xt,n=Tt;return i(),d("div",null,[s(p),t("div",Ut,[D(a.$slots,"default")]),s(n)])}const qt=g(Rt,[["render",zt]]);export{qt as default};