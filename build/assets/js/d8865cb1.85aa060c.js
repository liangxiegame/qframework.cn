"use strict";(self.webpackChunkqframework=self.webpackChunkqframework||[]).push([[6594],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3725:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=t(3117),a=t(102),r=(t(7294),t(3905)),i=["components"],l={id:"mongodb",title:"10.3. MongoDB \u64cd\u4f5c",sidebar_label:"10.3. MongoDB \u64cd\u4f5c"},c=void 0,s={unversionedId:"mongodb",id:"mongodb",title:"10.3. MongoDB \u64cd\u4f5c",description:"\u5728 Furion \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 EFCore\uff0c\u5982\u679c\u4e0d\u4f7f\u7528 EFCore\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 Furion.Pure \u4ee3\u66ff Furion\u3002",source:"@site/docs/mongodb.mdx",sourceDirName:".",slug:"/mongodb",permalink:"/docs/mongodb",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/mongodb.mdx",tags:[],version:"current",frontMatter:{id:"mongodb",title:"10.3. MongoDB \u64cd\u4f5c",sidebar_label:"10.3. MongoDB \u64cd\u4f5c"},sidebar:"docs",previous:{title:"10.2. Dapper \u96c6\u6210",permalink:"/docs/dapper"},next:{title:"11. SaaS \u591a\u79df\u6237",permalink:"/docs/saas"}},p=[{value:"10.3.1 \u5173\u4e8e MongoDB",id:"1031-\u5173\u4e8e-mongodb",children:[],level:2},{value:"10.3.2 \u5982\u4f55\u96c6\u6210",id:"1032-\u5982\u4f55\u96c6\u6210",children:[{value:"10.3.2.1 \u6ce8\u518c <code>MongoDB</code> \u670d\u52a1",id:"10321-\u6ce8\u518c-mongodb-\u670d\u52a1",children:[],level:3}],level:2},{value:"10.3.3 \u57fa\u672c\u4f7f\u7528",id:"1033-\u57fa\u672c\u4f7f\u7528",children:[{value:"10.3.3.1 \u5e38\u89c1\u4f8b\u5b50",id:"10331-\u5e38\u89c1\u4f8b\u5b50",children:[],level:3},{value:"10.3.3.2 \u83b7\u53d6 <code>MongoClient</code> \u5bf9\u8c61",id:"10332-\u83b7\u53d6-mongoclient-\u5bf9\u8c61",children:[],level:3}],level:2},{value:"10.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1034-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6e29\u99a8\u63d0\u9192")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"EFCore"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"EFCore"),"\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Furion.Pure")," \u4ee3\u66ff ",(0,r.kt)("inlineCode",{parentName:"strong"},"Furion")),"\u3002"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u67e5\u770b\u6700\u65b0\u62d3\u5c55\u6587\u6863")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/pulls/423"},"https://gitee.com/dotnetchina/Furion/pulls/423")))),(0,r.kt)("h2",{id:"1031-\u5173\u4e8e-mongodb"},"10.3.1 \u5173\u4e8e MongoDB"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u662f\u4e00\u4e2a\u57fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\u3002\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"C++")," \u8bed\u8a00\u7f16\u5199\u3002\u65e8\u5728\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB")," \u5e94\u7528\u63d0\u4f9b\u53ef\u6269\u5c55\u7684\u9ad8\u6027\u80fd\u6570\u636e\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u662f\u4e00\u4e2a\u4ecb\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u548c\u975e\u5173\u7cfb\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u4ea7\u54c1\uff0c\u662f\u975e\u5173\u7cfb\u6570\u636e\u5e93\u5f53\u4e2d\u529f\u80fd\u6700\u4e30\u5bcc\uff0c\u6700\u50cf\u5173\u7cfb\u6570\u636e\u5e93\u7684\u3002"),(0,r.kt)("h2",{id:"1032-\u5982\u4f55\u96c6\u6210"},"10.3.2 \u5982\u4f55\u96c6\u6210"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u62d3\u5c55\u5305 ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Furion.Extras.DatabaseAccessor.MongoDB"},"Furion.Extras.DatabaseAccessor.MongoDB"),"\u3002"),(0,r.kt)("h3",{id:"10321-\u6ce8\u518c-mongodb-\u670d\u52a1"},"10.3.2.1 \u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"h3"},"MongoDB")," \u670d\u52a1"),(0,r.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"services.AddMongoDB(connectionString)")," \u5373\u53ef\u3002\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// \u65b9\u5f0f\u4e00\nservices.AddMongoDB("mongodb://localhost:27017");\n\n// \u65b9\u5f0f\u4e8c\nservices.AddMongoDB(new MongoClientSettings {});\n\n// \u65b9\u5f0f\u4e09\nservices.AddMongoDB(new MongoUrl {});\n')),(0,r.kt)("h2",{id:"1033-\u57fa\u672c\u4f7f\u7528"},"10.3.3 \u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"IMongoDBRepository")," \u63a5\u53e3\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u975e\u6cdb\u578b\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"private readonly IMongoDBRepository _mongoRepository;\npublic PersonService(IMongoDBRepository mongoRepository)\n{\n    _mongoRepository = mongoRepository;\n}\n")),(0,r.kt)("h3",{id:"10331-\u5e38\u89c1\u4f8b\u5b50"},"10.3.3.1 \u5e38\u89c1\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var database = _mongoRepository.Context.GetDatabase("foo");\nvar collection = database.GetCollection<BsonDocument>("bar");\n\nawait collection.InsertOneAsync(new BsonDocument("Name", "Jack"));\n\nvar list = await collection.Find(new BsonDocument("Name", "Jack"))\n    .ToListAsync();\n\nforeach(var document in list)\n{\n    Console.WriteLine(document["Name"]);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class Person\n{\n    public ObjectId Id { get; set; }\n    public string Name { get; set; }\n}\n\nvar database = _mongoRepository.Context.GetDatabase("foo");\nvar collection = database.GetCollection<Person>("bar");\n\nawait collection.InsertOneAsync(new Person { Name = "Jack" });\n\nvar list = await collection.Find(x => x.Name == "Jack")\n                           .ToListAsync();\n\nforeach(var person in list)\n{\n    Console.WriteLine(person.Name);\n}\n')),(0,r.kt)("h3",{id:"10332-\u83b7\u53d6-mongoclient-\u5bf9\u8c61"},"10.3.3.2 \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h3"},"MongoClient")," \u5bf9\u8c61"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IMongoDBRepository")," \u53ea\u5c01\u88c5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u57fa\u7840\u529f\u80fd\uff0c\u5982\u9700\u83b7\u53d6\u66f4\u591a\u64cd\u4f5c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},".Context")," \u5c5e\u6027\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoClient")," \u5bf9\u8c61\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var client = _mongoRepository.Context;\n")),(0,r.kt)("h2",{id:"1034-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://hub.fastgit.org/mongodb/mongo-csharp-driver"},"MongoDB \u4ed3\u5e93"),"\u3002"))))}m.isMDXComponent=!0}}]);