document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.querySelector(".menu-toggle");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
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
});

document.addEventListener("DOMContentLoaded", function () {
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
});

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
// });

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "SIGN IN";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};
signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "SIGN UP";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};
