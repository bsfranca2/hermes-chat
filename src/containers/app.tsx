import { FunctionalComponent, h } from 'preact';
import { AppProvider } from '../contexts/app';
import { ChatProvider } from '../contexts/chat';
import { LocaleProvider } from '../contexts/locale';

const AppContainer: FunctionalComponent = ({ children }) => {
	return (
		<LocaleProvider>
			<AppProvider>
				<ChatProvider>{children}</ChatProvider>
			</AppProvider>
		</LocaleProvider>
	);
};

export default AppContainer;
