// Enemies our player must avoid
class Enemy {

  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    this.sprite = 'images/enemy-bug.png';

  };
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // Enemies will appear at different speeds on canvas
    if (this.x > 506) {
      this.x = -50;
      this.speed = 100 + Math.floor(Math.random() * 222);
    };

    // Checks for collisions
    if (this.x < this.x + 80 &&
      player.x + 80 > this.x &&
      player.y < this.y + 60 &&
      60 + player.y > this.y) {
      player.x = 202;
      player.y = 405;
    };
  };

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

// This class requires an update(), render() and
//a handleInput() method.

// Now write your own player class
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-princess-girl.png';
    this.victory = false;
  };


  update() {
    if (this.y < 0) {
      this.victory = true;
      setTimeout(() => {
        this.x = 200;
        this.y = 405;
      }, 800);
    };
  };

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  /**
   *
   * @param {string} input
   */
  //
  handleInput(input) {
    switch (input) {
      case 'left':
        if (this.x > 0) {
          this.x -= 104;
        }
        break;

      case 'up':
        if (this.y > 0) {
          this.y -= 85;
        }
        break;

      case 'right':
        if (this.x < 405) {
          this.x += 104;
        }
        break;

      case 'down':
        if (this.y < 405) {
          this.y += 85;
        }
        break;
    }
  }
};


const bug1 = new Enemy(-101, 63, 200);
const bug2 = new Enemy(-101, 147, 250);
const bug3 = new Enemy(-101, 230, 300);

// Place all enemy objects in an array called allEnemies
const allEnemies = [];
// Now instantiate your objects.
allEnemies.push(bug1, bug2, bug3);


// Place the player object in a variable called player
const player = new Player(200, 405);


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
