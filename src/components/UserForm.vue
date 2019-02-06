<template>
  <form>
    <div class="form-group">
      <label>firstname:</label>
      <input type="text" class="form-control" rows="3" v-model="firstname">
    </div>
    <div class="form-group">
      <label>lastname:</label>
      <input type="text" class="form-control" rows="3" v-model="lastname">
    </div>
    <div class="form-group">
      <label>email:</label>
      <input type="text" class="form-control" rows="3" v-model="email">
    </div>
    <button type="button" class="btn btn-primary" @click="save">Crear</button>
  </form>
</template>

<script>
export default {
  name: "user-form",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: ""
    };
  },
  methods: {
    save() {
      this.$emit("save", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      });
    }
  }
};
</script>
