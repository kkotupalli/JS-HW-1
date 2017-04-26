function getMiddle(s) {
   var wordLength = s.length;
   var middleChar;
   if (wordLength % 2 == 0)
       middleChar = s.substr(Math.floor((wordLength / 2 - 1)), 2);
   else
       middleChar = s.substr(Math.floor((wordLength / 2)), 1);
   return middleChar;
}
