<template>
  <div class="accounts container">
    <div class="row mt-5">
      <div class="col-9 mx-auto card bg-light pt-4">
        <h2 class="text-center">Accounts</h2>
        <button type="button" class="btn btn-success mx-auto my-2" data-toggle="modal" data-target="#newAccount" @click="newAccount.accountNumber = null">New Account</button>
        <hr>
        <div class="row border-bottom pb-3 pt-2">
          <div class="col-4 text-center">
            <h5>Type</h5>
          </div>
          <div class="col-5 col-md-4 text-center">
            <h5>Account #</h5>
          </div>
          <div class="col-3 col-md-4 text-center">
            <h5>Bal.</h5>
          </div>
        </div>
        <div class="pb-5">

        <div class="row border-bottom" v-for="account in accounts" :key="account.accountNumber">
          <div class="col-4  pt-3 text-center border-right">
            <p>{{account.type}}</p>
          </div>
          <div class="col-5 col-md-4 pt-3 text-center border-right">
            <p>{{account.accountNumber}}</p>
          </div>
          <div class="col-3 col-md-4 pt-3 text-center">
            <p>{{account.balance}}</p>
          </div>
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
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="checking" v-model="newAccount.type" checked>
                <label class="form-check-label" for="exampleRadios1">
                  Checking
                </label>
              </div>
              <div class="form-check pb-3">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="savings" v-model="newAccount.type">
                <label class="form-check-label" for="exampleRadios2">
                  Savings
                </label>
              </div>
              
              <input type="checkbox" v-model="useExFunds" class="mr-2" @click="newAccount.balance = 0; dropdownCoice = null"/>Open Using Existing Funds?
              <div v-if="useExFunds" class="mt-2">
                <p><u>Select An Account To Withdraw From:</u></p>
                <select class="custom-select" v-model="dropdownChoice">
                  <option v-for="account in accounts" :key="account.accountNumber" :value="account">{{account.type}} #{{account.accountNumber}} :<br> ${{account.balance}}</option>
                </select>
                <button type="button" class="btn btn-success my-2 float-right" @click="fundsInput=true">Select</button>
                
              <div v-if="fundsInput" class="mt-5 pt-2">
                <p><u>Enter a Dollar Amount To Open the Account With:</u></p>
                <small>Maximum Amount: {{dropdownChoice.balance}} </small>
                <input type="number" class="form-control mb-3" min="0" :max="dropdownChoice.balance" placeholder="$$$" v-model.number="newAccount.balance" />

              </div>
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

  </div>
</template>

<script>
export default {
  name: "accounts",
  data(){
    return {
      useExFunds: false,
      fundsInput: false,
      dropdownChoice: null,
      newAccount: {balance: 0, type: null, accountNumber: null},
      accountFrom: {},
      
    }
  },
  computed: {
    accounts(){
      return this.$store.state.accounts
    }
  },
  methods: {
    resetModal(){
      newAccount = {balance: 0, type: null}
    },
    openAccount(){
      this.accountFrom = this.dropdownChoice
      this.newAccount.accountNumber = Math.floor(100000000 + Math.random() * 900000000);
      this.$store.dispatch("openAccount", this.newAccount)
      console.log("accounts:")
      console.log(this.newAccount)
      console.log(this.accountFrom)
      if(this.newAccount.balance > 0){
        this.$store.dispatch("transferFunds", {to: this.newAccount, from: this.accountFrom, amount: this.newAccount.balance});
        
      }
      this.newAccount = {balance: 0, type: null, accountNumber: null}
    },
    generateAccountNumber(){
      let accountNumber = Math.floor(100000000 + Math.random() * 900000000);
      return accountNumber;
    }
  }
}
</script>

<style>
.text-right{
  text-align: right;
}
</style>