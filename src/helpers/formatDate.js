import dayjs from 'dayjs';

export function formatDateForDays(date) {
	return dayjs(date).format('DD/MM/YYYY');
}

export function formatDateForTime(date) {
	return dayjs(date).format('HH:mm');
}
