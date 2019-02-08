<template>
  <form>
    <div class="form-group">
      <label>id:</label>
      <input type="text" class="form-control" rows="3" v-model="_id" readonly>
    </div>
    <div class="form-group">
      <label>Description:</label>
      <textarea class="form-control" rows="3" v-model="_description"></textarea>
    </div>
    <div class="form-group">
      <label>Author:</label>
      <select class="form-control" v-model="_userId">
        <option v-for="user in users" :key="user._id" :value="user._id">{{user.fullname}}</option>
      </select>
    </div>
    <div class="form-group">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="_finished">
      <label class="form-check-label" for="exampleCheck1">Finished</label>
    </div>
    <button type="button" class="btn btn-primary" @click="save">{{option}}</button>
    <button type="button" class="btn btn-light" v-show="optionEdit" @click="clear">Cancel</button>
  </form>
</template>

<script>
export default {
  name: "task-form",
  props: {
    taskUpdate: {
      taskId: "",
      description: "",
      authorId: "",
      finished: false
    }
  },
  data() {
    return {
      users: [],
      optionEdit: false
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
  methods: {
    save() {
      if (this.optionEdit) {
        this.update();
      } else {
        console.log(this._description);
        this.$emit("save", {
          description: this._description,
          userId: this._userId,
          finished: this._finished
        });
      }
      this.clear();
    },
    clear() {
      this.taskUpdate.taskId = "";
      this.taskUpdate.description = "";
      this.taskUpdate.authorId = "";
      this.taskUpdate.userId = "";
      this.taskUpdate.finished = false;
    },
    update() {
      this.$emit("update", {
        id: this._id,
        description: this._description,
        userId: this._userId,
        finished: this._finished
      });
    }
  },
  computed: {
    option() {
      if (this.taskUpdate.taskId == "") {
        this.optionEdit = false;
      } else {
        this.optionEdit = true;
      }
      if (this.optionEdit) {
        return "Update";
      } else {
        return "Save";
      }
    },
    _id: {
      //get
      get: function() {
        return this.taskUpdate.taskId;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.taskId = newValue;
      }
    },
    _description: {
      //get
      get: function() {
        return this.taskUpdate.description;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.description = newValue;
      }
    },
    _userId: {
      //get
      get: function() {
        return this.taskUpdate.authorId;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.authorId = newValue;
      }
    },
    _finished: {
      //get
      get: function() {
        return this.taskUpdate.finished;
      },
      // setter
      set: function(newValue) {
        this.taskUpdate.finished = newValue;
      }
    }
  }
};
</script>
