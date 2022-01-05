"use strict";(self.webpackChunkqframework=self.webpackChunkqframework||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"net6-preview7","metadata":{"permalink":"/blog/net6-preview7","editUrl":"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-08-11-net6-preview7.mdx","source":"@site/blog/2021-08-11-net6-preview7.mdx","title":"6. .NET 6 Preview 7 \u5c1d\u9c9c","description":"2021 \u5e74 08 \u6708 11 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET 6 Preview 7 \u7248\u672c\uff0cFurion \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 Furion v3.0.0-rc.2 \u7248\u672c\u3002","date":"2021-08-11T00:00:00.000Z","formattedDate":"August 11, 2021","tags":[{"label":"furion","permalink":"/blog/tags/furion"},{"label":"furos","permalink":"/blog/tags/furos"},{"label":".net","permalink":"/blog/tags/net"},{"label":".netcore","permalink":"/blog/tags/netcore"},{"label":".net5","permalink":"/blog/tags/net-5"},{"label":".net6","permalink":"/blog/tags/net-6"}],"readingTime":1.475,"truncated":false,"authors":[{"name":"dotNET China","title":"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002","url":"https://www.chinadot.net","imageURL":"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],"nextItem":{"title":"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528","permalink":"/blog/console"}},"content":"import useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\n\\n**2021 \u5e74 08 \u6708 11 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 `.NET 6 Preview 7` \u7248\u672c\uff0c`Furion` \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 `Furion v3.0.0-rc.2` \u7248\u672c\u3002**\\n\\n[Furion .NET 6 Preview 7 \u6e90\u7801\u5730\u5740](https://gitee.com/dotnetchina/Furion/tree/3.0.0-rc.2/)\\n\\n## \u5b89\u88c5 `.NET 6 Preview 6 SDK`\\n\\n\u5c1d\u9c9c\u4e4b\u524d\uff0c\u9996\u5148\u5148\u5b89\u88c5 `.NET 6 Preview 7 SDK`\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a[https://dotnet.microsoft.com/download/dotnet/6.0](https://dotnet.microsoft.com/download/dotnet/6.0)\\n\\n\u4e0b\u8f7d\u5bf9\u5e94\u7cfb\u7edf\u548c\u5904\u7406\u5668\u7248\u672c\u5373\u53ef\u3002\\n\\n## \u65e7\u9879\u76ee\u5347\u7ea7\\n\\n\u7f16\u8f91\u6240\u6709 `.csproj` \u9879\u76ee\uff0c\u4fee\u6539 `<TargetFramework>net5.0</TargetFramework>` \u4e3a `<TargetFramework>net6.0</TargetFramework>`\u3002\\n\\n\u540c\u65f6\u5347\u7ea7\u6240\u6709 `Microsoft` \u548c `Furion` \u5305\u4e3a\u6700\u65b0\u7248\u672c\uff0c`Furion` \u6700\u65b0\u7248\u672c\u4e3a\uff1a`v3.0.0-rc.1`\u3002\\n\\n## \u65b0\u9879\u76ee\u4f7f\u7528\\n\\n### \u5347\u7ea7 `Visual Studio 2019`\\n\\n\u76ee\u524d `.NET 6 Preview 7` \u652f\u6301\u4f7f\u7528 `Visual Studio 2019 Preview 16.11.0 Preview 4.0` \u7248\u672c\uff0c**\u6ce8\u610f\u662f `Preview` \u6700\u65b0\u7248\u672c**\u3002\u4e0b\u8f7d\u5730\u5740\uff1a[https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16](https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16)\\n\\n\u5df2\u7ecf\u5b89\u88c5\u4e86 `Visual Studio 2019 Preview` \u7248\u672c\u7684\u670b\u53cb\u76f4\u63a5\u5347\u7ea7\u5230\u6700\u65b0\u7248\u5373\u53ef\u3002\\n\\n:::note \u7279\u522b\u8bf4\u660e\\n\\n\u5982\u679c\u4f7f\u7528 `Visual Studio Code` \u5f00\u53d1\uff0c\u53ef\u5ffd\u7565\u6b64\u9009\u9879\u3002\\n\\n:::\\n\\n### \u7b2c\u4e00\u4e2a\u4f8b\u5b50\\n\\n`Furion v3.0.0-rc.2` \u76ee\u524d\u63d0\u4f9b\u4e86\u6240\u6709\u7c7b\u578b\u7684\u811a\u624b\u67b6\uff0c\u7248\u672c\u53f7\u7edf\u4e00 `3.0.0-rc.2`\u3002\\n\\n\u5b89\u88c5\u811a\u624b\u67b6\uff0c\u6253\u5f00 `CMD/Powershell` \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\\n\\n```bash\\ndotnet new --install Furion.Template.Api::3.0.0-rc.2\\n```\\n\\n\u521b\u5efa\u9879\u76ee\\n\\n```bash\\ndotnet new furionapi -n FurionNET6\\n```\\n\\n### \u6253\u5f00\u5e76\u542f\u52a8\u9879\u76ee\\n\\n\u6253\u5f00\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u5373\u53ef\u3002"},{"id":"console","metadata":{"permalink":"/blog/console","editUrl":"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-07-24-console.mdx","source":"@site/blog/2021-07-24-console.mdx","title":"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528","description":"Furion \u4ece v2.15.3+ \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5168\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\uff0c\u5305\u62ec Web\uff0c\u63a7\u5236\u53f0\uff0cWinForm\uff0cWPF\uff0cXamarin/MAUI \u7b49\u3002","date":"2021-07-24T00:00:00.000Z","formattedDate":"July 24, 2021","tags":[{"label":"furion","permalink":"/blog/tags/furion"},{"label":"furos","permalink":"/blog/tags/furos"},{"label":".net","permalink":"/blog/tags/net"},{"label":".netcore","permalink":"/blog/tags/netcore"},{"label":".net5","permalink":"/blog/tags/net-5"},{"label":".net6","permalink":"/blog/tags/net-6"}],"readingTime":0.835,"truncated":false,"authors":[{"name":"dotNET China","title":"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002","url":"https://www.chinadot.net","imageURL":"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],"prevItem":{"title":"6. .NET 6 Preview 7 \u5c1d\u9c9c","permalink":"/blog/net6-preview7"},"nextItem":{"title":"4. .NET 6 Preview 6 \u5c1d\u9c9c","permalink":"/blog/net6-preview6"}},"content":"import useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\n\\n`Furion` \u4ece `v2.15.3+` \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5168\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\uff0c\u5305\u62ec `Web`\uff0c`\u63a7\u5236\u53f0`\uff0c`WinForm`\uff0c`WPF`\uff0c`Xamarin/MAUI` \u7b49\u3002\\n\\n\u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528\u793a\u4f8b\uff1a\\n\\n```cs\\nusing Furion;\\nusing Furion.DependencyInjection;\\nusing Furion.RemoteRequest.Extensions;\\nusing Microsoft.Extensions.DependencyInjection;\\nusing System;\\n\\nnamespace ConsoleApp1\\n{\\n    class Program\\n    {\\n        static void Main(string[] args)\\n        {\\n            // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u5bb9\u5668\\n            var services = Inject.Create();\\n            // \u6ce8\u518c\u670d\u52a1\\n            services.AddRemoteRequest();\\n            // \u6240\u6709\u670d\u52a1\u6ce8\u518c\u5b8c\u6bd5\u540e\u8c03\u7528 Build() \u6784\u5efa\\n            services.Build();\\n\\n            // \u4f7f\u7528\\n            var helloService = App.GetService<IHelloService>();\\n            Console.WriteLine(helloService.SayHello());\\n\\n            Console.WriteLine(\\"=============\\");\\n\\n            var baidu = \\"https://www.baidu.com\\".GetAsStringAsync().GetAwaiter().GetResult();\\n            Console.WriteLine(baidu);\\n        }\\n    }\\n\\n    public interface IHelloService\\n    {\\n        string SayHello();\\n    }\\n    public class HelloService : IHelloService, ITransient\\n    {\\n        public string SayHello()\\n        {\\n            return \\"Hello Furion.\\";\\n        }\\n    }\\n}\\n```\\n\\n\u4ee5\u4e0a\u4ee3\u7801\u901a\u8fc7 `var services = Inject.Create();` \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u96c6\u5408\uff0c\u6700\u540e\u901a\u8fc7 `services.Build()` \u5373\u53ef\u5b8c\u6210\u521d\u59cb\u5316\u3002"},{"id":"net6-preview6","metadata":{"permalink":"/blog/net6-preview6","editUrl":"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-07-15-net6-preview6.mdx","source":"@site/blog/2021-07-15-net6-preview6.mdx","title":"4. .NET 6 Preview 6 \u5c1d\u9c9c","description":"2021 \u5e74 07 \u6708 15 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET 6 Preview 6 \u7248\u672c\uff0cFurion \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 Furion v3.0.0-rc.1 \u7248\u672c\u3002","date":"2021-07-15T00:00:00.000Z","formattedDate":"July 15, 2021","tags":[{"label":"furion","permalink":"/blog/tags/furion"},{"label":"furos","permalink":"/blog/tags/furos"},{"label":".net","permalink":"/blog/tags/net"},{"label":".netcore","permalink":"/blog/tags/netcore"},{"label":".net5","permalink":"/blog/tags/net-5"},{"label":".net6","permalink":"/blog/tags/net-6"}],"readingTime":1.475,"truncated":false,"authors":[{"name":"dotNET China","title":"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002","url":"https://www.chinadot.net","imageURL":"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],"prevItem":{"title":"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528","permalink":"/blog/console"},"nextItem":{"title":"3. .NET 6 Preview 5 \u5c1d\u9c9c","permalink":"/blog/net6-preview5"}},"content":"import useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\n\\n**2021 \u5e74 07 \u6708 15 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 `.NET 6 Preview 6` \u7248\u672c\uff0c`Furion` \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 `Furion v3.0.0-rc.1` \u7248\u672c\u3002**\\n\\n[Furion .NET 6 Preview 6 \u6e90\u7801\u5730\u5740](https://gitee.com/dotnetchina/Furion/tree/3.0.0-rc.1/)\\n\\n## \u5b89\u88c5 `.NET 6 Preview 6 SDK`\\n\\n\u5c1d\u9c9c\u4e4b\u524d\uff0c\u9996\u5148\u5148\u5b89\u88c5 `.NET 6 Preview 6 SDK`\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a[https://dotnet.microsoft.com/download/dotnet/6.0](https://dotnet.microsoft.com/download/dotnet/6.0)\\n\\n\u4e0b\u8f7d\u5bf9\u5e94\u7cfb\u7edf\u548c\u5904\u7406\u5668\u7248\u672c\u5373\u53ef\u3002\\n\\n## \u65e7\u9879\u76ee\u5347\u7ea7\\n\\n\u7f16\u8f91\u6240\u6709 `.csproj` \u9879\u76ee\uff0c\u4fee\u6539 `<TargetFramework>net5.0</TargetFramework>` \u4e3a `<TargetFramework>net6.0</TargetFramework>`\u3002\\n\\n\u540c\u65f6\u5347\u7ea7\u6240\u6709 `Microsoft` \u548c `Furion` \u5305\u4e3a\u6700\u65b0\u7248\u672c\uff0c`Furion` \u6700\u65b0\u7248\u672c\u4e3a\uff1a`v3.0.0-rc.1`\u3002\\n\\n## \u65b0\u9879\u76ee\u4f7f\u7528\\n\\n### \u5347\u7ea7 `Visual Studio 2019`\\n\\n\u76ee\u524d `.NET 6 Preview 6` \u652f\u6301\u4f7f\u7528 `Visual Studio 2019 Preview 16.11.0 Preview 3.0` \u7248\u672c\uff0c**\u6ce8\u610f\u662f `Preview` \u6700\u65b0\u7248\u672c**\u3002\u4e0b\u8f7d\u5730\u5740\uff1a[https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16](https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16)\\n\\n\u5df2\u7ecf\u5b89\u88c5\u4e86 `Visual Studio 2019 Preview` \u7248\u672c\u7684\u670b\u53cb\u76f4\u63a5\u5347\u7ea7\u5230\u6700\u65b0\u7248\u5373\u53ef\u3002\\n\\n:::note \u7279\u522b\u8bf4\u660e\\n\\n\u5982\u679c\u4f7f\u7528 `Visual Studio Code` \u5f00\u53d1\uff0c\u53ef\u5ffd\u7565\u6b64\u9009\u9879\u3002\\n\\n:::\\n\\n### \u7b2c\u4e00\u4e2a\u4f8b\u5b50\\n\\n`Furion v3.0.0-rc.1` \u76ee\u524d\u63d0\u4f9b\u4e86\u6240\u6709\u7c7b\u578b\u7684\u811a\u624b\u67b6\uff0c\u7248\u672c\u53f7\u7edf\u4e00 `3.0.0-rc.1`\u3002\\n\\n\u5b89\u88c5\u811a\u624b\u67b6\uff0c\u6253\u5f00 `CMD/Powershell` \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\\n\\n```bash\\ndotnet new --install Furion.Template.Api::3.0.0-rc.1\\n```\\n\\n\u521b\u5efa\u9879\u76ee\\n\\n```bash\\ndotnet new furionapi -n FurionNET6\\n```\\n\\n### \u6253\u5f00\u5e76\u542f\u52a8\u9879\u76ee\\n\\n\u6253\u5f00\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u5373\u53ef\u3002"},{"id":"net6-preview5","metadata":{"permalink":"/blog/net6-preview5","editUrl":"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-06-18-net6-preview5.mdx","source":"@site/blog/2021-06-18-net6-preview5.mdx","title":"3. .NET 6 Preview 5 \u5c1d\u9c9c","description":"2021 \u5e74 06 \u6708 18 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET 6 Preview 5 \u7248\u672c\uff0cFurion \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 Furion v3.0.0-preview.5.21301.9 \u7248\u672c\u3002","date":"2021-06-18T00:00:00.000Z","formattedDate":"June 18, 2021","tags":[{"label":"furion","permalink":"/blog/tags/furion"},{"label":"furos","permalink":"/blog/tags/furos"},{"label":".net","permalink":"/blog/tags/net"},{"label":".netcore","permalink":"/blog/tags/netcore"},{"label":".net5","permalink":"/blog/tags/net-5"},{"label":".net6","permalink":"/blog/tags/net-6"}],"readingTime":1.28,"truncated":false,"authors":[{"name":"dotNET China","title":"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002","url":"https://www.chinadot.net","imageURL":"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],"prevItem":{"title":"4. .NET 6 Preview 6 \u5c1d\u9c9c","permalink":"/blog/net6-preview6"},"nextItem":{"title":"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d","permalink":"/blog/fileupload-download"}},"content":"import useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\n\\n**2021 \u5e74 06 \u6708 18 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 `.NET 6 Preview 5` \u7248\u672c\uff0c`Furion` \u5728\u5f53\u5929\u7b2c\u4e00\u65f6\u95f4\u9002\u914d\u4e86\u8be5\u7248\u672c\uff0c\u5e76\u53d1\u5e03 `Furion v3.0.0-preview.5.21301.9` \u7248\u672c\u3002**\\n\\n[Furion .NET 6 Preview 5 \u6e90\u7801\u5730\u5740](https://gitee.com/dotnetchina/Furion/tree/net6.0-preview5/)\\n\\n## \u7b49\u4e0d\u53ca\u5c1d\u9c9c\u4e86\\n\\n### \u5b89\u88c5 `.NET 6 Preview 5 SDK`\\n\\n\u5c1d\u9c9c\u4e4b\u524d\uff0c\u9996\u5148\u5148\u5b89\u88c5 `.NET 6 Preview 5 SDK`\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a[https://dotnet.microsoft.com/download/dotnet/6.0](https://dotnet.microsoft.com/download/dotnet/6.0)\\n\\n\u4e0b\u8f7d\u5bf9\u5e94\u7cfb\u7edf\u548c\u5904\u7406\u5668\u7248\u672c\u5373\u53ef\u3002\\n\\n### \u5347\u7ea7 `Visual Studio 2019`\\n\\n\u76ee\u524d `.NET 6 Preview 5` \u652f\u6301\u4f7f\u7528 `Visual Studio 2019 Preview 16.11.0 Preview 2.0` \u7248\u672c\uff0c**\u6ce8\u610f\u662f `Preview` \u6700\u65b0\u7248\u672c**\u3002\u4e0b\u8f7d\u5730\u5740\uff1a[https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16](https://visualstudio.microsoft.com/zh-hans/thank-you-downloading-visual-studio/?sku=enterprise&ch=pre&rel=16)\\n\\n\u5df2\u7ecf\u5b89\u88c5\u4e86 `Visual Studio 2019 Preview` \u7248\u672c\u7684\u670b\u53cb\u76f4\u63a5\u5347\u7ea7\u5230\u6700\u65b0\u7248\u5373\u53ef\u3002\\n\\n:::note \u7279\u522b\u8bf4\u660e\\n\\n\u5982\u679c\u4f7f\u7528 `Visual Studio Code` \u5f00\u53d1\uff0c\u53ef\u5ffd\u7565\u6b64\u9009\u9879\u3002\\n\\n:::\\n\\n### \u7b2c\u4e00\u4e2a\u4f8b\u5b50\\n\\n`Furion v3.0.0-preview.5.21301.9` \u76ee\u524d\u63d0\u4f9b\u4e86\u6240\u6709\u7c7b\u578b\u7684\u811a\u624b\u67b6\uff0c\u7248\u672c\u53f7\u7edf\u4e00 `3.0.0-preview.5.21301.9`\u3002\\n\\n\u5b89\u88c5\u811a\u624b\u67b6\uff0c\u6253\u5f00 `CMD/Powershell` \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\\n\\n```bash\\ndotnet new --install Furion.Template.Api::3.0.0-preview.5.21301.9\\n```\\n\\n\u521b\u5efa\u9879\u76ee\\n\\n```bash\\ndotnet new furionapi -n FurionNET6\\n```\\n\\n### \u6253\u5f00\u5e76\u542f\u52a8\u9879\u76ee\\n\\n\u6253\u5f00\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u5373\u53ef\u3002"},{"id":"fileupload-download","metadata":{"permalink":"/blog/fileupload-download","editUrl":"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-02-02-fileupload-download.mdx","source":"@site/blog/2021-02-02-fileupload-download.mdx","title":"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d","description":"\u6587\u4ef6\u4e0b\u8f7d","date":"2021-02-02T00:00:00.000Z","formattedDate":"February 2, 2021","tags":[{"label":"furion","permalink":"/blog/tags/furion"},{"label":"furos","permalink":"/blog/tags/furos"},{"label":".net","permalink":"/blog/tags/net"},{"label":".netcore","permalink":"/blog/tags/netcore"},{"label":".net5","permalink":"/blog/tags/net-5"},{"label":"upload","permalink":"/blog/tags/upload"},{"label":"download","permalink":"/blog/tags/download"}],"readingTime":1.08,"truncated":true,"authors":[{"name":"dotNET China","title":"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002","url":"https://www.chinadot.net","imageURL":"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],"prevItem":{"title":"3. .NET 6 Preview 5 \u5c1d\u9c9c","permalink":"/blog/net6-preview5"},"nextItem":{"title":"1. HttpContext \u5e94\u7528","permalink":"/blog/httpcontext"}},"content":"import useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\n\\n## \u6587\u4ef6\u4e0b\u8f7d\\n\\n```cs\\n[HttpGet, NonUnify]\\npublic IActionResult FileDownload(string path, string fileName)\\n{\\n    string filePath = \\"\u8fd9\u91cc\u83b7\u53d6\u5b8c\u6574\u7684\u6587\u4ef6\u4e0b\u8f7d\u8def\u5f84\\";\\n    return new FileStreamResult(new FileStream(filePath, FileMode.Open), \\"application/octet-stream\\") { FileDownloadName = fileName };\\n}\\n```\\n\\n:::note \u5173\u4e8e\u524d\u7aef\u83b7\u53d6\u6587\u4ef6\u540d\\n\\n\u5982\u679c\u524d\u7aef\u83b7\u53d6\u4e0d\u5230\u6587\u4ef6\u5939\uff0c\u53ef\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a\\n\\n```cs\\n_httpContextAccessor.HttpContext.Response.Headers.Add(\\"Content-Disposition\\", $\\"attachment; filename={\u6587\u4ef6\u540d}\\");\\n_httpContextAccessor.HttpContext.Response.Headers.Add(\\"Access-Control-Expose-Headers\\", \\"Content-Disposition\\");\\n```\\n\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n## \u6587\u4ef6\u4e0a\u4f20\\n\\n```cs\\n[HttpPost, NonUnify]\\npublic async Task<IActionResult> UploadFileAsync(List<IFormFile> files)\\n{\\n    // \u4fdd\u5b58\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 uploads \u76ee\u5f55\\n    var savePath = Path.Combine(App.HostEnvironment.ContentRootPath, \\"uploads\\");\\n    if(!Directory.Exists(savePath)) Directory.CreateDirectory(savePath);\\n\\n    long size = files.Sum(f => f.Length);\\n\\n    foreach (var formFile in files)\\n    {\\n        if (formFile.Length > 0)\\n        {\\n            // \u907f\u514d\u6587\u4ef6\u540d\u91cd\u590d\uff0c\u91c7\u7528 GUID \u751f\u6210\\n            var filePath = Path.Combine(savePath, Guid.NewGuid().ToString(\\"N\\") + Path.GetExtension(formFile.FileName));  // \u53ef\u4ee5\u66ff\u4ee3\u4e3a\u4f60\u9700\u8981\u5b58\u50a8\u7684\u771f\u5b9e\u8def\u5f84\\n\\n            using (var stream = System.IO.File.Create(filePath))\\n            {\\n                await formFile.CopyToAsync(stream);\\n            }\\n        }\\n    }\\n\\n    // \u5728\u52a8\u6001 API \u76f4\u63a5\u8fd4\u56de\u5bf9\u8c61\u5373\u53ef\uff0c\u65e0\u9700 OK \u548c IActionResult\\n    return Ok(new { count = files.Count, size });\\n}\\n```"},{"id":"httpcontext","metadata":{"permalink":"/blog/httpcontext","editUrl":"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/blog/2021-02-01-httpcontext.mdx","source":"@site/blog/2021-02-01-httpcontext.mdx","title":"1. HttpContext \u5e94\u7528","description":"HttpContext \u91cd\u5927\u8c03\u6574","date":"2021-02-01T00:00:00.000Z","formattedDate":"February 1, 2021","tags":[{"label":"furion","permalink":"/blog/tags/furion"},{"label":"furos","permalink":"/blog/tags/furos"},{"label":".net","permalink":"/blog/tags/net"},{"label":".netcore","permalink":"/blog/tags/netcore"},{"label":".net5","permalink":"/blog/tags/net-5"},{"label":"httpcontext","permalink":"/blog/tags/httpcontext"}],"readingTime":1.515,"truncated":true,"authors":[{"name":"dotNET China","title":"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002","url":"https://www.chinadot.net","imageURL":"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],"prevItem":{"title":"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d","permalink":"/blog/fileupload-download"}},"content":"import useBaseUrl from \\"@docusaurus/useBaseUrl\\";\\n\\n## HttpContext \u91cd\u5927\u8c03\u6574\\n\\n\u5728 `ASP.NET` \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 `HttpContext` \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 `ASP.NET Core` \u4e2d\uff0c`HttpContext` \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002\\n\\n\u867d\u7136\u5728 `ASP.NET Core` \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 `HttpContext` \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 `IHttpContextAccessor` \u65b9\u5f0f\u83b7\u53d6\u3002\\n\\n## HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f\\n\\n\x3c!--truncate--\x3e\\n\\n### \u5728 `ControllerBase` \u6d3e\u751f\u7c7b\u4e2d\\n\\n\u5728 `ControllerBase` \u6d3e\u751f\u7c7b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 `HttpContext` \u5c5e\u6027\u83b7\u53d6 `HttpContext` \u5bf9\u8c61\u3002\\n\\n### \u901a\u8fc7\u6ce8\u5165 `IHttpContextAccessor`\\n\\n\u5728 `Furion` \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u6ce8\u518c\u4e86 `IHttpContextAccessor` \u670d\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8be5\u5bf9\u8c61\u83b7\u53d6\u3002\\n\\n```cs {3,5}\\npublic class AppService\\n{\\n    public AppService(IHttpContextAccessor httpContextAccessor)\\n    {\\n        var httpContext = httpContextAccessor.HttpContext;\\n    }\\n}\\n```\\n\\n### \u901a\u8fc7 `App.HttpContext`\\n\\n`App` \u9759\u6001\u7c7b\u4e5f\u63d0\u4f9b\u4e86 `App.HttpContext` \u83b7\u53d6 `HttpContext` \u5bf9\u8c61\u3002\\n\\n## `HttpContext` \u62d3\u5c55\u65b9\u6cd5\\n\\n`Furion` \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684 `HttpContext` \u62d3\u5c55\u65b9\u6cd5\\n\\n### \u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027\\n\\n```cs\\nvar attribute = httpContext.GetMetadata<SomeAttribute>();\\n```\\n\\n### \u8bbe\u7f6e `Swagger` \u81ea\u52a8\u6388\u6743\\n\\n```cs\\nhttpContext.SigninToSwagger(\\"\u4f60\u7684token\\");\\n```\\n\\n### \u9000\u51fa `Swagger` \u6388\u6743\\n\\n```cs\\nhttpContext.SignoutToSwagger();\\n```\\n\\n### \u83b7\u53d6\u672c\u5730 IP \u5730\u5740\\n\\n```cs\\nvar ipv4 = httpContext.GetLocalIpAddressToIPv4();\\nvar ipv6 = httpContext.GetLocalIpAddressToIPv6();\\n```\\n\\n### \u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740\\n\\n```cs\\nvar ipv4 = httpContext.GetRemoteIpAddressToIPv4();\\nvar ipv6 = httpContext.GetRemoteIpAddressToIPv6();\\n```"}]}')}}]);