import Vue from 'vue'
import App from './components/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram , faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto';
import './css/styles.css'

library.add(faFacebook, faInstagram, faTwitter, faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


new Vue({
  el: '#app',
  render: h => h(App)
})
