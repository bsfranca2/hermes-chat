import groupMessages from '../../helpers/groupMessages';
import ChatAvatar from '../chat-avatar.component';
import ChatMessageAuthor from './chat-message-author.component';
import ChatMessage from './chat-message.component';
import style from './chat-message-list.style';

export default function ChatMessageList({ username, messages }) {
	const groupedMessages = groupMessages(messages);
	const isFirstDate = (group) => group[0].date !== undefined;
	const wasSentByUser = (group) => group[0].sendBy.name === username;

	function showAuthor(group) {
		const message = group[group.length - 1];
		if (message.sendBy.name !== username) {
			return <ChatMessageAuthor sendBy={message.sendBy} sendAt={message.sendAt} />;
		}
	}

	return (<>
		{groupedMessages.map(group => {
			if (isFirstDate(group)) {
				return <div class={style.date}>{group[0].date}</div>;
			}
			return (
				<div class={style.messagesGroup}>
					{!wasSentByUser(group) ? <ChatAvatar url={group[0].sendBy.avatar} size={24} /> : null}
					<div class={style.messages}>
						{group.map(message => <ChatMessage key={message.id} message={message} />)}
					</div>
					{showAuthor(group)}
				</div>
			);
		})}
	</>);
}
