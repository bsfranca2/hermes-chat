const actions = store => ({
	addMessage: (state, message) => {
		return { ...state, messages: [...state.messages,  message] };
	}
});

export default actions;
