var makeQuirkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('quirkyDancer');
};

makeQuirkyDancer.prototype = Object.create(makeDancer.prototype);
makeQuirkyDancer.prototype.constructor = makeQuirkyDancer;

makeQuirkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, 100);
};
