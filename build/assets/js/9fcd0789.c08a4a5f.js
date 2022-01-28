"use strict";(self.webpackChunkqframework_cn=self.webpackChunkqframework_cn||[]).push([[629],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),d=s(t),m=o,C=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(C,a(a({ref:e},p),{},{components:t})):r.createElement(C,a({ref:e},p))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:o,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3883:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={},l="6. \u5f15\u5165 System",s={unversionedId:"quick-start/system",id:"quick-start/system",title:"6. \u5f15\u5165 System",description:"\u5728\u4e0a\u4e00\u7bc7\uff0c\u6211\u4eec\u5f15\u5165\u4e86 Utility \u5c42\uff0c\u4ee3\u7801\u5982\u4e0b:",source:"@site/docs/quick-start/6. system.md",sourceDirName:"quick-start",slug:"/quick-start/system",permalink:"/docs/quick-start/system",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start/6. system.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5. \u5f15\u5165 Utility",permalink:"/docs/quick-start/utility"},next:{title:"7. \u5c42\u7ea7\u7684\u8bbf\u95ee\u89c4\u5219\u3001BindableProperty\u3001\u4f9d\u8d56\u5012\u7f6e\u539f\u5219\u3001Query",permalink:"/docs/quick-start/rules_bindableproperty_dip"}},p=[],c={toc:p};function d(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"6-\u5f15\u5165-system"},"6. \u5f15\u5165 System"),(0,i.kt)("p",null,"\u5728\u4e0a\u4e00\u7bc7\uff0c\u6211\u4eec\u5f15\u5165\u4e86 Utility \u5c42\uff0c\u4ee3\u7801\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\nusing UnityEngine.UI;\n\nnamespace QFramework.Example\n{\n    // \u5b9a\u4e49\u4e00\u4e2a Model \u5bf9\u8c61\n    public class CounterAppModel : AbstractModel\n    {\n        public int Count;\n\n        protected override void OnInit()\n        {\n            Count = this.GetUtility<Storage>().LoadInt(nameof(Count));\n\n            // \u4e5f\u53ef\u4ee5\u901a\u8fc7 CounterApp.Interface \u76d1\u542c\u6570\u636e\u53d8\u66f4\u4e8b\u4ef6\n            CounterApp.Interface.RegisterEvent<CountChangeEvent>(e =>\n            {\n                this.GetUtility<Storage>().SaveInt(nameof(Count),Count);\n            });\n        }\n    }\n    \n    // \u5b9a\u4e49\u5b58\u50a8 Utility \u5c42\n    public class Storage : IUtility\n    {\n        public void SaveInt(string key, int value)\n        {\n            PlayerPrefs.SetInt(key,value);\n        }\n\n        public int LoadInt(string key, int defaultValue = 0)\n        {\n            return PlayerPrefs.GetInt(key, defaultValue);\n        }\n    }\n    \n    // \u5b9a\u4e49\u4e00\u4e2a\u67b6\u6784\uff08\u7528\u4e8e\u7ba1\u7406\u6a21\u5757\uff09\n    public class CounterApp : Architecture<CounterApp>\n    {\n        protected override void Init()\n        {\n            this.RegisterModel(new CounterAppModel());\n            \n            // \u6ce8\u518c\u5b58\u50a8\u5de5\u5177\u5bf9\u8c61\n            this.RegisterUtility(new Storage());\n        }\n    }\n\n    // \u5b9a\u4e49\u6570\u636e\u53d8\u66f4\u4e8b\u4ef6\n    public struct CountChangeEvent\n    {\n        \n    }\n    \n    // \u5f15\u5165 Command\n    public class IncreaseCountCommand : AbstractCommand\n    {\n        protected override void OnExecute()\n        {\n            this.GetModel<CounterAppModel>().Count++;\n            this.SendEvent<CountChangeEvent>();\n        }\n    }\n    \n    public class DecreaseCountCommand : AbstractCommand\n    {\n        protected override void OnExecute()\n        {\n            this.GetModel<CounterAppModel>().Count--;\n            this.SendEvent<CountChangeEvent>();\n        }\n    }\n\n    // Controller\n    public class CounterAppController : MonoBehaviour,IController // \u5b9e\u73b0 IController \u63a5\u53e3\n    {\n        // View\n        private Button mBtnAdd;\n        private Button mBtnSub;\n        private Text mCountText;\n\n        // Model\n        private CounterAppModel Model;\n        \n        private void Start()\n        {\n            // \u83b7\u53d6\u6a21\u578b\n            Model = this.GetModel<CounterAppModel>();\n            \n            \n            // \u7ec4\u4ef6\u83b7\u53d6\n            mBtnAdd = transform.Find("BtnAdd").GetComponent<Button>();\n            mBtnSub = transform.Find("BtnSub").GetComponent<Button>();\n            mCountText = transform.Find("CountText").GetComponent<Text>();\n            \n            // \u76d1\u542c\u8f93\u5165\n            mBtnAdd.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                this.SendCommand<IncreaseCountCommand>(); // \u6ca1\u6709\u53c2\u6570\u6784\u9020\u7684\u547d\u4ee4\u652f\u6301\u6cdb\u578b\n            });\n            \n            mBtnSub.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                this.SendCommand(new DecreaseCountCommand()); // \u4e5f\u652f\u6301\u76f4\u63a5\u4f20\u5165\u5bf9\u8c61\uff08\u65b9\u4fbf\u901a\u8fc7\u6784\u9020\u4f20\u53c2)\n            });\n            \n            UpdateView();\n            \n            // \u8868\u73b0\u903b\u8f91\n            this.RegisterEvent<CountChangeEvent>(e =>\n            {\n                UpdateView();\n            }).UnRegisterWhenGameObjectDestroyed(gameObject);\n        }\n\n        void UpdateView()\n        {\n            mCountText.text = Model.Count.ToString();\n        }\n\n        /// <summary>\n        /// \u6307\u5b9a\u67b6\u6784\n        /// </summary>\n        public IArchitecture GetArchitecture()\n        {\n            return CounterApp.Interface;\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5047\u8bbe\u4e00\u4e2a\u529f\u80fd\uff0c\u5373\u7b56\u5212\u63d0\u51fa\u4e86\u4e00\u4e2a\u6210\u5c31\u8fbe\u6210\u7684\u529f\u80fd\uff0c\u5373\u70b9\u51fb\u5341\u6b21\u89e6\u53d1\u4e00\u4e2a \u70b9\u51fb\u8fbe\u4eba\u6210\u5c31\uff0c\u70b9\u51fb\u4e8c\u5341\u6b21\u89e6\u53d1\u4e00\u4e2a \u70b9\u51fb\u4e13\u5bb6\u6210\u5c31\u3002"),(0,i.kt)("p",null,"\u903b\u8f91\u542c\u8d77\u6765\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u76f4\u63a5\u5728 IncreaseCountCommand \u91cc\u7f16\u5199\u5373\u53ef\uff0c\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'    public class IncreaseCountCommand : AbstractCommand\n    {\n        protected override void OnExecute()\n        {\n            this.GetModel<CounterAppModel>().Count++;\n            this.SendEvent<CountChangeEvent>();\n\n            if (this.GetModel<CounterAppModel>().Count == 10)\n            {\n                Debug.Log("\u89e6\u53d1 \u70b9\u51fb\u8fbe\u4eba \u6210\u5c31");\n            }\n            else if (this.GetModel<CounterAppModel>().Count == 20)\n            {\n                Debug.Log("\u89e6\u53d1 \u70b9\u51fb\u4e13\u5bb6 \u6210\u5c31");\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"\u4ee3\u7801\u5f88\u7b80\u5355\uff0c\u8fd0\u884c\u7ed3\u679c\u4e5f\u6ca1\u5565\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u8fd9\u65f6\u5019\u7b56\u5212\u8bf4\uff0c\u5e0c\u671b\u518d\u589e\u52a0\u4e00\u4e2a\u5f53\u70b9\u51fb - \u53f7\u5230 -10 \u65f6\uff0c\u89e6\u53d1\u4e00\u4e2a \u70b9\u51fb\u83dc\u9e1f\u6210\u5c31\uff0c\u7136\u540e\u7b56\u5212\u8fd8\u8bf4\uff0c\u70b9\u51fb\u8fbe\u4eba \u548c \u70b9\u51fb\u4e13\u5bb6 \u6210\u5c31\u592a\u5bb9\u6613\u8fbe\u6210\u4e86\uff0c\u9700\u8981\u5206\u522b\u6539\u6210 1000 \u6b21 \u548c 2000 \u6b21\u3002"),(0,i.kt)("p",null,"\u800c\u8fd9\u6b21\u7b56\u5212\u63d0\u51fa\u7684\u9700\u6c42\uff0c\u9700\u8981\u6211\u4eec\u4fee\u6539\u4e24\u5904\u7684\u4ee3\u7801\uff0c\u5373 IncreaseCountCommand \u91cc\u9700\u8981\u4fee\u6539\u6570\u503c\u4e3a 1000 \u548c 2000\uff0c\u7136\u540e\u5728 DecreaseCountCommand \u589e\u52a0\u4e00\u4e2a\u5224\u65ad\u903b\u8f91\u3002"),(0,i.kt)("p",null,"\u4e00\u6b21\u63d0\u51fa\u7684\u9700\u6c42\uff0c\u7ed3\u679c\u9020\u6210\u4e86\u591a\u51fa\u4fee\u6539\uff0c\u8fd9\u8bf4\u660e\u4ee3\u7801\u6709\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u50cf\u8fd9\u79cd\u89c4\u5219\u7c7b\u7684\u903b\u8f91\uff0c\u6bd4\u5982\u5206\u6570\u7edf\u8ba1\u6216\u8005\u6210\u5c31\u7edf\u8ba1\u7b49\u4ee3\u7801\uff0c\u4e0d\u9002\u5408\u5206\u6563\u5199\u5728 Command \u91cc\u76d1\u542c\uff0c\u800c\u662f\u9002\u5408\u5728\u4e00\u4e2a\u5bf9\u8c61\u91cc\u8fdb\u884c\u76d1\u542c\uff0c\u800c\u8fd9\u79cd\u5bf9\u8c61\uff0c\u5728 QFramework \u91cc\u6709\u63d0\u4f9b\uff0c\u5c31\u662f System \u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u4ee3\u7801\u5982\u4e0b;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\nusing UnityEngine.UI;\n\nnamespace QFramework.Example\n{\n    // \u5b9a\u4e49\u4e00\u4e2a Model \u5bf9\u8c61\n    public class CounterAppModel : AbstractModel\n    {\n        public int Count;\n\n        protected override void OnInit()\n        {\n            Count = this.GetUtility<Storage>().LoadInt(nameof(Count));\n\n            // \u4e5f\u53ef\u4ee5\u901a\u8fc7 CounterApp.Interface \u76d1\u542c\u6570\u636e\u53d8\u66f4\u4e8b\u4ef6\n            CounterApp.Interface.RegisterEvent<CountChangeEvent>(e =>\n            {\n                this.GetUtility<Storage>().SaveInt(nameof(Count),Count);\n            });\n        }\n    }\n    \n    public class AchievementSystem : AbstractSystem\n    {\n        protected override void OnInit()\n        {\n            var model = this.GetModel<CounterAppModel>();\n            \n            this.RegisterEvent<CountChangeEvent>(e =>\n            {\n\n                if (model.Count == 10)\n                {\n                    Debug.Log("\u89e6\u53d1 \u70b9\u51fb\u8fbe\u4eba \u6210\u5c31");\n                } else if (model.Count == 20)\n                {\n                    Debug.Log("\u89e6\u53d1 \u70b9\u51fb\u4e13\u5bb6 \u6210\u5c31");\n                } else if (model.Count == -10)\n                {\n                    Debug.Log("\u89e6\u53d1 \u70b9\u51fb\u83dc\u9e1f \u6210\u5c31");\n                }\n            });\n        }\n    }\n\n    // \u5b9a\u4e49\u5b58\u50a8 Utility \u5c42\n    public class Storage : IUtility\n    {\n        public void SaveInt(string key, int value)\n        {\n            PlayerPrefs.SetInt(key,value);\n        }\n\n        public int LoadInt(string key, int defaultValue = 0)\n        {\n            return PlayerPrefs.GetInt(key, defaultValue);\n        }\n    }\n    \n    // \u5b9a\u4e49\u4e00\u4e2a\u67b6\u6784\uff08\u7528\u4e8e\u7ba1\u7406\u6a21\u5757\uff09\n    public class CounterApp : Architecture<CounterApp>\n    {\n        protected override void Init()\n        {\n            // \u6ce8\u518c\u6210\u5c31\u7cfb\u7edf\n            this.RegisterSystem(new AchievementSystem());\n            \n            this.RegisterModel(new CounterAppModel());\n            \n            // \u6ce8\u518c\u5b58\u50a8\u5de5\u5177\u5bf9\u8c61\n            this.RegisterUtility(new Storage());\n        }\n    }\n\n    // \u5b9a\u4e49\u6570\u636e\u53d8\u66f4\u4e8b\u4ef6\n    public struct CountChangeEvent\n    {\n        \n    }\n    \n    // \u5f15\u5165 Command\n    public class IncreaseCountCommand : AbstractCommand\n    {\n        protected override void OnExecute()\n        {\n            this.GetModel<CounterAppModel>().Count++;\n            this.SendEvent<CountChangeEvent>();\n        }\n    }\n    \n    public class DecreaseCountCommand : AbstractCommand\n    {\n        protected override void OnExecute()\n        {\n            this.GetModel<CounterAppModel>().Count--;\n            this.SendEvent<CountChangeEvent>();\n        }\n    }\n\n    // Controller\n    public class CounterAppController : MonoBehaviour,IController // \u5b9e\u73b0 IController \u63a5\u53e3\n    {\n        // View\n        private Button mBtnAdd;\n        private Button mBtnSub;\n        private Text mCountText;\n\n        // Model\n        private CounterAppModel Model;\n        \n        private void Start()\n        {\n            // \u83b7\u53d6\u6a21\u578b\n            Model = this.GetModel<CounterAppModel>();\n            \n            \n            // \u7ec4\u4ef6\u83b7\u53d6\n            mBtnAdd = transform.Find("BtnAdd").GetComponent<Button>();\n            mBtnSub = transform.Find("BtnSub").GetComponent<Button>();\n            mCountText = transform.Find("CountText").GetComponent<Text>();\n            \n            // \u76d1\u542c\u8f93\u5165\n            mBtnAdd.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                this.SendCommand<IncreaseCountCommand>(); // \u6ca1\u6709\u53c2\u6570\u6784\u9020\u7684\u547d\u4ee4\u652f\u6301\u6cdb\u578b\n            });\n            \n            mBtnSub.onClick.AddListener(() =>\n            {\n                // \u4ea4\u4e92\u903b\u8f91\n                this.SendCommand(new DecreaseCountCommand()); // \u4e5f\u652f\u6301\u76f4\u63a5\u4f20\u5165\u5bf9\u8c61\uff08\u65b9\u4fbf\u901a\u8fc7\u6784\u9020\u4f20\u53c2)\n            });\n            \n            UpdateView();\n            \n            // \u8868\u73b0\u903b\u8f91\n            this.RegisterEvent<CountChangeEvent>(e =>\n            {\n                UpdateView();\n            }).UnRegisterWhenGameObjectDestroyed(gameObject);\n        }\n\n        void UpdateView()\n        {\n            mCountText.text = Model.Count.ToString();\n        }\n\n        /// <summary>\n        /// \u6307\u5b9a\u67b6\u6784\n        /// </summary>\n        public IArchitecture GetArchitecture()\n        {\n            return CounterApp.Interface;\n        }\n    }\n}\n\n')),(0,i.kt)("p",null,"\u4ee3\u7801\u8d8a\u6765\u8d8a\u591a\uff0c\u4f46\u662f\u4e0d\u96be\u3002"),(0,i.kt)("p",null,"\u8fd0\u884c\u6e38\u620f,\u7b14\u8005\u70b9\u51fb\u7ed3\u679c\u5982\u4e0b:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://file.liangxiegame.com/a1adc1e8-6bb9-49c1-ae74-e0e55673e865.png",alt:null})),(0,i.kt)("p",null,"\u7ed3\u679c\u6ca1\u95ee\u9898\u3002"),(0,i.kt)("p",null,"OK\uff0c\u7b14\u8005\u5199\u7684\u6210\u5c31\u7cfb\u7edf\u975e\u5e38\u7b80\u964b\uff0c\u5b9e\u9645\u4e0a\u7684\u6210\u5c31\u7cfb\u7edf\u53ef\u4ee5\u5199\u5f97\u975e\u5e38\u5b8c\u5584\uff0c\u6bd4\u5982\u53ef\u4ee5\u5728\u6210\u5c31\u7cfb\u7edf\u91cc\u8fdb\u884c\u5b58\u50a8\u52a0\u8f7d\u7b49\u64cd\u4f5c\uff0c\u800c\u6b64\u6587\u7684\u6210\u5c31\u7cfb\u7edf\u4ec5\u4ec5\u662f\u5c55\u793a\u76ee\u7684\u3002"),(0,i.kt)("p",null,"\u5230\u6b64\uff0c\u6211\u4eec\u5c31\u63a5\u89e6\u5230\u4e86 QFramework \u67b6\u6784\u6240\u63d0\u4f9b\u7684\u6838\u5fc3\u6982\u5ff5\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u7ed9\u51fa\u4e00\u4e2a\u5c42\u7ea7\u56fe\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://file.liangxiegame.com/39bdcf54-0240-46e0-8f68-9eb708505695.png",alt:null})),(0,i.kt)("p",null,"\u76ee\u524d\u5206\u4e3a\u56db\u4e2a\u5c42\u7ea7\uff0c\u5373"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8868\u73b0\u5c42\uff1aIController"),(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5c42\uff1aISystem"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5c42\uff1aIModel"),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u5177\u5c42\uff1aIUtility")),(0,i.kt)("p",null,"\u5f53\u7136\u76ee\u524d\u4ec5\u4ec5\u662f\u63a5\u89e6\u800c\u5df2\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u8fdb\u884c\u7ec6\u5316\uff0c\u56e0\u4e3a\u6709\u5f88\u591a\u7ec6\u8282\u6ca1\u6709\u4ecb\u7ecd\u5230\u3002"),(0,i.kt)("p",null,"\u5728\u4e0b\u4e00\u7bc7\u6211\u4eec\u7ee7\u7eed\u3002"))}d.isMDXComponent=!0}}]);