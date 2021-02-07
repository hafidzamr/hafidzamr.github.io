const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withPlugins([
  withImages,
  { assetPrefix: !debug ? 'https://hafidzamr.github.io/' : '' }
]);
