import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Accounts from "./views/Accounts.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    
    {
      path: "/accounts",
      name: "accounts",
      component: Accounts,
      beforeEnter: authGuard
    },
  ]
});
