import S from './service.js'


const divWrapper = document.querySelector('#wrapper')

const divHeader = document.querySelector('#header')
const inputTXT = document.querySelector('#inputTXT')
const addBtn = document.querySelector('#addBtn')

const divLista = document.querySelector('#lista')


const addToDom = elem => {
    const divItem = document.createElement('div')
    divItem.className = 'item'

    const span = document.createElement('span')
    span.className = 'span-opis'
    span.textContent = elem.desc

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.className = 'checkbox'

    const btnDel = document.createElement('button')
    btnDel.className = 'delete'
    btnDel.textContent = 'Obrisi'

    btnDel.addEventListener('click', () => {
        S.deleteById(elem.id)
        divItem.remove()
        console.log(S.data)
    })

    if(elem.done == false){
        checkBox.checked = false
    }
    else if(elem.done == true){
        checkBox.checked = true
        span.innerHTML = `<s>${elem.desc}</s>`
    }

    checkBox.addEventListener('change',() =>{
        if(checkBox.checked){
            elem.done = true
            span.innerHTML = `<s>${elem.desc}</s>`
        }
        else{
            elem.done = false
            span.textContent = elem.desc
        }
        console.log(S.data)
    })


    divItem.append(span, checkBox, btnDel)
    divLista.appendChild(divItem)


}


S.data.forEach(e => {
    addToDom(e)
})

addBtn.addEventListener('click', () => {
    let toDoItem = {
        desc: inputTXT.value,
        done: false
    }
    S.add(toDoItem)
    addToDom(toDoItem)
    console.log(S.data)
    inputTXT.value = ''

})







// const divWrapper = document.querySelector('#wrapper')

// const divHeader = document.querySelector('#header')
// const inputTXT = document.querySelector('#inputTXT')
// const addBtn = document.querySelector('#addBtn')

// const divLista = document.querySelector('#lista')
// const ulLista = document.querySelector('#moja-lista')


// data.forEach()

// addBtn.addEventListener('click', () => {
//     const li = document.createElement('li')
//     li.textContent = inputTXT.value

//     if (inputTXT.value === '') {
//         window.alert('Opis ne moze biti prazan')
//     }
//     else {
//         ulLista.appendChild(li)
//     }
//     inputTXT.value = ''

//     const btnDel = document.createElement('button')
//     btnDel.textContent = 'X'

//     btnDel.addEventListener('click', () => {
//         li.remove()
//         S.deleteById(li)
//         console.log(S.data)
//     })

//     li.appendChild(btnDel)
//     S.add(li)
//     console.log(S.data)


// })
