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
	}
};
