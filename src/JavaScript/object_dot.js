const person = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    age:20,
    likes:["samesung", "apple"],
    printHello:function(){
        return "Hello"
    }
};

console.log(person.name.lastName);
console.log(person.age);
console.log(person.printHello());
