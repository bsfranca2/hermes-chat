import { createRef } from 'preact';
import { connect } from 'redux-zero/preact';
import { Message } from '../../models/message';
import MessageService from '../../services/messages.service';
import actions from '../../state/actions';
import style from './chat-bottom-bar.style';
import ChatInput from './chat-input.component';
import ChatSendButton from './chat-send-button.component';

function ChatContent({ messages, addMessage }) {
	const ref = createRef(null);
	const updateMessage = () => ({});
	const messageService = new MessageService(messages, addMessage, updateMessage);

	function getValue() {
		return ref.current.state.value;
	}

	function onSubmit(e) {
		e.preventDefault();

		if (getValue() === '') return;

		const message = new Message({ type: 'Text', content: getValue() });
		messageService.newMessage(message);
		ref.current.clear();
	}

	return (
		<form class={style.bottomBarContainer} onSubmit={onSubmit}>
			<div class={style.bottomBarInput}>
				<ChatInput ref={ref} />
			</div>
			<div class={style.bottomSendButton}>
				<ChatSendButton />
			</div>
		</form>
	);
}

function mapToProps(state) {
	return { messages: state.messages };
}

export default connect(mapToProps, actions)(ChatContent);
