import { Component } from "react";
import AddNote from "./Components/AddNote";
import ShowNotes from "./Components/ShowNotes";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Do Assignment",
                    description: "Do the assignment, it is important!",
                    completionStatus: false,
                },
                {
                    id: 2,
                    title: "Pay Bills",
                    description: "Pay the bills necessarily.",
                    completionStatus: false,
                },
                {
                    id: 3,
                    title: "Buy Grocery",
                    description: "Buy grocery or go hungry!",
                    completionStatus: true,
                },
                {
                    id: 4,
                    title: "Mow Lawn",
                    description: "Must mow the lawn.",
                    completionStatus: true,
                },
            ],
        };
    }

    handleToggleStatus = (e) => {
        e.preventDefault();
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === Number(e.target.id)) {
                    return {
                        ...todo,
                        completionStatus:
                            todo.completionStatus === false ? true : false,
                    };
                } else {
                    return todo;
                }
            }),
        });
    };

    handleChangeTodo = (e) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === Number(e.target.id)) {
                    return {
                        ...todo,
                        title: e.target.title.value,
                        description: e.target.description,
                    };
                } else {
                    return todo;
                }
            }),
        });
    }

    handleDeleteTodo = (e) => {
        e.preventDefault();
        this.setState({
            todos: this.state.todos.filter((todo) => {
                if (todo.id !== Number(e.target.id)) {
                    return todo;
                }
            }),
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newToDo = {
            id: this.state.todos.length + 1,
            title: e.target.noteTitle.value,
            description: e.target.noteDescription.value,
            completionStatus: false,
        };
        this.setState((state) => ({
            todos: state.todos.concat(newToDo),
        }));
    };

    render() {
        return (
            <div className="container text-center w-25">
                <AddNote onSubmit={this.handleSubmit} />
                <ShowNotes
                    todos={this.state.todos}
                    changeStatus={this.handleToggleStatus}
                    changeTodo={this.handleChangeTodo}
                    deleteToDo={this.handleDeleteTodo}
                ></ShowNotes>
            </div>
        );
    }
}

export default App;
