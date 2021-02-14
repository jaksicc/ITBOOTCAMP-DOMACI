import { useParams } from "react-router-dom"

const Category = ({ products }) => {

    let { category } = useParams()


    let proizvodi = products.filter(product => product.category == category)


    return proizvodi.length > 1 ?
        (
            <>
                {proizvodi.map(proizvod => <p key={proizvod.id}>{proizvod.name}---{proizvod.category}</p>)}
            </>
        )
        :
        (
            <>
                {proizvodi.map(proizvod => <p key={proizvod.id} style={{ color: "red" }}>{proizvod.name}{proizvod.category}</p>)}
            </>
        )
}

export default Category