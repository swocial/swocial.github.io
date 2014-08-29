module.exports = {
  'publish': ['github'],
  'github': ['clean:githubPre', 'markdown:github', 'rename:github', 'clean:githubPost', 'sass:github'],
  'epub': ['concat:epub', 'markdown:epub', 'shell:generateEpub'],
  'server': ['http-server:github']
};
