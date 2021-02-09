const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});
const withImages = require('next-images');

module.exports = withPlugins([
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  }),
  withImages
]);
