let input = [4, 2, 2, 3, 2, 2, 2]

const uniqSort = function(array){
    let breadcrumbs = {}
    let final = []
    for(element of array){
        if(!breadcrumbs[element]){
            breadcrumbs[element] = 1
            final.push(element)
        } else {
            breadcrumbs[element] += 1
        }
    }
    return final.sort((a, b) => b - a)
}

uniqSort(input);


let input = 5
let cache = {}

const factorial = (n) => {
    if(cache[n]){
        return cache[n]
    }
    let total = 1
    for(let i = n; i > 0; i--){
        console.log(total);
        total *= i
    }
    cache[n] = total
    return total
}

factorial(input);
console.log(cache);

let input = 5

const memoizedClosureFactorial = () => {
    let cache = {};
    return (n) => {
        if(n in cache){
            return cache[n]
        } else {
            let total = 1
            for(let i = n; i > 0; i--){
                console.log(total);
                total *= i
            }
            cache[n] = total
            return total
        }
    }
}

const factorial = memoizedClosureFactorial()
console.log(factorial(5))

let input = 5

const memoizedClosureFactorial = (cb) => {
    let cache = {};
    return (n) => {
        if(n in cache){
            return cache[n]
        } else {
            let factorial = cb(n)
            cache[n] = factorial
            return factorial
        }
    }
}

function findFactorial(n){
    let total = 1
    for(let i = n; i > 0; i--){
        total *= i
    }
    return total
}

const factorial = memoizedClosureFactorial(findFactorial)
console.log(factorial(5))
///////////// RECURSION

let input = 5

const recursiveLoop = (n) => {
    console.log(n, "is n!");
    if(n <= 1){
        return "complete!"
    }
    return recursiveLoop(n-1)
}


const recursive = recursiveLoop(5)


const recursiveFactorial = (n, result=1) => {
    if(n <= 1){
        return result;
    }
    result = n*result;
    return recursiveFactorial(n-1, result)
}


const recursive = recursiveFactorial(5)
console.log(recursive)


const memoize = (fn) => {
    let cache = {};
    return(...args) => {
        let n = args[0];
        if(n in cache){
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
const factorial = memoize(
    (x) => {
        if(x === 0){
            return 1;
        } else {
            return x * factorial(x -1)
        }
    })

console.log(factorial(5))


const memoize = (fn) => {
    let cache = {};
    return(...args) => {
        let n = args[0];
        let y = args[1];
        if(n in cache){
            return cache[n];
        } else {
            let result = fn(n, y);
            cache[n] = result;
            return result;
        }
    }
}
const linear = memoize(
    (array, item) => {
        for(let i = 0; i < array.length; i++){
            if(array[i] === item){
                return i;
            }
        }
        return "none found"
    })

console.log(linear([5, 3, 2, 1], 1))


function binarySearch(list, item){
    let min = 0;
    let max = list.length;
    while( min <= max ){
        let midpoint = Math.floor((min + max )/2);
        if(list[midpoint] === item){
            return midpoint
        } else {
            if(item < list[midpoint]){
                max = midpoint - 1;
            } else {
                min = midpoint + 1;
            }
        }
    }
}

binarySearch([1, 3, 6, 8, 12, 14], 12)


/// MERGE SORT

function mergeSort(list){
    if (list.length === 1) {
        return list;
    }

    const midpoint = Math.floor(list.length /2);
    const left = list.slice(0, midpoint);
    const right = list.slice(midpoint);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        if(left[indexLeft] < right[indexRight]){
            result.push(left[indexLeft])
            indexLeft++
        }else {
            result.push(right[indexRight])
            indexRight++
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

mergeSort([1, 3, 6, 8, 12, 14])

// MAKE CHANGE---- greedy


function makeChange(coins, amount){
    coins.sort((a, b) => b -a);
    let coinTotal = 0;
    let i = 0
    while (amount > 0 ){
        if(coins[i] <= amount){
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal
}
makeChange([5, 10, 25], 50);

// MAKE CHANGE---- brute force

const coins = [5, 10, 25, 30]
function makeChange(value){
    if(value === 0) return 0;
    let minCoins;
    coins.forEach((coin, i) => {
        if(value - coin >= 0){
            let currMinCoins = makeChange(value - coin);
            if(minCoins === undefined || currMinCoins < minCoins){
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
}
makeChange(50);

// MAKE CHANGE with memoization

const coins = [5, 10, 25, 30];
const cache = {};
const makeChange = (value) =>{
    if(cache[value]) return cache[value];
    let minCoins = -1;
    coins.forEach((coin, i) => {
        if(value - coin >= 0){
            let currMinCoins = makeChange(value - coin);
            if(minCoins === -1 || currMinCoins < minCoins){
                minCoins = currMinCoins;
            }
        }
    });
    cache[value] = minCoins + 1;
    return cache[value];
};
makeChange(50);


function Building(floors) {
    this.what = "building";
    this.floors = floors;
}


Building.prototype.countFloors = function(){
    console.log("I have", this.floors, "floors")
};

let myHouse = new Building(3);

function Tree(apples) {
    this.apples = apples;
}

Tree.prototype.subtractApples = function(){
    this.apples -= 1;
};

let appleTreee = new Tree(8)

appleTreee.subtractApples();
appleTreee.subtractApples();
appleTreee.subtractApples();

Tree.prototype.writeApples = function(){
    console.log(this.apples, "I've got that many apples")
};
appleTreee.writeApples();


var makeEggs = function(style, n) {
    var completedEgg;
    if( style !== "boiled"){
        var crackedEggs = crackEggs(n);
        if( style != "scrambled") {
            completedEgg = fryEgg(crackedEggs);
        } else {
            var prepEggs = whipEggs(crackedEggs);
            completedEgg = fryEgg(prepEggs)
        }

        console.log("boilin the egg");
        completedEgg = n;
    }
    return n;
}

function crackEggs(n){
    console.log("Just cracked " +  n  + " eggs");
    if(n > 5) {
        console.log("There's no way to crack this many eggs without breaking one");
        n -= 1;
    }
    return n;
}

function fryEgg(crackedEggs){
    console.log("fryin the eggos");
    return crackedEggs;
}

function whipEggs(crackedEggs){
    console.log("whipping the eggs");
    return crackedEggs;
}

makeEggs("scrambled", 10);

/// IMPLEMENT A STACK

var Stack = function(){
    this.storage = "";
};

Stack.prototype.push = function(val) {
    if(this.storage === ""){
        this.storage += val + " "
    }else{
        this.storage += " " + val + " "
    }
};

Stack.prototype.getArray = function(){
    let array = this.storage.split(" ");
    let noWhitespaces = array.filter(function(str){
        return /\S/.test(str);
    });
    return noWhitespaces;
}

Stack.prototype.pop = function(){
    let array = this.getArray();
    array.pop();
    this.storage = array.join("");
};

Stack.prototype.size = function(){
    let array = this.getArray();
    return array.length;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");

myWeeklyMenu.storage

myWeeklyMenu.push("lentilSoup");
console.log(myWeeklyMenu.storage)
myWeeklyMenu.pop();
console.log(myWeeklyMenu.storage)
myWeeklyMenu.push("orangeSoda")
console.log(myWeeklyMenu.storage)
myWeeklyMenu.pop();
console.log(myWeeklyMenu.storage)
myWeeklyMenu.size();

/// IMPLEMENT STACK WITH OBJECTS

function Stack(capacity) {
    this.capacity = capacity || Infinity;
    this.storage = {};
    this._count = 0;
}

Stack.prototype.push = function(value) {
    if (this._count < this.capacity) {
        this.storage[this._count++] = value;
        return this._count;
    }
    return "max capacity exceeded, remove an element before adding one"
};

Stack.prototype.pop = function() {
    if(this._count === 0) {
        return "no elements, add before popping"
    }
    var value = this.storage[--this._count];
    delete this.storage[this._count];
    if(this._count < 0){
        this._count = 0;
    }
    return value;
};

Stack.prototype.peek = function() {
    return this.storage[this._count -1];
};

Stack.prototype.count = function() {
    return this._count;
};

var myStack = new Stack(3);
console.log(myStack.push('a', ' should be 1'));
console.log(myStack.push('b'));
console.log(myStack.push('c'))
console.log(myStack.push('d'))
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.count(), 'should be 2')

//// IMPLEMENT STACK USING OBJECTS

function Stack(capacity){
    this.capacity = capacity || Infinity;
    this._count = 0;
    this.storage = {};
}

Stack.prototype.push = function(value){
    if(this._count < this.capacity){
        this._count++;
        this.storage[this._count] = value;
        return "Added: " + this.storage[this._count];
    }
    return "You're at capacity"
};

Stack.prototype.pop = function(){
    if( this._count > 0 ){
        delete this.storage[this._count]
        --this._count;
        if( this._count < 0) {
            this._count = 0;
        }
        return "Popped"
    } else {
        return "Add something first, fool"
    }
};

Stack.prototype.peek = function(){
    return this.storage[this._count]
};

myStack = new Stack(3);
console.log(myStack.push('1'));
console.log(myStack.push('2'));
console.log(myStack.push('3'));
console.log(myStack.push('4'));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.push('1'));
console.log(myStack.peek());
console.log(myStack.push('2'));
console.log(myStack.peek());


//make a pure function bar(..) to wrap around foo(..)

function foo(x) {
    y++;
    z = x * y;
}

var y = 5, z;

foo(20);
console.log(z);
foo(25);
console.log(z);

function bar(x, y) {
    function foo(x){
        y++;
        z = x * y;
    }
    foo(x);
    return [y, z]
}

