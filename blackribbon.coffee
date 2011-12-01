link = "http://www.sebastianziemke.de/"

jQuery ($) ->
  users = window.STUDIP.BlackRibbon ? []

  $(".avatar-normal, .avatar-medium, .avatar-small").each (index, element) ->
    matched = $(element).attr("class").match /\buser-([a-zA-Z0-9_@-]+)\b/
    console.log users
    return unless _.include users, matched?[1]
    $(element).wrap '<span class="ribbon-wrap"/>'


  $(wrap).append "<a href='#{link}'></a>" for wrap in $ ".ribbon-wrap"
