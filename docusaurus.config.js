module.exports = {
  title: "Our HackIT Approaches",
  tagline:
    "",
  url: "https://github.com/LBHackney-IT/hackit-approaches",
  baseUrl: "/hackit-approaches/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "hackit-approaches",
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "Our HackIT Approaches",
      logo: {
        alt: "Our HackIT Approaches",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/hackit-approaches",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: 'KNMFHOJ4X2',
      apiKey: '4dc9b48c851c09d44e9cf356d5425867',
      indexName: 'hackney',
      searchPagePath: 'false',
      searchParameters: {
        filters: "playbook_site:hackit-approaches"
      }
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/hackit-approaches/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass"],
};