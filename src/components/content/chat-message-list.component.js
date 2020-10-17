import dayjs from 'dayjs';
import ChatMessage from './chat-message.component';
import ChatAvatar from '../chat-avatar.component';
import style from './chat-message-list.style';

export default function ChatMessageList({ messages }) {
	const groupedMessages = [];
	let lastDate = null;
	for (let i = 0; i < messages.length; i++) {
		const prevMessage = messages[i-1];
		const message = messages[i];
		const nextMessage = messages[i+1];
		if (lastDate === null && nextMessage) {
			if (message.getDate() !== nextMessage.getDate()) {
				groupedMessages.push([{ date: `${message.getDate()}/${message.getMonth()}` }]);
				groupedMessages.push([ message ]);
			}
		}
		else if (lastDate && lastDate !== message.getDate()) {
			groupedMessages.push([{ date: `${message.getDate()}/${message.getMonth()}` }]);
			groupedMessages.push([ message ]);
		}
		else if (prevMessage && prevMessage.sendBy.name === message.sendBy.name) {
			groupedMessages[groupedMessages.length - 1].push(message);
		}
		else {
			groupedMessages.push([message]);
		}
		lastDate = message.getDate();
	}

	function showAvatar(group) {
		const message = group[0];
		if (message.sendBy.name !== 'USER') {
			return (
				<ChatAvatar
					url={message.sendBy.avatar}
					size={24}
				/>
			);
		}
	}

	return (<>
		{groupedMessages.map(group => {
			if (group[0].date) {
				return <div class={style.date}>{group[0].date}</div>;
			}
			return (
				<div class={style.messagesGroup}>
					{showAvatar(group)}
					<div class={style.messages}>
						{group.map(message => <ChatMessage key={message.id} message={message} />)}
					</div>
					<div class={style.messagesGroupInfo}>
						<span>
							{group[group.length - 1].sendBy ? group[group.length - 1].sendBy.name : null}
						</span>
						<span>
							{group[group.length - 1].sendAt ? `${dayjs(group[group.length - 1].sendAt).format('HH:mm')}` : null}
						</span>
					</div>
				</div>
			);
		})}
	</>);
}
