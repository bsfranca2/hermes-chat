import { nanoid } from 'nanoid';
import {
	Message,
	MessageTypes,
	MessageStatus,
	MessageContent,
} from '../models/message';

const yesterday = new Date();
yesterday.setDate(12);

// const messages = [
// 	new Message({ type: 'Text', content: 'Ei!', sendAt: yesterday }),
// 	new Message({ type: 'Text', content: 'Como está?' }),
// 	new Message({ type: 'Text', content: 'Olá Bruno' }),
// 	new Message({ type: 'Image', content: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' }),
// 	new Message({ type: 'Video', content: 'http://techslides.com/demos/sample-videos/small.mp4' }),
// 	new Message({ type: 'Audio', content: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3' }),
// 	new Message({ type: 'Choice' })
// ];
interface MessageOptions {
	type?: MessageTypes;
	sendAt?: Date;
	content?: MessageContent;
}

function getNewMessage({ type, sendAt, content }: MessageOptions): Message {
	const id = nanoid();
	type = type || MessageTypes.Text;
	sendAt = sendAt || new Date();
	const sendBy = { name: 'Sol', avatar: 'https://cdn.klink.ai/avatar_sol.svg' };
	const status = MessageStatus.Sent;
	return new Message(id, type, sendAt, sendBy, status, content || {});
}

const initialMessages = [
	getNewMessage({
		type: MessageTypes.Video,
		sendAt: yesterday,
		content: {
			sources: [
				{
					// src: 'http://techslides.com/demos/sample-videos/small.mp4',
					src: 'https://storage.coverr.co/videos/Y5PUw00HpQbQ00eFf66OMoMSOM4nd1ehTW?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjAzMjk4MzQ0fQ._DbrDSGI85IObve2_v-qgQYZOc_pIhW-9HzKN7O-F1I',
					type: 'video/mp4',
				},
			],
		},
	}),
	getNewMessage({
		content: {
			text: 'Olá, tudo bem? 😊 É a sua primeira vez por aqui, certo? 😊',
		},
	}),
	getNewMessage({
		content: {
			text:
				'Me chamo Sol e serei a sua assistente virtual no processo de abertura da sua Conta.',
		},
	}),
	getNewMessage({
		content: {
			text: 'Para começar precisamos de algumas informações sobre você.',
		},
	}),
	getNewMessage({ content: { text: 'Qual o seu CPF?' } }),
];

export default initialMessages;
