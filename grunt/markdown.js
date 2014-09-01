var extend = require('extend'),
    moment = require('moment')
    meta = require('../book/meta');

var extractComment = require('../tools/extractComments'),
    extractLink = require('../tools/extractLink'),
    convertLinkToInternalEpubLink = require('../tools/convertLinkToInternalEpubLink');

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
        },
        postCompile: function (src, context) {
          var start = 0;
          var srcAsArray = src.split('');
          var srcCopy = src.substr(0);
          var link = extractLink(srcCopy);
          while (link.start != -1) {
            start += link.start;
            var convertedLink = convertLinkToInternalEpubLink(link.html);
            srcAsArray.splice(start, link.length, convertedLink);
            srcCopy = srcCopy.substr(link.end);
            link = extractLink(srcCopy);
            start++;
          }
          return srcAsArray.join('');
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
