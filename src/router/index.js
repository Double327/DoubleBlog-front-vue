import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers';
import {LoadingBar} from "view-design";

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // 先判断目标路由有没有hash值
            return {selector: to.hash};
        }
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    }
};

// 配置加载进度条
LoadingBar.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 2
});

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title + ' | DoubleBlog';
    }
    if (to.meta.content) {
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords)
        document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
        meta.content = to.meta.content;
        head[0].appendChild(meta)
    }
    try {
        LoadingBar.start();
    } catch (err) {
        console.log(err);
    }
    next();
});
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    try {
        LoadingBar.finish();
    } catch (err) {
        console.log(err);
    }
});
export default router;
