import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => {
	return (
		<div>
			<h1>{text}</h1>
		</div>
	);
};

const Statistics = ({ text, good, neutral, bad }) => {
	return (
		<React.Fragment>
			<h2>{text}</h2>
			<div>Good...{good}</div>
			<div>Neutral...{neutral}</div>
			<div>Bad...{bad}</div>
			{/* implement total here */}
		</React.Fragment>
	);
};

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const App = () => {
	const headerText = 'give feeback';
	const statisticsText = 'statistics';
	// save clicks of each button to own state
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);
	// console.log('good count...', good);
	// console.log('neutral count...', neutral);
	// console.log('bad count...', bad);

	const incrementGood = () => setGood(good + 1);
	const incrementNeutral = () => setNeutral(neutral + 1);
	const incrementBad = () => setBad(bad + 1);

	return (
		<div>
			<Header text={headerText} />
			<Button handleClick={incrementGood} text="good" />
			<Button handleClick={incrementNeutral} text="neutral" />
			<Button handleClick={incrementBad} text="bad" />
			<Statistics text={statisticsText} good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
