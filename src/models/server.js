import { nanoid } from 'nanoid';

export default class Server {
	constructor(messages, addMessage, updateMessage) {
		this.messages = messages;
		this.addMessage = addMessage;
		this.updateMessage = updateMessage;
	}

	onNewMessage(message) {
		message.id = nanoid();
		this.addMessage(message);
	}
}
