import React,{useState} from "react";
import ReactDom from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";
import CreateArea from "./createArea";


function App() {
 
const [notes, setNotes] = useState([])

 function addNote(note){
    setNotes(prevNotes => {
    	return [...prevNotes, note];
    })
 }

 function deleteNote(id){
  setNotes(prevNotes=> {
  	return prevNotes.filter((item, index) =>{
  		return index !== id;
  	})
  })
 }

  return (
    <div className="App">
      <Header/> 
      <CreateArea 
      onAdd = {addNote}
      />
     { notes.map(function(items,index){
                 	return <Note key={index} id={index} title={items.title} content={items.content} onDelete={deleteNote} />
                 })}
     
      
      <Footer/> </div>
  );
}

export default App;
