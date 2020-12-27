let Zapdos = {
    ime: 'Zapdos',
    slika: 'Zapdos.jpg',
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
    slika: 'Moltres.jpg',
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
    slika: 'Cyndaquil.jpg',
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
    slika: 'Golduck.jpg',
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
    slika: 'Regice.jpg',
    vrsta: 'Ledeni',
    sposobnosti: ['Ledeni vetar', 'Kletva', 'Supermoc'],
    karakteristike: {
        napad: 60,
        odbrana: 70,
        brzina: 55
    }
}

let pokemoni = [Zapdos, Moltres, Cyndaquil, Golduck, Regice]

const btnPrikaz = document.querySelector('#prikaz')
const btnPobednik = document.querySelector('#pobednik')
const divWrapper = document.querySelector('.wrapper')

btnPrikaz.addEventListener('click', () => {

    pokemoni.forEach((e) => {
        const div1 = document.createElement('div')
        const par1 = document.createElement('p')
        const img1 = document.createElement('img')

        par1.textContent = ` ${e.ime} 
        Vrsta : ${e.vrsta}; 
        Sposobnosti: ${e.sposobnosti}; 
        Karakteristike: ${e.karakteristike.napad}, ${e.karakteristike.odbrana}, ${e.karakteristike.brzina}`

        img1.src = e.slika


        div1.append(par1, img1)
        divWrapper.append(div1)
    })

})

function najjaciPokemon2(arr) {
    arr.sort((a, b) => b.karakteristike.napad - a.karakteristike.napad)
    return arr[0]
}


btnPobednik.addEventListener('click', () => {

    const div2 = document.createElement('div')
    const par2 = document.createElement('p')
    const img2 = document.createElement('img')

    const najjaciPokemon = najjaciPokemon2(pokemoni)

    par2.textContent = ` ${najjaciPokemon.ime}
    Vrsta : ${najjaciPokemon.vrsta};
    Sposobnosti: ${najjaciPokemon.sposobnosti};
    Karakteristike: ${najjaciPokemon.karakteristike.napad}, ${najjaciPokemon.karakteristike.odbrana}, ${najjaciPokemon.karakteristike.brzina}`

    img2.src = najjaciPokemon.slika

    div2.append(par2,img2)
    divWrapper.append(div2)

})

