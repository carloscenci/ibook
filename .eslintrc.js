module.exports ={
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
    ],
    // plugins: ['prettier'],
    rules: {
        'no-console' : 'off',
        'vue/no-v-html' : 'off',
    }
}