import { useEffect, useState } from "react";

type TodoListItem = {
  id: number;
  text: string;
  completed: boolean;
  showDelete: boolean;
};

export const TodoList = () => {
  const [todos, settodos] = useState<TodoListItem[]>([]);

  const sampleTodos: TodoListItem[] = [
    { id: 1, text: "loss of appetite", completed: false, showDelete: false },
    { id: 2, text: "Sore Throat from 2 days", completed: false, showDelete: false },
    { id: 3, text: "Give Insulin Daily at 1200", completed: false, showDelete: false },
  ];

  useEffect(() => {
    settodos(sampleTodos);
  }, []);

  const addTodo = (formData: FormData) => {
    const todoText = formData.get("addTodoText");
    settodos([...todos, { id: Date.now(), text: todoText as string, completed: false, showDelete: false }]);
  };

  const strikeTodo = (id: number) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-main col-5">
      <p>Todo List / Notes</p>

      <form action={addTodo} className="add-todo-wrapper">
        <input type="text" name="addTodoText" required placeholder="Add Item" />
        <button type="submit" className="btn">
          <i className="fi fi-br-add icon glass-green-btn  "></i>
          {/* Add */}
        </button>
      </form>

      <div className="todos-list">
        <ul>
          {todos.map((todo) => (
            <li className={`todo-item ${todo.completed ? "todo-completed" : ""}`} key={todo.id}>
              <p onClick={() => strikeTodo(todo.id)}>{todo.text}</p>
              <button className="  glass-red-btn" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
