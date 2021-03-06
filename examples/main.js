// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import objectAssign from 'object-assign'

import Vue from 'vue'
import App from './App'
import router from './router'

import DemoBlock from './components/demo-block'
import oView from '../src/index'

// Vue.config.productionTip = false
Vue.config.debug = true

Vue.component('DemoBlock', DemoBlock)
Vue.use(oView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
