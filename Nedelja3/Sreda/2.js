// 2. Napisati f-ju koja izracunava cenu pice po kvadratnom centimetru (parametri f-je su poluprecnik u cm i cena pice)

function cenaPicePoKvCm (r, cena){
    let P = r ** 2 * Math.PI
    let Q = cena / P
    return Q
}

let x = cenaPicePoKvCm(30,1000)
console.log(x)