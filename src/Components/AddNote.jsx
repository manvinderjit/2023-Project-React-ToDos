import { Component } from "react";

class AddNote extends Component {
    addToDo = (e) => {
        this.props.onSubmit(e);
    };

    render() {
        return (
            <div>
                <div className="card-header bg-primary text-light fw-bold fs-5">
                    Add To Do
                </div>
                <hr className="bg-dark border-2 border-to" />
                <form
                    className="row justify-content-center gap-3"
                    onSubmit={this.addToDo}
                >
                    <div className="row-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="noteTitle"
                            name="noteTitle"
                            placeholder="Add Note Title Here"
                        />
                    </div>
                    <div className="row-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="noteDescription"
                            name="noteDescription"
                            placeholder="Add Note Description Here"
                        />
                    </div>
                    <div className="row-auto">
                        <button
                            type="submit"
                            className="btn btn-primary mb-3 fw-bold"
                        >
                            Add Note
                        </button>
                    </div>
                </form>
                <hr className="bg-dark border-2 border-to" />
            </div>
        );
    }
}

export default AddNote;
