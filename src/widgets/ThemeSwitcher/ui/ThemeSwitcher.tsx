import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import LightIcon from '../../../shared/assets/icons/theme-dark.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';
interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className={classNames(cls.themeswitcher, [className])}
			onClick={toggleTheme}
		>
			<DarkIcon />
		</button>
	);
};
