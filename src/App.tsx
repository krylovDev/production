import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Counter from './components/Counter'
import './index.scss'
import About from './pages/About/About'
import {AboutPageAsync} from './pages/About/AboutPage.async'
import Main from './pages/Main/Main'
import {MainPageAsync} from './pages/Main/MainPage.async'

const App = () => {
	return (
		<div className='app'>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutPageAsync/>}/>
					<Route path='/' element={<MainPageAsync/>}/>
				</Routes>
			</Suspense>

		</div>
	)
}

export default App
