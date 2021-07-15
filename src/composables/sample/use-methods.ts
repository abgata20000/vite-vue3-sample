import { Ref } from "vue"
import { v4 as uuid } from "uuid"
import Sample from "@/types/sample"

export default (items: Ref<Sample[]>) => {
    const addItem = (title = "タイトルです") => {
        const tmp = {
            id: uuid(),
            title,
        }
        items.value = [...items.value, tmp]
    }

    const removeItem = (id: string) => {
        items.value = items.value.filter((item) => item.id !== id)
    }

    return {
        addItem,
        removeItem,
    }
}
