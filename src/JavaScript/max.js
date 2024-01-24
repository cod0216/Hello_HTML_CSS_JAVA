function getArrayMaxNumber(arr){
    let max_number = arr[0];
    for(let i =0; i < arr.length; i++){
        if(max_number < arr[i])
            max_number = arr[i];
    }
    return max_number;
}

const max = getArrayMaxNumber([10, 50,20, 100, 30]);
console.log(max);