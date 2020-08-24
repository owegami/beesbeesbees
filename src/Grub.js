var Grub = function(age, color, food) {
  this.age = (age === undefined) ? age = 0 : age = age;
  this.color = (color === undefined) ? color = 'pink' : color = color;
  this.food = (food === undefined) ? food = 'jelly' : food = food;

  // this.age = age;
  // this.color = color;
  // this.food = food;

};

Grub.prototype.eat = function() {
  console.log('Num num num! I love', food);
}