var snake = document.getElementById("snake");//get the snake element on the page


//function for moving right setInterval runs this function many times with interval then we have smooth movement to the right
function moveRight(element){

	var startRight = setInterval(moving, 5),pos=0;
	

	
	
	function moving() {
		if (pos>900){
			clearInterval(startRight);
		}
      	else {
      		pos++;
    	   	element.style.left = pos + 'px';
      }
    }
}


       
    
//function movement get the event on the keyboard and check the key code than call move function in this direction
function movement(event){console.log(event.keyCode);
	if (event.keyCode===38){
		// up move
	clearInterval(startRight);

	}
	else if (event.keyCode===40){
		// down move
		clearInterval(startRight);
	
	
	}
	else if (event.keyCode===37){
		// left move
		clearInterval(startRight);
			}
	else if (event.keyCode===39){
		
	var startRight = setInterval(function(){moving(event.keyCode)}, 5),pos=0;
	


	
	
	function moving(eventKey) {console.log(eventKey!==39);//check if eventKey changed

		if ((pos>900)||(eventKey!==39)){ // if eventKey changed movement have to stop. But if pos>900 snake is stopped.
			clearInterval(startRight);
		}
      	else {
      		pos++;
    	   	snake.style.left = pos + 'px';
      }
    }
		
	}

}
window.addEventListener("keydown", movement); //this is event listener for keys arrows  on the keyboard
// now it works but only in one direction and only one time...
//we need to save position and have a posibility to change direction.
