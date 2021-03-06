const fs = require("fs");
const path = require("path");

const tsConfig = fs.existsSync("tsconfig.json")
  ? path.resolve("tsconfig.json")
  : fs.existsSync("types/tsconfig.json")
  ? path.resolve("types/tsconfig.json")
  : // eslint-disable-next-line no-undefined
    undefined;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["prettier", "./import.js"],
  rules: {
    "accessor-pairs": ["error", { setWithoutGet: true, getWithoutSet: false }],
    "array-callback-return": "error",
    "block-scoped-var": "error",
    camelcase: "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    complexity: ["error", 10],
    "consistent-return": "error",
    "consistent-this": "off",
    "constructor-super": "off",
    curly: ["error", "multi-line"],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "for-direction": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": "off",
    "getter-return": ["error", { allowImplicit: true }],
    "grouped-accessor-pairs": "off",
    "guard-for-in": "error",
    "id-denylist": "error",
    "id-length": "off",
    "id-match": "off",
    "init-declarations": "off",
    "line-comment-position": "off",
    "lines-between-class-members": "off",
    "max-classes-per-file": "off",
    "max-depth": ["error", 4],
    "max-lines": [
      "error",
      { max: 1500, skipBlankLines: false, skipComments: false },
    ],
    "max-lines-per-function": "off",
    "max-nested-callbacks": ["error", 4],
    "max-params": ["error", 4],
    "max-statements": "off",
    "max-statements-per-line": ["error", { max: 1 }],
    "multiline-comment-style": ["error", "starred-block"],
    "new-cap": "error",
    "no-alert": "warn",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-constructor-return": "error",
    "no-continue": "off",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "off",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-magic-numbers": "off",
    "no-misleading-character-class": "off",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext",
        ],
      },
    ],
    "no-plusplus": "off",
    "no-promise-executor-return": "off",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-exports": "off", // Override in projects
    "no-restricted-globals": [
      "error",
      {
        name: "event",
        message: "Use local parameter instead.",
      },
      {
        name: "fdescribe",
        message: "Do not commit fdescribe. Use describe instead.",
      },
    ],
    "no-restricted-imports": "off", // Override in projects
    "no-restricted-properties": "off",
    "no-restricted-syntax": ["error", "WithStatement", "LabeledStatement"],
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-unused-private-class-members": "error",
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^[iI]gnored",
      },
    ],
    "no-use-before-define": ["error", "nofunc"],
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "object-shorthand": ["error", "properties"],
    "one-var": ["error", "never"],
    "operator-assignment": "off",
    "padding-line-between-statements": "off",
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-named-capture-group": "off",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "warn",
    "prefer-promise-reject-errors": ["warn", { allowEmptyReject: true }],
    "prefer-regex-literals": "warn",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    "require-atomic-updates": "warn",
    "require-await": "off",
    "require-unicode-regexp": "off",
    "require-yield": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": "off",
    strict: ["error", "function"],
    "symbol-description": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "vars-on-top": "error",
    yoda: "error",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        project: tsConfig,
        sourceType: 'module',
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // Handled by TS
        "constructor-super": "off",
        "getter-return": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",

        "consistent-return": "warn",

        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",

        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "error",

        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "off",

        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "off",

        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",

        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "off",

        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "error",

        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",

        "no-implied-eval": "error",
        "@typescript-eslint/no-implied-eval": "error",

        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error",

        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",

        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",

        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": "off",

        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "off",

        "no-return-await": "off",
        "@typescript-eslint/return-await": ["error", "in-try-catch"],

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",

        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", "nofunc"],

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "off",

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
            varsIgnorePattern: "^[iI]gnored",
          },
        ],

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        // TS Specific
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/ban-types": "off", // Override in projects
        "@typescript-eslint/class-literal-property-style": "off",
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-delimiter-style": "warn",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/method-signature-style": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-base-to-string": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "off",
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          { ignoreArrowShorthand: true },
        ],
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implicit-any-catch": "warn",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-invalid-void-type": "warn",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": [
          "warn",
          { checksVoidReturn: false },
        ],
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "warn",
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "warn",
        "@typescript-eslint/require-array-sort-compare": "warn",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/sort-type-union-intersection-members": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "warn",
      },
    },
  ],
};
