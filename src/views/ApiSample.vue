<template>
    <div class="sample">
        <h1>API通信のサンプル</h1>
        <button @click="onSubmitClicked">submit</button>
        <p v-if="submitLoading">loading...</p>
        <p v-if="submitErrors">submitErrors</p>
        <ul>
            <li v-for="(image, idx) in state.images" :key="idx">
                {{ image }}
            </li>
        </ul>
        <ul>
            <li v-for="(image, idx) in images" :key="idx">
                {{ image }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"
import axios from "axios"
import { useApi } from "@/hooks/useApi"
export default defineComponent({
    components: {},
    setup() {
        const {
            handleApi,
            loading: submitLoading,
            errors: submitErrors,
        } = useApi(async () => {
            return await axios.get("https://dog.ceo/api/breed/hound/images")
        })
        const images = ref([])
        const state = reactive({
            images: [],
        })

        const onSubmitClicked = async () => {
            images.value = []
            state.images = []
            const results = await handleApi()
            results?.data?.message.forEach((image: never) => {
                images.value.push(image)
                state.images.push(image)
            })
        }

        return {
            submitLoading,
            submitErrors,
            onSubmitClicked,
            images,
            state,
        }
    },
})
</script>
