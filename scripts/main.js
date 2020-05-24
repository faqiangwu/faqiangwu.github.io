// const myHeading = document.querySelector("h1");
// myHeading.innerText = "<I <b>love</b> JS>";

let myImg = document.querySelector("img");
let holder = undefined;
myImg.onclick = function () {
   if (holder == "images/firefox.png") {
      holder = "images/chrome.jpg";
   } else {
      holder = "images/firefox.png";
   }
   myImg.setAttribute("src", holder);
   console.log(holder);
};
// ------------------------------------------------
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
   let myName = prompt("please enter your name");
   while (!myName || myName === null) {
      myName = prompt("please enter your name");
   }
   localStorage.setItem("name", myName);
   myHeading.textContent = "Mozilla is cool, " + myName;
}
if (!localStorage.getItem("name")) {
   setUserName();
} else {
   let storedName = localStorage.getItem("name");
   myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function () {
   setUserName();
};
console.log(!"Q");
