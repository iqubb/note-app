import React from 'react';
import ReactMarkdown from "react-markdown";

const Sidebar = (props) => {

    const sortedNotes = props.notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className = "app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick ={props.onAddNote}>Add</button>
            </div>

            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => (
                    <div className ={`app-sidebar-note ${note.id === props.activeNote && "active"}`}
                         onClick={() => props.setActiveNote(note.id)}
                    >

                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => {props.onDeleteNote(note.id)}}>Delete</button>
                        </div>

                        <p><ReactMarkdown>{note.body && note.body.substr(0, 100) + "..."}</ReactMarkdown></p>
                        <small>{new Date(note.lastModified).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}</small>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Sidebar;