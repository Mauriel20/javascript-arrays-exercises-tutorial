// Code goes here
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// function evalueateMatrix(number) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] == number) {
//                 console.log("[" +i+","+j+"]");
//             }

//         }

//     }

// }

const matrixBuilder = (number) => {
    let matriz = [];

    for (let i = 0; i < number; i++) {

        let fila=[]
        for (let j = 0; j < number; j++) {
            let num= 1//Math.round(Math.random()*1);
            fila.push(num);
        }
        matriz.push(fila);
    }
    return matriz;

}
// do not change anything from this line down
console.log(matrixBuilder(5));