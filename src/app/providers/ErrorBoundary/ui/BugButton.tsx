import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

export const BugButton = () => {
	const [error, setError] = useState(false);

	const onThrowError = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<Button onClick={onThrowError} theme={ThemeButton.CLEAR}>
			{t('Пробросить ошибку')}
		</Button>
	);
};
