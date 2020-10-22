import { FunctionalComponent, h } from 'preact';
import { useRef, useState, useEffect } from 'preact/hooks';
import { Source } from '../../../models/message';
import IconContainer from '../icon-container';
import PlayIcon from '../icons/play';
import PauseIcon from '../icons/pause';
import style from './style.css';

interface Props {
	sources: Source[];
}

const VideoPlayer: FunctionalComponent<Props> = ({ sources }) => {
	const video = useRef<HTMLVideoElement>();

	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

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

	return (
		<div class={style.playerContainer}>
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
				<div class={style.progress}>
					<div style={`width: ${progress}%`} />
				</div>
			</div>
			<video ref={video} controls={false} autoPlay={false} playsInline={true}>
				{sources.map((source) => (
					<source key={source.type} src={source.src} type={source.type} />
				))}
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoPlayer;
