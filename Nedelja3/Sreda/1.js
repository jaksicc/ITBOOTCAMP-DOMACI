function Sati(h) {
    if (h >= 4 && h < 12) {
        return "Dobro jutro"
    }
    else if (h >= 12 && h < 20) {
        return "Dobar dan"
    }
    else if ((h >= 20 && h <= 24) || (h >= 0 && h < 4)) {
        return "Dobro vece"
    }
    else {
        return "Niste uneli ispravan broj"
    }

}

let x = Sati(30)
console.log(x)
