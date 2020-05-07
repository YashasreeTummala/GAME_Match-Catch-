var CountDown_Time = 20;
var timerId = setInterval(timer,1000);
function timer() {
    if (CountDown_Time == -1){
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
              modal.style.display = "none";
                }
          }
          bt.onclick = function(){
            location.href='Level3.html';
          }
        }else{
        document.getElementById('timer').innerHTML = " " + CountDown_Time;
        CountDown_Time--;
      
      }
} 

var dragItem3 = document.getElementById("dragElement3");
var dragItem4 = document.getElementById("dragElement4");
var dragItem5 = document.getElementById("dragElement5");
var dragItem6 = document.getElementById("dragElement6");
var dragItem7 = document.getElementById("dragElement7");
var dragItem8 = document.getElementById("dragElement8");
var dragItem9 = document.getElementById("dragElement9");
var dragItem10 = document.getElementById("dragElement10");
var dropLoc3 = document.getElementById("dropLocation3"); 
var dropLoc4 = document.getElementById("dropLocation4");
var popcount = 0;
var count = 0;

dragItem3.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem4.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem5.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem6.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem7.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem8.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem9.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem10.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}


dropLoc3.ondragover = function(evt) {
  //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
  evt.preventDefault();
  console.log("It's Drag Over");
  }

  dropLoc3.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    //var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement3"||dropItem=="dragElement6"||dropItem=="dragElement7"||dropItem=="dragElement9"){
		console.log("It's Dropped");
		console.log(dropItem);
		var myElement =  document.getElementById(dropItem);
		console.log(myElement);
		var myNewElement = document.createElement('img');
		//myNewElement.src = myElement.src;  //to add dragged image in div
		dropLoc3.appendChild(myElement); //Place image in Drop Location

    makesound();
    function makesound(){
    var sound = new Audio('/assets/DragSound.mp3');
    sound.play();
  }
		popcount = popcount + 1;
		count = count + 10;
		score.innerHTML = count;
		if(popcount == 8 )
			  setTimeout(function(){ popup(); }, 1000);
    }
	if(dropItem=="dragElement4"||dropItem=="dragElement5"||dropItem=="dragElement8"||dropItem=="dragElement10"){
    count = count -5;//wrong answer
    score.innerHTML = count;
		wrongdrag();
		function wrongdrag(){
        var sound = new Audio('/assets/wronganswer.mp3');
        sound.play();
		}
	}
  }
  
  dropLoc4.ondragover = function(evt) {
    //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
    evt.preventDefault();
    console.log("It's Drag Over");
   }
              
        
  dropLoc4.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement4"||dropItem=="dragElement5"||dropItem=="dragElement8"||dropItem=="dragElement10"){
			console.log("It's Dropped");
			console.log(dropItem);
			var myElement =  document.getElementById(dropItem);
			console.log(myElement);
			var myNewElement = document.createElement('img');
			//myNewElement.src = myElement.src;  //to add dragged image in div
			dropLoc4.appendChild(myElement); //Place image in Drop Location

			makesound();
			function makesound(){
			var sound = new Audio('/assets/DragSound.mp3');
			sound.play();
		}
		popcount = popcount + 1;
		count = count + 10;
		score.innerHTML = count;
		if(popcount == 8 )
			  setTimeout(function(){ popup(); }, 1000);
	}
	if(dropItem=="dragElement3"||dropItem=="dragElement6"||dropItem=="dragElement7"||dropItem=="dragElement9"){
    count = count -5;//wrong answer
    score.innerHTML = count;
		wrongdrag();
		function wrongdrag(){
        var sound = new Audio('/assets/wronganswer.mp3');
        sound.play();
		}
	}
  }

  function popup(){
    if(popcount == 8 )
	{
	if(count>70){
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
                modal.style.display = "none";
                  }
          }
          bt.onclick = function(){
            location.href='Level4.html';
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
                modal.style.display = "none";
                  }
          }
          bt.onclick = function(){
            location.href='Level3.html';
          }
		
	}
		
	}
  }