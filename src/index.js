import { Provider } from 'redux-zero/preact';
import ChatLayout from './components/chat-layout.component';
import ChatHeader from './components/header/chat-header.component';
import ChatContent from './components/content/chat-content.component';
import ChatBottomBar from './components/bottom-bar/chat-bottom-bar.component';

import store from './state/store';
import 'style';

export default function App() {
	return (
		<div>
			<Provider store={store}>
				<ChatLayout>
					<ChatHeader />
					<ChatContent />
					<ChatBottomBar />
				</ChatLayout>
			</Provider>
		</div>
	);
}
