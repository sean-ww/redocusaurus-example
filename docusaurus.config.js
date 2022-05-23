const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Example Documentation',
  tagline: 'Example Documentation...',
  url: 'https://docs.example.com',
  baseUrl: '/',
  noIndex: process.env.ENV !== 'prod',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://www.example.com/favicon.ico',
  organizationName: 'example',
  projectName: 'example-docs',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Example Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'API',
          to: '/api/',
        },
        {
          href: 'https://support.example.com/',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Example. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      'redocusaurus',
      {
        specs: [{
          routePath: '/api/',
          specUrl: 'https://example.net/api.json'
        }],
        theme: {
          primaryColor: '#F46665',
          redocOptions: { disableSearch: false, suppressWarnings: false, hideDownloadButton: false },
        }
      }
    ],
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
