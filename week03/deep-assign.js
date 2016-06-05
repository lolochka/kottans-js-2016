(function () {
  'use strict';
  
  if (typeof Object.deepAssign === "function") return;
  
  Object.defineProperty(Object, 'deepAssign', {
    enumerable: false,
    writeabble: true,
    configureable: true,
    
    value: function (target, source) {
      var to = Object(target);
      
      for (var i = 1; i < arguments.length; i++) {
    
        if (arguments[i] === undefined || arguments[i] === null) {
          continue;
        }
        
        var keys = Object.keys(Object(arguments[i]));
        
        for (var k = 0, len = keys.length; k < len; k++) {
          var key = keys[k];
          
          if (from[key] instanceof Object) {
            
            if( key in to){
              to[key] = Object.deepAssign(Object(to[key]),from[key]);
            }else{
              to[key] = Object.deepAssign({},from[key]);
            }
            
          } else {
            to[key] = from[key];
          }
        }
      }
      
      return to;
    }
    
  });
}());