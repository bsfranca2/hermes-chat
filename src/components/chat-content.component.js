import { connect } from 'redux-zero/preact';
import style from './chat-content.style';
import ChatMessageList from './chat-message-list.component';

function ChatContent({ messages }) {
	return (
		<main class={style.content}>
			<ChatMessageList messages={messages} />
		</main>
	);
}

function mapToProps(state) {
	return { messages: state.messages };
}

export default connect(mapToProps)(ChatContent);
