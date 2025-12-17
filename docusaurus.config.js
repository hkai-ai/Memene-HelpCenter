// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Memene 帮助中心',
  tagline: '一站式帮助中心',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://memene.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/memene/help/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HKAI', // Usually your GitHub org/user name.
  projectName: 'Memene', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  headTags:[
    {
      tagName:'link',
      attributes:{
        rel:'prefetch',
        href:'https://selfhost.memene.cn/assets/img/memene/MemeneMiniprogramQRCode.jpg',
        as:'image',
        type:'image/jpeg',
        crossOrigin:'anonymous',
      }
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
         //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/img/logo.png',
      colorMode: {
        defaultMode: 'light',      // 👈 默认使用亮色（白色）
        disableSwitch: true,       // 👈 核心：禁止切换（按钮就会消失）
        respectPrefersColorScheme: false, // 忽略用户系统的设置，强制统一
    
      },
      navbar: {
        title: 'Memene 帮助文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',

        },
        items: [
        

         {
            label: '更新日志',
            href: 'https://memene.cn/changelog', // 👈 把这里换成你们真实的更新日志网址
            position: 'right',
            target: '_blank', // (可选) 如果你想在新窗口打开，就加上这一行
          },
          // ... 后面的代码 ...
          {href: 'https://memene.cn', label: '官网主页', position: 'right'},
        ],
      },
    }),
    // 👇👇👇 从这里开始复制 👇👇👇
  
  // 客户端模块 - 图片放大功能
  clientModules: [
    require.resolve('./src/theme/zoom.js'),
  ],

  // 插件配置必须放在这里，和 themeConfig 平级！
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        docsDir: './docs',
        docsRouteBasePath: '/',
      },
    ],
  ],
};


export default config;
