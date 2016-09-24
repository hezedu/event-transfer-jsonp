(function(){
  var  CALLBACK_NAME = 'dw_jsonp_cb';
  var CALLBACK_PARAM = 'callback=' + CALLBACK_NAME;

  window[CALLBACK_NAME] = function jsonp_cb(data){
    var script = document.currentScript;
    script.addEventListener('load', function(event){
      event.dwJsonpData = data;
    });
  }

  function _joinUrl(url){
    var indexS = url.indexOf('?');
    if(indexS === -1){
      return url + '?' + CALLBACK_PARAM;
    }
    var last = url[url.length - 1];
    if(last === '?' || last ==='&'){
      return url + CALLBACK_PARAM;
    }
    return url + '&' + CALLBACK_PARAM;
  }

  function jsonp(url, callback){
    var script = document.createElement('script');
    script.src = _joinUrl(url);
    document.head.appendChild(script);
    script.onload = function (event) {
      setTimeout(function(){
        callback(event.dwJsonpData);
      })
    };
  }

  //bind
  if (typeof define === 'function' && define.amd) {
    define('dw_jsonp', function() {
      return jsonp;
    });
  }else if(typeof module === 'object' && module.exports){
    module.exports = jsonp
  }else{
    window['dw_jsonp'] = jsonp;
  }
})();
