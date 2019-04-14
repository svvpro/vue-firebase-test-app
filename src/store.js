import Vue from 'vue'
import Vuex from 'vuex'
import ads from "./stores/ads";
import users from "./stores/users"
import shared from "./stores/shared";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ads,
    users,
    shared
  }
})
