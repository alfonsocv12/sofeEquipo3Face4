//PROBLEMA 1
 //const array = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
const array = [0, 1, 2, 4, 6, 7, 8, 11, 12, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32,
    33, 35, 36, 37, 38, 39
];
//const array = [-3, -2, -1, 2, 10, 15,16 ,18,19,20];


let contador = null;
let array_seguido = [];
let final_array = [];
array.sort(function(a, b){return a-b});
array.forEach((x,index) => {
    if(contador != null){
      
        if(array.length -1 == index){
            if(array_seguido.length == 0){
                array_seguido.push(contador);
            }
            array_seguido.push(x);
            if(array_seguido.length >= 3){
                
                final_array.push(array_seguido[0] + "-" + x);
            }else if(array_seguido.length == 2){
                final_array.push(array_seguido[0]);
                final_array.push(x);
            }else{
                final_array.push(array_seguido[0]);
            }
        }
        if(x == (contador + 1)){
            if(array_seguido.length == 0){
                array_seguido.push(contador);
            }
            array_seguido.push(x);
        }else{
            if(array_seguido.length >= 3){
                
                final_array.push(array_seguido[0] + "-" + array_seguido[array_seguido.length - 1]);
            }else if(array_seguido.length == 2){
               
                final_array.push(array_seguido[0]);
                final_array.push(array_seguido[1]);
            }else if(array_seguido.length == 0){
                final_array.push(contador);
            }else{
                final_array.push(array_seguido[0]);
            }
            array_seguido = [];
        }
    }else{
        array_seguido.push(x);
    }
    contador = x;
})
console.log(final_array);