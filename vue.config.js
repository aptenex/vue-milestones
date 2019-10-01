const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/less/defaults.less'),
      ],
    });
}
module.exports = {
  css: {
    loaderOptions: {
      less: {
        data: `
          @import "@/less/_variables.less";
        `,
      },
    },
  },

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
  },
  filenameHashing: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.less?$/,
          use: [
            'less-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.less'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
};
