import MessageService from './service';

let instance: MessageService | null = null;

export function getMessageService(): MessageService {
	if (instance) {
		return instance;
	}

	instance = new MessageService();
	return instance;
}
