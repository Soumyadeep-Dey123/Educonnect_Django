function updateProfilePicture() {
    var input = document.getElementById('profile-image-upload');
    var image = document.getElementById('profile-image');

    var file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function editField(fieldId) {
    const field = document.getElementById(fieldId);
    const isEditMode = field.contentEditable === 'true';

    if (!isEditMode) {
        field.contentEditable = true;
        field.classList.add('edit-mode');
    } else {
        field.contentEditable = false;
        field.classList.remove('edit-mode');
    }
}
