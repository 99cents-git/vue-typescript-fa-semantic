import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SemVue from 'semantic-ui-vue';

/* FontAwesome */
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faMapMarkerAlt,
  faGlobeAfrica,
  faEnvelope,
  faAt,
  faPhone,
  faMobile,
  faUsers,
  faUserTie,
  faPassport,
  faCalendarAlt,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(faEnvelope, faMapMarkerAlt, faBuilding, faGlobeAfrica, faAt, faPhone, faMobile, faUsers, faUserTie, faPassport, faCalendarAlt, faCheck, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* Semantic css */
import 'semantic-ui-css/semantic.min.css';

/* Configuration */
Vue.config.productionTip = false;

/* Use */
Vue.use(SemVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


