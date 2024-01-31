 
function toggleEditMode(fieldId) {
    const field = document.getElementById(fieldId);

     
    const newValue = prompt(`Edit ${fieldId}:`, field.textContent);
 
    if (newValue !== null && newValue !== '') {
      field.textContent = newValue;
    
    localStorage.setItem(fieldId, newValue);
    }
  }
  window.onload = function () {
    loadProfileData();
  };
  
  function loadProfileData() {
    loadFieldData('username');
    loadFieldData('email');
    loadFieldData('dob');
    loadFieldData('contact');
    loadProfilePicture('rightProfilePicture');
    
  }
  
  function loadFieldData(fieldId) {
    const storedValue = localStorage.getItem(fieldId);
  
    if (storedValue) {
      document.getElementById(fieldId).textContent = storedValue;
    }
  }
  function loadProfilePicture(profilePictureId) {
    const storedSrc = localStorage.getItem(`${profilePictureId}-src`);
    const profilePicture = document.getElementById(profilePictureId).querySelector('img');
  
    if (storedSrc) {
      profilePicture.src = storedSrc;
    }
  }
  
  function updateProfilePicture(profilePictureId) {
    const inputElement = document.getElementById(`profile-image-upload-right`);
    const profilePicture = document.getElementById(profilePictureId).querySelector('img');
  
    const file = inputElement.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const newSrc = e.target.result;
        profilePicture.src = newSrc;
  
        // Save the new image source in local storage
        localStorage.setItem(`${profilePictureId}-src`, newSrc);
      };
  
      reader.readAsDataURL(file);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".toggle-menu");
    const menuToggle = document.querySelector(".menu-toggle");
  
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
  

  function triggerImageUpload(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.click();
  }
  
  function updateProfilePicture(profilePictureId) {
    const inputElement = document.getElementById(`profile-image-upload-right`);
    const profilePicture = document.getElementById(profilePictureId).querySelector('img');
  
    const file = inputElement.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const newSrc = e.target.result;
        profilePicture.src = newSrc;
  
        
        localStorage.setItem(`${profilePictureId}-src`, newSrc);
      };
  
      reader.readAsDataURL(file);
    }
  }
  
//   function updateProfilePicture() {
//     const topRightProfilePicture = document.getElementById('profile-image');
//     const rightProfilePicture = document.getElementById('rightProfilePicture').querySelector('img');
  
    
//     const newSrc = topRightProfilePicture.src;
  
    
//     rightProfilePicture.src = newSrc;
//   }