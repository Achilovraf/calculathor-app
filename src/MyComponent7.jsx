// src/MyComponent7.jsx
import { useState } from 'react';
import styles from './MyComponent7.module.css';

export const MyComponent7 = () => {
	const [showRedText, setShowRedText] = useState(false);

	const onClick = () => {
		setShowRedText(!showRedText);
	};

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>;

	return (
		<>
			{text}
			<button onClick={onClick}>Изменить цвет текста</button>
		</>
	);
};
