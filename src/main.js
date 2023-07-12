import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

//引入
import moment from 'moment';
//挂载到原型
Vue.prototype.$moment = moment;
//汉化，否则显示日期格式是国外的日期格式
moment.locale("zh-CN");
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
