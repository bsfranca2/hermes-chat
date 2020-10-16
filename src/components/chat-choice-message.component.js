export default function ChatCoiceMessage({ choices }) {
	return choices.map(choice => <div style="border: solid 1px #cdcdcd;">{choice}</div> );
}
