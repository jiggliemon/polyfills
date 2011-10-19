(function(global,_NAMESPACE_){

var Events = _NAMESPACE_.Events = function(){
  var  _events = {}
      ,_latched = {}
      ,_arguments = {}
      ,REGEX = /:(latch(ed$)?)/i;
    
  function removeLatched(type){
    if(type.indexOf(':')){
      if(REGEX.test(type)){
        type = type.replace(REGEX,'');
        _latched[type] = 1
      }
    }
    return type;
  }
  
  return {
     getEvents: function(key){
       var events =_events[key];
       return (typeof key === 'string') ? events?events:[] :Object.keys(_events);
    }
    ,addEvent: function(/* Sting */ type, /* Function */ callback){
      var  type = removeLatched(type)
          ,events = _events[type] = _events[type] || [];
      
      if(!(typeof callback == 'function')) {
        throw new TypeError(_NAMESPACE_.Events.errors.callback_must_be_function); 
      }
      
      (_latched[type]) ? callback.apply(this,_arguments[type]) : events.push(callback);
      return this;
    }

    ,addEvents: function(/* Object */ events){
      for(var key in events){
        if(events.hasOwnProperty(key)){
          this.addEvent(key,events[key]);
        }
      }
      return this;
    }
    
    ,fireEvent: function(/* String */ type) {
      
      var  type = removeLatched(type)
          ,isLatched = _latched[type]
          ,events = _events[type]
          ,length = events.length >>> 0
          ,args = Array.prototype.slice.call(arguments,1)
          ,i = 0;
      
      if(events && length) {
        for (; i < length; i++) {
          if (i in events) {
            try{
              events[i].apply(this,args);
            } catch (e) { 
              throw new Error('Event Error - '+type+':: '+ e);
            }
          }
        }
      }
      
      if(isLatched){
        _arguments[type] = args;
        delete events;
      }
      
      return this;
    }
  };
};

Events.errors = {
    callback_must_be_function: 'The Callback needs to be a function.'
}

})(this,this);