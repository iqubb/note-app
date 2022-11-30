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
            lastModified: new Date(Date.now()).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setNotes([newNote, ...notes]);
    };

    const onDeleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

  return (
    <div className="App">
      <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote = {onDeleteNote}
          activeNote = {activeNote}
          setActiveNote = {setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
