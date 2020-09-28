<template>
<div>
  <nav-bar/>
  <done-tasks/>
</div>
</template>

<script>
import DoneTasks from "@/components/DoneTasks";
import NavBar from "@/components/NavBar";
export default {
name: "Done",
  components: {NavBar, DoneTasks}
}
</script>

<style scoped>

</style>