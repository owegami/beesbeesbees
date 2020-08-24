var Bee = function(age, color, food) {

  this.age = (age === undefined) ? age = 5 : age = age;
  this.color = (color === undefined) ? color = 'yellow' : color = color;
  this.food = (food === undefined) ? food = 'jelly' : food = food;

  Grub.call(this, age, color, food);

  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

