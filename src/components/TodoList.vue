<template>
  <div class="w-full flex flex-col">
    <section class="w-1/2 m-auto">
      <h1 class="text-center rounded shadow-lg py-3">
        Todo Counter : {{ todoCounter }}
      </h1>
    </section>
    <section>
      <p
        class="w-4/6 m-auto border rounded text-left py-3 mt-5"
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.job }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoCounter: 0,
      todos: [
        { id: 0, job: "making a new vue-based application" },
        { id: 1, job: "make here a better world" },
        { id: 2, job: "going to the gym" },
      ],
    };
  },
};
</script>

<style>
</style>