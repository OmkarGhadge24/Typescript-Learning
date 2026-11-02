function getInfo() {
    const nameValue = document.getElementById("username") as HTMLInputElement;
    const emailValue = document.getElementById("email") as HTMLInputElement;
    const ageValue = document.getElementById("age") as HTMLInputElement;
    var name: string = nameValue.value;
    var email: string = emailValue.value;
    var age: string = ageValue.value;
    console.log(name, email, age);
}
