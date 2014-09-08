var extractComment = require('../tools/extractComments');

var parser = require('../tools/parseFunc')();
    status = require('../tools/status')(parser, {
      status: [
        'Chapter scaffolded',
        'Research initiated',
        'Research complete',
        'Structure complete',
        'Chapter complete'
      ],
      url: 'https://github.com/swocial/swocial.github.io/wiki/status#'
    });


module.exports = {
  markdown: {
  	options: {
      separator: '\n',
	    process: function (src) {
        return parser.parse(src);
	    }
  	},
    src: ['book/**/*.md'],
    dest: 'temp/all.md'
  }
};
