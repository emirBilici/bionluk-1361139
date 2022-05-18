import React, {useState, useEffect} from "react";
import DoneIcon from "../img/done.png";

function MainContext({ newTodoText = 'What will you do?' }) {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState(null);

    const MakeId = (length = 8) => {
        let result = ''
            , characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            , charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }

        return result;
    }

    const addTodo = () => {
        const newTodo = {
            id: MakeId(),
            status: 1,
            textContent: todo,
            deleted: 0,
            removed: 0
        }

        setTodos([...todos, newTodo]);
    }

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return(
        <>
            <main className="_r">
                <form onSubmit={e => e.preventDefault()}>
                    <h3>New Todo</h3>
                    <input type="text"
                           placeholder={newTodoText}
                           onChange={(e) => setTodo(e.target.value.trim())}/>
                    <button type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                addTodo();
                            }}>Create Todo</button>
                </form>

                {todos.length > 0 ? (
                    <div className="container">
                        <div className="to-do">
                            <h3 className="container-title">To-Do</h3>
                            <ul>
                                {todos.map(_todo => _todo.status === 1 && _todo.deleted === 0 && _todo.removed === 0 ? (
                                    <li key={_todo.id} id={_todo.id}>
                                        <span>{_todo.textContent}</span>
                                        <div className="buttons">
                                            <div className="icon-buttons">
                                                <button type="button"
                                                        title="Edit this to-do"
                                                        className="icon-btn"
                                                        onClick={e => {
                                                            e.preventDefault()

                                                            let newValue = prompt(newTodoText)
                                                                , clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                            setTodos([...todos, {
                                                                id: MakeId(),
                                                                status: 1,
                                                                textContent: newValue,
                                                                deleted: 0,
                                                                removed: 0
                                                            }])

                                                            clickedTodo.deleted = 1;

                                                        }}>
                                                    <span className="material-symbols-outlined">edit</span>
                                                </button>
                                                <button type="button"
                                                        title="Delete this to-do"
                                                        className="icon-btn delete"
                                                        onClick={() => {
                                                            let clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                            setTodos([...todos]);

                                                            clickedTodo.removed = 1;
                                                            clickedTodo.deleted = 1;
                                                        }}>
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                            <button type="button"
                                                    className="right-btn"
                                                    onClick={() => {
                                                        let clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                        setTodos([...todos, {
                                                            id: MakeId(),
                                                            status: 2,
                                                            textContent: clickedTodo.textContent,
                                                            deleted: 0,
                                                            removed: 0
                                                        }]);

                                                        clickedTodo.deleted = 1;
                                                    }}>Mark as doing</button>
                                        </div>
                                    </li>
                                ) : '')}
                            </ul>
                        </div>
                        <div className="doings">
                            <h3 className="container-title">Doings</h3>
                            <ul>
                                {todos.map(_todo => _todo.status === 2 && _todo.deleted === 0 && _todo.removed === 0 ? (
                                    <>
                                        <li key={_todo.id} id={_todo.id}>
                                            <span>{_todo.textContent}</span>
                                            <div className="buttons">
                                                <div className="icon-buttons">
                                                    <button type="button"
                                                            className="icon-btn"
                                                            onClick={e => {
                                                                e.preventDefault()

                                                                let newValue = prompt(newTodoText)
                                                                    , clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                                setTodos([...todos, {
                                                                    id: MakeId(),
                                                                    status: 2,
                                                                    textContent: newValue,
                                                                    deleted: 0,
                                                                    removed: 0
                                                                }])

                                                                clickedTodo.deleted = 1;

                                                            }}>
                                                        <span className="material-symbols-outlined">edit</span>
                                                    </button>
                                                    <button type="button"
                                                            className="icon-btn delete"
                                                            onClick={() => {
                                                                let clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                                setTodos([...todos]);

                                                                clickedTodo.removed = 1;
                                                                clickedTodo.deleted = 1;
                                                            }}>
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                                <button type="button"
                                                        className="right-btn"
                                                        onClick={() => {
                                                            let clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                            setTodos([...todos, {
                                                                id: MakeId(),
                                                                status: 3,
                                                                textContent: clickedTodo.textContent,
                                                                deleted: 0,
                                                                removed: 0
                                                            }]);

                                                            clickedTodo.deleted = 1;
                                                        }}>Mark as done</button>
                                            </div>
                                        </li>
                                    </>
                                ) : '')}
                            </ul>
                        </div>
                        <div className="done-s">
                            <h3 className="container-title">Done's</h3>
                            <ul>
                                {todos.map(_todo => _todo.status === 3 && _todo.deleted === 0 && _todo.removed === 0 ? (
                                    <li key={_todo.id} id={_todo.id}>
                                        <span>{_todo.textContent}</span>
                                        <div className="buttons">
                                            <div className="icon-buttons">
                                                <button type="button"
                                                        className="icon-btn delete done-delete"
                                                        onClick={() => {
                                                            let clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                            setTodos([...todos]);

                                                            clickedTodo.removed = 1;
                                                            clickedTodo.deleted = 1;
                                                        }}>
                                                    <span className="material-symbols-outlined">delete</span> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ) : '')}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="no-task">
                        There is nothing to do <img src={DoneIcon} width="40" height="40" alt=""/>
                    </div>
                )}
            </main>
        </>
    );
}

export default MainContext;