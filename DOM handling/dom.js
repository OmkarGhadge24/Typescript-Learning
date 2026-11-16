"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nameInput = document.querySelector("#nameInput");
const greetButton = document.querySelector("#greetButton");
const message = document.querySelector("#message");
if (nameInput && greetButton && message) {
    greetButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        message.textContent = name ? `Hello, ${name}!` : "Please enter your name.";
    });
}
