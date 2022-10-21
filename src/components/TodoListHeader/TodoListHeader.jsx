import "./styles.css";

function TodoListHeader({ todosCount }) {
    return <div>
        <h2>
            What are you going to do today?
        </h2>
        <h3>You have {todosCount} todos!</h3>
    </div>
}

export { TodoListHeader }