function sum(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return;
    }
    return num1+num2;
}

let result = sum("a", "b");
// let result = sum(20, 15);
console.log(`result :${result}`);