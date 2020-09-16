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

  </div>
</template>

<script>
export default {
  name: "accounts",
  data(){
    return {
      newAccount: {balance: 0, accountType: null, accountNumber: null},
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
}
}
</script>

<style>
.text-right{
  text-align: right;
}
</style>