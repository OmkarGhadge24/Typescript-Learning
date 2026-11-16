"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class empInfo {
    _name = 'Justin';
    _email = 'justin12@male.com';
    get name() {
        return "Mr. " + this._name;
    }
    set email(val) {
        this._email = "emp" + val;
    }
}
var emp1 = new empInfo();
console.log(emp1.name);
emp1.email = 'justin12@male.com';
console.log(emp1._email);
