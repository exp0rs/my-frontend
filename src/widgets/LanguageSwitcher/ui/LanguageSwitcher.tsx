import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation();
	const toggle = () => {
		i18n.changeLanguage(i18n.language == 'ru' ? 'en' : 'ru');
	};
	return (
		<>
			<Button
				className={cls.language}
				theme={ThemeButton.FILL}
				onClick={toggle}
			>
				{t('Перевод')}
			</Button>{' '}
		</>
	);
};
