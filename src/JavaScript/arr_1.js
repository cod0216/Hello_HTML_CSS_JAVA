const arr = [10, 20, 30, 40];
arr.push(50);//배열 맨 뒤에 50 추가 
console.log(arr); //[10, 20, 30, 40, 50]
arr.pop(); // 배열 맨 뒤에서 요소 추출
console.log(arr); //[10, 20, 30, 40]
arr.unshift(0); // 배열 맨 앞에 0 추가
console.log(arr);//[0, 10, 20, 30, 40];
arr.shift(); // 배열 맨 앞에서 요소 추출
console.log(arr);//[10, 20, 30, 40];


console.log("---------------");
arr.forEach(function(v){
    console.log(v);
})
console.log(arr);
