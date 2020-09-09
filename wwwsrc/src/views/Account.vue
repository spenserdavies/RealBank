<template>
  <div id="account" class="container-fluid">
    <div class="row">
      <div class="col-9 mx-auto text-white mt-5">
        <h3>Account #: {{account.accountNumber}}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-9 px-0 pt-2 mx-auto bg-white text-info">
        <h3 class="ml-3">Balance: ${{account.balance.toFixed(2)}}</h3>
        <h4 class="ml-3">Account type: {{account.type}}</h4>
        <button @click="newTransactionForm = true" class="btn btn-success float-right my-3 mr-3">Transaction +</button>
        <h4 class="text-center border-bottom border-info mt-4 w-50 mx-auto">Transactions</h4>
        <div class="row w-100 m-0 border-top border-bottom border-info">
          <div class="col-2 border-right border-info text-info p-1"><small><b>Type</b></small></div>
          <div class="col-2 border-right border-info text-info p-1"><small><b>Category</b></small></div>
          <div class="col-3 border-right border-info text-info p-1"><small><b>Memo</b></small></div>
          <div class="col-2 border-right border-info text-info p-1"><small><b>Amount</b></small></div>
          <div class="col-2 border-right border-info text-info p-1"><small><b>Date</b></small></div>
          <div class="col text-info p-1"><small>Edit</small></div>
        </div>
        <div v-if="newTransactionForm" class="row bg-secondary border-bottom border-info m-0">
            <div class="col-2 bg-secondary border-right border-bottom border-info p-1">
              <select class="form-control form-control-sm" v-model="newTransaction.type">
                <option selected>Withdrawal</option>
                <option>Deposit</option>
                <!-- <option>Transfer</option> -->
              </select>
            </div>
            <div class="col-2 bg-secondary border-right border-bottom border-info p-1">
              <select class="form-control form-control-sm" v-model="newTransaction.category">
                <option>Bills</option>
                <option>Car</option>
                <option>Emergency</option>
                <option>Entertainment</option>
                <option>Food</option>
                <option>Misc.</option>
              </select>
            </div>
            <div class="col-3 bg-secondary border-right border-bottom border-info p-1">
              <input v-model="newTransaction.memo" type="text" class="form-control form-control-sm" placeholder="groceries"/>
            </div>
            <div class="col-2 p-1 bg-secondary border-right border-bottom border-info">
              <input v-model.number="newTransaction.amount" type="number" class="form-control form-control-sm" placeholder="$$$" />
            </div>
            <div class="col border-bottom border-info p-1">{{today.month}}/{{today.day}}/{{today.year}}</div>
            <div class="col-12 bg-white">

            <button class="btn btn-dark float-right mx-1 my-1" @click="newTransaction = newTransactionDefault; newTransactionForm = false">Cancel</button>
            <button class="btn btn-success float-right ml-1 mr-1 my-1" @click="submitTransaction">Save</button>
            </div>
        </div>
        <div class="row w-100 m-0 border-bottom border-info" v-for="transaction in transactions" :key="transaction.id">
          <div class="col-2 border-right border-info text-info p-1">{{transaction.type}}</div>
          <div class="col-2 border-right border-info text-info p-1">{{transaction.category}}</div>
          <div class="col-3 border-right border-info text-info p-1">{{transaction.memo}}</div>
          <div v-if="transaction.type == 'Withdrawal'" class="col-2 border-right border-info text-danger p-1">-{{transaction.amount.toFixed(2)}}</div>
          <div v-else class="col-2 border-right border-info text-info p-1">{{transaction.amount.toFixed(2)}}</div>

          <div class="col-2 border-right border-info text-info p-1">{{transaction.date.month}}/{{transaction.date.day}}/{{transaction.date.year}}</div>
          <div class="col text-info p-1">O / O</div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  data(){
    return{
      account: {},
      newTransactionForm: false,
      newTransaction: {accountNumber: this.$route.params.accountId},
      newTransactionDefault: {accountNumber: this.$route.params.accountId},
      today: {day: new Date().getDay(), month: new Date().getMonth(), year: new Date().getFullYear()}
    }
  },
  computed: {
    transactions(){
      return this.$store.state.activeTransactions.reverse();
    }
  },
  methods: {
    submitTransaction(){
      this.newTransaction.id = Math.floor(Math.random() * 999999);
      this.newTransaction.date = this.today;
      this.$store.dispatch("submitTransaction", this.newTransaction);
      this.newTransaction = this.newTransactionDefault;
      this.transactionForm = false;
    }
  },
  mounted(){
    this.account = this.$store.state.accounts.filter(a => a.accountNumber == this.$route.params.accountId).pop();
    console.log(this.account)
    this.$store.dispatch("getTransactionsByAccountNumber", this.$route.params.accountId);
  }
}
</script>

<style>

</style>