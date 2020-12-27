const divWrapper = document.querySelector('#wrapper')
const btnNaruci1 = document.querySelector('#naruci1')
const btnNaruci2 = document.querySelector('#naruci2')
const btnNaruciOdmah1 = document.querySelector('#naruci-odmah1')
const btnNaruciOdmah2 = document.querySelector('#naruci-odmah2')

let counter = 0

btnNaruci1.addEventListener('click', () => {
    counter++
    console.log(counter)
})

btnNaruci2.addEventListener('click', () => {
    counter++
    console.log(counter)
})

btnNaruciOdmah1.addEventListener('click', () => {

    if (counter == 0) {
        window.alert('Broj narucenih pica mora biti veci od 0')
    }
    else {
        let date = new Date()
        const paragraf = document.createElement('p')
        paragraf.textContent = `Narucili ste ${counter} pizza [${date}]`
        divWrapper.append(paragraf)
    }
    counter = 0
})

btnNaruciOdmah2.addEventListener('click', () => {

    if (counter == 0) {
        window.alert('Broj narucenih pica mora biti veci od 0')
    }
    else {
        let date = new Date()
        const paragraf = document.createElement('p')
        paragraf.textContent = `Narucili ste ${counter} pizza [${date}]`
        divWrapper.append(paragraf)
    }
    counter = 0
})