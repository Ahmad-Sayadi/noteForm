import React,{useState} from "react"
import "../styles.css"
import NoteForm from "./NoteForm"
import Notes from "./Notes"




function App() {
    const [notes,setNotes]=useState([{

        id:1,
        title: "Happy little quote",
        body:"Talent is a pursued interest.Anything that you're willing to practice,you caN DO. - Bob Ross"
        
          }])
          const addNote =(newNote)=>{
              setNotes([...notes,newNote])
          }
    return (
      <div className="App">
          <NoteForm addNote={addNote}/>
   <Notes notes={notes}/>
      </div>
    );
  }
  
  export default App;

  
  