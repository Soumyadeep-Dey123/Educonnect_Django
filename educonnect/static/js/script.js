
const nav = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});



function openOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}
function closeOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

var applyButton = document.getElementById("applyButton");
var closeButton = document.getElementById("closeButton");

if (applyButton) {
  applyButton.addEventListener("click", openOverlay);
}

if (closeButton) {
  closeButton.addEventListener("click", closeOverlay);
}



function openLogin() {
  var overlaylogin = document.getElementById("overlaylogin");
  overlaylogin.style.display = "block";
}
function closeLogin() {
  var overlaylogin = document.getElementById("overlaylogin");
  overlaylogin.style.display = "none";
}

var applylogin = document.getElementById("applylogin");
var closeLog = document.getElementById("closeButtonLog");

if (applylogin) {
  applylogin.addEventListener("click", openLogin);
}

if (closeLog) {
  closeLog.addEventListener("click", closeLogin);
}


// overlay switching
// document.addEventListener("DOMContentLoaded", function() {
//     var mainContent = document.getElementById("mainContent");

//     function openOverlay(overlayId) {
//         var overlay = document.getElementById(overlayId);
//         overlay.style.display = "block";
//         if (mainContent) {
//             mainContent.classList.add("blur-background");
//         }
//     }

//     function closeOverlay(overlayId) {
//         var overlay = document.getElementById(overlayId);
//         overlay.style.display = "none";
//         if (mainContent) {
//             mainContent.classList.remove("blur-background");
//         }
//     }

//     var applyButton = document.getElementById("applyButton");

//     if (applyButton) {
//         applyButton.addEventListener("click", function() {
//             openOverlay("signupOverlay");
//         });
//     }


const savedTheme = localStorage.getItem('theme');
const themeLink = document.getElementById('theme-link');

if (savedTheme) {
  themeLink.setAttribute('href', savedTheme);
}


function toggleTheme() {
  const themeLink = document.getElementById('theme-link');
  const currentTheme = themeLink.getAttribute('href');
  var themeIcon = document.querySelector('.theme-icon');
  var currentIcon = themeIcon.classList.contains('fa-sun') ? 'fa-sun' : 'fa-moon';
  if (themeIcon.classList.contains('fa-sun')) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('themeChoice', 'fa-moon');


  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('themeChoice', 'fa-sun');

  }



  if (currentTheme === 'static/css/styles.css') {
    themeLink.setAttribute('href', 'static/css/dark.css');
    localStorage.setItem('theme', 'static/css/dark.css');
  } else {
    themeLink.setAttribute('href', 'static/css/styles.css');
    localStorage.setItem('theme', 'static/css/styles.css');
  }
}

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let signupBtn1 = document.getElementById("signupBtn1");
let signinBtn1 = document.getElementById("signinBtn1");
let nameField = document.getElementById("nameField");
let passField = document.getElementById("passField");
let title = document.getElementById("title");


signinBtn1.onclick = function () {
  nameField.style.maxHeight = "0";
  passField.style.maxHeight = "0";
  document.getElementById("signupBtn").style.display = "none";
  document.getElementById("signupBtn1").style.display = "block";
  document.getElementById("signinBtn").style.display = "block";
  document.getElementById("signinBtn1").style.display = "none";
  document.getElementById("nameField").style.display = "none";
  document.getElementById("passField").style.display = "none";
  document.getElementById("username").removeAttribute('required');
  document.getElementById("pass2").removeAttribute('required');
};
signupBtn1.onclick = function () {
  nameField.style.maxHeight = "60px";
  passField.style.maxHeight = "60px";
  document.getElementById("username").setAttribute('required','required');
  document.getElementById("pass2").setAttribute('required','required');
  document.getElementById("signupBtn").style.display = "block";
  document.getElementById("signupBtn1").style.display = "none";
  document.getElementById("signinBtn").style.display = "none";
  document.getElementById("signinBtn1").style.display = "block";
  document.getElementById("nameField").style.display = "block";
  document.getElementById("passField").style.display = "block";
  
};

var storedChoice = localStorage.getItem('themeChoice');
if (storedChoice) {
  var themeIcon = document.querySelector('.theme-icon');
  themeIcon.classList.remove('fa-sun', 'fa-moon');
  themeIcon.classList.add(storedChoice);
}
