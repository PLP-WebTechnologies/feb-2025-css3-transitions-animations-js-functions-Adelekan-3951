
window.onload = function() {
  const animationPreference = localStorage.getItem("animationEnabled");

  
  const toggleAnimationCheckbox = document.getElementById("toggleAnimation");
  if (animationPreference === "false") {
    toggleAnimationCheckbox.checked = true;
    document.getElementById("animateBtn").style.pointerEvents = "none"; // Disable button hover
  } else {
    toggleAnimationCheckbox.checked = false;
  }


  toggleAnimationCheckbox.addEventListener("change", function() {
    const isChecked = toggleAnimationCheckbox.checked;
    localStorage.setItem("animationEnabled", isChecked);
    
    
    if (isChecked) {
      document.getElementById("animateBtn").style.pointerEvents = "none"; // Disable button hover
    } else {
      document.getElementById("animateBtn").style.pointerEvents = "auto"; // Enable button hover 
    }
  });
};