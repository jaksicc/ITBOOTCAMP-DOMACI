import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Categories from './components/Categories'
import Category from './components/Category'
import Home from './components/Home'
import { getAllProducts } from './service'

const App = () => {

	const [products, setProducts] = useState([])

	useEffect(() => {
		getAllProducts().then(res => {
			setProducts(res.data)
		})
	}, [])

	console.log(products)

	return (
		<>
			<Router>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/categories">Categories</Link></li>
				</ul>

				<Switch>

					
					<Route path="/categories/:category">
						<Category  products={products}/>
					</Route>

					<Route path="/categories">
						<Categories products={products} />
					</Route>

					<Route path="/">
						<Home products={products} />
					</Route>


				</Switch>

			</Router>
		</>
	)
}

export default App
