"use strict";(self.webpackChunkgotchas=self.webpackChunkgotchas||[]).push([[514],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,g=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4698:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={slug:"aws-iam-mfa",title:"Working with MFA-enabled role",authors:"keatmin",tags:["aws","iam"]},l=void 0,s={permalink:"/daily_gotchas/gotchas/aws-iam-mfa",source:"@site/gotchas/2021-08-24-aws-iam-mfa.md",title:"Working with MFA-enabled role",description:"Use IAM policy with Trust Relationship condition to add MFA requirement to assume role",date:"2021-08-24T00:00:00.000Z",formattedDate:"August 24, 2021",tags:[{label:"aws",permalink:"/daily_gotchas/gotchas/tags/aws"},{label:"iam",permalink:"/daily_gotchas/gotchas/tags/iam"}],readingTime:.295,truncated:!1,authors:[{name:"keatmin",title:"Data nerd",url:"https://github.com/keatmin",imageURL:"https://github.com/keatmin.png",key:"keatmin"}],prevItem:{title:"AIOHttp Client Settings",permalink:"/daily_gotchas/gotchas/aiohttp-client-settings"},nextItem:{title:"Efficient SQL filtering",permalink:"/daily_gotchas/gotchas/efficient-sql-filter"}},u={authorsImageUrls:[void 0]},m=[],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use IAM policy with Trust Relationship condition to add MFA requirement to assume role"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Condition": {\n        "Bool": {\n          "aws:MultiFactorAuthPresent": "true"\n        }\n      }\n')),(0,o.kt)("p",null,"With this configuration added into the trust policy of a role, assuming role would require MFA token by running the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"AWS_PROFILE=<profile_name> aws sts assume-role\n  --role-arn <arn:aws:iam::<account_no>:role/<role_to_assume> \n  --role-session-name <name> \n  --serial-number arn:aws:iam::<account_no>:mfa/<user_name> \n  --token <mfa_token>\n")))}f.isMDXComponent=!0}}]);