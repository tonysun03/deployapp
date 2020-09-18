module.exports = {
    title: 'tony的学习笔记啊',
    base: '/',
    description: '学习，分享，成长',
    themeConfig: {
        lastUpdated: '最后更新', // string | boolean
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
                    'b',
                    'Dom',
                    'DOM扩展',
                    'DOM2和DOM3',
                    '事件',
                    '表单脚本'
                ]
            },
            ],'/vue/':[
                'composition',
                'guide',
                'b'
            ],'/ts/':[
                'a',
                'guide',
                'b'
            ],'/algorithm/':[
                '数据结构',
                '每日一题'
            ],'/webpack/':[
                'a',
                'guide',
                'b'
            ],
        }
      }
  }