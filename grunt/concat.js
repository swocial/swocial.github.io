var extractComment = require('../tools/extractComments');

module.exports = {
  markdown: {
  	options: {
	    process: function (src) {
        var comments = extractComment(src);
        var options = comments != "" ? JSON.parse(comments.substr(4, comments.length - 7)) : {};
        var statusName = {
          0: 'Chapter scaffolded',
          1: 'Research initiated',
          2: 'Research complete',
          3: 'Structure complete',
          4: 'Chapter complete'
        }[options.status];
        var start = src.search(/<!--/g);
        var header = '\
*Status: [' + statusName + ' (' + options.status + ')](https://github.com/swocial/swocial.github.io/wiki/status#' + options.status + ')*\n\n';
				var headerAsArray = header.split('');
				var srcAsArray = src.split('');
				headerAsArray.unshift(start, 0);
				if (start != -1) {
					srcAsArray.splice(start, comments.length);	
				}
				Array.prototype.splice.apply(srcAsArray, headerAsArray);
        return srcAsArray.join('');
	    }
  	},
    src: ['book/**/*.md'],
    dest: 'temp/all.md'
  }
};
