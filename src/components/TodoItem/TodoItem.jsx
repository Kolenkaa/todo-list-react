import "./styles.css"

function TodoItem({ todo, onDeleteTodo, onToggleTodo })  {
    const className = todo.completed ? "TodoItem--completed" : "";

    return <li className={className}>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggleTodo(todo.id)} />
        <p>{todo.name}</p>
     <button onClick={() => onDeleteTodo(todo.id)}>x</button>
    </li>
    
}

export { TodoItem }