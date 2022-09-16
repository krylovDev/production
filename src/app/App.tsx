import {AboutPage} from 'pages/About'
import {MainPage} from 'pages/Main'
import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from 'shared/ib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import './styles/index.scss'

const App = () => {

	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutPage/>}/>
					<Route path='/' element={<MainPage/>}/>
				</Routes>
			</Suspense>

		</div>
	)
}

export default App
