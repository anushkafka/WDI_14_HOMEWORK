var birth_year = prompt("Which year were you born?");
var today = new Date();
var current_year = today.getFullYear();

var age = current_year - birth_year;
alert('You are ' + age + ' years old');