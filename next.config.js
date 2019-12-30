const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias['@components'] = path.join(
      __dirname,
      '@components/index.js',
    );
    config.resolve.alias['@data'] = path.join(__dirname, '@data/index.js');
    config.resolve.alias['@layouts'] = path.join(
      __dirname,
      '@layouts/index.js',
    );
    // config.resolve.alias['@utils'] = path.join(__dirname, '@utils');

    return config;
  },
});
