module.exports = {
	'default': {
	  files: ['book/**/*.md', 'templates/*.html', 'sass/github.scss'],
	  tasks: ['default']
	},
	'test': {
		files: ['test/*.js', 'tools/*.js'],
		tasks: ['buster:growl']
	}
};