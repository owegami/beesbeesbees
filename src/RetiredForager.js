var RetiredForagerBee = function(age, color, food) {

  this.age = (age === undefined) ? age = 40 : age = age;
  this.color = (color === undefined) ? color = 'grey' : color = color;
  this.food = (food === undefined) ? food = 'jelly' : food = food;

  ForagerBee.call(this, age, color, food);

  this.canFly = false;
  this.job = 'gamble';

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = ForagerBee.prototype.forage;