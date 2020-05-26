import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
	<div>
		<h1>{props.text}</h1>
	</div>
);

const FeedbackButton = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Statistics = (props) => {
	if (props.total === 0) {
		return <p>No feedback given</p>;
	} else {
		return (
			<React.Fragment>
				<h2>{props.text}</h2>
				<div>Good...{props.good}</div>
				<div>Neutral...{props.neutral}</div>
				<div>Bad...{props.bad}</div>
				<strong>Total... {props.total}</strong>
				<div>Average...{props.average}</div>
				<div>Positive Feedback {props.percent} % </div>
			</React.Fragment>
		);
	}
};

const App = () => {
	const headerText = 'give feeback';
	const statisticsText = 'statistics';

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
	let average = sum / values.length;

	let percent = isNaN(good / total) ? '0' : good / total * 100;

	return (
		<div>
			<Header text={headerText} />
			<FeedbackButton handleClick={incrementGood} text="good" />
			<FeedbackButton handleClick={incrementNeutral} text="neutral" />
			<FeedbackButton handleClick={incrementBad} text="bad" />
			<Statistics
				text={statisticsText}
				good={good}
				neutral={neutral}
				bad={bad}
				total={total}
				average={average}
				percent={percent}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
