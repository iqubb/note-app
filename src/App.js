import './App.css';
import Sidebar from "./Sidebar";
import Main from "./Main";
import {useState} from "react";

function App() {

    const[notes, setNotes] = useState([]);

    const onAddNote = () =>{
        console.log("add");
    }

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote}/>
      <Main />
    </div>
  );
}

export default App;
