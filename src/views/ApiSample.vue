<template>
    <div>
        <h1>API通信のサンプル</h1>
        <button @click="onSubmitClicked">submit</button>
        <p v-if="submitLoading">loading...</p>
        <p v-if="submitErrors">submitErrors</p>
        <ul>
            <li v-for="(image, idx) in state.images" :key="idx">
                {{ image }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import axios from "axios"
import { useApi } from "@/hooks/useApi"
export default defineComponent({
    name: "ApiSample",
    components: {},
    setup: () => {
        const {
            handleApi,
            loading: submitLoading,
            errors: submitErrors,
        } = useApi(async () => {
            return await axios.get("https://dog.ceo/api/breed/hound/images")
        })
        const state = reactive({
            images: [],
        })

        const onSubmitClicked = async () => {
            if (submitLoading) return
            state.images = []
            const results = await handleApi()
            results?.data?.message.forEach((image: never) => {
                state.images.push(image)
            })
        }

        return {
            submitLoading,
            submitErrors,
            onSubmitClicked,
            state,
        }
    },
})
</script>
