import {AppRouter} from 'app/providers/router'
import {Link} from 'react-router-dom'
import {classNames} from 'shared/ib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {Navbar} from 'widget/Navbar'
import './styles/index.scss'

const App = () => {

	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>

			<AppRouter/>
			<button onClick={toggleTheme}>TOGGLE</button>
		</div>
	)
}

export default App
