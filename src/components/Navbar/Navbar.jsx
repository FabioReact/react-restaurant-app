const Navbar = ({ isOpen, setIsOpen }) => {
	const closeMenu = () => {
		setIsOpen(false)
	}
	return (
		<nav className={isOpen ? 'navigation' : 'navigation hide-navbar'}>
			<h1 className='text-2xl uppercase tracking-wider mb-12'>Le couteau</h1>
			<ul className='font-bold text-center lg:text-left'>
				<li className='mb-6'>Menu</li>
				<li className='mb-6'>Commandes</li>
				<li className='mb-6'>À propos</li>
			</ul>
			<button className='lg:hidden' onClick={closeMenu}>
				<img className='w-24' src="img/icons/close.svg" alt="Fermer" />
			</button>
		</nav>
	)
}

export default Navbar
