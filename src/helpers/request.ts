export function getParameterByName(name: string, url = window.location.href): string | null {
	name = name.replace(/[\[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function doGet(url: string): Promise<Response> {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Chat-Id': getParameterByName('chat') || '',
			'Conversation-Id': getParameterByName('conversation') || '',
		},
	});
}

export function doPost(url: string, data: any): Promise<Response> {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Chat-Id': getParameterByName('chat') || '',
			'Conversation-Id': getParameterByName('conversation') || '',
		},
		body: JSON.stringify(data),
	});
}

export function doPostMultiPartFile(url: string, file: File): Promise<Response> {
	const formData = new FormData();
	formData.append('file', file);

	return fetch(url, {
		method: 'POST',
		headers: {
			'Chat-Id': getParameterByName('chat') || '',
			'Conversation-Id': getParameterByName('conversation') || '',
		},
		body: formData,
	});
}
