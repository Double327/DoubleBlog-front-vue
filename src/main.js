import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import store from './store'
import qs from 'qs';

import 'view-design/dist/styles/iview.css';

// iView UI 组件引入
import {
    Affix,
    Avatar,
    BackTop,
    Button,
    ButtonGroup,
    Card,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Form,
    FormItem,
    Icon,
    Input,
    Message,
    Modal,
    Notice,
    Progress,
    Rate,
    Row,
    Spin,
    Switch,
    Tag,
    Time,
    Tooltip
} from 'view-design'
import hljs from 'highlight.js' //导入代码高亮文件
require('@/mock.js');

Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Button', Button);
Vue.component('Progress', Progress);
Vue.component('Tag', Tag);
Vue.component('Icon', Icon);
Vue.component('Affix', Affix);
Vue.component('Rate', Rate);
Vue.component('Tooltip', Tooltip);
Vue.component('ButtonGroup', ButtonGroup);
Vue.component('i-switch', Switch);
Vue.component('BackTop', BackTop);
Vue.component('Spin', Spin);
Vue.component('Checkbox', Checkbox);
Vue.component('FormItem', FormItem);
Vue.component('Form', Form);
Vue.component('Input', Input);
Vue.component('Avatar', Avatar);
Vue.component('Card', Card);
Vue.component('Divider', Divider);
Vue.component('DatePicker', DatePicker);
Vue.component('Time', Time);

Vue.config.productionTip = false;

Vue.prototype.$Modal = Modal;
Vue.prototype.$Message = Message;
Vue.prototype.$Notice = Notice;
Vue.prototype.qs = qs;

//自定义一个代码高亮指令
Vue.directive('highlight', function (el) {
    let highlight = el.querySelectorAll('pre code');
    highlight.forEach((block) => {
        hljs.highlightBlock(block);
        block.classList.add("custom-scrollbar")
    })
});

new Vue({
    render: h => h(App),
    router: Router,
    store
}).$mount('#app');
