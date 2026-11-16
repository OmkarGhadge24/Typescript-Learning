class empInfo {
    _name : string = 'Justin'
    _email : string = 'justin12@male.com'

    get name(){
        return "Mr. "+this._name
    }
    set email(val:string){
        this._email = "emp"+val
    }
}

var emp1 = new empInfo();
console.log(emp1.name);
emp1.email = 'justin12@male.com';
console.log(emp1._email);
