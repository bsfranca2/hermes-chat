import { formatDateForDays } from './formatDate';

const getMessageDate = (message) => message.sendAt.getDate();

export default function groupMessages(messages) {
	const groupedMessages = [];
	let lastDate = null;

	for (let i = 0; i < messages.length; i++) {
		const prevMessage = messages[i-1];
		const message = messages[i];
		const nextMessage = messages[i+1];

		if (lastDate === null && nextMessage && getMessageDate(message) !== getMessageDate(nextMessage)) {
			groupedMessages.push([{ date: formatDateForDays(message.sendAt) }]);
			groupedMessages.push([ message ]);
		}
		else if (lastDate && lastDate !== getMessageDate(message)) {
			groupedMessages.push([{ date: formatDateForDays(message.sendAt) }]);
			groupedMessages.push([ message ]);
		}
		else if (prevMessage && prevMessage.sendBy.name === message.sendBy.name) {
			groupedMessages[groupedMessages.length - 1].push(message);
		}
		else {
			groupedMessages.push([message]);
		}
		lastDate = getMessageDate(message);
	}

	return groupedMessages;
}
