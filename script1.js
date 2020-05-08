
var CountDown_Time = 5;
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
            location.href='Level1.html';
          }
        }else{
        document.getElementById('timer').innerHTML = " " + CountDown_Time;
        CountDown_Time--;
      
      }
} 

//Drag and drop interfaces HTML5 API's => DataTransfer... => Which Item we are dragging and where we are dropping that communication should be built 
//Drag & Drop Events :: drag, dragstart, dragenter, dragexit, dragleave, dragover, drop (Don't use drop directly instead use dragover)
var dragItem1 = document.getElementById("dragElement1");
var dragItem2 = document.getElementById("dragElement2");

var dropLoc1 = document.getElementById("dropLocation1"); 
var dropLoc2 = document.getElementById("dropLocation2");
var count = 0;

var popcount = 0;
//-------------MOSQUITO
dragItem1.ondragstart = function(evt1) {
  //This event fill be fired when user starts dragging the item

  evt1.dataTransfer.setData('key1',evt1.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}

dropLoc2.ondragover = function(evt1) {
//This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
evt1.preventDefault();
console.log("It's Drag Over");
}

dropLoc2.ondrop = function(evt1) {
  //This event fill be fired when an element id dropped
  //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.

  evt1.preventDefault();
  //var dataArray = [];
  var dropItem = evt1.dataTransfer.getData('key1'); //Communicating Drag & Drop
  console.log("It's Dropped");
  console.log(dropItem);
  var myElement =  document.getElementById(dropItem);
  console.log(myElement);
  var myNewElement = document.createElement('img');
  //myNewElement.src = myElement.src;  //to add dragged image in div
  dropLoc2.appendChild(myElement); //Place image in Drop Location

  makesound();
  function makesound(){
    var sound = new Audio('DragSound.mp3');
    sound.play();
  }
  popcount = popcount + 1;
  count = count + 10;
  score.innerHTML = count;
  if(popcount == 2){
    setTimeout(function(){ popup(); }, 1000);
}
}
//------------------- COCKROACH

dragItem2.ondragstart = function(evt2) {
  //This event fill be fired when user starts dragging the item
  evt2.dataTransfer.setData('key2',evt2.target.id); //value will be our id of drag item //evt.dataTransfer.setData('key','dragElement');
  console.log("It's Dragging");
}

dropLoc1.ondragover = function(evt2) {
  //This event fill be fired when an element (text/img/..) selection is being dragged over to the valid drop location
  evt2.preventDefault();
  console.log("It's Drag Over");
  }

  dropLoc1.ondrop = function(evt2) {
    //This event fill be fired when an element id dropped
    //evt holds ondrop()'s object WE have to prevent not to allow drop in HTML using event.

    evt2.preventDefault();

    var dropItem = evt2.dataTransfer.getData('key2'); //Communicating Drag & Drop
    console.log("It's Dropped");
    console.log(dropItem);
    var myElement =  document.getElementById(dropItem);
    console.log(myElement);
    var myNewElement = document.createElement('img');
    //myNewElement.src = myElement.src; dropLoc2.appendChild(myElement);  //to add dragged image in div by creating a new element
    dropLoc1.appendChild(myElement); //Place image in Drop Location

    makesound();
    function makesound(){
      var sound = new Audio('DragSound.mp3');
      sound.play();
    }
    popcount = popcount + 1;
    count = count + 10;
    score.innerHTML = count;
    if(popcount == 2){
      setTimeout(function(){ popup(); }, 1000);
  }
  }

  function popup(){
    if(popcount == 2){
      var modal = document.getElementById("myModal");
      var bt = document.getElementById("redirect1");
      var span = document.getElementsByClassName("close")[0];
      clearInterval(timerId);
      if(count==20){
        
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
              location.href='Level2.html';
            }
      }
    }
    
  }