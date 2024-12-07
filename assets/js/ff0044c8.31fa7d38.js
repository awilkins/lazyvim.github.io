"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[645],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,p=d["".concat(u,".").concat(f)]||d[f]||m[f]||i;return t?a.createElement(p,l(l({ref:n},c),{},{components:t})):a.createElement(p,l({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7462),r=t(7294),i=t(6010),l=t(2466),o=t(6550),u=t(1980),s=t(7392),c=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,s]=p({queryString:t,groupId:a}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),y=(()=>{const e=u??d;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,i]),tabValues:i}}var y=t(2389);const v="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==o&&(d(n),u(a))},f=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:f,onClick:m},l,{className:(0,i.Z)("tabs__item",g,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(k,(0,a.Z)({},e,n)))}function x(e){const n=(0,y.Z)();return r.createElement(w,(0,a.Z)({key:String(n)},e))}},2284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),l=t(5162);const o={},u="Mini-diff",s={unversionedId:"extras/editor/mini-diff",id:"extras/editor/mini-diff",title:"Mini-diff",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/editor/mini-diff.md",sourceDirName:"extras/editor",slug:"/extras/editor/mini-diff",permalink:"/extras/editor/mini-diff",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/editor/mini-diff.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Leap",permalink:"/extras/editor/leap"},next:{title:"Mini Files",permalink:"/extras/editor/mini-files"}},c={},d=[{value:"mini.diff",id:"minidiff",level:2},{value:"mini.diff",id:"minidiff-1",level:2},{value:"lualine.nvim",id:"lualinenvim",level:2}],m={toc:d};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mini-diff"},(0,r.kt)("inlineCode",{parentName:"h1"},"Mini-diff")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.editor.mini-diff" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"minidiff"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.diff"},"mini.diff")),(0,r.kt)("p",null," setup mini.diff"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  view = {\n    style = "sign",\n    signs = {\n      add = "\u258e",\n      change = "\u258e",\n      delete = "\uf0da",\n    },\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.diff",\n  event = "VeryLazy",\n  keys = {\n    {\n      "<leader>go",\n      function()\n        require("mini.diff").toggle_overlay(0)\n      end,\n      desc = "Toggle mini.diff overlay",\n    },\n  },\n  opts = {\n    view = {\n      style = "sign",\n      signs = {\n        add = "\u258e",\n        change = "\u258e",\n        delete = "\uf0da",\n      },\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"minidiff-1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.diff"},"mini.diff")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  Snacks.toggle({\n    name = "Mini Diff Signs",\n    get = function()\n      return vim.b.minidiff_disable ~= true\n    end,\n    set = function(state)\n      vim.b.minidiff_disable = not state\n      if state then\n        require("mini.diff").enable(0)\n      else\n        require("mini.diff").disable(0)\n      end\n      -- HACK: redraw to update the signs\n      vim.defer_fn(function()\n        vim.cmd([[redraw!]])\n      end, 200)\n    end,\n  }):map("<leader>uG")\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mini.diff",\n  opts = function()\n    Snacks.toggle({\n      name = "Mini Diff Signs",\n      get = function()\n        return vim.b.minidiff_disable ~= true\n      end,\n      set = function(state)\n        vim.b.minidiff_disable = not state\n        if state then\n          require("mini.diff").enable(0)\n        else\n          require("mini.diff").disable(0)\n        end\n        -- HACK: redraw to update the signs\n        vim.defer_fn(function()\n          vim.cmd([[redraw!]])\n        end, 200)\n      end,\n    }):map("<leader>uG")\n  end,\n}\n')))),(0,r.kt)("h2",{id:"lualinenvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")),(0,r.kt)("p",null," lualine integration"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local x = opts.sections.lualine_x\n  for _, comp in ipairs(x) do\n    if comp[1] == "diff" then\n      comp.source = function()\n        local summary = vim.b.minidiff_summary\n        return summary\n          and {\n            added = summary.add,\n            modified = summary.change,\n            removed = summary.delete,\n          }\n      end\n      break\n    end\n  end\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  opts = function(_, opts)\n    local x = opts.sections.lualine_x\n    for _, comp in ipairs(x) do\n      if comp[1] == "diff" then\n        comp.source = function()\n          local summary = vim.b.minidiff_summary\n          return summary\n            and {\n              added = summary.add,\n              modified = summary.change,\n              removed = summary.delete,\n            }\n        end\n        break\n      end\n    end\n  end,\n}\n')))))}f.isMDXComponent=!0}}]);