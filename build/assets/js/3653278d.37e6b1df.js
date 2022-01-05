"use strict";(self.webpackChunkqframework=self.webpackChunkqframework||[]).push([[7132],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},364:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],s={id:"dbcontext-view",title:"9.12 \u89c6\u56fe\u64cd\u4f5c",sidebar_label:"9.12 \u89c6\u56fe\u64cd\u4f5c"},c=void 0,l={unversionedId:"dbcontext-view",id:"dbcontext-view",title:"9.12 \u89c6\u56fe\u64cd\u4f5c",description:"9.12.1 \u5173\u4e8e\u89c6\u56fe",source:"@site/docs/dbcontext-view.mdx",sourceDirName:".",slug:"/dbcontext-view",permalink:"/docs/dbcontext-view",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-view.mdx",tags:[],version:"current",lastUpdatedBy:"liangxie",lastUpdatedAt:1641347946,formattedLastUpdatedAt:"1/5/2022",frontMatter:{id:"dbcontext-view",title:"9.12 \u89c6\u56fe\u64cd\u4f5c",sidebar_label:"9.12 \u89c6\u56fe\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",permalink:"/docs/dbcontext-hight-query"},next:{title:"9.13 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",permalink:"/docs/dbcontext-proc"}},p=[{value:"9.12.1 \u5173\u4e8e\u89c6\u56fe",id:"9121-\u5173\u4e8e\u89c6\u56fe",children:[],level:2},{value:"9.12.2 \u89c6\u56fe\u7684\u4f7f\u7528",id:"9122-\u89c6\u56fe\u7684\u4f7f\u7528",children:[{value:"9.12.2.1 \u521b\u5efa\u89c6\u56fe <code>SQL</code>",id:"91221-\u521b\u5efa\u89c6\u56fe-sql",children:[],level:3},{value:"9.12.2.2 \u89c6\u56fe\u6a21\u578b",id:"91222-\u89c6\u56fe\u6a21\u578b",children:[],level:3}],level:2},{value:"9.12.3 \u89c6\u56fe\u4f7f\u7528",id:"9123-\u89c6\u56fe\u4f7f\u7528",children:[],level:2},{value:"9.12.4 \u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f \u2714",id:"9124-\u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f-",children:[],level:2},{value:"9.12.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9125-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"9121-\u5173\u4e8e\u89c6\u56fe"},"9.12.1 \u5173\u4e8e\u89c6\u56fe"),(0,i.kt)("p",null,"\u89c6\u56fe\u662f\u6570\u636e\u5e93\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u5bf9\u8c61\uff0c\u662f\u4e00\u5f20\u865a\u62df\u8868\uff0c\u901a\u8fc7\u89c6\u56fe\u6211\u4eec\u53ef\u4ee5\u5bf9\u7ed3\u679c\u8fdb\u884c\u7b5b\u9009\u7f13\u5b58\uff0c\u540c\u65f6\u8fd8\u80fd\u5b9e\u73b0\u9897\u7c92\u5316\u6743\u9650\u63a7\u5236\uff0c\u5982\u63a7\u5236\u6307\u5b9a\u884c\uff0c\u6307\u5b9a\u5217\u3002"),(0,i.kt)("h2",{id:"9122-\u89c6\u56fe\u7684\u4f7f\u7528"},"9.12.2 \u89c6\u56fe\u7684\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\u5b9e\u73b0\u89c6\u56fe\u7684\u64cd\u4f5c\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u521b\u5efa\u89c6\u56fe\u6a21\u578b\uff0c\u5e76\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityNotKey")," \u57fa\u7c7b\u5373\u53ef\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("h3",{id:"91221-\u521b\u5efa\u89c6\u56fe-sql"},"9.12.2.1 \u521b\u5efa\u89c6\u56fe ",(0,i.kt)("inlineCode",{parentName:"h3"},"SQL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW V_Person AS\nSELECT Id,Name,Age,Address FROM person\n")),(0,i.kt)("h3",{id:"91222-\u89c6\u56fe\u6a21\u578b"},"9.12.2.2 \u89c6\u56fe\u6a21\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5,10}","{5,10}":!0},'using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class V_Person : EntityNotKey\n    {\n        /// <summary>\n        /// \u914d\u7f6e\u89c6\u56fe\u540d\n        /// </summary>\n        public V_Person() : base("V_Person")\n        {\n        }\n\n        /// <summary>\n        /// \u4e3b\u952eId\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u89c6\u56fe\u540d\u79f0")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u89c6\u56fe\u5b9e\u4f53\u53ea\u9700\u8981\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityNotKey")," \u57fa\u7c7b\u5e76\u7f16\u5199\u65e0\u53c2\u6784\u9020\u51fd\u6570\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},'base("\u89c6\u56fe\u540d\u79f0")')," \u5373\u53ef\u3002"))),(0,i.kt)("h2",{id:"9123-\u89c6\u56fe\u4f7f\u7528"},"9.12.3 \u89c6\u56fe\u4f7f\u7528"),(0,i.kt)("p",null,"\u89c6\u56fe\u9664\u4e86\u4e0d\u80fd\u64cd\u4f5c\uff08\u5199\uff09\u4ee5\u5916\uff0c\u5176\u4ed6\u64cd\u4f5c\u548c\u8868\u64cd\u4f5c\u65e0\u5f02\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var vEntities = v_repository.Where(u => u.Id >10).ToList();\n")),(0,i.kt)("h2",{id:"9124-\u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f-"},"9.12.4 \u89c6\u56fe\u6700\u4f73\u8bfb\u53d6\u65b9\u5f0f \u2714"),(0,i.kt)("p",null,"\u7531\u4e8e\u89c6\u56fe\u662f\u865a\u62df\u8868\uff0c\u4e0d\u5e94\u8be5\u5bf9\u5176\u8fdb\u884c\u5199\u64cd\u4f5c\uff0c\u6240\u4ee5\u5e94\u8be5\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u53ea\u8bfb\u4ed3\u50a8\u521d\u59cb\u5316\u89c6\u56fe"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{11,13,16}","{11,13,16}":!0},"using Furion.Core;\nusing Furion.DatabaseAccessor;\nusing Furion.DynamicApiController;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace Furion.Application.Persons\n{\n    public class FurionService : IDynamicApiController\n    {\n        private readonly IReadableRepository<V_Person> _readableRepository;\n\n        public FurionService(IRepository<V_Person> repository)\n        {\n            // \u521d\u59cb\u5316\u53ea\u8bfb\u4ed3\u50a8\n            _readableRepository = repository.Constraint<IReadableRepository<V_Person>>();\n        }\n\n        /// <summary>\n        /// \u8bfb\u53d6\u89c6\u56fe\n        /// </summary>\n        /// <returns></returns>\n        public async Task<List<V_Person>> GetVPerson()\n        {\n            var list = await _readableRepository.AsQueryable().ToListAsync();\n            return list;\n        }\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},".Constraint<TEntity,TDbContextLocator>")," \u65b9\u6cd5\u53ef\u4ee5\u5c06\u4ed3\u50a8\u7ea6\u675f\u4e3a\u7279\u5b9a\u4ed3\u50a8\uff0c\u5982\u53ea\u8bfb\u4ed3\u50a8\uff0c\u53ef\u8bfb\u53ef\u5199\u4ed3\u50a8\uff0c\u53ea\u65b0\u589e\u4ed3\u50a8\u7b49\u3002"))),(0,i.kt)("h2",{id:"9125-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.12.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);