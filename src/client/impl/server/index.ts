import { getMessages, createTextMessage, createImageMessage } from '../../../api/app';
import { Message, MessageStatus, MessageTypes, Source } from '../../../models/message';
import * as Cycle from '../../cycle';
import { getMessageTypeFromMimeType } from './utils/getMessageTypeFromMime';
interface DefaultNewMessage {
	id: string;
	sendAt: Date;
	status: MessageStatus;
}

interface ServerMessage {
	conversationId: number;
	sendAt: string;
	senderName: string;
	senderAvatarUrl: string;
	type: MessageTypes;
	content: ServerMessageContent;
}

interface ServerMessageContent {
	text?: string;
	sources?: ServerFileSource[];
	options?: Map<number, string>;
}

interface ServerFileSource {
	src: string;
	type: string;
}

class MessageService implements Cycle.Hooks {
	private firstTime = true;

	/**
	 * On Call is performed every time the wrapper is called
	 */
	public onCall(ctx: Cycle.Context): void {
		if (this.firstTime) {
			this.firstTime = false;
			getMessages()
				.then((response) => response.json())
				.then((messages) => {
					ctx.setMessages(
						messages.map((message: ServerMessage) => this.toMessage(message))
					);
				});
		}
	}

	private toMessage(message: ServerMessage): Message {
		const { type, senderName, senderAvatarUrl, content } = message;
		const sendAt = new Date(message.sendAt);
		return new Message(
			sendAt.getTime().toString(),
			type,
			sendAt,
			{ name: senderName, avatar: senderAvatarUrl },
			MessageStatus.Sent,
			content
		);
	}

	private getDefaultNewMessage(): DefaultNewMessage {
		return {
			id: new Date().getTime().toString(),
			sendAt: new Date(),
			status: MessageStatus.Pending,
		};
	}

	public onNewTextMessage(ctx: Cycle.Context, data: Cycle.TextMessage): void {
		const { messages, setMessages } = ctx;
		const { text, user } = data;
		const { id, sendAt, status } = this.getDefaultNewMessage();
		const type = MessageTypes.TEXT;
		const message = new Message(id, type, sendAt, user, status, { text });
		setMessages([...messages, message]);
		createTextMessage(data.text);
	}

	public onNewImageMessage(ctx: Cycle.Context, data: Cycle.ImageMessage): void {
		const { messages, setMessages } = ctx;
		const { image, user } = data;
		const { id, sendAt, status } = this.getDefaultNewMessage();
		const type = MessageTypes.IMAGE;
		const content = {
			sources: [{ src: URL.createObjectURL(image), type: image.type }],
		};
		const message = new Message(id, type, sendAt, user, status, content);
		const file = new File([image], 'picture', { type: image.type });
		console.log(file);
		setMessages([...messages, message]);
		createImageMessage(file);
	}

	public onNewFileMessage(ctx: Cycle.Context, data: Cycle.FileMessage): void {
		const { messages, setMessages } = ctx;
		const { file, user } = data;
		const { id, sendAt, status } = this.getDefaultNewMessage();
		const type = getMessageTypeFromMimeType(file.type);
		const sources: Source[] = [];
		if (
			type === MessageTypes.IMAGE ||
			type === MessageTypes.VIDEO ||
			type === MessageTypes.AUDIO
		) {
			sources.push({ src: URL.createObjectURL(file), type: file.type });
		}
		const message = new Message(id, type, sendAt, user, status, { sources });
		setMessages([...messages, message]);
		createImageMessage(file);
	}
}

export default MessageService;
