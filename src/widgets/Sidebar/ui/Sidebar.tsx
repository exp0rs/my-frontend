import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Suspense, useState } from 'react';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			className={classNames(cls.sidebar, [className], {
				[cls.collapsed]: collapsed,
			})}
		>
			<Button
				className={classNames(cls.side, [], { [cls.hiden]: !collapsed })}
				theme={ThemeButton.CLEAR}
				onClick={onToggle}
			>
				{'>>'}
			</Button>
			<div
				className={classNames(cls.switchers, [], { [cls.hiden]: collapsed })}
			>
				<ThemeSwitcher />
				<Suspense>
					<LanguageSwitcher />
				</Suspense>
				<Button
					className={classNames(cls.bottom)}
					theme={ThemeButton.DEFAULT}
					onClick={onToggle}
				>
					{'<<'}
				</Button>
			</div>
		</div>
	);
};
