// src/MyComponent4.jsx
import { useState } from 'react';

// const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

 export const MyComponent3 = () => {
	const [obj, setObj] = useState({a: 10, b: 20, c: 30})
	let obj1 = {a: 10}

	obj1.a = 20;

	if(obj.a === 10) {
		setObj({...obj, a: 20})
	}


	return <div>{obj.a}</div>
 }
