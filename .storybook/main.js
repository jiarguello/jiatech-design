module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: false, // type-check stories during Storybook build
  },
  webpackFinal: async (config, { configType }) => {
    const tsConfigIndex = config.plugins.findIndex(
      (v) => v.constructor.name === 'ForkTsCheckerWebpackPlugin'
    );
    config.plugins.splice(tsConfigIndex, 1);
    return config;
  },
};
