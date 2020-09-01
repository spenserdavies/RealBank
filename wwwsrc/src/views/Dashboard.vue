<template>
  <div class="dashboard">
    <h1>Welcome To The Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
