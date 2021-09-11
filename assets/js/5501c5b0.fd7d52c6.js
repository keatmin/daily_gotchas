"use strict";(self.webpackChunkgotchas=self.webpackChunkgotchas||[]).push([[7852],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1981:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"python-pytest-file-structure",title:"Pytest File Structure",authors:"keatmin",tags:["python","pytest"]},p=void 0,u={permalink:"/daily_gotchas/gotchas/python-pytest-file-structure",source:"@site/gotchas/2021-06-08-pytest-fs.md",title:"Pytest File Structure",description:"Given full structure:",date:"2021-06-08T00:00:00.000Z",formattedDate:"June 8, 2021",tags:[{label:"python",permalink:"/daily_gotchas/gotchas/tags/python"},{label:"pytest",permalink:"/daily_gotchas/gotchas/tags/pytest"}],readingTime:.89,truncated:!1,authors:[{name:"keatmin",title:"Data nerd",url:"https://github.com/keatmin",imageURL:"https://github.com/keatmin.png",key:"keatmin"}],prevItem:{title:"How Virtual Environment works",permalink:"/daily_gotchas/gotchas/python-venv-fyi"}},s={authorsImageUrls:[void 0]},c=[{value:"Reasons:",id:"reasons",children:[]},{value:"Solution:",id:"solution",children:[]},{value:"Additional thoughts:",id:"additional-thoughts",children:[]}],d={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Given full structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n|-- README.md\n|-- fraud_detection\n|   |-- __init__.py\n|   |-- app.py      -- from data import foo\n|   |-- conftest.py\n|   `-- data.py\n|-- requirements.txt\n`-- tests\n    |-- __init__.py\n    |-- fraud_data.txt\n    `-- fraud_detection_test.py -- from fraud_detection.app import bar\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Running ",(0,i.kt)("inlineCode",{parentName:"li"},"python3 fraud_detection/app.py")," with relative import ",(0,i.kt)("inlineCode",{parentName:"li"},"from data import foo")," will run successfully, but ",(0,i.kt)("inlineCode",{parentName:"li"},"pytest tests/")," will fail with import error that ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," cannot be imported."),(0,i.kt)("li",{parentName:"ul"},"Changing relative import ",(0,i.kt)("inlineCode",{parentName:"li"},"from data import foo")," to absolute import  ",(0,i.kt)("inlineCode",{parentName:"li"},"fraud_detection.data import foo")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"fraud_detection/app.py")," will make pytest pass but ",(0,i.kt)("inlineCode",{parentName:"li"},"python3 fraud_detection/app.py")," fail with import error that fraud_detection is not a module")),(0,i.kt)("h3",{id:"reasons"},"Reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("inlineCode",{parentName:"li"},"python3 filename.py")," at root, the path is where the file is located. Hence relative import works but pytest will fail because pytest does not know where data is located")),(0,i.kt)("h3",{id:"solution"},"Solution:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"python3 -m fraud_detection.app")," and have all imports as ",(0,i.kt)("strong",{parentName:"li"},"absolute import"),". Same to ",(0,i.kt)("inlineCode",{parentName:"li"},"python3 -m pytest tests/"))),(0,i.kt)("h3",{id:"additional-thoughts"},"Additional thoughts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Running ",(0,i.kt)("inlineCode",{parentName:"li"},"python3 -m pytest tests")," is the same as running ",(0,i.kt)("inlineCode",{parentName:"li"},"pytest"),", with the former adding current dir into PATH.")))}m.isMDXComponent=!0}}]);