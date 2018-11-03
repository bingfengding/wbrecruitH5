import Vue from "vue";
import Router from "vue-router";
const home = r =>
  require.ensure([], () => r(require("view/home.vue")), "home");
const us = r =>
  require.ensure([], () => r(require("view/us.vue")), "us");
const back = r =>
  require.ensure([], () => r(require("view/back.vue")), "back");
const culture = r =>
  require.ensure([], () => r(require("view/culture.vue")), "culture");
const info = r =>
  require.ensure([], () => r(require("view/info.vue")), "info");
const job = r =>
  require.ensure([], () => r(require("view/job.vue")), "job");
const range = r =>
  require.ensure([], () => r(require("view/range.vue")), "range");
const value = r =>
  require.ensure([], () => r(require("view/value.vue")), "value");

Vue.use(Router);

export const RouterMap = [
  {
    path: "",
    redirect: "home"
  },{
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/us',
    name: 'us',
    component: us,
  },
  {
    path: '/back',
    name: 'back',
    component: back,
  },
  {
    path: '/culture',
    name: 'culture',
    component: culture,
  },
  {
    path: '/info',
    name: 'info',
    component: info,
  },
  {
    path: '/job',
    name: 'job',
    component: job,
  },
  {
    path: '/range',
    name: 'range',
    component: range,
  },
  {
    path: '/value',
    name: 'value',
    component: value,
  },
  
];

const router = new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: RouterMap
});
  
export default router