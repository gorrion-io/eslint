# @gorrion/eslint-config

ESLint config used at Gorrion Software House

## Installation

Install the packages using `npm` (or `yarn` or `pnpm`)

```bash
npm install --save-dev eslint @gorrion/eslint-config eslint-plugin-import eslint-config-prettier
```

This will allow you to use the base package.

If you are using [`typescript`][typescript], install the following packages:

```bash
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: "@gorrion",
  rules: {
    // your overrides
  },
};
```

<!-- prettier-ignore-start -->
[typescript]: https://github.com/microsoft/TypeScript
[react]: https://github.com/facebook/react
<!-- prettier-ignore-end -->
