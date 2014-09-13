module.exports = {
	'default': ['publish'],
	'publish': ['github', 'epub', 'mobi', 'pdf'],
	'github': ['env:github', 'clean:githubPre', 'concat:markdown', 'markdown:github', 'clean:githubPost', 'sass:github'],
	'epub': ['env:epub', 'clean:epubPre', 'concat:markdown', 'markdown:epub', 'shell:generateEpub', 'clean:epubPost'],
	'mobi': ['epub', 'shell:generateMobi'],
	'pdf': ['env:pdf', 'clean:latexPre', 'concat:markdown', 'shell:generateLatex', 'string-replace:latex', 'clean:latexPost', 'clean:pdfPre', 'shell:generatePdf', 'shell:generatePdf', 'clean:pdfPost'],
	'server': ['http-server:github']
};
