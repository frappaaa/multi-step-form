let step = document.getElementsByClassName("step");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.getElementById("submit-btn");
let form = document.getElementsByTagName("form")[0];
let preloader = document.getElementById("preloader-wrapper");
let bodyElement = document.querySelector("body");
let succcessDiv = document.getElementById("success");
let boxMappa = document.querySelector("div.map");

// form.onsubmit = () => {
//   return false;
// };
let current_step = 0;
let stepCount = step.length - 1;
step[current_step].classList.add("d-block");
if (current_step == 0) {
  prevBtn.classList.add("d-none");
  submitBtn.classList.add("d-none");
  nextBtn.classList.add("d-inline-block");
}

const progress = (value) => {
  document.getElementsByClassName("progress-bar")[0].style.width = `${value}%`;
};

function checkIfMap(current_step) {
  if (current_step === 6) {
    boxMappa.style.opacity = 1;
    boxMappa.style.pointerEvents = "unset";
  } else {
    boxMappa.style.opacity = 0;
    boxMappa.style.pointerEvents = "none";
  }
}

nextBtn.addEventListener("click", () => {
  current_step++;
  let previous_step = current_step - 1;
  if (current_step > 0 && current_step <= stepCount) {
    prevBtn.classList.remove("d-none");
    prevBtn.classList.add("d-inline-block");
    step[current_step].classList.remove("d-none");
    step[current_step].classList.add("d-block");
    step[previous_step].classList.remove("d-block");
    step[previous_step].classList.add("d-none");
    checkIfMap(current_step);
    if (current_step == stepCount) {
      submitBtn.classList.remove("d-none");
      submitBtn.classList.add("d-inline-block");
      nextBtn.classList.remove("d-inline-block");
      nextBtn.classList.add("d-none");
    }
  } else {
    if (current_step > stepCount) {
      form.onsubmit = () => {
        return true;
      };
    }
  }
  progress((100 / stepCount) * current_step);
});

prevBtn.addEventListener("click", () => {
  if (current_step > 0) {
    current_step--;
    let previous_step = current_step + 1;
    prevBtn.classList.add("d-none");
    prevBtn.classList.add("d-inline-block");
    step[current_step].classList.remove("d-none");
    step[current_step].classList.add("d-block");
    step[previous_step].classList.remove("d-block");
    step[previous_step].classList.add("d-none");
    checkIfMap(current_step);
    if (current_step < stepCount) {
      submitBtn.classList.remove("d-inline-block");
      submitBtn.classList.add("d-none");
      nextBtn.classList.remove("d-none");
      nextBtn.classList.add("d-inline-block");
      prevBtn.classList.remove("d-none");
      prevBtn.classList.add("d-inline-block");
    }
  }

  if (current_step == 0) {
    prevBtn.classList.remove("d-inline-block");
    prevBtn.classList.add("d-none");
  }
  progress((100 / stepCount) * current_step);
});

// submitBtn.addEventListener("click", () => {
//   preloader.classList.add("d-block");

//   const timer = (ms) => new Promise((res) => setTimeout(res, ms));

//   timer(3000)
//     .then(() => {
//       bodyElement.classList.add("loaded");
//     })
//     .then(() => {
//       step[stepCount].classList.remove("d-block");
//       step[stepCount].classList.add("d-none");
//       prevBtn.classList.remove("d-inline-block");
//       prevBtn.classList.add("d-none");
//       submitBtn.classList.remove("d-inline-block");
//       submitBtn.classList.add("d-none");
//       succcessDiv.classList.remove("d-none");
//       succcessDiv.classList.add("d-block");
//     });
// });

/*Controllo domanda 5 */

let q5 = document.querySelectorAll(
  'input[type=radio][name="consumi_attività"]'
);

let q6 = document.getElementsByClassName("q_6")[0];
function consumi() {
  if (q5[0].checked) {
    q6.classList.add("d-block");
    q6.classList.remove("d-none");
  } else {
    q6.classList.add("d-none");
    q6.classList.remove("d-block");
  }
}

q5.forEach((radio) =>
  radio.addEventListener("change", () => {
    if (radio.value === "Si") {
      q6.classList.add("d-block");
      q6.classList.remove("d-none");
    } else {
      q6.classList.add("d-none");
      q6.classList.remove("d-block");
    }
  })
);
