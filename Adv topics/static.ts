class Company {
    name : string = 'Lala company';
    static getLocation(location : string){
        return location
    }
}

var c1 = new Company();
console.log(c1.name);
// console.log(c1.getLocation());
console.log(Company.getLocation('Dadar, Mumbai'));
