<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body row">
        <div class="col-6">
          <h5 class="card-title">{{description}}</h5>
          <p class="card-text">{{author}}</p>
          <div v-if="finished" class="btn-success">
            <p>Finalizada</p>
          </div>
          <p v-else class="btn-warning">Pendiente</p>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-primary"
            style="margin:4px;padding:10px;"
            @click="edit"
          >editar</button>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger"
            style="margin:4px;padding:10px"
            @click="delet"
          >borrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    description: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      required: true
    },
    authorId: {
      type: String,
      required: true
    },
    taskId: {
      type: String,
      required: true
    },
    finished: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    edit() {
      this.$emit("edit", {
        taskId: this.taskId,
        description: this.description,
        author: this.author,
        authorId: this.authorId,
        finished: this.finished
      });
    },
    delet() {
      this.$emit("delet", {
        taskId: this.taskId
      });
    }
  }
};
</script>
