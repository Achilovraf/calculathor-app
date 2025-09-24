// src/main.js
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';
import './index.css';

createRoot(document.getElementById('root')).render(
	createElement('div', null, createElement(App)),
);
