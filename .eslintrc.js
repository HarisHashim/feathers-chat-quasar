module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true
  },
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",

    // allow paren-less arrow functions
    "arrow-parens": 0,
    "one-var": 0,

    "import/first": 0,
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,

    // Custom config
    "space-before-function-paren": [0, "never"],
    semi: 0,
    "brace-style": 0,
    quotes: 0,
    indent: 0,
    "key-spacing": 0,
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": 0,
    "vue/no-side-effects-in-computed-properties": 0,
    "no-spaced-func": 0,
    "func-call-spacing": 0,

    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};
