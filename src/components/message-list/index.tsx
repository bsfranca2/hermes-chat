import { Fragment, FunctionalComponent, h } from 'preact';
import { useMemo } from 'preact/hooks';
import { Message } from '../../models/message';
import groupMessages from '../../helpers/groupMessages';
import Avatar from '../shared/avatar';
import MessageComponent from '../message';
import MessageAuthor from './components/message-author';
import style from './style.css';

interface Props {
	username: string;
	messages: ReadonlyArray<Message>;
}

const MessageList: FunctionalComponent<Props> = ({ username, messages }) => {
	const groupedMessages = useMemo(() => {
		return groupMessages(messages);
	}, [messages]);

	const wasSentByUser = (group: Message[]): boolean => {
		return group[0].sendBy.name === username;
	};

	function showAuthor(group: Message[]) {
		const message = group[group.length - 1];
		if (message.sendBy.name !== username) {
			return <MessageAuthor sendBy={message.sendBy} sendAt={message.sendAt} />;
		}
	}

	return (
		<Fragment>
			{groupedMessages.map((item, index) => {
				if (typeof item === 'string') {
					return (
						<div key={index} class={style.date}>
							{item}
						</div>
					);
				}
				return (
					<div key={index} class={style.messagesGroup}>
						{!wasSentByUser(item) ? (
							<Avatar url={item[0].sendBy.avatar} size={24} />
						) : null}
						<div class={style.messages}>
							{item.map((message) => (
								<MessageComponent key={message.id} message={message} />
							))}
						</div>
						{showAuthor(item)}
					</div>
				);
			})}
		</Fragment>
	);
};

export default MessageList;
