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
    if (isNaN(num1) || isNaN(num2)) {
        return undefined;
    } else {
        return num1 * num2;
    }
}

function calculator(operation, num1, num2) {
    switch(operation) {
        case "add":
            return num1 + num2;
            break;
        case "sub":
            return num1 - num2;
            break;
        case "mult":
            return num1 * num2;
            break;
        case "div":
            return num1 / num2;
            break;
        default:
            return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    if (inputString && numRepetitions) {
        count = 1;
        newString = "";
        while (count <= numRepetitions) {
            newString += inputString;
            count++;
        }
        return newString;
    } else if (inputString == "") {
        return "";
    } else {
        return undefined;
    }
}

function reverseString(inputString) {
    newString = "";
    for (i = inputString.length - 1; i >= 0; i--) {
        newString += inputString[i];
    }
    return newString;
}

function longestWord(inputString) {
    longestWord = "";
    words = inputString.split(" ");
    for (i = 0; i < words.length; i++) {
        if (words[i].length >= longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

function capitalize(inputString) {
    if (inputString) {
        words = inputString.split(" ");
        for (i = 0; i < words.length; i++) {
            newWord = "";
            newWord += words[i][0].toUpperCase();
            for (j = 1; j < words[i].length; j++) {
                newWord += words[i][j].toLowerCase();
            }
            words[i] = newWord;
        }
        finalString = words[0];
        for (i = 1; i < words.length; i++) {
            finalString += " ";
            finalString += words[i];
        }
        return finalString;
    } else {
        return "";
    }
}

function sumOfNumbers(arrayOfNumbers) {
    if (arrayOfNumbers.length == 0) {
        return 0;
    } else {
        sum = 0;
        for (i = 0; i < arrayOfNumbers.length; i++) {
            if (isNaN(arrayOfNumbers[i])) {
                     
            } else {
                sum += arrayOfNumbers[i];
            }
        }
        return sum;
    }
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