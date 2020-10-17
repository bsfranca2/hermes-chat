module.exports = {
	plugins: [
		require('autoprefixer'),
		require('postcss-preset-env'),
		require('postcss-focus-within'),
		require('cssnano')({ preset: 'default' })
	]
};
