import Button from './button/button.vue'
import Headline from './headline/Headline'

export default {
  install (Vue) {
    console.log('install...')
    Vue.component('MyButton', Button)
    Vue.component('MyHeadline', Headline)
  }
}
