Object.prototype.hash = function(string){
  var obj=this;
  var arr=string.split(".");
  arr.forEach(function(elemnt){
  if(obj)
    obj=obj[elemnt];
  });
  return obj;
}
