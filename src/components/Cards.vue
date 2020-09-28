<template>
  <div>
    <div class="row mt-5">
    <div class="card xs12 sm6 md4 lg3 ml-3 mb-3 ml-5" style="width: 18rem;" v-for="(task,idx) in $store.state.tasks" :key="task">
      <div class="card-body">
        <h5 class="card-title">{{ task[idx].name }}</h5>
        <p>{{task[idx].content}}</p>
        <button @click="deleteTask" class="btn btn-danger float-right ">Delete</button>
      </div>
      <button @click="readyTask" class="btn btn-danger float-left ">Ready</button>
    </div>
      <add-card/>
    </div>
  </div>
</template>

<script>
import AddCard from "@/components/AddCard";
import { mapActions } from 'vuex'

export default {

  name: "Cards",
  components: {AddCard},
  data() {
    return {

    }
  },
  ...mapActions(['doneTasks']),
  methods: {
    deleteTask: function(task) {
      this.$store.state.a.tasks.splice(this.$store.state.a.tasks.indexOf(task), 1)
    },
    readyTask:function(task){
      this.$store.dispatch('doneTasks',task)
      this.$store.state.a.tasks.splice(this.$store.state.a.tasks.indexOf(task), 1)

    }
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