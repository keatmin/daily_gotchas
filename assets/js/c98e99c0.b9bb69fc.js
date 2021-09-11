"use strict";(self.webpackChunkgotchas=self.webpackChunkgotchas||[]).push([[9366],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"efficient-sql-filter",title:"Efficient SQL filtering",authors:"jianshen",tags:["database","sql"]},l=void 0,c={permalink:"/daily_gotchas/gotchas/efficient-sql-filter",source:"@site/gotchas/2021-08-24-sql-optimisation.md",title:"Efficient SQL filtering",description:"Putting this here because I'm surprised even sometimes the experienced data scientist does not know about this.",date:"2021-08-24T00:00:00.000Z",formattedDate:"August 24, 2021",tags:[{label:"database",permalink:"/daily_gotchas/gotchas/tags/database"},{label:"sql",permalink:"/daily_gotchas/gotchas/tags/sql"}],readingTime:.7,truncated:!1,authors:[{name:"jianshen",title:"MLE at Shopback",url:"https://github.com/jianshen92",imageURL:"https://github.com/jianshen92.png",key:"jianshen"}],prevItem:{title:"AIOHttp Client Settings",permalink:"/daily_gotchas/gotchas/aiohttp-client-settings"},nextItem:{title:"Assuming role in AWS",permalink:"/daily_gotchas/gotchas/aws-iam-assume-role"}},u={authorsImageUrls:[void 0]},p=[{value:"Q: Given table A and B that relates each other by user_id, find rows on A where user_id is not present on B.",id:"q-given-table-a-and-b-that-relates-each-other-by-user_id-find-rows-on-a-where-user_id-is-not-present-on-b",children:[]}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Putting this here because I'm surprised even sometimes the experienced data scientist does not know about this."),(0,i.kt)("h3",{id:"q-given-table-a-and-b-that-relates-each-other-by-user_id-find-rows-on-a-where-user_id-is-not-present-on-b"},"Q: Given table A and B that relates each other by user_id, find rows on A where user_id is not present on B."),(0,i.kt)("p",null,"Typically, people like to do"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  *\nFROM A\nWHERE A.user_id NOT IN (SELECT DISTINCT user_id FROM B)\n")),(0,i.kt)("p",null,"What I prefer,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  *\nFROM A\n  LEFT JOIN B\nON\n  A.user_id = B.user_id\nWHERE\n  B.user_id IS NULL\n")),(0,i.kt)("p",null,"The initial expectation was, using ",(0,i.kt)("inlineCode",{parentName:"p"},"IN")," where the Array object is huge can be much slower than ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN"),". However, modern DWH such as Redshift and BigQuery\nseems to have smart query planner that are able to recognize this query pattern. Query cost for both method on these DW are the same."),(0,i.kt)("p",null,"However, can't say the same for row-based RDBMS."))}d.isMDXComponent=!0}}]);