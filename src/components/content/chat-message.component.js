import style from './chat-message.style';
import ChatTextMessage from './chat-text-message.component';
import ChatHtmlMessage from './chat-html-message.component';
import ChatImageMessage from './chat-image-message.component';
import ChatVideoMessage from './chat-video-message.component';
import ChatAudioMessage from './chat-audio-message.component';
import ChatChoiceMessage from './chat-choice-message.component';

export default function ChatMessage({ message }) {
	let componentRender = null;

	if (message.type === 'Text')
		componentRender = <ChatTextMessage message={message.content} sendBy={message.sendBy} />;
	else if (message.type === 'HTML')
		componentRender = <ChatHtmlMessage html={message.content} />;
	else if (message.type === 'Image')
		componentRender = <ChatImageMessage url={message.content} />;
	else if (message.type === 'Video')
		componentRender = <ChatVideoMessage url={message.content} />;
	else if (message.type === 'Audio')
		componentRender = <ChatAudioMessage url={message.content} />;
	else if (message.type === 'Choice')
		componentRender = <ChatChoiceMessage choices={['Opção 1', 'Opção 2']} />;
	else if (message.type === 'Carousel')
		componentRender = null;
	else
		throw new Error('Message type unrecognized');

	return (
		<div
			class={`${style.message} ${message.sendBy.name === 'USER' ? style.sendByUser : style.sendByBot}`}
			data-message-type={message.type}
		>{componentRender}</div>
	);
}
