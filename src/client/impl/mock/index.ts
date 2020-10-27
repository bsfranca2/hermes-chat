import { nanoid } from 'nanoid';
import { Message, MessageStatus, MessageTypes } from '../../../models/message';
import * as Cycle from '../../cycle';
import defaultMessages from './default-messages';

interface DefaultNewMessage {
	id: string;
	sendAt: Date;
	status: MessageStatus;
}

class MessageService implements Cycle.Hooks {
	private firstTime = true;

	/**
	 * On Call is performed every time the wrapper is called
	 */
	public onCall(ctx: Cycle.Context): void {
		if (this.firstTime) {
			ctx.setMessages(defaultMessages);
			this.firstTime = false;
		}
	}

	private getDefaultNewMessage(): DefaultNewMessage {
		return {
			id: nanoid(),
			sendAt: new Date(),
			status: MessageStatus.Pending,
		};
	}

	public onNewTextMessage(ctx: Cycle.Context, data: Cycle.TextMessage): void {
		const { messages, setMessages } = ctx;
		const { text, user } = data;
		const { id, sendAt, status } = this.getDefaultNewMessage();
		const type = MessageTypes.Text;
		const message = new Message(id, type, sendAt, user, status, { text });
		setMessages([...messages, message]);
	}

	public onNewImageMessage(ctx: Cycle.Context, data: Cycle.ImageMessage): void {
		const { messages, setMessages } = ctx;
		const { image, user } = data;
		const { id, sendAt, status } = this.getDefaultNewMessage();
		const type = MessageTypes.Image;
		const content = {
			sources: [
				{ src: URL.createObjectURL(image), type: 'image/small' },
				{ src: URL.createObjectURL(image), type: 'image/big' },
			],
		};
		const message = new Message(id, type, sendAt, user, status, content);
		setMessages([...messages, message]);
	}
}

export default MessageService;
