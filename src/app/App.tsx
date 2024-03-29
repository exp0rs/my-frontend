import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', [theme], {})}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<div className='page-wrapper'>
					<AppRouter />
				</div>
			</div>
		</div>
	);
};
