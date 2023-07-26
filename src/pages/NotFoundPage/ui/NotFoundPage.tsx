import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
	className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.notfoundpage, [className])}>
			{t('Сраница не найдена')}
		</div>
	);
};
export default NotFoundPage;
