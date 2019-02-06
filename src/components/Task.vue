<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{description}}</h5>
        <p class="card-text">{{author}}</p>
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
    }
  }
};
</script>
