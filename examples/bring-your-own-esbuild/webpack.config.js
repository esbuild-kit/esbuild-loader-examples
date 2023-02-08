const path = require('path');
const esbuild = require('esbuild');
const { EsbuildPlugin } = require('esbuild-loader');

module.exports = {
	mode: 'production',

	entry: './src/index.ts',

	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, `./dist/`),
	},

	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015',
					implementation: esbuild,
				},
			},
		],
	},

	optimization: {
		minimizer: [
			// Use esbuild to minify
			new EsbuildPlugin(),
		],
	},
};
