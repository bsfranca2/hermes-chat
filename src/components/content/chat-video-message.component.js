import style from './chat-video-message.style';

export default function ChatVideoMessage({ url }) {
	return  (
		<div class={style.videoMessage}>
			<video width="320" height="240" controls>
				<source src={url} type="video/mp4" />
			</video>
		</div>
	);
}
