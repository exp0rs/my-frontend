import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoaderPage.module.scss';
import { Spinner } from 'shared/ui/Spinner';

interface LoaderPageProps {
	className?: string;
}

export const LoaderPage = ({ className }: LoaderPageProps) => {
	return (
		<div className={classNames(cls.loaderpage, [className])}>
			<Spinner />
		</div>
	);
};
