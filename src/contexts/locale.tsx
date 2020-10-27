import { createContext, FunctionalComponent, h } from 'preact';
import { useContext, useState } from 'preact/hooks';

type LocaleMap = {
	[key: string]: string;
};

type Locales = {
	[key: string]: LocaleMap;
};

export interface LocaleContextInterface {
	currentLocale: string;
	locales: Locales;
	setCurrentLocale: (locale: string) => void;
	setLocales: (locales: Locales) => void;
	t: (key: string) => string;
}

export const LocaleContext = createContext<LocaleContextInterface>({
	currentLocale: 'pt-BR',
	locales: {},
	setCurrentLocale: () => null,
	setLocales: () => null,
	t: (key: string) => key,
});

export const LocaleProvider: FunctionalComponent = ({ children }) => {
	const [currentLocale, setCurrentLocale] = useState('pt-BR');
	const [locales, setLocales] = useState<Locales>({});
	const t = (key: string): string => locales[currentLocale][key];

	return (
		<LocaleContext.Provider value={{ currentLocale, setCurrentLocale, locales, setLocales, t }}>
			{children}
		</LocaleContext.Provider>
	);
};

export function useLocale(): LocaleContextInterface {
	const context = useContext(LocaleContext);
	if (!context) throw new Error('useLocale must be used within a LocaleProvider');
	return context;
}
