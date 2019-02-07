<template>
  <form>
    <div class="form-group">
      <label>id:</label>
      <input type="text" class="form-control" rows="3" v-model="id" readonly>
    </div>
    <div class="form-group">
      <label>Description:</label>
      <textarea class="form-control" rows="3" v-model="description"></textarea>
    </div>
    <div class="form-group">
      <label>Author:</label>
      <select class="form-control" v-model="userId">
        <option v-for="user in users" :key="user._id" :value="user._id">{{user.fullname}}</option>
      </select>
    </div>
    <div class="form-group">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="finished">
      <label class="form-check-label" for="exampleCheck1">Finalizada:</label>
    </div>
    <button type="button" class="btn btn-primary" @click="save">Crear</button>
  </form>
</template>

<script>
export default {
  name: "task-form",
  props: {
    taskUpdate: {}
  },
  data() {
    return {
      id: "",
      description: "",
      userId: "",
      finished: false,
      users: []
    };
  },
  created() {
    fetch(this.$parent.$parent.servidor + "users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { items = [] } = data;
        const users = items.map(item => {
          const { _id, firstname = "", lastname = "" } = item;
          return {
            _id,
            fullname: `${firstname} ${lastname}`
          };
        });

        this.users = users;
      });
  },
  mounted() {
    if (this.taskUpdate != undefined) {
      this.description = this.taskUpdate.description;
    }
  },
  methods: {
    save() {
      this.$emit("save", {
        id: this.id,
        description: this.description,
        userId: this.userId,
        finished: this.finished
      });
    },
    update(task) {
      this.id = task.id;
      this.description = task.description;
      this.userId = task.userId;
      this.finished = task.finished;
    }
  }
};
</script>
