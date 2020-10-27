import { FunctionalComponent, h } from 'preact';
import AppContainer from '../containers/app';

import Header from './header';
import Content from './content';
import InputData from './input-data';

const App: FunctionalComponent = () => {
	return (
		<AppContainer>
			<Header />
			<Content />
			<InputData />
		</AppContainer>
	);
};

export default App;
