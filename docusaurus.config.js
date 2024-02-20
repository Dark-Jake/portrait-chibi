// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portrait Cards - Chibis',
  tagline: "Portraits Card DarkJake's version",
  url: 'http://github.com',
  baseUrl: '/portrait-chibi/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Dark-Jake', // Usually your GitHub org/user name.
  projectName: 'portrait-chibi', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-117136430-6'
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Portrait Generator',
        logo: {
          alt: 'DarkJake Logo',
          src: 'img/logo.webp',
          width: 32,
          height: 32
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'DarkJake',
          },
          {
            href: 'https://discord.gg/YENa4TDxhu',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Teoriti Carcher ツ',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Excelverso 2.0',
                href: 'https://discord.gg/YENa4TDxhu',
              },
            ],
          },
          {
            title: 'Support me',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCD3WTgiVRYHquaeXrojhyTg',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@animadogi',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/darkjake',
              }
            ]
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python', 'R', 'javascript']
      }
    }),
};

module.exports = config;