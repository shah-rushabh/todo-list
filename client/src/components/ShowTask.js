import React from "react"
import Button from "../shared/Button"

function ShowTask( {task, markTask, deleteTask, filter}){

	const {status, index} = task;
	if(status === filter)
        return null; 
        

	return (
		<div 
			className="todo"
			style={{ 
				textDecoration: status==="completed"? "line-through" : "" ,
				color: status==="completed" ? "lightgrey" : ""
			}}
		>   
			<Button text="tick" onClick={() => markTask( index )} />
			<Button text="x" onClick={() => deleteTask( index )} />
			
			{task.text}
		</div>
	)
}

export default ShowTask;