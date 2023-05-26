import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme], {})}>
			<Navbar />
			<button onClick={toggleTheme}>toggle</button>
			<AppRouter />
		</div>
	);
};
