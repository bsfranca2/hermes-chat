import { FunctionalComponent, Fragment, h } from 'preact';
import { useCallback, useEffect, useImperativeHandle, useState } from 'preact/hooks';
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

	let fileInputClassNames = style.fileIcon;

	if (value !== '') {
		fileInputClassNames = `${fileInputClassNames} ${style.fileIconHidden}`;
	} else {
		fileInputClassNames = `${fileInputClassNames} ${style.fileIconShow}`;
	}

	useEffect(() => {
		function startAnimation(e: AnimationEvent): void {
			if (e.animationName.startsWith('fileIconShow')) {
				(e.target as any).classList.remove('hidden');
			}
		}
		function endAnimation(e: AnimationEvent): void {
			if (e.animationName.startsWith('fileIconHidden')) {
				(e.target as any).classList.add('hidden');
			}
		}
		document.addEventListener('animationstart', startAnimation);
		document.addEventListener('animationend', endAnimation);
		return (): void => {
			document.removeEventListener('animationstart', startAnimation);
			document.removeEventListener('animationend', endAnimation);
		};
	}, []);

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
					class={style.input}
					value={value}
					placeholder={'Digite sua mensagem'}
					autoComplete="off"
					onInput={onInput}
				/>
				<span class={fileInputClassNames}>
					<IconContainer size={21} onClick={onClickHandler}>
						<AttachFileIcon />
					</IconContainer>
					<IconContainer size={21} onClick={onCamera}>
						<CameraIcon />
					</IconContainer>
				</span>
			</div>
			{showCamera && <Camera onBack={onCameraBack} onSend={onCameraSend} />}
		</Fragment>
	);
};

export default forwardRef<MessageInputRef, Props>(MessageInput);
