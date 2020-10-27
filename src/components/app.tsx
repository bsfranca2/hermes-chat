import { Fragment, FunctionalComponent, h } from 'preact';
import AppContainer from '../containers/app';

import Header from './header';
import Content from './content';
import InputData from './input-data';
import Setup from './setup';
import { AppContext } from '../contexts/app';

const App: FunctionalComponent = () => {
	return (
		<AppContainer>
			<Setup />
			<AppContext.Consumer>
				{(context) => {
					if (!context) throw new Error('Context not found in app');
					if (context.isLoading) {
						return null;
					}
					return (
						<Fragment>
							<Header />
							<Content />
							<InputData />
						</Fragment>
					);
				}}
			</AppContext.Consumer>
		</AppContainer>
	);
};

export default App;
