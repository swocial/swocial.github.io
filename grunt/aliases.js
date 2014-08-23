module.exports = {
  'publish': ['github'],
  'github': ['clean:githubPre', 'markdown:github', 'rename:github', 'clean:githubPost', 'sass:github'],
  'server': ['http-server:github']
};