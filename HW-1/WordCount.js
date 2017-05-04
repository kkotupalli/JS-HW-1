function countWords(str) {
  var inputString = str.trim(); 
  var count = 0;
  if(inputString=='')
      count = 0;
  else
      count = inputString.split(/\s+/).length; 
  return count;
}
