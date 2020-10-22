/* eslint-disable @typescript-eslint/no-empty-function */
import { h, createContext, FunctionalComponent } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { IUser } from '../models/user';

export interface IChatContext {
	me: IUser;
	talkingWith: IUser;
	setMe: (user: IUser) => void;
	setTalkingWith: (user: IUser) => void;
}

export const ChatContext = createContext<IChatContext>({
	me: { name: '', avatar: '' },
	talkingWith: { name: '', avatar: '' },
	setMe: () => {},
	setTalkingWith: () => {},
});

export const ChatProvider: FunctionalComponent = ({ children }) => {
	const [me, setMe] = useState<IUser>({
		name: 'User',
		avatar: '',
	});
	const [talkingWith, setTalkingWith] = useState<IUser>({
		name: 'Senff',
		avatar: 'https://cdn.klink.ai/avatar_sol.svg',
	});

	return (
		<ChatContext.Provider
			value={{
				me,
				setMe,
				talkingWith,
				setTalkingWith,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export function useChat(): IChatContext {
	const context = useContext(ChatContext);
	if (!context) throw new Error('useChat must be used within a ChatProvider');
	return context;
}
