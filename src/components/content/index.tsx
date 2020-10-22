import { FunctionalComponent, h } from 'preact';
import { useChat } from '../../contexts/chat';
import { useMessages } from '../../contexts/messages';
import MessageList from '../message-list';
import style from './style.css';

const Content: FunctionalComponent = () => {
	const { me } = useChat();
	const { messages } = useMessages();
	return (
		<main class={style.content}>
			<MessageList username={me.name} messages={messages} />
		</main>
	);
};

export default Content;
