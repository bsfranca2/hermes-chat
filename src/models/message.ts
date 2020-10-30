import { IUser } from './user';

export class Message {
	constructor(
		public id: string,
		public type: MessageTypes,
		public sendAt: Date,
		public sendBy: IUser,
		public status: MessageStatus,
		public content: MessageContent
	) {}
}

export enum MessageTypes {
	TEXT = 'TEXT',
	HTML = 'HTML',
	IMAGE = 'IMAGE',
	VIDEO = 'VIDEO',
	AUDIO = 'AUDIO',
	OPTIONS = 'OPTIONS',
	CAROUSEL = 'CAROUSEL',
}

export enum MessageStatus {
	Pending = 'Pending',
	Sent = 'Sent',
	Error = 'Error',
}

export interface MessageContent {
	text?: string;
	filename?: string;
	sources?: Source[];
}

export interface Source {
	src: string;
	type: string;
}
