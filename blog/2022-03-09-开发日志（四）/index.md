---
slug: devnote4
title: QFramework Pro 开发日志（四）0.3 版本正式发布
authors: [liangxie]
tags: [qframework,welcome,qframeworkpro]
---

刚刚提交了 QFramework Pro v0.3 版本，主要功能如下:

1. 使用可视化编程的方式 编写、阅读文档（图打错字了）

![01.Editor.CN.png](https://file.liangxiegame.com/b8698186-51e9-4174-b73f-e50611f6297e.png)

2. 创建的文档会自动显示在管理窗口

![02.Management.CN.png](https://file.liangxiegame.com/6580518f-0957-452b-8a05-706359d07eec.png)

3. 支持生成简单的 Markdown 文件

![03.MarkdownExport.CN.png](https://file.liangxiegame.com/c4cf3b59-713e-4a07-85d8-998e17051714.png)

4. 生成的 Markdown 展示（不是插件功能，下图是用其他软件打开的）

![04.MarkdownPreview.CN.png](https://file.liangxiegame.com/100bde3a-d7d6-4473-8eb4-513c178efff7.png)

自从 DocKit 核心功能完成后，花了大量时间优化使用体验和一些 bug，有的 bug 实在绕不开了，所以提供了一个重新加载的功能。

就像电脑死记了，先重启一样😂。

NodeGraphProcessor 不管从功能、颜值、还是性能上都是最好的方案。

但是现在有点像用相对稳定 bug 少的 xnode 了。

等我再纠结纠结吧。

对了，QFrameworkPro 版本的协议如下：

![image.png](https://file.liangxiegame.com/57706870-4958-406f-8e5c-a3e19498e3f9.png)

简单理解，就是你付费买了插件，就可以按照 MIT 的协议使用插件的源码。

但是由于 QF Pro 引用了一些其他协议的项目，所以请尊重他们的开源协议，最低限度只需包含协议声明即可。

接下来做啥呢？

最近感兴趣的 MoonSharp 一个 Lua 方案，然后最开始写的代码生成即 CodeGenKit，要么就是试试 xNode。

反正随心情吧，都试试，然后产品化，看看哪个比较合适先搞。

* AssetStore 版本地址（文中的版本以提交，正在等待审核）：http://u3d.as/SJ9
* 自己平台地址（文中的版本已发布）：https://www.gamepixedu.com/course/72
* QFramework 开源版地址：https://github.com/liangxiegame/QFramework
* QFramework QQ 群：623597263
* 此文首发于 http://doc.qframework.cn 或 https://qframework.cn
* 转载请注明地址：https://liangxiegame.com  在这个地址可以看到我全部的作品链接


就说到这吧，不墨迹了。