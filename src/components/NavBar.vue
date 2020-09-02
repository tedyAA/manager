<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Note Manager
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
name: "NavBar",
  methods:{
    dashboar() {
      this.$router.push('/main')
    },
    add() {
      this.$router.push('/add')
    },
  }
}
</script>

<style scoped>

</style>