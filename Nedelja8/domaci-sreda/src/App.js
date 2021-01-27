import { v1 as uuid } from 'uuid'

let shoppingItems = [
  {
    naziv: 'Hleb',
    cena: '80 RSD',
    id: 1
  },
  {
    naziv: 'Jogurt',
    cena: '150 RSD',
    id: 2
  },
  {
    naziv: 'Mleko',
    cena: '100 RSD',
    id: 3
  },
  {
    naziv: 'Kafa',
    cena: '650 RSD',
    id: 4
  }

]

function ShoppingItems() {

  return (
    <div>
      {shoppingItems.map(item => <div key={uuid()}><p>{item.naziv} - {item.cena}</p></div>)}

    </div>
  )
}


function ShoppingList({ ime }) {
  return (
    <div>
      <h1>Shopping List for {ime}</h1>
      <div>
        <ShoppingItems />
      </div>
    </div>
  )
}

export default ShoppingList;
