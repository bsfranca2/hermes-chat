import { FunctionalComponent, h } from 'preact';
import style from './style.css';

interface Props {
	isCaptureButton?: boolean;
	color?: string;
	onClick?: () => void;
}

const CameraButton: FunctionalComponent<Props> = (props) => {
	const { color, children, isCaptureButton, onClick } = props;
	let classNames = style.button;
	let inlineStyle = '';

	if (isCaptureButton) {
		classNames = `${classNames} ${style.capture}`;
	}

	if (color) {
		inlineStyle = `background-color: ${color}`;
	}

	return (
		<button
			class={classNames}
			type="button"
			style={inlineStyle}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default CameraButton;
