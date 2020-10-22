import { FunctionalComponent, h } from 'preact';
import { formatDateForTime } from '../../../../helpers/formatDate';
import { IUser } from '../../../../models/user';
import style from './style.css';

interface Props {
	sendBy: IUser;
	sendAt: Date;
}

const MessageAuthor: FunctionalComponent<Props> = ({ sendBy, sendAt }) => {
	return (
		<div class={style.messagesGroupInfo}>
			<span>{sendBy ? sendBy.name : null}</span>
			<span>{sendAt ? formatDateForTime(sendAt) : null}</span>
		</div>
	);
}

export default MessageAuthor;
