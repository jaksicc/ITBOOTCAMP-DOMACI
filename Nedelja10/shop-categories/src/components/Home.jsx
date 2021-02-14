import { Route } from "react-router-dom"

const Home = ({products}) => {
    return (
        <>
        {products.map(product => <p key={product.id}>{product.name}---{product.category}</p>)}
        </>
    )
}

export default Home