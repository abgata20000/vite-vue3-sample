<template>
    <div>
        <h1>Home</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"
export default defineComponent({
    name: "Home",
    setup: () => {
        const msg = ref("message!")
        return { msg }
    },
})
</script>
