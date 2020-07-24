/*Question one 

create a fuction that takes one argument, an array of a numbers All you need to do is return an arry
that contain the even number only
for Example: 
[1,4,5,10] -> [4,10]

var returnEven = function(arr) {
    var output = [];
    for (var i=0; i < arr.length; i ++ ) {
        if (arr[i]%2 === 0) output.push(arr[i])
    }
    return output;
}
console.log(returnEven([1,4,5,10]))
*/
var returnEven = function(arr) {
    var output = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]%2=== 0) output.push(arr[i])
    }
    return output
}
console.log(returnEven([3,4,5]))
/* Question -2  
Write a fucntion "sum" that finds the summation of every number from 1 to num
the number will be always be a positive integer than 0
for example
sum (5) = 1 + 2 + 3 + 4 + 5 = output 15
var sum = function(n) {
    var output = 0;
    while(n !== 0) {
        output += n;
        n--;
    }
    return output;
}
console.log(sum(9))

*/
var sum = function(n) {
    var output = 0;
    while(n !== 0) {
        output += n;
        n--;
    }
    return output;
}
console.log(sum(9))
/* Question -3 
    Arry with 0s are  boring. They might be fun in your world. but not here.
    Write a fucntion "noZeros" accepting one array argument and return a new array
    after you get rid of all zeros 
    forexample 
    [1,4,5,0] -> [1,4,5]

    var noZero = function(arr) {
    var output = [];
    for(var i=0; i < arr.length; i ++) {
        if(arr[i] !== 0)  output.push(arr[i])
    }
    return output;

}
console.log(noZero([1,4,5,0]))

*/
var noZero = function(arr) {
    var output = [];
    for(var i=0; i < arr.length; i ++) {
        if(arr[i] !== 0)  output.push(arr[i])
    }
    return output;

}
console.log(noZero([1,4,5,0]))

/* Question -4
create a function that takes one argument: person's birth year and returns the 
the generation name that this person belongs to .
Generation name values are:
"babyboomers": born between 1944 and 1964
"Gen X" : born between 1965-1979
"Gen Y": born between 1980 - 1994
"Gen Z": born between 1995 - 2015
Note: if a person doesnot belongs to any of the above generation, return null;
var getGerneration = function (year) {
    if (year >= 1944 && year <= 1964) {
        return 'babyboomers'
    } else if (year >= 1965 && year <=1979) {
        return 'Gen X'
    } else if (year >= 1980 && year <= 1994) {
        return 'Gen millennials'
    } else if (year >= 1995 && year <= 2015) {
        return 'Gen Z'
    } else {
        return null;
    }

}
console.log(getGerneration(1945))
*/
var getGerneration = function (year) {
    if (year >= 1944 && year <= 1964) {
        return 'babyboomers'
    } else if (year >= 1965 && year <=1979) {
        return 'Gen X'
    } else if (year >= 1980 && year <= 1994) {
        return 'Gen millennials'
    } else if (year >= 1995 && year <= 2015) {
        return 'Gen Z'
    } else {
        return null;
    }

}
console.log(getGerneration(1945))
/* Create a function that takes one argument, an array of numbers. 
All you need to do is return a new array where all items are doubled.
For example :
[1,4,5,10] -> [2,8,10,20]
[9,6,23,8] -> [18,12,46,16]
[1,0,5,0] -> [2,0,10,0]
var arryDouble = function (arr) {
    var output = []
    for (var i = 0; i < arr.length; i ++) {
        output.push(arr[i] + arr [i])
    }
    return output
}
console.log(arryDouble([1,2,3]))
*/

var arryDouble = function (arr) {
    var output = []
    for (var i = 0; i < arr.length; i ++) {
        output.push(arr[i] + arr [i])
    }
    return output
}
console.log(arryDouble([1,2,3]))

/*
create a function that takes two arguments, an array of numbers(arr) and a number value (n).
All you need to do is check whether the provided array contains the number of value (n) or not
var checker = function (arr , n) {
    for ( var i = 0; i < arr.length ; i ++ ) {
        if ( arr [i] === n) return true
    } return false

}
console.log(checker([1,34,5], 34))

*/

var checker = function (arr , n) {
    for ( var i = 0; i < arr.length ; i ++ ) {
        if ( arr [i] === n) return true
    } return false

}
console.log(checker([1,34,5], 34))

/*
write a function "repeat" that takes three arguments an array, num(a number), and n(another number) 
The fuction should return a new array with the number x repeated an addational n times consecutively
For example:
repeat([1,2,3,4,5], 3,2); returns = [1,2,3,3,4,5]

function repeat(arr, num, n) {
    let output = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === num ){
            for (let j= 0 ; j < n; j ++) {
                output.push(num)
            }
        } else {
            output.push(arr[i])
        }
    }
    return output;
}
console.log(repeat( [1,2,3,4,5], 3, 2))
*/
function repeat(arr, num, n) {
    let output = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === num ){
            for (let j= 0 ; j < n; j ++) {
                output.push(num)
            }
        } else {
            output.push(arr[i])
        }
    }
    return output;
}
console.log(repeat( [1,2,3,4,5], 3, 2))