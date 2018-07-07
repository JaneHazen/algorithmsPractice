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