(function(global,_NAMESPACE_){

var Events = _NAMESPACE_.Events = function(){
	var  _events = {}
		,_latched = {}
		,REGEX = /:(latch(ed$)?)/i
		
	function removeLatched(type){
		if(type.indexOf(':'))
		if(REGEX.test(type)){
			type = type.replace(REGEX,'');
			console.log(type)
			_latched[type] = true;
		}
		return type;
	}
	
	return {
		 addEvent: function(/* Sting */ type, /* Function */ callback){
			var  type = removeLatched(type)
				,events = _events[type] = _events[type] || [];
			
			if(!(typeof callback == 'function')) 
				throw new TypeError(_NAMESPACE_.Events.errors.callback_must_be_function); 
  
			(_latched[type])? setTimeout(callback,15) : events.push(callback);
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
				,events = _events[type]
				,length = events.length >>> 0
				,args = Array.prototype.slice.call(arguments,1)
				,i = 0
	 
			if(events && length) {
				for (; i < length; i++) {
					if (i in events) {
						try{
						events[i].apply(this,args);
						} catch (e) { 
							setTimeout(function(){
								throw new Error(e);
							},15);
						}
					}
				}
			}
			return this;
		}
	};
};

Events.errors = {
    callback_must_be_function: 'The Callback needs to be a function.'
}

})(this,this);