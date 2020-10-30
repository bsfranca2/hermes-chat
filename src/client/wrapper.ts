import { Message } from '../models/message';
import * as Cycle from './cycle';
import { getMessageService } from './get-service';

class MessagesServiceWrapper {
	private instance: Cycle.Hooks;

	constructor(
		private messages: ReadonlyArray<Message>,
		private setMessages: (messages: Message[]) => void
	) {
		this.instance = getMessageService();
		this.instance.onCall(this.getContext());
	}

	private getContext(): Cycle.Context {
		return {
			messages: this.messages,
			setMessages: this.setMessages,
		};
	}

	public onNewTextMessage(textMessage: Cycle.TextMessage): void {
		const ctx = this.getContext();
		this.instance.onNewTextMessage(ctx, textMessage);
	}

	public onNewImageMessage(imageMessage: Cycle.ImageMessage): void {
		const ctx = this.getContext();
		this.instance.onNewImageMessage(ctx, imageMessage);
	}

	public onNewFileMessage(fileMessage: Cycle.FileMessage): void {
		const ctx = this.getContext();
		this.instance.onNewFileMessage(ctx, fileMessage);
	}
}

export default MessagesServiceWrapper;
