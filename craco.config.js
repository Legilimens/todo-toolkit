const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#3048a6',
              '@font-size-base': '16px',
              '@text-color': 'rgba(38, 38, 38, 0.8)',
              '@font-family': 'Inter, sans-serif',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
