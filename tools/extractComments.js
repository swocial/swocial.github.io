module.exports = function (src) {
  var start = src.search(/<!--/g);
  var end = src.search(/-->/g);
  if (start == -1 || end == -1) return "";
  return src.substr(start, end - start + 3);
};

