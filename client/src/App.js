import { Routes, Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Admin from './Admin';
import Home from './Home';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar
				color='light'
				expand='md'
				light
			>
				<NavbarBrand>
					Yodlr Design Challenge
				</NavbarBrand>
				<Nav pills >
					<NavItem>
						<Link to='/'>Home</Link>
					</NavItem>
					<NavItem>
						<Link to='/admin'>Admin</Link>
					</NavItem>
					<NavItem>
						<Link to='/signup'>Signup</Link>
					</NavItem>
				</Nav>
			</Navbar>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
