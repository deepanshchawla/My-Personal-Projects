import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [text,setText] = useState("");
	const [name, setName] = useState("");

	// variation one -> every render
	// useEffect(()=>{
	// 	console.log("UI rendering done");
	// });

	// variation 2 -> first render
	// useEffect(()=>{
	// 		console.log("UI rendering done");
	// 	},[]
	// );

	//variation 3 ->first render + when the dependency changes
	// useEffect(()=>{
	// 	console.log("change observed");
	// }, [name]);


	// variation 4 -> to handle unmounting of a component
	useEffect(()=>{
		//add event listener
		//this code will run after the returned code will run
		
		return ()=>{
			//this code will run first
		}
	},[]);

	function changeHandler(e){
		console.log(text);
		setText(e.target.value);
	}

	return (
		<div className="App">
			<input type="text" onChange={changeHandler}></input>
		</div>
	);
}

export default App;
