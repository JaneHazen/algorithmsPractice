///Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

let allUniqueCharacters = "1, 2, 3, a, b, c, d, h";

function testFindIfAllUnique(str){
    let expected = true;
    let actual = findIfAllUnique(allUniqueCharacters);
    return expected === actual;
}

function findIfAllUnique(str){
    let theString = str.replace(/ /g,"").split("").sort();
    for(let i=0; i < theString.length; i++){
        if (theString[i] === theString[i+1]){
            return false;
        }
    }
    return true;
}

let split = testFindIfAllUnique();
console.log(split);

/// Given two strings, write a method to decide if one is a permutation of the other?

let setOne = "aehcifbjgkd";
let setTwo = "bacdhigfej";

function testPermutations(){
    let expected = true;
    let actual = findIfPermutations(setOne, setTwo);
    return expected === actual;
}

function findIfPermutations(str1, str2){
    let theString = str1.replace(/ /g,"").split("").sort();
    let secondString = str2.replace(/ /g,"").split("").sort();
    return (theString === secondString);
}

let permutable = testPermutations();
console.log(permutable);

/// Write a method to replace all spaces in a string with ‘%20’.

let spaceSet = "i like space a lot";
let percentagesSet = "i%20like%20space%20a%20lot";

function testSpaceMaker(){
    let expected = percentagesSet;
    let actual = spaceMaker(spaceSet);
    return expected === actual;
}

function spaceMaker(str){
    let answer = str.replace(/ /g,"%20");
    return answer;
}

let spacey = testSpaceMaker();
console.log(spacey);


/// Write a method to see if a string is a permentation of a palindrome

function testIsPermentationOfPalindrome(){
    let string1 = "Tact Coa"
    let expected = true;
    return (expected = isPermentationOfPalindrome(string1));
}

function isPermentationOfPalindrome(str){
    str = str.replace(/ /g, "");
    let countEachLetter = {};
    let countOdd = 0;
    for(letter of str){
        letter = letter.toLowerCase();
        if(!countEachLetter[letter]){
            countEachLetter[letter] = 1;
        } else {
            countEachLetter[letter] += 1;
        }
        if(countEachLetter[letter] % 2 === 0){
            countOdd--
        } else {
            countOdd++
        }
    }
    return (countOdd <= 1);
}

console.log(testIsPermentationOfPalindrome())

/// Write a method that outputs the number of each letter in a string as a string

let decompressed = "aabccccaaa";
let compressed = "a5b1c4";

function testCompresser(){
    let expected = compressed;
    let actual = Compresser(decompressed);
    return expected === actual;
}

function Compresser(str){
    let theString = str.split("");
    let theAnswer = {};
    for(let character of theString){
        if(!theAnswer[character]){
            theAnswer[character] = 1;
        } else {
            theAnswer[character]  += 1;
        }
    }

    let answer = "";
    let allTheKeys = Object.keys(theAnswer);
    for(let oneKey of allTheKeys){
        answer += oneKey
        answer += theAnswer[oneKey].toString();
    }

    if(answer.length <= str.length){
        return answer;
    }
    return str;

}

let compressednumbermaker = testCompresser(decompressed);
console.log(compressednumbermaker);


/// Sort by strings

function testSortByStrings1(){
    let s = "weather";
    let t = "therapyw";
    let expected = "theeraw";
    return expected === sortByStrings(s, t);
}

function testSortByStrings2(){
    let s = "good";
    let t = "odg";
    let expected = "oodg";
    return expected === sortByStrings(s, t);
}

function sortByStrings(str1, str2){
    let answer = "";
    let str1Letters = {};

    for(let element of str1){
        if(!str1Letters[element]){
            str1Letters[element] = 1;
        } else {
            str1Letters[element] += 1;
        }
    }

    let letters = Object.keys(str1Letters);

    for(let j = 0; j < str2.length; j++){
        for(let i = 0; i < letters.length; i++){
            if(letters[i] === str2[j] ){
                for(let k = 0; k < str1Letters[letters[i]]; k++ ){
                    answer += letters[i];
                }
            }
        }
    }

    return answer;
}

let testSortByStringsOne = testSortByStrings1();
let testSortByStringsTwo = testSortByStrings2();

console.log(testSortByStringsOne);
console.log(testSortByStringsTwo);