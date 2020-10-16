import createStore from 'redux-zero';
import { Message } from '../models/message';

// const yesterday = new Date();
// yesterday.setDate(12);

// const messages = [
// 	new Message({ type: 'Text', content: 'Ei!', sendAt: yesterday }),
// 	new Message({ type: 'Text', content: 'Como está?' }),
// 	new Message({ type: 'Text', content: 'Olá Bruno' }),
// 	new Message({ type: 'Image', content: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' }),
// 	new Message({ type: 'Video', content: 'http://techslides.com/demos/sample-videos/small.mp4' }),
// 	new Message({ type: 'Audio', content: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3' }),
// 	new Message({ type: 'Choice' })
// ];

const messages = [
	new Message({ type: 'Text', content: 'Olá, tudo bem? É a sua primeira vez por aqui, certo? 😊' }),
	new Message({ type: 'Text', content: 'Me chamo Sol e serei a sua assistente virtual no processo de abertura da sua Conta.' }),
	new Message({ type: 'Text', content: 'Para começar precisamos de algumas informações sobre você.' }),
	new Message({ type: 'Text', content: 'Qual o seu CPF?' })
];

const initialState = {
	header: {
		avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
		title: 'Senff'
	},
	messages: [...messages],
	footer: {
		label: 'Powered by ConnectCom',
		url: 'https://klink.ai'
	}
};
const store = createStore(initialState);

export default store;
