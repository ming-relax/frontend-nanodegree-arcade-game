// Enemies our player must avoid
var Enemy = function(speed, x, row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = row * 83 - 20;
    this.row = row;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt * 40;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(row, col) {
  this.sprite = 'images/char-boy.png';
  this.row = row;
  this.col = col;
  this.x = col * 101;
  this.y = row * 83 - 20;
};

Player.prototype.update = function() {
  this.x = this.col * 101;
  this.y = this.row * 83 - 20;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
  this.row = 5;
  this.col = 2;
};

Player.prototype.handleInput = function(direction) {
  switch (direction) {
    case 'left':
      if (this.col > 0)
        this.col -= 1;
      break;
    case 'up':
      if (this.row > 0)
        this.row -= 1;
      break;
    case 'right':
      if (this.col < 4)
        this.col += 1;
      break;
    case 'down':
      if (this.row < 5)
        this.row += 1;
      break;
  }
  this.update();
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
// 100 enemies in row 2
for (var i = 0; i < 10; i++) {
  allEnemies.push(new Enemy(3, -i*500, 2));
}

// 100 enemies in row 3
for (var i = 0; i < 10; i++) {
  allEnemies.push(new Enemy(2, -i*500, 3));
}
// 100 enemies in row 4
for (var i = 0; i < 10; i++) {
  allEnemies.push(new Enemy(1, -i*500, 4));
}

var player = new Player(5, 2);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
