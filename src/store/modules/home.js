import {listBlogBaseInfo} from '@/api'

export default {
    namespaced: true,
    state: {
        articles: []
    },
    mutations: {
        UPDATE_ARTICLES_BASE_INFO(state, articles) {
            state.articles = articles;
        }
    },
    actions: {
        // 获取文章基本信息列表
        GET_ARTICLES_BASE_INFO({commit}, params) {
            return new Promise((resolve, reject) => {
                listBlogBaseInfo(params).then((response) => {
                    commit('UPDATE_ARTICLES_BASE_INFO', response.rows);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        }
    }
}
