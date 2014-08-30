module.exports = {
	generateEpub: {
		command: 'pandoc \
							temp/epub.html \
							-f html \
							-t epub \
							-o swocial-manifesto.epub \
							--epub-cover-image book/cover.png \
							--epub-stylesheet css/epub.css \
							--normalize \
							--smart \
							--toc '
	},
	generateLatex: {
		command: 'pandoc \
							book/metadata.yaml temp/all.md \
							-f markdown \
							-t latex \
							-o swocial-manifesto.tex \
							--chapters \
							--standalone \
							--normalize \
							--smart \
							--toc '
	},
	generateMobi: {
		command: 'kindlegen swocial-manifesto.epub'
	},
	generatePdf: {
		command: 'pdflatex \
							swocial-manifesto.tex'
	}
};
