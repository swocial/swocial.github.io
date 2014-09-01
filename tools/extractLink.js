module.exports = function (src) {
  var start = src.search(/\<a /g);
  var end = src.search(/\<\/a\>/g);
  return {
    start: start,
    end: end + 4,
    length: end - start + 4,
    html: src.substr(start, end - start + 4)
  };
};