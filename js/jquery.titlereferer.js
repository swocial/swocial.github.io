(function ($) {
  $.fn.titlereferer = function () {
    this.each(function (i, el) {
      var title = $(el);
      title.html($('<a>').attr('href', '#' + title.attr('id')).text(title.text()));
    });
  };
}(jQuery));