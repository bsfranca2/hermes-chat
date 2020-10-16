import ChatMessage from './chat-message.component';

export default function ChatMessageList({ messages }) {
	let lastDate = null;
	return (
		<>
			{messages.map(message => {
				if (lastDate && lastDate !== message.getDate()) {
					lastDate = message.getDate();
					return (
						<>
							<div>Dia {lastDate}</div>
							<ChatMessage message={message} />
						</>
					);
				}
				lastDate = message.getDate();
				return <ChatMessage message={message} />;
			})}
		</>
	);
}
