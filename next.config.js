const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
	[
		withCss,
		{
			cssModules: true,
			cssLoaderOptions: {
				importLoaders: 1,
				localIdentName: "[local]___[hash:base64:5]"
			}
		}
	],
	[
		withSass,
		{
			cssModules: true,
			cssLoaderOptions: {
				importLoaders: 1,
				localIdentName: "[local]___[hash:base64:5]"
			}
		}
	]
]);

const debug = process.env.NODE_ENV !== "production";

module.exports = {
	assetPrefix: !debug ? "https://hafidzamr.github.io/" : ""
};
