// 1. Napisati f-ju koja ispisuje sve elemente niza koji su deljivi sa 5

function isDivisible(arr){
    let count = ''
    for (let el of arr){
        if(el % 5 == 0){
            count += el + ' '
        }
    }
    return count
}

let x = isDivisible([1,3,5,6,7,10,12,14,15,17,19,20])
console.log(x)