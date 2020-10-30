import { API_CHAT, API_MESSAGES, API_SEND_FILE } from './constants';
import { doGet, doPost, doPostMultiPartFile } from '../helpers/request';

export function getChat(): Promise<Response> {
	return doGet(API_CHAT);
}

export function getMessages(): Promise<Response> {
	return doGet(API_MESSAGES);
}

export function createTextMessage(text: string): Promise<Response> {
	return doPost(API_MESSAGES, { text });
}

export function createImageMessage(file: File): Promise<Response> {
	return doPostMultiPartFile(API_SEND_FILE, file);
}
