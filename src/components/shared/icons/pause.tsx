import { FunctionalComponent, h } from 'preact';
import { IconProps } from '.';

const PauseIcon: FunctionalComponent<IconProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={color || 'black'}
			width="18px"
			height="18px"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
		</svg>
	);
};

export default PauseIcon;
