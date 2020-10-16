import style from './chat-text-message.style';

export default function ChatTextMessage({ message }) {
	return <div class={style.textMessage}><p>{message}</p></div>;
}
