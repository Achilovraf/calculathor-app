// src/MyComponent2.jsx
const getValue = () => 123;

 export const MyComponent2 = () => {
	const tagName = 'div'


	return (
		<>
			<label>Значение</label>
			<div
				className={tagName + 'Element'}
				style={{ width: '100px', marginTop: '20px' }}
			>
				{getValue()}
			</div>
		</>
	);
}
