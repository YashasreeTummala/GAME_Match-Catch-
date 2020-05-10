var CountDown_Time = 30;
var timerId = setInterval(timer,1000);
function timer() {
    if (CountDown_Time == -1){
        clearInterval(timerId);
        var modal = document.getElementById("myModal2");
        var bt = document.getElementById("redirect3");
        //var span = document.getElementsByClassName("closeagain")[0];
        modal.style.display = "block";
        //span.onclick = function() {
        //modal.style.display = "none";
        //}
      
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "GAME OVER..!!";
                }
          }
          bt.onclick = function(){
            location.href='Level5.html';
          }
        }else{
          document.getElementById('timer').innerHTML = " " + CountDown_Time;
          CountDown_Time--;
      
      }
} 
var dragItem27 = document.getElementById("dragElement27");
var dragItem28 = document.getElementById("dragElement28");
var dragItem29 = document.getElementById("dragElement29");
var dragItem30 = document.getElementById("dragElement30");
var dragItem31 = document.getElementById("dragElement31");
var dragItem32 = document.getElementById("dragElement32");
var dragItem33 = document.getElementById("dragElement33");
var dragItem34 = document.getElementById("dragElement34");
var dragItem35 = document.getElementById("dragElement35");
var dragItem36 = document.getElementById("dragElement36");
var dropLoc9 = document.getElementById("dropLocation9"); 
var dropLoc10 = document.getElementById("dropLocation10");
var popcount = 0;
var count = 0;
var TimerId;
dragItem27.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem28.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem29.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem30.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem31.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem32.ondragstart = function(evt) {
    //This event fill be fired when user starts dragging the item
    evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
    console.log("It's Dragging");
  }
dragItem33.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem34.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem35.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem36.ondragstart = function(evt) {
    //This event fill be fired when user starts dragging the item
    evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
    console.log("It's Dragging");
  }

dropLoc9.ondragover = function(evt) {
  //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
  evt.preventDefault();
  console.log("It's Drag Over");
  }

  dropLoc9.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    //var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement28"||dropItem=="dragElement31"||dropItem=="dragElement32"||dropItem=="dragElement35"||dropItem=="dragElement36"){
		console.log("It's Dropped");
		console.log(dropItem);
		var myElement =  document.getElementById(dropItem);
		console.log(myElement);
		var myNewElement = document.createElement('img');
		//myNewElement.src = myElement.src;  //to add dragged image in div
		dropLoc9.appendChild(myElement); //Place image in Drop Location

		makesound();
		function makesound(){
			var sound = new Audio('DragSound.mp3');
			sound.play();
			}
		popcount = popcount + 1;
		count = count + 10;
		score.innerHTML = count;
		if(popcount == 10 )
			  setTimeout(function(){ popup(); }, 1000);
    }
	if(dropItem=="dragElement27"||dropItem=="dragElement29"||dropItem=="dragElement30"||dropItem=="dragElement33"||dropItem=="dragElement34"){
    count = count -5;//wrong answer
    score.innerHTML = count;
		wrongdrag();
		function wrongdrag(){
        var sound = new Audio('wronganswer.mp3');
        sound.play();
		}
	}
  }
  
  dropLoc10.ondragover = function(evt) {
    //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
    evt.preventDefault();
    console.log("It's Drag Over");
   }
              
        
  dropLoc10.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement27"||dropItem=="dragElement29"||dropItem=="dragElement30"||dropItem=="dragElement33"||dropItem=="dragElement34"){
			console.log("It's Dropped");
			console.log(dropItem);
			var myElement =  document.getElementById(dropItem);
			console.log(myElement);
			var myNewElement = document.createElement('img');
			//myNewElement.src = myElement.src;  //to add dragged image in div
			dropLoc10.appendChild(myElement); //Place image in Drop Location

			makesound();
			function makesound(){
				var sound = new Audio('DragSound.mp3');
				sound.play();
			}
		popcount = popcount + 1;
		count = count + 10;
		score.innerHTML = count;
		if(popcount == 10 )
			  setTimeout(function(){ popup(); }, 1000);
    }
	if(dropItem=="dragElement28"||dropItem=="dragElement31"||dropItem=="dragElement32"||dropItem=="dragElement35"||dropItem=="dragElement36"){
    count = count -5;//wrong answer
    score.innerHTML = count;
		wrongdrag();
		function wrongdrag(){
        var sound = new Audio('wronganswer.mp3');
        sound.play();
		}
	}
  }

  function popup(){
    if(popcount == 10 )
	{
	if(count>90){
		var modal = document.getElementById("myModal");
		var bt = document.getElementById("redirect2");
		var span = document.getElementsByClassName("close")[0];
		modal.style.display = "block";
    clearInterval(timerId);
		span.onclick = function() {
        modal.style.display = "none";
        }
  
		// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "Done!!";
                  }
          }
          bt.onclick = function(){
            location.href='Exit.html';
          }
    }else{
			var modal = document.getElementById("myModal2");
			var bt = document.getElementById("redirect3");
			var span = document.getElementsByClassName("closeagain")[0];
			modal.style.display = "block";
      clearInterval(timerId);
			span.onclick = function() {
			modal.style.display = "none";
			}
  
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "GAME OVER..!!";
                  }
			}
			bt.onclick = function(){
            location.href='Level5.html';
			}
		
		}
	}
}