<template>
  <div class="w-full flex flex-col">
    <section class="w-1/2 m-auto">
      <h1 class="text-center rounded shadow-lg py-3 bg-gray-200">
        Todo Counter : {{ todos.length }}
      </h1>
    </section>
    <section>
      <p
        class="w-4/6 m-auto border rounded text-left p-3 mt-5 relative shadow-inner font-serif text-lg"
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.job }}
        <button class="absolute right-2 text-red-500" @click="remove(todo.id)">
          remove
        </button>
      </p>
    </section>
    <form @submit.prevent="addTask()" class="m-auto my-3">
      <input
        type="text"
        class="border border-gray-400 rounded placeholder-red-300 focus:placeholder-yellow-80 px-2"
        placeholder="Your Task"
        v-model="newTask"
      />
      <br />
      <input
        type="submit"
        value="Insert"
        class="w-1/2 mx-16 border-2 rounded bg-gradient-to-tr from-yellow-700 to-indigo-500"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoCounter: 0,
      newTask: "",
      todos: [
        { id: 0, job: "making a new vue-based application" },
        { id: 1, job: "make here a better world" },
        { id: 2, job: "going to the gym" },
      ],
    };
  },
  methods: {
    addTask() {
      if (this.newTask == "") {
        console.error("error founded");
      } else {
        this.todos.push({
          id: new Date().getTime().toString(),
          job: this.newTask,
        });
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