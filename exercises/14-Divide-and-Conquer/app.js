let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
function mergeTwoList(numbers) {
    let even = [];
    let odd = [];

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 == 0) {
            even.push(numbers[index]);
        } else {
            odd.push(numbers[index]);
        }
    }
    let all = odd.concat(even);
    return all;
}
console.log(mergeTwoList(list_of_numbers))
