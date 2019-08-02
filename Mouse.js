function Mouse(color, weight)
{
	this.color = color;
	this.weight = weight;
	this.isDead = false;
}
Mouse.prototype.sleep = function() {
	console.log('Zzzz ...');
};
Mouse.prototype.die = function() {
	this.isDead = true;
}
Mouse.prototype.run = function() {
	console.log('Run ...');
}
module.exports = Mouse;