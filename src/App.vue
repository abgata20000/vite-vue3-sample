<template>
    <div id="app">
        <AppLayout>
            <router-view />
        </AppLayout>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AppLayout from "@/layouts/AppLayout.vue"
export default defineComponent({
    name: "App",
    components: { AppLayout },
})
</script>
