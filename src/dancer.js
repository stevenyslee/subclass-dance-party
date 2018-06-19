var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.position = { 'top' : top, 'left' : left };
  this.setPosition(this.position['top'], this.position['left']);
};

makeDancer.prototype.step = function() {
  var currentThis = this;
  setTimeout(function() {
    currentThis.step();
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
