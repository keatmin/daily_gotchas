"use strict";(self.webpackChunkgotchas=self.webpackChunkgotchas||[]).push([[5486],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,v=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return n?i.createElement(v,o(o({ref:t},m),{},{components:n})):i.createElement(v,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],p={title:"vim"},c=void 0,l={unversionedId:"ide/vim",id:"ide/vim",isDocsHomePage:!1,title:"vim",description:"Navigating",source:"@site/knowledge/ide/vim.md",sourceDirName:"ide",slug:"/ide/vim",permalink:"/daily_gotchas/knowledge/ide/vim",tags:[],version:"current",frontMatter:{title:"vim"},sidebar:"tutorialSidebar",previous:{title:"iterm2",permalink:"/daily_gotchas/knowledge/dev/iterm2"}},m=[{value:"Navigating",id:"navigating",children:[]}],d={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"navigating"},"Navigating"),(0,a.kt)("p",null,"IT has been quite frustrating moving between lines when the navigating options are ",(0,a.kt)("inlineCode",{parentName:"p"},"hjklwb$^")),(0,a.kt)("p",null,"Use t/T to go to the character before the given character:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://www.google.com\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Typing ",(0,a.kt)("inlineCode",{parentName:"p"},"t"),",",(0,a.kt)("inlineCode",{parentName:"p"},"o")," will jump to ",(0,a.kt)("inlineCode",{parentName:"p"},"g")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"google")," before the ",(0,a.kt)("inlineCode",{parentName:"p"},"o"),".\nWhile ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," move you backwards, to the word before ",(0,a.kt)("inlineCode",{parentName:"p"},"o")," which would still be ",(0,a.kt)("inlineCode",{parentName:"p"},"g")," in this example coming from the end at ",(0,a.kt)("inlineCode",{parentName:"p"},".com"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"f")," is the same except it takes to the exact search character, while ",(0,a.kt)("inlineCode",{parentName:"p"},"F")," find char backwards."))),(0,a.kt)("p",null,"Alternatively, use ",(0,a.kt)("inlineCode",{parentName:"p"},"<int>|")," to jump to ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," char in the line. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"5|")," will move to ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," in the above example"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},";")," to move to the next one in the same direction and ",(0,a.kt)("inlineCode",{parentName:"p"},",")," in the opposite direction of the navigation"))))}s.isMDXComponent=!0}}]);