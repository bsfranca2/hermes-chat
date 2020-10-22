import { FunctionalComponent, h } from 'preact';
import { IconProps } from '.';

const CheckIcon: FunctionalComponent<IconProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={color || 'black'}
			width="18px"
			height="18px"
		>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
		</svg>
	);
};

export default CheckIcon;
