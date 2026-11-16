"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    name = 'Lala company';
    static getLocation(location) {
        return location;
    }
}
var c1 = new Company();
console.log(c1.name);
// console.log(c1.getLocation());
console.log(Company.getLocation('Dadar, Mumbai'));
