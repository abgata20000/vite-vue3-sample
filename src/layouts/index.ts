import AppLayoutDefault from "@/layouts/default.vue"
import AppLayoutSample from "@/layouts/sample.vue"

// MEMO: viteがdynamic importに対応していないので利用するレイアウト用のコンポーネントを予め読み込んでオブジェクトに格納しておく
// TODO: 適切な方を設定したい
const index: any = { default: AppLayoutDefault, sample: AppLayoutSample }

export default index
