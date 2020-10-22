import { h, createContext, FunctionalComponent } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { Message } from '../models/message';

export interface MessagesContext {
	messages: ReadonlyArray<Message>;
	setMessages: (messages: Message[]) => void;
}

export const MessagesContext = createContext<MessagesContext>({
	messages: [],
	setMessages: () => undefined,
});

export const MessagesProvider: FunctionalComponent = ({ children }) => {
	const [messages, setMessages] = useState<Message[]>([]);

	return (
		<MessagesContext.Provider value={{ messages, setMessages }}>
			{children}
		</MessagesContext.Provider>
	);
};

export function useMessages(): MessagesContext {
	const context = useContext(MessagesContext);
	if (!context)
		throw new Error('useMessages must be used within a MessagesProvider');
	return context;
}
