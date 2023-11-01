import { Component } from "react";
import Note from "./Note";

class ShowNotes extends Component {
    toggleNoteStatus = (e) => {
        this.props.changeStatus(e);
    };

    saveNote = (e) => {
        this.props.changeTodo(e);
    };

    deleteNote = (e) => {
        this.props.deleteToDo(e);
    };

    getNotesByStatus = (noteStatus) => {
        return (
            <>
                {this.props.todos.map((todo) => {
                    if (todo.completionStatus === noteStatus) {
                        return (
                            <>
                                <Note
                                    key={todo.id}
                                    todo={todo}
                                    noteStatus={noteStatus}
                                    toggleNoteStatus={this.toggleNoteStatus}
                                    saveNote={this.saveNote}
                                    deleteNote={this.deleteNote}
                                />
                            </>
                        );
                    }
                    return <></>;
                })}
            </>
        );
    };

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header bg-primary text-light fw-bold">
                        All Notes
                    </div>
                    <div className=" carh-header bg-secondary text-light fw-bold">
                        Pending Notes
                    </div>
                    <div className="card-body">
                        {this.getNotesByStatus(false)}
                    </div>
                    <div className=" carh-header bg-secondary text-light fw-bold">
                        Completed Notes
                    </div>
                    <div className="card-body">
                        {this.getNotesByStatus(true)}
                    </div>
                </div>
            </>
        );
    }
}

export default ShowNotes;
