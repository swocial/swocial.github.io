module.exports = {
  epubPre: {
  	src: ['*.epub']
  },
  epubPost: {
  	src: ['temp']
  },
  githubPre: {
    src: ['*.html']
  },
  githubPost: {
    src: ['temp']
  },
  latexPre: {
    src: ['*.tex']
  },
  latexPost: {
    src: ['temp']
  },
  pdfPre: {
    src: ['*.pdf']
  },
  pdfPost: {
    src: ['*.aux', '*.log', '*.out', '*.tex', '*.toc']
  }
};