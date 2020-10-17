/**
 * @typedef User
 * @type {object}
 * @property {string} name
 * @property {string} avatar
 */

/**
 * @typedef MessageOptions
 * @type {object}
 * @property {string} id
 * @property {('Text'|'HTML'|'Image'|'Video'|'Audio'|'Choices'|'Carousel')} type
 * @property {string} content
 * @property {MessageFile} file
 * @property {Date} sendAt
 * @property {User} sendBy
 * @property {('Sent'|'Pending'|'Error')} status
 */

/**
 * @param {MessageOptions} params
 */
export function Message(params) {
	this.id = params.id;
	this.type = params.type;
	this.content = params.content;
	this.file = params.file;
	this.sendAt = params.sendAt || new Date();
	this.sendBy = params.sendBy;
	this.status = params.status;
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
