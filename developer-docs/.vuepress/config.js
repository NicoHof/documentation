module.exports = {
  title: 'Strapi Developer Documentation',
  port: 8081,
  description: 'The headless CMS developers love.',
  base: '/documentation/developer-docs/',
  plugins: {
    '@vuepress/medium-zoom': {},
    'vuepress-plugin-element-tabs': {},
    '@vuepress/google-analytics': {
      ga: 'UA-54313258-1',
    },
    seo: {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://strapi.io/assets/favicon-32x32.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Strapi Developer Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://strapi.io/documentation/developer-docs/',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'The headless CMS developers love.',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://strapi.io/documentation/developer-docs/assets/meta.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:article:author',
        content: 'strapi',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://strapi.io/documentation/developer-docs/',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:site',
        content: '@strapijs',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: 'Strapi Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: 'The headless CMS developers love.',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'http://strapi.io/assets/images/strapi-website-preview.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      {
        text: 'Strapi Version',
        items: [
          {
            text: 'Latest - 3.x.x',
            link: '/latest/',
          },
        ],
      },
      {
        text: 'Documentation',
        items: [
          {
            text: 'Developer Docs',
            items: [
              {
                text: 'Getting Started',
                link: '/latest/getting-started/introduction.html',
              },
              {
                text: 'Content API',
                link: '/latest/content-api/parameters.html',
              },
              {
                text: 'Configuration',
                link: '/latest/concepts/configurations.html',
              },
              {
                text: 'Installation',
                link: '/latest/getting-started/installation.html',
              },
              {
                text: 'Deployment',
                link: '/latest/getting-started/deployment.html',
              },
              {
                text: 'Migration',
                link: '/latest/migration-guide/',
              },
            ],
          },
          {
            text: 'User Guide',
            items: [
              {
                text: 'Getting Started',
                link:
                  'https://strapi.io/documentation/user-docs/latest/getting-started/introduction.html',
              },
              {
                text: 'Content Manager',
                link:
                  'https://strapi.io/documentation/user-docs/latest/content-manager/introduction-to-content-manager.html',
              },
              {
                text: 'Content-Types Builder',
                link: 'https://strapi.io/documentation/user-docs/latest/content-types-builder/introduction-to-content-types-builder.html',
              },
              {
                text: 'Users, Roles, and Permissions',
                link:
                  'https://strapi.io/documentation/user-docs/latest/users-roles-permissions/introduction-to-users-roles-permissions.html',
              },
              {
                text: 'Plugins',
                link: 'https://strapi.io/documentation/user-docs/latest/plugins/introduction-to-plugins.html',
              },
            ],
          },
        ],
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Strapi',
            items: [
              {
                text: 'Website',
                link: 'https://strapi.io',
              },
              {
                text: 'Blog',
                link: 'https://strapi.io/blog',
              },
              {
                text: 'StrapiConf 2021',
                link: 'https://www.strapi.io/strapi-conf-2021'
              },
            ],
          },
          {
            text: 'Community',
            items: [
              {
                text: 'Forum',
                link: 'https://forum.strapi.io',
              },
              {
                text: 'Slack',
                link: 'https://slack.strapi.io',
              },
              {
                text: 'Awesome-Strapi',
                link: 'https://github.com/strapi/awesome-strapi',
              },
            ],
          },
          {
            text: 'Resources',
            items: [
              {
                text: 'Tutorials',
                link: 'https://strapi.io/tutorials',
              },
              {
                text: 'Academy',
                link: 'https://academy.strapi.io/',
              },
            ],
          },
        ],
      },
    ],
    repo: 'strapi/documentation',
    docsDir: 'developer-docs',
    docsBranch: 'documentation',
    algolia: {
      apiKey: 'a93451de224096fb34471c8b8b049de7',
      indexName: 'strapi',
    },
    editLinks: true,
    editLinkText: 'Improve this page',
    serviceWorker: true,
    sidebarDepth: 1,
    sidebar: {
      '/latest/': [
        {
          collapsable: false,
          title: 'Getting Started',
          children: [
            ['/latest/getting-started/introduction', 'Introduction'],
            ['/latest/getting-started/quick-start', 'Quick Start Guide'],
            ['/latest/getting-started/contributing', 'Contributing'],
            ['/latest/getting-started/troubleshooting', 'Troubleshooting'],
            ['/latest/getting-started/usage-information', 'Telemetry'],
          ],
        },
        {
          collapsable: false,
          title: 'Setup & Deployment',
          children: [
            ['/latest/setup-deployment-guides/installation.md', 'Installation'],
            ['/latest/setup-deployment-guides/framework-configurations.md', 'Framework configuration'],
            ['/latest/setup-deployment-guides/customization.md', 'Customization'],
            ['/latest/setup-deployment-guides/deployment.md', 'Deployment'],
          ]
        },
        {
          collapsable: false,
          title: 'Update & Migration',
          children: [
            ['/latest/update-migration-guides/update-version.md', 'Update'],
            ['/latest/update-migration-guides/migration-guides.md', 'Migration'],
          ]
        },
        {
          collapsable: false,
          title: 'Developer Resources',
          children: [
            ['/latest/developer-resources/content-api/content-api.md', 'Content API'],
            ['/latest/developer-resources/cli/CLI', 'Command Line Interface'],
            ['/latest/developer-resources/global-strapi/api-reference', 'Global Strapi API Reference'],
          ],
        },
        {
          collapsable: true,
          title: 'Jim Recipes',
          children: [
            '/latest/guides/api-token',
            '/latest/guides/auth-request',
            '/latest/guides/count-graphql',
            '/latest/guides/slug',
            '/latest/guides/is-owner',
            '/latest/guides/custom-admin',
            '/latest/guides/custom-data-response',
            '/latest/guides/databases',
            '/latest/guides/draft',
            '/latest/guides/error-catching',
            '/latest/guides/external-data',
            '/latest/guides/jwt-validation',
            '/latest/guides/process-manager',
            '/latest/guides/scheduled-publication',
            '/latest/guides/secure-your-app',
            '/latest/guides/send-email',
            '/latest/guides/registering-a-field-in-admin',
            '/latest/guides/client',
            '/latest/guides/unit-testing',
          ],
        },
      ],
    },
  },
};
