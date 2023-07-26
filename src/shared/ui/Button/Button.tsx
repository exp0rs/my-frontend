import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
	FILL = 'fill',
	DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
	className?: string;
	theme: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props;
	return (
		<button
			type='button'
			className={classNames(cls.button, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
