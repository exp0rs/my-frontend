import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren<any>> = (props) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const memoProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return (
		<ThemeContext.Provider value={memoProps}>
			{props.children}
		</ThemeContext.Provider>
	);
};
export default ThemeProvider;
