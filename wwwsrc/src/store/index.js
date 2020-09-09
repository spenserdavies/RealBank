import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    accounts: [{type: "savings", accountNumber: 12345, balance: 90034}, {type: "checking", accountNumber: 23456, balance: 23415}]
  },
  mutations: {
    openAccount(state, newAccount){
      state.accounts.push(newAccount);
    },
    transferFunds(state, accountsObject){
      let to = accountsObject.to;
      let from = accountsObject.from;
      debugger;
      let indexTo = state.accounts.findIndex((a => a.accountNumber == to.accountNumber));
      state.accounts[indexTo].balance = to.balance;
      let indexFrom = state.accounts.findIndex((a => a.accountNumber == from.accountNumber));
      state.accounts[indexFrom].balance = from.balance;
      
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
      router.push('accounts')
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    ///////////////////////////////

    openAccount({commit, dispatch}, newAccount){
      commit("openAccount", newAccount);
    },
    transferFunds({commit, dispatch}, Acs){
      if(Acs.to.balance === Acs.amount){
        Acs.from.balance -= Acs.amount;
      } else {
        Acs.to.balance += Acs.amount;
        Acs.from.balance -= Acs.amount;
      }
      commit("transferFunds", {to: Acs.to, from: Acs.from});
    }
  }
});
