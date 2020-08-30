module.exports = {
    title: '孙彤炜的博客',
    base: '/',
    description: '学习，分享，成长',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
          { text: 'JS', link: '/js/' },
          { text: 'VUE', link: '/vue/' },
          { text: 'TypeScript', link: '/ts/' },
          { text: '算法', link: '/algorithm/' },
          { text: '工程化', link: '/webpack/' },
          { text: 'GitHub', link: 'https://github.com/tonysun03' },
        ],
        sidebar: {
            '/js/':[{
                title: 'es5',
                collapsable: false,
                sidebarDepth: 2,
                children:[
                    '继承',
                    'b'
                ]
            },
            ],'/vue/':[
                'a',
                'guide',
                'b'
            ],'/ts/':[
                'a',
                'guide',
                'b'
            ],'/algorithm/':[
                'a',
                'guide',
                'b'
            ],'/webpack/':[
                'a',
                'guide',
                'b'
            ],
        }
      }
  }