# eslint-plugin-optimize-regex
[![npm](https://img.shields.io/npm/v/eslint-plugin-optimize-regex.svg)](https://www.npmjs.com/package/eslint-plugin-optimize-regex)
[![npm](https://img.shields.io/npm/dt/eslint-plugin-optimize-regex.svg)](https://www.npmjs.com/package/eslint-plugin-optimize-regex)

> Optimize regex literals

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
npm i eslint --save-dev
```

Next, install `eslint-plugin-optimize-regex`:

```
npm install eslint-plugin-optimize-regex --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-optimize-regex` globally.

## Usage for Eslint 9 and above

Add the following to your `eslint.config.mjs`

```js
import pluginOptimizeRegex from "eslint-plugin-optimize-regex";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [pluginOptimizeRegex.configs.recommended];
```

or the following to your `eslint.config.cjs`

```js
const pluginOptimizeRegex = require("eslint-plugin-optimize-regex").default

module.exports = [pluginOptimizeRegex.configs.recommended]
```

## Usage for Eslint 8 and below

Add `optimize-regex` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "optimize-regex"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "optimize-regex/optimize-regex": "warn"
    }
}
```

If you wish to add a `whitelist` or `blacklist` array against `regexp-tree`'s
[transforms](https://github.com/DmitrySoshnikov/regexp-tree/blob/master/src/optimizer/README.md#transforms), you can add them on an objects object:

```json
{
    "rules": {
        "optimize-regex/optimize-regex": ["warn", {
            "blacklist": ["charClassClassrangesMerge"]
        }]
    }
}
```

If you want the latter particular settings, you can avoid setting `plugins` and
`rules` and just use:

```json
{
  "extends": ["optimize-regex/recommended-legacy"]
}
```

Or without the blacklist:

```json
{
  "extends": ["optimize-regex/all-legacy"]
}
```

## Rules

* [optimize-regex](./docs/rules/optimize-regex.md)

## Inspiration

* [regexp-tree](https://github.com/DmitrySoshnikov/regexp-tree)

## License

MIT © Ezinwa Okpoechi
