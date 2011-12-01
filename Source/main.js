!function(req){
 
 var Polyfills = {
    'Array':[
       'Array.isArray'
      //,'Array.prototype.every'
      ,'Array.prototype.filter'
      ,'Array.prototype.forEach'
      ,'Array.prototype.indexOf'
      ,'Array.prototype.lastIndexOf'
      ,'Array.prototype.map'
      ,'Array.prototype.reduce'
      ,'Array.prototype.reduceRight'
      //,'Array.prototype.shuffle'
      ,'Array.prototype.some'
    ]
   ,'Date':[
       'Date.now'
    ]
   ,'Object':[
       'Object.create'
      ,'Object.extend'
      ,'Object.forEach'
      ,'Object.getOwnPropertyNames'
      ,'Object.getPrototypeOf'
      ,'Object.keys'
      //,'Object.toQueryString'
    ]
   ,'Function':[
       'Function.prototype.bind'
      //,'Function.prototype.construct'
    ]
   //,'String':[]
   //,'Event':[
   //   'Events'
   //]
 };
 
 for(var nat in Polyfills){
   var path = ['Polyfills',nat].join('/')
      ,Native = nat
      ,fills = Polyfills[nat]
      ,count = fills.length
   
   while(count--){
     var fill = [path,fills[count]].join('/')
        ,method = fill.split('.').pop()
        ,Obj = (fill.indexOf('.prototype.') !== -1)? window[Native].prototype : window[Native];
        
     if(!Obj[method]){
       // This array will contain only the fills that arent currently supported by your browser.
       req.push(fill);
     } else {
       // console.log(fill + ' Already exists');
       // Create a dummy module if the method already exists on the native.
       // This will prevent any other modules dependencies from trying to 
       // download this module.
       define(fill,{});
     }
   }
 }
 
 // Special cases and DOM fills
  // The native trim method doesn't remove all the whitespace characters (unicode)
  var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
      "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
      "\u2029\uFEFF";
  if (!String.prototype.trim || ws.trim()) {
    req.push('Polyfills/String/String.prototype.trim');
  } else {
    define('Polyfills/String/String.prototype.trim',{});
  }

  if(!window.JSON){
    req.push('Polyfills/JSON/JSON');
  } else {
    define('Polyfills/JSON/JSON',{});
  }

// Download all the required fills
define(req,function(){
  return req;
});
}([]);
