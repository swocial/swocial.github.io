module.exports = function (link) {
  var isInternal = link.search(/href=\"http/g) == -1 || link.search(/href=\"\#/g);
  if (!isInternal) return link;
  return link.replace('href="', 'epub:type="chapter" href="');
};