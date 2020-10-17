import Server from '../server/index';

let instance = null;

export default function MessageService(messages, addMessage, updateMessage) {
	if (instance) {
		return instance;
	}

	this.server = new Server(messages, addMessage, updateMessage);

	this.newMessage = (message) => {
		this.server.onNewMessage(message);
	};

	return instance = this;
}
