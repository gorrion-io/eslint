# @gorrion/eslint-config-react

ESLint React config used at Gorrion Software House

## Installation

Install the packages using `npm` (or `yarn` or `pnpm`)

```bash
npm install --save-dev eslint @gorrion/eslint-config-react eslint-plugin-react eslint-plugin-react-hooks
```

This will allow you to use the react package.

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: "@gorrion/eslint-config-react",
  rules: {
    // your overrides
  },
};
```

## Check also

Don't forget to check [`@gorrion/eslint-config`][@gorrion/eslint-config]

<!-- prettier-ignore-start -->
[@gorrion/eslint-config]: https://www.npmjs.com/package/@gorrion/eslint-config
[typescript]: https://github.com/microsoft/TypeScript
[react]: https://github.com/facebook/react
<!-- prettier-ignore-end -->
