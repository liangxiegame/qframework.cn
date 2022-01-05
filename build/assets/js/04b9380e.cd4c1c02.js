"use strict";(self.webpackChunkqframework=self.webpackChunkqframework||[]).push([[3867],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),v=a,m=p["".concat(c,".").concat(v)]||p[v]||d[v]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2088:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return v}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=t(4996),l=["components"],c={id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",sidebar_label:"22. \u4e8b\u4ef6\u603b\u7ebf\uff08New\uff09"},s=void 0,u={unversionedId:"event-bus",id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",description:"\u5728 Furion v2.20+ \u7248\u672c\u540e\u91c7\u7528 Jaina \u4e8b\u4ef6\u603b\u7ebf\u66ff\u6362\u539f\u6709\u7684 EventBus\uff0c\u67e5\u770b\u65e7\u6587\u6863",source:"@site/docs/event-bus.mdx",sourceDirName:".",slug:"/event-bus",permalink:"/docs/event-bus",editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/event-bus.mdx",tags:[],version:"current",lastUpdatedBy:"liangxie",lastUpdatedAt:1641347946,formattedLastUpdatedAt:"1/5/2022",frontMatter:{id:"event-bus",title:"22. \u4e8b\u4ef6\u603b\u7ebf",sidebar_label:"22. \u4e8b\u4ef6\u603b\u7ebf\uff08New\uff09"},sidebar:"docs",previous:{title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316\uff08\u591a\u8bed\u8a00\uff09",permalink:"/docs/local-language"},next:{title:"23. JSON \u5e8f\u5217\u5316",permalink:"/docs/json-serialization"}},d=[{value:"22.1 \u5feb\u901f\u5165\u95e8",id:"221-\u5feb\u901f\u5165\u95e8",children:[],level:2},{value:"22.2 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90",id:"222-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90",children:[],level:2},{value:"22.3 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668",id:"223-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668",children:[],level:2},{value:"22.4 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005",id:"224-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005",children:[],level:2},{value:"22.5 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668",id:"225-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668",children:[],level:2},{value:"22.6 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668",id:"226-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668",children:[],level:2},{value:"22.7 \u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1",id:"227-\u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1",children:[],level:2},{value:"22.8 \u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38",id:"228-\u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38",children:[],level:2},{value:"22.9 <code>EventBusOptionsBuilder</code> \u914d\u7f6e",id:"229-eventbusoptionsbuilder-\u914d\u7f6e",children:[],level:2},{value:"22.10 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2210-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[],level:2}],p={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"v2.20 \u4ee5\u4e0b\u7248\u672c\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion v2.20+")," \u7248\u672c\u540e\u91c7\u7528 ",(0,i.kt)("a",{parentName:"strong",href:"https://gitee.com/dotnetchina/Jaina"},"Jaina")," \u4e8b\u4ef6\u603b\u7ebf\u66ff\u6362\u539f\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"strong"},"EventBus")),"\uff0c",(0,i.kt)("a",{parentName:"p",href:"./event-bus-old"},"\u67e5\u770b\u65e7\u6587\u6863")))),(0,i.kt)("img",{src:(0,o.Z)("img/ebs.png")}),(0,i.kt)("h2",{id:"221-\u5feb\u901f\u5165\u95e8"},"22.1 \u5feb\u901f\u5165\u95e8"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e8b\u4ef6\u8ba2\u9605\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"ToDoEventSubscriber"),"\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,10-11,19-21}","{2,10-11,19-21}":!0},'// \u5b9e\u73b0 IEventSubscriber \u63a5\u53e3\npublic class ToDoEventSubscriber : IEventSubscriber\n{\n    private readonly ILogger<ToDoEventSubscriber> _logger;\n    public ToDoEventSubscriber(ILogger<ToDoEventSubscriber> logger)\n    {\n        _logger = logger;\n    }\n\n    [EventSubscribe("ToDo:Create")]\n    public async Task CreateToDo(EventHandlerExecutingContext context)\n    {\n        var todo = context.Source;\n        _logger.LogInformation("\u521b\u5efa\u4e00\u4e2a ToDo\uff1a{Name}", todo.Payload);\n        await Task.CompletedTask;\n    }\n\n    // \u652f\u6301\u591a\u4e2a\n    [EventSubscribe("ToDo:Create")]\n    [EventSubscribe("ToDo:Update")]\n    public async Task CreateOrUpdateToDo(EventHandlerExecutingContext context)\n    {\n        var todo = context.Source;\n        _logger.LogInformation("\u521b\u5efa\u6216\u66f4\u65b0\u4e00\u4e2a ToDo\uff1a{Name}", todo.Payload);\n        await Task.CompletedTask;\n    }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u63a7\u5236\u5668 ",(0,i.kt)("inlineCode",{parentName:"li"},"ToDoController"),"\uff0c\u4f9d\u8d56\u6ce8\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"IEventPublisher")," \u670d\u52a1\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4,13}","{4,13}":!0},'public class ToDoController : ControllerBase\n{\n    // \u4f9d\u8d56\u6ce8\u5165\u4e8b\u4ef6\u53d1\u5e03\u8005 IEventPublisher\n    private readonly IEventPublisher _eventPublisher;\n    public ToDoController(IEventPublisher eventPublisher)\n    {\n        _eventPublisher = eventPublisher;\n    }\n\n    // \u53d1\u5e03 ToDo:Create \u6d88\u606f\n    public async Task CreateDoTo(string name)\n    {\n        await _eventPublisher.PublishAsync(new ChannelEventSource("ToDo:Create", name));\n    }\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"li"},"EventBus")," \u670d\u52a1\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,5}","{2,5}":!0},"// \u6ce8\u518c EventBus \u670d\u52a1\nservices.AddEventBus(buidler =>\n{\n    // \u6ce8\u518c ToDo \u4e8b\u4ef6\u8ba2\u9605\u8005\n    buidler.AddSubscriber<ToDoEventSubscriber>();\n\n    // \u6279\u91cf\u6ce8\u518c\u4e8b\u4ef6\u8ba2\u9605\u8005\n    builder.AddSubscribers(ass1, ass2, ....);\n});\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u61d2\u4eba\u63d0\u9192")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\u53ef\u4ee5\u4e0d\u7528\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"buidler.AddSubscriber<T>()")," \u65b9\u5f0f\u4e00\u4e00\u6ce8\u518c\uff0c\u53ea\u9700\u8981\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ISingleton")," \u63a5\u53e3\u5373\u53ef\uff0c\u5982\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1}","{1}":!0},"public class ToDoEventSubscriber : IEventSubscriber, ISingleton\n{\n}\n")),(0,i.kt)("p",{parentName:"div"},"\u8fd9\u6837\u5c31\u65e0\u9700\u5199 ",(0,i.kt)("del",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"del"},"buidler.AddSubscriber<ToDoEventSubscriber>();"))," \u4ee3\u7801\u4e86\u3002"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u9879\u76ee\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"info: Jaina.Samples.ToDoEventSubscriber[0]\n      \u521b\u5efa\u4e00\u4e2a ToDo\uff1aJaina\n")),(0,i.kt)("h2",{id:"222-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90"},"22.2 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventSource")," \u4f5c\u4e3a\u6d88\u606f\u8f7d\u4f53\uff0c\u4efb\u4f55\u5b9e\u73b0\u8be5\u63a5\u53e3\u7684\u7c7b\u90fd\u53ef\u4ee5\u5145\u5f53\u6d88\u606f\u8f7d\u4f53\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\uff0c\u53ea\u9700\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventSource")," \u63a5\u53e3\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,15,20,26,31}","{1,15,20,26,31}":!0},"public class ToDoEventSource : IEventSource\n{\n    public ToDoEventSource(string eventId, string todoName)\n    {\n        EventId = eventId;\n        ToDoName = todoName;\n    }\n\n    // \u81ea\u5b9a\u4e49\u5c5e\u6027\n    public string ToDoName { get; }\n\n    /// <summary>\n    /// \u4e8b\u4ef6 Id\n    /// </summary>\n    public string EventId { get; }\n\n    /// <summary>\n    /// \u4e8b\u4ef6\u627f\u8f7d\uff08\u643a\u5e26\uff09\u6570\u636e\n    /// </summary>\n    public object Payload { get; }\n\n    /// <summary>\n    /// \u53d6\u6d88\u4efb\u52a1 Token\n    /// </summary>\n    /// <remarks>\u7528\u4e8e\u53d6\u6d88\u672c\u6b21\u6d88\u606f\u5904\u7406</remarks>\n    public CancellationToken CancellationToken { get; }\n\n    /// <summary>\n    /// \u4e8b\u4ef6\u521b\u5efa\u65f6\u95f4\n    /// </summary>\n    public DateTime CreatedTime { get; } = DateTime.UtcNow;\n}\n")),(0,i.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'await _eventPublisher.PublishAsync(new ToDoEventSource ("ToDo:Create", "\u6211\u7684 ToDo Name"));\n')),(0,i.kt)("h2",{id:"223-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668"},"22.3 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Fruion")," \u9ed8\u8ba4\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Channel")," \u4f5c\u4e3a\u4e8b\u4ef6\u6e90 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventSource")," \u5b58\u50a8\u5668\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u6d88\u606f\u961f\u5217\u7ec4\u4ef6\u8fdb\u884c\u66ff\u6362\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Kafka\u3001RabbitMQ\u3001ActiveMQ")," \u7b49\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u90e8\u5206\u6570\u636e\u5e93 ",(0,i.kt)("inlineCode",{parentName:"p"},"Redis\u3001SQL Server\u3001MySql")," \u5b9e\u73b0\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\uff0c\u53ea\u9700\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventSourceStorer")," \u63a5\u53e3\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,11,17}","{1,11,17}":!0},"public class RedisEventSourceStorer : IEventSourceStorer\n{\n    private readonly IRedisClient _redisClient;\n\n    public RedisEventSourceStorer(IRedisClient redisClient)\n    {\n        _redisClient = redisClient;\n    }\n\n    // \u5f80 Redis \u4e2d\u5199\u5165\u4e00\u6761\n    public async ValueTask WriteAsync(IEventSource eventSource, CancellationToken cancellationToken)\n    {\n        await _redisClient.WriteAsync(...., cancellationToken);\n    }\n\n    // \u4ece Redis \u4e2d\u8bfb\u53d6\u4e00\u6761\n    public async ValueTask<IEventSource> ReadAsync(CancellationToken cancellationToken)\n    {\n       return await _redisClient.ReadAsync(...., cancellationToken);\n    }\n}\n")),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u66ff\u6362\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventSourceStorer"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4-8}","{4-8}":!0},"services.AddEventBus(buidler =>\n{\n    // \u66ff\u6362\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668\n    buidler.ReplaceStorer(serviceProvider =>\n    {\n        var redisClient = serviceProvider.GetService<IRedisClient>();\n        return new RedisEventSourceStorer(redisClient);\n    });\n});\n")),(0,i.kt)("h2",{id:"224-\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005"},"22.4 \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u8005"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u5185\u7f6e\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Channel")," \u7684\u4e8b\u4ef6\u53d1\u5e03\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelEventPublisher"),"\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\uff0c\u53ea\u9700\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventPublisher")," \u63a5\u53e3\u5373\u53ef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,10}","{1,10}":!0},"public class ToDoEventPublisher : IEventPublisher\n{\n    private readonly IEventSourceStorer _eventSourceStorer;\n\n    public ChannelEventPublisher(IEventSourceStorer eventSourceStorer)\n    {\n        _eventSourceStorer = eventSourceStorer;\n    }\n\n    public async Task PublishAsync(IEventSource eventSource)\n    {\n        await _eventSourceStorer.WriteAsync(eventSource, eventSource.CancellationToken);\n    }\n}\n")),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u66ff\u6362\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventPublisher"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4}","{4}":!0},"services.AddEventBus(buidler =>\n{\n    // \u66ff\u6362\u4e8b\u4ef6\u6e90\u5b58\u50a8\u5668\n    buidler.ReplacePublisher<ToDoEventPublisher>();\n});\n")),(0,i.kt)("h2",{id:"225-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668"},"22.5 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventHandlerMonitor")," \u76d1\u89c6\u5668\u63a5\u53e3\uff0c\u5b9e\u73b0\u8be5\u63a5\u53e3\u53ef\u4ee5\u76d1\u89c6\u6240\u6709\u8ba2\u9605\u4e8b\u4ef6\uff0c\u5305\u62ec ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6267\u884c\u4e4b\u524d\u3001\u6267\u884c\u4e4b\u540e\uff0c\u6267\u884c\u5f02\u5e38\uff0c\u5171\u4eab\u4e0a\u4e0b\u6587\u6570\u636e"),"\u3002"),(0,i.kt)("p",null,"\u5982\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoEventHandlerMonitor"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,9,15}","{1,9,15}":!0},'public class ToDoEventHandlerMonitor : IEventHandlerMonitor\n{\n    private readonly ILogger<ToDoEventHandlerMonitor> _logger;\n    public ToDoEventHandlerMonitor(ILogger<ToDoEventHandlerMonitor> logger)\n    {\n        _logger = logger;\n    }\n\n    public Task OnExecutingAsync(EventHandlerExecutingContext context)\n    {\n        _logger.LogInformation("\u6267\u884c\u4e4b\u524d\uff1a{EventId}", context.Source.EventId);\n        return Task.CompletedTask;\n    }\n\n    public Task OnExecutedAsync(EventHandlerExecutedContext context)\n    {\n        _logger.LogInformation("\u6267\u884c\u4e4b\u540e\uff1a{EventId}", context.Source.EventId);\n\n        if (context.Exception != null)\n        {\n            _logger.LogError(context.Exception, "\u6267\u884c\u51fa\u9519\u5566\uff1a{EventId}", context.Source.EventId);\n        }\n\n        return Task.CompletedTask;\n    }\n}\n')),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoEventHandlerMonitor"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4}","{4}":!0},"services.AddEventBus(buidler =>\n{\n    // \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u76d1\u89c6\u5668\n    buidler.AddMonitor<ToDoEventHandlerMonitor>();\n});\n")),(0,i.kt)("h2",{id:"226-\u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668"},"22.6 \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEventHandlerExecutor")," \u6267\u884c\u5668\u63a5\u53e3\uff0c\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u6267\u884c\u7b56\u7565\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8d85\u65f6\u63a7\u5236\uff0c\u5931\u8d25\u91cd\u8bd5\u3001\u7194\u65ad\u7b49\u7b49"),"\u3002"),(0,i.kt)("p",null,"\u5982\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"RetryEventHandlerExecutor"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,3}","{1,3}":!0},"public class RetryEventHandlerExecutor : IEventHandlerExecutor\n{\n    public async Task ExecuteAsync(EventHandlerExecutingContext context, Func<EventHandlerExecutingContext, Task> handler)\n    {\n        // \u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u6bcf\u9694 1s \u91cd\u8bd5\uff0c\u6700\u591a\u4e09\u6b21\n        await Retry(async () => {\n            await handler(context);\n        }, 3, 1000);\n    }\n}\n")),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u5728\u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBus")," \u670d\u52a1\u4e2d\u6ce8\u518c ",(0,i.kt)("inlineCode",{parentName:"p"},"RetryEventHandlerExecutor"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4}","{4}":!0},"services.AddEventBus(buidler =>\n{\n    // \u6dfb\u52a0\u4e8b\u4ef6\u6267\u884c\u5668\n    buidler.AddExecutor<RetryEventHandlerExecutor>();\n});\n")),(0,i.kt)("h2",{id:"227-\u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1"},"22.7 \u4f7f\u7528\u6709\u4f5c\u7528\u57df\u7684\u670d\u52a1"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e2d\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Event Bus")," \u6240\u6709\u670d\u52a1\u5747\u6ce8\u518c\u4e3a\u5355\u4f8b\uff0c\u5982\u9700\u4f7f\u7528\u4f5c\u7528\u57df\u670d\u52a1\uff08\u5355\u4f8b\u670d\u52a1\u53ef\u76f4\u63a5\u6ce8\u5165\uff09\uff0c\u53ef\u901a\u8fc7\u4f9d\u8d56\u6ce8\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"IServiceProvider")," \u5b9e\u4f8b\u5e76\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateScope()")," \u521b\u5efa\u4e00\u4e2a\u4f5c\u7528\u57df\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5,8,12,17-21}","{5,8,12,17-21}":!0},'public class ToDoEventSubscriber : IEventSubscriber\n{\n    private readonly ILogger<ToDoEventSubscriber> _logger;\n\n    public ToDoEventSubscriber(IServiceProvider services\n        , ILogger<ToDoEventSubscriber> logger)\n    {\n        Services = services;\n        _logger = logger;\n    }\n\n    public IServiceProvider Services { get; }\n\n    [EventSubscribe("ToDo:Create")]\n    public async Task CreateToDo(EventHandlerExecutingContext context)\n    {\n        using (var scope = Services.CreateScope())\n        {\n            var scopedProcessingService = scope.ServiceProvider.GetRequiredService<IScopedProcessingService>();\n            // ....\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"228-\u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38"},"22.8 \u8ba2\u9605\u6267\u884c\u4efb\u52a1\u610f\u5916\u5f02\u5e38"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{4}","{4}":!0},"services.AddEventBus(buidler =>\n{\n    // \u8ba2\u9605 EventBus \u672a\u6355\u83b7\u5f02\u5e38\n    buidler.UnobservedTaskExceptionHandler = (obj, args) =>\n    {\n        // ....\n    };\n});\n")),(0,i.kt)("h2",{id:"229-eventbusoptionsbuilder-\u914d\u7f6e"},"22.9 ",(0,i.kt)("inlineCode",{parentName:"h2"},"EventBusOptionsBuilder")," \u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EventBusOptionsBuilder")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"AddEventBus")," \u6784\u5efa\u670d\u52a1\u9009\u9879\uff0c\u8be5\u9009\u9879\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\u548c\u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c5e\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ChannelCapacity"),"\uff1a\u9ed8\u8ba4\u5185\u5b58\u901a\u9053\u5bb9\u91cf"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnobservedTaskExceptionHandler"),"\uff1a\u8ba2\u9605\u6267\u884c\u4efb\u52a1\u672a\u5bdf\u89c9\u5f02\u5e38"))),(0,i.kt)("li",{parentName:"ul"},"\u65b9\u6cd5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AddSubscriber<TEventSubscriber>"),"\uff1a\u6dfb\u52a0\u8ba2\u9605\u8005"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReplacePublisher<TEventPublisher>"),"\uff1a\u66ff\u6362\u53d1\u5e03\u8005"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReplaceStorer(Func<IServiceProvider, IEventSourceStorer>)"),"\uff1a\u66ff\u6362\u5b58\u50a8\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AddMonitor<TEventHandlerMonitor>"),"\uff1a\u6dfb\u52a0\u76d1\u89c6\u5668"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AddExecutor<TEventHandlerExecutor>"),"\uff1a\u6dfb\u52a0\u6267\u884c\u5668")))),(0,i.kt)("h2",{id:"2210-\u53cd\u9988\u4e0e\u5efa\u8bae"},"22.10 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}v.isMDXComponent=!0}}]);