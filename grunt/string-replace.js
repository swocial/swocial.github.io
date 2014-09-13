module.exports = {
	latex: {
		options: {
			replacements: [{
				pattern: /\{@\{/g,
				replacement: '['
			}, {
				pattern: /\}@\}/g,
				replacement: ']'
			}]
		},
		files: {
			'swocial-manifesto.tex': 'swocial-manifesto.tex'
		}
	}
};