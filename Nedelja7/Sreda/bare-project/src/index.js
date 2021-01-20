import axios from 'axios'

const appDiv = document.querySelector('#app')
const selectPrikaz = document.querySelector('#select-ship-launch')
const btnPrikazi = document.querySelector('#btn-prikazi')

const divSadrzaj = document.querySelector('#div-sadrzaj')


const addShip = ship => {

    const divItem = document.createElement('div')
    divItem.className = 'div-item'

    const p1 = document.createElement('p')
    p1.textContent = ship.ship_name

    const img1 = document.createElement('img')
    img1.src = ship.image ? ship.image : 'https://via.placeholder.com/100'

    divItem.append(p1, img1)
    divSadrzaj.append(divItem)
}

const addLaunch = launch => {

    const divItem = document.createElement('div')
    divItem.className = 'div-item'

    const p2 = document.createElement('p')
    p2.textContent = launch.mission_name

    const img2 = document.createElement('img')
    img2.src = launch.links.mission_patch_small ? launch.links.mission_patch_small : 'https://via.placeholder.com/100'

    divItem.append(p2, img2)
    divSadrzaj.append(divItem)
}






btnPrikazi.addEventListener('click', () => {
    divSadrzaj.innerHTML = ''
    const h = document.createElement('h1')
    h.textContent = 'SpaceX'
    divSadrzaj.append(h)
    
    if (selectPrikaz.value == 'Brodovi') {
        axios.get('https://api.spacexdata.com/v3/ships')
            .then(res => {
                console.log(res)
                res.data.forEach(ship => addShip(ship))
            })

    }
    else {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                console.log(res)
                res.data.forEach(launch => addLaunch(launch))
            })

    }
})