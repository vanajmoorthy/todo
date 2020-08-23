module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },

    extends: ["eslint:recommended", "plugin:vue/essential"],

    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },

    plugins: ["vue"],

    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },

    root: true
};
