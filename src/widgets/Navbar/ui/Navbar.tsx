import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { t } from 'i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<header className={classNames(cls.header, [className])}>
			<div className={cls.logo}>LOGO</div>
			<nav className={cls.nav}>
				<AppLink className={cls.nav__link} to={'/'}>
					{t('Главная')}
				</AppLink>
				<AppLink className={cls.nav__link} to={'/about'}>
					{t('О нас')}
				</AppLink>
			</nav>
		</header>
	);
};
