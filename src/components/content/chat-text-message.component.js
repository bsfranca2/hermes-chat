import style from './chat-text-message.style';

export default function ChatTextMessage({ message, sendBy }) {
	return (
		<div class={`${style.textMessage} ${sendBy.name === 'USER' ? style.sendMessage : null}`}>
			<p>{message}</p>
		</div>
	);
}
