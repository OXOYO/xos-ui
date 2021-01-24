import Vue from 'vue'
import App from './App.vue'

import xosUI from '../src'
import '../src/styles/index.less'

Vue.use(xosUI, {})
console.log('xosUI', xosUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
