import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "open://",
  description: "OpenWorkingGroup.org community website.",
  cleanUrls: true,
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-20E32PE18Z",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-20E32PE18Z');`,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: "Projects", link: "/projects" },
      { text: "Communities", link: "/communities" },
      { text: "Contribute", link: "/about" },
      { text: "About", link: "/about" },
    ],
    externalLinkIcon: true,
    // search: { provider: "local" },
    socialLinks: [
      { icon: "github", link: "https://github.com/OpenWorkingGroup" },
    ],
    footer: {
      copyright: "Copyright © Open Working Group",
    },
  },
});
