// 入口文件，在main.js里面引入的组件和样式都是全局的
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Button,Form,FormItem,Input,Message } from 'element-ui'
import './assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'

// 按需导入element组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局挂载消息组件
Vue.prototype.$message = Message;


// 全局变量$http
Vue.prototype.$http = axios
axios.defaults.baseURL = "api/Code/web/my-project/src/server/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
