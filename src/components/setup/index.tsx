import { FunctionalComponent, h } from 'preact';
import { memo, useEffect } from 'preact/compat';
import { getAppInfo } from '../../api/app';
import { useApp } from '../../contexts/app';
import { useChat } from '../../contexts/chat';
import { useLocale } from '../../contexts/locale';

const locales = {
	'pt-BR': {
		inputPlaceholder: 'Digite sua mensagem',
	},
};

const Setup: FunctionalComponent = () => {
	console.log('Setup renderizado...');

	const { setLocales } = useLocale();
	const { setTalkingWith } = useChat();

	setLocales(locales);

	useEffect(() => {
		getAppInfo()
			.then((response) => response.json())
			.then((json) => {
				setTalkingWith({ name: json.title, avatar: json.avatar });
			});
	}, []);

	// Finished
	const { setIsLoading } = useApp();
	setIsLoading(false);

	return <div id="setup" style="display: none;" />;
};

export default memo(Setup);
