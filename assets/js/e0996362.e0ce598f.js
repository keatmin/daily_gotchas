"use strict";(self.webpackChunkgotchas=self.webpackChunkgotchas||[]).push([[9817],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,f=m["".concat(l,".").concat(h)]||m[h]||s[h]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6023:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={slug:"python-lru-cache",title:"LRU cache",authors:"keatmin",tags:["python","lru"]},l=void 0,p={permalink:"/daily_gotchas/gotchas/python-lru-cache",source:"@site/gotchas/2021-07-01-lru_cache.md",title:"LRU cache",description:"`python",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"python",permalink:"/daily_gotchas/gotchas/tags/python"},{label:"lru",permalink:"/daily_gotchas/gotchas/tags/lru"}],readingTime:.49,truncated:!1,authors:[{name:"keatmin",title:"Data nerd",url:"https://github.com/keatmin",imageURL:"https://github.com/keatmin.png",key:"keatmin"}],prevItem:{title:"Pytest Mock",permalink:"/daily_gotchas/gotchas/python-pytest-mock"},nextItem:{title:"Secrets and Logging in ECS",permalink:"/daily_gotchas/gotchas/aws-ecs-secrets-logging"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from func_tools import lru_cache\n\n\n@lru_cache()\ndef foo():\n    return bar\n")),(0,o.kt)("p",null,"This is good enough if you do not need to have TTL"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For async version")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from async_lru import alru_cache\n\n\n@alru_cache()\nasync def foo():\n    return await bar\n")),(0,o.kt)("p",null,"This is an exact port from the ",(0,o.kt)("inlineCode",{parentName:"p"},"lru_cache")," version, as mentioned in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aio-libs/async-lru"},"docs")),(0,o.kt)("p",null,"If TTL is needed in async:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from aiocache import cached, Cache\n\n@cached(ttl=10,cache=Cache.MEMORY)\nasync def foo():\n    return await bar\n")),(0,o.kt)("p",null,"Additional lib from @jianshen92:"),(0,o.kt)("p",null,"For sync TTL cache ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lonelyenvoy/python-memoization"},"library")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from memoization import cached\n\n@cached(ttl=10) # Cache expires after 10 seconds\ndef foo():\n    return "bar"\n')))}h.isMDXComponent=!0}}]);