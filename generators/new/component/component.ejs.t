---
to: "src/components/<%= h.changeCase.kebab(name) %>.component.js"
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
%>import style from './<%= fileName %>.style';

export default function <%= name %>() {
	return (<>
		//
	</>);
}
