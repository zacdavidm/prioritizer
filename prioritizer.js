var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$("[data-prioritize]").each(function(index, element){
  console.log(element);
  //console.log($(element).data('prioritize'));
  var key=$(element).data('prioritize');
  var get_value=getUrlParameter(key);
  $(element).children('[data-prioritize-watch]').each(function (i, watch_element) {
    console.log($(watch_element).data('prioritize-watch'));
    data_value=$(watch_element).data('prioritize-watch');
    if(get_value==data_value){
      $(element).prepend($(watch_element).detach());
    }
  });
});
