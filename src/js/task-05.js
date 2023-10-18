let name = "";

const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", () => {

  name = nameInput.value;

  updateInterface();
});

function updateInterface() {

  const nameOutput = document.querySelector("#name-output");
  nameOutput.textContent = name ? name : "Anonymous";
}

updateInterface();
