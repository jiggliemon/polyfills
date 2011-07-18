/* Event */
(function(global,namespace){
function isFunction(func){
	return typeof func == 'function';
}
var errorMessage = {
	 callback_must_be_function: "The Callback needs to be a Function."
	,argument_must_be_object: "The first argument must be an Object"
}

var Events = namespace.Events = function(){
	var _events = {}

	return {
		 addEvent: function(/* Sting */ type, /* Function */ callback){
			var events = _events[type] = _events[type] || [];
			if(!isFunction(callback)) throw new TypeError(errorMessage.callback_must_be_function);   
			(events == 1)?callback():events.push(callback);
			return this;
		}

		,addEvents: function(/* Object */ events){
			if((''+events) !== '[object Object]') throw new TypeError(errorMessage.argument_must_be_object)
			for(var key in events){
				if(events.hasOwnProperty(key)){
					this.addEvent(key,events[key]);
				}
			}
			return this;
		}
		
		,fireEvent: function(/* String */ type) {
			var  events = _events[type]
				,length = events.length >>> 0
				,args = Array.prototype.slice.call(arguments,1)
				,i = 0
	 
			if(events && length) {
				for (; i < length; i++) {
					if (i in events) {
						events[i].apply(this,args);
					}
				}
			}
			return this;
		}
		,fireOnce: function(/* String */ type){
			this.fireEvent(type);
			_events[type] = 1;
			return this;
		}
	};
};
})(global,namespace);