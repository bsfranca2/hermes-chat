import { h, createContext, FunctionalComponent } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { Message } from '../models/message';
import { IUser } from '../models/user';

export interface ChatContextInterface {
	me: IUser;
	talkingWith: IUser;
	messages: ReadonlyArray<Message>;
	setMe: (user: IUser) => void;
	setTalkingWith: (user: IUser) => void;
	setMessages: (messages: Message[]) => void;
}

export const ChatContext = createContext<ChatContextInterface>({
	me: { name: '', avatar: '' },
	talkingWith: { name: '', avatar: '' },
	messages: [],
	setMe: () => null,
	setTalkingWith: () => null,
	setMessages: () => null,
});

export const ChatProvider: FunctionalComponent = ({ children }) => {
	const [me, setMe] = useState<IUser>({
		name: 'User',
		avatar: '',
	});
	const [talkingWith, setTalkingWith] = useState<IUser>({
		name: 'Person name',
		avatar: '',
	});
	const [messages, setMessages] = useState<Message[]>([]);

	return (
		<ChatContext.Provider
			value={{
				me,
				setMe,
				talkingWith,
				setTalkingWith,
				messages,
				setMessages,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export function useChat(): ChatContextInterface {
	const context = useContext(ChatContext);
	if (!context) throw new Error('useChat must be used within a ChatProvider');
	return context;
}
