import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Working Group",
  description: "OpenWorkingGroup.org community website.",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Communities", link: "/communities" },
      { text: "About", link: "/about" },
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
