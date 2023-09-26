"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[7897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7462),i=t(7294),r=t(6010),l=t(2466),o=t(6550),s=t(1980),p=t(7392),c=t(12);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,p]=g({queryString:t,groupId:a}),[u,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=s??u;return d({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var f=t(2389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=p[t].value;a!==o&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",v,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=h(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b)},i.createElement(k,(0,a.Z)({},e,n)),i.createElement(y,(0,a.Z)({},e,n)))}function x(e){const n=(0,f.Z)();return i.createElement(T,(0,a.Z)({key:String(n)},e))}},5293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=t(7462),i=(t(7294),t(3905)),r=t(4866),l=t(5162);const o={},s="Coding",p={unversionedId:"plugins/coding",id:"plugins/coding",title:"Coding",description:"LuaSnip",source:"@site/docs/plugins/coding.md",sourceDirName:"plugins",slug:"/plugins/coding",permalink:"/plugins/coding",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/coding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/configuration/plugins"},next:{title:"Colorscheme",permalink:"/plugins/colorscheme"}},c={},u=[{value:"LuaSnip",id:"luasnip",level:2},{value:"friendly-snippets",id:"friendly-snippets",level:2},{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"cmp-nvim-lsp",id:"cmp-nvim-lsp",level:2},{value:"cmp-buffer",id:"cmp-buffer",level:2},{value:"cmp-path",id:"cmp-path",level:2},{value:"cmp_luasnip",id:"cmp_luasnip",level:2},{value:"mini.pairs",id:"minipairs",level:2},{value:"mini.surround",id:"minisurround",level:2},{value:"nvim-ts-context-commentstring",id:"nvim-ts-context-commentstring",level:2},{value:"mini.comment",id:"minicomment",level:2},{value:"mini.ai",id:"miniai",level:2}],m={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding"},"Coding"),(0,i.kt)("h2",{id:"luasnip"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,i.kt)("p",null," snippets"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  history = true,\n  delete_check_events = "TextChanged",\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "L3MON4D3/LuaSnip",\n  build = (not jit.os:find("Windows"))\n      and "echo \'NOTE: jsregexp is optional, so not a big deal if it fails to build\'; make install_jsregexp"\n    or nil,\n  dependencies = {\n    "rafamadriz/friendly-snippets",\n    config = function()\n      require("luasnip.loaders.from_vscode").lazy_load()\n    end,\n  },\n  opts = {\n    history = true,\n    delete_check_events = "TextChanged",\n  },\n  -- stylua: ignore\n  keys = {\n    {\n      "<tab>",\n      function()\n        return require("luasnip").jumpable(1) and "<Plug>luasnip-jump-next" or "<tab>"\n      end,\n      expr = true, silent = true, mode = "i",\n    },\n    { "<tab>", function() require("luasnip").jump(1) end, mode = "s" },\n    { "<s-tab>", function() require("luasnip").jump(-1) end, mode = { "i", "s" } },\n  },\n}\n')))),(0,i.kt)("h2",{id:"friendly-snippets"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rafamadriz/friendly-snippets"},"friendly-snippets")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rafamadriz/friendly-snippets",\n  config = function()\n    require("luasnip.loaders.from_vscode").lazy_load()\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-cmp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)("p",null," auto completion"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })\n  local cmp = require("cmp")\n  local defaults = require("cmp.config.default")()\n  return {\n    completion = {\n      completeopt = "menu,menuone,noinsert",\n    },\n    snippet = {\n      expand = function(args)\n        require("luasnip").lsp_expand(args.body)\n      end,\n    },\n    mapping = cmp.mapping.preset.insert({\n      ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),\n      ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),\n      ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n      ["<C-f>"] = cmp.mapping.scroll_docs(4),\n      ["<C-Space>"] = cmp.mapping.complete(),\n      ["<C-e>"] = cmp.mapping.abort(),\n      ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n      ["<S-CR>"] = cmp.mapping.confirm({\n        behavior = cmp.ConfirmBehavior.Replace,\n        select = true,\n      }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n    }),\n    sources = cmp.config.sources({\n      { name = "nvim_lsp" },\n      { name = "luasnip" },\n      { name = "buffer" },\n      { name = "path" },\n    }),\n    formatting = {\n      format = function(_, item)\n        local icons = require("lazyvim.config").icons.kinds\n        if icons[item.kind] then\n          item.kind = icons[item.kind] .. item.kind\n        end\n        return item\n      end,\n    },\n    experimental = {\n      ghost_text = {\n        hl_group = "CmpGhostText",\n      },\n    },\n    sorting = defaults.sorting,\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  version = false, -- last release is way too old\n  event = "InsertEnter",\n  dependencies = {\n    "hrsh7th/cmp-nvim-lsp",\n    "hrsh7th/cmp-buffer",\n    "hrsh7th/cmp-path",\n    "saadparwaiz1/cmp_luasnip",\n  },\n  opts = function()\n    vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })\n    local cmp = require("cmp")\n    local defaults = require("cmp.config.default")()\n    return {\n      completion = {\n        completeopt = "menu,menuone,noinsert",\n      },\n      snippet = {\n        expand = function(args)\n          require("luasnip").lsp_expand(args.body)\n        end,\n      },\n      mapping = cmp.mapping.preset.insert({\n        ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),\n        ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),\n        ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n        ["<C-f>"] = cmp.mapping.scroll_docs(4),\n        ["<C-Space>"] = cmp.mapping.complete(),\n        ["<C-e>"] = cmp.mapping.abort(),\n        ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n        ["<S-CR>"] = cmp.mapping.confirm({\n          behavior = cmp.ConfirmBehavior.Replace,\n          select = true,\n        }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n      }),\n      sources = cmp.config.sources({\n        { name = "nvim_lsp" },\n        { name = "luasnip" },\n        { name = "buffer" },\n        { name = "path" },\n      }),\n      formatting = {\n        format = function(_, item)\n          local icons = require("lazyvim.config").icons.kinds\n          if icons[item.kind] then\n            item.kind = icons[item.kind] .. item.kind\n          end\n          return item\n        end,\n      },\n      experimental = {\n        ghost_text = {\n          hl_group = "CmpGhostText",\n        },\n      },\n      sorting = defaults.sorting,\n    }\n  end,\n}\n')))),(0,i.kt)("h2",{id:"cmp-nvim-lsp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/cmp-nvim-lsp",\n  "hrsh7th/cmp-buffer",\n  "hrsh7th/cmp-path",\n  "saadparwaiz1/cmp_luasnip",\n}\n')))),(0,i.kt)("h2",{id:"cmp-buffer"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-buffer"},"cmp-buffer")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-buffer"\n')))),(0,i.kt)("h2",{id:"cmp-path"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-path"},"cmp-path")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-path"\n')))),(0,i.kt)("h2",{id:"cmp_luasnip"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"cmp_luasnip")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"saadparwaiz1/cmp_luasnip"\n')))),(0,i.kt)("h2",{id:"minipairs"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.pairs"},"mini.pairs")),(0,i.kt)("p",null," auto pairs"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.pairs",\n  event = "VeryLazy",\n  opts = {},\n  keys = {\n    {\n      "<leader>up",\n      function()\n        local Util = require("lazy.core.util")\n        vim.g.minipairs_disable = not vim.g.minipairs_disable\n        if vim.g.minipairs_disable then\n          Util.warn("Disabled auto pairs", { title = "Option" })\n        else\n          Util.info("Enabled auto pairs", { title = "Option" })\n        end\n      end,\n      desc = "Toggle auto pairs",\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"minisurround"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.surround"},"mini.surround")),(0,i.kt)("p",null," Fast and feature-rich surround actions. For text that includes\nsurrounding characters like brackets or quotes, this allows you\nto select the text inside, change or modify the surrounding characters,\nand more."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  mappings = {\n    add = "gza", -- Add surrounding in Normal and Visual modes\n    delete = "gzd", -- Delete surrounding\n    find = "gzf", -- Find surrounding (to the right)\n    find_left = "gzF", -- Find surrounding (to the left)\n    highlight = "gzh", -- Highlight surrounding\n    replace = "gzr", -- Replace surrounding\n    update_n_lines = "gzn", -- Update `n_lines`\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.surround",\n  keys = function(_, keys)\n    -- Populate the keys based on the user\'s options\n    local plugin = require("lazy.core.config").spec.plugins["mini.surround"]\n    local opts = require("lazy.core.plugin").values(plugin, "opts", false)\n    local mappings = {\n      { opts.mappings.add, desc = "Add surrounding", mode = { "n", "v" } },\n      { opts.mappings.delete, desc = "Delete surrounding" },\n      { opts.mappings.find, desc = "Find right surrounding" },\n      { opts.mappings.find_left, desc = "Find left surrounding" },\n      { opts.mappings.highlight, desc = "Highlight surrounding" },\n      { opts.mappings.replace, desc = "Replace surrounding" },\n      { opts.mappings.update_n_lines, desc = "Update `MiniSurround.config.n_lines`" },\n    }\n    mappings = vim.tbl_filter(function(m)\n      return m[1] and #m[1] > 0\n    end, mappings)\n    return vim.list_extend(mappings, keys)\n  end,\n  opts = {\n    mappings = {\n      add = "gza", -- Add surrounding in Normal and Visual modes\n      delete = "gzd", -- Delete surrounding\n      find = "gzf", -- Find surrounding (to the right)\n      find_left = "gzF", -- Find surrounding (to the left)\n      highlight = "gzh", -- Highlight surrounding\n      replace = "gzr", -- Replace surrounding\n      update_n_lines = "gzn", -- Update `n_lines`\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"nvim-ts-context-commentstring"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"},"nvim-ts-context-commentstring")),(0,i.kt)("p",null," comments"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  enable_autocmd = false,\n}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "JoosepAlviste/nvim-ts-context-commentstring",\n  lazy = true,\n  opts = {\n    enable_autocmd = false,\n  },\n}\n')))),(0,i.kt)("h2",{id:"minicomment"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.comment"},"mini.comment")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  options = {\n    custom_commentstring = function()\n      return require("ts_context_commentstring.internal").calculate_commentstring() or vim.bo.commentstring\n    end,\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.comment",\n  event = "VeryLazy",\n  opts = {\n    options = {\n      custom_commentstring = function()\n        return require("ts_context_commentstring.internal").calculate_commentstring() or vim.bo.commentstring\n      end,\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"miniai"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.ai"},"mini.ai")),(0,i.kt)("p",null," Better text-objects"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local ai = require("mini.ai")\n  return {\n    n_lines = 500,\n    custom_textobjects = {\n      o = ai.gen_spec.treesitter({\n        a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n        i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n      }, {}),\n      f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n      c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n      t = { "<([%p%w]-)%f[^<%w][^<>]->.-</%1>", "^<.->().*()</[^/]->$" },\n    },\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.ai",\n  -- keys = {\n  --   { "a", mode = { "x", "o" } },\n  --   { "i", mode = { "x", "o" } },\n  -- },\n  event = "VeryLazy",\n  dependencies = { "nvim-treesitter-textobjects" },\n  opts = function()\n    local ai = require("mini.ai")\n    return {\n      n_lines = 500,\n      custom_textobjects = {\n        o = ai.gen_spec.treesitter({\n          a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n          i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n        }, {}),\n        f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n        c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n        t = { "<([%p%w]-)%f[^<%w][^<>]->.-</%1>", "^<.->().*()</[^/]->$" },\n      },\n    }\n  end,\n  config = function(_, opts)\n    require("mini.ai").setup(opts)\n    -- register all text objects with which-key\n    require("lazyvim.util").on_load("which-key.nvim", function()\n      ---@type table<string, string|table>\n      local i = {\n        [" "] = "Whitespace",\n        [\'"\'] = \'Balanced "\',\n        ["\'"] = "Balanced \'",\n        ["`"] = "Balanced `",\n        ["("] = "Balanced (",\n        [")"] = "Balanced ) including white-space",\n        [">"] = "Balanced > including white-space",\n        ["<lt>"] = "Balanced <",\n        ["]"] = "Balanced ] including white-space",\n        ["["] = "Balanced [",\n        ["}"] = "Balanced } including white-space",\n        ["{"] = "Balanced {",\n        ["?"] = "User Prompt",\n        _ = "Underscore",\n        a = "Argument",\n        b = "Balanced ), ], }",\n        c = "Class",\n        f = "Function",\n        o = "Block, conditional, loop",\n        q = "Quote `, \\", \'",\n        t = "Tag",\n      }\n      local a = vim.deepcopy(i)\n      for k, v in pairs(a) do\n        a[k] = v:gsub(" including.*", "")\n      end\n\n      local ic = vim.deepcopy(i)\n      local ac = vim.deepcopy(a)\n      for key, name in pairs({ n = "Next", l = "Last" }) do\n        i[key] = vim.tbl_extend("force", { name = "Inside " .. name .. " textobject" }, ic)\n        a[key] = vim.tbl_extend("force", { name = "Around " .. name .. " textobject" }, ac)\n      end\n      require("which-key").register({\n        mode = { "o", "x" },\n        i = i,\n        a = a,\n      })\n    end)\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);