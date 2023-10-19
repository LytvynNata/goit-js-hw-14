let counterValue = 0;

const decrementButton = document.querySelector("button[data-action='decrement']");
decrementButton.addEventListener("click", () => {

  counterValue--;

  updateInterface();
});

const incrementButton = document.querySelector("button[data-action='increment']");
incrementButton.addEventListener("click", () => {
  counterValue++;

  updateInterface();
});

function updateInterface() {
  const valueSpan = document.querySelector("#value");
  valueSpan.textContent = counterValue;
}

updateInterface();
