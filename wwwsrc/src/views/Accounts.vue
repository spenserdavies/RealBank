<template>
  <div class="accounts container">
    <div class="row mt-5">
      <div class="col-9 mx-auto card bg-light pt-4">
        <h2 class="text-center">Accounts</h2>
        <button type="button" class="btn btn-success w-25 align-self-center my-2 position-relative" data-toggle="modal" data-target="#newAccount" @click="newAccount.accountNumber = null">New Account</button>
        <button type="button" class="btn btn-warning w-25 align-self-end position-absolute transfer-btn" data-toggle="modal" data-target="#transferFunds">Transfer Funds</button>
        <hr>
        <div class="row border-bottom pb-3 pt-2">
          <div class="col-4 text-center">
            <h5>Type</h5>
          </div>
          <div class="col-5 col-md-4 text-center">
            <h5>Account #</h5>
          </div>
          <div class="col-3 col-md-4 text-center">
            <h5>Bal. ($)</h5>
          </div>
        </div>
        <div class="pb-5">

        <div v-for="account in accounts" :key="account.accountNumber" :account="account">
          <router-link :to="{name: 'account', params: {accountId: account.accountNumber}}" class="text-dark">
            <div class="row border-bottom">

          <div class="col-4  pt-3 text-center border-right">
            <p>{{account.accountType}}</p>
          </div>
          <div class="col-5 col-md-4 pt-3 text-center border-right">
            <p>{{account.accountNumber}}</p>
          </div>
          <div class="col-3 col-md-4 pt-3 text-center">
            <p>{{account.balance.toFixed(2)}}</p>
          </div>
            </div>
          </router-link>
        </div>

        </div>
        
      </div>
    </div>





    <div class="modal fade" id="newAccount" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Open A New Account</h5>
            <button type="button" class="close" data-dismiss="modal" @click="resetModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <p><u>Account Type:</u></p>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="accountType" id="accountType1" value="Checking" v-model="newAccount.accountType" checked required>
                <label class="form-check-label" for="accountType1">
                  Checking
                </label>
              </div>
              <div class="form-check pb-3">
                <input class="form-check-input" type="radio" name="accountType" id="accountType2" value="Savings" v-model="newAccount.accountType">
                <label class="form-check-label" for="accountType2">
                  Savings
                </label>
              </div>
            </form>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal" @click="resetModal">Close</button>
            <button type="button" class="btn btn-success"  @click="openAccount" data-dismiss="modal">Open Account</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="transferFunds" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Transfer Funds</h5>
            <button type="button" class="close" data-dismiss="modal" @click="resetModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="newTransfer">
              <p>Select an Account To Withdraw From:</p>
              <select class="custom-select" v-model="accountFrom">
                  <option v-for="account in accounts" :key="account.accountNumber" :value="account">{{account.accountType}} #{{account.accountNumber}} : ${{account.balance}}</option>
                </select>
                <div v-if="Object.keys(accountFrom).length > 0">
                  <p class="mt-5">Select an Account To Deposit To:</p>
                    <select class="custom-select" v-model="accountTo">
                      <option v-for="account in accounts" :key="account.accountNumber" :value="account">{{account.accountType}} #{{account.accountNumber}} : ${{account.balance}}</option>
                    </select>
                  
                </div>
                <div v-if="Object.keys(accountTo).length > 0" class="mt-5 pt-2">
                <p><u>Enter a Dollar Amount To Open the Account With:</u></p>
                <small>Maximum Amount: {{accountFrom.balance}} </small>
                <input type="number" class="form-control mb-3" min="0" :max="accountFrom.balance" placeholder="$$$" v-model.number="transferAmount" step="0.01"/>
              </div>
                <button type="submit" class="btn btn-warning float-right" v-if="transferAmount > 0">Transfer</button>
            </form>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal" @click="resetModal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "accounts",
  data(){
    return {
      newAccount: {balance: 0, accountType: null, accountNumber: null},
      accountFrom: {},
      accountTo: {},
      fromSelection: false,
      toSelection: false,
      transferAmount: null,
    }
  },
  computed: {
    accounts(){
      return this.$store.state.accounts
    }
  },
  mounted(){
    this.$store.dispatch("getAccounts");
  },
  methods: {
    resetModal(){
      newAccount = {balance: 0, accountType: null}
    },
    openAccount(){
      if(this.newAccount.accountType != null){
      this.newAccount.accountNumber = Math.floor(100000000 + Math.random() * 900000000);
      // this.$store.dispatch("openAccount", this.newAccount)
      this.$store.dispatch("newAccount", this.newAccount);
      } else {
        alert("Make sure to select an account type. Please try again")
      }
  },
  newTransfer(){
    this.accountTo.balance += this.transferAmount
    this.$store.dispatch("editBalance", this.accountTo);
    console.log("TO")
    console.log(this.accountTo)
    this.accountFrom.balance -= this.transferAmount
    this.$store.dispatch("editBalance", this.accountFrom)
    console.log("FROM")
    console.log(this.accountFrom);
    console.log("AMOUNT")
    console.log(this.transferAmount)
    $("#transferFunds").modal("hide");
  }
}
}
</script>

<style>
.text-right{
  text-align: right;
}
.transfer-btn{
  top: 4.8em;
}
</style>