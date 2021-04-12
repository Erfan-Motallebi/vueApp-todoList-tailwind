import { createRouter, createWebHistory } from "vue-router"
import TodoList from "../components/TodoList.vue";
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";

const routes = [
    { path: "/Home", component: Home },
    { path: "/Contact", component: Contact },
    { path: "/Todos", component: TodoList },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;