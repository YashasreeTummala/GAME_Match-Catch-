
var dragItem11 = document.getElementById("dragElement11");
var dragItem12 = document.getElementById("dragElement12");
var dragItem13 = document.getElementById("dragElement13");
var dragItem14 = document.getElementById("dragElement14");
var dragItem15 = document.getElementById("dragElement15");
var dragItem16 = document.getElementById("dragElement16");
var dropLoc5 = document.getElementById("dropLocation5"); 
var dropLoc6 = document.getElementById("dropLocation6");

var count = 0;

dragItem11.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem12.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem13.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem14.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}
dragItem15.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}

dragItem16.ondragstart = function(evt) {
  //This event fill be fired when user starts dragging the item
  evt.dataTransfer.setData('key',evt.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}


dropLoc5.ondragover = function(evt) {
  //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
  evt.preventDefault();
  console.log("It's Drag Over");
  }

  dropLoc5.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    //var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement11"||dropItem=="dragElement13"||dropItem=="dragElement14"||dropItem=="dragElement16" ){
		console.log("It's Dropped");
		console.log(dropItem);
		var myElement =  document.getElementById(dropItem);
		console.log(myElement);
		var myNewElement = document.createElement('img');
		//myNewElement.src = myElement.src;  //to add dragged image in div
    dropLoc5.appendChild(myElement); //Place image in Drop Location

    makesound();
    function makesound(){
      var sound = new Audio('/assets/DragSound.mp3');
      sound.play();
    }

    count = count + 10;
    score.innerHTML = count;
    setInterval(function(){ popup(); }, 1500);
    }
  }
  
  dropLoc6.ondragover = function(evt) {
    //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
    evt.preventDefault();
    console.log("It's Drag Over");
   }
              
        
  dropLoc6.ondrop = function(evt) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.
    evt.preventDefault();
    var dataArray = [];
    var dropItem = evt.dataTransfer.getData('key'); //Communicating Drag & Drop
    if(dropItem=="dragElement12"||dropItem=="dragElement15"){
			console.log("It's Dropped");
			console.log(dropItem);
			var myElement =  document.getElementById(dropItem);
			console.log(myElement);
			var myNewElement = document.createElement('img');
			//myNewElement.src = myElement.src;  //to add dragged image in div
      dropLoc6.appendChild(myElement); //Place image in Drop Location

      makesound();
      function makesound(){
        var sound = new Audio('/assets/DragSound.mp3');
        sound.play();
      }

      count = count + 10;
      score.innerHTML = count;
      setInterval(function(){ popup(); }, 1500);
		}
  }

  function popup(){
    var modal = document.getElementById("myModal");
    var bt = document.getElementById("redirect2");
    var span = document.getElementsByClassName("close")[0];
    if(count==60){
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
    }
  }