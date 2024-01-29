const person = {
    name:"Hong Gildong"
};

const copyPerson = person;
person.name = "hong";
console.log(person.name);
console.log(copyPerson.name);