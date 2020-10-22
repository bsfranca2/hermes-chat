import { FunctionalComponent, h } from 'preact';

interface Props {
	url: string;
}

const AudioMessage: FunctionalComponent<Props> = ({ url }) => {
	return (
		<audio controls>
			<source src={url} type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	);
};

export default AudioMessage;
