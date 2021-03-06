var extend = require('extend'),
    meta = require('../book/meta');

module.exports = function (grunt) {
  return {
    github: {
      options: {
        template: 'templates/github.html'
      },
      files: [
        {
          flatten: true,
          src: 'temp/all.md',
          dest: 'index.html'
        }
      ]
    },
    epub: {
      options: {
        template: 'templates/epub.html',
        templateContext: {
          title: meta.title
        }
      },
      files: [
        {
          src: 'temp/all.md',
          dest: 'temp/epub.html'
        }
      ]
    }
  };
};
