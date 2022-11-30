import React from 'react';

const Sidebar = (props) => {
    return (
        <div className = "app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick ={props.onAddNote}>Add</button>
            </div>

            <div className="app-sidebar-notes">
                {props.notes.map((note) => (
                    <div className = "app-sidebar-note">
                        <div className="sidebar-note-title">
                            <strong>TITLE</strong>
                            <button>Delete</button>
                        </div>

                        <p>Note preview</p>
                        <small>last modified [data]</small>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Sidebar;