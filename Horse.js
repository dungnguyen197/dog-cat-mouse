function Horse() {

}
Horse.prototype.run = function() {
	console.log('Run');
};
Horse.prototype.eat = function() {
	console.log('Eating');
};
module.exports = Horse;
