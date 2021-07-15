import { ref } from "vue"
import { v4 as uuid } from "uuid"
import Sample from "@/types/sample"

export default () => {
    const sample: Sample = { id: uuid(), title: "title" }
    const items = ref<Sample[]>([sample])

    return {
        items,
    }
}
