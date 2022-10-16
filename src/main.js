import Vue from 'vue'
import App from './App.vue'
import StyleText from './lib/index'

Vue.use(StyleText)
new Vue({
  el: '#app',
  render: h => h(App)
})
