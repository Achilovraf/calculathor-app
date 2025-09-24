// src/MyComponent4.jsx
import { useState } from 'react';

export const MyComponent6 = () => {
	const [value, setValue] = useState(0);

	const onClick = () => {
		setValue((updatedValue) => updatedValue  + 1);
		setValue((updatedValue) => updatedValue  + 1);
		setValue((updatedValue) => updatedValue  + 1);
	};

	return (
		<>
			<div>{value}</div>
			<button onClick={onClick}>Прибавить +1</button>
		</>
	);
};
