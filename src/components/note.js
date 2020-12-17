import React from "react";
import ReactDom from "react-dom";
import DeleteIcon from '@material-ui/icons/Delete';



export default function Note(props){

		function handleClick(){
			props.onDelete(props.id);
		}

	return <div className="note">
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<button onClick={handleClick} class="astext"><DeleteIcon /></button>

		</div>
	
}