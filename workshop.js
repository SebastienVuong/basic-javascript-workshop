function firstLetter(inputString) {
    if (inputString) {
        return inputString[0];
    } else {
        return undefined;
    }
}

function lastLetter(inputString) {
    if (inputString) {
        return inputString[inputString.length - 1];
    } else {
        return undefined;
    }
}

function letterAtPosition(inputString, position) {
    if (inputString) {
        if (position) {
            return inputString[position];
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}

function addTwoNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return undefined;
    } else {
        return num1 + num2;
    }
}

function multiplyTwoNumbers(num1, num2) {

}

function calculator(operation, num1, num2) {

}

function repeatString(inputString, numRepetitions) {

}

function reverseString(inputString) {

}

function longestWord(inputString) {

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};