<template>
  <div>
    <div class="row mt-5">
      <div class="card xs12 sm6 md4 lg3 ml-3 mb-3 ml-5" style="width: 18rem;"
           v-for="task in this.$store.state.t.tasks" :key="task.name">
        <div class="card-body" v-if="task.done!==true">
          <h5>{{ task.name }}</h5>
          <h5>{{ task.content }}</h5>
        </div>
        <button @click="deleteTask(task)" class="del btn btn-danger float-left">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg></button>
          <button @click="doneTask(task)" class="ok btn btn-success"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/></svg></button>
      </div>
      <add-card/>
    </div>
  </div>
</template>

<script>
import AddCard from "@/components/AddCard";
import {mapActions} from 'vuex'

export default {

  name: "Cards",
  components: {AddCard},
  data() {
    return {}
  },
  ...mapActions(['doneTasks', 'deleteTask']),
  methods: {
    deleteTask: function (task) {
      this.$store.dispatch('deleteTask', task)
    },
    doneTask: function (task) {
      this.$store.dispatch('doneTask', task)
    }
  },
}
</script>

<style scoped>
.card {
  background-image: url("../components/indexCard.jpg");
  width: 250px;
  height: 200px;
}

.del {
  position: absolute;
  margin-bottom: 10px;
  margin-right: 10px;
  right: 10px;
  bottom: 0;
}
.ok{
  position: absolute;
  margin-bottom: 10px;
  margin-right: 10px;
  left: 10px;
  bottom: 0;
}
</style>