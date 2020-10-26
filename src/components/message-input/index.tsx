import { FunctionalComponent, Fragment, h } from 'preact';
import { useCallback, useImperativeHandle, useState } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import IconContainer from '../shared/icon-container';
import AttachFileIcon from '../shared/icons/attach-file';
import CameraIcon from '../shared/icons/camera';
import EmojiIcon from '../shared/icons/emoji';
import style from './style.css';
import Camera from '../shared/camera';

interface Props {
	onCameraSend: (image: Blob) => void;
}

export interface MessageInputRef {
	value: string;
	clear: () => void;
}

const MessageInput: FunctionalComponent<Props> = (props, ref) => {
	const [value, setValue] = useState('');
	const [showCamera, setShowCamera] = useState(false);

	useImperativeHandle(ref, () => ({
		value,
		clear: (): void => {
			setValue('');
		},
	}));

	const onInput = useCallback((e: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
		setValue(e.currentTarget?.value || '');
	}, []);

	const onCamera = (): void => setShowCamera(true);
	const onCameraBack = (): void => setShowCamera(false);
	const onCameraSend = (image: Blob): void => {
		props.onCameraSend(image);
		setShowCamera(false);
	};

	function onClickHandler(): void {
		console.log('Clicou em um icon container');
	}

	return (
		<Fragment>
			<div class={style.container}>
				<IconContainer size={21} onClick={onClickHandler}>
					<EmojiIcon />
				</IconContainer>
				<input
					name="message"
					type="text"
					value={value}
					placeholder={'Digite sua mensagem'}
					autoComplete="off"
					onInput={onInput}
				/>
				<IconContainer size={21} onClick={onClickHandler}>
					<AttachFileIcon />
				</IconContainer>
				<IconContainer size={21} onClick={onCamera}>
					<CameraIcon />
				</IconContainer>
			</div>
			{showCamera && <Camera onBack={onCameraBack} onSend={onCameraSend} />}
		</Fragment>
	);
};

export default forwardRef<MessageInputRef, Props>(MessageInput);
