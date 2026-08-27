// variables
const displayValues = document.querySelector(".display");
const btns = document.querySelectorAll(".numerical button");
const equalTo = document.querySelector("#equal");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const calValue = (displayValues.textContent += btn.textContent);

    if (btn.textContent === "AC") {
      displayValues.textContent = "";
    }
    if (btn.textContent === "DEL") {
      displayValues.textContent = calValue.slice(0, -4);
    }
  });
});
