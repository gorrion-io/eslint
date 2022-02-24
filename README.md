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

### Other configs

This config also exposes a few other configs that I use often and pull in as
needed.

You can use them standalone:

```javascript
module.exports = {
  extends: "@gorrion/eslint-config-<scope>",
};
```

Or in combination with the base config (recommended)

```javascript
module.exports = {
  extends: ["@gorrion", "@gorrion/eslint-config-<scope>"],
};
```

## Available configs:

### `@gorrion/eslint-config-react`

If you are using [`react`][react], install the following packages:

```bash
npm install --save-dev @gorrion/eslint-config-react eslint-plugin-react eslint-plugin-react-hooks
```

### `@gorrion/eslint-config-jsx-a11y`

If you want to use `jsx-a11y` config, install the following packages:

```bash
npm install --save-dev @gorrion/eslint-config-jsx-a11y eslint-plugin-jsx-a11y
```

### `@gorrion/eslint-config-security`

If you want to use `security` config, install the following packages:

```bash
npm install --save-dev @gorrion/eslint-config-security eslint-plugin-security
```

### `@gorrion/eslint-config-jest`

If you want to use `jest` config, install the following packages:

```bash
npm install --save-dev @gorrion/eslint-config-jest eslint-plugin-jest
```

## LICENSE

MIT

<!-- prettier-ignore-start -->
[typescript]: https://github.com/microsoft/TypeScript
[react]: https://github.com/facebook/react
<!-- prettier-ignore-end -->
