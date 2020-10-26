import { FunctionalComponent, h } from 'preact';
import AppContainer from '../containers/app';

import Header from './header';
import Content from './content';
import BottomBar from './bottom-bar';

const App: FunctionalComponent = () => {
	return (
		<AppContainer>
			<Header />
			<Content />
			<BottomBar />
		</AppContainer>
	);
};

export default App;
