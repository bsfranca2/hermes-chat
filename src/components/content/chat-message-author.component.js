import { formatDateForTime } from '../../helpers/formatDate';
import style from './chat-message-author.style';

export default function ChatMessageAuthor({ sendBy, sendAt }) {
	return (
		<div class={style.messagesGroupInfo}>
			<span>{sendBy ? sendBy.name : null}</span>
			<span>{sendAt ? formatDateForTime(sendAt) : null}</span>
		</div>
	);
}
