module.exports = {
	'default': ['publish'],
  'publish': ['github', 'epub', 'pdf'],
  'github': ['clean:githubPre', 'concat:markdown', 'markdown:github', 'clean:githubPost', 'sass:github'],
  'epub': ['clean:epubPre', 'concat:markdown', 'markdown:epub', 'shell:generateEpub', 'clean:epubPost'],
  'pdf': ['clean:latexPre', 'concat:markdown', 'shell:generateLatex', 'clean:latexPost', 'clean:pdfPre', 'shell:generatePdf', 'shell:generatePdf', 'clean:pdfPost'],
  'server': ['http-server:github']
};
