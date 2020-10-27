import { API_APP_INFO } from './constants';
import { doGet, getParameterByName } from '../helpers/request';

export function getAppInfo(): Promise<Response> {
	const websiteToken = getParameterByName('website_token');
	const url = `${API_APP_INFO}/?website_token=${websiteToken}`;
	return doGet(url);
}
