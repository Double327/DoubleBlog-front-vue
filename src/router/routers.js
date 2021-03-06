export default [
    {
        path: '/',
        component: () => import('@/views/Index'),
        children: [
            {
                path: '/',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/Home'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '首页',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'categories',
                name: 'categories',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/CategoryHome'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '文章分类',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'articles',
                name: 'articles',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/ArticleHome'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '文章列表',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'article/:id',
                name: 'article',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/ArticleHome'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '文章详情',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'articles/category/:id',
                name: 'articles/category',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/ArticleHome'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '文章列表',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'archive',
                name: 'archive',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/Archive'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '时光轴',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'link',
                name: 'link',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/FriendLink'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '友情链接',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'projects',
                name: 'projects',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/ProjectHome'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '项目展示',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'project/:id',
                name: 'project',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/ProjectView'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '项目展示',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'leaveComment',
                name: 'leaveComment',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/LeaveComment'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '留言',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'about',
                name: 'about',
                components: {
                    header: () => import('@/components/Header'),
                    content: () => import('@/views/About'),
                    footer: () => import('@/components/Footer')
                },
                meta: {
                    title: '关于我',
                    content: {
                        keywords: 'DoubleBlog,李广帅,布尔先生,Java',
                        description: 'DoubleBlog,Java',
                    },
                }
            },
            {
                path: 'test',
                components: {
                    content: () => import('@/views/Test')
                }
            }
        ]
    }
];
