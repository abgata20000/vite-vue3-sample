<template>
    <div id="nav">
        <div class="header">
            <nav class="bg-indigo-100 py-2 md:py-4">
                <div class="container px-4 mx-auto md:flex md:items-center">
                    <div class="flex justify-between items-center">
                        <router-link
                            class="font-bold text-xl text-indigo-600"
                            to="/"
                            >Vite+Vue3</router-link
                        >
                        <button
                            class="
                                border border-solid border-gray-600
                                px-3
                                py-1
                                rounded
                                text-gray-600
                                opacity-50
                                hover:opacity-75
                                md:hidden
                            "
                            id="navbar-toggle"
                        >
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>

                    <div
                        class="
                            hidden
                            md:flex
                            flex-col
                            md:flex-row md:ml-auto
                            mt-3
                            md:mt-0
                        "
                        id="navbar-collapse"
                    >
                        <router-link
                            class="
                                p-2
                                lg:px-4
                                md:mx-2
                                text-gray-600
                                rounded
                                hover:bg-gray-200 hover:text-gray-700
                                transition-colors
                                duration-300
                            "
                            to="/sample"
                            >Sample</router-link
                        >
                        <router-link
                            class="
                                p-2
                                lg:px-4
                                md:mx-2
                                text-gray-600
                                rounded
                                hover:bg-gray-200 hover:text-gray-700
                                transition-colors
                                duration-300
                            "
                            to="/api_sample"
                            >ApiSample</router-link
                        >
                        <router-link
                            class="
                                p-2
                                lg:px-4
                                md:mx-2
                                text-gray-600
                                rounded
                                hover:bg-gray-200 hover:text-gray-700
                                transition-colors
                                duration-300
                            "
                            to="/options_sample"
                            >OptionsSample</router-link
                        >
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    setup() {
        return {}
    },
})
</script>
