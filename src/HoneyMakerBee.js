var HoneyMakerBee = function(age, color, food) {

  this.age = (age === undefined) ? age = 10 : age = age;
  this.color = (color === undefined) ? color = 'yellow' : color = color;
  this.food = (food === undefined) ? food = 'jelly' : food = food;

  Bee.call(this, age, color, food);

  this.honeyPot = 0;
  this.job = 'make honey';
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

