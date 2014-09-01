module.exports = {
	publish: {
		files: ['book/**/*.md'],
		tasks: ['publish']
	},
  gh: {
    files: ['book/**/*.md', 'templates/*.html', 'sass/github.scss'],
    tasks: ['github']
  }
};