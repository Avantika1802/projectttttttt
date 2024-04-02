const data = {
    students: {
      enrolled: 124  // Number of downloads
    }
  };

  const careerCountSpan = document.getElementById("careerCount");
  
  
  // Update the display
  careerCountSpan.textContent = data.students.enrolled;

// faq
// Get all dropdown buttons
var dropdowns = document.querySelectorAll('.dropdown-btn');

// Add click event listener to each dropdown button
dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener('click', function() {
    // Toggle the visibility of the dropdown content
    var content = this.nextElementSibling;
    content.classList.toggle('show');
  });
});

// result

function changeImage(imageFile) {
  document.getElementById('myImage').src = imageFile;}


