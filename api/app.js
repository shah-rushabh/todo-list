const express = require('express'); 
const app = express(); 

app.use(express.json());

const todoList = [];
let nextIndex = 1;

app.get('/todoList', (req, res) => {

	res.send(todoList);
});



app.post('/addNewTask', (req, res) => {
  
	let task = {
		text: req.body.text,
		status: "incomplete",
		index : nextIndex
	};

	todoList.push(task);
	nextIndex ++;
	res.send(todoList);
});



app.post('/markTask/:index', (req, res) => {

	const task = todoList.find(item => item.index === parseInt(req.params.index));
	const indexOfTask = todoList.indexOf(task);

	task.status = (task.status==="incomplete"? "completed":"incomplete");
	todoList.splice(indexOfTask,1);
	todoList.splice(indexOfTask,0,task);
	
	res.send(todoList);
});
 

 
app.delete('/deleteTask/:index', (req, res) => {

	const task = todoList.find(item => item.index === parseInt(req.params.index));
	const indexOfTask = todoList.indexOf(task);
	
	todoList.splice(indexOfTask,1);
	res.send(todoList);
});

 

//PORT ENVIRONMENT VARIABLEs
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}..`));