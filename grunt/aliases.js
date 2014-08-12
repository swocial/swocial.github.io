module.exports = {
  'publish': ['github'],
  'github': ['markdown:github', 'rename:github', 'clean:github'],
  'server': ['http-server:github']
};