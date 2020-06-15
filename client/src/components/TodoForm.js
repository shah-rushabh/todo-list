import React, {useState, Fragment} from "react"

function TodoForm({ handleSubmit }) {

	const [text, setText] = useState("")

	function handleChange(event) {
		setText(event.target.value);
	}

	return (
		<Fragment>
			<input 
				className="textBox"
				type="text" 
				name="text" 
				placeholder="Enter new task"
				onChange={handleChange} 
				value={text} 
				required/>
			<button onClick={() => {handleSubmit(text, setText)}}>Click Me</button>
		</Fragment>
	)
}

export default TodoForm;