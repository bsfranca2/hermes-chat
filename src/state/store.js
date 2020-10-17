import createStore from 'redux-zero';

const initialState = {
	header: {
		avatar: 'https://cdn.klink.ai/avatar_sol.svg',
		title: 'Senff'
	},
	messages: [],
	user: {
		name: 'USER'
	}
};
const store = createStore(initialState);

export default store;
