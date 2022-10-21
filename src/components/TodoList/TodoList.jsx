import { useState } from "react";
import { TodoListHeader } from "../TodoListHeader";
import { TodoListForm } from "../TodoListForm";
import { TodoItems } from "../TodoItems";

import "./styles.css";

const INITIAL_TODOS = [
    {
        id: 1,
        name: "Todo #1",
        completed: true
    },
    {
        id: 2,
        name: "Todo #2",
        completed: false
    }
]

function TodoList() {
    const [todos, setTodos] = useState(INITIAL_TODOS);

    console.log(todos, 'todos')

    const handleAddTodo = (todoName) => {
        const newTodo = {
            id: Date.now(),
            name: todoName,
            completed: false
        };
        
        setTodos([...todos, newTodo]);
    }

    const handleDeleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    const handleToggleTodo = (todoId) => {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);

        const currentTodo = todos[todoIndex];

        const newTodo = {
            ...currentTodo,
            completed: !currentTodo.completed
        }

        const newTodos = [...todos.slice(0, todoIndex), newTodo, ...todos.slice(todoIndex + 1)]

        setTodos(newTodos)
    }


    return <main>
        <TodoListHeader todosCount={todos.length} />
        <TodoListForm onAddTodo={handleAddTodo} />
        <TodoItems todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
    </main>
}

export { TodoList }