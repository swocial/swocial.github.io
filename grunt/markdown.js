var extend = require('extend'),
  moment = require('moment');

var extractComment = function (src) {
  var start = src.search(/<!--/g);
  var end = src.search(/-->/g);
  return start == 0 && end != -1 ? src.substr(start, end + 3) : "";
};

module.exports = function (grunt) {
  return {
    github: {
      options: {
        template: 'templates/github.html',
        preCompile: function (src, context) {
          var comments = extractComment(src);
          var options = comments != "" ? JSON.parse(comments.substr(4, comments.length - 7)) : {};
          var statusNames = {
            0: 'Chapter scaffolded',
            1: 'Research initiated',
            2: 'Research complete',
            3: 'Structure complete',
            4: 'Chapter complete'
          };
          options.statusName = statusNames[options.status];
          extend(context, options);
          return src.substr(comments.length);
        },
        templateContext: {
          previous: null,
          next: null,
          published: moment().format('YYYY.MM.DD')
        }
      },
      files: [
        {
          expand: true,
          flatten: true,
          src: 'book/**/*.md',
          dest: '.',
          ext: '.html'
        },
        {
          expand: true,
          src: './README.md',
          dest: '.',
          ext: '.html'
        }
      ]
    },
    epub: {
      options: {
        template: 'templates/epub.html'
      },
      files: [
        {
          src: 'temp/epub.md',
          dest: 'temp/epub.html'
        }
      ]
    }
  };
};
