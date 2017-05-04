function rentalCarCost(d) {
  var discount;
  var rentForOneDay = 40;
  if(d >= 7)
     discount = 50;
  else if (d >= 3)
     discount = 20;
  else
     discount = 0;
  return ((d * rentForOneDay) - discount);
}
