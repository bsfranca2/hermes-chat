import { Provider } from 'redux-zero/preact';
import ChatLayout from './components/chat-layout.component';
import ChatHeader from './components/chat-header.component';
import ChatContent from './components/chat-content.component';
import ChatBottomBar from './components/chat-bottom-bar.component';

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
