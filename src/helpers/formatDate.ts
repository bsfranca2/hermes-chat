import dayjs from 'dayjs';

export function formatDateForDays(date: Date): string {
	return dayjs(date).format('DD/MM/YYYY');
}

export function formatDateForTime(date: Date): string {
	return dayjs(date).format('HH:mm');
}
