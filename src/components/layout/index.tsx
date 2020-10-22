import { h, FunctionalComponent } from 'preact';
import * as style from './style.css';

const Layout: FunctionalComponent = ({ children }) => {
	return <div class={style.layout}>{children}</div>;
};

export default Layout;
