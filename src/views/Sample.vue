<template>
    <div>
        <h1>Sample</h1>
        <button @click="addItem()">add Item</button>
        <h2>アイテム</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.title }}
                <span @click="removeItem(item.id)">[x]</span>
            </li>
        </ul>
        <h2>カスタムアイテム</h2>
        <ul>
            <li v-for="item in customItems" :key="item.id">
                {{ item.title }}
                <span @click="removeItem(item.id)">[x]</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import useRefs from "@/composables/sample/use-refs"
import useComputed from "@/composables/sample/use-computed"
import useMethods from "@/composables/sample/use-methods"
export default defineComponent({
    name: "Sample",
    components: {},
    setup: () => {
        const { items } = useRefs()
        const { customItems } = useComputed(items)
        const { addItem, removeItem } = useMethods(items)
        return { items, customItems, addItem, removeItem }
    },
})
</script>
