<template>
  <div id="account" class="container-fluid">
    <div class="row">
      <div class="col-9 mx-auto text-white mt-5">
        <h3>Account #: {{account.accountNumber}}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-9 px-0 pt-2 mx-auto bg-white text-info">
        <div class="row w-100">
          <div class="col-6">
            <h4 class="m-3">Account type: {{account.accountType}}</h4>
          </div>
          <div class="col-6 text-right">
            <h3 class="m-3">Balance: ${{account.balance.toFixed(2)}}</h3>
          </div>
        </div>
        <button @click="newTransactionForm = true"  class="btn btn-success float-right my-3 mr-3">Transaction +</button>
        <h4 class="text-center border-bottom border-info mt-4 w-50 mx-auto">Transactions</h4>
        <div class="row w-100 m-0 border-top border-bottom border-info">
          <div class="col-2 border-right border-info text-info p-1"><small><b>Type</b></small></div>
          <div class="col-2 border-right border-info text-info p-1"><small><b>Category</b></small></div>
          <div class="col-3 border-right border-info text-info p-1"><small><b>Memo</b></small></div>
          <div class="col-2 border-right border-info text-info p-1 text-right"><small><b>Amount ($)</b></small></div>
          <div class="col-2 border-right border-info text-info text-right p-1"><small><b>Date</b></small></div>
          <div class="col text-info p-1 text-center"><small><b>Edit</b></small></div>
        </div>
        <div class="row w-100 my-5 ml-1" v-if="transactions.length == 0 && newTransactionForm == false">
          <div class="col-12 text-center">
            <h5>No Transactions At This Time</h5>
          </div>
        </div>
        <div v-if="newTransactionForm" class="row bg-secondary border-bottom border-info m-0">
            <div class="col-2 bg-secondary border-right border-bottom border-info p-1">
              <select class="form-control form-control-sm" v-model="newTransaction.transactionType" required>
                <option selected>Withdrawal</option>
                <option>Deposit</option>
                <!-- <option>Transfer</option> -->
              </select>
            </div>
            <div class="col-2 bg-secondary border-right border-bottom border-info p-1">
              <select class="form-control form-control-sm" v-model="newTransaction.category" required>
                <optgroup label="Deposits">
                  <option>Paycheck</option>
                  <option>Cash Deposit</option>
                </optgroup>
                <optgroup label="Bills">
                  <option>Cable / Internet</option>
                  <option>Power</option>
                  <option>Water</option>
                  <option>Phone</option>
                  <option>Credit Card</option>
                  <option>Insurance</option>
                </optgroup>
                <optgroup label="Car">
                  <option>Car Payment</option>
                  <option>Car Insurance</option>
                  <option>Car Maint.</option>
                  <option>Gas</option>
                </optgroup>
                <optgroup label="Food">
                  <option>Groceries</option>
                  <option>Fast Food</option>
                  <option>Restaurant</option>
                </optgroup>
                <optgroup label="Home">
                  <option>Maintenance</option>
                  <option>Tech</option>
                  <option>Entertainment</option>
                  <option>Furniture</option>
                </optgroup>
                <optgroup label="Other">
                  <option>Emergency</option>
                  <option>Misc.</option>
                </optgroup>
              </select>
            </div>
            <div class="col-3 bg-secondary border-right border-bottom border-info p-1">
              <input v-model="newTransaction.memo" type="text" class="form-control form-control-sm" placeholder="groceries" required/>
            </div>
            <div class="col-2 p-1 bg-secondary border-right border-bottom border-info">
              <input v-model.number="newTransaction.amount" type="number" class="form-control form-control-sm" placeholder="$$$" step="0.01" required/>
            </div>
            <div class="col border-bottom border-info p-1">{{new Date().toISOString().slice(0,10)}}</div>
              <div class="col-12 bg-white">
                <button class="btn btn-dark float-right mx-1 my-1" @click="newTransaction = newTransactionDefault; newTransactionForm = false">Cancel</button>
                <button class="btn btn-success float-right ml-1 mr-1 my-1" @click="submitTransaction">Save</button>
              </div>
            </div>
          
        <div v-show="transactions.length > 0">
          <div class="row w-100 m-0 border-bottom border-info" v-for="transaction in transactions" :key="transaction.id">
            <div class="col-2 border-right border-info text-info p-1">{{transaction.transactionType}}</div>
            <div class="col-2 border-right border-info text-info p-1">{{transaction.category}}</div>
            <div class="col-3 border-right border-info text-info p-1">{{transaction.memo}}</div>
            <div v-if="transaction.type == 'Withdrawal'" class="col-2 border-right border-info text-danger p-1 text-right">-{{transaction.amount}}</div>
            <div v-else class="col-2 border-right border-info text-info p-1 text-right">{{transaction.amount.toFixed(2)}}</div>

            <div class="col-2 border-right border-info text-info p-1 text-right">{{transaction.date}}</div>
            <div class="col text-info p-1 text-center"><i class="fas fa-edit pointer"></i> / <i @click="deleteTransaction(transaction)" class="fas fa-trash-alt pointer"></i></div>
          </div>
        </div>
        <button class="btn btn-danger float-right m-3" data-toggle="modal" data-target="#closeAccount">CLOSE ACCOUNT</button>
      </div>  

    </div>
    <div class="modal fade" id="closeAccount" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Transfer Funds</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="deleteAccount">
                <div>
                  <p class="mt-1">Select An Account To Move Funds Into:</p>
                    <select class="custom-select" v-model="accountTo" required>
                      <option v-for="account in accounts" :key="account.accountNumber" :value="account">{{account.accountType}} #{{account.accountNumber}} : ${{account.balance.toFixed(2)}}</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-danger mt-3 mb-0 float-right">CLOSE ACCOUNT</button>
            </form>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal" @click="resetModal">Cancel</button>
          </div>
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
      account: this.$store.state.accounts.filter(a => a.accountNumber == this.$route.params.accountId).pop(),
      newTransactionForm: false,
      newTransaction: {accountNumber: this.$route.params.accountId},
      newTransactionDefault: {accountNumber: this.$route.params.accountId, memo: null, transactionType: null, category: null, amount: null},
      accountTo: {},
      accountFrom: {},
    }
  },
  computed: {
    transactions(){
      return this.$store.state.transactions.filter(t => t.accountNumber == this.account.accountNumber).reverse();
    },
    accounts(){
      return this.$store.state.accounts.filter(a => a.id != this.account.id);
    },

  },
  methods: {
    submitTransaction(){
      let x = this.newTransaction
      if(x.amount != null && x.transactionType!=null && x.memo != null && x.category != null){

        this.newTransaction.id = Math.floor(Math.random() * 999999);
      this.newTransaction.date = new Date().toISOString().slice(0,10);
      this.$store.dispatch("newTransaction", this.newTransaction);
      if(this.newTransaction.transactionType == "Withdrawal"){
        this.account.balance -= this.newTransaction.amount
      }
      if(this.newTransaction.transactionType == "Deposit"){
        this.account.balance += this.newTransaction.amount;
      }
      this.$store.dispatch("editBalance", this.account);
      this.newTransaction = this.newTransactionDefault;
      this.transactionForm = false;
      }
    },
    deleteTransaction(transaction){
      if(transaction.transactionType == "Deposit"){
        this.account.balance -= transaction.amount;
      }
      if(transaction.transactionType == "Withdrawal"){
        this.account.balance += transaction.amount;
      }
      this.$store.dispatch("editBalance", this.account);
      this.$store.dispatch("deleteTransaction", transaction);
    },
    resetModal(){
      this.accountTo = {}
    },
    deleteAccount(){
      if(Object.entries(this.accountTo).length != 0){
      let transferAmount = this.account.balance;
      this.accountTo.balance += this.account.balance
      this.account.balance = 0
      this.$store.dispatch("editBalance", this.accountTo);
      this.$store.dispatch("deleteAccount", this.account.id)
      $("#closeAccount").modal("hide");
      this.$router.push({ path: '/accounts' })
      }
    }
  },
  mounted(){
    this.account = this.$store.state.accounts.filter(a => a.accountNumber == this.$route.params.accountId).pop();
    this.$store.dispatch("getTransactions");
  }
}
</script>

<style>
.pointer{
  cursor: pointer;
}
.text-right{
  text-align: right;
}
</style>