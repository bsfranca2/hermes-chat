import { Connect } from 'redux-zero/preact';

function mapToProps({ footer }) {
	return ({ footer });
}

export default function ChatContent() {
	return (
		<Connect mapToProps={mapToProps}>
			{({ footer }) => (
				<a href={footer.url} rel="noreferrer" target="_blank">{footer.label}</a>
			)}
		</Connect>
	);
}
