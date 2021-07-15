import { computed, Ref } from "vue"
import { Sample } from "@/types/sample"

export default (items: Ref<Sample[]>) => {
    const customItems = computed(() =>
        items.value.map((item) => {
            return { ...item, title: `custom: ${item.title}` }
        })
    )

    return {
        customItems,
    }
}
