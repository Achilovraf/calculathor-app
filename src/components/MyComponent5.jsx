// src/MyComponent4.jsx
import { useState } from 'react';

const products = [
	{ id: 'qwe', name: 'Чайник' },
	{ id: 'rty', name: 'Утюг' },
	{ id: 'uio', name: 'Пылесос' },
	{ id: 'asd', name: 'Телевизор' },
	{ id: 'fgh', name: 'Монитор' },
	{ id: 'jkl', name: 'Колонка' },

];

export const MyComponent5 = () => {
	return (
		<>
		<ul>
			{products.map(({ id, name }) => (
				<li key={id}>{name} {}</li>
			))}
		</ul>
		</>
	);
};
