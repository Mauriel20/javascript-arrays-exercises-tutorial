var myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];

function myfunction() {
    let number = 0;

    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] > number) {
            number = myArray[index];
        }
    }
    return number;
}

console.log(myfunction());