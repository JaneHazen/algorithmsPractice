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


/// Write a method to see if a string is a permutation of a palindrome

function testIsPermutationOfPalindrome(){
    let string1 = "Tact Coa"
    let expected = true;
    return (expected === isPermutationOfPalindrome(string1));
}

function isPermutationOfPalindrome(str){
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

console.log(testIsPermutationOfPalindrome());

// Write a method to see if two strings are one edit away (by adding, subtracting, or replacing one letter)

function testOneAwayReplace(){
    let string1 = "pale"
    let string2 = "bale"
    let expected = true;
    return (expected === isOneAway(string1, string2));
}

function testOneAwayEditSubtract(){
    let string1 = "pale"
    let string2 = "ale"
    let expected = true;
    return (expected === isOneAway(string1, string2));
}

function testOneAwayEditIncrease(){
    let string1 = "pale"
    let string2 = "pales"
    let expected = true;
    return (expected === isOneAway(string1, string2));
}

function isOneAway(str1, str2){
    if(str1.length === str2.length){
        return oneAwayReplace(str1, str2);
    }
    if(str1.length + 1 === str2.length){
        return oneAwayEdit(str1, str2);
    }
    if(str1.length === str2.length + 1){
        return oneAwayEdit(str2, str1);
    }
    return false;
}

function oneAwayEdit(short, long){
    let index1 = 0;
    let index2 = 0;
    while(index2 < long.length && index1 < short.length){
        if(short.charAt(index1) !== long.charAt(index2)){
            if (index1 !== index2){
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }
    return true;
}

function oneAwayReplace(str1, str2){
    let differences = false;
    for(let i = 0; i < str1.length; i++){
        if(differences){
            if(str1[i] !== str2[i]){
                return false;
            }
        }
        if(str1[i] !== str2[i]){
            differences = true
        }
    }
    return differences;
}

console.log(testOneAwayReplace());
console.log(testOneAwayEditSubtract());
console.log(testOneAwayEditIncrease());

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
        answer += oneKey;
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