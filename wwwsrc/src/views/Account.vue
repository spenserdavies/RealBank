<template>
  <div id="account" class="container">
    <div class="row">
      <div class="col text-white">
        <h1>{{account}}</h1>
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
    }
  },
  // computed: {
  //   account(){
  //     let account = this.$store.state.accounts.filter(a => a.accountNumber == this.$route.params.accountId);
  //     console.log(account)
  //   }
  // },
  mounted(){
    this.account = this.$store.state.accounts.filter(a => a.accountNumber == this.$route.params.accountId).pop();
    console.log(account)
  }
}
</script>

<style>

</style>