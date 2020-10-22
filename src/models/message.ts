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
	Text = 'Text',
	HTML = 'HTML',
	Image = 'Image',
	Video = 'Video',
	Audio = 'Audio',
	Choices = 'Choices',
	Carousel = 'Carousel',
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
