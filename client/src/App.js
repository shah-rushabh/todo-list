
import React, {useState, useEffect} from "react";
import "./App.css";

import TodoForm from "./components/TodoForm"
import ShowTask from "./components/ShowTask"
import Filter from "./components/Filter"

function App(){
	
	const [todoList, setTodoList] = useState([]);
	const [filter, setFilter] = useState("all");

	function updateTodoList(){

		fetch('/todoList', {method: 'GET'})
		.then(res => res.json())
		.then(res => setTodoList(res))
		.catch(console.log("error updateTodoList"));
	}

	function addNewTask( task ){

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(task)
		};

		fetch('/addNewTask', requestOptions)
		.then(res => res.json())
		.then(res => setTodoList(res))
		.catch(console.log("error addTask"));
	}

	function markTask( index ){

		const uri = `/markTask/${index}`;

		fetch(uri, {method: 'POST'})
		.then(res => res.json())
		.then(res => setTodoList(res))
		.catch(console.log("error markTask"));
	}

	function deleteTask( index ){

		const uri = `/deleteTask/${index}`;

		fetch(uri, {method: 'DELETE'})
		.then(res => res.json())
		.then(res => setTodoList(res))
		.catch(console.log("error deleteTask"));
	}

	function changeFilter(event){
		setFilter(event.target.value)
	}
  
  	function handleSubmit(text, setText) {
		const task = {
			text: text
		}
		addNewTask(task);
		setText("");
	}

	useEffect(() => {updateTodoList()}, []);

	return(

		<div className="app">
			<h1>TODO list</h1>
			<TodoForm handleSubmit={handleSubmit}/>

			{todoList.map( (task) => {
				return <ShowTask  
					key={task.index} 
					task={task}
					markTask={markTask} 
					deleteTask={deleteTask}
					filter={filter} />
				} 
			)}
			<br/> 
			<Filter changeFilter={changeFilter}/>
		</div>
	)
	
}

export default App;
