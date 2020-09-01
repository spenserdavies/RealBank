<template>
  <div class="accounts container">
    <div class="row mt-5">
      <div class="col-9 mx-auto card bg-light">
        <h2 class="text-center">Accounts</h2>
        <button type="button" class="btn btn-success mx-auto my-2" data-toggle="modal" data-target="#newAccount">New Account</button>

        
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
              
              <input type="checkbox" v-model="useExFunds" class="mr-2" />Open Using Existing Funds?
              <div v-if="useExFunds" class="mt-2">
                <p><u>Select An Account To Withdraw From:</u></p>
                <select class="custom-select" v-model="dropdownChoice">
                  <option v-for="account in accounts" :key="account.accountNumber" :value="account">{{account.type}}: {{account.accountNumber}}</option>
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
          {{newAccount}}
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal" @click="resetModal">Close</button>
            <button type="button" class="btn btn-success">Open Account</button>
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
      newAccount: {balance: 0, type: null}
    }
  },
  computed: {
    accounts(){
      return [ {type: "savings", accountNumber: 12345, balance: 90034}, {type: "checking", accountNumber: 23456, balance: 23415}]
    }
  },
  methods: {
    resetModal(){
      newAccount = {balance: 0, type: null}
    }
  }
}
</script>

<style>

</style>