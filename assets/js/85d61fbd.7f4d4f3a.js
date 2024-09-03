"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37931],{15995:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(62540);r(63696);var o=r(11750);function a({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.A)("tabItem_pnkT",r),hidden:t,children:e})}},27446:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(62540),o=r(63696),a=r(11750),l=r(7846),i=r(49519),s=r(96439),c=r(19739),u=r(66904),d=r(79244);function p(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function h({value:e,tabValues:t}){return t.some(t=>t.value===e)}var m=r(10709);function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function v({className:e,block:t,selectedValue:r,selectValue:o,tabValues:i}){let s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{let t=e.currentTarget,n=i[s.indexOf(t)].value;n!==r&&(c(t),o(n))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=s.indexOf(e.currentTarget)+1;n=null!==(t=s[r])&&void 0!==t?t:s[0];break}case"ArrowLeft":{let t=s.indexOf(e.currentTarget)-1;n=null!==(r=s[t])&&void 0!==r?r:s[s.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:i.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",f(b({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>s.push(e),onKeyDown:d,onClick:u},o),{className:(0,a.A)("tabs__item","tabItem_AQgk",null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function g({lazy:e,children:t,selectedValue:r}){let l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function y(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,a=function(e){let{values:t,children:r}=e;return(0,o.useMemo)(()=>{let e=null!=t?t:p(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[l,m]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:a})),[b,f]=function({queryString:e=!1,groupId:t}){let r=(0,i.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c.aZ)(n),(0,o.useCallback)(e=>{var t,o;if(!n)return;let a=new URLSearchParams(r.location.search);a.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),o=o={search:a.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[v,g]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,d.Dv)(t);return[r,(0,o.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),y=(()=>{let e=null!=b?b:v;return h({value:e,tabValues:a})?e:null})();return(0,s.A)(()=>{y&&m(y)},[y]),{selectedValue:l,selectValue:(0,o.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),g(e)},[f,g,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(v,b({},t,e)),(0,n.jsx)(g,b({},t,e))]})}function j(e){let t=(0,m.A)();return(0,n.jsx)(y,f(b({},e),{children:p(e.children)}),String(t))}},82061:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});let n=JSON.parse('{"id":"api/themes/theme-live-codeblock","title":"\u{1F4E6} theme-live-codeblock","description":"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.","source":"@site/docs/api/themes/theme-live-codeblock.mdx","sourceDirName":"api/themes","slug":"/api/themes/@docusaurus/theme-live-codeblock","permalink":"/docs/api/themes/@docusaurus/theme-live-codeblock","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-live-codeblock.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1725292469000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/api/themes/@docusaurus/theme-live-codeblock"},"sidebar":"api","previous":{"title":"\u{1F4E6} theme-classic","permalink":"/docs/api/themes/@docusaurus/theme-classic"},"next":{"title":"\u{1F4E6} theme-search-algolia","permalink":"/docs/api/themes/@docusaurus/theme-search-algolia"}}');var o=r(62540),a=r(43023),l=r(27446),i=r(15995);let s={sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},c="\u{1F4E6} theme-live-codeblock",u={},d=[{value:"Configuration",id:"configuration",level:3}];function p(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-theme-live-codeblock",children:"\u{1F4E6} theme-live-codeblock"})}),"\n",(0,o.jsxs)(t.p,{children:["This theme provides a ",(0,o.jsx)(t.code,{children:"@theme/CodeBlock"})," component that is powered by react-live. You can read more on ",(0,o.jsx)(t.a,{href:"/docs/markdown-features/code-blocks#interactive-code-editor",children:"interactive code editor"})," documentation."]}),"\n",(0,o.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,o.jsx)(i.A,{value:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-live-codeblock\n"})})}),(0,o.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-live-codeblock\n"})})}),(0,o.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-live-codeblock\n"})})})]}),"\n",(0,o.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n"})})]})}function h(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},43023:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(63696);let o={},a=n.createContext(o);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);