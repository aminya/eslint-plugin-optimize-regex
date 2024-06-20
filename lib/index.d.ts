import type { ESLint, Linter } from "eslint";

declare const plugin: ESLint.Plugin & {
  configs: {
    recommended: Linter.FlatConfig;
    "recommended-legacy": Linter.Config;
    all: Linter.FlatConfig;
    "all-legacy": Linter.Config;
  };
};

export default plugin;
