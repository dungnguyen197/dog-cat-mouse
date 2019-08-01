function Mouse(color, weight)
{
	this.color = color;
	this.weight = weight;
}
Mouse.prototype.sleep = function() {
	console.log('Zzzz ...');
};
module.exports = Mouse;