---
slug: devnote5
title: QFramework Pro 开发日志（五）DocKit 功能优化 v0.3.2
authors: [liangxie]
tags: [qframework,welcome,qframeworkpro]
---

昨天用 DocKit 一口气写了 3 个文档。

使用的过程中发现可以优化的地方。

之前创建节点的流程如下：

* 鼠标右键 选择创建节点

![image.png](https://file.liangxiegame.com/d093115c-360d-4b9f-9522-ee448db5c196.png)

* 弹出窗口，选择 DocKit/TextNode 文本节点

![image.png](https://file.liangxiegame.com/33411149-700d-4185-bcd1-fb1b0497868c.png)

* 创建成功

![image.png](https://file.liangxiegame.com/628c2c7b-51ed-47cd-a680-335844891626.png)

总共两步流程，而像创建节点在编写文档是反复使用的功能，所以有优化一下。

现在步骤如下：

* 右键选择文本节点

![image.png](https://file.liangxiegame.com/67735aa3-dd73-460a-86d6-a855b654496c.png)

* 创建成功

![image.png](https://file.liangxiegame.com/628c2c7b-51ed-47cd-a680-335844891626.png)

现在创建节点的流程变成了一步。

这个问题，是自己经过大量的使用发现的，产品肯定要做很多测试。

这个功能已经在自己平台版本发布，AssetStore 版本会在 v0.3.0 版本审核通过后立即提交。

另外，QF Pro 的下个功能已经构思好了。

大概就是可以分析一个目录的代码，将代码解析成类似 UML 类图的方式在 可视化编辑器里显示。

然后也可以在 可视化编辑器里设计 UML 类图或者设计决定版的架构，然后直接一键生成代码，类似 uFrame 的 Designer，所以第二个功能起名叫 ArchitectureDesigner 即，架构设计器，包含生成某个目录代码的类图功能，和通过类图生成代码功能。

这个就是 v0.4.0 版本的功能预告啦。

OK，这篇就到这里啦。

## 各种地址

* AssetStore 版本地址(v0.3.1 审核中)：http://u3d.as/SJ9
* 自己平台地址（v0.3.2 已发布)：https://www.gamepixedu.com/course/72
* QFramework 开源版地址：https://github.com/liangxiegame/QFramework
* QFramework QQ 群：623597263
* 此文首发于 http://doc.qframework.cn 或 https://qframework.cn
* 转载请注明地址：https://liangxiegame.com  在这个地址可以看到我全部的作品链接