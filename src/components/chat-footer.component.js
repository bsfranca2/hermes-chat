import { connect } from 'redux-zero/preact';

function ChatHeader({ footer }) {
	return (
		<a href={footer.url} rel="noreferrer" target="_blank">{footer.label}</a>
	);
}

function mapToProps(state) {
	return ({ footer: state.footer });
}

export default connect(mapToProps)(ChatHeader);
