
    // example of multi optional argumens

  function optArguments(err, optionalA,optionalB,callback){
   	var args=new Array(arguments.length);
	 	for(var i=0;i< args.length; ++i){
	 		args[i]=arguments[i];  // for argumens into new array
	 	 }

	 	err=args.shift();  // get err

	 	if(typeof args[args.length-1]==='function'){
	 		callback=args.pop();  // get callback if is exist
	 	}
    // get optional arguments if not null
	 	if(args.length>0) optionalA=args.shift(); else optionalA=null;
	 	if(args.length>0) optionalB=args.shift(); else optionalB=null;
     // return callback
	 	if(err){
	 		return callback && callback(err);
	 	}

	 	  console.log('optionalA:', optionalA);
      console.log('optionalB:', optionalB);
      console.log('callback:', callback);
   	 }
   	  
      // it can be much easy with ES6
   	  // dont support with <ie9 
   	function optArguments_ES6(...args){
      const err=args.shift();
      const callback=(typeof args[args.length-1]=='function')? args.pop() : null;
      const optionalA=(args.length>0) ? args.shift() : null;
      const optionalB=(args.length>0)? args.shift(): null;

      if(err && callback) return callback(err);

       console.log('optionalA:', optionalA);
       console.log('optionalB:', optionalB);
       console.log('callback:', callback);
   	  }