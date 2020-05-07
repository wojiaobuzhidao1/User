import Vue from 'vue';
import App from './App'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import store from './store/';
import routes from './router/index';
import bus from './utils/bus';
import axios from 'axios';
import lodash from 'lodash'
import '@/assets/theme/index.css'
import '@/assets/icon/iconfont.css'
import '@/assets/cool-icon/iconfont.css'
import './assets/cool-icon/iconfont.js'


import { formatTime } from "./utils/time"

// 默认发送api时候带着cookie
axios.defaults.withCredentials = true;

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

Object.defineProperty(Vue.prototype, '$_', { value: lodash })


Vue.directive('title', function (el, binding) {
	document.title = el.dataset.title
})
// 格式话时间
Vue.filter('format', formatTime)

router.beforeEach(({path}, from, next) => {
  next();
})

/**
* vue-bus 设置访问api地址
*/
bus.host = 'http://localhost:3000'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

// const app = new Vue({
//   store,
//   router
// }).$mount('#app')
