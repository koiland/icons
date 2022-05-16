const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.modules.push('node_modules', 'src', '.storybook');

    /* SVG loader */
    config.module.rules.push({
      test: /\.svg$/,
      include: resolveApp('src/icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: '[name]',
          },
        },
      ],
    });

    /* https://github.com/JetBrains/svg-sprite-loader/issues/267#issuecomment-769389123 */
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    });

    return config;
  }
}
