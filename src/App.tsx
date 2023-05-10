import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useThene';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={classNames('app', [theme], { active: true, hovered: false })}
		>
			<nav className='app__header'>
				<Link className='app__header' to={'/'}>
					Main
				</Link>
				<Link className='app__header' to={'/about'}>
					About
				</Link>
				<button onClick={toggleTheme}>toggle</button>
			</nav>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPageAsync />} />
					<Route path={'/about'} element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
			<Counter />
		</div>
	);
};
