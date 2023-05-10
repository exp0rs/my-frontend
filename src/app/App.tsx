import './styles/index.scss';
import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/about'} element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
