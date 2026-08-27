// variables
const displayValues = document.querySelector(".display");
const btns = document.querySelectorAll(".numerical button");
const equalTo = document.querySelector("#equal");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "AC") {
      displayValues.textContent = "";
    } else if (btn.textContent === "DEL") {
      displayValues.textContent = displayValues.textContent.slice(0, -1);
    } else {
      displayValues.textContent += btn.textContent;
    }
  });
});
