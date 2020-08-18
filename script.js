//jshint esversion: 6
/*
Author: Ti Tonito

This project displays the time using an analytic clock, and has 4 background images settings, by pressing the buttons you can switch through them
but they also change every 5 seconds

future development:
-Have a dynamic changing background that changes depending on the time of day

*/


const sunriseB = document.querySelector(`button[data-time=sunrise]`);
const noonB = document.querySelector(`button[data-time=noon]`);
const sunsetB = document.querySelector(`button[data-time=sunset]`);
const nightB = document.querySelector(`button[data-time=night]`);
const SECOND = 1000;



const getTime = () => {
  //Create a date object and get the time from it
  let date = new Date();
  let time = date.toLocaleTimeString();
  console.log(time);

};
//Used to set the time of the the h1
const setTime = () => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector("h1").innerText = time;

};

//Transition functions for the body element according to the specified time of day
const bodyTransition = (transition) => {
  const body = document.querySelector("body");
  switch (transition) {
    case "sunrise":
      body.style.backgroundImage = "linear-gradient(to top, #58181A, #BC2909, #BA6D09,#71A8EE, #3072EB, #1552C6)";
      break;
    case "noon":
      body.style.backgroundImage = "linear-gradient(to right, #e0eafc, #cfdef3)";
      break;
    case "sunset":
      body.style.backgroundImage = "linear-gradient(to top, #040308, #AD4A28, #DD723C, #FC7001,#DCB697, #9BA5AE, #3E5879, #020B1A)";
      break;
    default:
      body.style.backgroundImage = "url(starfield.png)";
  }
};
//


//Dynamically change the background every 5 secs
const autoBodyTransition = () => {

    let mode = Math.floor(Math.random() * 4);
    switch (mode) {
      case 0:
        bodyTransition("sunrise");
        break;
      case 1:
        bodyTransition("noon");
        break;
      case 2:
        bodyTransition("sunset");
        break;
      default:
        bodyTransition("default");
    }


};



//Continual call to update time of h1
setInterval(setTime, SECOND);
setInterval(autoBodyTransition,SECOND*5);
