// part 01
var name = prompt('What is your name ?');

if (name) {
  console.log('Welcome ' + name);
}

// part 02
var input = prompt('What is your prefered meal? (Steak, Fruit salad, Tofurkey, Pork chops)');
var food_item = input.trim().toLowerCase();


if (food_item === 'fruit salad' || food_item === 'tofurkey') {
  console.log("Vegan Friendly");
} else {
  console.log("Vegans Beware!");
}