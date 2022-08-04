import './App.scss';

export const Message = ({ msg, getRandomColor }) => {
	return (
		<div>
			<p style={{ color: getRandomColor() }} > {msg}</p>
		</div >
	);
}

function App(props) {
	return (
		<div className="main-app">
			<Message msg={props.msg} getRandomColor={props.getRandomColor} />
		</div>
	);
}

export default App;
