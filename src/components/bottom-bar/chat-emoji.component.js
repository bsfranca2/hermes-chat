import { Component } from 'preact';
import ChatIcon from '../chat-icon.component';
import ChatIconButton from '../chat-icon-button.component';

function ChatEmojiContainer({ show }) {
	if (!show) return null;
	return <></>;
}

export default class ChatEmoji extends Component {
	state = { showPicker: false }

	togglePicker = () => {
		let showPicker = !this.state.showPicker;
		this.setState({ showPicker });
	}

	render(_, { showPicker }) {
		return (
			<>
				<ChatIconButton onClick={this.togglePicker}>
					<ChatIcon name={'Emoji'} />
				</ChatIconButton>
				<ChatEmojiContainer show={showPicker} />
			</>
		);
	}
}
