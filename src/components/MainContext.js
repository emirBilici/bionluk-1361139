import React, {useState, useEffect} from "react";
import DoneIcon from "../img/done.png";

function MainContext({ newTodoText = 'What will you do?' }) {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState(null);

    const MakeId = (length = 8) => {
        let result = ''
            , characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
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
            deleted: 0
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
                                {todos.map(_todo => _todo.status === 1 && _todo.deleted === 0 ? (
                                    <li key={_todo.id} id={_todo.id}>
                                        {_todo.textContent}
                                        <button type="button"
                                                onClick={() => {
                                                    let clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                    setTodos([...todos, {
                                                        id: MakeId(),
                                                        status: 2,
                                                        textContent: clickedTodo.textContent,
                                                        deleted: 0
                                                    }]);

                                                    clickedTodo.deleted = 1;
                                                }}>Mark as doing</button>
                                    </li>
                                ) : '')}
                            </ul>
                        </div>
                        <div className="doings">
                            <h3 className="container-title">Doings</h3>
                            <ul>
                                {todos.map(_todo => _todo.status === 2 && _todo.deleted === 0 ? (
                                    <li key={_todo.id} id={_todo.id}>
                                        {_todo.textContent}
                                        <button type="button"
                                                onClick={() => {
                                                    let clickedTodo = todos.find(todo => todo.id === _todo.id);

                                                    setTodos([...todos, {
                                                        id: MakeId(),
                                                        status: 3,
                                                        textContent: clickedTodo.textContent,
                                                        deleted: 0
                                                    }]);

                                                    clickedTodo.deleted = 1;
                                                }}>Mark as done</button>
                                    </li>
                                ) : '')}
                            </ul>
                        </div>
                        <div className="done-s">
                            <h3 className="container-title">Done's</h3>
                            <ul>
                                {todos.map(_todo => _todo.status === 3 && _todo.deleted === 0 ? (
                                    <li key={_todo.id} id={_todo.id}>
                                        {_todo.textContent}
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