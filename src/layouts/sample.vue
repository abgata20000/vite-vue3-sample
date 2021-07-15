<template>
    <div>
        <TheHeader />
        <slot />
    </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue"
export default {
    name: "AppLayoutSample",
    components: { TheHeader },
    setup() {
        return {}
    },
}
</script>
