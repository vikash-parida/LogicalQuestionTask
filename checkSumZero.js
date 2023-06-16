function findSumOfZero(number){

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length-1; j++) {
        if(number[i] + number[j] === 0){
           return ([number[1],number[j]]);
         }
            
        }
        
    }

}

let result = findSumOfZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])

console.log(result);