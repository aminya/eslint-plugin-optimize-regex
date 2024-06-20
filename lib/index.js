/**
 * @fileoverview Optimize regex literals
 * @author Ezinwa Okpoechi <brainmaestro@outlook.com>
 */

/**
 * @type {import("eslint").ESLint.Plugin}
 */
const plugin = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Optimize regex literals',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/BrainMaestro/eslint-plugin-optimize-regex',
    },
  },
  rules: {
    'optimize-regex': require('./rules/optimize-regex'),
  },
  configs: {
    recommended: {},
    'recommended-legacy': {},
    all: {},
    'all-legacy': {},
  },
}

/**
 * @type {import("eslint").Linter.FlatConfig}
 */
plugin.configs.recommended = {
  plugins: {
    'optimize-regex': plugin,
  },
  rules: {
    'optimize-regex/optimize-regex': [
      'warn',
      {
        blacklist: ['charClassClassrangesMerge'],
      },
    ],
  },
}

/**
 * @type {import("eslint").Linter.Config}
 */
plugin.configs['recommended-legacy'] = {
  plugins: ['optimize-regex'],
  rules: {
    'optimize-regex/optimize-regex': [
      'warn',
      {
        blacklist: ['charClassClassrangesMerge'],
      },
    ],
  },
}

/**
 * @type {import("eslint").Linter.FlatConfig}
 */
plugin.configs.all = {
  plugins: {
    'optimize-regex': plugin,
  },
  rules: {
    'optimize-regex/optimize-regex': ['warn'],
  },
}

/**
 * @type {import("eslint").Linter.Config}
 */
plugin.configs['all-legacy'] = {
  plugins: ['optimize-regex'],
  rules: {
    'optimize-regex/optimize-regex': ['warn'],
  },
}

module.exports = plugin
module.exports.default = plugin
