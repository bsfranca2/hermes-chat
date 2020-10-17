import { nanoid } from 'nanoid';
import { Message } from '../models/message';
import Server from '../models/server';

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
const sendBy = { name: 'BOT', avatar: 'https://randomuser.me/api/portraits/men/97.jpg' };
const defaultMessage = { type: 'Text', sendBy, sendAt: new Date() };
const initialMessages = [
	new Message({ ...defaultMessage, content: 'Mensagem de ontem', sendAt: yesterday }),
	new Message({ ...defaultMessage, content: 'Olá, tudo bem? É a sua primeira vez por aqui, certo? 😊' }),
	new Message({ ...defaultMessage, content: 'Me chamo Sol e serei a sua assistente virtual no processo de abertura da sua Conta.' }),
	new Message({ ...defaultMessage, content: 'Para começar precisamos de algumas informações sobre você.' }),
	new Message({ ...defaultMessage, content: 'Qual o seu CPF?' })
];

export default class extends Server {
	constructor(messages, addMessage, updateMessage) {
		super(messages, addMessage, updateMessage);

		initialMessages.forEach((message) => {
			message.id = nanoid();
			this.addMessage(message);
		});
	}

	onNewMessage(message) {
		message.id = nanoid();
		this.addMessage(message);
		if (this.timer) {
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(() => {
			this.addMessage(new Message({ content: 'Resposta automatico', type: 'Text', sendBy }));
		}, 3000);
	}
}
