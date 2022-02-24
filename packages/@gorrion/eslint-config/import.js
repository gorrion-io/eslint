module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["import"],
  settings: {
    "import/ignore": ["node_modules", ".json$", ".(scss|less|css|styl)$"],
  },
  rules: {
    // static analysis
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-restricted-paths": "off",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "off",
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "off",
    "import/no-useless-path-segments": "warn",
    "import/no-relative-parent-imports": "off",
    "import/no-relative-packages": "warn",
    // helpful warnings
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "warn", // rule is in progress (not for prod to treat as error)
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "off",
    // modules
    "import/unambiguous": "off",
    "import/no-commonjs": "off",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",
    "import/no-import-module-exports": "error",
    // styles
    "import/first": "warn",
    "import/exports-last": "warn",
    "import/no-duplicates": "error",
    "import/no-namespace": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always-and-inside-groups",
        groups: [
          "builtin",
          ["external", "internal"],
          "parent",
          ["sibling", "index"],
          ["type", "object"],
        ],
      },
    ],
    "import/newline-after-import": "warn",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-named-default": "off",
    "import/no-default-export": "off",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": "off",
    "import/dynamic-import-chunkname": "off",
    "import/group-exports": "off",
    "import/extensions": "off",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: "plugin:import/typescript",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "import/no-unresolved": "off",
      },
    },
  ],
};
