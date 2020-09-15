<template>
  <div class="home container-fluid mx-0 px-0">
    <div class="overlay px-5 pt-5">
      <div class="row pt-5">
        <div class="col-5 mx-auto card mt-5 text-center py-3">
          <h2>RealBank</h2>
          <hr v-if="!$auth.isAuthenticated">
          <p v-if="!$auth.isAuthenticated" class="pt-3">You are not signed in. Click the login button to sign in and continue</p>
          <button v-if="!$auth.isAuthenticated" class="btn btn-info" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
  }
};
</script>

<style>
.home{
  background-image: url("../assets/bank.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y:hidden;
  overflow-x:hidden;
}
.overlay{
  width: 100vw; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */
  background-color: rgba(0, 0, 0, 0.589); /* Black background with opacity */
  z-index: 2;
}
.pointer{
  cursor: pointer;
}
</style>
