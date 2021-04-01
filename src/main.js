// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import ccworkBridge from 'ccwork-jsbridge';
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/index.css'

Vue.use(Vant);

Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$http = axios;
axios.defaults.baseURL = '/';
/* eslint-disable no-new */
// vue
ccworkBridge.init(function(hasLogin) {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
});
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
