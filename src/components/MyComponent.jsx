// src/MyComponent.jsx
import { useEffect } from 'react'


 export const MyComponent = () => {
	const date = new Date()

	useEffect(() => {
		console.log(date);
	}, []);

	return <div>{String(date)}</div>
}
