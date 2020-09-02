<template>
  <div>
    <div class="row mt-5">
    <div class="card xs12 sm6 md4 lg3 ml-3 mb-3 ml-5" style="width: 18rem;" v-for="task in $store.state.tasks" :key="task">
      <div class="card-body">
        <h5 class="card-title">{{ task.name }}</h5>
        <p>{{task.content}}</p>
        <button @click="deleteTask" class="btn btn-danger float-right ">Delete</button>
      </div>
    </div>
      <add-card/>
    </div>
  </div>
</template>

<script>
import AddCard from "@/components/AddCard";

export default {

  name: "Cards",
  components: {AddCard},
  data() {
    return {

    }
  },

  methods: {
    deleteTask: function(task) {
      this.$store.state.tasks.splice(this.$store.state.tasks.indexOf(task), 1)
    },
  },
}
</script>

<style scoped>
.card{

  background-image: url("../components/indexCard.jpg") ;
}
.btn-danger{
  position: absolute;
  right:    0;
  bottom:   0;
  margin-bottom:10px;
  margin-right:10px;
}
</style>