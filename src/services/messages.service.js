import Client from '../client/index';

let instance = null;

export default function MessageService(messages, addMessage, updateMessage) {
	if (instance) {
		return instance;
	}

	this.messages = messages;
	this.addMessage = addMessage;
	this.updateMessage = updateMessage;

	this.client = new Client(messages, addMessage, updateMessage);

	this.newMessage = (message) => {
		this.client.onNewMessage(message);
	};

	return instance = this;
}
