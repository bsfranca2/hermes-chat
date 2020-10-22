import { FunctionalComponent, h } from 'preact';
import { memo } from 'preact/compat';
import IconContainer from '../shared/icon-container';
import SendIcon from '../shared/icons/send';
import style from './style.css';

const SendMessageButton: FunctionalComponent = () => {
	return (
		<button type="submit" class={style.sendButton}>
			<IconContainer size={18}>
				<SendIcon />
			</IconContainer>
		</button>
	);
};

export default memo(SendMessageButton);
