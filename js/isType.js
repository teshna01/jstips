
 function isString(value){
 	return typeof value ==='string';
 }

 function isNUmber(value){
 	return typeof value ==='number';
 }
  function isFunction(value){
  	 return typeof value ==='function';
  }

  //判断正则表达式类型
  function isRegExp(value){
  	return typeof toString.call(value) ==='[object RegExp]';
  }
  //判断是否是对象
  function isObect(value){
  	 return value !==null && typeof value ==='object';

  }
  //判断是否是Object的对象
  function isBlanckObject(value){
  	return value !==null && typeof value ==='object' && ! getPrototypeOf(value);
  }
  //判断是否是数组
  function isArray(value){
  	if(Object.prototype.toString.apply(value)==='[object Array]')
  		return true;
  	  else 
  	  	 return false;
  }