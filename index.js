(function(){
  var  CALLBACK_NAME = 'dw_jsonp_cb';

  window[CALLBACK_NAME] = function jsonp_cb(data){
    var script = document.currentScript;
    script.addEventListener('load', function(event){
      event.dwJsonpData = data;
    });
  }

  function jsonp(url, callback){
    var script = document.createElement('script');
    script.src = url + '?callback=' + CALLBACK_NAME;
    var responseContainer = null;
    document.head.appendChild(script);
    script.onload = function (event) {
      setTimeout(function(){
        callback(event.dwJsonpData);
      })
    };
  }
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
