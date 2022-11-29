import React, { useState } from 'react';

export const Counter = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const handleAdd = () => {
		setCounter(counter + 1);
	};

	const handleReset = () => {
		setCounter(value);
	};

	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={handleAdd}> +1 </button>
			<button onClick={handleReset}> reset</button>
			<button> -1 </button>
		</div>
	);
};
