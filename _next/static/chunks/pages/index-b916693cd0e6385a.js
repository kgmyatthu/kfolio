(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7806)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,l=e.priority,s=void 0!==l&&l,h=e.loading,g=e.lazyRoot,x=void 0===g?null:g,k=e.lazyBoundary,N=void 0===k?"200px":k,z=e.className,I=e.quality,R=e.width,C=e.height,L=e.style,P=e.objectFit,M=e.objectPosition,q=e.onLoadingComplete,U=e.placeholder,F=void 0===U?"empty":U,T=e.blurDataURL,W=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(p.ImageConfigContext),B=u.useMemo((function(){var e=v||D||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[D]),V=W,G=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(G=V.layout),delete V.layout);var K=E;if("loader"in V){if(V.loader){var H=V.loader;K=function(e){e.config;var t=b(e,["config"]);return H(t)}}delete V.loader}var X="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=j(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(T=T||Q.blurDataURL,X=Q.src,(!G||"fill"!==G)&&(C=C||Q.height,R=R||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:X;var J=S(R),Y=S(C),$=S(I),Z=!s&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(u.useState(!1),2),ne=te[0],re=te[1],ie=o(m.useIntersection({rootRef:x,rootMargin:N,disabled:!Z}),3),oe=ie[0],ae=ie[1],ce=ie[2],le=!Z||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:M};0;0;var me=Object.assign({},L,"raw"===G?{}:fe),pe="blur"!==F||ne?{}:{filter:"blur(20px)",backgroundSize:P||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:M||"0% 0%"};if("fill"===G)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof J&&"undefined"!==typeof Y){var he=Y/J,ge=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===G?(se.display="block",se.position="relative",de=!0,ue.paddingTop=ge):"intrinsic"===G?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(J,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===G&&(se.display="inline-block",se.position="relative",se.width=J,se.height=Y)}else 0;var ye={src:_,srcSet:void 0,sizes:void 0};le&&(ye=A({config:B,src:t,unoptimized:c,layout:G,width:J,quality:$,sizes:n,loader:K}));var be=t;0;var ve,we="imagesrcset",_e="imagesizes";we="imageSrcSet",_e="imageSizes";var xe=(i(ve={},we,ye.srcSet),i(ve,_e,ye.sizes),ve),je=u.default.useLayoutEffect,Ae=u.useRef(q),Se=u.useRef(t);u.useEffect((function(){Ae.current=q}),[q]),je((function(){Se.current!==t&&(ce(),Se.current=t)}),[ce,t]);var Ee=y({isLazy:Z,imgAttributes:ye,heightInt:Y,widthInt:J,qualityInt:$,layout:G,className:z,imgStyle:me,blurStyle:pe,loading:h,config:B,unoptimized:c,placeholder:F,loader:K,srcString:be,onLoadingCompleteRef:Ae,setBlurComplete:re,setIntersection:oe,isVisible:le},V);return u.default.createElement(u.default.Fragment,null,"raw"===G?u.default.createElement(O,Object.assign({},Ee)):u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(O,Object.assign({},Ee))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},xe))):null)};var l,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(l=n(3121))&&l.__esModule?l:{default:l},f=n(139),m=n(9246),p=n(8730),h=(n(670),n(2700));function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){g(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(N(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(N(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(N(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function A(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,l),d=u.widths,f=u.kind,m=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[m]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,i,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var O=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,c=e.imgStyle,l=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,g=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,_=e.setIntersection,x=e.onLoad,j=e.onError,S=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,t,"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,className:a,style:y({},c,l),ref:u.useCallback((function(e){_(e),(null===e||void 0===e?void 0:e.complete)&&k(e,m,0,d,v,w)}),[_,m,o,d,v,w]),onLoad:function(e){k(e.currentTarget,m,0,d,v,w),x&&x(e)},onError:function(e){"blur"===d&&w(!0),j&&j(e)}})),(s||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},S,A({config:p,src:m,unoptimized:h,layout:o,width:r,quality:i,sizes:t.sizes,loader:g}),"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,style:c,className:a,loading:f||"lazy"}))))};function N(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],m=d[1],p=i(o.useState(t?t.current:null),2),h=p[0],g=p[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]),b=o.useCallback((function(){m(!1)}),[]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&g(t.current)}),[t]),[y,f,b]};var o=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7806:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),i=n(9008),o=n.n(i),a=n(3911),c=n.n(a),l=n(5675),s=n.n(l),u={src:"/_next/static/media/profile.8fa7f15e.png",height:4032,width:2280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAAAAAAUmmrnAAAAO0lEQVR42gEwAM//AKWlpqKhAMPEvsC8AO7DftXlANzEmse3AHutvbGXAJe/u6yNAJ6VpJOLAKmepKuQoM8bKDsjG9gAAAAASUVORK5CYII="},d=function(e,t){return t.split(" ").map((function(t){return e[t]?e[t]:""})).join(" ")},f=function(e){var t=e.src;return"".concat(t)},m=n(5742),p=n.n(m),h=n(7294),g=function(e){var t=e.content,n=e.action,i=e.className,o=(0,h.useRef)();return(0,h.useEffect)((function(){o&&(o.current.innerHTML=t.replace(" ","&nbsp;"))}),[]),(0,r.jsx)("div",{onClick:function(e){"string"===typeof n&&(window.location.href=n),"function"===typeof n&&n(e)},ref:o,className:"".concat(d(p(),"shadow-btn")," ").concat(i||"")})},y=function(){return(0,r.jsxs)("div",{className:d(c(),"container"),children:[(0,r.jsx)("div",{className:d(c(),"child col-1st"),children:(0,r.jsxs)("div",{className:c().name,children:[(0,r.jsxs)("div",{children:["KAUNG",(0,r.jsx)("br",{}),(0,r.jsx)("span",{style:{color:"#8c52ff"},children:"MYAT"}),(0,r.jsx)("br",{}),"THU"]}),(0,r.jsxs)("div",{className:c()["secondary-title"],children:["SOFTWARE",(0,r.jsx)("br",{}),(0,r.jsx)("span",{style:{color:"#5ce1e6"},children:"ENGINEER"})]}),(0,r.jsx)(g,{content:"Let's connect",action:"",className:c().btn})]})}),(0,r.jsx)("div",{className:d(c(),"child col-2nd"),children:(0,r.jsx)(s(),{unoptimized:!0,loader:f,src:u,alt:"profile",layout:"responsive",className:c()["pp-img"]})}),(0,r.jsx)("div",{className:d(c(),"child col-3rd"),children:(0,r.jsxs)("div",{children:["SOFTWARE",(0,r.jsx)("br",{}),(0,r.jsx)("span",{style:{color:"#5ce1e6"},children:"ENGINEER"})]})})]})},b=n(7756),v=n.n(b),w=function(e){var t=e.year,n=e.month,i=e.company,o=e.position,a=e.description,c=e.state,l=e.link,s=function(e){var t=e.getBoundingClientRect();return{x:t.x,y:t.y}},u=(0,h.useRef)(),d=(0,h.useRef)(),f=(0,h.useRef)();return(0,h.useEffect)((function(){var e=function(){requestAnimationFrame(e);var t=s(u.current),n=s(d.current),r=(n.x+t.x+10)/2,i=n.y+10;null===c||void 0===c||c.set({x:r,y:i}),f.current.style.left="".concat(r,"px"),f.current.style.top="".concat(i,"px")};return e(),function(){}}),[]),(0,r.jsxs)("a",{className:v().timeframe,href:l,children:[(0,r.jsxs)("div",{className:v()["timeframe-date"],children:[(0,r.jsx)("span",{ref:u,children:t}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:n})]}),(0,r.jsxs)("div",{className:v()["timeframe-data"],children:[(0,r.jsx)("h2",{ref:d,children:i}),(0,r.jsx)("div",{children:o}),(0,r.jsx)("p",{children:a})]}),(0,r.jsx)("div",{ref:f,className:v().dot})]})},_=function(e){var t=e.className,n=e.data,i=(0,h.useRef)(),o=(0,h.useState)({x:0,y:0}),a=o[0],c=o[1],l=(0,h.useState)({x:0,y:0}),s=l[0],u=l[1];return(0,h.useEffect)((function(){var e=s.y-a.y;i.current.style.top=a.y+10+"px",i.current.style.left=a.x+12+"px",i.current.style.height=e+"px"}),[a,s]),(0,r.jsxs)("div",{className:t||"",children:[(0,r.jsx)("div",{className:v().line,ref:i}),n.map((function(e,t,n){return 0===t?(0,r.jsx)(w,{year:e.year,month:e.month,company:e.company,position:e.position,description:e.description,link:e.link,state:{get:a,set:c}},t):t===n.length-1?(0,r.jsx)(w,{year:e.year,month:e.month,company:e.company,position:e.position,description:e.description,link:e.link,state:{get:s,set:u}},t):(0,r.jsx)(w,{year:e.year,month:e.month,company:e.company,position:e.position,link:e.link,description:e.description},t)}))]})},x=n(4547),j=n.n(x),A={src:"/_next/static/media/toroto.1b1367d9.gif",height:438,width:500},S=function(){var e=(0,h.useState)([{year:2022,month:"Feb",position:"software engineer",company:"shardus",link:"https://shardus.com/#team",description:"Dynamically state shard-ed blockchain protocol allowing true linear scalability for decentralized web"},{year:2022,month:"Feb",position:"software engineer",company:"shardeum",link:"https://shardeum.org",description:"EVM-based, linearly scalable smart contract platform that provides low gas fees forever while maintaining true decentralization and solid security through dynamic state sharding"},{year:2021,month:"Feb",position:"Full stack web developer",link:"/#",company:"LUUPIT",description:"Help business succeed using technology"}]),t=e[0];e[1];return(0,r.jsxs)("div",{className:j().container,children:[(0,r.jsxs)("div",{className:d(j(),"child col-1st"),children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)("span",{style:{color:"#8c52ff"},children:"EXP"}),"ERIENCE"]}),(0,r.jsx)(_,{className:j().timeline,data:t})]}),(0,r.jsxs)("div",{className:d(j(),"child col-2nd"),children:[(0,r.jsx)("h1",{children:'"\u8d77\u6b7b\u56de\u751f"'}),(0,r.jsx)(s(),{loader:f,src:A,alt:"profile",className:j().gif})]})]})},E=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Kaung Myat Thu | Portfolio "}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsx)(y,{}),(0,r.jsx)(S,{})]})}},5742:function(e){e.exports={"shadow-btn":"buttons_shadow-btn__F5aLn"}},3911:function(e){e.exports={container:"intro_container__GVznC",child:"intro_child__t5vXF","col-1st":"intro_col-1st__w2wNP",name:"intro_name__h8XKC","col-2nd":"intro_col-2nd__MNL_P","col-3rd":"intro_col-3rd__lmUMw","secondary-title":"intro_secondary-title__WcVr_",btn:"intro_btn__uYet_",date:"intro_date__5gTEI","pp-img":"intro_pp-img__lSPWk"}},7756:function(e){e.exports={container:"timeline_container__eoQ5x",timeframe:"timeline_timeframe__mGxCv","timeframe-child":"timeline_timeframe-child__ANN2i","timeframe-data":"timeline_timeframe-data__zYnLM","timeframe-date":"timeline_timeframe-date__25eTt",dot:"timeline_dot__Wbqds",line:"timeline_line__dRGjQ"}},4547:function(e){e.exports={container:"work_container__E9B5a",child:"work_child__Oazqs","col-1st":"work_col-1st__SdAAa",timeline:"work_timeline__pMLnF","col-2nd":"work_col-2nd__pFMbR",gif:"work_gif__NneLe",fadeInOut:"work_fadeInOut__9gisN",float:"work_float__7OlQs"}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);