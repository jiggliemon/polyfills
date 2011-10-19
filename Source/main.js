!function(req){
 
 var Polyfills = {
    'Array':[
       'Array.isArray'
      ,'Array.prototype.every'
      ,'Array.prototype.filter'
      ,'Array.prototype.forEach'
      ,'Array.prototype.indexOf'
      ,'Array.prototype.lastIndexOf'
      ,'Array.prototype.map'
      ,'Array.prototype.reduce'
      ,'Array.prototype.shuffle'
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
      ,'Object.toQueryString'
    ]
   ,'Function':[
       'Function.prototype.bind'
      ,'Function.prototype.construct'
    ]
   ,'String':[
       'String.prototype.trim'
    ]
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

// Download all the required fills
define(req,function(){
  return req;
});
}([]);