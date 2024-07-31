//your JS code here. If required.
// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var openModalBtn = document.getElementById("openModal");

// Get close button
var closeModalBtn = document.getElementsByClassName("close-modal")[0];

// Open modal on button click
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on close button click
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
