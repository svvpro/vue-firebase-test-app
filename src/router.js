import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Orders from "./components/Orders";
import Ads from "./components/Ads/Ads";
import Ad from "./components/Ads/Ad";
import AdForm from "./components/Ads/AdForm";
import AuthGuard from "./auth-guard";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: Home, name: 'home'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/registration', component: Registration, name: 'reg'},
    {path: '/orders', component: Orders, name: 'orders', beforeEnter: AuthGuard},
    {path: '/ads', component: Ads, name: 'ads', beforeEnter: AuthGuard},
    {path: '/ads/new', component: AdForm, name: 'new', beforeEnter: AuthGuard },
    {path: '/ads/:id/edit', component: AdForm, name: 'edit', props: true, beforeEnter: AuthGuard},
    {path: '/ads/:id', component: Ad, name: 'ad', props: true, beforeEnter: AuthGuard}
  ]
})
