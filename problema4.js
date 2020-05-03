const a = [3, 3, 9, 9, 5];
// const a = [1,2,3];
let m = 7;
// let m = 2;
let biggestValue = 0;


let array_temp = [];
a.forEach((element1, index) => {
    a.forEach((element, index2) => {
        for(let i = 0; i < index + 1; i++) {
            array_temp.push(element);
            let sum = array_temp.reduce((a, b) => a + b);
            if(biggestValue < (sum % m)){
                biggestValue = (sum % m);
            }
        }
        array_temp = [];
    });
});
console.log(biggestValue);