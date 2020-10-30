import { FunctionalComponent, h } from 'preact';
import { Message } from '../../models/message';
import TextMessage from './components/text-message';
// import HtmlMessage from './components/html-message';
import ImageMessage from './components/image-message';
import VideoMessage from './components/video-message';
// import AudioMessage from './components/audio-message';
// import ChoiceMessage from './components/choice-message';
import style from './style.css';

interface Props {
	message: Message;
}

const MessageComponent: FunctionalComponent<Props> = ({ message }) => {
	let componentRender = null;
	let classNames = style.message;

	if (message.sendBy.name === 'User') {
		classNames = `${classNames} ${style.sendByUser}`;
	}

	if (message.type === 'TEXT')
		componentRender = <TextMessage message={message.content.text!} sendBy={message.sendBy} />;
	// else if (message.type === 'HTML')
	// 	componentRender = <HtmlMessage html={message.content.text!} />;
	else if (message.type === 'IMAGE')
		componentRender = <ImageMessage sources={message.content.sources!} />;
	else if (message.type === 'VIDEO')
		componentRender = <VideoMessage sources={message.content.sources!} />;
	// else if (message.type === 'Audio')
	// 	componentRender = <AudioMessage url={message.content.filename!} />;
	// else if (message.type === 'Choices')
	// 	componentRender = <ChoiceMessage choices={['Opção 1', 'Opção 2']} />;
	// else if (message.type === 'Carousel') componentRender = null;
	else throw new Error('Message type unrecognized');

	return (
		<div class={classNames} data-type={message.type} data-user={message.sendBy.name}>
			{componentRender}
		</div>
	);
};

export default MessageComponent;
