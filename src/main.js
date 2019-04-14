import Vue from 'vue'
import App from './App.vue'
import * as fbs from 'firebase'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    fbs.initializeApp({
      apiKey: "AIzaSyCpka1_E2sfLXSpl-Sznd_TZFBA2kNQ7sI",
      authDomain: "vue-test1-2998c.firebaseapp.com",
      databaseURL: "https://vue-test1-2998c.firebaseio.com",
      projectId: "vue-test1-2998c",
      storageBucket: "vue-test1-2998c.appspot.com",
      messagingSenderId: "6372654397"
    });

    fbs.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
