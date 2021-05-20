import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

//前台
import home from './modules/home';
import settings from "./modules/settings";
import base from "./modules/base";
import common from "./modules/common";
import article from "@/store/modules/article";
import articleHome from "@/store/modules/articleHome";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        //前台
        home,
        settings,
        base,
        common,
        article,
        articleHome
    },
    getters
});

export default store
