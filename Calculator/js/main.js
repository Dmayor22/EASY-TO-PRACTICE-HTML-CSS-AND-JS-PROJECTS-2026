const displayValues = document.querySelector(".display");
const btns = document.querySelectorAll(".numerical button");

const operators = ["+", "-", "*", "/"];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();
    const currentValue = displayValues.textContent;

    // AC
    if (value === "AC") {
      displayValues.textContent = "";
      return;
    }

    // DEL
    if (value === "DEL") {
      displayValues.textContent = currentValue.slice(0, -1);
      return;
    }

    // =
    if (value === "=") {
      if (currentValue === "") return;

      try {
        displayValues.textContent = eval(currentValue);
      } catch {
        displayValues.textContent = "Error";
      }

      return;
    }

    // Prevent two operators beside each other
    if (operators.includes(value)) {
      const lastCharacter = currentValue.slice(-1);

      if (operators.includes(lastCharacter)) {
        return;
      }
    }

    // Add value
    displayValues.textContent += value;
  });
});