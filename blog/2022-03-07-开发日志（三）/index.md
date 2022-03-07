---
slug: devnote3
title: QFramework Pro 开发日志（三）DocKit 功能展示-文本节点、图像节点
authors: [liangxie]
tags: [qframework,welcome,qframeworkpro]
---

首先作为一个开源框架/AssetStore 插件的作者深知，维护插件、框架的使用文档是一件很麻烦的事情。

大部分主流的文档方案，基本都是用 markdown 编写。

不管是用 markdown 编写 还是用 word 还是其他的方式写文档，都涉及一个文件管理的问题。

这些文件要么部署在网站上，要么部署在 github 上，要么会随着代码包含在插件里。

文件维护起来会很麻烦，而每次修改文档，也需要找到对应的文件。

对于文档维护，有了第一个痛点，就是文档管理的痛点。

第二个痛点，就是阅读的痛点，每次自己买完插件或者下载好别人的框架，都需要跳转到网页去看文档，或者如果插件中已经包含了文档，那么我需要下载一个对应的软件把文档打开，有时是 pdf、有是能打开 .md 格式的软件，有时需要是 Word，总之多多少少需要在多个软件之间来回切换，IDE、Unity、文档阅读器（浏览器、World、Typora 等等），总之对于只用一个屏幕的童鞋来说，非常不方便。

这就是第二个痛点，阅读的痛点。

然后就是第三个痛点，语言的痛点，很多插件的文档都是英文的，所以很多好用的插件，在国内的使用率差了一大截，原因就是没有对中文支持。

![](https://file.liangxiegame.com/82d2ec82-be0c-46d2-bf0a-c606876b4b18.png)

所以关于文档这块，有三个痛点，总结如下：

* 文档管理的痛点：需要维护文件、需要部署。
* 阅读的痛点：需要对应软件打开、需要多个软件之间切换。
* 语言的痛点：中文不支持。

而 QF Pro 给出的方案，就是 DocKit。

首先关于第一个痛点，文档管理的痛点，DocKit 是这样做的。

首先在项目中任意位置，即可创建文档文件，操作如下：

![image.png](https://file.liangxiegame.com/1fe6b088-e15a-4080-9437-ff7a77ff782d.png)

创建好了之后，目录如下：

![image.png](https://file.liangxiegame.com/f63e5afc-ff65-4ec6-b99c-d4ed07f92ba3.png)

首先文档文件的 Inspector ，有一个 EN 的选项框，按下之后，变成如下：

![image.png](https://file.liangxiegame.com/23b60185-b507-41b8-ac3e-544ad50244e9.png)

这里全部都变成了英文，也就是说 QFramework Pro，都会支持中英文。

（毕竟，QF Pro 上架 AssetStore，需要去赚老外的钱。。。）

OK，我们切换回来，如下：

![image.png](https://file.liangxiegame.com/4cc1e724-a442-499b-aa10-58fac96a5e16.png)

我们点击打开窗口，或者我们也可以直接双击文档文件，之后可以看到如下图所示的窗口。

![image.png](https://file.liangxiegame.com/73539d9a-4bdf-4f96-80f4-c7afc76a988f.png)

现在卵都没有。

我们先创建第一个节点，文本节点，鼠标右键选择 Create Node，如下：

![image.png](https://file.liangxiegame.com/a04a7dd9-80a5-49d3-bff6-e69f75342ff7.png)

然后选择 DocKit/TextNode 文本节点，如下：

![image.png](https://file.liangxiegame.com/3ac83acb-5d36-4190-92cb-bce46d9c48a0.png)

这样就创建好了一个文档节点，如下：

![image.png](https://file.liangxiegame.com/b9e70ecb-b6c1-40e6-a5df-4988877e3c5c.png)

以上就是文本节点的创建流程。

下面我们给他支持英文文档，如下:

![image.png](https://file.liangxiegame.com/da60c37d-2bae-481d-918a-d0527d315ef1.png)

只要只要勾选右上方的 EN 选框就能支持中英文切换。

接着，我们来进行简单的导出功能，如下：

![image.png](https://file.liangxiegame.com/0a6b0358-f45e-45a8-aa78-db47c1bcffeb.png)

点击生成 Markdown 文件，

之后会在目录看到如下:

![image.png](https://file.liangxiegame.com/d96aebd0-fd71-4ed0-8316-90c34a837151.png)

我们用支持 Markdown 格式的软件打开，如下所示：

![image.png](https://file.liangxiegame.com/24f59851-bb1e-495a-af93-887a4a697fbf.png)

OK，以上就是 DocKit 的基本使用流程。

流程如下：

* 创建文档文件
* 创建文本节点
* 编写文档
* 导出为 Markdown

那么这样的流程，如何解决了三个痛点呢？

* 对于文档管理来说，只需要将文档文件和插件一起放在目录里即可，这样即方便修改维护，也适合直接发布，也省去了用户需要额外打开网页或者下载阅读软件的麻烦。最重要的是，支持离线阅读，不用有网络环境。
* 对于文档阅读来说，文档的表现形式是图的形式，图的形式天生比文字文档更直观更容易阅读，而且用户无需安装其他软件，仅仅是在 Unity 内部即可阅读文档，既然 Unity 支持了这么方便好用的编辑器，当然文档的方式也要用 Unity 的方式解决了，这很酷，不是么。
* 对于语言问题来说，QF Pro 肯定是要支持中文文档的，毕竟是现在国内发展起来的框架，其次，也要支持英文，毕竟也要上 AssetStore 去赚美刀，也是一个国际化的必经之路，QF 的 DocKit 支持了一键切换中英文，任何位置都支持切换的选项框。

所以以上的三个痛点都算解决了。

在这个基础之上，还支持了 Markdown 导出的功能。

为什么要支持 Markdown 导出呢？

因为我们并不是 24 小时都待在电脑旁的，有的时候，我们阅读文档是在手机或者 ipad 上看的，这个时候如果 DocKit 写的文档只在 Unity 内观看的话，就有点太鸡肋了，所以就支持了 markdown 格式的导出。

markdown 格式几乎支持转成任何文档格式：word、pdf、textbundle、html 等等，所以只要支持个 markdown 格式也就解决了这个问题。

其实自己研究过一套 pdf 导出方案，无奈，为了实现这个功能依赖了十几兆的其他库，不值当，所以就舍弃掉这个功能了。

这就是 DocKit 的一个基本介绍了。

DocKit 除了支持文档节点，还是支持图像节点，如下所示。

![image.png](https://file.liangxiegame.com/171ddd44-f36d-4d9e-a0fb-4eda721abbbe.png)

图像创建流程与文本节点一样，不再赘述。

从外部导入图片的方式如下，点击 ... 按钮，会打开桌面文件夹，如下所示：

![image.png](https://file.liangxiegame.com/57db6c45-469a-4f87-9d54-022804f63f4b.png)

这里笔者选择一张图片，然后打开，结果如下：

![image.png](https://file.liangxiegame.com/8c00b822-e5c7-452d-b9c6-b122af5a9229.png)

这样图像节点就导入进来了。

导入存放的目录，默认在同名目录的 Editor 目录下，如下：

![image.png](https://file.liangxiegame.com/da30c681-af71-4be3-981a-aaec0efe7e92.png)

如果重复导入同名文件，则会自动用 ID 改名，如下：

![image.png](https://file.liangxiegame.com/f8411d3b-ab94-444e-bcbe-0da8a606b4b2.png)

如果重复资源或者图片修改了比较多，会产生很多无用资源，这里只需按下文档文件的清空不用的图片资源按钮即可，如下：

![image.png](https://file.liangxiegame.com/360e7ba0-12b6-429a-aafd-3a1735bb243d.png)

不过目前，这两个封面 和 封面1 这两个图片都有被引用，因为在第一次设置贴图资源的时候，如果 中文图片 和 英文图片都没有进行设置过，那么会把设置的图片同时设置给 中文图片 和 英文图片。

因为很多时候中英文图片引用的是同一张。

然后刚才的操作中，又导入了一张图片，此时只会讲当前语言的图片替换，也就是说现在 中文图片是封面1 英文图片是封面2。

所以还需要再导入一次图片，然后点击清空不用的图片资源，结果如下：

![image.png](https://file.liangxiegame.com/d2ad4893-fb31-4a09-94c6-df64af6d9b38.png)

OK，这是图片节点的导入功能。

为什么要从桌面开始导入呢？

因为很多截图软件（比如 Mac 自带的截图软件）都是截图之后会自动保存到桌面，为了配合这个特性，所以图片节点的导入就默认打开桌面文件夹了，这样会形成一个流程上的闭环，如果习惯了写文档的效率会非常高。

不过，其实更高的方式是截图完直接从剪切板中获取图片，然后直接粘贴到文档中，但是这个功能，要实现需要依赖  Mono2.0 的  System.Windows.Form.dll 和 System.Drawing.dll 这两个文件，所以同样弃用了，QF Pro 要尽可能少的依赖，不然很容易和前天插件其冲突，后期维护起来会很麻烦。

OK，图像节点创建好了，当然也支持导出为 Markdown 功能了，我们导出一次 Markdown，结果如下：

![image.png](https://file.liangxiegame.com/f4943629-00aa-4c65-99fe-3d34d1cad616.png)

完美。

好了，介绍好了 文本节点和图像节点，其实还要支持很多其他节点，比如表格节点、一些动作节点支持简单的编程，还有代码展示节点，大标题小标题节点、GIF 动画节点等等，而剩下就是扩展节点的工作量了，这部分慢慢做就可以，可以将重心转到下一个模块的开发了。

除了实现以上功能外，还对 GraphView 做了很多调教工作，比如双击文档区可以支持全屏/窗口切换，如下：

窗口：

![image.png](https://file.liangxiegame.com/bd9b7544-f08c-45b2-a227-09d2d0f40458.png)

全屏：

![image.png](https://file.liangxiegame.com/f136a518-1fb9-41db-a152-8d9db09073b6.png)

还有其他的小功能，DocKit 的整体进度如下：

![image.png](https://file.liangxiegame.com/2bd5b32f-c71f-4499-b7ce-d82f552c9a22.png)

* DocKit - 使用可视化编程编写项目文档（正在进行）

  * 节点

    * 文本（已完成）
    * 图像（正在进行）
    * GIF 动画（接下来）
    * 表格节点
    * 动作列表节点（可以执行）
  * 导出

    * Makrdown（已完成）
    * PDF（已完成，由于会依赖几十招的 dll，所以功能取消）
  * 导入

    * 图片节点 快速从项目外部导入图片（已完成）
    * 图片导入时重名自动增加计数 ID 为后缀（已完成）
  * 多语言

    * 中英文切换已完成）
    * 生成的 Makrdown 文件，支持中英文版本作为后缀（已完成）
    * 图像节点支持中英文同时引用同一张图片功能（已完成）
  * 中英文切换（已完成）
  * 手势

    * 双击全屏/窗口切换(已完成)
    * 快速创建接节点(Ctrl/CMD + 鼠标左键）（已完成）
    * 双击图像文件自动打开窗口（已完成）

所有的 UI 库，不管是 NGUI 和 UGUI、还是 UIElement 等，最先实现的基础控件基本都是 文本控件 和 图片控件，因为任何其他的空间都可以用文本控件和图片控件组合而成。

所以，DocKit 支持了 文本节点 和 图片节点，就能满足大部分的需求了，因为不管是代码还是表格都能用图片的形式来展示。

之所以先做 DocKit，是因为，要做好一个插件和方案，文档是非常重要的部分，文档做好了，可以节省大量的时间、精力和团队间的沟通成本。

而不管是独立游戏、还是公司的项目、或者是开发插件和框架、本质上都是软件工程，软件工程中文档是非常重要的。

而 QFramework Pro 版本会有大量的文档编写需求。

但是这里笔者有一个小的观点，产品的设计，尽可能让用户开箱即用，就是最好做到不用看说明书就能上手使用，比如苹果手机等。

所以笔者会选择直接给个选项框，来切换中英文，如下：

![image.png](https://file.liangxiegame.com/de4adb9b-b962-4c86-8295-a15be1f5920a.png)

而不是写个文档，告诉用户，中英文如何切换 blablabla。

产品设计和关卡设计是有点通的，关卡设计中使用金币来引导玩家来做出设计师想让玩家做的操作是一个很常见的套路。

就是一个东西最好是一看就能明白，这个就是一个小小的理念吧，一是使用体验会好一点，二是能介绍大量的文档编写工作量（逃。。。。）

OK，关于 DocKit 就说道这里，DocKit 只是 QF Pro 众多功能规划中的一个小功能，后续还会有很多。

还有一件事情，由于 AssetStore 审核需要 3 个工作日，所以 QF Pro 将会分为两个版本发布。

一个版本是 AssetStore 版，即稳定版，由于审核需要 3 个工作日，当 QF Pro 的用户遇到紧急问题时无法尽快修复。

所以，再开一个快速迭代版本，这个版本就放在自己平台发布了。

AssetStore 版和 快速迭代版，不支持互相转换，建议只买一个版本，AssetStore 版更稳定，快速迭代版功能更快体验到问题也能及时修复，但是相对会不稳定一些，很有可能有 API 的变更。

当然如果你想多多支持 QF Pro 让他更好，也可以两份都购买作为支持和鼓励。

目前此文所述的功能，已在快速迭代版中支持，而 AssetStore 只要当前版本审核通过了，会立即提交快速迭代版当时的相对稳定的版本。

快速迭代版，会优先编写中文文档，每当可以发布 AssetStore 版本时，会进行文档的翻译工作。

QF Pro 目前暂不兼容 QFramework 的开源版本（ToolKits 版），但是会随着 QF Pro 的迭代，慢慢将 API 兼容到 QFramework 的开源版本，所以目前不要直接升级 QF 开源版到 Pro 版本，建议在新工程中体验 QF Pro 的功能。

任何 QFramework Pro 的更新信息，会优先发布在此系列的专栏、视频中，所以对 QF Pro 感兴趣的童鞋多多关注笔者，以方便获取更新。

OK 就说道这里。

## 各种地址

* DocKit 所参考的可视化编辑方案

  * XNode（参考一部分功能） 地址：https://github.com/Siccity/xNode

    * https://github.com/Siccity/xNode
  * BlueGraph（参考一部分功能和样式，颜值最高，但是 bug 也最多）

    * https://github.com/McManning/BlueGraph
  * NodeGraphProcessor（主要是这个，DocKit 再次基础上魔改，最新版适配了 2019.3）

    * 地址：https://github.com/alelievr/NodeGraphProcessor
  * 感谢烟雨大佬的关于 NodeGraphProcessor 的一篇文章，其中的架构图让我很快弄清楚了 NodeGraphProcessor 的结构

    * 地址：https://zhuanlan.zhihu.com/p/362259030
* QFramework Pro AssetStore 主页：[http://u3d.as/SJ9](http://u3d.as/SJ9)
* 快速迭代版（众筹地址）：https://www.gamepixedu.com/course/72
* QFramework QQ 群：623597263
* 此文首发于 http://doc.qframework.cn 或 https://qframework.cn
* 转载请注明地址：https://liangxiegame.com  在这个地址可以看到我全部的作品链接