import { TodoItem } from "../TodoItem";
import "./styles.css"

function TodoItems({ todos, onDeleteTodo, onToggleTodo }) {

    if (todos.length === 0) {
        return <div>You have no todos</div>
    }

    return <ul className="TodoItems">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />)}
    </ul>
}

export { TodoItems }