import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Sample from "@/views/Sample.vue"
import ApiSample from "@/views/ApiSample.vue"
import OptionsSample from "@/views/OptionsSample.vue"
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
    {
        path: "/api_sample",
        name: "ApiSample",
        component: ApiSample,
        meta: { layout: "sample" },
    },
    {
        path: "/options_sample",
        name: "OptionsSample",
        component: OptionsSample,
        meta: { layout: "sample" },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
