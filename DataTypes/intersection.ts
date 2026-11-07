type PersonName = {
    name: string;
};

type PersonAge = {
    age: number;
};

type Person = PersonName & PersonAge;

const person: Person = {
    name: "Alice",
    age: 25,
};

console.log(person);
