var extend = require('extend'),
  moment = require('moment')
  meta = require('../book/meta');

var extractComment = function (src) {
  var start = src.search(/<!--/g);
  var end = src.search(/-->/g);
  return start == 0 && end != -1 ? src.substr(start, end + 3) : "";
};

var extractLink = function (src) {
  var start = src.search(/\<a /g);
  var end = src.search(/\<\/a\>/g);
  return {
    start: start,
    end: end + 4,
    length: end - start + 4,
    html: src.substr(start, end - start + 4)
  };
};

var convertLinkToInternalEpubLink = function (link) {
  var isInternal = link.search(/href=\"http/g) == -1 || link.search(/href=\"\#/g);
  if (!isInternal) return link;
  return link.replace('href="', 'epub:type="chapter" href="#');
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
          flatten: true,
          src: 'temp/all.md',
          dest: 'swocial-manifesto.html'
        },
        {
          src: './README.md',
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
