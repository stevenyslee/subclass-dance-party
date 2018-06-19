var makeGroovyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('groovyDancer');
};

makeGroovyDancer.prototype = Object.create(makeDancer.prototype);
makeGroovyDancer.prototype.constructor = makeGroovyDancer;

makeGroovyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, 120);

  var node = this.$node;

  this.$node.click(function() {
    node.addClass('spin');
    setTimeout(function () {
      node.removeClass('spin');
    }, 2000);
  });

};
