import React, {useState} from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
	const [count,setCount] = useState(0)
	return (
		<div className={classes.btn} >
			<button
				onClick={() => setCount(count + 1)}
			>
				increment
			</button>
			<button
				onClick={() => setCount(count - 1)}
			>
				decrement
			</button>
			<span>{count}</span>
		</div>
	)
}

export default Counter
