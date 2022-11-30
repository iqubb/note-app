import React from 'react';

const Sidebar = () => {
    return (
        <div className = "app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button>Add</button>
            </div>

            <div className="app-sidebar-notes">
                <div className = "app-sidebar-note">
                    <div className="sidebar-note-title">
                        <strong>TITLE</strong>
                        <button>Delete</button>
                    </div>

                    <p>Note preview</p>
                    <p> test </p>
                    <p>test2</p>
                    <small>last modified [data]</small>

                </div>
            </div>

        </div>
    );
};

export default Sidebar;