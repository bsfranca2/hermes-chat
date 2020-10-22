import { FunctionalComponent, h } from 'preact';
import { IUser } from '../../../../models/user';
import style from './style.css';

interface Props {
	message: string;
	sendBy: IUser;
}

const TextMessage: FunctionalComponent<Props> = ({ message, sendBy }) => {
	let classNames = style.textMessage;

	if (sendBy.name === 'User') {
		classNames = `${classNames} ${style.sendMessage}`;
	}

	return (
		<div class={classNames}>
			<p>{message}</p>
		</div>
	);
};

export default TextMessage;
