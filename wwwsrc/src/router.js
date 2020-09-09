import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Accounts from "./views/Accounts.vue";
// @ts-ignore
import Account from "./views/Account.vue";
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
      path: "/account/:accountId",
      name: "account",
      component: Account,
      beforeEnter: authGuard
    },
    {
      path: "/accounts",
      name: "accounts",
      component: Accounts,
      beforeEnter: authGuard
    },
  ]
});
