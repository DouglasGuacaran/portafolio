(function(e){function t(t){for(var r,o,c=t[0],i=t[1],f=t[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(l.length)l.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1b14c4e3":"47f71d44","chunk-2d20f5a4":"362244d2","chunk-740f3851":"216fbaff","chunk-7621bb2c":"86911280","chunk-b426e242":"9ab2dcf0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1b14c4e3":1,"chunk-740f3851":1,"chunk-7621bb2c":1,"chunk-b426e242":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b14c4e3":"76ec9c1f","chunk-2d20f5a4":"31d6cfe0","chunk-740f3851":"2a90b80f","chunk-7621bb2c":"eb9b0dec","chunk-b426e242":"dad30565"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){f=l[c],d=f.getAttribute("data-href");if(d===r||d===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),n(u)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;f=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portafolio/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"main",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("b-navbar",{staticClass:"p-2",attrs:{type:"dark",variant:"dark"}},[n("b-navbar-nav",[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Inicio")]),n("b-navbar-brand",{attrs:{to:"/sobremi"}},[e._v("Sobre mí")]),n("b-navbar-brand",{attrs:{to:"/portafolio"}},[e._v("Portafolio")]),n("b-navbar-brand",{attrs:{to:"/contactame"}},[e._v("Contáctame")])],1)],1),n("router-view")],1)])])},a=[],u={name:"App",components:{},data:function(){return{}}},c=u,i=(n("034f"),n("2877")),f=Object(i["a"])(c,o,a,!1,null,null,null),d=f.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(l["a"]);var s=[{path:"/",name:"Home",component:function(){return n.e("chunk-740f3851").then(n.bind(null,"bb51"))}},{path:"/sobremi",name:"Sobremi",component:function(){return n.e("chunk-7621bb2c").then(n.bind(null,"3395"))}},{path:"/portafolio",name:"Portafolio",component:function(){return n.e("chunk-b426e242").then(n.bind(null,"eced"))}},{path:"/contactame",name:"Contactame",component:function(){return n.e("chunk-1b14c4e3").then(n.bind(null,"b248"))}},{path:"/*",name:"Error404",component:function(){return n.e("chunk-2d20f5a4").then(n.bind(null,"b2ec"))}}],p=new l["a"]({mode:"history",base:"/portafolio/",routes:s}),b=p,h=n("2f62");r["default"].use(h["a"]);var m=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=n("5f5b"),g=n("b1e0"),y=n("ecee"),k=n("f2d1"),w=n("ad3d");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(v["a"]),r["default"].use(g["a"]),y["c"].add(k["a"],k["d"],k["b"],k["e"],k["c"]),r["default"].component("font-awesome-icon",w["a"]),r["default"].config.productionTip=!1,new r["default"]({router:b,store:m,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d3484c46.js.map