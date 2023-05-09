import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import './index.scss';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
export const App = () => {
	return (
		<div className='app'>
			<Link to={'/'}>Главная страница</Link>
			<Link to={'/about'}>О нас</Link>
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
