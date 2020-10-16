class Client {
	constructor(messages, addMessage, updateMessage) {
		this.messages = messages;
		this.addMessage = addMessage;
		this.updateMessage = updateMessage;
	}

	onNewMessage(message) {
		console.log('Nova mensagem', message);
		this.addMessage(message);
	}
}

export default Client;
