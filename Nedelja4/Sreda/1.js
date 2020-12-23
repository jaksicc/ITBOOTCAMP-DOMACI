// 1.

let Zapdos = {
    ime: 'Zapdos',
    vrsta: 'Elektricni',
    sposobnosti: ['Pritisak', 'Elektricni udar', 'Svetlosni zrak'],
    karakteristike: {
        napad: 52,
        odbrana: 48,
        brzina: 75
    }
}

let Moltres = {
    ime: 'Moltres',
    vrsta: 'Vatreni',
    sposobnosti: ['Vazdusni napad', 'Toplotni udar', 'Vatrena eksplozija'],
    karakteristike: {
        napad: 65,
        odbrana: 43,
        brzina: 70
    }
}

let Cyndaquil = {
    ime: 'Cyndaquil',
    vrsta: 'Vatreni',
    sposobnosti: ['Brzi napad', 'Plamenobacac', 'Vatreni tocak'],
    karakteristike: {
        napad: 60,
        odbrana: 65,
        brzina: 60
    }
}

let Golduck = {
    ime: 'Golduck',
    vrsta: 'Vodeni',
    sposobnosti: ['Vodeni top', 'Onesposobljavanje', 'Udarac repom'],
    karakteristike: {
        napad: 58,
        odbrana: 55,
        brzina: 68
    }
}

let Regice = {
    ime: 'Regice',
    vrsta: 'Ledeni',
    sposobnosti: ['Ledeni vetar', 'Kletva', 'Supermoc'],
    karakteristike: {
        napad: 60,
        odbrana: 70,
        brzina: 55
    }
}

let pokemoni = [Zapdos, Moltres, Cyndaquil, Golduck, Regice]

// 2.

function nizSposobnosti(arr) {
    let tmp = []
    arr.forEach(el => {
        tmp.push(el.sposobnosti)
    })
    return tmp
}

console.log(nizSposobnosti(pokemoni).flat())

// 3.

pokemoni.sort(function (a, b) {
    return a.karakteristike.brzina - b.karakteristike.brzina
});

console.log(pokemoni)