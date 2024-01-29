function checkBMI(length, weight){
    let BMI = weight/(length**2);
    console.log(BMI);
    if(BMI > 26){
        console.log("비만");
    }else if(24 <=BMI && BMI < 25){
        console.log("과체중");
    }else if(18.5 <= BMI && BMI <24){
        console.log("정상");
    }else if(BMI <18.5){
        console.log("저체중");
    }
}

checkBMI(1.80, 50);