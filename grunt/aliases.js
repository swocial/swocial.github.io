module.exports = {
  'publish': ['github'],
  'github': ['clean:githubPre', 'markdown:github', 'rename:github', 'clean:githubPost', 'sass:github'],
  'epub': ['clean:epubPre', 'concat:epub', 'markdown:epub', 'shell:generateEpub', 'clean:epubPost'],
  'server': ['http-server:github']
};
