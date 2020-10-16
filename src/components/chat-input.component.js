import ChatEmoji from './chat-emoji.component';
import ChatAttachFile from './chat-attach-file.component';
import ChatCamera from './chat-camera.component';
import style from './chat-input.style';

export default function ChatInput() {
	return (
		<div class={style.inputContainer}>
			<ChatEmoji />
			<input class={style.inputText} placeholder={'Digite sua mensagem'} />
			<ChatAttachFile />
			<ChatCamera />
		</div>
	);
}
