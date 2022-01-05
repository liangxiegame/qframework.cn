"use strict";(self.webpackChunkqframework=self.webpackChunkqframework||[]).push([[1215],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return u}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=c(r),u=i,m=v["".concat(d,".").concat(u)]||v[u]||s[u]||a;return r?t.createElement(m,l(l({ref:n},p),{},{components:r})):t.createElement(m,l({ref:n},p))}));function u(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=v;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6344:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return v}});var t=r(3117),i=r(102),a=(r(7294),r(3905)),l=(r(4996),["components"]),o={id:"file-provider",title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf",sidebar_label:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf"},d=void 0,c={unversionedId:"file-provider",id:"file-provider",title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 2.5.0 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/file-provider.mdx",sourceDirName:".",slug:"/file-provider",permalink:"/docs/file-provider",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/file-provider.mdx",tags:[],version:"current",frontMatter:{id:"file-provider",title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf",sidebar_label:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf"},sidebar:"docs",previous:{title:"30. \u8131\u654f\u5904\u7406",permalink:"/docs/sensitive-detection"},next:{title:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",permalink:"/docs/sesssion-state"}},p=[{value:"31.1 \u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf",id:"311-\u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf",children:[{value:"31.1.1 \u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b",id:"3111-\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b",children:[],level:3}],level:2},{value:"31.2 \u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1",id:"312-\u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1",children:[],level:2},{value:"31.3 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf <code>IFileProvider</code> \u5b9e\u4f8b",id:"313-\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf-ifileprovider-\u5b9e\u4f8b",children:[{value:"31.3.1 <code>Func&lt;FileProviderTypes, object, IFileProvider&gt;</code> \u65b9\u5f0f",id:"3131-funcfileprovidertypes-object-ifileprovider-\u65b9\u5f0f",children:[],level:3},{value:"31.3.2 <code>FS</code> \u9759\u6001\u7c7b\u65b9\u5f0f",id:"3132-fs-\u9759\u6001\u7c7b\u65b9\u5f0f",children:[],level:3}],level:2},{value:"31.4 <code>IFileProvider</code> \u5e38\u89c1\u64cd\u4f5c",id:"314-ifileprovider-\u5e38\u89c1\u64cd\u4f5c",children:[{value:"31.4.1 \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9",id:"3141-\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9",children:[],level:3},{value:"31.4.2 \u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\uff08\u9700\u9012\u5f52\u67e5\u627e\uff09",id:"3142-\u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\u9700\u9012\u5f52\u67e5\u627e",children:[],level:3},{value:"31.4.4 \u76d1\u542c\u6587\u4ef6\u53d8\u5316",id:"3144-\u76d1\u542c\u6587\u4ef6\u53d8\u5316",children:[],level:3}],level:2},{value:"31.5 \u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e",id:"315-\u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e",children:[],level:2},{value:"31.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"316-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[],level:2}],s={toc:p};function v(e){var n=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7248\u672c\u8bf4\u660e")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 2.5.0 +")," \u7248\u672c\u4f7f\u7528\u3002"))),(0,a.kt)("h2",{id:"311-\u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf"},"31.1 \u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf"),(0,a.kt)("p",null,"\u672c\u7ae0\u6240\u8c13\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u7cfb\u7edf")," \u6709\u70b9\u540d\u4e0d\u526f\u5b9e\uff0c\u5176\u5b9e\u6839\u672c\u7b97\u4e0d\u4e0a\u4e00\u4e2a\u7cfb\u7edf\uff0c\u5b83\u4ec5\u4ec5\u662f\u5229\u7528\u4e00\u4e2a\u62bd\u8c61\u5316\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"IFileProvider")," \u4ee5\u7edf\u4e00\u7684\u65b9\u5f0f\u63d0\u4f9b\u6240\u9700\u7684\u6587\u4ef6\u800c\u5df2\u3002\u901a\u8fc7\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u7cfb\u7edf")," \u53ef\u4ee5\u8bfb\u53d6\u7269\u7406\u6587\u4ef6\u548c\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\uff0c\u5305\u62ec\u76ee\u5f55\u7ed3\u679c\u8bfb\u53d6\uff0c\u6587\u4ef6\u5185\u5bb9\u8bfb\u53d6\uff0c\u6587\u4ef6\u5185\u5bb9\u76d1\u542c\u7b49\u7b49\u3002"),(0,a.kt)("h3",{id:"3111-\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b"},"31.1.1 \u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u4e24\u79cd\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Physical"),"\uff1a\u7269\u7406\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u7269\u7406\u673a\u4e2d\u5b9e\u9645\u5b58\u5728\u7684\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Embedded"),"\uff1a\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u8d44\u6e90\u6587\u4ef6\u5d4c\u5165\u5230\u4e86\u7a0b\u5e8f\u96c6\u4e2d\uff0c\u5e38\u7528\u4e8e\u6a21\u5757\u5316\u5f00\u53d1")),(0,a.kt)("h2",{id:"312-\u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1"},"31.2 \u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddVirtualFileServer();\n")),(0,a.kt)("h2",{id:"313-\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf-ifileprovider-\u5b9e\u4f8b"},"31.3 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf ",(0,a.kt)("inlineCode",{parentName:"h2"},"IFileProvider")," \u5b9e\u4f8b"),(0,a.kt)("h3",{id:"3131-funcfileprovidertypes-object-ifileprovider-\u65b9\u5f0f"},"31.3.1 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Func<FileProviderTypes, object, IFileProvider>")," \u65b9\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Func<FileProviderTypes, object, IFileProvider>")," \u59d4\u6258\u4f9b\u6784\u9020\u51fd\u6570\u6ce8\u5165\u6216\u89e3\u6790\u670d\u52a1\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{6,8-9,11-12}","{6,8-9,11-12}":!0},'public class PersonServices\n{\n    private readonly IFileProvider _physicalFileProvider;\n    private readonly IFileProvider _embeddedFileProvider;\n\n    public PersonServices(Func<FileProviderTypes, object, IFileProvider> fileProviderResolve)\n    {\n        // \u89e3\u6790\u7269\u7406\u6587\u4ef6\u7cfb\u7edf\n        _physicalFileProvider = fileProviderResolve(FileProviderTypes.Physical, @"c:/test");\n\n        // \u89e3\u6790\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u7cfb\u7edf\n        _embeddedFileProvider = fileProviderResolve(FileProviderTypes.Embedded, Assembly.GetEntryAssembly());\n    }\n}\n')),(0,a.kt)("h3",{id:"3132-fs-\u9759\u6001\u7c7b\u65b9\u5f0f"},"31.3.2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"FS")," \u9759\u6001\u7c7b\u65b9\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"FS")," \u9759\u6001\u7c7b\u65b9\u5f0f\u521b\u5efa\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// \u89e3\u6790\u7269\u7406\u6587\u4ef6\u7cfb\u7edf\nvar physicalFileProvider = FS.GetPhysicalFileProvider(@"c:/test");\n\n// \u89e3\u6790\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u7cfb\u7edf\nvar embeddedFileProvider = FS.GetEmbeddedFileProvider(Assembly.GetEntryAssembly());\n')),(0,a.kt)("h2",{id:"314-ifileprovider-\u5e38\u89c1\u64cd\u4f5c"},"31.4 ",(0,a.kt)("inlineCode",{parentName:"h2"},"IFileProvider")," \u5e38\u89c1\u64cd\u4f5c"),(0,a.kt)("h3",{id:"3141-\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"},"31.4.1 \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'byte[] buffer;\nusing (Stream readStream = _fileProvider.GetFileInfo("\u4f60\u7684\u6587\u4ef6\u8def\u5f84").CreateReadStream())\n{\n    buffer = new byte[readStream.Length];\n    await readStream.ReadAsync(buffer.AsMemory(0, buffer.Length));\n}\n\n// \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\nvar content = Encoding.UTF8.GetString(buffer);\n')),(0,a.kt)("h3",{id:"3142-\u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\u9700\u9012\u5f52\u67e5\u627e"},"31.4.2 \u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\uff08\u9700\u9012\u5f52\u67e5\u627e\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var rootPath = "\u5f53\u524d\u76ee\u5f55\u8def\u5f84";\nvar fileinfos = _fileProvider.GetDirectoryContents(rootPath);\nforeach (var fileinfo in fileinfos)\n{\n    if(fileinfo.IsDirectory)\n    {\n        // \u8fd9\u91cc\u9012\u5f52\u3002\u3002\u3002\n    }\n}\n')),(0,a.kt)("h3",{id:"3144-\u76d1\u542c\u6587\u4ef6\u53d8\u5316"},"31.4.4 \u76d1\u542c\u6587\u4ef6\u53d8\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'ChangeToken.OnChange(() => _fileProvider.Watch("\u76d1\u542c\u7684\u6587\u4ef6"), () =>\n{\n    // \u8fd9\u91cc\u5199\u4f60\u7684\u903b\u8f91\n});\n')),(0,a.kt)("h2",{id:"315-\u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e"},"31.5 \u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u91c7\u7528\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u9759\u6001\u8d44\u6e90\u90fd\u662f\u5d4c\u5165\u8fdb\u7a0b\u5e8f\u96c6\u4e2d\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u9700\u8981\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"UseFileServer")," \u6307\u5b9a\u6a21\u5757\u9759\u6001\u8d44\u6e90\u8def\u5f84\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// \u9ed8\u8ba4\u9759\u6001\u8d44\u6e90\u8c03\u7528\uff0cwwwroot\napp.UseStaticFiles();\n\n// \u914d\u7f6e\u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\napp.UseFileServer(new FileServerOptions\n{\n    FileProvider = new EmbeddedFileProvider(\u6a21\u5757\u7a0b\u5e8f\u96c6),\n    RequestPath = "/\u6a21\u5757\u540d\u79f0",  // \u540e\u7eed\u6240\u6709\u8d44\u6e90\u90fd\u662f\u901a\u8fc7 /\u6a21\u5757\u540d\u79f0/xxx.css \u8c03\u7528\n    EnableDirectoryBrowsing = true\n});\n')),(0,a.kt)("h2",{id:"316-\u53cd\u9988\u4e0e\u5efa\u8bae"},"31.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,a.kt)("hr",null))}v.isMDXComponent=!0}}]);