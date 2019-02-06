<template>
  <form>
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
    <button type="button" class="btn btn-primary" @click="save">Crear</button>
  </form>
</template>

<script>
export default {
  name: "task-form",
  data() {
    return {
      description: "",
      userId: "",
      users: []
    };
  },
  created() {
    fetch(this.$parent.servidor + "users")
      .then(response => {
        console.log(this.$parent.servidor);
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
  methods: {
    save() {
      this.$emit("save", {
        description: this.description,
        userId: this.userId
      });
    }
  }
};
</script>
