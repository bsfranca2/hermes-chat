import { FunctionalComponent, h } from 'preact';
import { Source } from '../../../../models/message';
import VideoPlayer from '../../../shared/video-player';
import style from './style.css';

interface Props {
	sources: Source[];
}

const VideoMessage: FunctionalComponent<Props> = ({ sources }) => {
	return (
		<div class={style.videoMessage}>
			<VideoPlayer sources={sources} />
		</div>
	);
};

export default VideoMessage;
