const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              '@layout-header-background': '#F9FAFB',
              '@component-background': '#F9FAFB'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};