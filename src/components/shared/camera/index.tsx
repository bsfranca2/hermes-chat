import { Fragment, FunctionalComponent, h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import Webcam from 'react-webcam';
import IconContainer from '../icon-container';
import CameraOutlineIcon from '../icons/camere-outline';
import CheckIcon from '../icons/check';
import SwitchCameraIcon from '../icons/switch-camera';
import TrashIcon from '../icons/trash';
import CameraButton from './components/camera-button';
import CameraContainer from './components/container';
import style from './style.css';

interface Props {
	onBack?: () => void;
	onSend?: (image: Blob) => void;
}

const Camera: FunctionalComponent<Props> = ({ onBack, onSend }) => {
	const [hasError, setHasError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [inCapture, setInCapture] = useState(false);

	const webcamRef = useRef<any>();
	const imgRef = useRef<HTMLImageElement>();
	const [lastBlob, setLastBlob] = useState<Blob | null>(null);

	const capture = useCallback(() => {
		setInCapture(true);
		const imageSrc = webcamRef.current.getScreenshot();
		fetch(imageSrc)
			.then((res) => res.blob())
			.then((blob) => {
				setLastBlob(blob);
				imgRef.current.src = URL.createObjectURL(blob);
			});
	}, [webcamRef]);

	const discard = useCallback(() => {
		setInCapture(false);
		imgRef.current.src = '';
	}, [imgRef]);

	const send = (): null | void => lastBlob && onSend && onSend(lastBlob);

	if (hasError) {
		return (
			<CameraContainer onBack={onBack}>
				<div class={style.error}>
					<p>Erro ao tentar abrir a câmera.</p>
				</div>
			</CameraContainer>
		);
	}

	return (
		<CameraContainer customClass={style.camera} onBack={onBack}>
			{isLoading && (
				<IconContainer size={96} customIconClass={style.loadingCenter}>
					<CameraOutlineIcon color={'rgba(255, 255, 255, 0.25)'} />
				</IconContainer>
			)}
			{!inCapture && (
				<div class={style.actions}>
					<CameraButton isCaptureButton={true} onClick={capture} />
					<IconContainer size={32}>
						<SwitchCameraIcon color={'white'} />
					</IconContainer>
				</div>
			)}
			{inCapture && (
				<Fragment>
					<div class={style.actions}>
						<CameraButton color={'#ED2E7E'} onClick={discard}>
							<IconContainer size={24}>
								<TrashIcon color={'white'} />
							</IconContainer>
						</CameraButton>
						<CameraButton color={'#00BA88'} onClick={send}>
							<IconContainer size={24}>
								<CheckIcon color={'white'} />
							</IconContainer>
						</CameraButton>
					</div>
					<img ref={imgRef} />
				</Fragment>
			)}
			<Webcam
				ref={webcamRef}
				audio={false}
				screenshotFormat={'image/png'}
				onUserMedia={(): void => setIsLoading(false)}
				onUserMediaError={(): void => setHasError(true)}
			/>
		</CameraContainer>
	);
};

export default Camera;
