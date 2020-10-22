/* eslint-disable @typescript-eslint/no-empty-function */
import { h, createContext, FunctionalComponent } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { ThemeOptions, FontSize } from '../models/app';

export interface IAppContext {
	locale: Readonly<string>;
	setLocale: (locale: string) => void;
	theme: Readonly<string>;
	setTheme: (theme: ThemeOptions) => void;
	fontSize: Readonly<string>;
	setFontSize: (fontSize: FontSize) => void;
}

export const AppContext = createContext<IAppContext>({
	locale: 'pt-BR',
	theme: ThemeOptions.Auto,
	fontSize: FontSize.MD,
	setLocale: () => {},
	setTheme: () => {},
	setFontSize: () => {},
});

export const AppProvider: FunctionalComponent = ({ children }) => {
	const [locale, setLocale] = useState<string>('pt-BR');
	const [theme, setTheme] = useState<ThemeOptions>(ThemeOptions.Auto);
	const [fontSize, setFontSize] = useState<FontSize>(FontSize.MD);

	return (
		<AppContext.Provider
			value={{
				locale,
				setLocale,
				theme,
				setTheme,
				fontSize,
				setFontSize,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export function useApp(): IAppContext {
	const context = useContext(AppContext);
	if (!context) throw new Error('useApp must be used within an AppProvider');
	return context;
}
