const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
const greetButton = document.querySelector<HTMLButtonElement>("#greetButton");
const message = document.querySelector<HTMLParagraphElement>("#message");

if (nameInput && greetButton && message) {
  greetButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    message.textContent = name ? `Hello, ${name}!` : "Please enter your name.";
  });
}