module.exports = {
  title: "QFramework",
  tagline: "让 Unity 开发更简单，更通用，更流行。",
  url: "https://furion.icu",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "liangxiegame Co.,Ltd",
  projectName: "QFramework",
  scripts: [
    '/furion/script/baidutongji.js'
  ],
  themeConfig: {
    prism: {
      additionalLanguages: ["powershell", "csharp", "sql","shell"],
      // theme: require("prism-react-renderer/themes/github"),
      // darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    algolia: {
      apiKey: "97723a21d903df7ca5ea618b160f03c6",
      indexName: "qframework",
      contextualSearch: true,
    },
    navbar: {
      title: "QFramework",
      logo: {
        alt: "QFramework Logo",
        src: "img/furionlogo.png",
      },
      hideOnScroll: true,
      items: [
        // {
        //   type: "docsVersionDropdown",
        //   position: "left",
        // },
        {
          to: "docs",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        // {
        //   to: "docs/global/app",
        //   activeBasePath: "docs/global",
        //   label: "静态类",
        //   position: "left",
        // },
        // {
        //   to: "docs/settings/appsettings",
        //   activeBasePath: "docs/settings",
        //   label: "配置",
        //   position: "left",
        // },
        // { to: "blog", label: "博客", position: "left" },
        // {
        //   to: "docs/upgrade",
        //   activeBasePath: "docs/upgrade",
        //   label: "更新日志",
        //   position: "left",
        // },
        // {
        //   label: "视频",
        //   position: "right",
        //   href: "https://space.bilibili.com/695987967",
        // },
        // {
        //   label: "工具",
        //   position: "right",
        //   items: [
        //     {
        //       label: "代码生成器",
        //     },
        //   ],
        // },
        // {
        //   href: "https://gitee.com/dotnetchina/Furion/board",
        //   label: "看板",
        //   position: "right",
        // },
        // {
        //   label: "耻辱柱",
        //   position: "right",
        //   to: "docs/pillar-of-humiliation",
        //   activeBasePath: "docs/pillar-of-humiliation",
        // },
        {
          label: "源码",
          position: "right",
          items: [
            {
              label: "Gitee",
              href: "https://gitee.com/dotnetchina/Furion",
            },
            {
              label: "GitHub",
              href: "https://github.com/MonkSoul/Furion",
            },
          ],
        },
        { label: "社区", position: "right", href: "https://gitee.com/dotnetchina" },
        {
          label: "案例✨",
          position: "right",
          to: "docs/case",
          activeBasePath: "docs/case",
        },
        {
          label: "支持",
          position: "right",
          to: "docs/donate",
          activeBasePath: "docs/donate",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "入门",
              to: "docs/get-start",
            },
            {
              label: "指南",
              to: "docs",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "讨论",
              href: "https://gitee.com/dotnetchina/Furion/issues",
            },
            {
              label: "看板",
              href: "https://gitee.com/dotnetchina/Furion/board",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "blog",
            },
            {
              label: "仓库",
              href: "https://gitee.com/dotnetchina/Furion",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear() - 1
        }-${new Date().getFullYear()} 百小僧, Baiqian Co.,Ltd.`,
      logo: {
        src: "img/chinadotnet.png",
        href: "https://gitee.com/dotnetchina",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://gitee.com/dotnetchina/Furion/tree/net6/handbook/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://gitee.com/dotnetchina/Furion/tree/net6/handbook/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ]
};
