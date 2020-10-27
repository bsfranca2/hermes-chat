import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { useChat } from '../../contexts/chat';
import { Message } from '../../models/message';
import MessageList from '../message-list';
import style from './style.css';

const Content: FunctionalComponent = () => {
	const [lastMessages, setLastMessages] = useState<ReadonlyArray<Message>>([]);

	const { me, messages } = useChat();

	if (lastMessages.length === 0) {
		setLastMessages(messages);
	} else if (lastMessages.length !== messages.length) {
		const main = document.querySelector('main');
		if (main) {
			setTimeout(() => {
				const tolerance = 150;
				const contentInView = main.scrollHeight - main.clientHeight;
				const scrollWithTolerance = main.scrollTop + tolerance;
				if (scrollWithTolerance >= contentInView) {
					main.scrollTop = main.scrollHeight - main.clientHeight;
				}
			}, 0);
		}
		setLastMessages(messages);
	}

	return (
		<main class={style.content}>
			<div style={'margin: 4rem 1rem;'}>
				<MessageList username={me.name} messages={messages} />
			</div>
		</main>
	);
};

export default Content;
