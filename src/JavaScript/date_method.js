const date = new Date(2022, 11, 25, 18, 30, 50);
const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(dateFormat);