var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'];

function deletePerson(personName) {
    let newArr =[];
    for (let index = 0; index < people.length; index++) {
        if (personName!=people[index]) {
            newArr.push(people[index]);
        }


        //your code here
    }
return newArr;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));