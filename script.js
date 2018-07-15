// Things TODO
/**
 * 1. Generate two random spawn spots(inside the boundaries), one for the snake, and other for the target.
 * 2. Catch direction (up,down,left,right) key strokes.
 * 3. Apply movement to the snake in the correct direction.
 * 4. Update the UI.
 * 5. Check if the Snake is inside the boundaries, if NOT, then, GAME OVER. (Update UI)
 * 6. Check if the Snake catch the "catch", if so, increment snake size and repawn the cacth in a random position.
 * 7. Update the UI
 *
 */

// Global variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
class Snake {
  constructor(x, y, size, speed, color, direction) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.color = color;
    // up - down - right - left
    this.directon = direction;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fill();
  }
}

let snake = new Snake(
  canvas.width / 2,
  canvas.height / 2,
  10,
  1,
  "blue",
  "down"
);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTarget();
  snake.draw();
  // make movement
  switch (snake.directon) {
    // Move rigth increase x and y remains constant
    case "right":
      snake.x += snake.speed;
      break;
    case "left":
      snake.x -= snake.speed;
      break;
    // Up
    case "up":
      snake.y -= snake.speed;
      break;
    // Down
    case "down":
      snake.y += snake.speed;
    default:
      break;
  }

  if (
    snake.y < 0 ||
    snake.x < 0 ||
    snake.y > canvas.height ||
    snake.x > canvas.width
  ) {
    console.log("Movement should be cancelled, Game OVER");
    // Cancel movement if snake out of boundaries
    loop = clearInterval(loop);
  }
}

// Generate a random point inside the boundaries
// Returns and array representing the location
// resultPoint[0] -> x coordinate and resultPoint[1] -> y coordinate
const randomPoint = () => {
  // Get the values to generate the random point inside the playing area
  const width = canvas.width;
  const height = canvas.height;
  // TODO
  // There is still a problem with the positions some times goes out of the boundaries
  x = Math.floor(Math.random() * width + 1);
  y = Math.floor(Math.random() * height + 1);
  resultPoint = [x, y];

  return resultPoint;
};
const point = randomPoint();
const drawTarget = () => {
  ctx.fillStyle = "red";
  ctx.fillRect(point[0], point[1], snake.size, snake.size);
};
window.addEventListener("keydown", event => {
  console.log(event.key);
  switch (event.key) {
    case "ArrowRight":
      snake.directon = "right";
      break;
    case "ArrowLeft":
      snake.directon = "left";
      break;
    case "ArrowUp":
      snake.directon = "up";
      break;
    case "ArrowDown":
      snake.directon = "down";
      break;
    default:
      break;
  }
});
snake.draw();
// Call the draw function every 80 milisenconds
let loop = setInterval(draw, 80);
