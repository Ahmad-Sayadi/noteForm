import React,{useState} from "react";



const Notes = props => {

  return (
    <div className="note-list">
    {props.notes.map((note)=>{
      return(
        <div className="note" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>

        </div>
      )
    })}
    
     
    </div>
  );
};

export default Notes;