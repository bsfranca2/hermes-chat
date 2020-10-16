export default function ChatAvatar(props) {
	const { url, size } = props;
	return <img src={url} width={size} height={size} style="border-radius: 50%;" />;
}
