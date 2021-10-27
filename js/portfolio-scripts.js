// Function to show/hide project details
function showHideDescription(project) {
    let moreText = document.querySelector(`.grid__item[project-name="${project}"] .more`);
    let btnText = document.querySelector(`.grid__item[project-name="${project}"] .showHideButton`);
  
    if (btnText.innerHTML === "Read more") {
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    }
  }