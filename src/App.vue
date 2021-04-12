<template>
  <Header />
  <todo-list></todo-list>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList";
export default {
  components: { TodoList, Header },
};
</script>

<style>
</style>