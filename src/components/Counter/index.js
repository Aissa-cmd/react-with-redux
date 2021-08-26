import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Actions/counterActions';


function Counter(props) {
	const counter = useSelector(state => state.counter)
	const dispatch = useDispatch()

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	)
}


export default Counter;
