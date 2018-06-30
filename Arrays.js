/// Find the element that appears once in a sorted array where all other elements appear twice one after another. Find that element in 0(logn) complexity.

let arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];

function testDuplicates(){
    let expected = 4;
    let actual = findNonDuplicate(arr);
    return expected === actual;
}

function findNonDuplicate(arr){
    if (arr.length < 1){
        return "Null Array";
    }
    if(arr.length === 1){
        return arr[0];
    }
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        let previous = arr[i-1];
        let next = arr[i+1];
        if(!previous){
            if(element !== next){
                return element;
            }
        }

        if (element !== previous && element !== next) {
            return element;
        }

        if(!next) {
            if(element !== previous) {
                return element;
            } else {
                return "No single elements found";
            }
        }

    }
}

let duplicates = testDuplicates();
console.log(duplicates);


/// A magic index in an array A[0…n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index if one exists, in an array A

let magicArr = [-10, -5, 0, 3, 7];

function testMagicIndex(){
    let expected = 3;
    let actual = magicIndex(magicArr);
    return expected === actual;
}

function magicIndex(arr){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === i){
            return i;
        }
    }
    return "Not Found";
}

let magic = testMagicIndex();
console.log(magic);

/// Search an element in an array where difference between adjacent elements is 1

let adjacent = [8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3];

function testSearchAdjacent(){
    let expected = 7;
    let key = 3;
    let actual = searchAdjacent(adjacent, key);
    return expected === actual;
}

function searchAdjacent(arr, key){
    let i = 0;
    while(i < arr.length) {
        if (arr[i] === key) {
            return i;
        }
        i= i + arr[i] - key;
    }
    return "Not Found"
}

let adjacency = testSearchAdjacent();
console.log(adjacency);

/// Split an array into two equal Sum subarrays

let sumOfArrays = [1 , 2 , 3 , 4 , 5 , 5 ];

function testFindSubArrays(){
    let expected = [[1,2,3,4],[5,5]]
    let actual = findSubArrays(sumOfArrays);
    return expected === actual;
}

function findDivider(arr){
    let leftSum = 0;
    for(element of arr){
        leftSum += element;
    }

    let rightSum = 0;
    for(let i = arr.length-1; i >= 0; i--){
        rightSum += arr[i];
        leftSum -= arr[i];
        if(rightSum === leftSum){
            return i;
        }
    }

    return -1;
}

function findSubArrays(arr){
    let divider = findDivider(arr);

    if(divider === -1 || divider === arr.length){
        return "Not Found";
    }
    for(let i = 0; i < arr.length; i++){
        if(divider === i){
            console.log("****")
        }
        console.log(arr[i] + " ")
    }
}

let split = findSubArrays(sumOfArrays);
console.log(split);
