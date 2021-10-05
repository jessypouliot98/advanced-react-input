import { complexOption } from './../types';

export const getOption = (option: complexOption | string): complexOption => {
	if (typeof option === 'string') {
		option = { label: option, value: option } as complexOption;
	}

	return option;
}