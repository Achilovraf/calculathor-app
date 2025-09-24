// src/MyComponent3.jsx
import { useState } from 'react';

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

 export const MyComponent3 = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	setTimeout(() => {
		setCurrentDate(new Date());

	}, 1000);

	return <div>{getTimeFromDate(currentDate)}</div>
 }
