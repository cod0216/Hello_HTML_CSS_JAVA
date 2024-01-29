const person = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    likes:["apple", "samsumg"],
    printHello:function(){
    return "hello";
    }
}

console.log(person["name"]);
console.log(person["name"]["firstName"]);
console.log(person["likes"]);

console.log(person["likes"][0])
console.log(person.printHello());