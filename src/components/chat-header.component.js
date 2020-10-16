import { connect } from 'redux-zero/preact';
import ChatAvatar from './chat-avatar.component';
import style from './chat-header.style';

function ChatHeader({ header }) {
	return (
		<div class={style.header}>
			<div class={style.title}>
				<ChatAvatar url={header.avatar} size={34} />
				<h1 class={style.botName}>{header.title}</h1>
			</div>
		</div>
	);
}

function mapToProps({ header }) {
	return ({ header });
}

export default connect(mapToProps)(ChatHeader);
