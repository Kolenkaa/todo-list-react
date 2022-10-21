import { useRef, useState, useEffect } from "react";
import "./styles.css"

function TodoListForm({
   onAddTodo
}) {
    const [todoName, setTodoName] = useState("");

    function onSubmit (event) {
        event.preventDefault();
        onAddTodo(todoName);
        setTodoName("");
    }

    return <form className="TodoListForm" onSubmit={onSubmit}>
        <input placeholder="Type something what you want to do..." className="TodoListForm__input" value={todoName} onChange={(event) => {
            setTodoName(event.target.value)
        }}/>
        <button className="TodoListForm__button" type="submit" disabled={todoName.length < 2}>Add todo</button>
    </form>
}

export { TodoListForm };