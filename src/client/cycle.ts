import { Message } from '../models/message';
import { IUser } from '../models/user';

export interface Hooks {
	onCall: (ctx: Context) => void;
	onNewTextMessage: (ctx: Context, data: TextMessage) => void;
	onNewImageMessage: (ctx: Context, data: ImageMessage) => void;
}

export interface Context {
	messages: ReadonlyArray<Message>;
	setMessages: (messages: Message[]) => void;
}

export interface TextMessage {
	text: string;
	user: IUser;
}

export interface ImageMessage {
	image: Blob;
	user: IUser;
}
