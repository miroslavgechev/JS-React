import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import ToDoList from "./components/ToDoList";
import { useEffect, useState } from "react";

function App() {

    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos/')
            .then(res => res.json())
            .then(data => setTodos(Object.values(data)))
            .then(() => setIsLoading(false))
    }, [])

    const toggleTodoStatus = (id) => {
        setTodos(state => state.map(todo => todo._id === id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo))
    }

    const addNewTodo = () => {
        let lastIdNum = todos[todos.length - 1]._id.split('_')[1];
        let newId = `todo_${Number(lastIdNum) + 1}`;
        const text = prompt('Enter task name:');
        const newTodo = { _id: newId, text, isCompleted: false };

        setTodos(state => [newTodo, ...state])
    }

    return (
        <div>

            <Header />

            <main className="main">

                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={() => addNewTodo()}>+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">

                        {isLoading
                            ? <Loading />
                            : <ToDoList todos={todos} toggleTodoStatus={toggleTodoStatus} />}

                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
}

export default App;
