(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{3993:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return t(2814)}])},7424:function(e,n,t){"use strict";var r=t(5893),i=t(5256),a=t.n(i);n.Z=function(e){var n=e.tags;return(0,r.jsx)("div",{children:n.map((function(e,n){return(0,r.jsx)("a",{className:a().tag,children:e},n)}))})}},2814:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return G},default:function(){return K}});var r=t(5893),i=t(5514),a=t(9174),c=t(6059),s=t(6904),l=t(2789),o=t(5152),u=t.n(o),h=t(5843),d=t.n(h),f=t(5981),m=t(8321),v=t.n(m),p=t(9927),g=t(5660),x=t(2935),_=t(7294),N=t(8193),j=t(9352),C=t(7516),y=t(7762),b=t(4184),k=t.n(b),w=(0,_.memo)((function(e){var n=e.headingList,t=e.rootId,i=void 0===t?0:t,a=e.ulClassName,c=e.liClassName,s=e.anchorClassName,l=e.hyperlink,o=void 0!==l&&l,u=e.activeLiClassName,h=e.activeAnchorClassName,d=e.activeHeading,f=n.filter((function(e){return e.parentId===i}));return 0===f.length?null:(0,r.jsx)("ul",{className:k()(a),children:f.map((function(e,t){var i,l=e.text,f=e.href,m=e.id,v=null===(i=null===d||void 0===d?void 0:d.map((function(e){return e.id})))||void 0===i?void 0:i.includes(m);return(0,r.jsxs)("li",{className:k()(c,v&&u),children:[o?(0,r.jsx)("a",{href:f.toLowerCase(),className:k()(s,v&&h),children:l}):l,(0,r.jsx)(w,{headingList:n,rootId:e.id,ulClassName:a,liClassName:c,hyperlink:o,activeHeading:d,activeLiClassName:u,activeAnchorClassName:h})]},t)}))})})),E=w,L=t(7932),P=function(e){return(0,L.V)(e).children},O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e.filter((function(e){return"heading"===e.type})).filter((function(e){return e.depth<=n}))},I=function(e){var n,t=[],r=0,i=0;return e.forEach((function(e,a){n=Object.assign(e,{id:a+1,parentId:0});var c=t.filter((function(n){return n.depth===e.depth}));n.parentId=e.depth>r?a:c.length&&c[c.length-1].parentId,i=e.depth>r?i+1:c.length&&n.parentId,r=e.depth,t.push(n)})),t},S=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";switch(e.type){case"text":case"inlineCode":var i=e.value;n.text+=i,n.href+="".concat(r).concat(i.replace(/\s+/g,t));break;case"link":case"strong":case"emphasis":if(0===e.children.length)break;return S(e.children[0],n,t,r);default:return n}return n},Z=S,A=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={text:"",href:"#"};return e.forEach((function(e){r=Z(e,r,n,t)})),r};function H(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){H(e,n,t[n])}))}return e}var D=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=[];return e.forEach((function(e){var i=A(e.children,n,t),a=i.text,c=i.href,s=r.filter((function(e){return e.href===c})).length;r.push(T({},e,{text:a,href:c,duplicateCount:s}))})),r.forEach((function(e){var t=e.href,r=e.duplicateCount;e.href=t+(r?"".concat(n).concat(r):"")})),r},J=t(4944),F=t.n(J),M=function(e){var n=e.markdown,t=e.ulClassName,i=e.liClassName,a=e.anchorClassName,c=e.hyperlink,s=e.blankSpaceReplaceText,l=e.headingDepth,o=e.hyperLinkPrefix,u=e.onChangeHeading,h=e.activeLiClassName,d=e.activeAnchorClassName,f=e.activeHeading,m=O(P(n),l),v=(0,_.useMemo)((function(){return I(m)}),[m]),p=(0,_.useMemo)((function(){return D(v,s,o)}),[v]);return(0,_.useEffect)((function(){u&&u(p)}),[p]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:F()["toc-label"],children:[(0,r.jsx)(N.n5H,{}),(0,r.jsx)("span",{children:"Table of contents"})]}),(0,r.jsx)(E,{headingList:p,ulClassName:t,liClassName:i,anchorClassName:a,hyperlink:c,activeLiClassName:h,activeAnchorClassName:d,activeHeading:f})]})},R=t(7424),V=t(1664),q=t.n(V),B=function(e){e.slug;var n=e.title,t=e.body,o=e.date,u=e.tags;return(0,_.useEffect)((function(){Array.from(document.getElementsByClassName("icon-link")).map((function(e){e.innerHTML=y.renderToString((0,r.jsx)(N.uFt,{}))}))}),[]),(0,r.jsxs)("div",{className:v().container,children:[(0,r.jsxs)("div",{className:(0,p.J3)(v(),"child col-1st"),children:[(0,r.jsxs)("div",{children:[" ",(0,r.jsx)(q(),{href:"/",children:(0,r.jsx)(N.iqr,{})}),"        "]}),(0,r.jsxs)("div",{children:[" ",(0,r.jsx)(q(),{href:"/article",children:(0,r.jsx)(j.Gzv,{})})," "]}),(0,r.jsxs)("div",{children:[" ",(0,r.jsx)(q(),{href:"https://github.com/kgmyatthu",children:(0,r.jsx)(N.RrF,{})}),"  "]}),(0,r.jsxs)("div",{children:[" ",(0,r.jsx)(q(),{href:"https://github.com/kgmyatthu",children:(0,r.jsx)(C.Ifu,{})}),"  "]})]}),(0,r.jsxs)("div",{className:(0,p.J3)(v(),"child col-2nd"),children:[(0,r.jsx)("h1",{style:{textTransform:"uppercase"},children:n}),(0,r.jsx)(R.Z,{tags:u}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:v()["article-meta"],children:[new Date(o).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric"}),"| ",d()(t).text]}),(0,r.jsx)(i.D,{className:v().body,remarkPlugins:[a.Z,s.Z,f.Z],rehypePlugins:[[c.ZP,{showLineNumbers:!0}],l.Z,g.Z,x.Z],children:t})]}),(0,r.jsx)("div",{className:(0,p.J3)(v(),"child col-3rd"),children:(0,r.jsx)(M,{markdown:t,hyperlink:!0,liClassName:v()["toc-li"],activeAnchorClassName:"activeAnchor"})})]})},G=!0,K=u()((function(){return Promise.resolve(B)}),{ssr:!1})},9927:function(e,n,t){"use strict";t.d(n,{BC:function(){return i},J3:function(){return r}});var r=function(e,n){return n.split(" ").map((function(n){return e[n]?e[n]:""})).join(" ")},i=function(e){var n=e.src;return"".concat(n)}},5256:function(e){e.exports={tag:"tag_tag__COl_Y"}},4944:function(e){e.exports={"toc-label":"toc_toc-label__L9245"}},8321:function(e){e.exports={container:"article_container__2ofRp",child:"article_child__VKFLm","col-1st":"article_col-1st__u87_E","col-2nd":"article_col-2nd__IqS0a","article-meta":"article_article-meta__u7KUk","col-3rd":"article_col-3rd__thwPN","toc-li":"article_toc-li__yVSPN"}}},function(e){e.O(0,[774,937,874,617,879,973,810,888,179],(function(){return n=3993,e(e.s=n);var n}));var n=e.O();_N_E=n}]);