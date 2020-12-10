<template>
<div class="app">
<nav-bar/>
  <cards/>
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Cards from "@/components/Cards";
export default {
name: "MainPage",
  components: {Cards, NavBar, }
}
</script>

<style scoped>

</style>