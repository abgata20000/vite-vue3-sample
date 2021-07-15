<template>
    <component :is="layout">
        <slot />
    </component>
</template>
<script>
// MEMO: viteがdynamic importに対応していないので利用するレイアウト用のコンポーネントを予め読み込んで配列に格納しておく
import layouts from "@/layouts"
const { default: AppLayoutDefault } = layouts
import { shallowRef, watch } from "vue"
import { useRoute } from "vue-router"
export default {
    name: "AppLayout",
    setup() {
        // MEMO: refだと階層が深すぎてパフォーマンスに影響するので浅い階層だけ監視するshallowRefを利用する
        const layout = shallowRef(AppLayoutDefault)
        const route = useRoute()
        watch(
            () => route.meta,
            (meta) => {
                try {
                    // MEMO: viteがdynamic importに対応していないので予め用意したオブジェクトから取得してくる
                    // const component = await import(`./${meta.layout}.vue`)
                    const component = layouts[meta.layout]
                    layout.value = component || AppLayoutDefault
                } catch (e) {
                    layout.value = AppLayoutDefault
                }
            },
            { immediate: true }
        )
        return { layout }
    },
}
</script>
