import React from 'react';
//constants
import { objectWithoutKey } from '../../constants/helper';

const Input = ({
	invalid,
	touched,
	elementType,
	elementClasses,
	elementConfig,
	value,
	changed,
	label,
	labelClasses,
}) => {
	let inputElement = null;
	const inputClasses = ['input-element'];

	if (invalid && touched) {
		inputClasses.push('invalid-input');
	}

	switch (elementType) {
		case 'input':
			inputElement = (
				<input
					className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
					{...elementConfig}
					value={value}
					onChange={changed}
				/>
			);
			break;
		case 'file-input':
			inputElement = (
				<input
					className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
					{...elementConfig}
					onChange={changed}
				/>
			);
			break;
		case 'checkbox':
			inputElement = (
				<input
					className={`${inputClasses.join(' ')} checkbox ${
						elementClasses ? elementClasses.join(' ') : ''
					}`}
					{...elementConfig}
					onChange={changed}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
					{...elementConfig}
					value={value}
					onChange={changed}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select
					className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
					{...objectWithoutKey(elementConfig, 'options')}
					value={value}
					onChange={changed}
				>
					{elementConfig.options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					className={`${inputClasses.join(' ')} ${elementClasses ? elementClasses.join(' ') : ''}`}
					{...elementConfig}
					value={value}
					onChange={changed}
				/>
			);
	}
	return (
		<div className="input-container">
			{label && (
				<label
					className={`label ${labelClasses ? labelClasses.join(' ') : ''}`}
					style={{ cursor: elementType === 'checkbox' ? 'pointer' : 'initial' }}
					htmlFor={elementConfig.id ? elementConfig.id : null}
				>
					{label}
				</label>
			)}
			{inputElement}
		</div>
	);
};

export default Input;
