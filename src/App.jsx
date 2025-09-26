// src/App.js
import { createElement, useState } from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';

export default function App() {
	return (
		<Calculator	/>
	)
}

// export function App() {
// 	return (
// 		<div className='calculator'>
// 			<div className='display'>
// 				<div className='display-text'>0</div>
// 			</div>
// 			<div className="buttons">
// 				{/* Ряд 1 */}
// 				<div className="btn-function">AC</div>
// 				<div className="btn-function">+/-</div>
// 				<div className="btn-function">%</div>
// 				<div className="btn-operator">÷</div>

// 				{/* Ряд 2 */}
// 				<div className="btn-function">7</div>
// 				<div className="btn-function">8</div>
// 				<div className="btn-function">9</div>
// 				<div className="btn-operator">×</div>

// 				{/* Ряд 3 */}
// 				<div className="btn-function">6</div>
// 				<div className="btn-function">5</div>
// 				<div className="btn-function">4</div>
// 				<div className="btn-operator">-</div>

// 				{/* Ряд 4 */}
// 				<div className="btn-function">3</div>
// 				<div className="btn-function">2</div>
// 				<div className="btn-function">1</div>
// 				<div className="btn-operator">+</div>

// 				{/* Ряд 5 */}
// 				<div className="btn-number zero">0</div>
// 				<div className="btn-number">.</div>
// 				<div className="btn-operator">=</div>
// 			</div>
// 		</div>
// 	)
// }