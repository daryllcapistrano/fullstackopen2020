import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const DirectionButton = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const History = (props) => {
	if (props.allClicks.length === 0) {
		return <div>the app is used by pressing the buttons</div>;
	} else {
		return <div>button press history: {props.allClicks.join(' ')}</div>;
	}
};

const App = () => {
	const [ counter, setCounter ] = useState(0);
	const [ left, setLeft ] = useState(0);
	const [ right, setRight ] = useState(0);
	const [ allClicks, setAll ] = useState([]);
	// log the counter state
	console.log('rendering...', counter);

	// const [ clicks, setClicks ] = useState({
	// 	left: 0,
	// 	right: 0
	// });

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'));
		setLeft(left + 1);
	};

	const handleRightClick = () => {
		setAll(allClicks.concat('R'));
		setRight(right + 1);
	};

	const incrementCounter = () => setCounter(counter + 1);
	const decrementCounter = () => setCounter(counter - 1);
	const resetCounter = () => setCounter(0);

	return (
		<div>
			<Display counter={counter} />
			<Button handleClick={incrementCounter} text="plus" />
			<Button handleClick={decrementCounter} text="minus" />
			<Button handleClick={resetCounter} text="reset" />
			<br />
			<br />
			<div>
				<div>
					{left}
					<DirectionButton onClick={handleLeftClick} text="left" />
					<DirectionButton onClick={handleRightClick} text="right" />
					{right}
					<History allClicks={allClicks} />
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
