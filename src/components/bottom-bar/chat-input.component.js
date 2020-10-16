import { Component } from 'preact';
import ChatEmoji from './chat-emoji.component';
import ChatAttachFile from './chat-attach-file.component';
import ChatCamera from './chat-camera.component';
import style from './chat-input.style';

export default class ChatInput extends Component {
	state = { value: '' };

	onInput = e => {
		const { value } = e.target;
		this.setState({ value });
	}

	clear = () => {
		this.setState({ value: '' });
	}

	render(_, { value }) {
		return (
			<div class={style.inputContainer}>
				<ChatEmoji />
				<input
					value={value}
					class={style.inputText}
					placeholder={'Digite sua mensagem'}
					onInput={this.onInput}
				/>
				<ChatAttachFile />
				<ChatCamera />
			</div>
		);
	}
}
