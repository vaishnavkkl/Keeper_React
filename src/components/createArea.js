import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea(props){
    
	const [note,setNote] = useState({
		title:"",
		content:"",
	});

	function handleChange(event){
  	const {name, value}  = event.target;

  	setNote(prevNote =>{
  		return {
  			...prevNote,
  			[name]:value
  		};
  	})
	};

	function submitNote(event){
		props.onAdd(note);
		event.preventDefault();
		setNote({
			title:"",
			content:""
		})



	}

	return <createArea> 
	<div class="createArea">
		<form>
        <input onChange={handleChange} class="title" value={note.title} name="title" placeholder="Title" /><br /><br />
        <textarea onChange ={handleChange} class="content" value={note.content} name="content" placeholder="Take a note" id="" cols="30" rows="5" ></textarea><br /><br />
        <button class="add-button" onClick={submitNote}>
        
        <Zoom in={true}><AddIcon style={{fontSize:50}}/></Zoom>
        </button>
		</form>
	</div>
    
  </createArea>
}

