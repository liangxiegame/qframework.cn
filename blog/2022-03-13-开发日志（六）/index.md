---
slug: devnote6
title: QFramework Pro 开发日志（六）一键生成类图功能介绍
authors: [liangxie]
tags: [qframework,welcome,qframeworkpro]
---

这个功能连续开发了三天，现在完成了一个基本的雏形。

先说说，为啥做这个功能吧。

作为 Unity 开发者，不管是在做游戏还是在做工具、方案、学习源码的时候，多多少少都会需要魔改一些其他插件、框架、工具的代码。

而魔改的前提，是自己能够快速理解代码的大体结构。

如何快速理解代码的大体结构？自己画一遍简单的类图是比较快的方式。

于是笔者就制作了一个快速根据目录内的代码生成简单继承的类图的功能。

先看下使用流程。

* 在某个代码目录创建一个类图文件，操作如下:

![image.png](https://file.liangxiegame.com/1de75be5-8b33-4491-a3e0-8d7f3270f8d5.png)

* 创建之后结果如下:

![image.png](https://file.liangxiegame.com/876b9a15-3b3b-4900-b163-d68a5b9bb1ca.png)

* 点击，Inspector 上的 Parse 按钮，就会生成类图，如下：

![image.png](https://file.liangxiegame.com/272623f4-fce0-4f2e-a534-bd21219326bc.png)

* 有点看不清，放大看一下吧。

![image.png](https://file.liangxiegame.com/677275df-eab1-4b7d-930e-3efe858ef2d9.png)

会比较清晰地显示继承结构。

点击方法 或者 类图上的 See 按钮，可以直接打开脚本文件，查看代码，如下：

![image.png](https://file.liangxiegame.com/4c6e7e74-a319-4a18-818c-26b037ad028c.png)

![image.png](https://file.liangxiegame.com/15de3d4d-3def-4330-8f01-68259c072cb3.png)

* 如果给这个方法再写点注释，然后再点击 Parse。

![image.png](https://file.liangxiegame.com/17c68123-9111-40d8-8dc4-41b6fa96ca55.png)

* 结果如下：

![image.png](https://file.liangxiegame.com/9388febc-9e95-407a-a387-261d950f7da7.png)

* 就会将注释显示在类图上。
* 如何快速找到某个类的类图，可以查看 类图文件的 Inspector 上，如下：

![image.png](https://file.liangxiegame.com/b65c99e5-b553-4daf-a1d8-d16b243c9bf7.png)

* 点击 Show In Graph 就会，定位到对应的类图上，如下：

![image.png](https://file.liangxiegame.com/e38b2ffe-6a3e-4aec-a972-a674e9c25c32.png)

![image.png](https://file.liangxiegame.com/4f798246-22dd-4c16-94f5-652f1df22fb8.png)

现在只是一个功能雏形，后续想要更方便易用需要做很多优化，比如支持搜索功能，中英文切换等等。

由于这个功能解决的痛点，首先就是自己的痛点，因为 QFramework Pro 接下来有不少工作要做，比如参考一些其他插件或者库的代码，魔改一些开源方案，需要写足够的注释，设计更好用的 API，等等，都会用到，目前的功能暂时足够使用了。

由于自己会大量使用这个功能，所以肯定有不够用的时候，到时候再增加功能即可。

写这个功能，去研究了一下 Roslyn 和 xNode。

Roslyn 其实自己很早就接触过，但是一直没花时间去好好研究，这次正好趁着做这个功能研究了一下，Roslyn 真的很强大，分析代码、生成代码、编译代码、执行代码样样精通，而目前自己只用到了分析代码的功能，后边 QF Pro 还会用到 生成代码的功能，正好这次打个基础，先用起来。

xNode 相比 NodeGraphProcessor，支持更多节点数量，本来一键生成类图的功能，是用 NodeGraphProcessor 做的，但是当类图超过 30 个的时候，NodeGraphProcessor 就开始卡顿了，如果只支持 30 个类图，那这个功能就太鸡肋了。

于是自己就尝试了一下 xNode，发现 xNode 在 100 多个类图的时候才开始有点卡顿，笔者猜测， 如果类图节点不在屏幕内 xNode 不会进行渲染，而 NodeGraphProcessor 则会进行渲染，所以根据实际的测试结果，这次的一键生成类图的功能选择使用 xNode 完成。

那 NodeGraphProcessor 就不用了吗？

当然不是，NodeGraphProcessor 也还会用，两者各有优缺点，NodeGraphProcessor 自带的功能丰富，颜值高，同屏渲染性能更优，xNode 更稳定，支持节点类的重命名，不在屏内的节点渲染优化，代码更少更清爽等等。

这两个方案，会慢慢合并，合并叫 GraphKit，NodeGraphProcessor 是 GraphKit UIElement 渲染方式的方案，xNode 是 GraphKit IMGUI 渲染方式的方案，而底层的很多代码都和 QFramework 的一部分代码是重合的，所以可以将底层很多代码用 QFramework 进行重构。

重构完成后，还会再参考参考其他的方案，去粗取精，不断优化。

三天时间，同时学习 Roslyn 和 xNode 再加上要实现一键生成类图的功能，有点吃不消，脑子快炸了，所以接下来就做做比较轻松的优化、写文档的工作，然后准备提交到 AssetStore。

再补充一句，自己使用这个功能，基本都是在某一个模块某一个目录中使用，一是性能问题，二是一下子看 1000 多个类， 也看不完，不如一小块一小块开始看。

实现好了这个功能，就算上手了 Roslyn 和 xNode，有了以后做各种代码生成和其他功能的基础，v0.4.0 版本完成再说吧。

这一篇就说到这。

## 各种地址

* QFramework Pro AssetStore 主页：[http://u3d.as/SJ9](http://u3d.as/SJ9)
* 快速迭代版（众筹地址）：https://www.gamepixedu.com/course/72
* QFramework 开源版地址：https://github.com/liangxiegame/QFramework
* QFramework QQ 群：623597263
* 此文首发于 http://doc.qframework.cn 或 https://qframework.cn
* 转载请注明地址：https://liangxiegame.com  在这个地址可以看到我全部的作品链接