var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Kiki');
var tom = new Cat();
var mouse = new Mouse('orange', 3);

try {
	tom.eat(dog);
}
catch(error) {
	console.log('Error while cat eating a dog');
}
console.log(tom);