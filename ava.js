const data = {
    students: {
      enrolled: 124777775 // Number of careers impacted
    }
  };

  const careerCountSpan = document.getElementById("careerCount");
  
  
  // Update the display
  careerCountSpan.textContent = data.students.enrolled;