// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'M&M 2023 Presentation',
  tagline: 'Simultaneous Electrostatic and Magnetic Vector Potential Phase Retrieval Using Electron Ptychography',
  favicon: 'img/favicon.ico',
  customFields: {
    author: "Dr. Georgios Varnavides",
    affiliation: "UCB, LBNL",
  },

  // Set the production url of your site here
  url: 'https://gvarnavi.github.io',
  baseUrl: '/2023mm-presentation/',

  organizationName: 'gvarnavi', // Usually your GitHub org/user name.
  projectName: '2023mm-presentation', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid:true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      ({
        docs: {
	  path: 'slides/',
          routeBasePath: 'slides/',
          sidebarPath: require.resolve('./sidebars.js'),
	  remarkPlugins: [math],
	  rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
	sidebar:{
	  hideable: true,
	  autoCollapseCategories: false,
	}
      },
      navbar: {
        title: 'M&M 2023 Presentation',
        logo: {
          alt: 'Presentations Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
	    to: 'slides/intro/',
            position: 'left',
            label: 'Slides',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Georgios Varnavides`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
