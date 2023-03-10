import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AutoX.js",
  description: "AutoX.js 文档",
  head: [["link", { rel: "icon", href: "./images/logo.png" }]],
  //主题配置
  theme: defaultTheme({
    //导航栏
    navbar: [
      {
        text: "文档",
        link: "documentation.md",
      },
      {
        text: "简介",
        link: "overview.md",
      },
    ],
    //logo
    logo: "/images/logo.png",
    //仓库
    repo: "https://github.com/kkevsekk1/AutoX",
    //仓库标签
    repoLabel: "AutoX",

    //侧边栏
    sidebar: [
      "documentation.md",
      "globals.md",
      "console.md",
      "app.md",
      "device.md",
      "widgetsBasedAutomation.md",
      "coordinatesBasedAutomation.md",
      "keys.md",
      "files.md",
      "http.md",
      "websocket.md",
      "storages.md",
      "timers.md",
      "threads.md",
      "dialogs.md",
      "floaty.md",
      "ui.md",
      "canvas.md",
      "engines.md",
      "modules.md",
      {
        text: "OCR",
        collapsible: true,
        children: ["paddle.md", "gmlkit.md"],
      },
      // "AI.md",
      "images.md",
      "events.md",
      "base64.md",
      "crypto.md",
      "zips.md",
      "media.md",
      "sensors.md",
      "continuation.md",
      "webViewAndHtml.md",
      "shell.md",
      "workWithJava.md",
      "qa.md",
    ],

    sidebarDepth: 6,
    //搜索插件
    plugins: [searchPlugin()],
  }),
});
