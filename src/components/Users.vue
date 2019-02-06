<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
            <user
              v-for="item in items"
              :key="item._id"
              :firstname="item.firstname"
              :lastname="item.lastname"
              :email="item.email"
            ></user>
          </div>
        </div>
        <div class="col-sm">
          <user-form @save="create"></user-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./User";
import UserForm from "./UserForm";

export default {
  name: "users",
  components: {
    user: User,
    "user-form": UserForm
  },
  data() {
    return {
      loading: true,
      items: []
    };
  },
  created() {
    fetch(this.$parent.servidor + "users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { items = [] } = data;
        const users = items;
        this.items = users;
        this.loading = false;
      });
  },
  methods: {
    create(users) {
      fetch(this.$parent.servidor + "users", {
        method: "POST",
        body: JSON.stringify(users),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.items.push(data);
        });
    }
  }
};
</script>
