const env = require("./env-config");

module.exports = {
	presets: ["next/babel"],
	plugins: [
		["transform-define", env],
		[
			"styled-components",
			{
				ssr: true,
				minify: true,
				displayName: false,
				fileName: false,
				pure: true
			}
		]
	]
};