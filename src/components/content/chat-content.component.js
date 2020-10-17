import { connect } from 'redux-zero/preact';
import style from './chat-content.style';
import ChatMessageList from './chat-message-list.component';

function ChatContent({ username, messages }) {
	return (
		<main class={style.content}>
			<ChatMessageList username={username} messages={messages} />
		</main>
	);
}

function mapToProps(state) {
	return { username: state.user.name, messages: state.messages };
}

export default connect(mapToProps)(ChatContent);
