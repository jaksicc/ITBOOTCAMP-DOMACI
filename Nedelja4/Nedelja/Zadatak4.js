// 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.


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


function najjaciPokemon(arr){
    let najjaci = 0
    for (let i = 0; i< arr.length; i++){
        if(arr[i].karakteristike.napad > najjaci){
           najjaci = arr[i].karakteristike.napad
        }
    }
return najjaci
}

console.log(najjaciPokemon(pokemoni))

function najjaciPokemon2(arr){
    arr.sort((a,b) => b.karakteristike.napad- a.karakteristike.napad)
    return arr[0]
}

console.log(najjaciPokemon2(pokemoni))



