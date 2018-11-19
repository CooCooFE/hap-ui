module.exports = {
  base: '/',
  title: 'hap-ui',
  description: '快应用UI组件库，简洁，易用，高效',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
      displayAllHeaders: true,
      sidebarDepth: 0,
      nav:
        [
          {text: '指南', link: '/'},
          {text: 'Changelog', link: '../guide/CHANGELOG.md'},
          {text: 'GitHub', link: 'https://github.com/CooCooFE/hap-ui'},
        ],
      sidebar:
        [
          {
            title: '介绍',
            collapsable: false,
            children: [
              '/guide/'
            ]
          },
          {
            title: '基础组件',
            children: [
              '/guide/titleBar'
            ]
          }
        ]
    }
}