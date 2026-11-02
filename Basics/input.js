"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    const nameValue = document.getElementById("username");
    const emailValue = document.getElementById("email");
    const ageValue = document.getElementById("age");
    var name = nameValue.value;
    var email = emailValue.value;
    var age = ageValue.value;
    console.log(name, email, age);
}
