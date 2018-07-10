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

// Global variables  pointing to the snake and target objects
const snake = document.getElementById("snake");
const target = document.getElementById("target");

// Generate a random point inside the boundaries
// Returns and array representing the location
// resultPoint[0] -> x coordinate and resultPoint[1] -> y coordinate
const randomPoint = () => {
  //Get the div container of the valid playing area
  const playingArea = document.querySelector(".container");

  // Get the values to generate the random point inside the playing area
  const width = playingArea.clientWidth;
  const height = playingArea.clientHeight;

  // TODO
  // There is still a problem with the positions some times goes out of the boundaries
  x = Math.floor(Math.random() * width + 20);
  y = Math.floor(Math.random() * height + 20);
  resultPoint = [x, y];
  console.log("X: " + resultPoint[0]);
  console.log("Y: " + resultPoint[1]);
  return resultPoint;
};
// Spawn an element(snake or target) in a random position
const spawn = element => {
  let point = randomPoint();
  element.style.left = point[0] + "px";
  element.style.top = point[1] + "px";
};

// Initialize the game
const init = () => {
  spawn(snake);
  spawn(target);
};

init();
//function for moving right setInterval runs this function many times with interval then we have smooth movement to the right
function moveRight(element) {
  var startRight = setInterval(moving, 5),
    pos = 0;

  function moving() {
    if (pos > 900) {
      clearInterval(startRight);
    } else {
      pos++;
      element.style.left = pos + "px";
    }
  }
}

//function movement get the event on the keyboard and check the key code than call move function in this direction
function movement(event) {
  console.log(event.keyCode);
  if (event.keyCode === 38) {
    // up move
    clearInterval(startRight);
  } else if (event.keyCode === 40) {
    // down move
    clearInterval(startRight);
  } else if (event.keyCode === 37) {
    // left move
    clearInterval(startRight);
  } else if (event.keyCode === 39) {
    var startRight = setInterval(function() {
        moving(event.keyCode);
      }, 5),
      pos = 0;

    function moving(eventKey) {
      console.log(eventKey !== 39); //check if eventKey changed

      if (pos > 900 || eventKey !== 39) {
        // if eventKey changed movement have to stop. But if pos>900 snake is stopped.
        clearInterval(startRight);
      } else {
        pos++;
        snake.style.left = pos + "px";
      }
    }
  }
}
window.addEventListener("keydown", movement); //this is event listener for keys arrows  on the keyboard
// now it works but only in one direction and only one time...
// we need to save position and have a posibility to change direction.
