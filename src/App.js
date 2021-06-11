import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CourseDetails from "./pages/CourseDetails/CourseDetails"
import Home from "./pages/Home/Home"


const App = () => {
	// Link me permet de créer de lioen afin de naviguer vers la route en question
	// Route permet de créer des URLs où à ces URLs seront affiché des composants
	// Switch va (seulement) retourner la première route qui correspond à l'URL donnée, il faudra dont appeler ses routes dans l'ordre suivant: de la plus particulière à la plus générale
	// Link permet de changer de page/d'URL sans que notre page/app se raffraichisse
	return (
		<Router>
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/hello'>Hello</Link></li>
					<li><Link to='/test'>404</Link></li>
				</ul>
			</nav>
			<Switch>
				<Route path='/courses/:id' component={CourseDetails} />
				{/* <Route path='/courses/?name=saumon&popular=true' component={CourseDetails} /> */}
				<Route path='/hello/12' component={() => <h1>Hello 12</h1>} />
				<Route path='/hello' component={() => <h1>Hello world</h1>} />
				{/* <Route path='/' exact component={Home} /> */}
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='*' component={() => <h1>Bravo, vous avez trouvé la page 404!</h1>} />
			</Switch>
		</Router>
	)
}

export default App