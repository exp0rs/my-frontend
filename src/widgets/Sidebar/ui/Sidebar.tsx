import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useState } from 'react';

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
			<Button theme={ThemeButton.CLEAR} onClick={onToggle}>
				{collapsed ? '>>' : '<<'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};
