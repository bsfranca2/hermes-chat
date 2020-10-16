import style from './chat-image-message.style';

export default function ChatImageMesasge({ url }) {
	return (
		<a href={url} target="_blank" rel="noreferrer noopener nofollow" class={style.image}>
			<div class={style.wrap}>
				<img src={url} alt="Picture message" />
			</div>
		</a>
	);
}
