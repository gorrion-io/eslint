# @gorrion/eslint-config-security

ESLint Security config used at Gorrion Software House

## Installation

Install the packages using `npm` (or `yarn` or `pnpm`)

```bash
npm install --save-dev eslint @gorrion/eslint-config-security eslint-plugin-security
```

This will allow you to use the security package.

````

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: "@gorrion/eslint-config-security",
  rules: {
    // your overrides
  },
};
````
