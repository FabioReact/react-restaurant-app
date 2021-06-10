import { useState } from 'react'
import CategoryCard from './components/CategoryCard/CategoryCard'
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/ProductCard/ProductCard'
import { db } from './data/db'

const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openMenu = () => {
		setIsOpen(true)
	}

	return (
		<div className='flex'>
			{/* {isOpen && <Navbar />} */}
			<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
			<main>
				<section className="flex">
					<button onClick={openMenu} className='ml-auto lg:hidden'>
						<img src="img/icons/menu.png" alt="Menu" className='h-10' />
					</button>
				</section>
				<div className='flex w-96 overflow-x-hidden'>
					{db.courses.map(course => (
						<ProductCard
							key={course.id}
							name={course.name}
							image={course.image}
							description={course.description}
							price={course.price}
						/>
					))}
				</div>
				<section>
					<ul className='flex flex-wrap justify-around'>
						{db.categories.map(category => (
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

export default App
