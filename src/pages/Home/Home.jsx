import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState([])

	const openMenu = () => {
		setIsOpen(true)
	}

	// fetch('http://localhost:4000/beverages').then(res => res.json()).then(d => console.log(d))
	// Documentation: https://fr.reactjs.org/docs/hooks-effect.html
	// useEffect prendra deux paramètres:
	// 		- le premier la fonction callback à éxécuter
	// 		- le second est un tableau de dépendances - si une des valeurs à l'intérieur de ce tableau change, alors la fonction callback sera de nouveau éxécutée
	// Note: Si le tableau de dépendance est vide, alors la fonction ne s'éxécutera qu'une seule fois, à savoir après le premier rendu du composant à l'écran

	useEffect(() => {
		// Ici, je peux utiliser des méthodes non pures, entrainant des effets de bords, tel que faire un appel à une API
		fetch('http://localhost:4000/courses', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
		fetch('http://localhost:4000/categories', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setCategories(data)
			})
			.catch(error => {
				console.error(error)
			})
	}, [])
	

	return (
		<div className='app'>
			{/* {isOpen && <Navbar />} */}
			<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
			<main className='p-8'>
				<section className="flex">
					<button onClick={openMenu} className='ml-auto lg:hidden'>
						<img src="img/icons/menu.png" alt="Menu" className='h-10' />
					</button>
				</section>
				<section>
					<Swiper
						spaceBetween={30}
						// slidesOffsetBefore={30}
						// slidesOffsetAfter={30}
						slidesPerView={'auto'}
					>
						{
							products.map(product => (
								<SwiperSlide key={product.id}>
									<ProductCard
										name={product.name}
										image={product.image}
										description={product.description}
										price={product.price}
									/>
								</SwiperSlide>
							))
						}
						{/* {db.courses.map(course => (
							<SwiperSlide key={course.id}>
								<ProductCard
									name={course.name}
									image={course.image}
									description={course.description}
									price={course.price}
								/>
							</SwiperSlide>
						))} */}
					</Swiper>
				</section>
				<section>
					<ul className='flex flex-wrap justify-around'>
						{categories.map(category => (
							<CategoryCard
								key={category.id}
								category={category.name}
								image={category.image}
								color={category.color}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	)
}

export default Home
