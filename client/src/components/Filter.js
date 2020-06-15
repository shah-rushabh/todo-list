import React from "react"

function Filter( {changeFilter} ){

	return (
		<div>
			Show  
			<select onChange={(event) => changeFilter(event)}>
				<option value="all">all</option>
				<option value="completed">incomplete</option>
				<option value="incomplete">completed</option>
			</select>
		</div>
	)
}

export default Filter;