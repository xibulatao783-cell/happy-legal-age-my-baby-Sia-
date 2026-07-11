const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const reveal = document.getElementById("reveal");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

const correctPassword = "07122008";

openBtn.addEventListener("click", () => {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword !== correctPassword) {
    errorMessage.textContent = "Wrong password. Try again.";
    return;
  }

  errorMessage.textContent = "";
  intro.classList.add("hidden");
  reveal.classList.remove("hidden");
  reveal.classList.add("fade-in");
});

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    openBtn.click();
  }
});
