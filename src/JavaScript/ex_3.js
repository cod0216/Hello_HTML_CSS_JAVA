for(let i = 1; i< 10; i++) {
    for(let j = 0 ; j < 10; j++){
        for(let k = 0; k < 10; k++){
            let total = i*100+j*10+k;
            let sum = (i**3)+(j**3)+(k**3)
            if(total == sum){
            console.log(total);
            console.log(i, j, k);
            }
        }
    }
}