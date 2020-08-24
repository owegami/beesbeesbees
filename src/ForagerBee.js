var ForagerBee = function(age, color, food) {

  this.age = (age === undefined) ? age = 10 : age = age;
  this.color = (color === undefined) ? color = 'yellow' : color = color;
  this.food = (food === undefined) ? food = 'jelly' : food = food;

  HoneyMakerBee.call(this, age, color, food);

  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}