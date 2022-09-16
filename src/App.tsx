import {Suspense, useContext, useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageAsync} from './pages/About/AboutPage.async'
import {MainPageAsync} from './pages/Main/MainPage.async'
import './styles/index.scss'
import {Theme, ThemeContext} from './theme/ThemeContext'
import {useTheme} from './theme/useTheme'

const App = () => {

	const {theme,toggleTheme} = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme} >TOGGLE</button>
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
