if(!Object.defineProperties)
Object.defineProperties = function(obj, properties) {
	function convertToDescriptor(desc) {
		function hasProperty(obj, prop) {
			return Object.prototype.hasOwnProperty.call(obj, prop);
		}

		function isCallable(v) {
			// NB: modify as necessary if other values than functions are callable.
			return typeof v === "function";
		}

		if (typeof desc !== "object" || desc === null)
		throw new TypeError("bad desc");

		var  d = {} ,g ,s
		
		if (hasProperty(desc, "enumerable"))
			d.enumerable = !!obj.enumerable;
		if (hasProperty(desc, "configurable"))
			d.configurable = !!obj.configurable;
		if (hasProperty(desc, "value"))
			d.value = obj.value;
		if (hasProperty(desc, "writable"))
			d.writable = !!desc.writable;
		if (hasProperty(desc, "get")) {
			g = desc.get;
			if (!isCallable(g) && g !== "undefined")
				throw new TypeError("bad get");
			d.get = g;
		}

		if (hasProperty(desc, "set")) {
			s = desc.set;
			if (!isCallable(s) && s !== "undefined")
				throw new TypeError("bad set");
			d.set = s;
		}

		if (("get" in d || "set" in d) && ("value" in d || "writable" in d))
			throw new TypeError("identity-confused descriptor");

		return d;
	}

	if (typeof obj !== "object" || obj === null)
		throw new TypeError("bad obj");

	properties = Object(properties);
	var  keys = Object.keys(properties)
		,descs = []
		,i = 0
	for (; i < keys.length; i++)
		descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
	for (var i = 0; i < descs.length; i++)
		Object.defineProperty(obj, descs[i][0], descs[i][1]);
	
	return obj;
}
