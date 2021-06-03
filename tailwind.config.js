module.exports = {
	prefix: 'ari-',
	purge: {
		enabled: true,
		content: [
			'./src/**/*.tsx',
			'./exemple/**/*.tsx',
			'./src/style.css',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
