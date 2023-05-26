import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme], {})}>
			<nav className='app__header'>
				<Link className='app__header' to={'/'}>
					Main
				</Link>
				<Link className='app__header' to={'/about'}>
					About
				</Link>
				<button onClick={toggleTheme}>toggle</button>
			</nav>
			<AppRouter />
		</div>
	);
};
