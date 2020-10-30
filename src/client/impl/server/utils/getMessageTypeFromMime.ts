import { MessageTypes } from '../../../../models/message';

export function getMessageTypeFromMimeType(mimeType: string): MessageTypes {
	if (mimeType.startsWith('image/')) {
		return MessageTypes.IMAGE;
	} else if (mimeType.startsWith('audio/')) {
		return MessageTypes.AUDIO;
	} else if (mimeType.startsWith('video/')) {
		return MessageTypes.VIDEO;
	}
	throw new Error('Mime type unrecognized');
}
