// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// 引用swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

//引入网络请求的配置文件
import apis from './components/common/js/api'
// console.log(apis)   //接口打印出对象
//挂到原型链上
Vue.prototype.apis = apis




Vue.config.productionTip = false


// 引用
import axios from 'axios'
// 将axios全局挂载到VUE原型上
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})
