import { Fragment, FunctionalComponent, h } from 'preact';

interface Props {
	choices: string[];
}

const ChoiceMessage: FunctionalComponent<Props> = ({ choices }) => {
	return (
		<Fragment>
			{choices.map((choice) => (
				<div key={choice} style="border: solid 1px #cdcdcd;">
					{choice}
				</div>
			))}
		</Fragment>
	);
};

export default ChoiceMessage;
