import { FunctionalComponent, h } from 'preact';

interface IProps {
	url: string;
	size: number;
}

const Avatar: FunctionalComponent<IProps> = ({ url, size }) => {
	return (
		<img src={url} width={size} height={size} style="border-radius: 50%;" />
	);
};

export default Avatar;
