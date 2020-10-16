/**
 * @typedef MessageOptions
 * @type {object}
 * @property {('Text'|'HTML'|'Image'|'Video'|'Audio'|'Choices'|'Carousel')} type
 * @property {string} content
 * @property {MessageFile} file
 * @property {Date} sendAt
 * @property {string} whoSend
 */

/**
 * @param {MessageOptions} params
 */
export function Message(params) {
	this.type = params.type; // Text | HTML | Image | Video | Audio | Choices | Carousel
	this.content = params.content;
	this.file = params.file;
	this.sendAt = params.sendAt || new Date();
	this.whoSend = params.whoSend;
	this.getDate = function() {
		return this.sendAt.getDate();
	};
	this.getTimestamp = function() {
		return this.sendAt.getTime();
	};
}

/**
 * @typedef Source
 * @type {object}
 * @property {string} src
 * @property {string} type
 */

/**
 * @typedef MessageFileOptions
 * @type {object}
 * @property {string} filename
 * @property {Source[]} sources
 */

/**
 * @param {MessageFileOptions} param
 */
export function MessageFile({ filename, sources }) {
	this.filename = filename;
	this.sources = sources;
}
