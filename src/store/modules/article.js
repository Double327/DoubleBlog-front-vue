import {BlogDetail} from "@/api"

export default {
    namespaced: true,
    state: {
        article: {},
    },
    mutations: {
        UPDATE_ARTICLE_DETAIL_INFO(state, article) {
            state.article = article;
        },
        CLEAR_ARTICLE_DETAIL_INFO(state) {
            state.article = {};
        }
    },
    actions: {
        // 获取文章详细信息
        GET_ARTICLE_DETAIL_INFO({commit}, id) {
            return new Promise((resolve, reject) => {
                BlogDetail(id).then((response) => {
                    // 更新文章信息和权限信息
                    commit('UPDATE_ARTICLE_DETAIL_INFO', response.data);
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        }
    }
};
