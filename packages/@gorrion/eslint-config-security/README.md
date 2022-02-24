# @gorrion/eslint-config-security

ESLint Security config used at Gorrion Software House

## Installation

Install the packages using `npm` (or `yarn` or `pnpm`)

```bash
npm install --save-dev eslint @gorrion/eslint-config-security eslint-plugin-security
```

This will allow you to use the security package.

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: "@gorrion/eslint-config-security",
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
