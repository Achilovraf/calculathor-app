// src/App.js
import { createElement, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export const App = () => {
	const [count, setCount] = useState(0);

	// Декларативный стиль - описываем что хотим получить
	const currentYear = new Date().getFullYear();

	// Императивный стиль - описывает как изменить состояние
	const handleClick = () => setCount((count) => count + 1);

	return createElement(
		'div',
		null,
		// Логотипы
		createElement(
			'div',
			null,
			createElement(
				'a',
				{
					href: 'https://vite.dev',
					target: '_blank',
				},
				createElement('img', {
					src: viteLogo,
					className: 'logo',
					alt: 'Vite logo',
				}),
			),
			createElement(
				'a',
				{
					href: 'https://react.dev',
					target: '_blank',
				},
				createElement('img', {
					src: reactLogo,
					className: 'logo react',
					alt: 'React logo',
				}),
			),
		),

		// Заголовок
		createElement('h1', null, 'Vite + React'),

		// Карточка с кнопкой
		createElement(
			'div',
			{ className: 'card' },
			createElement(
				'button',
				{
					onClick: handleClick,
				},
				`count is ${count}`,
			),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to test HMR',
			),
		),

		// Декларативное отображение текста
		createElement(
			'p',
			{
				className: 'read-the-docs',
			},
			'Click on the Vite and React logos to learn more',
		),

		// Декларативное отображение года
		createElement('p', null, `© ${currentYear}`),
	);
};
