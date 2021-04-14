var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

//Set grandezza mappa
var canvaMap = document.querySelector(".mapboxgl-canvas");
canvaMap.style.width = "100%";

function showTab(n) {
  // This function will display the specified tab of the form ...
  var tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("submit").style.display = "none";
  }
  if (n == tab.length - 1) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submit").style.display = "inline";
  } else {
    document.getElementById("nextBtn").innerHTML = "Prossimo";
    document.getElementById("submit").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline";
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var tab = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  tab[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= tab.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var tab,
    y,
    i,
    valid = true;
  tab = document.getElementsByClassName("tab");
  y = tab[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  // for (i = 0; i < y.length; i++) {
  //   // If a field is empty...
  //   if (y[i].value == "") {
  //     // add an "invalid" class to the field:
  //     y[i].className += " invalid";
  //     // and set the current valid status to false:
  //     valid = false;
  //   }
  // }

  return valid; // return the valid status
}
