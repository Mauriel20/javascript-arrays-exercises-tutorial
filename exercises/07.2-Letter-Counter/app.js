let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let index = 0; index < array.length; index++) {
   let letter = par[index].toLocaleLowerCase();
    if(letter != '' ) {
        if (counts[letter] == undefined){
            counts[letter]=1;
        } else{
            counts[letter] =1;
        }

    }
    
}
