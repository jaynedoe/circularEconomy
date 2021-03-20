console.log('Good Extracts up and running baby!');

/**
 * sortedSquareArray
 * function that takes in an array of ascending numbers, squares each number in the array and returns the results in another ascending array.
 * Returned array must be of the same length.
 * @param {array} array 
 */

function sortedSquareArray(array){

    const squaredArray = [];

    array.forEach((element, index) => {
        let squaredElement = element * element;
        squaredArray.push(squaredElement);      
    });

    squaredArray.sort((a,b) => a-b);

    return squaredArray;

}


let array = [1,2,3,4,5,6,7,8,9]

console.log(sortedSquareArray(array));