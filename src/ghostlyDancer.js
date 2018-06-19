var makeGhostlyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("ghostlyDancer");
};

makeGhostlyDancer.prototype = Object.create(makeDancer.prototype);
makeGhostlyDancer.prototype.constructor = makeGhostlyDancer;

makeGhostlyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle("fast", function(){
    // Animation complete.
  }).animate({
    opacity: 0.55,
    left: "-=50",
    top: "-=50"
  }, 5000, function() {
    // Animation complete.
  }).mouseover(function(){
    $(".ghostlyDancer").css("display", "none");
  });
};