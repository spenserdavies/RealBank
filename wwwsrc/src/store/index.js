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
    accounts: [],
    transactions: [],
    activeTransactions: []
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
      
    },
    getTransactionsByAccountNumber(state, accountNumber){
      state.activeTransactions = state.transactions.filter(t => t.accountNumber == accountNumber);
    },
    submitTransaction(state, newTransaction){
      let accountIndex = state.accounts.findIndex((a => a.accountNumber == newTransaction.accountNumber));
      if(newTransaction.type == 'Withdrawal'){
        state.accounts[accountIndex].balance -= newTransaction.amount
      }
      if(newTransaction.type == 'Deposit'){
        state.accounts[accountIndex].balance += newTransaction.amount
      }
      state.transactions.push(newTransaction);
    },






    setAccounts(state, accounts){
      state.accounts = accounts;
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
        Acs.from.balance.toFixed(2)
      } else {
        Acs.to.balance += Acs.amount;
        Acs.to.balance.toFixed(2)
        Acs.from.balance -= Acs.amount;
        Acs.from.balance.toFixed(2)
      }
      commit("transferFunds", {to: Acs.to, from: Acs.from});
    },
    getTransactionsByAccountNumber({commit, dispatch}, accountNumber){
      commit("getTransactionsByAccountNumber", accountNumber);
    },
    submitTransaction({commit, dispatch}, newTransaction){
      commit("submitTransaction", newTransaction);
      dispatch("getTransactionsByAccountNumber", newTransaction.accountNumber)
    },





    async getAccounts({commit}){
      try {
        let res = await api.get("accounts");
        commit("setAccounts", res.data);
      } catch (e) {
        console.error(e);
      }
    }







  }
});
