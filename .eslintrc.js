module.exports = {
    root: true,
    env: {
        node: true,
    },
    // MEMO: parserにはデフォルトで'vue-eslint-parser'が指定されているのでparserOptionsで@typescript-eslint/parserを指定してtsファイルも対応させる
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    rules: {
        quotes: ["warn", "double"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
}
