import { Component } from "react";

class ShowNotes extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditingTaskID: null };
    }

    toggleNoteStatus = (e) => {
        this.props.changeStatus(e);
    };

    editNote = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        this.setState({ isEditingTaskID: e.target.id })
        console.log(this.state.isEditingTaskID);
        this.forceUpdate();
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
                            <div key={todo.id}>
                                {this.state.isEditingTask !== todo.id ? (
                                    <>
                                        <h5 className="card-title">
                                            {todo.title}
                                        </h5>
                                        <p className="card-text">
                                            {todo.description}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="row-auto">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="noteTitle"
                                                name="noteTitle"
                                                value={todo.title}
                                            />
                                        </div>
                                        <div className="row-auto">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="noteDescription"
                                                name="noteDescription"
                                                value={todo.description}
                                            />
                                        </div>
                                    </>
                                )}
                                <div className="container">
                                    <button
                                        type="button"
                                        onClick={this.toggleNoteStatus}
                                        className="btn btn-primary mb-3 fw-bold"
                                        id={todo.id}
                                    >
                                        {todo.completionStatus === false
                                            ? "Mark Complete"
                                            : "Mark Pending"}
                                    </button>
                                </div>
                                {noteStatus === false ? (
                                    <div className="container">
                                        <button
                                            type="button"
                                            onClick={this.editNote}
                                            className="btn btn-primary mb-3 fw-bold"
                                            id={todo.id}
                                        >
                                            Edit Note
                                        </button>
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div className="container">
                                    <button
                                        type="button"
                                        onClick={this.deleteNote}
                                        id={todo.id}
                                        className="btn btn-primary mb-3 fw-bold"
                                    >
                                        Delete Note
                                    </button>
                                </div>
                                <hr className="bg-dark border-2 border-to" />
                            </div>
                        );
                    }
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
