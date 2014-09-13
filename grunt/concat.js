var parser = require('../tools/parseFunc')();

var acronym = require('../tools/acronym')(parser),
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
	    process: function (src) {
        return parser.parse(src);
	    }
  	},
    src: ['book/**/*.md'],
    dest: 'temp/all.md'
  }
};
