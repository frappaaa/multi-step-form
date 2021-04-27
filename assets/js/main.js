const next = document.getElementById("next");
const prev = document.getElementById("prev");
const submit = document.getElementById("submit");
const tabs = document.querySelectorAll(".tab");

let currentTab = 1;

checkTab();

function checkTab() {
  if (currentTab == 1) {
    prev.style.display = "none";
  } else {
    prev.style.display = "unset";
  }

  if (currentTab == tabs.length) {
    next.style.display = "none";
  } else {
    next.style.display = "unset";
  }
}

next.addEventListener("click", () => {
  currentTab++;
  next.setAttribute("href", "#tab-" + currentTab);
  checkTab();
});

prev.addEventListener("click", () => {
  currentTab--;
  prev.setAttribute("href", "#tab-" + currentTab);
  checkTab();
});
