import klase from './modulKlase.js'

const forma = document.querySelector('.forma')
const inputName = document.querySelector('#username')
const inputPass = document.querySelector('#password')
const divkorpa = document.querySelector('.korpa')
const proizvodiDiv = document.querySelector('.proizvodi')

let registrovaniKupci = [new klase.Korisnik('Ana', '123'), new klase.Korisnik('pera', 'p'), new klase.Admin('Dusan', 'abc')]
let proizvodi = [new klase.PrehrambeniProizvod('Sir', '800', 20, '01.08.2021'), new klase.BelaTehnika('Frizider', '45000', 5, '5 godina')]

let k = {}
const isValidKupac = kupac => {
    return registrovaniKupci.some(k => k.ime == kupac.ime && k.sifra == kupac.sifra)

}


forma.addEventListener('submit', (e) => {
    e.preventDefault()

    k = new klase.Korisnik(inputName.value, inputPass.value)
    if (isValidKupac(k)) {
        let korpa = document.createElement('div')
        korpa.id = "korpa-div"
        let h3 = document.createElement('h3')
        h3.innerHTML = `Vasa korpa : ${k.ime}`
        korpa.append(h3)
        divkorpa.append(korpa)
    } else {
        window.alert("Niste registrovani!");
        k = {}
    }

    console.log(k);
})

proizvodi.forEach(p => {
    console.log(p instanceof klase.BelaTehnika)
    if (p instanceof klase.BelaTehnika) {
        let div = document.createElement('div')
        div.classList.add('proizvod')

        div.innerHTML = `
        <p>Naziv: ${p.naziv}</p>
        <p>Cena: ${p.cena} din</p>
        <p>Garancija: ${p.garancija}</p>`

        let inputKolicina = document.createElement('input')
        inputKolicina.type = 'number'
        inputKolicina.className = 'input-number'

        let btnDodaj = document.createElement('button')
        btnDodaj.textContent = 'Dodaj u korpu'

        btnDodaj.addEventListener('click', () => {

            if (inputKolicina.value > p.dostupnaKolicina) {
                window.alert('Uneli ste preveliku kolicinu')
            }

            else {
                console.log(p.dostupnaKolicina)
                p.izmeniKolicinu(inputKolicina.value)
                // p.dostupnaKolicina = p.dostupnaKolicina - inputKolicina.value
                console.log(p.dostupnaKolicina)
                k.dodajUkorpu(p)
                console.log(k)

                const divProizvod = document.createElement('div')
                divProizvod.className = 'proizvod'

                divProizvod.innerHTML = `
                <p>Naziv: ${p.naziv}</p>
                <p>Cena: ${p.cena} din</p>
                <p>Kolicina: ${inputKolicina.value}`

                const btnDlt = document.createElement('button')
                btnDlt.textContent = "Obrisi iz korpe"

                btnDlt.addEventListener('click', () => {
                    btnDlt.parentElement.remove()
                    k.obrisiItem(p)
                    console.log(k)
                })

                divProizvod.append(btnDlt)
                korpa.append(divProizvod)




            }
            console.log(k.korpa)



        })


        div.append(inputKolicina, btnDodaj)
        proizvodiDiv.appendChild(div)
    }
    else {
        let div = document.createElement('div')
        div.classList.add('proizvod')

        div.innerHTML = `
        <p>Naziv: ${p.naziv}</p>
        <p>Cena: ${p.cena} din</p>
        <p>Rok trajanja: ${p.rokTrajanja}</p>`

        let inputKolicina = document.createElement('input')
        inputKolicina.type = 'number'
        inputKolicina.className = 'input-number'

        let btnDodaj = document.createElement('button')
        btnDodaj.textContent = 'Dodaj u korpu'

        btnDodaj.addEventListener('click', () => {
            if (inputKolicina.value > p.dostupnaKolicina) {
                window.alert('Uneli ste preveliku kolicinu')
            }

            else {
                console.log(p.dostupnaKolicina)
                // p.dostupnaKolicina = p.dostupnaKolicina - inputKolicina.value
                p.izmeniKolicinu(inputKolicina.value)
                console.log(p.dostupnaKolicina)
                k.dodajUkorpu(p)
                console.log(k)

                const divProizvod = document.createElement('div')
                divProizvod.className = 'proizvod'

                divProizvod.innerHTML = `
                <p>Naziv: ${p.naziv}</p>
                <p>Cena: ${p.cena} din</p>
                <p>Kolicina: ${inputKolicina.value}`

                const btnDlt = document.createElement('button')
                btnDlt.textContent = "Obrisi iz korpe"

                btnDlt.addEventListener('click', () => {
                    btnDlt.parentElement.remove()
                    k.obrisiItem(p)
                    console.log(k)
                })

                divProizvod.append(btnDlt)
                korpa.append(divProizvod)
            }
            console.log(k.korpa)


        })


        div.append(inputKolicina, btnDodaj)
        proizvodiDiv.appendChild(div)
    }

})

