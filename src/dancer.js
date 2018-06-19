var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.position = { 'top' : top, 'left' : left };
  this.setPosition(this.position['top'], this.position['left']);
  this.isInALine = false;
};

makeDancer.prototype.move = function(input) {
  input = input || 20;
  var randomNumber = Math.round(Math.random());
  if (randomNumber === 1 && this.position.left > 300){
    this.position.left += Math.floor(Math.random() * Math.floor(input));
  } else if (randomNumber === 0 && this.position.left < 500) {
    this.position.left -= Math.floor(Math.random() * Math.floor(input));
  } else if (randomNumber === 1){
    this.position.left += Math.floor(Math.random() * Math.floor(input));
  } else if (randomNumber === 0) {
    this.position.left -= Math.floor(Math.random() * Math.floor(input));
  }
  this.setPosition(this.position.top, this.position.left);
}

makeDancer.prototype.step = function(movement) {
  var currentThis = this;
  setTimeout(function() {
    currentThis.isInLine ? null : currentThis.move(movement);
    currentThis.step();
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(toTop, toLeft) {
  var styleSettings = {
    top: toTop,
    left: toLeft
  };
  this.$node.css(styleSettings);
};
