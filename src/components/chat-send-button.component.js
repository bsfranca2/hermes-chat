import ChatIcon from './chat-icon.component';
import style from './chat-send-button.style';

export default function ChatSenderButton() {
	return (
		<button class={style.sendButton}>
			<div class={style.iconContainer}>
				<ChatIcon name={'Send'} />
			</div>
		</button>
	);
}
