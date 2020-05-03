const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

const debug = process.env.NODE_ENV !== "production";

module.exports = withPlugins(
	[
		[
			withCss,
			{
				cssModules: false,
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
	],
	{
		assetPrefix: !debug ? "/" : ""
	}
);
