<template>
  <div id="app">
    <div class="container col-12">
      <div class="row">
        <div class="col-8">
          <div v-if="loading">
            <p>Loading</p>
          </div>
          <div v-else class="col-12">
            <task
              style="margin:4px;"
              v-for="item in even(items)"
              :key="item._id"
              :description="item.description"
              :author="item.author"
              :createdAt="item.createdAt"
              :authorId="item.authorId"
              :finished="item.finished"
              :taskId="item.taskId"
              @edit="edit"
              @delet="delet"
            ></task>
          </div>
        </div>
        <div class="col-4">
          <task-form
            :taskUpdate="replaceEdit(taskUpdate)"
            :taskId="taskId"
            @save="create"
            @update="update"
          ></task-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task";
import TaskForm from "./TaskForm";

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
      taskId: "",
      taskUpdate: {
        taskId: "",
        description: "",
        authorId: "",
        finished: ""
      }
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      fetch(this.$parent.servidor + "tasks")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { items = [] } = data;
          const tasks = items.map(item => {
            const { userId = {} } = item;
            const { firstname = "Anonimo", lastname = "", _id = "" } = userId;
            return {
              description: item.description,
              author: `${firstname} ${lastname}`,
              authorId: _id,
              taskId: item._id,
              finished: item.finished,
              createdAt: item.createdAt
            };
          });
          this.items = tasks;
          this.loading = false;
        });
    },
    create(tasks) {
      console.log(tasks);
      fetch(this.$parent.servidor + "tasks", {
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
          alert("Task save");
          this.load();
        });
    },
    update(tasks) {
      fetch(this.$parent.servidor + "tasks/" + tasks.id, {
        method: "PUT",
        body: JSON.stringify(tasks),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          alert("Save changes");
          this.load();
        });
    },
    edit(tasks) {
      this.taskUpdate = {
        taskId: tasks.taskId,
        authorId: tasks.authorId,
        description: tasks.description,
        finished: tasks.finished,
        createdAt: tasks.createdAt
      };
    },
    delet(tasks) {
      fetch(this.$parent.servidor + "tasks/" + tasks.taskId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          var index = this.items.indexOf(data);
          alert("Tarea eliminada");
          this.load();
        });
    },
    even: function(items) {
      // Set slice() to avoid to generate an infinite loop!
      return items.slice().sort(function(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    },
    replaceEdit: function(tasksUpdate) {
      return tasksUpdate;
    }
  }
};
</script>
