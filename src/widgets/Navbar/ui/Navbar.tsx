import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<header className={classNames(cls.header, [className])}>
			<div className='logo'>logo</div>
			<nav className='nav'>
				<AppLink className={cls.nav__link} to={'/'}>
					Main
				</AppLink>
				<AppLink className={cls.nav__link} to={'/about'}>
					About
				</AppLink>
			</nav>
		</header>
	);
};
