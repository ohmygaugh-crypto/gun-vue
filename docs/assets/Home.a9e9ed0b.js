import{_ as d,O as p,P as k,g as i,u as e,o,c as a,d as c,Q as F,s as r,t as l,y as g,R as x,F as I,p as L,r as b,b as h,v as y}from"./app.0f2a6e7d.js";const A={key:0,class:"home-hero"},B={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=p({setup(m){const{site:s,frontmatter:t}=k(),_=i(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(_)?(o(),a("header",A,[e(t).heroImage?(o(),a("figure",B,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,C)])):r("",!0),e(v)?(o(),a("h1",N,l(e(v)),1)):r("",!0),e(f)?(o(),a("p",w,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var D=d(V,[["__scopeId","data-v-568d65df"]]);const S={key:0,class:"home-features"},j={class:"wrapper"},E={class:"container"},O={class:"features"},P={key:0,class:"title"},Q={key:1,class:"details"},R=p({setup(m){const{frontmatter:s}=k(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",S,[c("div",j,[c("div",E,[c("div",O,[(o(!0),a(I,null,L(e(_),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",P,l(n.title),1)):r("",!0),n.details?(o(),a("p",Q,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var q=d(R,[["__scopeId","data-v-5bafaeef"]]);const z={key:0,class:"footer"},G={class:"container"},J={class:"text"},K=p({setup(m){const{frontmatter:s}=k();return(t,_)=>e(s).footer?(o(),a("footer",z,[c("div",G,[c("p",J,l(e(s).footer),1)])])):r("",!0)}});var M=d(K,[["__scopeId","data-v-cd9618d2"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=p({setup(m){return(s,t)=>{const _=b("Content");return o(),a("main",U,[h(D),y(s.$slots,"hero",{},void 0,!0),h(q),c("div",W,[h(_)]),y(s.$slots,"features",{},void 0,!0),h(M),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-4b68c5d4"]]);export{Z as default};
