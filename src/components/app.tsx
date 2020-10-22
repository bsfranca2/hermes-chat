import { FunctionalComponent, h } from 'preact';
import AppContainer from '../containers/app';

import Layout from './layout';
import Header from './header';
import Content from './content';
import BottomBar from './bottom-bar';

const App: FunctionalComponent = () => {
	return (
		<AppContainer>
			<Layout>
				<Header />
				<Content />
				<BottomBar />
			</Layout>
		</AppContainer>
	);
};

export default App;
