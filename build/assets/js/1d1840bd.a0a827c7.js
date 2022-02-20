"use strict";(self.webpackChunkqframework_cn=self.webpackChunkqframework_cn||[]).push([[641],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,s=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),p=l(t),d=i,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(v,c(c({ref:e},u),{},{components:t})):r.createElement(v,c({ref:e},u))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,c=new Array(o);c[0]=p;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2454:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),c=["components"],a={sidebar_position:2},s="2. MVC \u5feb\u901f\u5165\u95e8",l={unversionedId:"quick-start/mvc_intro",id:"quick-start/mvc_intro",title:"2. MVC \u5feb\u901f\u5165\u95e8",description:"QFramework \u652f\u6301 MVC \u7684\u5f00\u53d1\u8303\u5f0f\u3002",source:"@site/docs/quick-start/2. mvc_intro.md",sourceDirName:"quick-start",slug:"/quick-start/mvc_intro",permalink:"/docs/quick-start/mvc_intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start/2. mvc_intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. \u6982\u8ff0",permalink:"/docs/quick-start/intro"},next:{title:"3. \u5f15\u5165 Command",permalink:"/docs/quick-start/command"}},u=[],m={toc:u};function p(n){var e=n.components,t=(0,i.Z)(n,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-mvc-\u5feb\u901f\u5165\u95e8"},"2. MVC \u5feb\u901f\u5165\u95e8"),(0,o.kt)("p",null,"QFramework \u652f\u6301 MVC \u7684\u5f00\u53d1\u8303\u5f0f\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u5148\u4ece\u6211\u4eec\u6700\u719f\u77e5\u7684 MVC \u67b6\u6784\u5f00\u59cb\u7740\u624b QFramework \u7684\u5b66\u4e60\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u505a\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u8ba1\u6570\u5668\u5e94\u7528\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6211\u4eec\u4f7f\u7528 UGUI \u521b\u5efa\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u754c\u9762\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://file.liangxiegame.com/51263daf-0984-4eff-9a14-3f655e515059.png",alt:null})),(0,o.kt)("p",null,"\u573a\u666f\u7ed3\u6784\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://file.liangxiegame.com/65e7be40-e92d-4d9f-9d45-11d8912c7978.png",alt:null})),(0,o.kt)("p",null,"\u590d\u5236\u5b8c\u4e4b\u540e\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u811a\u672c\u53eb\u505a CounterAppController\uff0c\u4ee3\u7801\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\nusing UnityEngine.UI;\n\nnamespace QFramework.Example\n{\n    // Controller\n    public class CounterAppController : MonoBehaviour\n    {\n        // View\n        private Button mBtnAdd;\n        private Button mBtnSub;\n        private Text mCountText;\n\n        // Model\n        private int mCount = 0;\n        \n        private void Start()\n        {\n            // \u7ec4\u4ef6\u83b7\u53d6\n            mBtnAdd = transform.Find("BtnAdd").GetComponent<Button>();\n            mBtnSub = transform.Find("BtnSub").GetComponent<Button>();\n            mCountText = transform.Find("CountText").GetComponent<Text>();\n            \n            // \u76d1\u542c\u8f93\u5165\n            mBtnAdd.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                mCount++;\n                // \u8868\u73b0\u903b\u8f91\n                UpdateView();\n            });\n            \n            mBtnSub.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                mCount--;\n                // \u8868\u73b0\u903b\u8f91\n                UpdateView();\n            });\n            \n            UpdateView();\n        }\n\n        void UpdateView()\n        {\n            mCountText.text = mCount.ToString();\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u4ee3\u7801\u975e\u5e38\u7b80\u5355\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684 MVC \u7684\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5c06\u6b64\u811a\u672c\u6302\u5728 Canvas \u8282\u70b9\u4e0a\uff0c\u8fd0\u884c Unity \u7ed3\u679c\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://file.liangxiegame.com/9192b010-5a47-44d4-81c7-448d2e4e4a09.png",alt:null})),(0,o.kt)("p",null,"\u975e\u5e38\u7b80\u5355\u3002"),(0,o.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u8fd8\u6ca1\u6709\u5bfc\u5165\u6211\u4eec\u7684 QFramework\uff0c\u4e0d\u8981\u6025\uff0c\u6211\u4eec\u5148\u770b\u770b\u4ee3\u7801\u4e2d\u6240\u4ecb\u7ecd\u7684\u6982\u5ff5\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u662f Model\u3001View\u3001Controller"),(0,o.kt)("p",null,"Model \u7684\u4ee3\u7801\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"        // Model\n        private int mCount = 0;\n")),(0,o.kt)("p",null,"\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u6709\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\u3002\u4e00\u822c\u6765\u8bf4 Model \u5c31\u662f\u8981\u5c55\u793a\u7684\u6570\u636e\u90e8\u5206\u3002"),(0,o.kt)("p",null,"View \u7684\u4ee3\u7801\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"        // View\n        private Button mBtnAdd;\n        private Button mBtnSub;\n        private Text mCountText;\n")),(0,o.kt)("p",null,"View \u7684\u4ee3\u7801\u4e5f\u5f88\u7b80\u5355\uff0cView \u5728 QFramework \u7684 MVC \u5b9a\u4e49\u91cc\u5c31\u662f\u63d0\u4f9b\u4e00\u4e9b\u611f\u5174\u8da3\u7ec4\u4ef6\u7684\u5f15\u7528\uff0c\u6bd4\u5982 \u8fd9\u4e09\u4e2a\u7ec4\u4ef6\u90fd\u662f\u8981\u5728 Controller \u4ee3\u7801\u91cc\u8981\u7528\u5230\u7684\uff0c\u800c\u8fd8\u6709\u5176\u4ed6\u7684\u7ec4\u4ef6\uff0c\u6bd4\u5982 Canvas Scale \u8fd9\u4e9b\u7ec4\u4ef6\u5728\u5f53\u524d\u7684 Controller \u91cc\u662f\u4e0d\u9700\u8981\u7684\u3002"),(0,o.kt)("p",null,"Controller \u7684\u4ee3\u7801\uff0c\u5c31\u662f CounterAppController \u672c\u8eab\uff0c\u8fd9\u4e2a\u5c31\u4e0d\u591a\u8bf4\u4e86\u3002"),(0,o.kt)("p",null,"\u73b0\u5728 CounterAppController \u8fd9\u5957\u4ee3\u7801\u672c\u8eab\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u662f\u63a5\u4e0b\u6765\u968f\u7740\u9879\u76ee\u7684\u53d1\u5c55\u4f1a\u4ea7\u751f\u4e00\u4e9b\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u7684 Model \u4ee3\u7801\uff0c\u5373 mCount \u6210\u5458\u53d8\u91cf\uff0c\u5b83\u975e\u5e38\u6709\u53ef\u80fd\u5728\u591a\u4e2a Controller \u4e4b\u95f4\u9700\u8981\u5171\u4eab\uff0c\u5f53\u7136\u5728\u8fd9\u4e2a\u7b80\u5355\u7684\u8ba1\u6570\u5668 App \u91cc\u53ef\u80fd\u4e0d\u9700\u8981\u88ab\u5171\u4eab\uff0c\u56e0\u4e3a\u8ba1\u6570\u5668 App \u672c\u8eab\u7684\u4f53\u91cf\u4e0d\u4f1a\u5f88\u5927\uff0c\u4f46\u662f\u5927\u5bb6\u5728\u505a\u7684\u9879\u76ee\u4e00\u822c\u662f\u4f53\u91cf\u4f1a\u5927\u5f88\u591a\uff0c\u6240\u4ee5\u7c7b\u4f3c mCount \u8fd9\u6837\u7684\u6570\u636e\u975e\u5e38\u6709\u53ef\u80fd\u5728\u591a\u4e2a Controller \u4e4b\u95f4\u9700\u8981\u5171\u4eab\uff0c\u6216\u8005\u9700\u8981\u5b58\u50a8\u3002"),(0,o.kt)("p",null,"\u800c\u8fd9\u65f6\uff0c\u6211\u4eec\u5c31\u9700\u8981\u8ba9 mCount \u6210\u5458\u53d8\u91cf\u53d8\u6210\u4e00\u4e2a\u53ef\u4ee5\u5171\u4eab\u7684\u6570\u636e\uff0c\u6700\u5feb\u7684\u505a\u6cd5\u5c31\u662f\u628a mCount \u53d8\u91cf\u53d8\u6210\u9759\u6001\u53d8\u91cf\u6216\u8005\u5355\u4f8b\uff0c\u4f46\u662f\u8fd9\u6837\u505a\u4f1a\u6709\u5f88\u591a\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5c31\u7528\u6211\u4eec\u7684 QFramework \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e5f\u5c31\u662f\u6570\u636e\u5171\u4eab\u7684\u95ee\u9898\uff0c\u89e3\u51b3\u65b9\u5f0f\u5c31\u662f\u5f15\u5165\u4e00\u4e2a Model \u6982\u5ff5\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u5bfc\u5165 QFramework\u3002"),(0,o.kt)("p",null,"\u5bfc\u5165 QFramework \u7684\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5c06\u5982\u4e0b\u4ee3\u7801\u590d\u5236\u5230 Unity \u5de5\u7a0b\u4e2d\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u8981\u6ce8\u610f\uff0c\u5148\u4e0d\u8981\u5c1d\u8bd5\u770b\u61c2\u5982\u4e0b\u4ee3\u7801\uff0c\u800c\u662f\u5148\u5c1d\u8bd5\u5b66\u4f1a\u4f7f\u7528\uff0c\u7528\u719f\u4e86\u5728\u7814\u7a76\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'/****************************************************************************\n * Copyright (c) 2015 ~ 2022 liangxiegame MIT License\n *\n * QFramework v1.0\n *\n * https://qframework.cn\n * https://github.com/liangxiegame/QFramework\n * https://gitee.com/liangxiegame/QFramework\n * \n * Author:\n *  liangxie        https://github.com/liangxie\n *  soso            https://github.com/so-sos-so\n *\n * Contributor\n *  TastSong        https://github.com/TastSong\n *  \u4eac\u4ea7\u80a0\u996d         https://gitee.com/JingChanChangFan/hk_-unity-tools\n * \n * Community\n *  QQ Group: 623597263\n * Latest Update: 2021.2.20 13:13 Add EasyEvent\n ****************************************************************************/\n\nusing System;\nusing System.Collections.Generic;\nusing UnityEngine;\n\nnamespace QFramework\n{\n    #region Architecture\n\n    public interface IArchitecture\n    {\n        void RegisterSystem<T>(T system) where T : ISystem;\n\n        void RegisterModel<T>(T model) where T : IModel;\n\n        void RegisterUtility<T>(T utility) where T : IUtility;\n\n        T GetSystem<T>() where T : class, ISystem;\n\n        T GetModel<T>() where T : class, IModel;\n\n        T GetUtility<T>() where T : class, IUtility;\n\n        void SendCommand<T>() where T : ICommand, new();\n        void SendCommand<T>(T command) where T : ICommand;\n\n        TResult SendQuery<TResult>(IQuery<TResult> query);\n\n        void SendEvent<T>() where T : new();\n        void SendEvent<T>(T e);\n\n        IUnRegister RegisterEvent<T>(Action<T> onEvent);\n        void UnRegisterEvent<T>(Action<T> onEvent);\n    }\n\n    public abstract class Architecture<T> : IArchitecture where T : Architecture<T>, new()\n    {\n        /// <summary>\n        /// \u662f\u5426\u521d\u59cb\u5316\u5b8c\u6210 \n        /// </summary>\n        private bool mInited = false;\n\n        private List<ISystem> mSystems = new List<ISystem>();\n\n        private List<IModel> mModels = new List<IModel>();\n\n        public static Action<T> OnRegisterPatch = architecture => { };\n\n        private static T mArchitecture;\n\n        public static IArchitecture Interface\n        {\n            get\n            {\n                if (mArchitecture == null)\n                {\n                    MakeSureArchitecture();\n                }\n\n                return mArchitecture;\n            }\n        }\n\n\n        static void MakeSureArchitecture()\n        {\n            if (mArchitecture == null)\n            {\n                mArchitecture = new T();\n                mArchitecture.Init();\n\n                OnRegisterPatch?.Invoke(mArchitecture);\n\n                foreach (var architectureModel in mArchitecture.mModels)\n                {\n                    architectureModel.Init();\n                }\n\n                mArchitecture.mModels.Clear();\n\n                foreach (var architectureSystem in mArchitecture.mSystems)\n                {\n                    architectureSystem.Init();\n                }\n\n                mArchitecture.mSystems.Clear();\n\n                mArchitecture.mInited = true;\n            }\n        }\n\n        protected abstract void Init();\n\n        private IOCContainer mContainer = new IOCContainer();\n\n        public void RegisterSystem<TSystem>(TSystem system) where TSystem : ISystem\n        {\n            system.SetArchitecture(this);\n            mContainer.Register<TSystem>(system);\n\n            if (!mInited)\n            {\n                mSystems.Add(system);\n            }\n            else\n            {\n                system.Init();\n            }\n        }\n\n        public void RegisterModel<TModel>(TModel model) where TModel : IModel\n        {\n            model.SetArchitecture(this);\n            mContainer.Register<TModel>(model);\n\n            if (!mInited)\n            {\n                mModels.Add(model);\n            }\n            else\n            {\n                model.Init();\n            }\n        }\n\n        public void RegisterUtility<TUtility>(TUtility utility) where TUtility : IUtility\n        {\n            mContainer.Register<TUtility>(utility);\n        }\n\n        public TSystem GetSystem<TSystem>() where TSystem : class, ISystem\n        {\n            return mContainer.Get<TSystem>();\n        }\n\n        public TModel GetModel<TModel>() where TModel : class, IModel\n        {\n            return mContainer.Get<TModel>();\n        }\n\n        public TUtility GetUtility<TUtility>() where TUtility : class, IUtility\n        {\n            return mContainer.Get<TUtility>();\n        }\n\n        public void SendCommand<TCommand>() where TCommand : ICommand, new()\n        {\n            var command = new TCommand();\n            command.SetArchitecture(this);\n            command.Execute();\n        }\n\n        public void SendCommand<TCommand>(TCommand command) where TCommand : ICommand\n        {\n            command.SetArchitecture(this);\n            command.Execute();\n        }\n\n        public TResult SendQuery<TResult>(IQuery<TResult> query)\n        {\n            query.SetArchitecture(this);\n            return query.Do();\n        }\n\n        private TypeEventSystem mTypeEventSystem = new TypeEventSystem();\n\n        public void SendEvent<TEvent>() where TEvent : new()\n        {\n            mTypeEventSystem.Send<TEvent>();\n        }\n\n        public void SendEvent<TEvent>(TEvent e)\n        {\n            mTypeEventSystem.Send<TEvent>(e);\n        }\n\n        public IUnRegister RegisterEvent<TEvent>(Action<TEvent> onEvent)\n        {\n            return mTypeEventSystem.Register<TEvent>(onEvent);\n        }\n\n        public void UnRegisterEvent<TEvent>(Action<TEvent> onEvent)\n        {\n            mTypeEventSystem.UnRegister<TEvent>(onEvent);\n        }\n    }\n\n    public interface IOnEvent<T>\n    {\n        void OnEvent(T e);\n    }\n\n    public static class OnGlobalEventExtension\n    {\n        public static IUnRegister RegisterEvent<T>(this IOnEvent<T> self) where T : struct\n        {\n            return TypeEventSystem.Global.Register<T>(self.OnEvent);\n        }\n\n        public static void UnRegisterEvent<T>(this IOnEvent<T> self) where T : struct\n        {\n            TypeEventSystem.Global.UnRegister<T>(self.OnEvent);\n        }\n    }\n\n    #endregion\n\n    #region Controller\n\n    public interface IController : IBelongToArchitecture, ICanSendCommand, ICanGetSystem, ICanGetModel,\n        ICanRegisterEvent, ICanSendQuery\n    {\n    }\n\n    #endregion\n\n    #region System\n\n    public interface ISystem : IBelongToArchitecture, ICanSetArchitecture, ICanGetModel, ICanGetUtility,\n        ICanRegisterEvent, ICanSendEvent, ICanGetSystem\n    {\n        void Init();\n    }\n\n    public abstract class AbstractSystem : ISystem\n    {\n        private IArchitecture mArchitecture;\n\n        IArchitecture IBelongToArchitecture.GetArchitecture()\n        {\n            return mArchitecture;\n        }\n\n        void ICanSetArchitecture.SetArchitecture(IArchitecture architecture)\n        {\n            mArchitecture = architecture;\n        }\n\n        void ISystem.Init()\n        {\n            OnInit();\n        }\n\n        protected abstract void OnInit();\n    }\n\n    #endregion\n\n    #region Model\n\n    public interface IModel : IBelongToArchitecture, ICanSetArchitecture, ICanGetUtility, ICanSendEvent\n    {\n        void Init();\n    }\n\n    public abstract class AbstractModel : IModel\n    {\n        private IArchitecture mArchitecturel;\n\n        IArchitecture IBelongToArchitecture.GetArchitecture()\n        {\n            return mArchitecturel;\n        }\n\n        void ICanSetArchitecture.SetArchitecture(IArchitecture architecture)\n        {\n            mArchitecturel = architecture;\n        }\n\n        void IModel.Init()\n        {\n            OnInit();\n        }\n\n        protected abstract void OnInit();\n    }\n\n    #endregion\n\n    #region Utility\n\n    public interface IUtility\n    {\n    }\n\n    #endregion\n\n    #region Command\n\n    public interface ICommand : IBelongToArchitecture, ICanSetArchitecture, ICanGetSystem, ICanGetModel, ICanGetUtility,\n        ICanSendEvent, ICanSendCommand, ICanSendQuery\n    {\n        void Execute();\n    }\n\n    public abstract class AbstractCommand : ICommand\n    {\n        private IArchitecture mArchitecture;\n\n        IArchitecture IBelongToArchitecture.GetArchitecture()\n        {\n            return mArchitecture;\n        }\n\n        void ICanSetArchitecture.SetArchitecture(IArchitecture architecture)\n        {\n            mArchitecture = architecture;\n        }\n\n        void ICommand.Execute()\n        {\n            OnExecute();\n        }\n\n        protected abstract void OnExecute();\n    }\n\n    #endregion\n\n    #region Query\n\n    public interface IQuery<TResult> : IBelongToArchitecture, ICanSetArchitecture, ICanGetModel, ICanGetSystem,\n        ICanSendQuery\n    {\n        TResult Do();\n    }\n\n    public abstract class AbstractQuery<T> : IQuery<T>\n    {\n        public T Do()\n        {\n            return OnDo();\n        }\n\n        protected abstract T OnDo();\n\n\n        private IArchitecture mArchitecture;\n\n        public IArchitecture GetArchitecture()\n        {\n            return mArchitecture;\n        }\n\n        public void SetArchitecture(IArchitecture architecture)\n        {\n            mArchitecture = architecture;\n        }\n    }\n\n    #endregion\n\n    #region Rule\n\n    public interface IBelongToArchitecture\n    {\n        IArchitecture GetArchitecture();\n    }\n\n    public interface ICanSetArchitecture\n    {\n        void SetArchitecture(IArchitecture architecture);\n    }\n\n    public interface ICanGetModel : IBelongToArchitecture\n    {\n    }\n\n    public static class CanGetModelExtension\n    {\n        public static T GetModel<T>(this ICanGetModel self) where T : class, IModel\n        {\n            return self.GetArchitecture().GetModel<T>();\n        }\n    }\n\n    public interface ICanGetSystem : IBelongToArchitecture\n    {\n    }\n\n    public static class CanGetSystemExtension\n    {\n        public static T GetSystem<T>(this ICanGetSystem self) where T : class, ISystem\n        {\n            return self.GetArchitecture().GetSystem<T>();\n        }\n    }\n\n    public interface ICanGetUtility : IBelongToArchitecture\n    {\n    }\n\n    public static class CanGetUtilityExtension\n    {\n        public static T GetUtility<T>(this ICanGetUtility self) where T : class, IUtility\n        {\n            return self.GetArchitecture().GetUtility<T>();\n        }\n    }\n\n    public interface ICanRegisterEvent : IBelongToArchitecture\n    {\n    }\n\n    public static class CanRegisterEventExtension\n    {\n        public static IUnRegister RegisterEvent<T>(this ICanRegisterEvent self, Action<T> onEvent)\n        {\n            return self.GetArchitecture().RegisterEvent<T>(onEvent);\n        }\n\n        public static void UnRegisterEvent<T>(this ICanRegisterEvent self, Action<T> onEvent)\n        {\n            self.GetArchitecture().UnRegisterEvent<T>(onEvent);\n        }\n    }\n\n    public interface ICanSendCommand : IBelongToArchitecture\n    {\n    }\n\n    public static class CanSendCommandExtension\n    {\n        public static void SendCommand<T>(this ICanSendCommand self) where T : ICommand, new()\n        {\n            self.GetArchitecture().SendCommand<T>();\n        }\n\n        public static void SendCommand<T>(this ICanSendCommand self, T command) where T : ICommand\n        {\n            self.GetArchitecture().SendCommand<T>(command);\n        }\n    }\n\n    public interface ICanSendEvent : IBelongToArchitecture\n    {\n    }\n\n    public static class CanSendEventExtension\n    {\n        public static void SendEvent<T>(this ICanSendEvent self) where T : new()\n        {\n            self.GetArchitecture().SendEvent<T>();\n        }\n\n        public static void SendEvent<T>(this ICanSendEvent self, T e)\n        {\n            self.GetArchitecture().SendEvent<T>(e);\n        }\n    }\n\n    public interface ICanSendQuery : IBelongToArchitecture\n    {\n    }\n\n    public static class CanSendQueryExtension\n    {\n        public static TResult SendQuery<TResult>(this ICanSendQuery self, IQuery<TResult> query)\n        {\n            return self.GetArchitecture().SendQuery(query);\n        }\n    }\n\n    #endregion\n\n    #region TypeEventSystem\n\n    public interface IUnRegister\n    {\n        void UnRegister();\n    }\n\n    public interface IUnRegisterList\n    {\n        List<IUnRegister> UnregisterList { get; }\n    }\n\n    public static class IUnRegisterListExtension\n    {\n        public static void AddToUnregisterList(this IUnRegister self, IUnRegisterList unRegisterList)\n        {\n            unRegisterList.UnregisterList.Add(self);\n        }\n\n        public static void UnRegisterAll(this IUnRegisterList self)\n        {\n            foreach (var unRegister in self.UnregisterList)\n            {\n                unRegister.UnRegister();\n            }\n\n            self.UnregisterList.Clear();\n        }\n    }\n\n    /// <summary>\n    /// \u81ea\u5b9a\u4e49\u53ef\u6ce8\u9500\u7684\u7c7b\n    /// </summary>\n    public struct CustomUnRegister : IUnRegister\n    {\n        /// <summary>\n        /// \u59d4\u6258\u5bf9\u8c61\n        /// </summary>\n        private Action mOnUnRegister { get; set; }\n\n        /// <summary>\n        /// \u5e26\u53c2\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="onDispose"></param>\n        public CustomUnRegister(Action onUnRegsiter)\n        {\n            mOnUnRegister = onUnRegsiter;\n        }\n\n        /// <summary>\n        /// \u8d44\u6e90\u91ca\u653e\n        /// </summary>\n        public void UnRegister()\n        {\n            mOnUnRegister.Invoke();\n            mOnUnRegister = null;\n        }\n    }\n\n    public class UnRegisterOnDestroyTrigger : MonoBehaviour\n    {\n        private readonly HashSet<IUnRegister> mUnRegisters = new HashSet<IUnRegister>();\n\n        public void AddUnRegister(IUnRegister unRegister)\n        {\n            mUnRegisters.Add(unRegister);\n        }\n\n        private void OnDestroy()\n        {\n            foreach (var unRegister in mUnRegisters)\n            {\n                unRegister.UnRegister();\n            }\n\n            mUnRegisters.Clear();\n        }\n    }\n\n    public static class UnRegisterExtension\n    {\n        public static void UnRegisterWhenGameObjectDestroyed(this IUnRegister unRegister, GameObject gameObject)\n        {\n            var trigger = gameObject.GetComponent<UnRegisterOnDestroyTrigger>();\n\n            if (!trigger)\n            {\n                trigger = gameObject.AddComponent<UnRegisterOnDestroyTrigger>();\n            }\n\n            trigger.AddUnRegister(unRegister);\n        }\n    }\n\n    public class TypeEventSystem\n    {\n        private readonly EasyEvents mEvents = new EasyEvents();\n\n\n        public static readonly TypeEventSystem Global = new TypeEventSystem();\n\n        public void Send<T>() where T : new()\n        {\n            mEvents.GetEvent<EasyEvent<T>>()?.Trigger(new T());\n        }\n\n        public void Send<T>(T e)\n        {\n            mEvents.GetEvent<EasyEvent<T>>()?.Trigger(e);\n        }\n\n        public IUnRegister Register<T>(Action<T> onEvent)\n        {\n            var e = mEvents.GetOrAddEvent<EasyEvent<T>>();\n            return e.Register(onEvent);\n        }\n\n        public void UnRegister<T>(Action<T> onEvent)\n        {\n            var e = mEvents.GetEvent<EasyEvent<T>>();\n            if (e != null)\n            {\n                e.UnRegister(onEvent);\n            }\n        }\n    }\n\n    #endregion\n\n    #region IOC\n\n    public class IOCContainer\n    {\n        private Dictionary<Type, object> mInstances = new Dictionary<Type, object>();\n\n        public void Register<T>(T instance)\n        {\n            var key = typeof(T);\n\n            if (mInstances.ContainsKey(key))\n            {\n                mInstances[key] = instance;\n            }\n            else\n            {\n                mInstances.Add(key, instance);\n            }\n        }\n\n        public T Get<T>() where T : class\n        {\n            var key = typeof(T);\n\n            if (mInstances.TryGetValue(key, out var retInstance))\n            {\n                return retInstance as T;\n            }\n\n            return null;\n        }\n    }\n\n    #endregion\n\n    #region BindableProperty\n\n    public class BindableProperty<T>\n    {\n        public BindableProperty(T defaultValue = default)\n        {\n            mValue = defaultValue;\n        }\n\n        protected T mValue = default(T);\n\n        public T Value\n        {\n            get => mValue;\n            set\n            {\n                if (value == null && mValue == null) return;\n                if (value != null && value.Equals(mValue)) return;\n\n                mValue = value;\n                mOnValueChanged?.Invoke(value);\n            }\n        }\n\n        private Action<T> mOnValueChanged = (v) => { };\n\n        public IUnRegister Register(Action<T> onValueChanged)\n        {\n            mOnValueChanged += onValueChanged;\n            return new BindablePropertyUnRegister<T>()\n            {\n                BindableProperty = this,\n                OnValueChanged = onValueChanged\n            };\n        }\n\n        public IUnRegister RegisterWithInitValue(Action<T> onValueChanged)\n        {\n            onValueChanged(mValue);\n            return Register(onValueChanged);\n        }\n\n        public static implicit operator T(BindableProperty<T> property)\n        {\n            return property.Value;\n        }\n\n        public override string ToString()\n        {\n            return Value.ToString();\n        }\n\n        public void UnRegister(Action<T> onValueChanged)\n        {\n            mOnValueChanged -= onValueChanged;\n        }\n    }\n\n    public class BindablePropertyUnRegister<T> : IUnRegister\n    {\n        public BindableProperty<T> BindableProperty { get; set; }\n\n        public Action<T> OnValueChanged { get; set; }\n\n        public void UnRegister()\n        {\n            BindableProperty.UnRegister(OnValueChanged);\n\n            BindableProperty = null;\n            OnValueChanged = null;\n        }\n    }\n\n    #endregion\n\n    #region EasyEvent\n\n    public interface IEasyEvent\n    {\n    }\n\n    public class EasyEvent : IEasyEvent\n    {\n        private Action mOnEvent = () => { };\n\n        public IUnRegister Register(Action onEvent)\n        {\n            mOnEvent += onEvent;\n            return new CustomUnRegister(() => { UnRegister(onEvent); });\n        }\n\n        public void UnRegister(Action onEvent)\n        {\n            mOnEvent -= onEvent;\n        }\n\n        public void Trigger()\n        {\n            mOnEvent?.Invoke();\n        }\n    }\n\n    public class EasyEvent<T> : IEasyEvent\n    {\n        private Action<T> mOnEvent = e => { };\n\n        public IUnRegister Register(Action<T> onEvent)\n        {\n            mOnEvent += onEvent;\n            return new CustomUnRegister(() => { UnRegister(onEvent); });\n        }\n\n        public void UnRegister(Action<T> onEvent)\n        {\n            mOnEvent -= onEvent;\n        }\n\n        public void Trigger(T t)\n        {\n            mOnEvent?.Invoke(t);\n        }\n    }\n\n    public class EasyEvent<T, K> : IEasyEvent\n    {\n        private Action<T, K> mOnEvent = (t, k) => { };\n\n        public IUnRegister Register(Action<T, K> onEvent)\n        {\n            mOnEvent += onEvent;\n            return new CustomUnRegister(() => { UnRegister(onEvent); });\n        }\n\n        public void UnRegister(Action<T, K> onEvent)\n        {\n            mOnEvent -= onEvent;\n        }\n\n        public void Trigger(T t, K k)\n        {\n            mOnEvent?.Invoke(t, k);\n        }\n    }\n\n    public class EasyEvent<T, K, S> : IEasyEvent\n    {\n        private Action<T, K, S> mOnEvent = (t, k, s) => { };\n\n        public IUnRegister Register(Action<T, K, S> onEvent)\n        {\n            mOnEvent += onEvent;\n            return new CustomUnRegister(() => { UnRegister(onEvent); });\n        }\n\n        public void UnRegister(Action<T, K, S> onEvent)\n        {\n            mOnEvent -= onEvent;\n        }\n\n        public void Trigger(T t, K k, S s)\n        {\n            mOnEvent?.Invoke(t, k, s);\n        }\n    }\n\n    public class EasyEvents\n    {\n        private static EasyEvents mGlobalEvents = new EasyEvents();\n\n        public static T Get<T>() where T : IEasyEvent\n        {\n            return mGlobalEvents.GetEvent<T>();\n        }\n\n        public static void Register<T>() where T : IEasyEvent, new()\n        {\n            mGlobalEvents.AddEvent<T>();\n        }\n\n        private Dictionary<Type, IEasyEvent> mEvents = new Dictionary<Type, IEasyEvent>();\n\n        public void AddEvent<T>() where T : IEasyEvent, new()\n        {\n            mEvents.Add(typeof(T), new T());\n        }\n\n        public T GetEvent<T>() where T : IEasyEvent\n        {\n            IEasyEvent e;\n\n            if (mEvents.TryGetValue(typeof(T), out e))\n            {\n                return (T)e;\n            }\n\n            return default;\n        }\n\n        public T GetOrAddEvent<T>() where T : IEasyEvent, new()\n        {\n            var eType = typeof(T);\n            if (mEvents.TryGetValue(eType, out var e))\n            {\n                return (T)e;\n            }\n\n            var t = new T();\n            mEvents.Add(eType, t);\n            return t;\n        }\n    }\n\n    #endregion\n\n#if UNITY_EDITOR\n    internal class EditorMenus\n    {\n        [UnityEditor.MenuItem("QFramework/Install QFrameworkWithToolKits")]\n        public static void InstallPackageKit()\n        {\n            Application.OpenURL("https://qframework.cn/qf");\n        }\n    }\n#endif\n}\n')),(0,o.kt)("p",null,"\u5bfc\u5165\u4e4b\u540e\uff0c\u6211\u4eec\u5c06 CounterAppController \u4ee3\u7801\u6539\u6210\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\nusing UnityEngine.UI;\n\nnamespace QFramework.Example\n{\n    // \u5b9a\u4e49\u4e00\u4e2a Model \u5bf9\u8c61\n    public class CounterAppModel : AbstractModel\n    {\n        public int Count;\n        \n        protected override void OnInit()\n        {\n            Count = 0;\n        }\n    }\n    \n    // \u5b9a\u4e49\u4e00\u4e2a\u67b6\u6784\uff08\u7528\u4e8e\u7ba1\u7406\u6a21\u5757\uff09\n    public class CounterApp : Architecture<CounterApp>\n    {\n        protected override void Init()\n        {\n            this.RegisterModel(new CounterAppModel());\n        }\n    }\n\n    // Controller\n    public class CounterAppController : MonoBehaviour,IController // \u5b9e\u73b0 IController \u63a5\u53e3\n    {\n        // View\n        private Button mBtnAdd;\n        private Button mBtnSub;\n        private Text mCountText;\n\n        // Model\n        private CounterAppModel Model;\n        \n        private void Start()\n        {\n            // \u83b7\u53d6\u6a21\u578b\n            Model = this.GetModel<CounterAppModel>();\n            \n            \n            // \u7ec4\u4ef6\u83b7\u53d6\n            mBtnAdd = transform.Find("BtnAdd").GetComponent<Button>();\n            mBtnSub = transform.Find("BtnSub").GetComponent<Button>();\n            mCountText = transform.Find("CountText").GetComponent<Text>();\n            \n            // \u76d1\u542c\u8f93\u5165\n            mBtnAdd.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                Model.Count++;\n                // \u8868\u73b0\u903b\u8f91\n                UpdateView();\n            });\n            \n            mBtnSub.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                Model.Count--;\n                // \u8868\u73b0\u903b\u8f91\n                UpdateView();\n            });\n            \n            UpdateView();\n        }\n\n        void UpdateView()\n        {\n            mCountText.text = Model.Count.ToString();\n        }\n\n        /// <summary>\n        /// \u6307\u5b9a\u67b6\u6784\n        /// </summary>\n        public IArchitecture GetArchitecture()\n        {\n            return CounterApp.Interface;\n        }\n    }\n}\n\n')),(0,o.kt)("p",null,"OK\uff0c\u4ee3\u7801\u5f15\u5165\u4e86\u4e24\u4e2a\u65b0\u7684\u6982\u5ff5\uff0c\u4e00\u4e2a\u662f Architecture\uff0c\u53e6\u4e00\u4e2a\u662f Model\u3002"),(0,o.kt)("p",null,"Architecture \u7528\u4e8e\u7ba1\u7406\u6a21\u5757\uff0c\u6216\u8005\u8bf4 Architecture \u63d0\u4f9b\u4e00\u6574\u5957\u67b6\u6784\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u800c\u6a21\u5757\u7ba1\u7406\u548c\u63d0\u4f9b MVC \u53ea\u662f\u5176\u529f\u80fd\u7684\u4e00\u5c0f\u90e8\u5206\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u8fd0\u884c\u4e00\u4e0b Unity \u7ed3\u679c\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://file.liangxiegame.com/d10e7e57-cab1-47ec-a548-7b626c62ce96.png",alt:null})),(0,o.kt)("p",null,"OK\uff0c\u8fd0\u884c\u6b63\u786e\u3002"),(0,o.kt)("p",null,"\u8fd9\u7bc7\u7684\u5185\u5bb9\u5c31\u4ecb\u7ecd\u5230\u8fd9\uff0c\u6211\u4eec\u4e0a\u624b\u4e86 QFramework \u63d0\u4f9b\u7684 MVC \u67b6\u6784\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u8981\u6ce8\u610f\u4e00\u70b9\uff0c Model \u7684\u5f15\u5165\u662f\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u5171\u4eab\u7684\u95ee\u9898\uff0c\u800c\u4e0d\u662f\u8bf4\u5355\u7eaf\u7684\u8981\u628a\u6570\u636e\u548c\u8868\u73b0\u8981\u5206\u79bb\u624d\u6709\u7684 Model\uff0c\u800c\u662f\u4e3a\u4e86\u89e3\u51b3\u6570\u636e\u5171\u4eab\u7684\u95ee\u9898\u624d\u5f15\u5165\u7684 Model\u3002"),(0,o.kt)("p",null,"\u6570\u636e\u5171\u4eab\u5206\u4e3a\u4e24\u79cd\uff1a\u7a7a\u95f4\u548c\u65f6\u95f4\u4e0a\u7684\u5171\u4eab"),(0,o.kt)("p",null,"\u7a7a\u95f4\u7684\u5171\u4eab\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u591a\u4e2a Controller \u6216\u8005\u5176\u4ed6\u5730\u65b9\u90fd\u9700\u8981\u8bbf\u95ee\u6216\u4fee\u6539 Model \u91cc\u7684\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u65f6\u95f4\u4e0a\u7684\u5171\u4eab\u5c31\u662f\u5b58\u50a8\u529f\u80fd\uff0c\u5c06\u4e0a\u4e00\u6b21\u5173\u95ed App \u4e4b\u524d\u7684\u6570\u636e\u5b58\u50a8\u5230\u4e00\u4e2a\u6587\u4ef6\u91cc\uff0c\u8fd9\u6b21\u6253\u5f00\u65f6\u83b7\u5f97\u4e0a\u6b21\u5173\u95ed App \u4e4b\u524d\u7684\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u867d\u7136\u4e0a\u624b\u4e86 MVC\uff0c\u4f46\u662f\u8fd9\u6837\u7684 MVC\u8fd8\u6709\u5f88\u591a\u95ee\u9898\uff0c\u6211\u4eec\u4e0b\u4e00\u7bc7\u7ee7\u7eed\u89e3\u51b3\u3002"))}p.isMDXComponent=!0}}]);