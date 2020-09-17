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
    activeTransactions: [],
    accountTo: {},
    accountFrom: {},
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
    },
    setActiveTo(state, accountTo){
      state.accountTo = accountTo;
    },
    setActiveFrom(state,accountFrom){
      state.accountFrom = accountFrom;
    },
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





    // async getAccounts({commit}){
    //   try {
    //     let res = await api.get("accounts");
    //     commit("setAccounts", res.data);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
    getAccounts({commit}){
      api.get('accounts')
        .then(res => {
          commit("setAccounts", res.data);
        })
        .catch(e => console.error(e))
    },
    async getAccountById({commit, dispatch}, accountId){
      try {
        let res = await api.get("accounts/" + accountId);
        commit("setActiveAccount", res.data)
      } catch (e) {
        console.error(e);
      }
    },
    async getAccountToById({commit, dispatch}, accountId){
      try {
        let res = await api.get("accounts/" + accountId);
        commit("setActiveTo", res.data) 
      } catch (e) {
        console.error(e)
      }
    },
    async getAccountFromById({commit, dispatch}, accountId){
      try {
        let res = await api.get("accounts/"+ accountId);
        commit("setActiveFrom", res.data)
      } catch (e) {
        
      }
    },
    async newAccount({commit, dispatch}, newAccount){
      try {
        let res = await api.post("accounts", newAccount);
        dispatch("getAccounts");
      } catch (e) {
        console.error(e)
      }
    },
    async editBalance({commit, dispatch}, account){
      try {
        let res = await api.put("accounts/" + account.id, account);
        dispatch("getAccounts");
      } catch (e) {
        console.error(e)
      }
    },

  }
});
