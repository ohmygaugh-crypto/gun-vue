if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let o={};const r=s=>l(s,d),a={module:{uri:d},exports:o,require:r};e[d]=Promise.all(n.map((s=>a[s]||r(s)))).then((s=>(i(...s),o)))}}define(["./workbox-178644a4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/index.01cd1618.js",revision:null},{url:"assets/style.dc5873b0.css",revision:null},{url:"docs/apps/index.html",revision:"d2f66d6c8becadb23df0a92125403331"},{url:"docs/assets/app.3d7a9ad3.js",revision:null},{url:"docs/assets/apps_index.md.6dc07693.js",revision:null},{url:"docs/assets/apps_index.md.6dc07693.lean.js",revision:null},{url:"docs/assets/blog_index.md.82815f37.js",revision:null},{url:"docs/assets/blog_index.md.82815f37.lean.js",revision:null},{url:"docs/assets/CHANGELOG.md.e06fb773.js",revision:null},{url:"docs/assets/CHANGELOG.md.e06fb773.lean.js",revision:null},{url:"docs/assets/chunks/components.es.2e6bfe4b.js",revision:null},{url:"docs/assets/components_index.md.f08ee515.js",revision:null},{url:"docs/assets/components_index.md.f08ee515.lean.js",revision:null},{url:"docs/assets/composables_index.md.0f804862.js",revision:null},{url:"docs/assets/composables_index.md.0f804862.lean.js",revision:null},{url:"docs/assets/guide_index.md.0632b81f.js",revision:null},{url:"docs/assets/guide_index.md.0632b81f.lean.js",revision:null},{url:"docs/assets/index.md.9925da30.js",revision:null},{url:"docs/assets/index.md.9925da30.lean.js",revision:null},{url:"docs/assets/README.md.fb1fd11b.js",revision:null},{url:"docs/assets/README.md.fb1fd11b.lean.js",revision:null},{url:"docs/assets/relay_index.md.a6a17283.js",revision:null},{url:"docs/assets/relay_index.md.a6a17283.lean.js",revision:null},{url:"docs/assets/style.b2f6aa82.css",revision:null},{url:"docs/blog/index.html",revision:"feaf66dd074ad90b53d10251995aa9f7"},{url:"docs/CHANGELOG.html",revision:"fcfcaae7f65c6740eab57ff723415170"},{url:"docs/components/index.html",revision:"43421dc71233888fb71b9a0da4458ff0"},{url:"docs/composables/index.html",revision:"f0b285bc17449353def612ea8fab3c3e"},{url:"docs/guide/index.html",revision:"fcc2366a9b95d232ca86277a205ff093"},{url:"docs/index.html",revision:"ee02e08e2bc9d7203f4654944a1beb35"},{url:"docs/README.html",revision:"1ddeffabbafcfff22bd60498d06f80f3"},{url:"docs/relay/index.html",revision:"16a775cb374c6697a22370b6b75d0691"},{url:"index.html",revision:"d1ffeb897daa742c5c8254d58deee527"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./gun-vue-logo.svg",revision:"933bb5cb84079bc036b4c7b06c58969c"},{url:"./gun-vue-logo.png",revision:"ba4df380fdff43e18031b602a5707d2e"},{url:"manifest.webmanifest",revision:"8086f2275982b4286240eb8aae049d70"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
