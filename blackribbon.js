(function() {
  var link;
  link = "http://www.sebastianziemke.de/";
  jQuery(function($) {
    var users, wrap, _i, _len, _ref, _ref2, _results;
    users = (_ref = window.STUDIP.BlackRibbon) != null ? _ref : [];
    $(".avatar-normal, .avatar-medium, .avatar-small").each(function(index, element) {
      var matched;
      matched = $(element).attr("class").match(/\buser-([a-zA-Z0-9_@-]+)\b/);
      console.log(users);
      if (!_.include(users, matched != null ? matched[1] : void 0)) {
        return;
      }
      return $(element).wrap('<span class="ribbon-wrap"/>');
    });
    _ref2 = $(".ribbon-wrap");
    _results = [];
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      wrap = _ref2[_i];
      _results.push($(wrap).append("<a href='" + link + "'></a>"));
    }
    return _results;
  });
}).call(this);
