import { FunctionalComponent, h } from 'preact';
import { useRef } from 'preact/hooks';
import MessagesServiceWrapper from '../../client/wrapper';
import { useChat } from '../../contexts/chat';
import { useMessages } from '../../contexts/messages';
import MessageInput, { MessageInputRef } from '../message-input';
import SendMessageButton from '../send-message-button';
import style from './style.css';

const BottomBar: FunctionalComponent = () => {
	const messageInputRef = useRef<MessageInputRef>();

	const { messages, setMessages } = useMessages();
	const { me } = useChat();

	console.log('messages', messages);

	const messageService = new MessagesServiceWrapper(messages, setMessages);

	const onSubmit = (e: Event): boolean | undefined => {
		e.preventDefault();

		if (messageInputRef.current.value === '') {
			return false;
		}

		const textMessage = { text: messageInputRef.current.value, user: me };
		messageService.onNewTextMessage(textMessage);
		messageInputRef.current.clear();
	};

	const onCameraSend = (image: Blob): void => {
		const imageMessage = { image, user: me };
		messageService.onNewImageMessage(imageMessage);
	};

	return (
		<form class={style.container} onSubmit={onSubmit}>
			<div class={style.input}>
				<MessageInput ref={messageInputRef} onCameraSend={onCameraSend} />
			</div>
			<div class={style.send}>
				<SendMessageButton />
			</div>
		</form>
	);
};

export default BottomBar;
