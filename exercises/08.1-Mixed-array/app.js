var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

function ArraysNew(arr){
    let arr2 = [];
    for (let index = 0; index < arr.length; index++) {
       arr2.push(typeof(arr[index]));
        
    }
    return arr2;
}

console.log(ArraysNew(mix));