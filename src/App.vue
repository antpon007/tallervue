<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else>
            <task
              v-for="item in items"
              :key="item._id"
              :description="item.description"
              :author="item.author"
            ></task>
          </div>
        </div>
        <div class="col-sm">
          <task-form @save="create"></task-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

export default {
  name: "tasks",
  components: {
    task: Task,
    "task-form": TaskForm
  },
  data() {
    return {
      loading: true,
      items: [],
      servidor: "http://localhost:3000/api/v1/"
    };
  },
  created() {
    fetch(this.servidor + "tasks")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { items = [] } = data;
        const tasks = items.map(item => {
          const { userId = {} } = item;
          const { firstname = "Anonimo", lastname = "" } = userId;
          return {
            description: item.description,
            author: `${firstname} ${lastname}`
          };
        });

        this.items = tasks;
        this.loading = false;
      });
  },
  methods: {
    create(tasks) {
      fetch(this.servidor + "tasks", {
        method: "POST",
        body: JSON.stringify(tasks),
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
