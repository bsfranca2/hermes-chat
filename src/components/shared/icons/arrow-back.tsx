import { FunctionalComponent, h } from 'preact';
import { IconProps } from '.';

const ArrowBackIcon: FunctionalComponent<IconProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={color || 'black'}
			width="18px"
			height="18px"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
		</svg>
	);
};

export default ArrowBackIcon;