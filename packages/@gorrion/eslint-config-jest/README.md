# @gorrion/eslint-config-jest

ESLint Jest config used at Gorrion Software House

## Installation

Install the packages using `npm` (or `yarn` or `pnpm`)

```bash
npm install --save-dev eslint @gorrion/eslint-config-jest eslint-plugin-jest
```

This will allow you to use the jest package.

````

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: "@gorrion/eslint-config-jest",
  rules: {
    // your overrides
  },
};
````
