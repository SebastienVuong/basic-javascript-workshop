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
    if (Array.isArray(array1) && Array.isArray(array2)) {
        uniqueElements = [];
        for (i = 0; i < array1.length; i++) {
            isUnique = true;
            for (j = 0; j < array2.length; j++) {
                if (array1[i]==array2[j]) {
                    isUnique = false;
                }
            }
            if (isUnique) {
                uniqueElements.push(array1[i]);
            }
        }
        for (i = 0; i < array2.length; i++) {
            isUnique = true;
            for (j = 0; j < array1.length; j++) {
                if (array2[i]==array1[j]) {
                    isUnique = false;
                }
            }
            if (isUnique) {
                uniqueElements.push(array2[i]);
            }
        }
        return uniqueElements;  
    } else {
        return undefined;
    }

}

function isPalindrome(inputString) {
    workingString="";
    var letters = /^[a-z]+$/;
    for (i = 0; i < inputString.length; i++) {
        if (letters.test(inputString[i].toLowerCase())) {
            workingString += inputString[i].toLowerCase();
        }
    }
    palindromeIndeed = true;
    for (i = 0; i < workingString.length; i++) {
        if (workingString[i]!=workingString[workingString.length-i-1]) {
            palindromeIndeed = false;
        }
    }
    return palindromeIndeed;
}

function wrapCharacter(inputString) {
    output = inputString[0];
    printLinePosition = 1;
    for (i = 1; i < inputString.length; i++) {
        if (printLinePosition==40) { // First char of line
            printLinePosition = 0;
            output += "\n";
            if (inputString[i]==" ") { // If first char is a space
                // Just ignore it
            } else { // First char is a char
                output += inputString[i];
                printLinePosition++;
            }
        } else { // Other chars of line
            output += inputString[i];
            printLinePosition++;
        }
        //console.log(printLinePosition)
        //console.log(i)
        //console.log(inputString[i])
    }
    console.log(output);
    return output;
}

function wrapWord(inputString) {
    words = inputString.split(" ");
    printLinePosition = 0;
    output = words[0];
    printLinePosition += words[0].length;
    for (i = 1; i < words.length; i++) { // Taking word by word
        if (printLinePosition + words[i].length >= 40) { // Overflow case
            output += "\n";
            printLinePosition = 0;
            if (words[i].length >= 40) { // Freakish-ly long word case
                output += words[i]; // Print it
                output += "\n"; // Skip a line
                printLinePosition = 0; // Reset printing position
            } else {
                output += words[i];
                printLinePosition += words[i].length;
            }
        } else {
            if (printLinePosition != 0) {
                output += " ";
                printLinePosition += 1;
            }

            output += words[i];
            printLinePosition += words[i].length;

        }
    }
    return output;
}

function bubbleSort(arrayOfNumbers) {
    if (arrayOfNumbers.length == 0) {
        return arrayOfNumbers;
    } else {
        sortingLeft = true;
        while (sortingLeft) {
            sortingLeft = false;
            for (i = 0; i < arrayOfNumbers.length - 1; i++) { // Going element by element
                if (arrayOfNumbers[i]>arrayOfNumbers[i+1]) {
                    temp = arrayOfNumbers[i];
                    arrayOfNumbers[i] = arrayOfNumbers[i+1];
                    arrayOfNumbers[i+1] = temp;
                    sortingLeft = true;
                }
            }
        }
        return arrayOfNumbers;
    }
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