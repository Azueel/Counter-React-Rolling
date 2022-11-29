import React from 'react';
import { Counter } from './Counter';

export const App = () => {
	const value = 20;

	return (
		<>
			<h1>Contador</h1>
			<Counter value={value} />
		</>
	);
};
