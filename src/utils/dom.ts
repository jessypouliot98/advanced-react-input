import React from 'react';

export const onInputChange = (callback: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
	callback(e.target.value);
}

export const onCheckboxChange = (callback: (value: boolean) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
	callback(!!e.target.checked);
}

export const onFileChange = (callback: (value: FileList | null) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
	callback(e.target.files);
}