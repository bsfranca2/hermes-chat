import createStore from 'redux-zero';

const initialState = {
	header: {
		avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
		title: 'Senff'
	},
	messages: []
};
const store = createStore(initialState);

export default store;
