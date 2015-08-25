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
  console.log($(element));

  //console.log($(element).data('prioritize'));
  //console.log($(element).data('prioritize'));
  data_prioritize=$(element).data('prioritize');
  var method=data_prioritize.method;
  var key=data_prioritize.key;
  var value;
  if(method=="GET"){
    value=getUrlParameter(key);
  }else if(method=="localStorage"){
    if(typeof(Storage) !== "undefined") {
      value=localStorage[key];
    }
  }else if(method=="sessionStorage"){
    if(typeof(Storage) !== "undefined") {
      value=sessionStorage[key];
    }
  }else if(method=="input"){
    value=$([name=key]).val();
  }else if(method=="variable"){
    //console.log(key);
    //console.log(window[key]);
    value=window[key];
  }

  var append=[];
  $(element).children('[data-prioritize-watch]').each(function (i, watch_element) {
    console.log($(watch_element).data('prioritize-watch'));
    data_value=$(watch_element).data('prioritize-watch');
    if(value==data_value){
      $(element).prepend($(watch_element).detach());
    }
  });
});
