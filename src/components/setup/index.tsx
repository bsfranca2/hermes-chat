import { FunctionalComponent, h } from 'preact';
import { memo, useEffect } from 'preact/compat';
import { getChat } from '../../api/app';
import { useApp } from '../../contexts/app';
import { useChat } from '../../contexts/chat';
import { useLocale } from '../../contexts/locale';

const locales = {
	'pt-BR': {
		inputPlaceholder: 'Digite sua mensagem',
	},
	'en-US': {
		inputPlaceholder: 'Type a message',
	},
};

const Setup: FunctionalComponent = () => {
	console.log('Setup renderizado...');

	const { setLocales } = useLocale();
	const { setTalkingWith } = useChat();

	setLocales(locales);

	useEffect(() => {
		getChat()
			.then((response) => response.json())
			.then((json) => {
				setTalkingWith({ name: json.title, avatar: json.avatarUrl });
			});
	}, []);

	// Finished
	const { setIsLoading } = useApp();
	setIsLoading(false);

	return <div id="setup" style="display: none;" />;
};

export default memo(Setup);
