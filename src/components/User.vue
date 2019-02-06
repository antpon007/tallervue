<template>
  <div class="post__container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{firstname}}</h5>
        <p class="card-text">{{lastname}}</p>
        {{email}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    firstname: {
      type: String,
      default: ""
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
};
</script>
