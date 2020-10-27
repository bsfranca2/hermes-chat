import { FunctionalComponent, h } from 'preact';
import { useEffect } from 'preact/hooks';
import style from './style.css';
import IconContainer from '../icon-container';
import ArrowBackIcon from '../icons/arrow-back';

interface Props {
	url?: string;
	onClose?: () => void;
}

const Lightbox: FunctionalComponent<Props> = ({ url, onClose }) => {
	useEffect(() => {
		document.body.classList.add('modal');

		return (): void => {
			document.body.classList.remove('modal');
		};
	}, []);

	if (!url) {
		return null;
	}

	return (
		<div class={style.lightboxContainer}>
			<IconContainer size={32} customContainerClass={style.lightboxClose} onClick={onClose}>
				<ArrowBackIcon color={'white'} />
			</IconContainer>
			<div class={style.lightbox}>
				<picture>
					<img src={url} alt="Lightbox image" />
				</picture>
			</div>
			<div class={style.overlay} />
		</div>
	);
};

export default Lightbox;
