import { FunctionalComponent, h } from 'preact';
import { useChat } from '../../contexts/chat';
import Avatar from '../shared/avatar';
import style from './style.css';

const Header: FunctionalComponent = () => {
	const { talkingWith } = useChat();

	return (
		<header class={style.header}>
			<div class="d-flex flex-inline align-center">
				<Avatar size={34} url={talkingWith.avatar} />
				<h1>{talkingWith.name}</h1>
			</div>
		</header>
	);
};

export default Header;
