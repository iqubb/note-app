import './App.css';
import Sidebar from "./Sidebar";
import Main from "./Main";
import {useState} from "react";
import uuid from "react-uuid"

function App() {

    const[notes, setNotes] = useState([]);

    const [activeNote, setActiveNote] = useState(false);

    const onAddNote = () =>{
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
    };

    const onDeleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === activeNote){
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotes);
    };



    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    }

  return (
    <div className="App">
      <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote = {onDeleteNote}
          activeNote = {activeNote}
          setActiveNote = {setActiveNote}
      />
      <Main activeNote={getActiveNote()}
            onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
