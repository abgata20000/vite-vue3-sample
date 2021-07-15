import { ref } from "vue"
import { v4 as uuid } from "uuid"
// import Sample from "@/types/sample"

export default () => {
    const sample: any = { id: uuid(), title: "title" }
    const items = ref<any[]>([sample])

    return {
        items,
    }
}
