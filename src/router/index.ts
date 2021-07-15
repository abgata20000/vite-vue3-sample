import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Sample from "@/views/Sample.vue"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/sample",
        name: "Sample",
        component: Sample,
        meta: { layout: "sample" },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
