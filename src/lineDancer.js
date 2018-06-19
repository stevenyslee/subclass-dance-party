var lineDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="line-dancer"></span>');
};

lineDancer.prototype = Object.create(makeDancer.prototype);
lineDancer.prototype.constructor = lineDancer;

lineDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};