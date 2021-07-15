import { createApp } from "vue"
import App from "@/App.vue"
import "@/assets/styles/index.scss"
import router from "@/router"
import { counterStore, CounterKey } from "@/store/counter"
const app = createApp(App).use(router)
const myCounterStore = counterStore()
router.beforeEach((to, from, next) => {
    next()
})
app.provide(CounterKey, myCounterStore)
app.mount("#app")
