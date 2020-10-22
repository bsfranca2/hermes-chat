import { FunctionalComponent, h } from 'preact';
import { AppProvider } from '../contexts/app';
import { ChatProvider } from '../contexts/chat';
import { MessagesProvider } from '../contexts/messages';

const AppContainer: FunctionalComponent = ({ children }) => {
	return (
		<AppProvider>
			<ChatProvider>
				<MessagesProvider>{children}</MessagesProvider>
			</ChatProvider>
		</AppProvider>
	);
}

export default AppContainer;
