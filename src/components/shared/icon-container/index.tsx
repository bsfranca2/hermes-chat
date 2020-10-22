import { FunctionalComponent, h } from 'preact';
import style from './style.css';

interface Props {
	size: number;
	customContainerClass?: string;
	customIconClass?: string;
	onClick?: () => void;
}

const IconContainer: FunctionalComponent<Props> = (props) => {
	let containerClassNames = `${style.container}`;
	let iconClassNames = `${style.iconContainer} d-flex flex-inline align-center`;

	if (props.customIconClass) {
		iconClassNames = `${iconClassNames} ${props.customIconClass}`;
	}

	if (props.customContainerClass) {
		containerClassNames = `${containerClassNames} ${props.customContainerClass}`;
	}

	if (props.onClick) {
		containerClassNames = `${containerClassNames} cursor-pointer`;
	}

	function onClick() {
		if (props.onClick) {
			props.onClick();
		}
	}

	return (
		<div class={containerClassNames} onClick={onClick}>
			<div
				class={iconClassNames}
				style={`height: ${props.size}px; width: ${props.size}px`}
			>
				{props.children}
			</div>
		</div>
	);
};

export default IconContainer;
