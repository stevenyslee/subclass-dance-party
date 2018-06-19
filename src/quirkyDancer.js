var makeQuirkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('quirkyDancer');
};

makeQuirkyDancer.prototype = Object.create(makeDancer.prototype);
makeQuirkyDancer.prototype.constructor = makeQuirkyDancer;

makeQuirkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  // this.$node.toggle("fast", function(){
  //   // Animation complete.
  // }).animate({
  //   opacity: 0.25,
  //   left: "+=50",
  //   height: "toggle"
  // }, 5000, function() {
  //   // Animation complete.
  // });
};

