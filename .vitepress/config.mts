import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Working Group",
  description: "OpenWorkingGroup.org community website.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Communities", link: "/communities" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "Projects",
        link: " /projects",
        items: [
          {
            text: "Open Authenticator",
            link: "projects#open-authenticator",
          },
          {
            text: "OpenGIX",
            link: "projects#opengix",
          },
          {
            text: "TradeBender",
            link: "projects#tradebender",
          },
        ],
      },
      {
        text: "Communities",
        link: "/communities",
        items: [
          {
            text: "Open Wine Initiative",
            link: "/communities#open-wine-initiative",
          },
          { text: "BuyersBeware.org", link: "/communities#buyersbeware.org" },
        ],
      },
    ],

    externalLinkIcon: true,

    search: { provider: "local" },

    socialLinks: [
      { icon: "github", link: "https://github.com/OpenWorkingGroup" },
    ],

    footer: {
      copyright:
        "Copyright © " + new Date().getFullYear() + " Open Working Group",
    },
  },
});
