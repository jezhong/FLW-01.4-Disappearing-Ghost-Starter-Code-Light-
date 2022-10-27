//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghost = document.querySelector(".ghost-image");

//declare variables for all of the buttons
let hideButton = document.querySelector(".hide-button");
let showButton = document.querySelector(".show-button");
let updateButton = document.querySelector(".update-img-button");
let messageButton = document.querySelector(".message-button");
let nameButton = document.querySelector(".name-button");



//create an onclick event for the Hide Me button
/*hide button variable*/
hideButton.onclick = (function (){  
   ghost.style.display = "none"; 
});

//create an onclick event for the Show Me button
showButton.onclick = (function (){
  ghost.style.display = "inital";
  console.log("ghost");
});


//create an onclick event for the Update Img button



//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag



//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
