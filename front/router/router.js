export const RouterMap = [
    {
        name: '首页',
        path: 'homepage'
    },
    {
        name: '首页',
        path: 'homepage',
        children: [
            {
                name: '鲜花',
                path: 'flowers'
            },
            {
                name: '绿植',
                path: 'plant'
            },
            {
                name: '资材',
                path: 'materials'
            }
        ]
    },
    {
        name: '财务',
        path: 'finance',
        children: [
            {
                name: '进货',
                path: 'stock'
            },
            {
                name: '销货',
                path: 'sales'
            }
        ]
    }
]