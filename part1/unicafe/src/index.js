import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Statistics = ({ text, value }) => (
	<p>
		{text}: {value}
	</p>
);

const App = () => {
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);

	const [ total, setAll ] = useState(0);

	const incrementGood = () => {
		setGood(good + 1);
		setAll(total + 1);
	};

	const incrementNeutral = () => {
		setNeutral(neutral + 1);
		setAll(total + 1);
	};
	const incrementBad = () => {
		setBad(bad + 1);
		setAll(total + 1);
	};

	let values = [ good, neutral, bad ];
	let sum = values.reduce((previous, current) => (current += previous));
	let average = (sum / values.length).toFixed(1);
	let percent = isNaN(good / total) ? '0.00%' : `${good / total * 100}`;
	let posPercent = parseInt(percent).toFixed(1) + '%';

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={incrementGood} text="good" />
			<Button handleClick={incrementNeutral} text="neutral" />
			<Button handleClick={incrementBad} text="bad" />
			<h2>statistics</h2>
			<Statistics text="good" value={good} />
			<Statistics text="neutral" value={neutral} />
			<Statistics text="bad" value={bad} />
			<Statistics text="total" value={total} />
			<Statistics text="average" value={average} />
			<Statistics text="percent" value={posPercent} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
