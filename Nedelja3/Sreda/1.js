function Sati(h){
    if (h > 0 && h <= 8){
    return "Dobro jutro"
    }
    else if (h > 8 && h <= 16){
        return "Dobar dan"
    }
    else if (h > 16 && h <=24){
        return "Dobro vece"
    }
    else {
        return "Niste uneli ispravan broj"
    }

}

let x = Sati(17)
console.log(x)
