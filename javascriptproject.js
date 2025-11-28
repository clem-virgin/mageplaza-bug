const sports = ["tennis", "cricket", "football", "volleyball", "baseball", "basketball"]
console.log(sports.length)





function convertlength(meters){
    return{
        millimeters: meters * 1000,
        centimeters: meters * 100
    }
    
}
console.log(convertlength(5))





for(let even=2; even<=100; even = even + 2){
    console.log(even)
}




function descending(arr){
    return arr.sort((a,b) => b-a)
}
console.log(descending([18, 19, 5, 12, 8, 3, 14, 2, 16]))



function divideby10(number){
    if (number % 10 === 0){
        return true
        }
        else{
            return false
        }
}
console.log(divideby10(50))




function negativenumbers(arr){
    return arr.filter(number=> number < 0)
}

console.log(negativenumbers([6, -2, -1, 9, 0, 2, -6]))

