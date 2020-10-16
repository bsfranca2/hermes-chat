import style from './chat-layout.style';

export default function ChatLayout(props) {
	return <div class={style.layout}>{props.children}</div>;
}
