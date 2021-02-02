function sumTheElements(theArray){
	
	var total = 0;
	
	//your code here
    for (let index = 0; index < theArray.length; index++) {
      total += theArray[index];
        
    }
    return total;
    
    console.log(sumTheElements([2,13,34,5]));
}
