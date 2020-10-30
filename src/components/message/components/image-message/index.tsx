import { FunctionalComponent, h, Fragment } from 'preact';
import style from './style.css';
import { Source } from '../../../../models/message';
import Lightbox from '../../../shared/lightbox';
import { useState } from 'preact/hooks';

interface Props {
	sources: Source[];
}

const ImageMessage: FunctionalComponent<Props> = ({ sources }) => {
	const url = sources[0].src;
	const lightboxUrl = sources[1] ? sources[1].src : url;

	const [showLightbow, setShowLightbox] = useState(false);

	function onPictureClick(): void {
		setShowLightbox(true);
	}

	function onLightboxClose(): void {
		setShowLightbox(false);
	}

	return (
		<Fragment>
			<picture class={style.pictureContainer} onClick={onPictureClick}>
				<img src={url} alt="Picture message" />
			</picture>
			{showLightbow && (
				<div>
					<Lightbox url={lightboxUrl} onClose={onLightboxClose} />
				</div>
			)}
		</Fragment>
	);
};

export default ImageMessage;
