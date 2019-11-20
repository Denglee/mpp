import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import '@/mock/index.js'

// 引入MintUI
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 引入vant js
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 引入自己的全局的css
import './assets/css/global.scss'
import './assets/css/page.scss'
import './assets/css/animate37.css'
import './assets/js/global.js'
// import utils  from  './assets/js/global.js'
// Vue.prototype.utils = utils

// 注册全局组件
import bottomBar from './components/bottomBar'
Vue.component(bottomBar.name,bottomBar);

import topBar from './components/topBar'
Vue.component(topBar.name,topBar);

// import goTop from "./components/goTop";
// Vue.component(goTop.name,goTop)

// 引用md5
// import md5 from 'js-md5';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
