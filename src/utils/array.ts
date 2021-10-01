export const wrap = <T = any>(item: T | T[]): T[] => {
	if (Array.isArray(item)) {
		return item;
	}

	return [item];
}