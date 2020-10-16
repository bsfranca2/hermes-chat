import style from './chat-icon-button.style';

export default function ChatIconButton({ children, onClick }) {
	return <div class={style.iconButton} onClick={onClick}>{children}</div>;
}
