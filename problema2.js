// crypt = ["TEN","TWO", "ONE"];
// solution = [["O","1"],["T","0"],["W","9"],["E","5"],["N","4"]];
// crypt =  ["SEND", "MORE", "MONEY"];
// solution = [["O", "0"],["M", "1"],["Y", "2"],["E", "5"],["N", "6"],["D", "7"], ["R", "8"], ["S", "9"]]
crypt = ["WASD", "IJKL", "OPAS"];
solution = [["W", "2"], ["A", "0"], ["S", "4"], ["D", "1"], ["I", "5"], ["J", "8"], ["K", "6"], ["L", "3"], ["O", "7"], ["P", "9"]];
// T = 0 E = 5 N = 4 = 54;
// T = 0 W = 9 O = 1 = 91;
// O = 1 N = 4 E = 5 = 145;
let suma  = 0;
array_final = [];
crypt.forEach(palabra => {
    palabra.split("").forEach(letra => {
        suma += solution.find(key => key[0] == letra)[1];
        // suma = suma + "" + solution.find(key => key[0] == letra)[1];
    });
    array_final.push(suma);
    suma = 0;
});
console.log(parseInt(array_final[2]), parseInt(array_final[1]), parseInt(array_final[0]));
if(parseInt(array_final[2]) == (parseInt(array_final[0]) + parseInt(array_final[1]))){
    console.log(true);
}else{
    console.log(false);
}