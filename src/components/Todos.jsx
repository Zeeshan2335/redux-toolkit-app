import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  
  const todos = useSelector((state) => state?.todos?.todos);
  console.log("todos :", todos);

  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-green-600">
        {todos.map((elem) => (
          <li key={elem.id}>
            {elem.text}
            <button
              className="bg-red-600 px-2 mx-2"
              onClick={() => dispatch(removeTodo(elem.id))}
            >
              X
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todos;
