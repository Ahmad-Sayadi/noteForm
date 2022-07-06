import { useState } from 'react'

const NoteForm = (props) => {
  const [notes, setNotes] = useState({
    title: '',
    body: '',
  })

  const handleChange = (event) => {
    setNotes({ ...notes, [event.target.name]: event.target.value })

  }

  return (
    <div>
         <form
      onSubmit={event => {
        event.preventDefault();
        props.addNote(notes)
        setNotes({email:"",body:"",id: Date.now()})
      }}
      
    >
      <input
      type="text"
      name="title"
      value={notes.title}
      onChange={handleChange}
      
      
      
      />
        <textarea 
        type="text"
        name="body"
        value={notes.body}
        onChange={handleChange}
        
        
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default NoteForm
