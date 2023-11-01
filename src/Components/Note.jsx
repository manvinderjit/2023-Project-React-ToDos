import { Component } from "react";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditingTaskID: false,
            title: this.props.todo.title,
            description: this.props.todo.description,
        };
    }

    editNote = (e) => {
        this.setState({ isEditingTaskID: true });
    };

    changeNoteDetails = (e) => {
        if (e.target.name === "noteTitle") {
            this.setState({
                ...this.state,
                title: e.target.value,
            });
        }
        if (e.target.name === "noteDescription") {
            this.setState({
                ...this.state,
                description: e.target.value,
            });
        }
    };

    saveNote = (e) => {
        this.props.saveNote(e);
        this.setState({ isEditingTaskID: false });
    };

    deleteNote = (e) => {
        this.props.deleteNote(e);
    };

    toggleNoteStatus = (e) => {
        this.props.toggleNoteStatus(e);
    };

    render() {
        return (
            <>
                <div key={this.props.todo.id}>
                    {this.state.isEditingTaskID === false ? (
                        <>
                            <h5 className="card-title">{this.state.title}</h5>
                            <p className="card-text">
                                {this.state.description}
                            </p>
                            <div className="container">
                                <button
                                    type="button"
                                    onClick={this.editNote}
                                    className="btn btn-primary mb-3 fw-bold"
                                    id={this.props.todo.id}
                                >
                                    Edit Note
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <form
                                onSubmit={this.saveNote}
                                id={this.props.todo.id}
                            >
                                <div className="row-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="noteTitle"
                                        name="noteTitle"
                                        value={this.state.title}
                                        onChange={this.changeNoteDetails}
                                    />
                                </div>
                                <div className="row-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="noteDescription"
                                        name="noteDescription"
                                        value={this.state.description}
                                        onChange={this.changeNoteDetails}
                                    />
                                </div>
                                <div className="container">
                                    <button
                                        type="submit"
                                        className="btn btn-primary mb-3 fw-bold"
                                    >
                                        Save Note
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                    <div className="container">
                        <button
                            type="button"
                            onClick={this.toggleNoteStatus}
                            className="btn btn-primary mb-3 fw-bold"
                            id={this.props.todo.id}
                        >
                            {this.props.todo.completionStatus === false
                                ? "Mark Complete"
                                : "Mark Pending"}
                        </button>
                    </div>

                    <div className="container">
                        <button
                            type="button"
                            onClick={this.deleteNote}
                            id={this.props.todo.id}
                            className="btn btn-primary mb-3 fw-bold"
                        >
                            Delete Note
                        </button>
                    </div>
                    <hr className="bg-dark border-2 border-to" />
                </div>
            </>
        );
    }
}

export default Note;
