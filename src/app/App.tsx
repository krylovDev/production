import {AppRouter} from 'app/providers/router'
import {classNames} from 'shared/ib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {Navbar} from 'widget/Navbar'
import {Sidebar} from 'widget/Sidebar'
import './styles/index.scss'

const App = () => {

	const {theme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<div className='content-page'>
				<Sidebar/>
				<AppRouter/>
			</div>
		</div>
	)
}

export default App
