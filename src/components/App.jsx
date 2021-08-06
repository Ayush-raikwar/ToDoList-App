
import CreateArea from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { useState } from "react";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(note){
    setNotes(prevNotes => ([...prevNotes, note]))
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index!==id;
      })
    })
  }
  
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
     { notes.map((noteItem, index) => <Note title={noteItem.title} content={noteItem.content} onDelete={deleteNote} key={index} id={index}/>)}
      <Footer />
    </div>
  );
}

export default App;
