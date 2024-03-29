import { FunctionalComponent, h } from 'preact';

const SendIcon: FunctionalComponent = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="black"
			width="18px"
			height="18px"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
		</svg>
	);
};

export default SendIcon;
