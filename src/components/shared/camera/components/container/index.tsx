import { FunctionalComponent, h } from 'preact';
import IconContainer from '../../../icon-container';
import ArrowBackIcon from '../../../icons/arrow-back';
import style from './style.css';

interface Props {
	customClass?: string;
	onBack?: () => void;
}

const CameraContainer: FunctionalComponent<Props> = (props) => {
	const { customClass, children, onBack } = props;
	let containerClassNames = style.cameraContainer;

	if (customClass) {
		containerClassNames = `${containerClassNames} ${customClass}`;
	}

	return (
		<div class={containerClassNames}>
			<div class={style.backButton} onClick={onBack}>
				<IconContainer size={24} onClick={() => ({})}>
					<ArrowBackIcon color={'white'} />
				</IconContainer>
			</div>
			{children}
		</div>
	);
};

export default CameraContainer;
