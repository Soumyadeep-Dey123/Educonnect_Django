document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
  
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var chapters = document.querySelectorAll('.chapter-box');

    chapters.forEach(function (chapter) {
        chapter.addEventListener("click", function () {
            var dropdown = chapter.querySelector('.fa-caret-down, .fa-caret-up');
            
            // Toggle dropdown icon
            if (dropdown) {
                dropdown.classList.toggle("fa-caret-down");
                dropdown.classList.toggle("fa-caret-up");
            }

            // Toggle visibility of lecture siblings
            var sibling = chapter.nextElementSibling;
            while (sibling && !sibling.classList.contains('chapter-box')) {
                // Check if the sibling has the class 'chapter-lecture'
                if (sibling.classList.contains('course-lecture')) {
                    sibling.style.display = dropdown.classList.contains("fa-caret-up") ? 'flex' : 'none';
                }
                sibling = sibling.nextElementSibling;
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    
 var buttontest = document.querySelector(".test-button");
 var buttonbuy = document.querySelector(".buy-now-button");
    buttonbuy.addEventListener("click", function () {
    buttonbuy.style.display="none";
    
    });
  });



   
  