import ChatInput from './chat-input.component';
import ChatSendButton from './chat-send-button.component';
import style from './chat-bottom-bar.style';

export default function ChatContent() {
	return (
		<div class={style.bottomBarContainer}>
			<div class={style.bottomBarInput}>
				<ChatInput />
			</div>
			<div class={style.bottomSendButton}>
				<ChatSendButton />
			</div>
		</div>
	);
}
