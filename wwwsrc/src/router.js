import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Accounts from "./views/Accounts.vue";
// @ts-ignore
import Account from "./views/Account.vue";
import Budget from "./views/Budget.vue";
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
      path: "/budgets",
      name: "budget",
      component: Budget,
      beforeEnter: authGuard
    },
    {
      path: "/accounts",
      name: "accounts",
      component: Accounts,
      beforeEnter: authGuard
    },
    {
      path: "/account/:accountId",
      name: "account",
      component: Account,
      beforeEnter: authGuard
    },
    
  ]
});
