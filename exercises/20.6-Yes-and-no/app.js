let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let newArr=[];
const song = theBools.map(value =>{
    if(value == 1){
        newArr.push('wiki');
    }else if (value==0) {
        newArr.push('woko');
       
    }
     return newArr;
});
console.log(song);