var CountDown_Time = 90;
var timerId = setInterval(timer,1000);
function timer() {
    if (CountDown_Time == -1){
      console.log("IN IF PART");
      console.log(CountDown_Time);
        clearInterval(timerId);
        var modal = document.getElementById("myModal2");
        var bt = document.getElementById("redirect3");
        var span = document.getElementsByClassName("closeagain")[0];
        modal.style.display = "block";
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
            location.href='Level4.html';
          }
        }else{
        document.getElementById('timer').innerHTML = " " + CountDown_Time;
        CountDown_Time--;
        console.log("IN ELSE PART");
        console.log(CountDown_Time);
      }
} 
var dragItem17 = document.getElementById("dragElement17");
var dragItem18 = document.getElementById("dragElement18");
var dragItem19 = document.getElementById("dragElement19");
var dragItem20 = document.getElementById("dragElement20");
var dragItem21 = document.getElementById("dragElement21");
var dragItem22 = document.getElementById("dragElement22");
var dragItem23 = document.getElementById("dragElement23");
var dragItem24 = document.getElementById("dragElement24");
var dragItem25 = document.getElementById("dragElement25");
var dragItem26 = document.getElementById("dragElement26");
var dropLoc7 = document.getElementById("dropLocation7"); 
var dropLoc8 = document.getElementById("dropLocation8");
var popcount = 0;
var count = 0;
var TimerId;
dragItem17.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem18.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem19.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem20.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem21.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem22.ondragstart = function(evt) {
    //This event fill be fired when user starts dragging the item
    evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
    console.log("It's Dragging");
  }
dragItem23.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem24.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem25.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem26.ondragstart = function(evt) {
    //This event fill be fired when user starts dragging the item
    evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
    console.log("It's Dragging");
  }

dropLoc7.ondragover = function(evt) {
  //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
  evt.preventDefault();
  console.log("It's Drag Over");
  }

  dropLoc7.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    //var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement17"||dropItem=="dragElement19"||dropItem=="dragElement21"||dropItem=="dragElement23"||dropItem=="dragElement25"){
		console.log("It's Dropped");
		console.log(dropItem);
		var myElement =  document.getElementById(dropItem);
		console.log(myElement);
		var myNewElement = document.createElement('img');
		//myNewElement.src = myElement.src;  //to add dragged image in div
		dropLoc7.appendChild(myElement); //Place image in Drop Location

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
	if(dropItem=="dragElement18"||dropItem=="dragElement20"||dropItem=="dragElement22"||dropItem=="dragElement24"||dropItem=="dragElement26"){
    count = count -5;//wrong answer
    score.innerHTML = count;
		wrongdrag();
		function wrongdrag(){
        var sound = new Audio('wronganswer.mp3');
        sound.play();
		}
	}
  }
  
  dropLoc8.ondragover = function(evt) {
    //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
    evt.preventDefault();
    console.log("It's Drag Over");
   }
              
        
  dropLoc8.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement18"||dropItem=="dragElement20"||dropItem=="dragElement22"||dropItem=="dragElement24"||dropItem=="dragElement26"){
			console.log("It's Dropped");
			console.log(dropItem);
			var myElement =  document.getElementById(dropItem);
			console.log(myElement);
			var myNewElement = document.createElement('img');
			//myNewElement.src = myElement.src;  //to add dragged image in div
			dropLoc8.appendChild(myElement); //Place image in Drop Location

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
	if(dropItem=="dragElement17"||dropItem=="dragElement19"||dropItem=="dragElement21"||dropItem=="dragElement23"||dropItem=="dragElement25"){
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
    clearInterval(TimerId);
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
            location.href='Level5.html';
          }
    }else{
			var modal = document.getElementById("myModal2");
			var bt = document.getElementById("redirect3");
			var span = document.getElementsByClassName("closeagain")[0];
			modal.style.display = "block";
      clearInterval(TimerId);
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
            location.href='Level4.html';
			}
		
		}
	}
}