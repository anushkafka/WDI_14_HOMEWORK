// 01
var days_of_the_week = ['Monday', 'Tuesday', 'Wedsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// 02
days_of_the_week.unshift(days_of_the_week.pop());
console.log(days_of_the_week);

// 03
var daysArray = [['Monday', 'Tuesday', 'Wedsday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']];

// 04 Getting rid of Weekdays
console.log(daysArray.slice(1));