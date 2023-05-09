import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [count, setCounter] = useState(0);
	const onIncrement = () => {
		setCounter(count + 1);
	};
	return (
		<div className={classes.counter}>
			<h1 className='counter__score'>{count}</h1>
			<button className='counter__button' onClick={onIncrement}>
				increment
			</button>
		</div>
	);
};
