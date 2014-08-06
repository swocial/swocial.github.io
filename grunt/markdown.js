var extend = require('extend');

var extractComment = function (src) {
  var start = src.search(/<!--/g);
  var end = src.search(/-->/g);
  return start == 0 && end != -1 ? src.substr(start, end + 3) : "";
};

module.exports = function (grunt) {
  return {
    github: {
      options: {
        template: 'templates/template.html',
        preCompile: function (src, context) {
          var comments = extractComment(src);
          var options = comments != "" ? JSON.parse(comments.substr(4, comments.length - 7)) : {};
          extend(context, options);
          return src.substr(comments.length);
        }
      },
      files: [
        {
          expand: true,
          flatten: true,
          src: 'book/**/*.md',
          dest: '.',
          ext: '.html'
        }
      ]
    }
  };
};