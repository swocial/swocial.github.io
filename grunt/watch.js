module.exports = {
  github: {
    files: ['book/**/*.md', 'templates/*.html', 'sass/github.scss'],
    tasks: ['markdown:github', 'sass:github']
  }
};