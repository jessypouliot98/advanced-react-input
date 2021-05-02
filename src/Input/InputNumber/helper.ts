export function normalizeNumber(value: number): number {
	return parseFloat(value.toString().replace(/\D$/, ''));
}
