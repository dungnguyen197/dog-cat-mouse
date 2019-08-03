function Horse() {

}
Horse.prototype.run = function() {
	console.log('Run');
};
Horse.prototype.sleep = function() {
	console.log('Sleep');
};
module.exports = Horse;