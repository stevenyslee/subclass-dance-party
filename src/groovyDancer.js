var makeGroovyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeGroovyDancer.prototype = Object.create(makeDancer.prototype);
makeGroovyDancer.prototype.constructor = makeGroovyDancer;

makeGroovyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
};