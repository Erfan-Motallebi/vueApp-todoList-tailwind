<template>
  <div class="w-full flex flex-col">
    <section class="w-1/2 m-auto">
      <h1 class="text-center rounded shadow-lg py-3 bg-gray-200">
        Todo Counter : {{ todos.length }}
      </h1>
    </section>
    <section>
      <form
        @submit.prevent="task()"
        class="m-auto my-3 w-1/2 flex justify-between"
      >
        <input
          type="text"
          class="border border-gray-400 rounded placeholder-red-300 focus:placeholder-yellow-80 px-2 w-full"
          placeholder="Your Task"
          v-model="newTask"
        />
        <br />
        <input
          type="submit"
          v-bind:value="buttonStyle"
          class="w-1/3 mx-16 border-2 rounded bg-gradient-to-tr from-yellow-700 to-indigo-500"
        />
      </form>
      <p
        class="w-4/6 m-auto border rounded text-left p-3 mt-5 relative shadow-inner font-serif text-lg"
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.job }}
        <button class="absolute right-20 text-red-500" @click="edit(todo.id)">
          edit
        </button>
        <button class="absolute right-2 text-red-500" @click="remove(todo.id)">
          remove
        </button>
      </p>
    </section>
    <section class="flex justify-center my-5 border rounded m-auto">
      <h1
        class="text-lg p-2 font-bold shadow-lg bg-gray-200"
        v-bind:hidden="hidden"
      >
        <span :class="[showColor]">{{ message }}</span>
      </h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoCounter: 0,
      hidden: true,
      newTask: "",
      buttonStyle: "Insert",
      taskMethod: "Insert",
      clr: "",
      message: "",
      todos: [
        { id: 0, job: "making a new vue-based application" },
        { id: 1, job: "make here a better world" },
        { id: 2, job: "going to the gym" },
      ],
    };
  },
  computed: {
    showMessage: {
      set(value) {
        this.hidden = value;
      },
    },
    showColor: {
      get() {
        return this.clr;
      },
      set(color) {
        this.clr = color;
      },
    },
  },
  methods: {
    edit(id) {
      this.buttonStyle = "edit";
      this.taskMethod = "Edit";
      this.todos.find((todo) => {
        if (todo.id === id) {
          this.newTask = todo.job;
        }
      });
    },
    task() {
      switch (this.taskMethod) {
        case "Insert":
          if (this.newTask.length == 0) {
            this.showMessage = false;
            this.message = "Empty Field";
            this.showColor = "text-red-500";
            setTimeout(() => (this.hidden = true), 3000);
          } else if (this.newTask.length > 0) {
            this.todos.push({
              id: new Date().getTime().toString(),
              job: this.newTask,
            });
            this.showMessage = false;
            this.message = "successfully added";
            this.showColor = "text-green-500";
            setTimeout(() => (this.hidden = true), 3000);
            this.newTask = "";
          }
          break;
        case "Edit":
          this.edit();
          break;
        default:
          break;
      }
    },
    remove(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
</style>