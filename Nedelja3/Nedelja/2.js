// 2. Napisati f-ju koja vraca koliko pice vam je dovoljno za dizivotno snabdevanje
// Unosi se koliko pice pojedete na msecno nivou, i koliko godina imate (Racuna se da je dovoljno dostavljati do stote godine)

function lifeSupply(numPerMonth, age){
    return (100 - age) * 12 * numPerMonth
}

let x = lifeSupply(10,26)
console.log(x)