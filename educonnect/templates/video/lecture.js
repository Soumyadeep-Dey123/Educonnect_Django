document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
  
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });


var video = document.getElementById("myVideo");

 
    function togglePlayPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
 
    function updateVolume() {
        video.volume = document.getElementById("volumeRange").value;
    }

    
    function updateProgressBar() {
        var progressBar = document.getElementById("progressBar");
        var value = (video.currentTime / video.duration) * 100;
        progressBar.value = value;
    }

   
    function updateVideoTime() {
        var progressBar = document.getElementById("progressBar");
        var value = progressBar.value;
        video.currentTime = (value / 100) * video.duration;
    }

    
    video.addEventListener("timeupdate", updateProgressBar);

    
     
 
    
     