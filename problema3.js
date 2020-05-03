/*const input = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
]*/
const input=[[5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16]];
// const res = [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
// ]

let array = [];

let final_array = [];

input.forEach((columna, index) => {
    final_array.push([]);
    
});

input.reverse().forEach( (column, index1) => {
    column.forEach((row, index2) =>{
        final_array[index2].push(input[index1][index2]);
        
    });
});
console.log(final_array);