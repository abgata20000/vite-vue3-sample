<template>
    <div>
        <h1>Options APIで書いた場合</h1>
        <button @click="onSubmitClicked">submit</button>
        <p v-if="submitLoading">loading...</p>
        <p v-if="submitErrors">{{ submitErrors }}</p>
        <ul>
            <li v-for="(image, idx) in images" :key="idx">
                {{ image }}
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import axios from "axios"
export default defineComponent({
    name: "OptionsSample",
    components: {},
    data() {
        return {
            submitLoading: false,
            images: [],
            submitErrors: null,
        }
    },
    methods: {
        async onSubmitClicked() {
            if (this.submitLoading) return
            this.submitLoading = true
            try {
                this.submitErrors = null
                this.images = []
                const results = await axios.get(
                    "https://dog.ceo/api/breed/hound/images"
                )
                results?.data?.message.forEach((image) => {
                    this.images.push(image)
                })
            } catch (e) {
                this.submitErrors = e
            }
            this.submitLoading = false
        },
    },
})
</script>
