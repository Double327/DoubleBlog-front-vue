const Mock = require("mockjs");
const Random = Mock.Random;


let menus = Mock.mock({
    'code': 200,
    'data': [
        {
            'id': 1,
            'title': '文章分类',
            "url": '/categories',
            'target': false
        },
        {
            'id': 3,
            'title': '项目分享',
            "url": '/projects',
            'target': false
        },
        {
            'id': 2,
            'title': '时光机',
            "url": '/archive',
            'target': false
        },
        {
            'id': 4,
            'title': '留言',
            "url": '/leaveComment',
            'target': false
        },
        {
            'id': 5,
            'title': '关于我',
            "url": '/about',
            'target': false
        },
    ]
})

let categories = Mock.mock({
    'code': 200,
    'data|3': [{
        'id|+1': 1,
        'name|1': Random.cword(3),
        'target': true
    }]
})


let carousel = function () {
    let carouselList = []
    for (let i = 1; i <= 5; i++) {
        let tData = {
            'id': i,
            'headerImg': Random.dataImage('848x298', i),
            'description': Random.cparagraph()

        }
        carouselList.push(tData);
    }
    return {
        'code': 200,
        'data': carouselList
    }
};


const blog = function () {
    let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            'id': i + 1,
            'title': Random.csentence(5, 30), //  Random.csentence( min, max )
            'summary': Random.cparagraph(),
            'headerImg': Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            'click': Random.integer(60, 1000),
            'like': Random.integer(60, 1000),
            'commentCount': Random.integer(60, 1000),
            'author_name': Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            'createTime': Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }


    return {
        'code': 200,
        'rows': articles
    }
}

const tags = function () {
    let tagList = []
    for (let i = 0; i < 10; i++) {
        let tag = {
            id: i,
            title: Random.csentence(3),
            color: Mock.mock('@rgb'),
            count: Random.integer(0, 100)
        }
        tagList.push(tag)
    }
    return {
        'code': 200,
        'data': tagList
    }
};

const support = function () {
    let supportList = []
    for (let i = 0; i < 5; i++) {
        let supportItem = {
            'id': i,
            'title': Random.csentence(20),
            'createTime': Random.datetime(),
            'like': Random.integer(0, 100),
            'click': Random.integer(0, 100),
            'commentCount': Random.integer(0, 100),
            'headerImg': Random.image('294x88', '123'),
            'summary': Random.csentence(60)
        }

        supportList.push(supportItem);
    }
    return {
        'code': 200,
        'data': supportList
    }
};

Mock.mock('/dev-api/f/blog', 'get', {})
Mock.mock('/dev-api/f/categories', 'get', categories)
Mock.mock('/dev-api/f/menus', menus)
Mock.mock('/dev-api/f/carousel', carousel)
Mock.mock('/dev-api/f/support', support)
Mock.mock('/dev-api/f/tags', tags)
Mock.mock('/dev-api/f/blog?pageSize=10&pageNum=1', blog)
