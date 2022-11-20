// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DivineMC",
  tagline:
    "DivineMC is the fork of Paper compatible with Spigot plugins, offering best performance for your server.",
  url: "https://divine.bxteam.gq",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "DivineMC", // Usually your GitHub org/user name.
  projectName: "DivineMC", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/DivineMC/Website/edit/main/",
          // includeCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/DivineMC/Website/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleAnalytics: {
          trackingID: "UA-168263036-5",
          anonymizeIP: true,
        },
      },
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      },
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    navbar: {
      hideOnScroll: true,
      title: "DivineMC",
      logo: {
        alt: "DivineMC Logo",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          position: "right",
          type: "docsVersionDropdown",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/DivineMC/DivineMC",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "DivineMC",
          items: [
            {
              label: "FAQ",
              to: "docs/faq",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Docs",
              to: "docs",
            },
            {
              label: "Releases",
              href: "https://github.com/DivineMC/DivineMC/releases",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/DivineMC",
            },
            {
              label: "Discord",
              href: "https://discord.gg/p7cxhw7E2M",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DivineMC & BX Team. All rights reserved. Powered by Netlify`,
    },
  },
};

module.exports = config;
