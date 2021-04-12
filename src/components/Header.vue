<template>
  <section
    class="w-full p-10 pl-40 bg-gradient-to-bl from-red-200 to-blue-500 text-2xl font-serif font-bold"
  >
    <router-link
      v-for="link in links"
      :key="link.id"
      :to="link.to"
      class="mx-2"
    >
      <span class="shadow-lg rounded">{{ link.title }}</span>
    </router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: new Date().getTime().toString(), to: "/Home", title: "Home" },
        {
          id: new Date().getTime().toString(),
          to: "/Contact",
          title: "Contact",
        },
        {
          id: new Date().getTime().toString(),
          to: "/Todos",
          title: "Todo-App",
        },
      ],
    };
  },
};
</script>

<style>
</style>