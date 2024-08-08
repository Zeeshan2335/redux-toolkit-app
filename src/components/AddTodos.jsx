
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('')
  };
  return (
    <>
      <div>
        <form onSubmit={addTodoHandler}>
          <input
            type="text"
            placeholder="enter a todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="sumbit">ADD</button>
        </form>
      </div>
    </>
  );
}

export default AddTodos;
