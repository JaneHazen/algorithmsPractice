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