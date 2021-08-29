const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */ module.exports = {
  title: 'Daily Gotchas',
  tagline: 'The more you know',
  url: 'https://keatmin.github.io',
  baseUrl: '/daily_gotchas/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'keatmin',
  projectName: 'daily_gotchas',
  trailingSlash: false,
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark'
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'wiki_index',
          label: 'wiki',
          position: 'left',
        },
        {to: '/gotchas', label: 'gotchas', position: 'left'},
        {
          type: 'doc',
          docId: 'knowledge_index',
          label: 'knowledge',
          position: 'left',
          docsPluginId: 'knowledge'
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'wiki',
          routeBasePath: 'wiki',
        },
        blog: {
          showReadingTime: true,
          path: 'gotchas',
          routeBasePath: 'gotchas',
          authorsMapPath: 'authors.yml',
          blogTitle: 'Daily Gotchas',
          blogDescription: "The daily gotchas that got us"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'knowledge',
        path: 'knowledge',
        routeBasePath: 'knowledge',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};
