class Client {
	constructor(messages, addMessage, updateMessage) {
		this.messages = messages;
		this.addMessage = addMessage;
		this.updateMessage = updateMessage;
	}

	onNewMessage(message) {
		console.log('New message', message);
		this.addMessage(message);
	}
}

export default Client;
