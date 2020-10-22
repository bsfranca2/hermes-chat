import { FunctionalComponent, h } from 'preact';

interface Props {
	html: string;
}

const HtmlMessage: FunctionalComponent<Props> = ({ html }) => {
	return <div>{html}</div>;
};

export default HtmlMessage;
