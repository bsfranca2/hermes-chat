import { h, createContext, FunctionalComponent } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { ThemeOptions, FontSize } from '../models/app';

export interface AppContextInterface {
	theme: Readonly<string>;
	fontSize: Readonly<string>;
	isLoading: boolean;
	setTheme: (theme: ThemeOptions) => void;
	setFontSize: (fontSize: FontSize) => void;
	setIsLoading: (isLoading: boolean) => void;
}

export const AppContext = createContext<AppContextInterface>({
	theme: ThemeOptions.Auto,
	fontSize: FontSize.MD,
	isLoading: true,
	setTheme: () => null,
	setFontSize: () => null,
	setIsLoading: () => null,
});

export const AppProvider: FunctionalComponent = ({ children }) => {
	const [theme, setTheme] = useState<ThemeOptions>(ThemeOptions.Auto);
	const [fontSize, setFontSize] = useState<FontSize>(FontSize.MD);
	const [isLoading, setIsLoading] = useState(true);

	return (
		<AppContext.Provider
			value={{
				theme,
				setTheme,
				fontSize,
				setFontSize,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export function useApp(): AppContextInterface {
	const context = useContext(AppContext);
	if (!context) throw new Error('useApp must be used within an AppProvider');
	return context;
}
