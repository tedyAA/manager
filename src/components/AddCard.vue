<template>
  <div>
    <div class="card xs12 sm6 md4 lg3 ml-3 mb-3 ml-5" style="width: 18rem;">
      <div class="card-body">
        <label class="text-info">Add Task Name:</label><br>
        <h5 class="card-title"><input type="text" class="form-control" v-model="name"></h5>
        <label class="text-info">Add Task Content:</label><br>
        <h5 class="card-title"><input type="text" class="form-control" v-model="content"></h5>
        <button class="btn btn-success " @click="addTask">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
import {required, minLength} from 'vuelidate/lib/validators'
import {mapActions} from 'vuex'

export default {
  name: "AddCard",
  data() {
    return {
      name: '',
      content: ''
    }
  },
  ...mapActions(['addTasks']),
  validations: {
    task: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    addTask: function (e) {
      e.preventDefault();
      if (this.name == '' || this.content == ''|| this.$store.state.t.tasks.length==12) {
        return
      } else {
        this.$store.dispatch('addTasks', this.name, this.content)
        this.name = '';
        this.content = '';
      }

    }
  },
}
</script>

<style scoped>
.card {
  width: 18rem;
  background-image: url("../components/indexCard.jpg");
}

.form-control {
  background: transparent;
  border: none;
}

.btn-success {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 2px;
  margin-right: 2px;
  padding: 6px 12px;
}
</style>