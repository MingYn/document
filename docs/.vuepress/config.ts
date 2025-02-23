import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";
import { navbar, sidebar } from "./configs";

import { path } from "@vuepress/utils";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig<DefaultThemeOptions>({
  // logo: "https://vuejs.org/images/logo.png",

  lang: "zh-CN",
  title: "南邮通达科协学习站",
  description: "Just playing around",
  head: [["link", { rel: "stylesheet", href: "/assets/css/style.css" }]],

  themeConfig: {
    repo: "nytdc-sast/document",
    docsDir: "docs",

    navbar: navbar.zh,
    sidebar: sidebar.zh,

    // ----------- i18n Start -----------
    // page meta
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",
    // custom containers
    tip: "提示",
    warning: "注意",
    danger: "警告",
    // 404 page
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
      "你再打开信不信我用 Log4j 黑了你的电脑？",
    ],
    backToHome: "返回首页",
    // a11y
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
    // ----------- i18n End -----------

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },
  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-QXHPDB4HM4",
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
    ],
    [
      "@vuepress/register-components",
      {
        components: {
        },
      },
    ],
  ],
});
