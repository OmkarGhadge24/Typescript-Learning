"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMessage() {
    return new Promise((resolve) => {
        resolve("Hello from a typed Promise!");
    });
}
getMessage().then((message) => {
    console.log(message);
});
