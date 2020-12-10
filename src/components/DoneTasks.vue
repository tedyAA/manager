<template>
  <div>
    <div class="row mt-5">
      <div class="card xs12 sm6 md4 lg3 ml-3 mb-3 ml-5" style="width: 18rem;"
           v-for="task in this.$store.state.t.doneTasks" :key="task.name">
        <div class="card-body">
          <h5 class="card-title">{{task.name}} </h5>
          <p>{{task.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "DoneTasks"
}
</script>

<style scoped>
.card{

  background-image: url("../components/indexCard.jpg") ;
}
</style>