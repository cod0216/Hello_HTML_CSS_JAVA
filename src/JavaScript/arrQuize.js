const arr = [10, 120, 30, 50, 20];

let maxNumber = 0;
for(let i = 0 ; i < arr.length; i++){
    if(maxNumber < arr[i])
        maxNumber = arr[i];
}
console.log(maxNumber);
