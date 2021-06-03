import React from 'react';

export interface ToggleProps {
	className?: string,
	isChecked: boolean,
	size: string,
	onClick: () => void,
}

const Toggle: React.FC<ToggleProps> = ({ className, isChecked, size, onClick }) => {
	const getSize = (type: 'container' | 'knob'): string => {
		const isContainer = type === 'container';

		switch (size) {
			case 'sm':
				return isContainer
					? 'ari-w-6 ari-h-3'
					: 'ari-w-3 ari-h-3';

			case 'lg':
				return isContainer
					? 'ari-w-12 ari-h-6'
					: 'ari-w-6 ari-h-6';

			case 'xl':
				return isContainer
					? 'ari-w-16 ari-h-8'
					: 'ari-w-8 ari-h-8';

			case 'md':
			default:
				return isContainer
					? 'ari-w-8 ari-h-4'
					: 'ari-w-4 ari-h-4';
		}
	}

	const getState = (type: 'container' | 'knob'): string => {
		const isContainer = type === 'container';

		if (isContainer) {
			return isChecked
				? 'ari-bg-blue-500 ari-border-blue-200'
				: 'ari-bg-white';
		} else {
			return isChecked
				? 'ari-bg-white'
				: 'ari-bg-blue-400';
		}
	}

	return (
		<button
			className={[
				className,
				'ari-toggle-container',
				'ari-flex ari-items-center',
				'ari-transition ari-transition-all ari-border ari-rounded-full ari-border-gray-700',
				'focus:ari-outline-none',
				getSize('container'),
				getState('container'),
			].join(' ')}
			onClick={() => onClick()}
		>
			<div style={{ transform: `translateX(${!isChecked ? '0%' : '100%'})` }}>
				<div
					className={[
						'ari-toggle-knob',
						'ari-transition ari-border ari-rounded-full',
						getSize('knob'),
						getState('knob'),
					].join(' ')}
				/>
			</div>
		</button>
	)
}

export default Toggle;
