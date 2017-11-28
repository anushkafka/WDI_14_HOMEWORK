var age = 15;
var max_age = 75;
var consumption_per_day = 2;

var consumption_lifetime = consumption_per_day * 365 * (max_age - age);
alert('You will need ' + consumption_lifetime + ' packets of Crisps to last you until the ripe old age of '
  + max_age);
