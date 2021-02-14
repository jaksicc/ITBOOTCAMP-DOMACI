import { useState } from "react"
import { Link } from "react-router-dom"

const Categories = ({products}) => {
    let categories = Array.from(new Set(products.map(product => product.category)))

    
   
    return (
        <>
        {categories.map(category => {
            return(
                <div key={category}>
                    <Link to={`/categories/${category}`}>{category}</Link>
                </div>
            )
        })}

    

        
        </>
    )
}

export default Categories