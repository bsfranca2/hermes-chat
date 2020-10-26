import { FunctionalComponent, h } from 'preact';
import { useRef, useState, useEffect } from 'preact/hooks';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { Source } from '../../../models/message';
import IconContainer from '../icon-container';
import PlayIcon from '../icons/play';
import PauseIcon from '../icons/pause';
import style from './style.css';
import FullscreenIcon from '../icons/fullscreen';

const FullScreenComponent = FullScreen as any;

interface Props {
	sources: Source[];
}

const VideoPlayer: FunctionalComponent<Props> = ({ sources }) => {
	const video = useRef<HTMLVideoElement>();

	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	const handle = useFullScreenHandle();

	function play(): void {
		video.current.play();
	}

	function pause(): void {
		video.current.pause();
	}

	useEffect(() => {
		video.current.addEventListener('play', () => {
			setIsPlaying(true);
		});
		video.current.addEventListener('pause', () => {
			setIsPlaying(false);
		});
		video.current.addEventListener('timeupdate', () => {
			const { currentTime, duration } = video.current;
			const videoProgress = (100 * currentTime) / duration;
			setProgress(videoProgress);
		});
	}, []);

	function onChangeProgress(e: h.JSX.TargetedEvent<HTMLDivElement, MouseEvent>): void {
		const progressPercentage = e.offsetX / e.currentTarget.clientWidth;
		const currentTime = (progressPercentage * 100) / video.current.duration;
		video.current.currentTime = currentTime;
	}

	return (
		<FullScreenComponent handle={handle}>
			<div class={style.playerContainer} data-media="Video">
				<div class={style.controls}>
					{isPlaying ? (
						<IconContainer size={32} onClick={pause}>
							<PauseIcon color={'white'} />
						</IconContainer>
					) : (
						<IconContainer size={32} onClick={play}>
							<PlayIcon color={'white'} />
						</IconContainer>
					)}
					<div class={style.progress} onClick={onChangeProgress} data-progress>
						<div style={`width: ${progress}%`} />
					</div>
					<IconContainer size={32} onClick={handle.active ? handle.exit : handle.enter}>
						<FullscreenIcon color={'white'} />
					</IconContainer>
				</div>
				<video ref={video} controls={false} autoPlay={false} playsInline={true}>
					{sources.map((source) => (
						<source key={source.type} src={source.src} type={source.type} />
					))}
					Your browser does not support the video tag.
				</video>
			</div>
		</FullScreenComponent>
	);
};

export default VideoPlayer;
