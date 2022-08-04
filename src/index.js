import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const msg = 'Hello React!';

const getRandomColor = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App msg={msg} getRandomColor={getRandomColor} />
	</React.StrictMode>
);